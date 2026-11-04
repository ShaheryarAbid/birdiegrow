# Design system

Status: initial verified tokens; page-specific measurements still being audited.

MCP variables were extracted from target section `2049:91475` and saved in `evidence/variables.json`.
The local reference `design-references/css.txt` (moved out of `public/` so it is not published) begins with the exact matching section name.
It is a Figma CSS export, not a usable stylesheet: repeated comments, absolute coordinates, mixed
component and product-screen tokens, and asset labels rather than downloadable file URLs.
It must remain unchanged.

| Token | Verified value |
| --- | --- |
| UI typography | DM Sans, generally 400/500 |
| Display typography | Source Serif 4, generally 500/600 |
| Desktop H1 | 64px / 1, weight 600, tracking -3% |
| Mobile H1 | 40px / 1, weight 600, tracking -3% |
| Desktop H2 | 48px / 1, weight 600, tracking -4% |
| Mobile H2 | 32px / 1, weight 600, tracking -4% |
| Body | 16px / 1.32, weight 400, tracking -3% |
| Small body | 14px / 1.3, weight 400, tracking -3% |
| Text | #000407 |
| Secondary text | #4b5563 |
| Inverse text / secondary | #ffffff / #d1d5db |
| Accent / accent text | #22c55e / #166534 |
| Canvas / off-white surfaces | #f0f2f1 / #fdfffe |
| Light border | #e5e7eb |
| Buttons | 16px radius, 16px 24px padding; 48px icon button |
| Desktop navigation | 88px high, 20px 80px padding |
| Mobile navigation | 80px high, 16px padding |

Existing locally hosted DM Sans and Source Serif 4 are appropriate for reuse.
The existing token file references an older source file; values require checking against this audit.
SF Pro and other fonts in the CSS appear in embedded product UI and device mockups; do not globally
substitute those for the marketing site's verified fonts.
