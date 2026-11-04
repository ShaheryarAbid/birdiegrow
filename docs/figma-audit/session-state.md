# Working state — continue from here

User requests complete local-only Figma-to-Astro rebuild, discovery then implementation then browser
QA. NO GitHub/Git remote/commit/deploy/upload. No subagents unless explicitly requested (not requested).
Use apply_patch for source edits. Shell is Windows PowerShell; `rg` unavailable; Python 3.11, Python
Playwright, Pillow, Node 24, npm 11 installed. No dependencies installed.

## Critical external blocker

Figma MCP Starter-plan quota exhausted. Do not repeat calls or evade quota. User already informed.
Continue useful available work, but final acceptance cannot be honestly claimed without remaining
Figma screenshots/context. Existing 104 routes were already extensively redesigned and match much
of target structure. Main task now correct verified differences, missing routes, interactions, QA.

## Sources and evidence

Figma file 18tWTm5kY5BLTZgxVkOmc3. Session 8b052989-5156-41dc-bc01-177f1fd54731.
Page Design 63:49; exact target is SECTION Birdie Design 30.10.2026 at 2049:91475.
Full metadata 21,175 nodes, 179 direct frames, all matched to CSS by coordinates via scripts/figma-audit.py.
Local design-references/css.txt (moved out of public/ so it is not published) is 14MB / 976,363 lines; read-only, checksum in reference-summary.
Audit seven required docs exist; route map covers ALL unique pages/templates and state variants.
See figma-inventory.md for IDs/routes. No motion-context nodes and no prototype reactions exist.
Figma screenshot evidence available ONLY home desktop/mobile, website desktop. In docs/figma-audit/figma.
Saved high fidelity context ONLY home hero desktop/mobile, home product preview, website hero/intro.
Other full contexts were sparse. Full section headings and variables saved.
43 leaf assets downloaded using provided curl URLs into public/assets/figma-2026; manifest in evidence.
No further assets can be exported via MCP. Unused newly downloaded assets should eventually move
out of public to audit evidence (avoid bloating public); don't remove original project assets.

Relevant skills loaded: frontend-design; web-design-guidelines (GitHub-hosted guideline fetch skipped
because user prohibits GitHub); Figma design-to-code and use guidance via MCP resources.
Figma tools catalog originally in temp overflow 3fdd8a36/content.txt, no need call again currently.

## Running servers and completed baseline

Dev http://127.0.0.1:4321 shell 763003.
Preview http://127.0.0.1:4322 shell 08f414. Preview serves dist, requires rebuild to show edits.
Baseline build passed 104 pages, zero warnings. Browser script:
`python scripts/visual-qa.py --all --phase baseline --screenshots`
completed 312 checks (1440,768,393). Report docs/figma-audit/baseline/report.json:
zero broken local links, pageerrors, brokenImages, or overflow; nested main landmarks were present.
Many baseline full-page screenshots of all unique template routes exist. All outbound browser traffic
blocked by QA except local, no forms actually submitted. Shell 211943 is finished or will report finish.
Scripts visual-qa.py and figma-audit.py created for persistent audit/QA. No new test dependencies.

## Source edits ALREADY MADE (not yet built/tested)

- BaseLayout skip-to-content link and main#main-content tabindex=-1.
- Converted nested `<main class="hm">` to div in home, features, revenue, sms, all five feature routes.
- Header mobile panel hidden attribute, open state/background, Escape/outside click/focus exit/link
  close and desktop resize reset; aria-current desktop.
- ui.css shared [hidden] display:none!important, focus-visible, skip-link, sr-only and reduced motion.
- tokens.css H2 and mobile heading typography.
- Added src/scripts/tabs.ts reusable keyboard/ARIA tabs; wired FeatureTabs, SideTabs, homepage two
  sets of tabs. Shared tab init adds roles, IDs, controls, aria-selected, roving tabindex, hidden panels.
- Homepage preview buttons aria-expanded. Downloads target hero desktop/mobile and phone leafs used.
- home.css corrected 245px accordion description, 8px margin; frame transform scaleX(-1), no screen
  skew, target mask and positions (screen left38.034%,top1.244%,width22.167%,height94.533%).
  Mobile override also reapplies scaleX(-1). Need visually verify phone actually aligns.
- Hero blur20px desktop/6.858 mobile, exact mobile crop left-21 width570 height327, mobile paragraph
  full available width instead of340. Desktop stat widths and gaps corrected. Added static tiny
  dot pattern fallback and noise opacity .18; MUST compare visual because untested approximation.
  Raw target images are huge PNG; optimize if useful without changing crop/content.
