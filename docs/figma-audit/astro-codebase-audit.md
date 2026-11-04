# Astro codebase audit

Status: available discovery complete; detailed Figma visual inspection remains externally blocked.

Astro 5 (`^5.18.2`) with `@astrojs/sitemap` (`^3.7.3`), npm lockfile v3.
No React, Tailwind, UI library, animation library, or test runner is installed as a project dependency.
Node v24.13.1 and npm 11.8.0 are available. Python Playwright and Pillow are available outside the project.
No dependency installation is currently needed.

Scripts: `dev`, `build`, `preview`, `astro`. Build runs Astro and a local preview-indexing guard.
Configuration uses static directory output and inlines stylesheets, with canonical site URL
`https://www.birdiegrow.com`. Sitemap deliberately omits legal/ad pages, the unconfirmed mobile app
page, and a merged blog URL. Preserve these functional decisions.

BaseLayout owns metadata, canonical/OG/Twitter, JSON-LD, breadcrumbs, preview noindex, attribution,
analytics, navigation, footer, font preloads, and shader initialization.
Some page components render their own `main` inside BaseLayout's `main`; semantics need correction.

The project is already partly redesigned, with reusable sections and route-specific styles.
Global legacy CSS and newer tokens coexist; existing overrides and inherited typography require
checking before introducing additional global rules.

Cloudflare functions handle `/api/lead`, `/api/booking`, and Calendly webhooks. They are not served by
Astro's static dev server. Local browser QA must intercept submissions with deterministic fixtures
instead of contacting real CRM/calendar services. Source functions and attribution must be preserved.

Content collections generate blog/resource articles; dynamic pages generate comparisons, regions,
and integration details. Existing text and SEO functionality must survive shared-template changes.

Local CI configuration was read only: a scheduled Lighthouse workflow exists. It has not been run,
and no GitHub integration, remote repository operation, commit, upload, or deployment is authorized.

The web-design-guidelines skill points to a GitHub-hosted rules file. Fetching it is skipped to honor
the user's explicit no-GitHub restriction. Local semantic, keyboard, contrast, and reduced-motion
checks will still be performed.

## Baseline and implementation boundary

The unmodified site builds successfully: 104 static pages, no build warnings, preview guard no-op.
There are 183 indexed source/content/script files. Every route's component composition and browser
script hooks were scanned; shared layout, navigation, product, booking, article, calculator,
customer-video, and API-handler entry points were read. Raw generated inventory is retained.
Full desktop/mobile baseline homepage screenshots expose specific differences from target.

Initial confirmed issues: reversed phone frame orientation; incorrect screen skew; mobile hero
paragraph constrained to 340px rather than 361px; absent hero blur; incomplete tab semantics;
nested main landmarks; mobile menu cannot close using Escape; unchecked Calendly message origins;
clipboard promise rejections not handled; shader has no reduced-motion guard or offscreen pause.

Detailed visual QA cannot be completed for every page until the Figma quota blocker is resolved.
Shared fixes and new routes based on available evidence will be recorded explicitly as such.
