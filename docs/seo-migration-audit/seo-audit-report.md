# BirdieGrow SEO URL & Migration Audit

**Audit date:** 2026-11-12<br>
**Repository snapshot:** `main` at `39c342b`<br>
**Old site:** <https://www.birdiegrow.com/><br>
**New preview:** <https://birdie-website-omega.vercel.app/>

## Executive Summary

| Measure | Result |
| --- | ---: |
| Old sitemap URLs | 93 |
| Additional old URLs found by same-origin crawl | 3 |
| Total verified old URLs | **96** |
| New Astro HTML routes generated and verified on preview | **104** |
| New sitemap URLs (live preview and local build agree) | **98** |
| Old paths retained exactly | **96 / 96** |
| Moved old pages requiring a migration redirect | **0** |
| Missing old pages | **0** |
| New-only routes | **8** |
| Old slashless aliases whose permanent redirect should be preserved | **95** |

Every old sitemap URL and all three additional crawl-discovered pages resolve
on the new preview at the same lowercase pathname with the same trailing
slash. Each old and new page returned HTTP 200 at its canonical path. The
preview hostname differs from the old production hostname as expected; the
new page canonicals point to the existing `https://www.birdiegrow.com/`
production origin and retain the old paths.

There are **no moved-page 301s** and no homepage fallbacks are recommended.
The [redirect-map.csv](./redirect-map.csv) records 95 slashless aliases as
recommended permanent canonicalization redirects, not as moved pages.

## Scope and Method

1. Fetched the old sitemap index and its referenced `sitemap-0.xml`. The
   sitemap contains 93 unique URLs.
2. Crawled the old homepage and sitemap URLs, following same-origin HTML links.
   The crawl found three additional public pages not listed in the sitemap:
   `/privacy/`, `/terms/`, and `/sms-terms/`. All 96 discovered URLs returned
   HTTP 200.
3. Enumerated every non-404 HTML file in the Astro `dist/` output (104 routes),
   then verified those paths against the live Vercel preview. All 104 returned
   HTTP 200.
4. Compared live page title, description, canonical, robots directive, H1 and
   Open Graph title, description, URL, type, and image. Values are recorded
   page-by-page in [metadata-comparison.csv](./metadata-comparison.csv).
5. Compared the old sitemap, live preview `/sitemap-0.xml`, and locally
   generated `dist/sitemap-0.xml`. The preview and local generated sitemaps
   contain the same 98 URLs.
6. Inspected HTTP/HTTPS, `www`/non-`www`, trailing-slash, casing, robots, and
   sitemap behavior. The crawl did not use Search Console, analytics, access
   logs, or external backlink databases.

The audit was performed against the public sites and the Astro build in the
repository snapshot above. Pages that are completely unlinked and absent from
the sitemap cannot be enumerated by a public link crawl; check Search Console,
analytics, historical server logs, and backlink exports before final launch.

## URL Mapping

- All **93** old sitemap paths are present in the new site's generated sitemap.
- All **three** old crawl-only legal paths remain implemented and `noindex,
  nofollow`, as before.
- The [url-comparison.csv](./url-comparison.csv) has one row per old URL; all
  96 are `Exact Match` by pathname, casing, and trailing slash.
- No old page is missing, renamed, or mapped to an unrelated page.
- The new site adds eight routes. Five are indexable and included in the new
  sitemap; three are noindex and excluded. Their full list and indexability
  are in [new-urls.csv](./new-urls.csv) and
  [missing-pages.md](./missing-pages.md).

## Redirects, URL Variants, and Chains

### Trailing slashes

- On the old production host, all 95 non-root sitemap/crawl paths requested
  without a trailing slash return a permanent **308** directly to the
  trailing-slash form. The root needs no such redirect.
- On the Vercel preview, all 104 routes return **200** both with and without a
  trailing slash. The page canonical uses the trailing-slash production URL,
  but the preview does not redirect the slashless alias.
- Preserve the existing permanent slash-normalization behavior when replacing
  production. A 301 is suitable for these GET-page aliases, or retain 308 if
  that is the deployment's standard. The 95 source/destination pairs are in
  [redirect-map.csv](./redirect-map.csv).
- The old and generated sitemaps themselves contain unique URLs; the 98 URLs
  in the generated sitemap all have matching production canonicals.

### Host and scheme

Verified on the old production host:

