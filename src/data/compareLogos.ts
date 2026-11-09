// Competitor logos exactly as placed in the Figma "Logo plate" components (Compare hub 312:15556).
// Each logo = a box (w x h px at design size) holding one or more image parts positioned in px inside that box.
export type LogoPart = { src: string; x: number; y: number; w: number; h: number; pos?: 'bottom'; white?: boolean };
export type LogoSpec = { w: number; h: number; parts: LogoPart[]; standalone?: string; whiteParts?: LogoPart[]; artStartX?: number };
const A = '/assets/compare/';
const P = '/assets/compare/plates/';
const S = '/assets/compare/standalone/';
const one = (file: string, w: number, h: number, pos?: 'bottom'): LogoSpec => ({ w, h, parts: [{ src: `${A}${file}`, x: 0, y: 0, w, h, pos }] });

export const COMPARE_PLATE_LOGOS: Record<string, string> = {
  'birdie-vs-foreup': `${P}logo-foreup.svg`,
  'birdie-vs-golf-oclock': `${P}logo-golfoclock.svg`,
  'birdie-vs-lightspeed-golf': `${P}logo-lightspeed.svg`,
  'birdie-vs-chronogolf': `${P}logo-chronogolf.svg`,
  'birdie-vs-birrdi': `${P}logo-birrdi.svg`,
  'birdie-vs-golf918': `${P}logo-golf918.svg`,
  'birdie-vs-butter': `${P}logo-butter.svg`,
  'birdie-vs-ezfacility': `${P}logo-ezfacility.svg`,
  'birdie-vs-mindbody': `${P}logo-mindbody.svg`,
  'birdie-vs-acuity': `${P}logo-acuity.svg`,
  'birdie-vs-square': `${P}logo-square.svg`,
  'birdie-vs-booked-bays': `${P}logo-booked-bays.svg`,
  'birdie-vs-avus': `${P}logo-avus.svg`,
  'birdie-vs-simbook': `${P}logo-simbook.svg`,
  'birdie-vs-teeflow': `${P}logo-teeflow.svg`,
  'birdie-vs-itg-golf': `${P}logo-itg-golf.svg`,
  'birdie-vs-playbypoint': `${P}logo-playbypoint.svg`,
  'birdie-vs-whoosh': `${P}logo-whoosh.svg`,
  'birdie-vs-activebooker': `${P}logo-activebooker.svg`,
  'birdie-vs-proagenda': `${P}logo-proagenda.svg`,
};

export const COMPARE_LOGOS: Record<string, LogoSpec> = {
  'birdie-vs-foreup': one('logo-foreup.webp', 93, 28),
  'birdie-vs-golf-oclock': one('logo-golfoclock.webp', 160, 32),
  'birdie-vs-lightspeed-golf': { w: 247, h: 88, parts: [], standalone: `${S}logo-lightspeed.svg`, artStartX: 60.2 },
  'birdie-vs-chronogolf': one('logo-chronogolf.webp', 128, 24),
  'birdie-vs-birrdi': { w: 247, h: 88, parts: [], standalone: `${S}logo-birrdi.svg`, artStartX: 95.4 },
  'birdie-vs-golf918': one('logo-golf918.webp', 115, 28),
  'birdie-vs-butter': one('logo-butter.webp', 96, 32),
  'birdie-vs-ezfacility': one('logo-ezfacility.webp', 127, 32),
  'birdie-vs-mindbody': one('logo-mindbody.webp', 100, 50, 'bottom'),
  'birdie-vs-acuity': one('logo-acuity.webp', 100, 32),
  'birdie-vs-square': one('logo-square.webp', 124, 32),
  'birdie-vs-booked-bays': {
    w: 247,
    h: 88,
    parts: [],
    standalone: `${S}logo-booked-bays.svg`,
    artStartX: 49.6,
    whiteParts: [{ src: `${A}logo-booked-bays-white.png`, x: 49.6, y: 28, w: 147, h: 32 }],
  },
  'birdie-vs-avus': {
    w: 102, h: 24,
    parts: [
      { src: `${A}logo-avus-a.svg`, x: 23.82, y: 1.71, w: 75.95, h: 21.37 },
      { src: `${A}logo-avus-b.svg`, x: 2.23, y: 1.71, w: 25.9, h: 21.38 },
    ],
  },
  'birdie-vs-simbook': {
    w: 247,
    h: 88,
    parts: [],
    standalone: `${S}logo-simbook.svg`,
    artStartX: 64.8,
    whiteParts: [
      { src: `${A}logo-simbook-icon.svg`, x: 64.8, y: 28, w: 32, h: 32 },
      { src: `${A}logo-simbook-text.webp`, x: 105.766, y: 34.3984, w: 74.88, h: 18.56, white: true },
    ],
  },
  'birdie-vs-teeflow': one('logo-teeflow.webp', 122, 32),
  'birdie-vs-itg-golf': one('logo-itg.webp', 73, 32),
  'birdie-vs-playbypoint': one('logo-playbypoint.webp', 153, 28),
  'birdie-vs-whoosh': one('logo-whoosh.webp', 136, 18),
  'birdie-vs-activebooker': one('logo-activebooker.webp', 132, 28),
  'birdie-vs-proagenda': one('logo-proagenda.webp', 134, 24),
};
