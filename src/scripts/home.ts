import { track } from './scroll-track';

/** Homepage scroll states. One animation frame per scroll; no timers or autoplay. The setup timeline lives in setup-progress.ts. */
export function initHomeInteractions() {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

  const cards = document.querySelector<HTMLElement>('[data-scroll-cards]');
  if (cards) {
    const rows = Array.from(cards.querySelectorAll<HTMLElement>('.hm-pstep'));
    const select = (index: number) => rows.forEach((row, i) => row.classList.toggle('is-dark', index === i));
    track(cards, () => {
      const line = innerHeight * .55;
      let nearest = 0;
      let distance = Infinity;
      rows.forEach((row, i) => {
        const rect = row.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - line);
        if (delta < distance) { distance = delta; nearest = i; }
      });
      select(nearest);
    });
    rows.forEach((row, i) => {
      row.addEventListener('focusin', () => select(i));
      row.addEventListener('pointermove', () => { if (finePointer.matches) select(i); });
    });
  }
}