- `http://www.birdiegrow.com/` → `https://www.birdiegrow.com/` (301).
- `https://birdiegrow.com/` → `https://www.birdiegrow.com/` (301).
- `http://birdiegrow.com/` → HTTPS non-www → HTTPS www (two 301 hops).
- The old `/pricing` alias redirects once (308) to `/pricing/`.

The Vercel preview redirects HTTP to HTTPS (308). Its sitemap index currently
points to `https://www.birdiegrow.com/sitemap-0.xml`, which is the **currently
live old sitemap** and contains 93 URLs. The preview's direct
`/sitemap-0.xml` endpoint and the local Astro build each contain the expected
98 new-site URLs. After production replacement, verify that the production
sitemap index resolves to the new 98-URL sitemap.

### Casing

The audited URLs are lowercase. Uppercase probes such as `/Pricing/` returned
404 on both old production and the new preview; preserve the existing lowercase
paths exactly.

## SEO Metadata Findings

For the 96 old URLs with a same-path new page:

| Field | Result |
| --- | --- |
| SEO title | Identical on all 96 pages |
| Meta description | Identical on 86; changed on 10 |
| Canonical URL | Identical on all 96 pages |
| Robots directive | Identical on all 96 pages |
| H1 | 47 identical; 49 differ only in capitalization and/or punctuation |
| OG title, URL, type, image | Identical on all 96 pages |
| OG description | Identical on 86; changed on the same 10 pages |

All ten changed descriptions are pricing-related: the old copy says `$197/mo`
and the new copy says `$227/mo`. This appears consistent with an updated
product price, but confirm that `$227/mo` is approved and current before
launch. If not, restore the former description and OG description. No wording
changes were found in H1s after normalizing case and punctuation.

The ten affected paths are `/birdie-vs-booked-bays/`, `/birdie-vs-butter/`,
`/birdie-vs-golf918/`, `/birdie-vs-itg-golf/`, `/birdie-vs-playbypoint/`,
`/birdie-vs-proagenda/`, `/birdie-vs-simbook/`, `/birdie-vs-teeflow/`,
`/birdie-vs-whoosh/`, and `/pricing/`.

The 93 sitemap pages do not set a robots meta tag and are indexable by default.
The three old legal pages and the three new-only excluded routes
(`/features/mobile-app/`, `/lpadvertising/`, `/lpbookingsystem/`) are
`noindex, nofollow`. The two new campaign pages share a title and description,
but are noindex and omitted from the sitemap. The 98 sitemap URLs have unique
titles, descriptions, and canonical URLs.

The Vercel preview's `robots.txt` allows crawling and references the production
sitemap. Preview pages use production-domain canonicals. Consider restricting
or noindexing the preview until launch so staging URLs are not independently
crawled or surfaced.

## Sitemap and Launch Plan

- [proposed-sitemap.xml](./proposed-sitemap.xml) is the generated, verified
  98-URL sitemap. It contains only unique canonical, indexable URLs that
  returned HTTP 200 on the preview; it retains all 93 old sitemap URLs and adds
  five routes:
  `/features/bay-booking/`, `/features/door-access/`,
  `/features/leagues-events/`, `/features/memberships/`, and
  `/venue-website/`.
- The six noindex routes are excluded from that sitemap.
- Keep all 96 existing paths, including the three legal paths that were not in
  the old sitemap.
- Preserve the old host/scheme normalization and trailing-slash redirects.
- Verify on the production hostname after deployment: status codes, canonical
  URLs, redirects (no chains), robots directives, sitemap index and sitemap
  contents, and Search Console coverage.
- Check historical Search Console and backlink data for URLs not discoverable
  from the old sitemap or internal links.

## Deliverable Files

- [old-urls.csv](./old-urls.csv) — sitemap and crawl-discovered old URLs.
- [new-urls.csv](./new-urls.csv) — generated Astro routes and live preview
  metadata/status.
- [url-comparison.csv](./url-comparison.csv) — mapping for every verified old
  URL.
- [redirect-map.csv](./redirect-map.csv) — slashless alias redirect
  recommendations; no moved-page redirects are required.
- [metadata-comparison.csv](./metadata-comparison.csv) — old/new SEO fields
  for all 96 matched URLs.
- [missing-pages.md](./missing-pages.md) — missing-page result and new-only
  routes.
- [proposed-sitemap.xml](./proposed-sitemap.xml) — new canonical sitemap
  proposal.
