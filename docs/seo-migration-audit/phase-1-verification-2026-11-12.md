# BirdieGrow SEO Migration Audit — Phase 1 Verification

**Audit date:** 2026-11-12<br>
**Primary project:** `birdie-website-main` (Astro redesign)<br>
**Reference project:** `birdiegrow-site-old` (production-site source snapshot)<br>
**Scope:** SEO URLs, metadata, structured data, sitemap, robots, and redirects<br>
**Initial verification code changes:** None. The source-level implementation follow-up and its verification are documented in the addendum at the end of this report.

## Executive Summary

The current Astro source builds successfully. The fresh build contains 104 HTML routes (excluding the 404 page); all 96 paths in the prior old-site inventory are present in that build. The generated sitemap has 98 unique URLs and matches `proposed-sitemap.xml` exactly. The prior 199-row consolidated CSV remains available and contains the URL mappings, redirect behavior, SEO fields, and recommended actions.

No moved-page redirects are required for the 96 inventoried old URLs. The existing public audit records all 96 on the same path and identifies 95 non-root slashless aliases whose permanent redirect behavior must be retained. The initial source lacked those alias rules; the implementation follow-up has added 95 explicit 308 rules. Actual production edge behavior remains unverified until deployment.

Three launch decisions remain important:

1. Approve or reject the new `$227/mo` pricing claims. Ten old-page meta descriptions and matching Open Graph descriptions changed from `$197/mo` to `$227/mo`. Product structured data also changes to `$227`. A shared new-site glance component still contains `$197` pricing chips while its page facts can say `$227`.
2. The initial verification found no source rules for the 95 slashless aliases. A follow-up added explicit 308 rules to the new repository; deploy and verify them on the actual production edge. Host/scheme canonicalization remains an external deployment setting.
3. Ensure the production sitemap index resolves to the new sitemap after cutover. The initial Vercel preview index pointed at the production hostname; the implementation follow-up removes sitemap files from preview builds.

The live production hostname could not be freshly checked from this environment: DNS resolution for `www.birdiegrow.com` failed. Accordingly, old-production status codes and sitemap counts below are identified as findings from the previous audit, not new live measurements.

## Evidence and Method

- Read the existing audit files before rechecking the repositories.
- Built the current new Astro project with `npm run build`; Astro generated 105 pages including the 404 page, and the project's preview guard completed successfully.
- Compared the fresh build's route files with the 96 rows in `old-urls.csv`: **96 found, 0 missing**.
- Compared the fresh build's sitemap and `proposed-sitemap.xml`: **98 URLs each, all unique, exact set match**.
- Parsed fresh-build metadata for the 96 matched URLs and compared it with `metadata-comparison.csv`: title, description, canonical, robots, OG title, OG description, OG URL, OG type, and OG image each match **96/96**.
- Rechecked the public Vercel preview: `/pricing` and `/pricing/` each return HTTP 200; `/sitemap-index.xml` returns HTTP 200; `/sitemap-0.xml` contains 98 unique URL entries. The index currently points to `https://www.birdiegrow.com/sitemap-0.xml`.
- Reviewed the old and new repository source for SEO layout, sitemap configuration, redirect rules, robots files, and page-specific JSON-LD.

The source projects are not equivalent to access to the Cloudflare dashboard or Worker deployment. The old project directory is not a Git checkout. No production Cloudflare account, DNS, edge-rule, Search Console, analytics, historical-log, or backlink access was available.

## URL and Route Comparison

| Measure | Verified result |
| --- | ---: |
| Prior old-site inventory | 96 URLs: 93 sitemap-listed plus 3 crawl-discovered |
| Old URLs present in current Astro build | 96 / 96 |
| Missing or renamed old paths | 0 |
| New Astro HTML routes, excluding 404 | 104 |
| New sitemap URLs | 98, all unique |
| New-only routes | 8 |
| New-only indexable routes included in sitemap | 5 |
| New-only routes intentionally noindex/excluded | 3 |

