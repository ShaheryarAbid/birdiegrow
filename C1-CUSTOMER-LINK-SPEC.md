# C1 — Customer link-back spec

**Status:** DRAFT 2026-09-19, awaiting Luke's decision on §2. Hand to whoever builds the redesign.
**Roadmap item:** C1 in `AI-VISIBILITY-ROADMAP.md` (NEXT UP list). Surfaced 09-17, evidence extended 09-19.

---

## 1. The problem, measured

Birdie's customers already link to Birdie, unprompted, from real topical golf sites. **They link the wrong host.**

Measured 2026-09-19 via Ahrefs:

| Target | Referring domains | Backlinks |
|---|---|---|
| `app.birdiegrow.com` | 39 | 600 |
| `www.birdiegrow.com` | 231 | 408 |

What those app-subdomain links actually look like, pulled from the live venue site:

```html
<!-- breakingparkc.com, main nav -->
<a href="https://app.birdiegrow.com/book/breakingpar/">BOOK A BAY</a>
<a href="https://app.birdiegrow.com/book/breakingpar/packages">MEMBERSHIPS</a>
```

These are venues linking **their own booking page** — a functional link to a Lovable-hosted app with no marketing content. Counts per venue run 10–41 links (sitewide nav), which is why the refdomain totals have been climbing: `backspinsimulator.com` 16 dofollow, `breakingparkc.com` 33, `bobsindoorgolf.com` 41, `localgolfsims.com` 30, `levelupgpc.com` 21, `thebunkerr.com` 20, `theforgepro.com` 10.

**Why it matters.** Page 1 for `golf simulator booking software` is held by URLs with **0–3 referring domains** (screengolfers DR27/1, indoorgolfbooker DR3, playbypoint 1, vteegolf 3, whoosh /simulators 2). Page-level authority is the binding constraint on the money term, and on the 297 Birdie keywords sitting at positions 11–50. Domain Rating is not the constraint — Birdie is DR51 against rivals at DR0–DR27 who outrank it.

So: the single link source rivals cannot buy is already firing, at volume, into a host where it does nothing for rankings.

---

## 2. ⚠️ Mechanism — this revises the 2026-09-19 verbal recommendation

The morning brief proposed "a credit link in the booking template." **On working through it, that is the wrong primary mechanism, and it should not ship as a dofollow keyword-anchored link.**

An automatic, vendor-injected link, carrying a commercial keyword anchor, deployed identically across 180 customer domains, is the textbook widget-link pattern in Google's link-scheme guidance. At 180 domains it is trivially detectable — same anchor, same target, same DOM position, same CMS fingerprint, all appearing in the same window. The likeliest outcome is that the whole set is discounted; the tail risk is worse, and it would land on Birdie's customers' domains, not just Birdie's.

**Recommended: two layers, doing two different jobs.**

| Layer | Mechanism | rel | Job |
|---|---|---|---|
| **A — scale** | "Powered by Birdie" in the booking template | `nofollow` | Brand exposure + referral traffic. **No SEO value, by design.** |
| **B — authority** | Editorial mention on the venue's own site, asked for at onboarding | dofollow (natural) | The actual C1 lever. Lower volume, genuinely editorial, no footprint. |

Layer B is where the ranking value comes from. It converts at maybe 20–40%, not 100% — and that variance is the point: 40 links a venue chose to write, in their own words, on their own page, are worth more than 180 identical ones and carry none of the risk.

**Luke's call:** ship both, or B only. Recommend both — A costs nothing, and the referral traffic is real (Clarity already shows partner-directory links sending sessions: `remotelock.com` 3, `getkisi.com` 2 in 7 days).

---

## 3. Layer A — booking template credit

Placement: footer of the venue's Birdie booking page, below the venue's own content. Opt-out available in venue settings (see §6).

```html
<a href="https://www.birdiegrow.com/?utm_source=booking_widget&utm_medium=referral&utm_campaign=powered_by"
   rel="nofollow"
   class="birdie-credit">Powered by Birdie</a>
```

- `rel="nofollow"` is **deliberate and must not be "optimised" later.** It is what makes the identical-across-180-domains placement safe.
- Points at the homepage, not the pillar. A nofollow link passes nothing either way, so aim it at the page that converts a curious operator.
- UTM tags make this measurable in GA4 independently of Ahrefs.
- **This link lives on `app.birdiegrow.com` (Lovable) — it is not a change to this repo.** Per standing instructions, nobody touches the Lovable app or its DNS without Luke doing it or explicitly directing it.

---

## 4. Layer B — the onboarding ask

This is the part that earns rankings. It is a human ask, made once, at the moment goodwill is highest: the venue has just gone live and the booking flow is working.

### 4a. Give before asking — fix `/customers/` first

`src/pages/customers.astro` currently features **five** venues (Private Links Utah, All Seasons Indoor Golf, Fairways Pub Grub & Indoor Golf, GoGolf Lounge, Swing Den) with video stories and **zero outbound links to any of them.** That is a reciprocity hook sitting unused: Birdie is publicizing these businesses and giving them nothing linkable in return.

