# Animation and interactions

Status: discovery in progress.

`get_motion_context` recursively queried `2049:91475` and returned `{"nodes":[]}`.
A separate read-only traversal of all descendants found **zero prototype reactions**.
Therefore exact transition durations, easing, navigation targets, and scroll behavior are not
verified prototype specifications. Separate drawn states still provide visual interaction guidance.

The home design context explicitly includes the “Shape-based particles” shader, with the same
effect family already ported under `src/scripts/shader/`. It is animated and pointer-sensitive.
Existing runtime depends on experimental HTML-in-Canvas APIs and needs a graceful fallback,
reduced-motion support, and offscreen suspension checks.

Existing interactions to preserve and validate:

- Mobile navigation; current code only toggles a class and lacks Escape/close-on-navigation behavior.
- Home product tabs/accordion and feature tabs; current ARIA state is incomplete.
- Product tabs, accordions, guide topic navigation.
- Calculator number/range/radio inputs and computed results.
- Booking wizard validation, state persistence, attribution, lead submission, Calendly handoff.
- Customer video facades, email clipboard control, and app login.

No arbitrary scroll reveal or carousel motion will be described as Figma-verified. Any adaptation
must be documented and respect reduced motion.
