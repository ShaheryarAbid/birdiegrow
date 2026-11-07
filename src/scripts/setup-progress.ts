/**
 * Scroll progress for every `[data-setup-progress]` timeline (SetupTimeline.astro, revenue page).
 * A ball travels down the line with the scroll and parks on the centre of the last step, never past it.
 * Steps the ball has passed are marked complete (dark tile, check mark); the first step is always featured.
 */
import { track } from './scroll-track';

const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

function init(setup: HTMLElement) {
  if (setup.dataset.setupReady) return;
  setup.dataset.setupReady = '';
  const rows = Array.from(setup.querySelectorAll<HTMLElement>('.hm-setup__row'));
  const marks = rows.map((row) => row.querySelector<HTMLButtonElement>('.hm-setup__mark')!);
  const ball = setup.querySelector<HTMLElement>('.hm-setup__ball')!;
  const trail = setup.querySelector<HTMLElement>('.hm-setup__trail')!;
  const line = setup.querySelector<HTMLElement>('.hm-setup__line');
  const last = rows.length - 1;

  const centers = () => {
    const top = setup.getBoundingClientRect().top;
    return marks.map((mark) => mark.getBoundingClientRect().top - top + mark.offsetHeight / 2);
  };
  const clamp = (y: number, positions: number[]) => Math.max(positions[0], Math.min(positions[last], y));

  const paint = (y: number, positions: number[]) => {
    // Earlier steps complete once the ball is past their centre; the last one when the ball reaches its centre.
    const complete = positions.map((position, i) => (i === last ? y >= position - .5 : y > position + 10));
    const active = Math.min(last, complete.filter(Boolean).length);
    rows.forEach((row, i) => {
      row.classList.toggle('is-complete', complete[i]);
      row.classList.toggle('feat', complete[i] || i === 0);
      marks[i].setAttribute('aria-label', `Step ${i + 1}: ${row.querySelector('h3')!.textContent}${complete[i] ? ' (completed)' : ''}`);
      if (i === active) marks[i].setAttribute('aria-current', 'step');
      else marks[i].removeAttribute('aria-current');
    });
    const x = marks[0].offsetLeft;
    // The line runs exactly from the first circle to the last one, on desktop and mobile alike.
    if (line) {
      line.style.top = `${positions[0]}px`;
      line.style.bottom = 'auto';
      line.style.height = `${positions[last] - positions[0]}px`;
    }
    // Reduced motion changes state without a ball travelling between rows.
    const ballY = reducedMotion.matches ? positions[active] : y;
    ball.style.left = `${x}px`;
    ball.style.transform = `translateY(${ballY - 20}px)`;
    trail.style.left = `${x}px`;
    trail.style.top = `${positions[0] - 20}px`;
    trail.style.height = `${ballY - positions[0] + 40}px`;
  };

  track(setup, () => {
    const positions = centers();
    paint(clamp(innerHeight * .55 - setup.getBoundingClientRect().top, positions), positions);
  });

  rows.forEach((row, i) => {
    const inspect = () => {
      const positions = centers();
      paint(clamp((positions[i] + (positions[i + 1] ?? positions[i])) / 2, positions), positions);
    };
    row.addEventListener('pointermove', () => { if (finePointer.matches) inspect(); });
    marks[i].addEventListener('focus', inspect);
    marks[i].addEventListener('click', inspect);
    marks[i].addEventListener('keydown', (event) => {
      const next = event.key === 'ArrowDown' ? i + 1 : event.key === 'ArrowUp' ? i - 1 : -1;
      if (next < 0 || next >= marks.length) return;
      event.preventDefault();
      marks[next].focus({ preventScroll: true });
    });
  });
}

export function initSetupProgress() {
  document.querySelectorAll<HTMLElement>('[data-setup-progress]').forEach(init);
}