- Shader init skips reduced-motion; runtime checks preference, pauses on visibility/offscreen,
  resumes when appropriate. Experimental HTML-in-Canvas APIs absent in stable Chrome -> fallback.
- Glance carousel live region, slide visibility/labels, pressed dots; existing controls maintained.
- Clipboard promise rejection handled in ArticleLayout and Contact.
- BookingWizard interests aria-pressed, CTAs aria-disabled, Calendly postMessage origin guard.
- book-demo Calendly origin guard also added.
- demo interests aria-pressed updated on click, error role alert.
- Added venue-website.astro, WebsiteHeroArt.astro, website.css based on saved screenshot/context.
  Not yet built or viewed! Hero uses exact provided leaf assets/rotated mask composition.
  Section order visible in screenshot: hero, short answer/flow, setup timeline, comparison table,
  pricing with second tier highlighted, glance, FAQ, CTA/footer. Hidden sections in metadata excluded.
- PricingCards gains optional highlight index (default0) for website tier1.

## Immediate next actions

1. Build/check new page and homepage screenshots using dev or rebuild preview.
   New venue website setup icon filenames in code ['book','config','live','revenue'] MUST check existing
   real names: home setupIcons in index.astro are source of truth; chosen names might not exist!
   Fix wrong files rather than leave placeholders. Hero mask construction must be visually compared.
2. Implement remaining missing route variants:
   - `/features/bay-agent/`: Figma 2049:100705 /101423 is an unfinished duplicated booking page
     with SMS opt-in content under "What it does". Do not fabricate verified design or publish
     unrelated copy. Use existing BAY_AGENT facts in src/data/features.ts and existing feature
     components for a clearly documented adaptation, or explicitly record blocked portions.
     Existing /features has Bay Agent section (lines90-114) with true data, software/monitors.
   - `/book-a-demo/`: light form variant 2049:104366 /104461. Existing demo.astro has form and
     business logic; extract to reusable component/page shell rather than duplicate full handler.
     `/demo/` remains dark landing, `/book-demo/` stays Calendly, lpbookingsystem/lpadvertising wizard.
3. Add navigation links to new pages in appropriate product/footer/pricing link contexts without
   losing existing SEO links (footer more links intentionally retained from previous work).
4. Continue responsive/visual QA across shared page families, make meaningful fixes from available
   evidence. Baseline screenshots allow seeing site, but Figma visual verification limited.
5. Interactions QA: mobile menu keyboard, product/home tabs arrows, accordions, glance, calculators,
   wizard validation/errors/success with intercepted /api/lead & /api/booking (no real submission),
   demo success/error, Calendly spoof-origin rejection, clipboard, reduced motion.
6. Final build and scripts/visual-qa.py --all --phase qa --screenshots, fix issues. Check 360/1024 too
   where real risks. Static script checks local link targets and fragments.
7. Update all audit docs, coverage, discrepancies and known-gaps. Do not mark full Figma completion.

## Architecture and known facts

Astro5 + sitemap only dependencies. Static output, inline styles, SEO in BaseLayout, Cloudflare funcs.
All104 routes existing. Content markdown templates blog/resources; [slug] comparisons/states;
integration dynamic pages. Existing pricing truth from src/data/product.ts ($197 booking, custom
website/full platform). Keep real facts; Figma has unrelated crypto placeholder FAQ descriptions.
Mobile app page intentionally noindex/sitemap-excluded, missing store URLs; retain safeguards.
Existing assets home/features/etc generally suitable but from older Figma comments.
Default shared .hm fonts DM Sans & Source Serif4 selfhosted. Core sections padding80 desktop16 mobile,
H1 64/40, H2 48/32, canvas #f0f2f1, surface #fdfffe, ink#000407, green#22c55e.
Root global legacy CSS coexists. `.hm img {max-width:none}` can cause visual overflow clipped silently.
Body baseline looked slightly bolder than Figma; investigate typography if material, not verified yet.
QA baseline all page dimensions constrained due .hm overflow-x:clip; check visual clipping manually.
No user permission needed for local edits/build/tests. Figma quota is actual external blocker.

---

## 2026-11-03 — Homepage correction pass (handover brief A–G)

Scope: only `birdiegrow-site` modified. No git/remote operations. Source of truth = genuine Figma
Dev-Mode export `docs/birdie-figma-master-reference/exports/css.txt` (976k lines) +
`figma-screenshots/*` (node-ID named) + `exports/home-desktop-hero-design-context.txt`. Live Figma
MCP is NOT available (only browser-use / genui / schedule MCP servers present).

### Items implemented (all verified via browser-use evaluate_script computed styles; build passes 105 pages)

