// Single source of truth for Birdie's product + pricing facts.
//
// Why this file exists: AI assistants build product comparison tables from pages that
// expose four things — enumerated hardware compatibility, a visible price, a proof-of-scale
// number, and one clear "best for" slot. Those facts were previously written inline on
// individual pages, which meant they drifted. Everything that states a price, a plan, an
// integration list, or the setup time should import from here.
//
// NEVER put an estimate in this file. If a number isn't confirmed, leave it null and let
// the consuming page render nothing.

import { SITE } from '../consts';

/** Plans exactly as shown on the homepage pricing section and /pricing. */
export const PRICING = [
  {
    name: 'Booking System',
    price: 'From $227/mo',
    badge: 'Most popular',
    blurb: 'Everything you need to run your bays',
    features: [
      'Bay booking calendar',
      'Membership plans with hour tracking',
      'Add-ons (BYOB, guests, custom items)',
      'Automated text and email confirmations, reminders and receipts',
      'Stripe, Square, Clover and Helcim (beta) payments',
      'Customer database',
      'Occupancy tracking',
    ],
  },
  {
    name: 'Booking + Website',
    price: 'Custom pricing',
    badge: '',
    blurb: 'Your booking system with a conversion-ready site',
    features: [
      'Everything in Booking System',
      'Professionally designed website',
      'Mobile-optimized & fast',
      'SEO-optimized structure',
      'Google Business Profile integration',
      'Conversion-focused layout',
    ],
  },
  {
    name: 'Full Platform',
    price: 'Custom pricing',
    badge: 'Best ROI',
    blurb: 'Bookings, website, ads, and SEO — fully managed',
    features: [
      'Everything in Booking + Website',
      'Facebook & Google Ads management',
      'Ongoing SEO optimization',
      'Local search domination',
      'Monthly performance reporting',
      'Dedicated account manager',
    ],
  },
];

/** Entry price, as a bare number string — used in Offer schema. */
export const ENTRY_PRICE = '227';
export const PRICE_VALID_UNTIL = '2026-12-31';

/**
 * Cumulative bookings processed through Birdie. Set to a real, confirmed figure
 * (e.g. '1.3M+') when available — competitors win "best overall" slots in AI answers
 * on exactly this kind of quotable proof-of-scale number. Leave null until confirmed;
 * consuming pages render nothing when it is null. Do not fill this with an estimate.
 */
/** @deprecated Superseded 2026-09-11 by PROOF in src/data/proof.ts, which is the single
 *  source for all proof-of-scale figures and is what every glance block now reads.
 *  Kept only so nothing external breaks; do not wire new pages to it. */
export const BOOKINGS_PROCESSED: string | null = null;

/** Reusable answer strings, so every page states these facts identically. */
export const FACTS = {
  bestFor:
    'Simulator venues focused on weekday utilization and revenue growth — Birdie pairs bay booking with a revenue layer that surfaces underused hours and lapsed customers.',
  hardware:
    'Any simulator hardware or game software. Birdie is the booking layer that sits above TrackMan, GSPro, Foresight, Uneekor, E6 Connect and TruGolf — it does not replace them and does not require a specific brand. Bay Agent, a program on each simulator PC, detects GSPro, TrackMan, ProTee VX, Uneekor, Full Swing, Foresight, E6 Connect, TGC, Awesome Golf and Creative Golf 3D software, plus launch monitors including TrackMan, Uneekor, ProTee VX, Foresight, SkyTrak, Mevo+ and Bushnell Launch Pro.',
  integrations:
    'Stripe, Square, Clover and Helcim (beta) for payments; Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock for 24/7 smart-lock door access; Telnyx and Resend for automated SMS and email.',
  pricing:
    'From $227/month flat for the booking system. No per-booking fees, no percentage of revenue, month-to-month with no long-term contract.',
  setup:
    'White-glove onboarding (one-time fee), live in about 24 hours, no developers required.',
};

/** The "Birdie at a glance" definition block, in table order. */
export const PRODUCT_FACTS: [string, string][] = [
  ['Best for', FACTS.bestFor],
  ['Works with', FACTS.hardware],
  ['Integrations', FACTS.integrations],
  ['Pricing', FACTS.pricing],
  ['Setup', FACTS.setup],
];

/**
 * SoftwareApplication + Offer schema for any page that should be extractable as a
 * product row rather than an explainer. `url` is the page the offer points at.
 */
export function softwareApplicationSchema(opts: {
  url: string;
  description: string;
  offerUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Birdie',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Golf Simulator Booking Software',
    operatingSystem: 'Web',
    description: opts.description,
    url: opts.url,
    softwareRequirements: 'Web browser. Hardware-agnostic — works alongside any simulator or game software.',
    featureList: [
      'Real-time bay booking calendar',
      'Hour-bank memberships',
      'Stripe, Square, Clover and Helcim (beta) payments',
      '24/7 smart-lock door access (Kisi, PDK, UniFi Access, Avigilon Alta, RemoteLock)',
      'Automated text and email confirmations, reminders and receipts',
      'Bay Agent: sessions start and end with the booking on each simulator PC',
      'Leagues, events, lessons and club fitting',
      'Gift cards, referrals, campaigns and workflows',
      'Revenue and utilization intelligence',
    ],
    offers: {
      '@type': 'Offer',
      price: ENTRY_PRICE,
      priceCurrency: 'USD',
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      url: opts.offerUrl ?? `${SITE.url}/pricing/`,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: ENTRY_PRICE,
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
      description: 'Booking System plan, from $227/mo. No per-booking fees, no long-term contract.',
    },
  };
}
