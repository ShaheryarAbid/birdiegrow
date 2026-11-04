# Figma inventory

Status: discovery in progress. Metadata coverage is not equivalent to visual inspection.

Source file: `18tWTm5kY5BLTZgxVkOmc3`.
The MCP document page list contains `Cover` (`0:1`) and `Design` (`63:49`).
The supplied target is a **section**, `Birdie Design 30.10.2026` (`2049:91475`), within `Design`.
This resolves the user's shorthand “birdie design 30.10.26” without selecting an older design.

The complete target metadata contains 21,175 nodes. Desktop frames are generally 1440px;
mobile frames are 393px. Tablet frames have not been identified.
`evidence/target-metadata.xml` preserves the complete inspected subtree.
`evidence/frame-index.json` indexes frames, sections, dimensions, and local CSS line ranges.
`evidence/section-headings.json` records initial section text for the desktop page frames.

Initial detailed design contexts: desktop home hero `2049:106216`, mobile home hero `2049:106526`.
Full home screenshots: desktop `2049:106215`, mobile `2049:106525`, saved under `figma/`.
Other frames currently have structural inspection only; their design context and screenshot coverage
will be recorded as they are inspected.

## Complete page/template route map

All IDs below are in the supplied target section. “Existing” describes route presence, not fidelity.
All 179 direct frames (including title labels and state frames) matched the CSS export by name and
canvas coordinates. See the machine-readable index for every section ID and reference line range.

| Page/template | Desktop | Mobile | Local route | Discovery |
| --- | --- | --- | --- | --- |
| Home | 2049:106215 | 2049:106525 | `/` | Existing; screenshots and hero/product context inspected |
| Product overview | 2049:108054 | 2049:109041 | `/features/` | Existing; structure/CSS |
| Payments & revenue | 2049:110102 | 2049:110478 | `/revenue/` | Existing; structure/CSS |
| SMS & marketing | 2049:110840 | 2049:111107 | `/sms/` | Existing; structure/CSS |
| Integrations hub | 2049:111827 | 2049:112248 | `/integrations/` | Existing; structure/CSS |
| Integration detail (Kisi) | 2049:112674 | 2049:112805 | `/integrations/kisi/` and shared detail template | Existing; structure/CSS |
| Pricing | 2049:112927 | 2049:113071 | `/pricing/` | Existing; structure/CSS |
| Venue website add-on | 2049:113176 | 2049:113767 | `/venue-website/` | Missing; desktop screenshot and hero/intro context inspected |
| Customers | 2049:105272 | 2049:105293 | `/customers/` | Existing; structure/CSS |
| Resources hub | 2049:105316 | 2049:105397 | `/resources/` | Existing; structure/CSS |
| Guide template | 2049:105492 | 2049:105667 | `/resources/[...slug]/` | Existing; structure/CSS |
| Blog hub | 2049:106160 | 2049:105850 | `/blog/` | Existing; structure/CSS |
| Blog template | 2049:106051 | 2049:105936 | `/blog/[...slug]/` | Existing; structure/CSS |
| Calculator hub | 2049:95911 | 2049:95977 | `/resources/calculators/` | Existing; structure/CSS |
| Startup cost calculator | 2049:96120 | 2049:96044 | `/resources/startup-cost-calculator/` | Existing; structure/CSS |
| Revenue calculator | 2049:96344 | 2049:96296 | `/resources/revenue-calculator/` | Existing; structure/CSS |
| Break-even calculator | 2049:96531 | 2049:96450 | `/resources/break-even-calculator/` | Existing; structure/CSS |
| Membership pricing calculator | 2049:96762 | 2049:96690 | `/resources/membership-pricing-calculator/` | Existing; structure/CSS |
| Compare hub | 2049:97473 | 2049:97360 | `/compare/` | Existing; structure/CSS |
| Comparison detail (Avus) | 2049:97589 | 2049:98041 | `/birdie-vs-avus-systems/` and shared comparison template | Existing; structure/CSS |
| Door access | 2049:98563 | 2049:98943 | `/features/door-access/` | Existing; structure/CSS |
| Bay booking & waivers | 2049:99238 | 2049:100037 | `/features/bay-booking/` | Existing; structure/CSS |
| Bay Agent | 2049:100705 | 2049:101423 | `/features/bay-agent/` | Missing; sparse context only; duplicate/unfinished body content in design |
| Leagues & events | 2049:102071 | 2049:102585 | `/features/leagues-events/` | Existing; structure/CSS |
| Memberships & passes | 2049:102985 | 2049:103741 | `/features/memberships/` | Existing; structure/CSS |
| Book a Demo (light form variant) | 2049:104366 | 2049:104461 | `/book-a-demo/` | Missing variant; reuse existing form behavior |
| Demo landing page | 2049:93117 | 2049:93395 | `/demo/` | Existing; structure/CSS |
| Booking System step 0 | 2049:93665 | 2049:94171 | `/lpbookingsystem/`, `/lpadvertising/` | Existing wizard |
| Booking System steps 1–5 | 2049:93716, 93774, 93832, 93890, 93953 | 2049:94216, 94252, 94288, 94324, 94365 | Same wizard | Existing; structure/CSS |
| Booking System error states | 2049:94013, 94080 | 2049:94403, 94447 | Same wizard | Existing; structure/CSS |
| Calendly handoff | 2049:94140 | 2049:94485 | `/book-demo/` and wizard final step | Existing integration |
| Mobile app | 2049:94490 | 2049:95739 | `/features/mobile-app/` | Existing, intentionally noindex; real store URLs missing |
| Contact | 2049:104744 | 2049:104824 | `/contact/` | Existing; structure/CSS |
| Privacy | 2049:104899 | 2049:105022 | `/privacy/` | Existing; structure/CSS |
| Terms | 2049:105089 | 2049:105208 | `/terms/` | Existing; structure/CSS |
| Platform | 2049:91482 | 2049:91869 | `/platform/` | Existing; structure/CSS |
| SEO landing template | 2049:92326 | 2049:92804 | `/golf-simulator-software/` and existing SEO page family | Existing; structure/CSS |
| 404 (desktop frame named “405”) | 2049:93089 | 2049:93101 | `/404.html` | Existing; heading confirms not-found intent |

State-only frames belong to their page, not separate URLs: homepage preview/analytics, process,
feature, pricing, stories and logo-hover variants; SMS tabs 5–7 and hero states 10–11; calculator
“Other Parameters”; SEO accordion states 6–8; Bay booking states 9/3; Leagues state 2;
mobile-app groups 35/36; product overview Revenue intelligence; venue-site alternative hero.
Error versions of the light demo form are `2049:104555` / `2049:104650`.

Screenshot/context access for the remaining rows is blocked by the Figma plan quota. The CSS and
metadata provide structural evidence, but cannot certify actual appearance, asset identity or states.
