# Handoff report — Birdie Figma redesign

Phase 1 (audit-only) and Phase 2 (remediation) were both run by the successor agent on 2026-11-02.
No git write operations, no remote/deploy operations, no Figma MCP calls, no dependency installs.
`sharp` (already present in `node_modules`) was used for image optimization.

Evidence sources: `git status`/`git diff` against `HEAD`, the working tree, `docs/figma-audit/*`,
`docs/figma-audit/evidence/*`, `docs/figma-audit/figma/*`, the Figma CSS export (now at
`design-references/css.txt`), `public/assets/figma-2026/*`, fresh `npm run build`, and
`scripts/visual-qa.py` renders (see `docs/figma-audit/qa/`).

---

## 0. Remediation pass (Phase 2) — what was fixed

All fixes below were verified against a production build and full-page browser renders at
1440/768/393 (`docs/figma-audit/qa/`), not just against the build passing.

| Finding | Action | Verified evidence |
| --- | --- | --- |
| **D1** — 8 broken venue icons | `venue-website.astro` `steps` icon keys `book/config/live/revenue` → `calendar/sliders/phone/grid` (the homepage `setupIcons` source of truth; same walkthrough→live→revenue meaning) | `dist/venue-website/index.html` now references only existing SVGs; render shows all journey + setup icons |
| **D3** — badge via shared-data mutation | Removed the `PRICING.map(...)` badge rewrite; added a `highlightBadge` prop to `PricingCards.astro` that renders the contextual badge on the highlighted card and suppresses tier 0's badge only when a later tier is the focus | Venue render: none / "This add-on" / "Best ROI"; `/pricing/` render unchanged: "Most popular" / (none) / "Best ROI" |
| **D4** — venue hero mask risk | Confirmed by render that `mask-composite: intersect` fills the front phone correctly; added `-webkit-mask-composite: source-in` fallback for WebKit | `venue-website-1440.png` hero shows the booking-receipt screen inside the front phone, not a black clip |
| **D5** — homepage screen squash | `.hm-pp__screen img` `object-fit: fill` → `cover` (matches the pre-redesign behavior; the new frame slot is aspect 0.31 vs the 0.46 `demo-*-mobile` screens, so `fill` squashed them ~32%) | `home-1440.png` + `home-393.png` show the phone calendar screen proportional, no distortion |
| **D6** — tabs init | **Misdiagnosis in Phase 1.** `tabs.ts:52` already calls `select()` at setup, so the default tab + `onSelect` (image swap) run on load. No code change made | Live DOM (via QA subagent): `Owner dashboard` `is-on`/`aria-selected=true`, `#pp-img` populated, before any click |
| **§4 perf** — oversized homepage assets | Generated `.webp` siblings with `sharp` and repointed references; originals kept (not deleted) | hero 287→16 KB ×2, frame 1883→37 KB (2200px, alpha kept), screen 370→45 KB, mask 315→21 KB |
| **§4 publish** — raw CSS in `dist` | Moved `public/design-refrences/css.txt` → root `design-references/css.txt`; updated `scripts/figma-audit.py` + doc path mentions | `dist/design-refrences` gone; `figma-audit.py` re-ran, checksum `fe5547fc…` unchanged (file intact) |

**Build/QA after remediation:** `npm run build` → 105 pages, zero warnings. `visual-qa.py --all`
→ 315 checks, **0 broken links, 0 issues** (no page errors, no broken images, no overflow, single
`<main>` per page).

**Mobile hero (follow-up, after user supplied the Figma mobile frame `2049:113767` render):**
the venue `ProductHero` mobile offset was retuned from `mobileScale .55 / X -485 / Y 340` to
`.6 / -470 / 20`, which lifts the phone composition, centres it right, and fills the band —
verified against a 393px headless render. The Figma mobile text also shows the FAQ heading as
"Questions owners ask about **door access**" — a leftover template placeholder; we keep the
correct "…about booking". Rebuild + full QA re-run after the change: still 105 pages, 0 issues.