The previous audit reports that all 96 old URLs retained the same lowercase pathname and trailing slash, and that all returned HTTP 200 on the then-current preview. The current fresh build confirms the route files exist, but is not itself a fresh production HTTP check.

No root-path slashless redirect is needed. The 95 non-root slashless variants and their trailing-slash destinations are listed in [redirect-map.csv](./redirect-map.csv). They are canonicalization aliases, not moved-page redirects.

### Redirect and Host Behavior

- The previous audit records that the old production site returned permanent HTTP 308 from each of the 95 non-root slashless aliases to the trailing-slash form. This could not be rechecked because the production hostname did not resolve during this audit.
- At initial verification the Vercel preview returned HTTP 200 for both slash forms of `/pricing`; its canonical pointed to `https://www.birdiegrow.com/pricing/`. No external preview deployment was changed or rechecked after the source update.
- At initial verification, the new [public/_redirects](../../public/_redirects) contained historical path redirects and the `/sitemap.xml` rewrite but no rules for the 95 slashless aliases. The implementation follow-up has now added one explicit 308 rule per audited alias. Its comments still direct host canonicalization to an external Cloudflare Redirect Rule. Confirm the selected production deployment reads this file and preserves host/scheme behavior; repository files alone do not prove which rules are active.
- The previous audit records old-site HTTP→HTTPS and apex→`www` permanent redirects. Treat those as prior-audit findings pending verification against current Cloudflare settings.
- The old and new `robots.txt` files permit crawling and refer to `/sitemap-index.xml`. The new layout derives production canonicals from `SITE.url`; the implementation follow-up adds build-time noindex protection for Vercel previews and non-main Cloudflare Pages branches. Other preview providers still need an equivalent build marker.

## Metadata Comparison

The prior page-level comparison was checked against the fresh local build for the current new-site values.

| Field | Result across 96 matched old URLs |
| --- | --- |
| SEO title | Identical on all 96 |
| Meta description | Identical on 86; changed/review on 10 |
| Canonical URL | Identical on all 96 |
| Robots directive | 93 indexable by default on both; 3 legal pages retain noindex |
| H1 | 47 identical; 49 case/punctuation-only differences per prior comparison |
| Open Graph title, URL, type, and image | Identical on all 96 |
| Open Graph description | Identical on 86; changed/review on the same 10 |

The ten description changes are on:

- `/birdie-vs-booked-bays/`
- `/birdie-vs-butter/`
- `/birdie-vs-golf918/`
- `/birdie-vs-itg-golf/`
- `/birdie-vs-playbypoint/`
- `/birdie-vs-proagenda/`
- `/birdie-vs-simbook/`
- `/birdie-vs-teeflow/`
- `/birdie-vs-whoosh/`
- `/pricing/`

In each case, the older copy says `$197/mo` and the new copy says `$227/mo`. These values were **not approved by this audit**. Obtain the client's confirmation before launch; do not silently restore or approve either price.

### Structured Data / JSON-LD

Source and fresh-build review found:

- The shared layout emits per-page `BreadcrumbList` JSON-LD on interior routes; the old and new layouts use the same breadcrumb approach.
- The homepage retains `Organization`, `WebSite`, `SoftwareApplication`, and `FAQPage` JSON-LD.
- Customer-story `VideoObject`, blog `BlogPosting`, and resource `Article`/conditional `FAQPage` schemas remain implemented in both projects.
- The `SoftwareApplication` offer price changes from 197 to 227 in the new site's homepage and product schema sources. This is consistent with the new metadata but still requires client approval.
- The prior metadata CSV did not include JSON-LD values. The checks above are source/build checks, not a page-by-page comparison of every JSON-LD property against freshly fetched production HTML.

There is a related unresolved price inconsistency in the current new build: shared `Glance.astro` presentation chips still say “From $197/month,” while page facts and structured data can say `$227/month`. Freshly built booking-software and comparison pages contain both price strings. Resolve this only after the client confirms the current price; ensure the rendered page, metadata, and JSON-LD agree.

