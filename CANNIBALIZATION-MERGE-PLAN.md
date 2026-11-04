# Cannibalisation merge plan — for Luke's approval

> ## ✅ STATUS 2026-09-16 — CLUSTER C IS COMPLETE. READ THIS BEFORE THE REST OF THE FILE.
> Steps 1–3 of the Cluster C sequence (§4) are **all shipped and verified live**:
> 1. Blog post merged → pillar, 301 — done 09-14/09-15, plus the sitemap `filter` fix.
> 2. Shared FAQ de-duplicated — done, verified live (pillar renders 14 FAQs).
> 3. **Repeated blocks differentiated — done 09-16.** `/golf-simulator-software`'s comparison table was a
>    near-duplicate of the pillar's; it now compares **venue software vs simulator game engines**
>    (GSPro / E6 / TruGolf), which is the disambiguation that page uniquely exists to make.
>
> **VERIFIED EMPIRICALLY, not assumed:** all 7 cluster pages were fetched live and diffed sentence-by-
> sentence on 09-16. The only remaining shared text across the three pillars is the P1/P2 "Birdie at a
> glance" block and the CTA line. **Both are deliberate — do NOT remove them.** The productFacts block is
> what makes Birdie extractable as a product row for AI engines.
>
> **The `stats` triple stays duplicated by decision** — too short to act as duplicate content, and it is
> a live conversion element. Not pending work.
>
> **§4's open question about location pages is CLOSED:** the per-state loop was already removed from
> `getStaticPaths`. They build nothing and contribute zero to the URL spread.
>
> **§6 "What I have NOT done" is OBSOLETE** — the bodies were read 09-14, and that reading overturned the
> merge premise for 6 of 7 pages. Do not act on §6.
>
> **Next action is measurement, not editing:** re-measure `urls_count` in GSC ≈late October. Falling =
> working. The window lags, so early reads are mostly pre-change data and are not evidence of failure.
**Drafted 2026-09-14. Nothing executed. Every item below needs a yes/no before any file moves.**

---

## 0. First, the "we only have 1 keyword" question — answered

Ahrefs is wrong, or rather it is measuring something narrower than you think. **Google Search Console
shows birdiegrow.com appearing for 532 distinct queries in the last 90 days** (2026-06-16 → 09-13).

| Position band | Keywords | Impressions | Clicks |
|---|---|---|---|
| 1–3 | 26 | 224 | **115** |
| 4–10 | 86 | 653 | 9 |
| 11–20 | 74 | 667 | 4 |
| 21–50 | 234 | 2,568 | 1 |
| 51+ | 112 | 772 | 0 |
| **Total** | **532** | **4,884** | **129** |

Ahrefs reports "1 organic keyword" because it only counts terms that are *both* in its US volume index
*and* caught in its SERP crawl sample. 65% of Birdie's queries sit at position 21+, which Ahrefs samples
thinly, and most of the long tail has no recorded volume at all. **The "1" is a measurement artifact. GSC
is ground truth.** Ahrefs is still the right tool for competitors (it is all we can see of them); it is the
wrong tool for our own keyword count, and past briefs should have said so.

The real picture is still sobering, just differently:
- **26 keywords in positions 1–3 produce 89% of all clicks**, and the top two are `birdie grow` and
  `birdiegrow` — 115 of 129 clicks are **brand**.
- **346 keywords (65%) sit at 21+, generating 3,340 impressions and exactly 1 click.**
- Non-brand page-1 presence is essentially the two off-ICP mobile/portable pages.

**So: the plan does not "get us keywords" — we already have 532.** It moves existing ones up. The 308
keywords sitting at 11–50 are the inventory; they are already visible to Google and earn 5 clicks between
them. That is the entire opportunity, and it is a ranking problem, not a content-volume problem.

---

## 1. The mechanism, proven from our own data

GSC returns a `urls_count` per query — how many of our URLs Google saw competing for it. Sorting the
top 45 queries by that field:

