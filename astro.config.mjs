import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.birdiegrow.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(privacy|terms|sms-terms|lpadvertising|lpbookingsystem)\/?$/.test(page) &&
        // Mobile app feature page: built but unlinked and noindex until the app is confirmed (see the page header).
        !/\/features\/mobile-app\/?$/.test(page) &&
        // Merged into /golf-simulator-booking-software/ on 2026-09-14 and 301'd in
        // public/_redirects. The source .md is still present, so Astro keeps building
        // the page and it kept appearing in the sitemap — a sitemap that lists a 301'd
        // URL is a mixed signal to Google. This filter removes it now; deleting
        // src/content/blog/golf-simulator-booking-software-guide.md later is still the
        // clean fix, and this line simply stops matching once that happens.
        !/\/blog\/golf-simulator-booking-software-guide\/?$/.test(page),
    }),
  ],
  build: { format: 'directory', inlineStylesheets: 'always' },
});
