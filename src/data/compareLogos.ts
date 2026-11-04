// Competitor logos exactly as placed in the Figma "Logo plate" components (Compare hub 312:15556).
// Each logo = a box (w x h px at design size) holding one or more image parts positioned in px inside that box.
export type LogoPart = { src: string; x: number; y: number; w: number; h: number; pos?: 'bottom' };
export type LogoSpec = { w: number; h: number; parts: LogoPart[] };
const A = '/assets/compare/';
const one = (file: string, w: number, h: number, pos?: 'bottom'): LogoSpec => ({ w, h, parts: [{ src: `${A}${file}`, x: 0, y: 0, w, h, pos }] });

export const COMPARE_LOGOS: Record<string, LogoSpec> = {
  'birdie-vs-foreup': one('logo-foreup.webp', 93, 28),
  'birdie-vs-golf-oclock': one('logo-golfoclock.webp', 160, 32),
  'birdie-vs-lightspeed-golf': one('logo-lightspeed.webp', 126, 32, 'bottom'),
  'birdie-vs-chronogolf': one('logo-chronogolf.webp', 128, 24),
  'birdie-vs-birrdi': one('logo-birrdi.webp', 56, 56),
  'birdie-vs-golf918': one('logo-golf918.webp', 115, 28),
  'birdie-vs-butter': one('logo-butter.webp', 96, 32),
  'birdie-vs-ezfacility': one('logo-ezfacility.webp', 127, 32),
  'birdie-vs-mindbody': one('logo-mindbody.webp', 100, 50, 'bottom'),
  'birdie-vs-acuity': one('logo-acuity.webp', 100, 32),
  'birdie-vs-square': one('logo-square.webp', 124, 32),
  'birdie-vs-booked-bays': one('logo-booked-bays.webp', 147, 32),
  'birdie-vs-avus': {
    w: 102, h: 24,
    parts: [
      { src: `${A}logo-avus-a.svg`, x: 23.82, y: 1.71, w: 75.95, h: 21.37 },
      { src: `${A}logo-avus-b.svg`, x: 2.23, y: 1.71, w: 25.9, h: 21.38 },
    ],
  },
  'birdie-vs-simbook': {
    w: 116, h: 32,
    parts: [
      { src: `${A}logo-simbook-icon.svg`, x: 0, y: 0, w: 32, h: 32 },
      { src: `${A}logo-simbook-text.webp`, x: 41, y: 6.4, w: 74.88, h: 18.56, pos: 'bottom' },
    ],
  },
  'birdie-vs-teeflow': one('logo-teeflow.webp', 122, 32),
  'birdie-vs-itg-golf': one('logo-itg.webp', 73, 32),
  'birdie-vs-playbypoint': one('logo-playbypoint.webp', 153, 28),
  'birdie-vs-whoosh': one('logo-whoosh.webp', 136, 18),
  'birdie-vs-activebooker': one('logo-activebooker.webp', 132, 28),
  'birdie-vs-proagenda': one('logo-proagenda.webp', 134, 24),
};
