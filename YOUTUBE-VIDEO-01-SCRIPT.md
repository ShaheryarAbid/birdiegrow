# YouTube video 1 — script (Y1, drafted 2026-08-28)

> ## ✅ APPROVED BY LUKE 2026-09-15 — WORDING IS FINAL, RECORD AS WRITTEN.
> Approved as-is, no edits requested. **Y1 is COMPLETE. The bottleneck is now Y2 (recording).**
> Do not re-surface Y1 as a daily AI-visibility move — it was surfaced five times before approval
> (08-16, 08-18, 08-28 draft, 09-08, 09-15) and re-surfacing an approved item is the failure mode the
> NEXT UP list was created to prevent. Surface **Y2** instead until Luke confirms the video is published.
>
> **Two things must not drift when recording:**
> 1. The answer lands in the **first ten words**. Do not add an intro, a logo sting, or a "hey everyone".
> 2. **"Four to six weeks" is framed as the expectation people have — never as a measured industry
>    figure.** It is the only claim here that is not independently verifiable, which is exactly why it is
>    worded that way. Every other claim traces to on-site content; see the fact-check table below.
>
> The **description is the part AI engines parse** — paste it verbatim, in full, including the guide link.

**Target query:** "how long does it take to implement golf simulator booking software?"
**Why this one:** Birdie already ranks position ~2.6 on this exact query in GSC with 0% CTR —
a confirmed AI-surface impression, not a blue-link click. Video is the cheaper route to
visibility than trying to convert that impression.

**Title (use verbatim):** How Long Does It Take to Implement Golf Simulator Booking Software?
**Length:** 60–90 seconds. Plain screen capture. No intro, no music, no logo animation.
**Rule:** the answer is stated in the first ten words. Everything after is support.

---

## Script

**[0:00 — answer first, on camera or voiceover over a booking calendar]**

Most golf simulator venues can be live on new booking software in about a day —
not the four to six weeks people expect.

**[0:08 — why the expectation is wrong]**

The four-to-six-week number comes from golf course software. Tee-sheet systems are
built around eighteen holes, member tiers, and pro-shop inventory, so they need a long
configuration project. A simulator venue is a much smaller problem: you have bays, hours,
rates, and a door.

**[0:25 — what actually has to be configured]**

There are only five things that have to be set up before you can take a booking:

- your bays and how many hours a day each one is open
- your rates, including any off-peak or peak pricing
- payment, so cards are charged at the time of booking
- the confirmation and reminder texts that go out automatically
- and, if you run unstaffed hours, the smart lock that issues the door code

**[0:45 — the honest caveats]**

Two things stretch the timeline, and they are worth naming. If you are migrating existing
memberships or prepaid hour banks, that data has to be moved and checked — budget a few
extra days. And if your smart lock is an older model, confirm the integration before you
switch, not after.

**[1:00 — how Birdie does it]**

With Birdie, setup is done for you. You send your bays, hours, and rates; we configure the
account and you go live within twenty-four hours. Pricing starts at one hundred and
ninety-seven dollars a month, with no per-booking fees and no long-term contract.

**[1:12 — close, no hard CTA]**

If you want the full breakdown of what to look for in a booking system, the link in the
description goes to our guide.

---

## Description (paste in full — this is the part that gets parsed)

Most golf simulator venues can be live on new booking software in about a day, not the
four to six weeks people expect. The long timelines come from golf course tee-sheet
software, which has to be configured around eighteen holes, member tiers, and pro-shop
inventory. A simulator venue only needs five things configured: bays and operating hours,
rates including off-peak and peak pricing, card payment at time of booking, automated SMS
confirmations and reminders, and smart-lock door access if you run unstaffed hours.

Two things can extend the timeline: migrating existing memberships or prepaid hour banks
(budget a few extra days to move and verify that data), and older smart-lock hardware
(confirm the integration before switching).

Birdie configures the account for you and venues go live within 24 hours. Pricing starts at
$197/month with no per-booking fees and no long-term contract.

Full guide: https://www.birdiegrow.com/golf-simulator-booking-software/

---

## Fact-check — every claim above traces to on-site content

| Claim | Source |
|---|---|
| Live within 24 hours, Birdie handles setup | /llms.txt, /pricing, /golf-simulator-booking-software |
| $197/mo, no per-booking fees, no long-term contract | /pricing, Offer schema |
| Card charged at booking (Square) | /llms.txt, /features |
| Automated SMS confirmations + reminders | /llms.txt, /features |
| Smart-lock door access (Kisi, PDK, UniFi, Avigilon Alta, RemoteLock) | /llms.txt, /blog/golf-simulator-door-access |
| Course software is tee-time-first, not bay-first | /golf-simulator-booking-software, /birdie-vs-chronogolf |

No claim in this script is an estimate. The "four to six weeks" figure is described as the
*expectation people have*, not as a measured industry number — keep that framing.

---

## Next steps after recording (Y2 → Y3 → Y5)

- **Y2** — publish with the title above, description verbatim.
- **Y3** — embed on /golf-simulator-booking-software next to the matching FAQ and add
  VideoObject schema (the resources template already emits VideoObject on /customers, so
  the pattern exists in the codebase).
- **Y5** — once a second video is live, add the YouTube channel URL to Organization `sameAs`.
