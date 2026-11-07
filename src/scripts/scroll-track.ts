/** Runs `update` at most once per animation frame while `root` is near the viewport (scroll, resize, size change, reduced-motion change). */
export function track(root: HTMLElement, update: () => void) {
  let visible = false;
  let frame = 0;
  const schedule = () => {
    if (!visible || frame) return;
    frame = requestAnimationFrame(() => { frame = 0; update(); });
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  }, { rootMargin: '100px' }).observe(root);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  new ResizeObserver(schedule).observe(root);
  matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', schedule);
}