- **E — "See the pricing and get started" arrow points DOWN.** Created
  `public/assets/home/arrow-down-dark.svg`; `index.astro` CTA now references it.
  Verified: `a[href="/pricing/"] img` src = arrow-down-dark.svg.
- **F — "Owners who run on Birdie" story-card arrow.** `home.css` `.hm-story .go` set to
  48×48, padding 16, gap 8, radius 16, bg rgba(255,255,255,.1), white shadows
  0 20px 20px rgba(255,255,255,.03) + 0 10px 10px rgba(255,255,255,.03). Verified computed.
- **C — Glance card top-right compat background.** `sections.css` `.hm-gl__bg .bg` = 965.5×680.34,
  left -200.2, top -706.08, opacity .87, matrix(-0.81,-0.58,-0.58,0.81,0,0) (Figma node
  Image/Compatibility-background). `.img` golf-ball color-burn layer already matched.
- **C2 — Glance slider controls.** `Glance.astro` markup reordered to dots-pill (left) + grouped
  arrows (right). `sections.css`: `.hm-gl__dots` pill bg rgba(255,255,255,.2)/radius 99/padding 16/
  height 40; active dot 32×8 white, others 8×8 rgba(255,255,255,.1); `.hm-gl__arrow` 40×40
  radius 165 bg rgba(255,255,255,.2) border 0. Matches Figma Layout/Carousel-controls (css.txt
  ~27001–27260). Verified computed.
- **D — First booking card bottom effect.** `home.css` `.hm-pstep__bg img` add
  `object-position: center bottom`, opacity 1. The rainbow/prism asset `setup-step-image.webp`
  (dark top, spectral band at bottom) was being cropped out by center-positioned cover; now the
  rainbow shows at the card bottom. Verified objectPosition = 50% 100%.
