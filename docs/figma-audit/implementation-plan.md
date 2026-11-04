# Implementation plan

Status: available discovery and route map complete. Implementation can proceed for verified work.
Remaining Figma screenshot/context acquisition is blocked by the Starter-plan quota.

1. Index all target frames and local reference ranges; inspect desktop/mobile screenshots and context
   for every unique page/template, plus relevant state frames.
2. Audit every route and shared component, including source scripts, data, Cloudflare handlers,
   SEO behavior, local assets, and baseline rendering.
3. Establish per-route mapping and verified deviations; reuse working Astro architecture.
4. Implement shared typography, spacing, header/footer, accessibility and interaction foundations.
5. Bring existing page families into agreement with verified target frames. Add missing Bay Agent
   and venue website add-on routes after inspecting their complete designs.
6. Preserve calculator, lead wizard, integration, article, comparison, legal, and SEO behavior.
7. Build locally. Check every generated route; exercise interactive flows with intercepted submissions.
8. Compare desktop (1440), mobile (393), and adapted tablet (768/1024) output with local Figma renders.
   Fix discrepancies, update evidence and known gaps, and report actual coverage.

No commits or remote operations. No publishing or Figma mutation. References remain read-only.

## Concrete first implementation batch

- Correct homepage hero and preview using saved high-fidelity contexts and downloaded assets.
- Improve shared controls, navigation, semantic landmarks, focus, and reduced-motion handling.
- Preserve all 104 existing routes and working forms/calculators.
- Add venue website route from the saved desktop screenshot, context and corresponding local CSS.
- Implement available Bay Agent and light demo variants using existing functional components;
  document incomplete source design and unverified visual details rather than inventing evidence.
- Audit every generated route at desktop/tablet/mobile widths with external requests blocked.
