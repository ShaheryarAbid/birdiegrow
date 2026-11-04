/** Homepage scroll states. One animation frame per scroll; no timers or autoplay. */
export function initHomeInteractions() {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function track(root: HTMLElement, update: () => void) {
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
    reducedMotion.addEventListener('change', schedule);
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

  const setup = document.querySelector<HTMLElement>('[data-setup-progress]');
  if (setup) {
    const rows = Array.from(setup.querySelectorAll<HTMLElement>('.hm-setup__row'));
    const marks = rows.map((row) => row.querySelector<HTMLButtonElement>('.hm-setup__mark')!);
    const ball = setup.querySelector<HTMLElement>('.hm-setup__ball')!;
    const trail = setup.querySelector<HTMLElement>('.hm-setup__trail')!;
    const centers = () => {
      const top = setup.getBoundingClientRect().top;
      return marks.map((mark) => mark.getBoundingClientRect().top - top + mark.offsetHeight / 2);
    };
    const paint = (y: number, positions: number[]) => {
      const complete = positions.map((position) => y > position + 10);
      const active = Math.min(rows.length - 1, complete.filter(Boolean).length);
      rows.forEach((row, i) => {
        row.classList.toggle('is-complete', complete[i]);
        row.classList.toggle('feat', complete[i] || i === 0);
        marks[i].setAttribute('aria-label', `Step ${i + 1}: ${row.querySelector('h3')!.textContent}${complete[i] ? ' (completed)' : ''}`);
        if (i === active) marks[i].setAttribute('aria-current', 'step');
        else marks[i].removeAttribute('aria-current');
      });
      const x = marks[0].offsetLeft;
      ball.style.left = `${x}px`;
      // Reduced motion changes state without a ball travelling between rows.
      const ballY = reducedMotion.matches ? positions[active] : Math.min(y, positions.at(-1)!);
      ball.style.transform = `translateY(${ballY - 20}px)`;
      // Park the ball centred on the final circle instead of hiding it just above step 04.
      ball.style.visibility = 'visible';
      trail.style.left = `${x}px`;
      trail.style.top = `${positions[0] - 20}px`;
      trail.style.height = `${Math.max(40, y - positions[0] + 40)}px`;
    };
    const update = () => {
      const positions = centers();
      const y = Math.max(positions[0], Math.min(positions.at(-1)! + 20, innerHeight * .55 - setup.getBoundingClientRect().top));
      paint(y, positions);
    };
    track(setup, update);
    rows.forEach((row, i) => {
      const inspect = () => {
        const positions = centers();
        paint((positions[i] + (positions[i + 1] ?? positions[i] + 40)) / 2, positions);
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
}
