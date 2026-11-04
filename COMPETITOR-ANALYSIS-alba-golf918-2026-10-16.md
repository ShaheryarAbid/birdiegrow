# Competitor Analysis — Alba (albaplay.com) & Golf 918 (golf918.com) vs Birdie
_2026-10-16 · Ahrefs (US) + live site review. Supersedes the Golf 918 section of BIRDIE-COMPETITOR-ANALYSIS-butter-golf918.md (07-28)._

## TL;DR
**Alba is the most serious competitor added so far** — not because of search (it is SEO-dormant like the rest of the category) but because of product, pricing and distribution: indoor-golf-only, $29/bay/mo with every feature, Adyen payments + SimLock included, 11 door-access integrations, and a **free-for-the-rest-of-2026** switching offer aimed squarely at operators on other platforms. **Golf 918 has repositioned upmarket** (F&B/retail POS, BI, multi-location), cut its entry price, and **published a "Golf 918 vs BirdieGrow" page** — the first rival to target Birdie by name. Neither ranks for anything in the US.

## Scoreboard (Ahrefs, US, 2026-10-16)
| | Birdie | Alba | Golf 918 |
|---|---|---|---|
| DR | 56 | 68 | 28 (was 20 on 07-28) |
| Refdomains / backlinks | PBN-inflated | 1,395 / 568k (real mix: squarespace, trackmangolf, visitnorway, brreg.no, gocity…) | 901 / 1,017 (PBN-inflated) |
| Org keywords / traffic / top-3 | see GSC (≈539 kw) | 5 / 10 / 2 (all brand or venue-name pages) | 0 / 0 / 0 |
| AI citations (settled 10-08) | ChatGPT 7/8 · Perplexity 8/8 · Gemini 5/2 · Copilot 1/1 | **ChatGPT 2/1 · Gemini 1/1** | 0 on every engine |
| Pages indexed (sitemap) | 93 | **~2,800** (venue booking pages, per-instructor pages — programmatic) | ~10 |
| Blog/resources | 40+ resources | small blog + 1 playbook ("acquisition") | none |

## Alba
- **Positioning:** "Run a better indoor golf business." Claims **1,000+ operators / 250+ indoor golf venues / 20+ countries / 4.8 rating / 0% churn since 2023**. Norwegian origin (Norwegian-language pages, jobs), now expanding to US/UK/Canada/CEE. All claims are self-reported; unverified.
- **Pricing:** **$29/€29/£29 per bay/month, all features unlocked, payments + SimLock included, no setup fee, 1-month notice.** Franchise (10+ locations) custom. Transaction fees apply (Adyen). Compare Birdie's flat $197/mo: Alba is cheaper for ≤6 bays and scales linearly.
- **Offer:** "Get Alba for free for the rest of 2026" — no bay fees from go-live through 31 Dec 2026 for venues new to Alba; setup, onboarding and member/gift-card import included. Migration-led acquisition; expect it to hit Birdie's prospects directly.
- **Product:** booking, events, memberships, day passes, value/gift cards, lessons, group bookings, **SimLock** (locks/unlocks simulator by booking), access control from confirmation email (Zesec, Kisi, Glutz, Avigilon, Unloc, TTLock, Seam, Entro, UniFi, Kulku, Keyfree), smart pricing, insights, **MCP server + partner API** ("chat with your venue data"), accounting, ad-event tracking, staff roles.
- **Distribution moat:** a consumer-facing marketplace (`/venue/<name>` pages for every customer venue, "Browse venues") — each customer's booking page is an indexed Alba page, ~2,800 in the sitemap. That is why Alba has the "alba golf" brand SERP and the only organic hits it has. It is a link/traffic flywheel Birdie does not have (Birdie's booking app is on app.birdiegrow.com, not indexed content).
- **SEO/AI posture:** Next.js, clean canonical + 2 JSON-LD blocks on home, robots.txt explicitly allows GPTBot/ClaudeBot/PerplexityBot, **no llms.txt** (404), no head-term content ("golf simulator booking software" etc.). Already earning ChatGPT (2) and Gemini (1) citations on a handful of pages with zero content depth — evidence the category is winnable with very little.
- **Weaknesses:** $29/bay + Adyen means total cost is not flat/predictable; US presence thin (venue pages mostly NO/UK/CA); no head-term or business-operator content; testimonials are mostly Nordic/EU; reviews page is a few quotes (no G2/Capterra).

