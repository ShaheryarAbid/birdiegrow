# Missing Pages and Decisions

## Result

No page found in the old site's sitemap or same-origin crawl is missing from
the new Astro build. All **96** old public HTML URLs verified in this audit
have a same-case, same-path, same-trailing-slash route on the new preview, and
all returned HTTP 200. No page needs to be implemented before launch based on
this inventory.

The three old pages found by crawling but absent from the old sitemap are
preserved and remain `noindex, nofollow` in the new site:

| Existing URL | New preview URL | Notes |
| --- | --- | --- |
| `/privacy/` | `https://birdie-website-omega.vercel.app/privacy/` | Existing legal page; intentionally omitted from sitemap |
| `/terms/` | `https://birdie-website-omega.vercel.app/terms/` | Existing legal page; intentionally omitted from sitemap |
| `/sms-terms/` | `https://birdie-website-omega.vercel.app/sms-terms/` | Existing legal page; intentionally omitted from sitemap |

## New Routes Without Old-URL Equivalents

These eight routes are implemented on the new site and do not replace any URL
found in the old-site crawl:

### Included in the new indexable sitemap

- `/features/bay-booking/`
- `/features/door-access/`
- `/features/leagues-events/`
- `/features/memberships/`
- `/venue-website/`

### Intentionally noindex and excluded from the sitemap

- `/features/mobile-app/`
- `/lpadvertising/`
- `/lpbookingsystem/`

The two landing pages share a title and meta description, but both are
`noindex, nofollow` and excluded from the sitemap. No duplicate title,
description, or canonical URL was found among the 98 sitemap URLs.

## Review / Verification Items

- Confirm the new `$227/mo` wording in ten meta descriptions and their matching
  Open Graph descriptions is the approved current price. The old live site says
  `$197/mo`; all other audited SEO titles and canonical URLs are unchanged.
- Preserve the old site's trailing-slash redirect behavior for 95 non-root
  slashless URL aliases. The old site responds with a permanent 308 redirect;
  the Vercel preview currently returns 200 for both slashless and trailing-
  slash forms. See [redirect-map.csv](./redirect-map.csv).
- Before launch, use Search Console, analytics, server logs, and backlink
  data to check for historical URLs that are neither in the old sitemap nor
  linked from the crawled site. A public sitemap-and-link crawl cannot discover
  fully unlinked URLs.
