# Known gaps

Updated during discovery; not a completion report.

## External blocker

Figma MCP now returns: “You've reached the Figma MCP tool call limit on the Starter plan.”
This prevents remaining design contexts, screenshots, and new asset exports. Do not repeatedly
retry or use another identity to evade this limit. Restored MCP access or user-supplied exports
are needed to complete full visual acceptance. Continue independently with saved evidence,
local references, existing functionality and browser QA; do not claim Figma coverage that is missing.

Successfully saved full screenshots: home desktop/mobile and venue website desktop.
Detailed contexts: home hero desktop/mobile, home product preview, venue website hero and intro.
Complete structural metadata, section headings and variables were saved before the limit.

- Full target metadata inspected, but most unique page screenshots/design contexts are pending.
- No tablet frames identified; tablet adaptation will require reasoned interpolation.
- No prototype reactions or motion timeline were returned. Drawn states are available, but precise
  transition specifications remain unknown.
- Reference contains labels for images rather than actual image files; asset identity must be
  checked against MCP exports and existing local media.
- Some target text is visibly inconsistent: the SEO and demo FAQ descriptions mention cryptocurrency
  trading. Preserve meaningful existing Birdie copy rather than publish unrelated design placeholder text.
- Mobile app store links and commercial availability were unconfirmed in the existing project.
  Do not fabricate store URLs or remove existing noindex safeguards without real data.
- Astro dev does not run Cloudflare functions; local form QA will use intercepted API fixtures.
- Existing source comments cite an older Figma file. They do not prove accuracy to the requested target.
- The first broad read-only Figma query exceeded the tool response limit; a bounded query succeeded.
  No design changes were made by either query.
- Build and browser QA have not yet run.
