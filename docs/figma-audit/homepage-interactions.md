# Homepage corrections — 2026-11-03

This batch takes priority over the remaining page rebuild. Source: the user's new full site
exports in `design-references/` and ten attached state screenshots, in addition to the earlier
Figma evidence. Original references are read-only. No remote Git, commits, deployments, uploads,
new packages or subagents.

## Discovery

Indexed all 228 files (225 PNG, two PDF, one CSS) with dimensions, sizes and SHA-256 hashes:
`evidence/local-exports-2026-11-03.json`. The new full page exports remove the previous lack of
screenshots for the remaining pages; Figma MCP itself remains quota-blocked.
The V2 exports contain alternate hero designs; use the Home desktop/mobile exports and the
user's latest state screenshots for this homepage batch.

## Implementation in progress

- Mobile hero: use the supplied complete 786×1582 background, covering the 393×791 hero.
  Keep the existing HTML text, buttons and statistics. Tablet uses the full art aligned right.
- Product preview: replace the mismatched mirrored frame/screen with optimized copies of the
  three supplied 1240×1190 transparent phone compositions. No stretching, masking or perspective
  transforms. Calendar is the initial state; booking shows two phones; membership shows one.
  Preserve the five owner items in the mobile reference. Booking Experience has the six accordion
  labels shown in the interaction screenshots (Bay calendar / Booking home / Analytics / Members /
  Messages / Payments). The first three match the three supplied images. Analytics deliberately
  uses the membership export as shown in the supplied screenshot; that visual is not a claim
  about the actual analytics UI. Existing messages/payment screenshots remain available.
  Hover, focus and click change both the description and image.
- Glance: complete headings and chips for Best for, Works with, Integrations, Pricing, Setup
  and the existing verified Scale facts. Use the current pricing/integration facts rather than
  dropping Helcim (beta) or Resend. Start at Best for, disable end arrows, support keyboard/touch.
- Problem cards: exactly one highlighted card; nearest viewport center selects it on scroll.
  Pointer/focus can inspect another card. Previous card resets including its toggle.
- Setup: cumulative gray rows, dark check markers, moving ball and shaded progress track.
  Hover, focus and tap can inspect steps. Reverse scrolling reverses progress.
- Logos: native links, grayscale-to-color hover/focus and the category pill from the screenshot.
  Mobile reflows actual logos so none are clipped or keyboard-focusable offscreen.
- Recreate card glow, grain, setup tiles, checks, track and tooltips in CSS/SVG. Phone/hero art
  remains the supplied artwork. Reduced motion removes travel/tweens while preserving states.

## Validation

Baseline before this batch: build passes, 105 pages. Fresh interaction and responsive verification
of this batch is pending; do not treat implementation entries above as tested yet.
