// Partner logo tiles, copied from the Figma "Integrations / V2" hub (225:40824).
// `full` entries are the whole 48x48 glyph exported by Figma (tile background painted by CSS),
// so the glyph lands exactly where the design put it. The rest still place a loose asset with
// the design's inset percentages inside the 80% x 59% logo box.
export type Inset = [string, string, string, string];
export type LogoPart = { src: string; inset: Inset; cover?: boolean; opacity?: number };
export type LogoSpec = { tile: 'light' | 'tint'; mono?: boolean; full?: boolean; wrap?: Inset; parts: LogoPart[] };

const A = '/assets/integrations/';
const T = '/assets/integrations/tiles/';
const p = (file: string, inset: Inset, extra: Partial<LogoPart> = {}): LogoPart => ({ src: A + file, inset, ...extra });
/** Figma-exported glyph that already carries its own 48x48 coordinates. */
const g = (file: string): LogoPart => ({ src: T + file, inset: ['0%', '0%', '0%', '0%'] });

export const INTEGRATION_LOGOS: Record<string, LogoSpec> = {
  'Kisi': { tile: 'light', full: true, parts: [g('kisi.svg')] },
  'PDK': { tile: 'light', full: true, parts: [g('pdk.svg')] },
  'Avigilon Alta': { tile: 'light', full: true, parts: [g('alta.svg')] },
  'RemoteLock': { tile: 'light', full: true, parts: [g('remotelock.svg')] },
  'Square': { tile: 'light', full: true, parts: [g('square.svg')] },
  'Stripe': { tile: 'light', full: true, parts: [g('stripe.svg')] },
  'Clover': { tile: 'light', full: true, parts: [g('clover.svg')] },
  'Helcim': { tile: 'light', full: true, parts: [g('helcim.svg')] },
  'Google Calendar': { tile: 'tint', full: true, parts: [g('gcal.svg')] },
  'Meta Pixel + Conversions API': { tile: 'tint', full: true, parts: [g('meta.svg')] },
  'Google Tag Manager': { tile: 'tint', full: true, parts: [g('gtm.svg')] },
  'Telnyx': { tile: 'tint', full: true, parts: [g('telnyx.svg')] },
  // The Google Analytics 4 export arrived truncated, so it keeps the previously measured placement.
  'UniFi Access': { tile: 'light', full: true, parts: [g('unifi.svg')] },
  'Google Analytics 4': { tile: 'tint', wrap: ['7.71%', '21.34%', '7.71%', '21.32%'], parts: [p('ga4.svg', ['0%', '7.44%', '1.67%', '0%'])] },
  'Resend': { tile: 'tint', mono: true, full: true, parts: [g('resend.svg')] },
};