**Recommended change (small, safe, and this repo's work):** link each venue name to the venue's own site, `rel="noopener"`, no nofollow — these are real businesses Birdie is genuinely featuring. It makes the ask in §4b reciprocal rather than one-sided, and it is the difference between "can you link us?" and "we've featured you here."

Not staged in this run — it needs the five venue URLs, which are not in the repo.

### 4b. The ask, as copy

Send after first successful booking week, from a person, not a system:

> Hey {name} — congrats on the first week live, {N} bookings through already.
>
> One small favour if you're up for it. We've featured {venue} on our customer stories page: {link}
>
> If Birdie's been useful, a line about it somewhere on your site would genuinely help us — an "about" page, a FAQ, wherever it fits naturally. Your words, not ours; I'm not going to send you copy to paste. Something like how you handle bookings or door access, mentioning Birdie, with a link if it makes sense.
>
> Completely fine to say no — it won't change anything about your account.

**Rules for whoever sends this:**

- **Never supply the anchor text or the sentence.** The moment 40 venues publish the same sentence, Layer B has become Layer A with extra steps. If they ask what to write, tell them to describe what they actually do.
- **Never make it a condition** of support, pricing, feature access or onboarding completion. Linking in exchange for anything of value is a link scheme regardless of how it is worded.
- **Ask once.** No follow-up, no reminder sequence.
- Let them pick the page. A genuine mention on an "about" page beats a forced one on a homepage.

### 4c. Target variation

Do not send everyone to one URL. Suggest *if they ask*, otherwise let them choose:

| Venue's angle | Natural target |
|---|---|
| "how our booking works" | `/golf-simulator-booking-software/` |
| unattended / 24-7 access | `/blog/golf-simulator-door-access/` |
| memberships / hour banks | `/resources/golf-simulator-membership-program/` |
| general "we run on Birdie" | `/` |

Roughly half landing on the booking pillar is the goal — not all of it. A target distribution that looks like a campaign is a campaign.

---

## 5. Also fix: the four partner links

Same problem, different source. **All four earned access-control links point at the homepage**, which already ranks #1 for brand and needs nothing: getkisi.com (DR72), prodatakey.com (DR60), pdk.io (DR38), remotelock.com (DR67).

For **future** partners the ask is: load-time dofollow in raw HTML (not JS-injected — PDK's sat uncrawlable for weeks), pointed at `/golf-simulator-booking-software/`, descriptive anchor. Judge each partner's CMS first: in a templated Webflow directory like RemoteLock's, per-partner anchor text is not editable and asking for it burns capital for nothing — the *URL* field usually is per-partner, which is the ask worth making.

Do not re-open the RemoteLock anchor request. Investigated 09-06 and rejected.

---

## 6. Guard rails — non-negotiable

1. **Opt-in / opt-out, honoured.** Layer A visible in venue settings with a working toggle. A credit the customer cannot remove is not a credit.
2. **Layer A stays `nofollow` permanently.** Anyone who later "fixes" this to dofollow to capture the equity has recreated the exact risk this spec exists to avoid. Comment it in the code.
3. **No compensation, discount, or feature gate** attached to any link, either layer.
4. **No supplied anchor text** in Layer B. Ever.
5. **Cap the rate of Layer B asks** — batch by onboarding cohort. 180 editorial mentions appearing in one month is the same footprint problem in slow motion.
6. **Venue keeps their functional booking links as they are.** Nothing in this spec asks a venue to change a link that already works for their customers.

---

## 7. Measurement

**Baseline needed before shipping — not yet taken.** Page-level referring domains for `/golf-simulator-booking-software/`, via Ahrefs `site-explorer-pages-by-backlinks`. Domain-level figures as of 2026-09-19: www 231 refdomains, app 39.

Track monthly, in the morning run:

- Page-level refdomains on the booking pillar (the real KPI)
- `www.birdiegrow.com` refdomains vs `app.birdiegrow.com` — the ratio is the whole point of this work
- Position of `golf simulator booking software` (weekly GSC history, not window averages)
- GA4 sessions on `utm_campaign=powered_by` for Layer A

**Do not use:** Domain Rating, or total `birdiegrow.com` refdomains. Both are dominated by `.xyz`/`.shop` PBN noise that Ahrefs classifies `is_spam=false` — four more registered on 09-19 alone.

**Expected timeline.** Link discovery 2–6 weeks; ranking effect a further 1–3 months. If the booking term has not moved out of the mid-20s by ~January, the hypothesis that page-level authority is the binding constraint is wrong and should be revisited rather than doubled down on.

---

## 8. Open for Luke

1. **Both layers, or Layer B only?** (§2 — recommend both.)
2. **The five venue URLs** for the `/customers/` outbound links (§4a).
3. **Who sends the Layer B ask** and at what point in onboarding.
4. Confirm Layer A goes on the **redesign** build rather than being retrofitted — that was the 09-16 rationale for tying C1 to the redesign at all.
