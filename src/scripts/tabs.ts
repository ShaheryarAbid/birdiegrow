/** Shared, progressively enhanced tabs for the product and marketing previews. */
let sequence = 0;

export function setupTabs(
  root: HTMLElement,
  bar: HTMLElement,
  buttons: HTMLButtonElement[],
  panels: HTMLElement[],
  options: { vertical?: boolean; onSelect?: (index: number) => void } = {},
) {
  if (!buttons.length || buttons.length !== panels.length) return;
  const prefix = `birdie-tabs-${++sequence}`;
  bar.setAttribute('role', 'tablist');
  bar.setAttribute('aria-orientation', options.vertical ? 'vertical' : 'horizontal');
  bar.hidden = false;
  root.classList.add('is-js');
  buttons.forEach((button, index) => {
    button.id ||= `${prefix}-tab-${index}`;
    button.type = 'button';
    button.setAttribute('role', 'tab');
    const panel = panels[index];
    panel.id ||= `${prefix}-panel-${index}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    panel.tabIndex = 0;
    button.setAttribute('aria-controls', panel.id);
  });
  const select = (index: number) => {
    buttons.forEach((button, i) => {
      button.classList.toggle('is-on', i === index);
      button.setAttribute('aria-selected', String(i === index));
      button.tabIndex = i === index ? 0 : -1;
      panels[i].classList.toggle('is-on', i === index);
      panels[i].hidden = i !== index;
    });
    options.onSelect?.(index);
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(index));
    button.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === (options.vertical ? 'ArrowDown' : 'ArrowRight')) next = (index + 1) % buttons.length;
      else if (event.key === (options.vertical ? 'ArrowUp' : 'ArrowLeft')) next = (index - 1 + buttons.length) % buttons.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else return;
      event.preventDefault();
      select(next);
      buttons[next].focus({ preventScroll: true });
    });
  });
  select(Math.max(0, buttons.findIndex((button) => button.classList.contains('is-on'))));
}
