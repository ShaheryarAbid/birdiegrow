// Runs after `astro build` (see package.json). Preview builds stay crawlable so
// search engines can see their noindex metadata, and have a noindex header and no sitemap.
import { readFileSync, writeFileSync, existsSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const branch = process.env.CF_PAGES_BRANCH;
const isCloudflarePreview = Boolean(branch && branch !== 'main');
const isVercelPreview = process.env.VERCEL_ENV === 'preview';
if (!isCloudflarePreview && !isVercelPreview) {
  console.log('[preview-guard] production/local build — no changes');
  process.exit(0);
}
writeFileSync('dist/robots.txt', 'User-agent: *\nDisallow:\n');
const headers = existsSync('dist/_headers') ? readFileSync('dist/_headers', 'utf8') : '';
writeFileSync('dist/_headers', `/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n\n${headers}`);
for (const f of ['sitemap-index.xml', 'sitemap-0.xml']) if (existsSync(`dist/${f}`)) rmSync(`dist/${f}`);

function noindexHtml(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) {
      noindexHtml(file);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const html = readFileSync(file, 'utf8');
      const robotsMeta = /<meta\s+name=["']robots["'][^>]*>/i;
      const existing = html.match(robotsMeta);
      if (existing && /\bnoindex\b/i.test(existing[0])) continue;
      const updated = existing
        ? html.replace(robotsMeta, '<meta name="robots" content="noindex, nofollow, noarchive">')
        : html.replace(/<\/head>/i, '<meta name="robots" content="noindex, nofollow, noarchive">\n</head>');
      if (updated === html) throw new Error(`Could not add preview noindex metadata to ${file}`);
      writeFileSync(file, updated);
    }
  }
}

noindexHtml('dist');
const previewName = isCloudflarePreview ? `Cloudflare Pages branch ${branch}` : 'Vercel preview';
console.log(`[preview-guard] ${previewName} — noindex metadata + headers applied`);