**Still open after Phase 2:** D2 (venue route is still not linked from nav/footer — out of this
task's scope), D7/D8/D9 (minor a11y/typography items, not addressed), interactive keyboard/touch QA
(IDE Browser panel was closed → viewport 0×0, so click/keyboard flows were verified only via DOM,
not live interaction), and the venue-hero raw PNGs (4.2 MB + 1.4 MB) plus the now-unused homepage
PNGs still live in `public/` and are still copied into `dist/`.

---

## 1. Headline status (Phase 1 audit — historical)

| Item | Status |
| --- | --- |
| `npm run build` | **PASSES** — 105 pages, zero warnings, `preview-guard` clean |
| Nested `<main>` landmark violations | Fixed (zero `<main>` outside `BaseLayout`) |
| New route `/venue-website/` | Built and in sitemap; had 4 confirmed 404 asset URLs (fixed in Phase 2) |
| Post-edit browser/visual QA | Not run in Phase 1 (run and clean in Phase 2) |
| `docs/figma-audit/session-state.md` | Accurate on what was done; silent on defects found here |
| Remaining target pages | 2 routes not started (`/features/bay-agent/`, `/book-a-demo/`) |
| Figma visual acceptance | Still externally blocked by Starter-plan MCP quota |

The previous agent's self-reporting was honest. Every item marked "not yet built or viewed" in
`session-state.md` is genuinely unbrowsed, and the one item it explicitly warned about (invented
setup-icon filenames on the new page) is a real, reproducible defect.

---

## 2. Verified completed work

All of the following were read in the working tree and confirmed present, not merely claimed.

### Shared foundations
- `src/layouts/BaseLayout.astro` — skip-to-content link + `<main id="main-content" tabindex="-1">`.
- `src/styles/ui.css` — global `[hidden] { display:none !important }`, `:focus-visible` ring,
  `.bd-skip`, `.bd-sr-only`, global reduced-motion override, header open-state backgrounds.
- `src/styles/tokens.css` — added `.t-h2` and a `max-width: 899px` mobile heading scale
  (h1 40, h2 32, h3 24).
- `src/scripts/tabs.ts` — new shared ARIA tabs utility (roles, generated IDs, `aria-controls`,
  `aria-selected`, roving `tabIndex`, hidden panels, arrow/Home/End keys, optional vertical axis,
  `onSelect` hook). Wired into `FeatureTabs.astro`, `SideTabs.astro` (vertical unless `pf-side--pills`),
  and the two homepage tab groups, replacing four duplicated inline scripts.
- `src/components/Header.astro` — mobile panel now uses `hidden` plus `is-open`; close on link
  click, Escape (returns focus to the toggle), outside click, focus escape (`focusout` + rAF), and
  viewport resize to ≥900px; `aria-expanded`/`aria-label` sync; `aria-current="page"` on desktop nav.
- `src/scripts/shader/init.ts` / `runtime.ts` — reduced-motion short-circuit in `initShaders`,
  runtime preference re-check, `IntersectionObserver` offscreen suspension, `visibilitychange` pause.

### Landmark and accessibility conversions
- `<main class="hm">` → `<div class="hm">` in `index.astro`, `features.astro`, `revenue.astro`,
  `sms.astro` and all five `features/*.astro` routes. Verified: no `<main>` remains outside the layout.

### Homepage (`src/pages/index.astro`, `src/styles/home.css`)
- Hero image switched to `home-hero-desktop-imgHeroImage.png` with a `max-width: 900px`
  `<source>` for the mobile crop.
- Product-preview phone frame/screen switched to `home-product-context-imgWhiteRight.png` and
  `…imgPasteYourContent1.png`; `.hm-pp__screen` mask now uses `…imgPasteYourContent.png`;
  frame `scaleX(-1)` (desktop and mobile), screen-box percentages corrected, `skewY(-6deg)` removed.
- Accordion items gained `type="button"` and `aria-expanded`; hero shadow `backdrop-filter: blur(20px)`
  desktop / `6.858px` mobile; mobile hero crop and paragraph/stat widths corrected; static dot-pattern
  shader fallback and `.hm-noise { opacity:.18 }` added; new `max-width: 374px` hero rules.

### Forms, lead capture, clipboard
- `BookingWizard.astro` — `aria-pressed` on interest options (markup + click), `aria-disabled` on the
  gating CTA, Calendly `postMessage` origin guard.
- `book-demo.astro` — Calendly `postMessage` origin guard.
- `demo.astro` — `aria-pressed` on interest buttons (markup + click), error paragraph gains `role="alert"`.
- `ArticleLayout.astro`, `contact.astro` — clipboard promise-rejection handling and `aria-live` on the
  copy control.

### New venue-website page
- `src/pages/venue-website.astro`, `src/components/product/WebsiteHeroArt.astro`,
  `src/styles/website.css` created; `PricingCards.astro` gained an optional `highlight` prop
  (default `0`, preserving `pricing.astro` behavior). Builds successfully; all component props used
  by the page (`ProductHero` `shadow`/`mobileX`/`mobileScale`/`mobileY`, `ComparisonTable` `colLabel`,
  `Faq` `open`/`balls`/`round`, `Cta` `secondary`) were verified against the components' `Props`
  interfaces. All intro benefit icons and `website-intro-context-imgImage97.png` exist.

### Documentation and tooling
- Seven audit documents plus `evidence/` (full target metadata 2.6 MB, frame index, section headings,
  variables, per-context dumps, downloaded-asset manifest) and `figma/` screenshots
  (home desktop/mobile, website desktop).
- `scripts/figma-audit.py` and `scripts/visual-qa.py` (Playwright; 1440/768/393; link, image, overflow,
  pageerror checks). Baseline QA already run: 312 checks, `docs/figma-audit/baseline/report.json`.
- `public/assets/figma-2026/` — 43 downloaded leaf assets (10.9 MB).
- `public/design-refrences/css.txt` — 13.5 MB read-only Figma CSS export, checksum recorded in
  `evidence/reference-summary.json` (sha256 `fe5547fc…`, 976,363 lines, 179/179 frames matched).

---

## 3. Defects found in the working tree

### D1 — HIGH: `/venue-website/` requests four SVGs that do not exist
`venue-website.astro` hardcodes icon keys `book`, `config`, `live`, `revenue` into
`/assets/home/setup-icon-${icon}.svg`. Only `calendar`, `door`, `grid`, `phone`, `sliders` exist.
Confirmed in the built output (`dist/venue-website/index.html` contains all four missing URLs).
Eight visible icons render broken: four in `.ws-journey`, four in `.ws-setup`.
This is the exact risk `session-state.md` line 80-82 flagged; it was never resolved.
The homepage source of truth is `setupIcons = ['calendar', 'sliders', 'phone', 'grid']`
(`index.astro` line 42) which maps semantically to walkthrough → configure → live → revenue.

### D2 — MEDIUM: `/venue-website/` is an orphan route
No navigation, footer, pricing, product or marketing page links to it. It is reachable only by direct
URL and through the sitemap. `session-state.md` "immediate next action 3" was not done.

### D3 — MEDIUM: `PricingCards` badge suppression is baked into page data, not the component
`venue-website.astro` line 54 overwrites tier 0's badge (`'Most popular'` → `''`) to move emphasis to
the highlighted tier. The component renders `t.badge && <span class="cm-badge">`, so tier 0 on the new
page shows a dark highlighted card with no badge while `/pricing/` still shows `Most popular` on the
same tier. Decide the intended treatment explicitly (e.g. a `highlightBadge`/`showBadges` prop) rather
than mutating shared pricing data per page. Pricing *amounts* are untouched — `$197/mo` and
`Custom pricing` still come from `src/data/product.ts`, so no factual regression.

### D4 — MEDIUM (unverified, must be viewed): hero mask composition in `website.css`
`.ws-art__front-screen > div` applies a two-layer mask with negative positions
(`-124.095px -16.785px`, `-478.267px -114px`) and `mask-composite: intersect` inside a
556×787 box. Two risks: (a) `mask-composite` is the non-prefixed standard property with no
`-webkit-mask-composite` counterpart, so older WebKit silently falls back to `add` union;
(b) a 918px mask layer offset by −478px inside a 556px box may clip the subject entirely.
`website.css` line 1-2 also admits the mobile structure was derived from CSS only — no mobile
screenshot was ever retrieved.

### D5 — MEDIUM (unverified, must be viewed): homepage `.hm-pp__screen` construction
- The mask source is `home-product-context-imgPasteYourContent.png`, a **screenshot**, not a purpose-made
  alpha mask. Masking by an opaque RGB image relies on luminance/alpha interpretation that was not confirmed.
- `object-fit` was changed from `cover` to `fill` — the container is a fixed percentage box, so every
  screen image whose intrinsic ratio differs from the box is now stretched. Only the first item was
  replaced with the new Figma asset; the other six still point at older `demo-*-mobile-*.webp` files
  (confirmed present) and will now distort if their ratio differs.
- `skewY(-6deg)` was removed on the claim of "no screen skew" in the saved context; this is an
  interpretation, not a screenshot-verified fact.
- The frame art was mirrored with `scaleX(-1)`; whether the target actually shows a left-tilted phone
  requires the homepage screenshot comparison (`docs/figma-audit/figma/home-desktop.png`).

### D6 — LOW: homepage default tab state is no longer synced on load
The old inline script called `pick(first)` on load. The new code passes `onSelect`, which `tabs.ts`
invokes during `select()` at setup, but `select()` is only ever called from the click/keydown handler,
so it never runs at initialization. Result: on page load the first accordion item's `aria-expanded`
(added server-side) and the panel `hidden` states rely entirely on static markup, and the visual
`is-open`/image pairing is only corrected after the first interaction. Not a build failure; confirm in
browser and, if needed, call `select(0)` (or expose an initial index) in `tabs.ts`.

### D7 — LOW: `aria-orientation` is applied to a non-scrollable tablist
`tabs.ts` sets `aria-orientation` always. It is only meaningful on scrollable widgets. Also, arrow-key
handling exists but the visible `.hm-tabs`/`.pf-side__nav` markup places panels outside the tablist,
which is acceptable, but should be exercised by the pending keyboard QA.

### D8 — LOW: mobile menu close logic may fire during normal use
`Header.astro` closes the panel on any `focusout` where focus lands outside `header` (via rAF) and on
any `document` click outside `header`. Tap-to-scroll or focusing a browser chrome element can close the
panel unexpectedly. Needs the keyboard/touch pass listed in `session-state.md` action 5.

### D9 — LOW: Figma display-font question is still open
`evidence/reference-summary.json` font counts: `DM Sans` 11,004, `Source Serif 4` 1,051+7+…,
`Season Sans` 20, `Inter` 53. The project uses DM Sans + Source Serif 4 self-hosted, which is
consistent with the dominant weights, but `session-state.md` line 114 notes the rendered body text
looked slightly bolder than Figma. Uninvestigated; typography weights remain unverified.

### No duplicate declarations or syntax errors found
Diffed files were read in full. `PricingCards.astro` has a single `Props` interface with the new
`highlight?: number` and a default that preserves `pricing.astro`. `tabs.ts` has one module-level
`sequence` counter. `home.css`/`website.css` additions are scoped (`.hm-*`, `.ws-*`) with no selector
redefinition of an existing rule. `demo.astro` retains exactly one `#demo-error` element and one
hidden `interests` input. No stray merge markers, no orphaned imports of removed code.

---

## 4. Performance and payload risks (measured)

| Asset | Size | Note |
| --- | --- | --- |
| `home-product-context-imgWhiteRight.png` | 1,883 KB, 4096×3072 | now the homepage phone-frame art (replaces `phone-frame.webp`) |
| `home-hero-desktop-imgHeroImage.png` | 287 KB, 1024×587 | LCP hero, `fetchpriority="high"`, replaces `hero-image.webp` (20 KB) |
| `home-hero-mobile-imgHeroImage.png` | 287 KB, 1024×587 | same desktop-resolution file served as the `max-width:900px` source |
| `home-product-context-imgPasteYourContent1.png` | 370 KB | default product-preview screen |
| `home-product-context-imgPasteYourContent.png` | 315 KB | used as a CSS mask |
| `public/assets/figma-2026/` total | 10.9 MB | copied verbatim into `dist/` |
| `public/design-refrences/css.txt` | 13.5 MB | **present at `dist/design-refrences/css.txt`** — a raw Figma CSS export published at a guessable public URL |
| `dist/` total | 41.4 MB | |

Additional notes: `website-hero-context-imgConfirmPay1BookingDarkMode.png` is 4.2 MB and is referenced
by `WebsiteHeroArt.astro`; `…img1.png` is 1.4 MB and also referenced. The `session-state.md` warning
about not bloating `public/` was raised but not acted on. Publishing the 13.5 MB reference dump is a
deliberate decision to confirm with the user, not an automatic removal.

---

## 5. Reconciliation of `session-state.md` against actual code

| `session-state.md` claim | Reality |
| --- | --- |
| All "Source edits ALREADY MADE" bullets | Verified present in the working tree |
| "Not yet built or tested" | **Stale** — it now builds (105 pages). Still unbrowser-tested |
| "New venue website setup icon filenames MUST check… chosen names might not exist" | **Confirmed defect D1**; still unfixed |
| "Hero mask construction must be visually compared" | Still outstanding (D4, D5) |
| "MUST compare visual because untested approximation" (shader fallback, noise) | Still outstanding |
| "Added venue-website.astro… Not yet built or viewed!" | Built; not viewed; not linked (D2) |
| "PricingCards gains optional highlight index (default 0)" | Correct; but the per-page badge mutation is an undocumented side effect (D3) |
| Baseline build "104 pages" | Current build is 105 — the delta is exactly `venue-website` |
| "converted nested `<main>` … in home, features, revenue, sms, all five feature routes" | Verified complete |
| Immediate next action 1 (build + view new page) | Build half done; viewing not done |
| Immediate next actions 2–7 | Not done |
| `known-gaps.md` line 31 "Build and browser QA have not yet run" | **Stale** — baseline build and 312-check baseline QA both ran before this |

`docs/figma-audit/` contains no `handoff-report.md` before this file. `session-state.md` is the only
progress journal; the other six documents are still discovery-phase artefacts and several carry a
"discovery in progress" status header.

---

## 6. Remaining work against the target section

From `figma-inventory.md` (all 36 page/template rows are mapped to local routes):

**Not implemented:**
1. `/features/bay-agent/` — Figma `2049:100705` / `2049:101423`. The design body is a duplicated,
   unfinished booking page with stray SMS opt-in content under "What it does". `session-state.md`
   explicitly forbids fabricating a verified design here. Real Bay Agent facts already exist in
   `src/data/features.ts` and the `/features/` page (its Bay Agent block). Options: a clearly documented
   adaptation from existing data, or record the route as blocked pending restored Figma access.
2. `/book-a-demo/` — light demo form variant `2049:104366` / `2049:104461`, error states
   `2049:104555` / `2049:104650`. Per the plan, extract the existing `demo.astro` form into a reusable
   component/page shell rather than duplicating the submit handler. `/demo/` (dark landing),
   `/book-demo/` (Calendly) and the `lpbookingsystem`/`lpadvertising` wizards stay as they are.

**Implemented but unfinished:**
3. `/venue-website/` — fix D1 icons, resolve D4 mask, add an entry link, decide D3 badge treatment,
   then desktop/mobile/tablet visual comparison against `figma/website-desktop.png`.
4. Homepage hero + product preview — visual comparison (D5), asset weight decision (§4).
5. Navigation/footer/pricing links to new pages (D2).

**Verification not started:**
6. Post-change browser QA: `python scripts/visual-qa.py --all --phase qa --screenshots`, then compare
   against `docs/figma-audit/baseline/`. `/venue-website/` is already in that script's route list.
7. Interaction QA as listed in `session-state.md` action 5 — mobile menu keyboard path, tabs arrow keys,
   accordions, Glance carousel, calculators, wizard with intercepted `/api/lead` and `/api/booking`,
   demo success/error, Calendly spoof-origin rejection, clipboard, reduced motion.
8. Tablet (768/1024) interpolation — no tablet frames exist in Figma, so this is reasoned work and must
   be documented as such.
9. Documentation refresh: `known-gaps.md`, `figma-inventory.md` discovery columns,
   `implementation-plan.md`, and `session-state.md` all still carry pre-implementation statuses.

**Blocked externally:** remaining Figma screenshots/contexts and any new asset exports. Full visual
acceptance cannot be honestly claimed for any route other than home (desktop/mobile) and venue-website
(desktop), which are the only frames with saved renders.

---

## 7. Recommended next implementation steps (ordered)

1. **Fix D1** — replace the four invented keys in `venue-website.astro` `steps` (and therefore the
   `.ws-journey` icons that reuse `steps[i][2]`) with real filenames from
   `public/assets/home/setup-icon-*.svg`. Suggested mapping: `calendar`, `sliders`, `phone`, `grid`
   to mirror the homepage's `setupIcons`. Then rebuild and confirm
   `Select-String -Pattern "setup-icon-[a-z]*\.svg" dist\venue-website\index.html` resolves to files
   that exist in `dist/assets/home/`.
2. **View the new page before anything else visually** — `npm run dev`, open `/venue-website/` at
   1440, 768, 393 and compare to `docs/figma-audit/figma/website-desktop.png`. This is the only route
   with a full target render available, so it is the one place real fidelity can be certified.
3. **Resolve D4** — if the hero art is wrong, prefer an explicit CSS `clip-path`/rounded-rect mask or a
   purpose-made mask asset over stacking a 918px screenshot-derived mask with negative offsets; add a
   `-webkit-mask-composite: source-in` companion if the layered mask is kept.
4. **View the homepage hero and product preview (D5)** — decide whether the screenshot-as-mask and
   `object-fit: fill` approach holds for the six remaining `demo-*-mobile-*.webp` screens. If not,
   revert to `cover` plus a real mask, or keep the previous `phone-frame.webp`/`phone-mask.png`
   composition and treat the Figma art as reference only.
5. **Optimize or substitute the new hero assets (§4)** — the LCP image went from ~20 KB to 287 KB and
   the frame art to 1.9 MB. Recompress (or crop the mobile source to its actual display box) before
   any deploy decision. Do not silently swap in a different visual.
6. **Fix D3** — move badge/highlight treatment into `PricingCards` props; stop rewriting `PRICING`
   badges at the page level.
7. **Link `/venue-website/` (D2)** — add it where the Booking + Website add-on is contextually correct
   (pricing tier, product/features, footer) without dropping existing SEO links.
8. **Address D6/D7/D8 in one interaction pass** — initialise the default tab index, drop the
   unconditional `aria-orientation`, and re-test the mobile menu close conditions with keyboard and
   touch emulation.
9. **Confirm the `public/design-refrences/css.txt` publishing decision with the user** before leaving
   13.5 MB of raw Figma output reachable from the built site; also confirm whether the 10.9 MB
   `figma-2026` folder should move to `docs/figma-audit/evidence/` for the assets nothing references.
   Do not delete anything without asking — the previous agent was explicitly told not to overwrite work.
10. **Run the QA phase** and update `known-gaps.md`, `figma-inventory.md`, `implementation-plan.md`,
    `session-state.md`, and this report. Never mark full Figma completion.
11. **Then** the two missing routes in §6, treating Bay Agent as a documented adaptation or as blocked.

---

## 8. Working-tree inventory (for the record)

Modified (25): `src/components/Header.astro`, `src/components/booking/BookingWizard.astro`,
`src/components/product/FeatureTabs.astro`, `src/components/product/PricingCards.astro`,
`src/components/product/SideTabs.astro`, `src/components/sections/ArticleLayout.astro`,
`src/components/sections/Glance.astro`, `src/layouts/BaseLayout.astro`, `src/pages/book-demo.astro`,
`src/pages/contact.astro`, `src/pages/demo.astro`, `src/pages/features.astro`,
`src/pages/features/{bay-booking,door-access,leagues-events,memberships,mobile-app}.astro`,
`src/pages/index.astro`, `src/pages/revenue.astro`, `src/pages/sms.astro`,
`src/scripts/shader/{init,runtime}.ts`, `src/styles/{home,tokens,ui}.css`.

New, untracked (7 + folders): `docs/`, `public/assets/figma-2026/`, `public/design-refrences/`,
`scripts/figma-audit.py`, `scripts/visual-qa.py`, `src/components/product/WebsiteHeroArt.astro`,
`src/pages/venue-website.astro`, `src/scripts/tabs.ts`, `src/styles/website.css`.

Nothing is committed. Nothing was pushed. `git stash`, `git reset`, `git checkout` and any
history-rewriting command would destroy the entire redesign — do not run them.

---

## 9. Homepage remediation (owner review, 2026-11-02)

Owner reviewed the homepage against the read-only `birdiegrow-site-from-client/` reference and
reported four regressions. Status after this pass (build 105 pages clean; visual-qa 315 checks, 0 issues):

1. **Hero grain (fixed earlier, re-verified).** `backdrop-filter: blur` removed from
   `.hm-hero__shadow` (home.css desktop + mobile). Golf ball renders sharp with the fine
   particle grain (`radial-gradient` shader + `.hm-noise`), matching the owner's reference.
2. **Product-preview phone content (improved).** The perspective screen slot was mis-sized
   (widened to 0.44 with `cover`, which cropped the left text on desktop AND mobile).
   Reverted the slot to the Figma screen shape (`left:38.034%; width:22.167%`) and switched
   `.hm-pp__screen img` to `object-fit: contain` — the screenshot is now fully readable.
   Residual: a slight left-edge clip + vertical letterbox remain because our flat screenshots
   (aspect 0.462) cannot perfectly fill the perspective phone screen (aspect 0.313). Pixel-perfect
   needs the 5 skewed per-screen Figma exports (`imgPasteYourContent1` equivalents).
3. **"Birdie at a glance" glow (fixed).** Replaced `compat-bg.webp`/`compat-img.webp` with the
   owner's alpha PNGs and repositioned `.hm-gl__bg .bg` (sections.css) to `860x735 / right:-70 / top:-150 / opacity:1`,
   reproducing the green→teal top-right glow from `home-desktop.png`. NOT yet addressed: the
   carousel dots/arrow position + animation — awaiting the owner's target screenshot.
4. **Process cards (partially fixed).** `.hm-pstep .act` set to `row / space-between` so
   "With Birdie" sits on the right on mobile (desktop already correct). NOT yet addressed: the
   first card's bottom iridescent effect — awaiting the owner's target screenshot.
