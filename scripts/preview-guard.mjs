// Runs after `astro build` (see package.json). On any Cloudflare Pages build that is NOT the
// production branch (main) it makes the output un-indexable: robots.txt disallow-all, a
// sitewide X-Robots-Tag header, and no sitemap files. On main (or locally, where
// CF_PAGES_BRANCH is unset) it does nothing, so production output is unchanged.
import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs';
const branch = process.env.CF_PAGES_BRANCH;
if (!branch || branch === 'main') { console.log('[preview-guard] production/local build — no changes'); process.exit(0); }
writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow: /\n');
const headers = existsSync('dist/_headers') ? readFileSync('dist/_headers', 'utf8') : '';
writeFileSync('dist/_headers', `/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n\n${headers}`);
for (const f of ['sitemap-index.xml', 'sitemap-0.xml']) if (existsSync(`dist/${f}`)) rmSync(`dist/${f}`);
console.log(`[preview-guard] preview build (${branch}) — noindex headers + robots disallow applied`);