## Sitemap and Robots Findings

- The fresh Astro build emits 98 unique URLs; its URL set exactly equals [proposed-sitemap.xml](./proposed-sitemap.xml).
- The proposal retains all 93 prior sitemap URLs and adds five indexable routes: `/features/bay-booking/`, `/features/door-access/`, `/features/leagues-events/`, `/features/memberships/`, and `/venue-website/`.
- The three legal pages (`/privacy/`, `/terms/`, `/sms-terms/`) remain noindex and excluded. The three new-only noindex routes are `/features/mobile-app/`, `/lpadvertising/`, and `/lpbookingsystem/`.
- The initial preview test showed `/sitemap-index.xml` pointing to the production hostname and `/sitemap-0.xml` containing 98 URLs while the then-current production sitemap had 93. The follow-up preview guard removes sitemap files for Vercel preview builds as well as non-main Cloudflare Pages branches; this avoids exposing a preview sitemap index. Production sitemap state still requires post-deployment verification.
- Previous audit evidence says the sitemap entries have matching production canonicals. The fresh local-build metadata check confirms the 96 matched pages' canonical values remain identical to the comparison record.
- Both repository `robots.txt` files permit crawlers and list `/sitemap-index.xml`. A production build retains this behavior and its sitemap; a preview build removes the sitemap files.
- Before the follow-up, the tested Vercel preview allowed crawling and lacked a noindex directive. The new build guard recognizes `VERCEL_ENV=preview`; fresh Vercel and non-main Cloudflare preview builds were verified to keep crawling allowed, add `noindex, nofollow, noarchive` to every generated HTML page and the `_headers` file, and remove both sitemap files. Keeping preview pages crawlable allows search engines to read the HTML noindex directive.

## Missing or Problematic Pages

No missing old route was found in the prior public URL inventory or in the fresh local build. No page-level migration redirect is needed for those 96 paths.

Remaining uncertainty: public sitemap and internal-link discovery do not reveal fully unlinked historical URLs. Check Google Search Console, analytics, access logs, and backlink exports before cutover. The three old legal pages discovered outside the old sitemap are preserved in the new route set.

## Required Actions Before Launch

| Severity | Action |
| --- | --- |
| **High** | Obtain written approval for the `$227/mo` meta/OG descriptions and structured-data price; reconcile the remaining `$197` shared glance chips and confirm all pricing claims are current. |
| **High** | Deploy and test the 95 explicit 308 slashless-to-trailing-slash rules on the actual production edge. Retaining HTTP 308 matches recorded old behavior; use the client's established edge convention if different. |
| **High** | Verify apex/`www` and HTTP/HTTPS canonicalization in the live Cloudflare configuration, with no redirect chains. Do not infer this configuration from `_redirects` comments. |
| **High** | After deployment, verify `/sitemap-index.xml`, `/sitemap-0.xml`, and `/sitemap.xml` on the production hostname. Confirm the production index leads to the new sitemap and that its 98 entries return 200 and are canonical/indexable. |
| **Medium** | Ensure preview builds supply `VERCEL_ENV=preview` or a non-main `CF_PAGES_BRANCH` so the tested guard runs; configure equivalent noindex protection for other preview platforms. |
| **Medium** | Use Search Console, analytics, server logs, and backlink data to identify historical URLs absent from the sitemap and public crawl. |
| **Medium** | Run post-cutover checks on all 96 canonical paths, the 95 aliases, sitemap, robots, titles/descriptions, canonicals, and status codes from outside the current DNS-limited environment. |

## Consolidated Client CSV

The existing [birdiegrow-seo-migration-master.csv](./birdiegrow-seo-migration-master.csv) is the consolidated CSV deliverable; it was inspected and retained without overwriting it. It has 199 rows:

- 96 old-URL comparisons
- 8 new-only routes
- 95 trailing-slash aliases