| Our URLs competing | Queries (n) | Avg position |
|---|---|---|
| 1–2 | 9 | **16.3** |
| 10–15 | 14 | **45.7** |

**Queries where ten or more of our pages compete rank roughly three times worse than queries where one
or two do.** This is not a theory borrowed from an SEO blog; it is our own site, this quarter. Worst cases:

- `golf simulator business software` — **15 URLs** — position 57.9
- `birdie pricing` — 14 URLs — position 35.9
- `golf simulator booking software` — **13 URLs** — position 24.6 — 198 impressions, **0 clicks**
- `golf simulator scheduling software` — 13 URLs — position 65.4
- `golf simulator business plan` — 10 URLs — position 31.9 — 226 impressions, **0 clicks**

Contrast with focused pages: `indoor golf profit` (1 URL) sits at **8.0**; `golf club software roi…`
(1 URL) at **8.4**; `golf o clock` (2 URLs) at **6.2**.

### Two specific pathologies worth calling out

**(a) The off-ICP page is intercepting ICP queries.** `/resources/mobile-golf-simulator-business/` is the
*top-ranking URL* for `how to start a golf simulator business` (pos 53.8) and `start a golf simulator
business` (pos 57.7). Google has decided the mobile page is our best answer for the generic term — so the
segment you do not sell to is standing in front of the segment you do, and ranking badly for both.

**(b) The hub outranks its own articles.** `/resources/` (the index) is the top URL for `starting a golf
simulator business` (pos 55.4) and `how do i start a golf simulator business` (pos 44.1). When the listing
page beats the article written for the term, the article is not being recognised as the canonical answer.

---

## 2. Cluster A — "start / plan a golf simulator business" (the ICP lane, ~2,700/mo, KD 0–2)

Seven pages currently target overlapping intent:

| File | Action **after reading the bodies (09-14)** |
|---|---|
| `content/resources/how-to-start-a-golf-simulator-business.md` | **PILLAR — kept and expanded** ✅ |
| `content/resources/how-to-start-indoor-golf-simulator-business.md` | **Merged → 301** ✅ *one step pending* |
| `pages/resources/golf-simulator-business-guide.astro` | ~~Merge~~ → **KEEP. Wrong call.** It is a topical hub. |
| `content/resources/how-much-does-it-cost-to-open-a-golf-simulator-business.md` | Keep — distinct intent (cost). |
| `content/resources/golf-simulator-business-plan-template.md` | Keep — distinct intent (template/PDF). |
| `content/resources/mobile-golf-simulator-business.md` | ~~De-optimise~~ → **NO CHANGE NEEDED. Wrong call.** |
| `content/resources/portable-golf-simulator-business.md` | ~~De-optimise~~ → **NO CHANGE NEEDED. Wrong call.** |

### Three corrections, and what they say about the method

**Reading the bodies overturned three of my seven Cluster A/B calls.** Filename and GSC-overlap inference
was good enough to find the *cluster*, and not good enough to decide the *action*. Worth remembering before
the Cluster C money pages, where the risk of a bad merge is far higher.

**1. `golf-simulator-business-guide.astro` is a hub, not a duplicate — merging it would have done real
damage.** It is a curated journey linking out to ~30 resource pages and calculators. That is precisely the
breadth structure Playbypoint uses to hold 681 keywords. It stays, untouched.

**2. The mobile and portable pages did not need de-optimising.** I assumed they were over-optimised for the
generic term. They are not: the mobile page is titled for the mobile model, and its *second paragraph*
already routes fixed-venue readers to the pillar, with a second link in the closing section. They are
correctly scoped and correctly cross-linked.

**3. The actual root cause was the opposite of what I proposed — the pillar was under-linked, not the
mobile page over-optimised.** `golf-simulator-business-guide.astro`, one of the most link-rich pages on the
site, links to ~30 resources **and not to the how-to-start pillar**. Meanwhile the mobile page links *to*
the pillar twice. So the site was actively passing authority from the pillar's competitor to nowhere, while
the hub that should have been feeding it pointed elsewhere. **Fix applied: added a prominent pillar link to
the hub's "Opening your venue" section.** That strengthens the right page rather than weakening a page that
is currently earning clicks — a strictly better trade.

