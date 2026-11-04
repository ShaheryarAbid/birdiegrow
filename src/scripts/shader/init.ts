// Included once by BaseLayout. Loads the (large) shader runtime only on pages that actually contain shader hosts.
if (typeof document !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches && document.querySelector('[data-shader-params]')) {
  import('./runtime').then((m) => m.initShaders());
}