- **G — First pricing card reuses the compat layered treatment.** `index.astro` `.hm-plan__bg` now
  carries `hm-gl__bg` and renders bg(price-bg.webp)+fade+shader+noise+img(price-img.webp color-burn),
  identical composition to the glance card. `home.css` `.hm-plan.is-dark` invented radial-gradient
  background removed (now #000407). Verified: 4 layers present, bg matrix applied, assets load
  (price-bg 1024×587, price-img 1920×1080), no console errors.
- **B — Section-2 tabs transition.** `home.css` `.hm-tabs button` gains background/color .2s ease.
  Mobile device art (`.hm-pp__art`) left as-is: `.hm-pp` has overflow:hidden and the -150px/715px
  crop reproduces the Figma mobile (device cropped at edges, centered). No measurement available to
  refine further without regression risk.

### Not changed (deliberate)
- **A — Hero grain/shader.** Current layers already match Figma node 2:31523 structure (image +
  gradient shadow + soft-light shader + fine 2px radial-dot grain fallback + .18 soft-light noise).
  The only literal Figma delta is the shadow node's `backdrop-blur(20px)`, which conflicts with the
  brief's explicit "NOT blur" instruction → intentionally NOT added. Reads as fine grain, not blobs.

### Outstanding blocker (unchanged)
Pixel-level visual QA is blocked: the embedded browser view is hidden
(NATIVE_BROWSER_VIEWPORT_UNAVAILABLE, viewport 878×881, visible=false) and cannot be resized or
focused programmatically. All above verified via DOM/computed-style + asset-load checks, NOT rendered
pixels. To finish the brief's screenshot QA, open/focus the preview (RunPreview http://localhost:4321/)
and capture 1440px + 390px for sections C/C2/D/G, then compare against `figma-screenshots/`.

## 2026-11-03 (later) — Switched to user-supplied FLATTENED background images

User provided flattened Figma art in `design-references/` and asked to use them DIRECTLY as
backgrounds instead of reconstructing layered effects. Converted 5 PNGs → optimized `.webp` in
`public/assets/home/` via sharp (temp script deleted after):

- `hero-bg.webp` (5760×3164, 502KB) → Hero. Aspect 1.82 == hero 1440×791 exactly → full cover, no crop.
  Ball + course map + dark gradient are baked in. Removed `.hm-hero__shadow`, hero shader, hero noise
  and the standalone `.hm-hero__map` (hidden ≥901px). Mobile still uses the existing mobile hero source.
- `glance-card.webp` (962×910, 34KB) ← Dashboard-navigation.png → "Birdie at a glance" card AND first
  pricing card top-right blue/green aurora. Replaced the whole compat-bg matrix + golf-ball color-burn +
  shader + noise + fade stack with one `<img>` cover. Aspect 1.057 == glance card 480×454 exactly.
- `booking-card.webp` (2172×724, 23KB) ← Moody Glass Gradient Wallpaper.png → first booking card bottom
  rainbow. Replaced setup-step-image + shader; cover + object-position bottom.
- `cta-ball.webp` (1339×1174, 74KB) ← Neon Rim-Lit Golf Ball on Tee.png → final CTA section. Replaced
  cta-image + shadow + shader + noise; right-anchored 760px cover.
- `faq-ball.webp` (1600×983, 30KB) ← Aqua Honeycomb Sphere and Glass Ribbon.png → FAQ section art.
  Replaced the two clip-path faq-ball divs with one bottom-left img (width/height attrs reserve ratio).

Files changed: index.astro (hero/pricing/booking markup), Glance.astro (+removed SHADER_DARK import),
Cta.astro (+removed SHADER_LIGHT import), Faq.astro, home.css (hero img cover + map hide),
sections.css (glance bg cover, CTA img, FAQ ball sizing). Build passes 105 pages; browser evaluate_script
confirms all 5 webp load, computed cover/object-position correct, old layer nodes gone, no console errors,
no horizontal overflow. Pixel QA still blocked by hidden browser viewport (open preview to confirm at 1440/390).

## 2026-11-03 — 7 follow-up fixes (user round 2)

- (1) Removed the standalone `.hm-hero__map` (course map is baked into hero-bg.webp); deleted its CSS +
  media query. Header desktop top padding 20px → 30px (`.bd-header__bar`) for breathing room over the bg.
- (2) Product-preview device: removed `transform: scaleX(-1)` on `.hm-pp__art > img.frame` in BOTH the base
  rule and the `@media (max-width:900px)` override. The mask (`imgPasteYourContent`) is un-mirrored, so the
  mirrored frame made the phone tilt opposite to the screenshot hole. Now frame + mask align.
- (3) `.hm-pstep.is-dark .cmp i::after` ("With Birdie" toggle on the Payments & revenue card): white knob
  flipped left → right (`right:2px; left:auto`).
- (4) Features pane bg → `product-previews.webp` (1440×632 ← design-references/Product previews.png,
  aspect matches the 960×421 card); `.hm-feat__bg > img` now inset:0 cover opacity:1.
- (5) Setup featured tile bg → `tile-gradient.webp` (101×80 ← Color-Pixel-Dark_Size-80px.png); `.bgimg`
  now inset:0 cover center-bottom (was a wide crop with negative offsets leaving empty space).
- (6) Integrations grid `.dk` (Birdie) tile: background now `tile-gradient.webp` cover; removed the wrong
  `filter: invert(1) brightness(2)` — logo-birdie.svg is already white #FDFFFE + green dot.
- (7) CTA ball container `right:0 → 40px` (desktop) so it isn't glued to the right edge.
Build passes 105 pages; browser CSSOM/evaluate_script confirms map gone, scaleXCount=0, header base padding
30px, cta base right 40px, dk tile gradient + no filter, feat/setup images load; no console errors.
Pixel QA at 1440/390 still pending (browser viewport stuck ~878px, screenshots blocked).

## 2026-11-03 — round 3 (header bg / feat contain / tile crop / CTA full scene)

- (1) Overlay header now has its OWN background (`linear-gradient` dark veil on `.bd-header--overlay`) so the
  hero ball doesn't visually touch the header content. Height padding kept at 30px top.
- (2) Features pane bg `.hm-feat__bg > img` → `object-fit: contain` (was cover) so the whole Product Previews
  panel shows; image aspect 2.278 ≈ card 2.280 so it fills with ~no letterbox.
- (3) `tile-gradient.webp` regenerated TRIMMED (101×80 → 81×80 square, transparent shadow margins removed).
  The margins were why the setup tile + grid `.dk` tile gradient looked "cut on the left/middle" under cover.
- (5) CTA ball: `cta-ball.webp` regenerated from the full re-extracted `Neon Rim-Lit Golf Ball on Tee.png`
  (1672×941 → 1400×788, ball centred, grass/rainbow full-width). `.hm-cta__img` desktop now `right:0;
  width:58%` + `object-position:center` (ball lands ~72% of section, full scene, no cut). Mobile override →
  bottom band `height:62%` + `object-position:68% center`. Home-desktop.png / Home-mobile.png are the refs.
Build passes 105 pages; CSSOM confirms header veil, feat contain, tile-gradient 81×80 (setup+grid),
CTA base width 58% + object-position center, scaleXCount 0; no console errors. Desktop/mobile pixel QA
(ball size/position, header veil strength) pending user visual check — browser viewport stuck ~878px.