### What was actually merged

`how-to-start-indoor-golf-simulator-business.md` was a near-subset of the pillar: the same bay-count advice
almost verbatim (2 = proof of concept, 4 = sweet spot, 6–10 = entertainment venue), the same
Calendly/Square/Acuity software argument, the same location criteria, the same weekday-utilization close.
Unique material preserved into the pillar first:

- lease-rate benchmark (**under $15/sq ft**) → Step 2
- buildout line items (flooring, lighting, HVAC heat, soundproofing) → Step 2
- **3–6 months working-capital reserve** → Step 2
- staffing (owner-operator + one part-timer, labor **15–20% of revenue**) → **new Step 9**

### ⚠️ Unresolved contradiction — needs your call, I did not pick

The two pages disagree on break-even, and I deliberately did **not** carry either number across:

- `how-to-start-indoor-golf-simulator-business.md`: *"a well-run 4-bay venue typically breaks even in
  **6–12 months**"*
- `is-a-golf-simulator-business-profitable.md`: *"most well-run venues reach operational break-even within
  **12–18 months**"* — and that venues without a membership model take 18–24 months

These cannot both be right, and it is the single number a prospective operator is most likely to act on.
Tell me which reflects your customer base and I will make it consistent across both pages. Until then the
pillar carries no break-even figure at all, which is the safer failure mode.

*(Note: this mirrors the membership-share contradiction found in Cluster B — 25–40% vs 30–50%. Two
independent contradictions in two clusters suggests these pages were drafted separately without a shared
figures reference. Worth considering a single source-of-truth numbers file.)*