## Golf 918
- **Repositioned** from "simulator management software" to "the operating system for golf facilities" (bookings + memberships + **F&B/retail POS** + BI + multi-location). Pricing now **USD: Starter $99 (1–3 bays, bookings+payments only, $250 setup) · Core $299 ($254 annual) · Growth $499 ($424 annual) · Enterprise custom**; extra bays $50/$35/$25. (07-28 baseline was $150/$250/$500 — it has restructured, and added a self-serve tier.) Integrations: RemoteLock, TruGolf SSO, Stripe, QuickBooks.
- **Targets Birdie by name:** `/compare/birdiegrow` (reviewed 2026-09-08) plus pages vs Birrdi, Club Caddie, Lightspeed Golf, foreUP, USchedule. The framing is "Birdie = focused booking tool; Golf 918 = runs the whole business." Notable: it describes Birdie's pricing as unstated ("confirm directly") — Birdie's public $197 flat price is an advantage they are not surfacing — and lists Birdie's access integrations as Kisi, PDK, UniFi, Avigilon, RemoteLock. It carries a "Homepage Concept / Visual Direction" watermark on live pages (sloppy, in-development).
- **Search/AI:** 0 keywords, 0 traffic, 0 AI citations; no canonical tag, no JSON-LD, empty robots.txt and llms.txt, sitemap.xml is empty (urlset with no URLs). DR jump 20→28 is not content-driven (PBN-inflated refdomains: 901).
- **Verdict:** Still invisible in search/AI, but the comparison pages are a deliberate play for "Birdie alternative"-type queries and for sales conversations. Weak on technical SEO. The F&B/POS angle is real for venues with a kitchen, not Birdie's ICP core.

## What this means for Birdie
1. **Alba is the pricing/offer threat.** A prospect comparing $29/bay (free until 2027) with $197 flat will ask. Birdie needs a crisp answer: all-in monthly cost at 4/6/8 bays incl. payment processing, month-to-month, white-glove setup. **Needs Luke's call** — do not publish a head-to-head pricing claim against a named rival (Do-not-write list) without verified figures; a neutral "what to ask any vendor about total cost" page is safe.
2. **Own the comparison SERPs before they do.** Build `/birdie-vs-alba` (pattern: `/birdie-vs-booked-bays`) and `/birdie-vs-golf-918`. Golf 918's `/compare/birdiegrow` page is a ready-made outline of their pitch; answer it on the facts (public pricing, integrations, SimLock-equivalent, 24/7). Keep claims to what is verifiable from their public pages; date-stamp them.
3. **The ICP business/operator cluster is still uncontested** (Alba and Golf 918 have none of it). Keep consolidating and publishing the ~2,700/mo KD 0–2 cluster.
4. **Entity/AI gap:** Alba is already cited by ChatGPT/Gemini off a thin site. Birdie's llms.txt, FAQPage schema and answer blocks are ahead; keep pushing G2/Capterra reviews (R1) — Alba has none visible either, so the first operator to get 5+ wins that surface.
5. **Venue-page flywheel idea (needs Luke's call):** Alba's ~2,800 indexed venue pages are its only organic footprint. A public, indexable "venue directory" for Birdie customers (with their consent) would create the same customer-backlink + brand-SERP effect. Large scope; park until after the site redesign.

## Watch triggers (for the daily run)
- Alba: org keywords >10 or any non-brand ranking; ChatGPT/Gemini citations rising; any US-targeted content or "golf simulator booking software" page; pricing or free-offer change (offer ends 12-31-2026); new `/compare/birdie*`-style page naming Birdie.
- Golf 918: any keyword/traffic/AI citation >0; sitemap populated; new/edited `/compare/birdiegrow`; pricing change.