Its columns include old/new/production-target URLs, mapping status, redirect behavior, old/new titles and descriptions, canonicals, metadata comparison statuses, evidence, client-review flags, and recommended actions. Supporting evidence remains in [old-urls.csv](./old-urls.csv), [new-urls.csv](./new-urls.csv), [url-comparison.csv](./url-comparison.csv), [redirect-map.csv](./redirect-map.csv), [metadata-comparison.csv](./metadata-comparison.csv), and [missing-pages.md](./missing-pages.md).

## Phase 1 Exit

The initial Phase 1 verification is complete. A source-only follow-up is documented below. It does not authorize metadata/pricing decisions, active Cloudflare/DNS changes, or deployment. Phase 2 has been documented separately; Phase 3 has not been started.

## Implementation Follow-up — 2026-11-12

This addendum records source changes made after review of the initial findings. Only the new repository was changed; the old production-source clone remains untouched. No active Cloudflare, DNS, production hosting, or third-party configuration was changed, and nothing was deployed.

### Fixes implemented

1. **Slashless aliases:** added 95 explicit `308` entries to the new `public/_redirects`, using `redirect-map.csv` as the source of truth. Each maps the audited non-root path to its existing trailing-slash canonical path. No URL route, content, or pricing value was changed.
2. **Preview indexing:** extended `scripts/preview-guard.mjs` to recognize `VERCEL_ENV=preview`, in addition to the existing non-`main` `CF_PAGES_BRANCH` behavior. Preview builds keep robots crawling allowed so search engines can see `noindex` meta tags injected into every generated HTML page; they also add the sitewide noindex response header and remove both generated sitemap files. Local and production builds without a preview marker are unchanged.

### Verification evidence

- Fresh production `npm run build` completed successfully: 105 pages including the 404 page (104 non-404 routes).
- All 96 paths in `old-urls.csv` have generated route files.
- All 96 established canonicals in `metadata-comparison.csv` match the generated HTML.
- Generated titles, descriptions, canonicals, and Open Graph title/description/URL/type/image each match the recorded new-side metadata for all 96 rows. This does not resolve the ten old-vs-new `$197`/`$227` price-description differences.
- The generated sitemap has 98 unique URLs and its set exactly matches `proposed-sitemap.xml`.
- All 95 audited slashless aliases have a `308` redirect in the generated `_redirects`, and each target has a generated route.
- Builds with `VERCEL_ENV=preview` and with a non-main `CF_PAGES_BRANCH` were each verified to add a noindex meta tag to all 105 generated HTML files, keep `robots.txt` crawlable, emit the noindex response header, and remove both sitemap files. The final production build keeps `robots.txt` and HTML metadata unchanged and includes the sitemap.
- No price, SEO description, structured-data value, or customer-facing copy was changed. The `$197`/`$227` discrepancy remains pending client approval.

These are source/build-output checks, not live edge checks. The redirects are not active until the new source is deployed; production host/scheme rules, the live sitemap, all production response codes, and the business price remain blockers for client/operator verification or approval.

## Subsequent Client-Directed Robots Update — 2026-11-12

The client asked that the new site follow the old site's page-level robots behavior. The preview-wide noindex behavior described in the earlier follow-up has therefore been removed: builds no longer inject preview robots metadata or response headers, rewrite `robots.txt`, or remove preview sitemap files. `BaseLayout` emits `noindex, nofollow` only when a page explicitly opts in.

Read-only inspection of the old source confirms explicit noindex on the 404, privacy, terms, SMS terms, `/lpadvertising/`, and `/lpbookingsystem/` pages. The new site retains those same directives. The new-only `/features/mobile-app/` page also remains noindex because its source marks it as unverified and not ready for indexing. Other pages use the default index/follow behavior, matching the old site's default.

Fresh production, Vercel-preview, and non-main Cloudflare Pages builds each generated 105 HTML pages. In all three builds, the only pages with a noindex meta were those six legacy pages plus `/features/mobile-app/`; preview builds added no noindex response header, kept the public crawlable `robots.txt`, and retained both sitemap files.