**Rationale.** Ahrefs groups twelve of the cluster's terms under one parent topic, `golf simulator
business` — a single strong pillar can hold the whole set. We have three pages splitting it plus two
off-ICP pages intercepting it.

**De-optimise, not delete.** Both mobile/portable pages are page-1 and earning clicks (7 clicks / 211
impressions between them). Deleting them throws away live rankings for no gain. Instead: keep them
tightly scoped to *mobile/portable* intent, strip generic "how to start a golf simulator business"
phrasing from their H1/title/intro, and add a prominent link up to the pillar for readers who want the
fixed-venue version. Goal is for Google to stop treating them as the generic answer.

**Open question for you:** is `golf-simulator-business-guide.astro` a hand-built page with layout worth
preserving? If so, the merge direction may want to reverse — guide becomes pillar, markdown articles fold
in. I have not read it closely enough to call that.

---

## 3. Cluster B — revenue / profitability (four pages, one intent)

| File | Proposed action |
|---|---|
| `content/resources/golf-simulator-business-revenue.md` | **PILLAR — keep** |
| `content/resources/indoor-golf-simulator-business-revenue.md` | **Merge → 301** ✅ *executed 09-14, one step pending* |
| `content/resources/golf-simulator-business-revenue-streams.md` | ~~Merge~~ → **KEEP. My earlier call was wrong.** |
| `content/resources/is-a-golf-simulator-business-profitable.md` | Keep — distinct question intent. Link up. |

### Correction after reading the bodies (09-14)

I had `golf-simulator-business-revenue-streams.md` down as a merge on filename evidence. Reading it, that
was wrong: it is seven distinct income streams (time-of-day pricing, memberships, corporate, leagues,
lessons, F&B, retail) with its own figures throughout. That is a **diversification** article — "how do I
add revenue" — against the pillar's **benchmarking** intent, "how much will I make". Different query
intent, minimal text overlap. It stays. Filename similarity is not intent similarity, and I should not
have proposed a merge before reading.

`is-a-golf-simulator-business-profitable.md` also survives on distinct intent (cost structure, break-even
timeline — neither appears in the pillar), but it *does* restate the per-bay revenue table in its own
assumptions. Worth trimming later so the pillar owns the numbers; not urgent, not a merge.

### The confirmed duplicate pair

`indoor-golf-simulator-business-revenue.md` vs the pillar shared: the same core formula, the same
2/4/6/10-bay table, the same five levers (memberships, automated marketing, weekday promotions, add-ons,
data visibility), and the same "this is a systems problem, not a demand problem" close. Roughly 85%
duplicative — and worse, **it contradicted the pillar on two numbers**: membership share of revenue
(30–50% vs 25–40%) and margin framing. Two pages giving different answers to the same question.

Two things settled the direction. The duplicate's own body already linked to the pillar as
"our main guide" — the canonical choice was made in the content long ago. And the duplicate had
**zero inbound internal links** anywhere in the repo, so nothing in the site pointed at it.

Note `indoor golf profit` currently sits at **position 8.0 with 100% CTR** on
`/resources/indoor-golf-simulator-business-revenue/` — tiny volume, but it is one of the few non-brand
top-10 positions we have. Preserve that URL's equity with a proper 301, do not let it 404.

---

## 4. Cluster C — the money pages (booking / management / software)

This is the one the last two months of work has been aimed at, and it is the most fragmented: **13 URLs
competing on `golf simulator booking software`, 15 on `golf simulator business software`.**

### ALL SEVEN PAGES READ IN FULL, 2026-09-14. **THE MERGE PREMISE WAS WRONG.**

| File | Action after reading |
|---|---|
| `pages/golf-simulator-booking-software.astro` | **PILLAR — keep. All external links point here.** |
| `pages/golf-simulator-management-software.astro` | **KEEP — genuinely distinct** |
| `pages/golf-simulator-software.astro` | ~~Merge~~ → **KEEP. It is a hub.** |
| `pages/best-golf-simulator-software.astro` | ~~Merge~~ → **KEEP. It is a buyer's guide.** |
| `content/resources/golf-booking-software.md` | ~~Merge~~ → **KEEP. Category education.** |
| `pages/features.astro`, `pages/platform.astro` | **KEEP — product showcase / multi-location** |
| `blog/golf-simulator-booking-software-guide/` | **MERGE → 301. The one genuine cannibaliser.** |
| `/golf-simulator-software-tx`, `-ny`, … | **Non-issue — already removed and 301'd** (`_redirects` line 21) |

**Cluster C is not a duplicate-page problem.** Six of the seven have legitimately distinct intent, and
several are structurally important:

- **booking-software** — the pillar. 15 FAQs, `SoftwareApplication` schema, and it *already* has a dedicated
  section ("Booking, reservation, or scheduling software — one system") plus an FAQ explicitly claiming the
  reservation/scheduling variants. It is correctly built to own the whole cluster.
- **management-software** — distinct, and the page says why in its own FAQ: *"A booking app captures
  reservations. A management platform runs the whole business behind them."* Adds multi-location, revenue
  intelligence and the growth tier. Real positioning, not a rewrite.
- **golf-simulator-software** — a **hub**, like the business guide. It links out to booking, management,
  best-, features and integrations, and it carries the single most important disambiguation on the site:
  Birdie is not GSPro/E6/TruGolf. That matters because the 07-22 baseline found this SERP is home-hardware
  intent. Merging it would delete the page that resolves the confusion.
- **best-golf-simulator-software** — a **buyer's guide** comparing 10 named competitors with links to 9
  head-to-head pages. Pure comparison intent.
- **resources/golf-booking-software** — category education by venue type (course vs club vs simulator),
  routing each to the right page. Top-of-funnel, distinct.
- **features / platform** — product-UI showcase and multi-location scaling. Bottom-of-funnel, not
  keyword-targeting.

**So why do 13–15 URLs compete? The duplication is at the COMPONENT level, not the page level.**
Every page recites the same feature list — bay scheduling, hour-bank memberships, automated SMS, Square at
booking, 24/7 smart-lock access, weekday utilization, lapsed-customer reactivation, 24-hour setup, $197
flat. And several share near-identical blocks verbatim:

- the `productFacts` "Birdie at a glance" block is effectively identical on booking / management / software
  (same Works with, Integrations, Pricing, Setup)
- the 9-row comparison table is near-identical on booking and software
- the `stats` triple (24 hours / 0 developers / no contracts) is identical on booking and software
- the FAQ **"What is the best booking software for a golf simulator business?"** appears on BOTH the pillar
  and the best- page with near-identical answers
- a "The short answer" quickAnswer card appears on four pages

Google is not choosing between four duplicate pages; it is choosing between seven pages that each say the
same sentences. **The fix for Cluster C is differentiation, not consolidation** — and that is editing, not
merging, so it carries far less risk than the plan originally assumed.

### The one genuine merge: `/blog/golf-simulator-booking-software-guide/`

Textbook cannibaliser, and unusually clear-cut:

- Its title, **"Golf Simulator Booking Software: A Buyer's Guide"**, near-exactly matches the money term.
- Its entire body is a six-criteria "how to choose" list that **already exists twice elsewhere** — the
  pillar's `choose` array and the best- page's `needs` array. **Five of six criteria are the same in all
  three** (bay scheduling, hour-bank memberships, automated SMS, payment at booking, 24/7 door access).
- It has **zero inbound internal links** — nothing in `src/` references it.
- It has **no outbound link to the pillar either**. It names Birdie and PDK and links nowhere.
- GSC caught it as top_url for `golf simulator booking software` at pos 16.0 — **displacing the pillar on
  the money term**, which is exactly the failure the WATCH LIST flagged on 09-06 and asked us to watch for.

An orphaned blog post, title-matched to the money term, duplicating a list that exists on two stronger
pages, with no link equity flowing either direction. Nothing is lost by folding it in. **Low risk: it is a
blog post with no commercial function, not a landing page paid traffic touches.**

### Recommended Cluster C sequence (nothing executed — awaiting Luke)

1. **Merge the blog post → pillar, 301.** Unambiguous, low-risk, ready to execute on your word.
2. **De-duplicate the shared FAQ.** `"What is the best booking software for a golf simulator business?"`
   should be owned by the best- page (it is the comparison page). Reword or drop it on the pillar.
3. **Differentiate the repeated blocks** so each page argues its own case rather than reciting the same
   spec sheet. Lowest-risk first: the `stats` triple and the comparison table, which are pure duplication.
4. **Leave all six commercial/resource pages in place.** Re-measure `urls_count` 4–6 weeks after steps 1–3
   before considering anything more invasive.

**The location pages need a separate conversation.** `/golf-simulator-software-ny` is the top URL for
`indoor golf scheduling software` at position 60.2, and `-tx` for `birdie golf simulator` at 8.7. If these
are programmatic near-duplicates they are likely a major contributor to the 13–15 URL spread, and thinning
them may do more for the money term than anything else here. I have not counted them yet — flag if you
want that measured before deciding.

**Pairs with the backlink fix already in the roadmap:** the Kisi/PDK/RemoteLock lane (4-for-4) currently
points at the homepage. Once the pillar is consolidated, every future partner link should point at
`/golf-simulator-booking-software`.

---

## 5. Suggested sequence

1. **Cluster B first** — four pages, lowest risk, clean intent split. Proves the mechanism.
2. **Cluster A second** — the ICP lane, biggest prize (~2,700/mo at KD 0–2).
3. **Cluster C last** — highest risk (live commercial pages, paid traffic may land on some), and it
   benefits from whatever we learn in 1 and 2.
4. Re-measure `urls_count` per query in GSC 4–6 weeks after each step. That field is the KPI for this
   work — not DR, not Ahrefs keyword count.

**Every merge needs a 301, not a delete.** Several of these URLs hold the only non-brand rankings we have.

---

## 6. What I have NOT done

- Not read the page bodies, so I cannot yet say how much content overlaps versus how much is genuinely
  distinct. The merges above are inferred from URLs, GSC query overlap and filenames.
- Not counted the `[slug].astro` location pages.
- Not touched a single file.
- Build still unverified — bash has been down since this morning's run.
