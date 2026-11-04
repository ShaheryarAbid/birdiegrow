# Birdie marketing site (Astro + Cloudflare Pages)

A static, SEO-first rebuild of the birdiegrow.com marketing site. The booking app
stays a separate project — this repo is only the public website.

## Run locally
Requires Node 18+.
```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
```

## Why this fixes the SEO
Every page renders per-page canonical, title, description, OG, and JSON-LD into the
raw HTML (BaseLayout.astro). Unknown paths return a real 404 (404.astro), security
headers ship via public/_headers, and a sitemap is generated on build. Canonical
host is www.birdiegrow.com to match the live site.

## Structure
- src/consts.ts — site config + nav
- src/layouts/BaseLayout.astro — the SEO engine
- src/pages/index.astro — homepage
- src/pages/[slug].astro — generated head-term, comparison, US state, Canada, demo pages
- src/data/pages.ts — data that drives the generated pages
- src/pages/resources, src/pages/blog + src/content/** — Markdown-driven articles
- public/_headers, _redirects, robots.txt — Cloudflare config
- .github/workflows/daily-seo.yml — morning Lighthouse audit

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub.
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git.
3. Build command `npm run build`, output dir `dist`. Deploy.
4. Verify on the *.pages.dev preview URL.
5. Add custom domain birdiegrow.com + www; add Redirect Rules (http->https, one canonical host).
6. Submit sitemap-index.xml in Google Search Console.

## Note
Long-tail page body copy (state, comparison, resource, blog pages) is representative
draft text — titles, slugs, meta, and structure are final; deep copy is still being
ported from the live site. Add a real public/og-default.jpg before launch.
