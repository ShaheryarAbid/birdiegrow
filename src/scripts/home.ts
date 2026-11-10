import { track } from './scroll-track';

/** Homepage scroll states. One animation frame per scroll; no timers or autoplay. The setup timeline lives in setup-progress.ts. */
export function initHomeInteractions() {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

  const storyViewport = document.querySelector<HTMLElement>('#home-stories-viewport');
  if (storyViewport) {
    const previous = document.querySelector<HTMLButtonElement>('[data-story-prev]');
    const next = document.querySelector<HTMLButtonElement>('[data-story-next]');
    const originals = Array.from(storyViewport.querySelectorAll<HTMLElement>('.hm-story'));
    if (previous && next && originals.length > 1) {
      const makeClones = (items: HTMLElement[]) => {
        const fragment = document.createDocumentFragment();
        items.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLElement;
          clone.setAttribute('aria-hidden', 'true');
          clone.tabIndex = -1;
          clone.querySelectorAll<HTMLElement>('a, button, [tabindex]').forEach((el) => { el.tabIndex = -1; });
          fragment.append(clone);
        });
        return fragment;
      };
      storyViewport.prepend(makeClones(originals));
      storyViewport.append(makeClones(originals));
      previous.disabled = false;
      next.disabled = false;

      const firstOriginal = originals[0];
      let step = 0;
      let loopLength = 0;
      let baseScroll = 0;
      let normalizeTimer = 0;
      const section = storyViewport.closest('.hm-stories--home');
      const measureAndCenter = () => {
        const gap = Number.parseFloat(getComputedStyle(storyViewport).columnGap) || 0;
        step = firstOriginal.getBoundingClientRect().width + gap;
        loopLength = step * originals.length;
        storyViewport.scrollLeft += firstOriginal.getBoundingClientRect().left - storyViewport.getBoundingClientRect().left;
        baseScroll = storyViewport.scrollLeft;
      };
      const normalizeLoop = () => {
        const offset = storyViewport.scrollLeft - baseScroll;
        if (offset >= loopLength || offset < 0) {
          storyViewport.scrollLeft = baseScroll + ((offset % loopLength) + loopLength) % loopLength;
        }
      };
      const scheduleNormalize = () => {
        window.clearTimeout(normalizeTimer);
        normalizeTimer = window.setTimeout(normalizeLoop, 120);
      };
      const moveStory = (direction: -1 | 1) => {
        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        section?.classList.add('is-advanced');
        storyViewport.scrollTo({
          left: storyViewport.scrollLeft + direction * step,
          behavior: reduceMotion ? 'auto' : 'smooth',
        });
      };
      previous.addEventListener('click', () => moveStory(-1));
      next.addEventListener('click', () => moveStory(1));
      storyViewport.addEventListener('scroll', scheduleNormalize, { passive: true });
      storyViewport.addEventListener('scrollend', normalizeLoop);
      window.addEventListener('resize', measureAndCenter);
      measureAndCenter();
      section?.classList.add('is-slider-ready');
    }
  }

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
