// Content for the /golf-simulator-booking-software/ page (src/pages/golf-simulator-booking-software.astro). Presentational props stay in the page.
// Headings are plain text: the section components add the green period.
// Proof-of-scale figures live in src/data/proof.ts — update them there, not here.

import { SITE } from '../consts';

const DESCRIPTION = 'Golf simulator booking software for hourly bays — real-time availability, memberships, Stripe, Square, Clover and Helcim (beta) payments, and 24/7 door access.';

const FAQS: [string, string][] = [
  ['How long does setup take?', 'Most studios are live within 24 hours. We configure your bays, pricing, memberships, and booking flow for you — white-glove, with no technical work on your end.'],
  ['How long does it take to implement simulator booking software?', 'For a purpose-built system, implementation is measured in days, not weeks — most Birdie studios are live within 24 hours. Implementation covers configuring your bays, hourly and weekday-vs-weekend pricing windows, membership plans and hour banks, importing your existing customer list and active memberships, and connecting Stripe, Square, Clover and Helcim (beta) payments and your door-access hardware. None of it requires developers, plugins, or migration downtime on your end; the longest step is usually you reviewing the configuration before it goes live. Generic appointment tools look faster because signup is instant, but they take longer to genuinely implement, since bay-based scheduling and hour banks have to be rebuilt as workarounds.'],
  ['Do I need to be technical to use it?', 'No. There are no developers, plugins, or migrations required. If you can use a phone, you can run Birdie.'],
  ['Is there a long-term contract?', 'No. Birdie is month-to-month. If it does not deliver, you cancel — there is no lock-in.'],
  ['How do customers pay?', 'Stripe, Square, Clover and Helcim (beta) payments are built directly into the booking flow, so deposits and payments are captured at the moment of reservation — no third-party checkout, no per-booking fees.'],
  ['How much does golf simulator booking software cost?', 'Birdie starts at $227/month for the booking system, with no per-booking fees and no long-term contract. That includes bay scheduling, memberships, Stripe, Square, Clover and Helcim (beta) payments, automated texts and emails, and 24/7 smart-lock door access. Website, ads, and SEO are available on higher tiers when you are ready to grow.'],
  ['Can booking software reduce no-shows at a simulator venue?', 'Yes. Birdie captures a deposit or full payment at the moment of reservation through its native payment integrations (Stripe, Square, Clover; Helcim in beta), then sends automated text and email confirmations, reminders and receipts and pre-session reminders — the two biggest levers for cutting no-shows on hourly bays.'],
  ['Can customers book and get in without staff on site?', 'Yes. Birdie integrates with PDK smart locks, so every booking generates a time-gated SMS unlock link. Customers let themselves in — no staff, no keypad, no app.'],
  ['Is Birdie a golf simulator reservation or scheduling system too?', 'Yes. "Booking," "reservation," and "scheduling" software describe the same thing for a simulator venue, and Birdie does all of it — real-time bay reservations, membership and recurring scheduling, group bookings, and hourly pricing windows. It replaces separate golf simulator reservation software and scheduling tools with one platform.'],
  ['Does the booking system work on mobile?', 'Yes. The entire booking flow is mobile-optimized — most customers reserve a bay in under 30 seconds on their phone, and you manage bays, payments, memberships, and door unlocks from any device.'],
  ['Can I take a deposit instead of full payment at booking?', 'Yes. You set the rule per booking type — full payment, a partial deposit, or pay-at-venue — all captured through the native payment integrations at the moment of reservation.'],
  ['Can I import my existing customers and bookings?', 'Yes. As part of white-glove setup we bring over your customer list and active memberships, so you go live in 24 hours without starting from scratch.'],
  ['What booking software do indoor golf clubs use?', 'Indoor golf clubs and simulator venues increasingly use software built specifically for bay-based operation rather than a generic appointment tool or a golf-course tee-sheet system. The must-haves are real-time bay availability, hour-bank memberships, payment captured at booking, automated SMS reminders, and 24/7 door access. Birdie is built for exactly this and goes live in 24 hours, where tools like Acuity or Calendly tend to miss bay memberships, hourly pricing windows, or unattended access.'],
  ['Is there free golf simulator booking software?', 'Free or generic tools can take a basic reservation, but they do not handle hour-bank memberships, weekday pricing, payment capture, or door access — so most simulator venues outgrow them fast and pay for it in lost revenue and manual work. Birdie is flat-rate from $227/month with no per-booking fees, which usually costs less than the percentage-of-revenue or per-transaction fees other booking tools charge.'],
];

export const GOLF_SIMULATOR_BOOKING_SOFTWARE = {
  meta: {
    title: 'Golf Simulator Booking Software | Birdie',
    description: DESCRIPTION,
  },
  hero: {
    crumb: 'Golf Simulator Booking Software',
    h1: 'Golf Simulator Booking Software Built for Simulator Studios',
    lead: "Generic booking tools weren't designed for hourly bay rentals, simulator memberships, or 24/7 unattended access. Birdie was. It handles everything a simulator studio needs — online booking and real-time bay reservations, automated texts and emails, Stripe, Square, Clover and Helcim (beta) payments, memberships, and PDK door access — in one platform.",
    primary: { label: 'Book a Demo', href: SITE.demoPath },
    secondary: { label: 'See pricing', href: '/pricing/' },
    quickAnswer: 'Golf simulator booking software lets an indoor golf venue take online reservations for hourly bays — with real-time availability, hour-bank memberships, Stripe, Square, Clover and Helcim (beta) payments captured at checkout, automated text and email confirmations, reminders and receipts, and 24/7 smart-lock door access. Unlike generic appointment tools (Acuity, Calendly) or golf-course systems, it is built for bay-based operation, so "booking," "reservation," and "scheduling" are one job, not three tools. Birdie is purpose-built for simulator venues and goes live in 24 hours from $227/month.',
  },
  facts: [
    ['Best for', 'Simulator venues focused on weekday utilization and revenue growth — Birdie pairs bay booking with a revenue layer that surfaces underused hours and lapsed customers.'],
    ['Works with', 'Any simulator hardware or game software. Birdie is the booking layer that sits above TrackMan, GSPro, Foresight, Uneekor, E6 Connect and TruGolf — it does not replace them and does not require a specific brand.'],
    ['Integrations', 'Stripe, Square, Clover and Helcim (beta) for payments; Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock for 24/7 smart-lock door access; Telnyx and Resend for automated SMS and email.'],
    ['Pricing', 'From $227/month flat for the booking system. No per-booking fees, no percentage of revenue, month-to-month with no long-term contract.'],
    ['Setup', 'White-glove onboarding (one-time fee), live in about 24 hours, no developers required.'],
  ] as [string, string][],
  fails: {
    heading: 'Why generic booking tools fail simulator operators',
    items: [
      ['Built for appointments, not bay rentals', "Tools like Acuity and Calendly are designed for 1-on-1 appointments. They don't understand bay-based scheduling, group bookings, or hourly pricing windows the way a simulator business actually operates."],
      ['No simulator-specific features', "Hour banks, bay restrictions, weekday vs. weekend pricing, membership advance booking windows — these don't exist in generic tools. You end up building workarounds that break."],
      ['No path to 24/7 operation', 'Generic booking tools have no door access integration. Your hours are limited to whenever someone can physically be there. Birdie connects to PDK smart locks so customers can let themselves in.'],
    ] as [string, string][],
  },
  should: {
    heading: 'Everything your booking system should do',
    items: [
      'Bay-based scheduling with real-time availability',
      'Membership plans with hour banks and bay restrictions',
      'Add-ons at checkout (BYOB, guests, custom items)',
      'Automated text and email confirmations, reminders and receipts',
      'Stripe, Square, Clover and Helcim (beta) payments built into the booking flow',
      '24/7 door access via PDK smart lock integration',
      'Customer database with full booking history',
      'Weekday utilization tracking and occupancy data',
      'Lapsed customer identification + reactivation campaigns',
      'Google review automation after each session',
    ],
  },
  choose: {
    heading: 'How to choose golf simulator booking software in 2026',
    sub: 'Most tools that show up when you search were built for appointments, gyms, or golf courses — not indoor simulator bays. Six things separate software that actually fits a simulator venue from one you’ll outgrow in a season:',
    items: [
      ['Built for bays, not appointments', 'The tool has to understand hourly bay rentals, group bookings, and weekday-vs-weekend pricing windows — not one-on-one appointment slots. This is the single biggest divider between real simulator software and a repurposed appointment or gym tool.'],
      ['Memberships with hour banks', 'If you sell memberships, the software must track hour banks, bay restrictions, and advance-booking windows automatically. Without it, you end up managing members in spreadsheets.'],
      ['Payment captured at booking', 'Taking a deposit or full payment at the moment of reservation — ideally natively, without per-booking fees — is the biggest lever against no-shows on hourly bays.'],
      ['Automated confirmations and reminders', 'Automatic text and email confirmations, pre-session reminders and receipts cut no-shows and remove the manual follow-up that eats an operator’s week.'],
      ['24/7 unattended access', 'Smart-lock door integration lets customers let themselves in on a time-gated link — turning off-peak and overnight hours into revenue you don’t have to staff.'],
      ['Fast to launch, month-to-month', 'Look for white-glove setup measured in days, flat pricing, and no long-term contract — not weeks of configuration and a percentage of every transaction.'],
    ] as [string, string][],
  },
  reservation: {
    heading: 'Booking, reservation, or scheduling software — one system',
    sub: "Operators search for this tool by different names — golf simulator booking software, golf simulator reservation software, or golf simulator scheduling software — but it's the same job: filling hourly bays without the back-and-forth. Birdie handles real-time bay reservations, membership and recurring scheduling, group bookings, and weekday pricing windows in one system, so you're not stitching together a separate reservation tool and scheduler.",
    items: [
      ['Golf simulator reservation software', 'Real-time bay reservations with deposits captured at checkout, group and recurring reservations, and weekday vs. weekend pricing — so every hour is spoken for and paid for before your customer walks in.'],
      ['Golf simulator scheduling software', 'Membership advance-booking windows, hour-bank tracking, and automated text and email confirmations, reminders and receipts keep the schedule full and no-shows down — one scheduler for bays, members, and staff instead of three separate tools.'],
    ] as [string, string][],
  },
  comparison: {
    heading: 'Birdie vs. generic booking tools',
    colLabel: 'Generic tools',
    rows: [
      ['Bay-based scheduling', 'Yes', 'No'],
      ['Simulator memberships with hour banks', 'Yes', 'No'],
      ['Automated text and email confirmations, reminders and receipts', 'Yes', 'Limited'],
      ['24/7 smart-lock door access', 'Yes', 'No'],
      ['Built-in Stripe, Square, Clover and Helcim (beta) payments', 'Yes', 'Varies'],
      ['Weekday utilization tracking', 'Yes', 'No'],
      ['Lapsed customer reactivation', 'Yes', 'No'],
      ['Setup time', '24 hours', 'Weeks'],
      ['Built for simulators', 'Yes', 'No'],
    ] as [string, string, string][],
  },
  stats: {
    heading: 'Live in 24 hours. Zero technical overhead.',
    text: 'We configure your bays, pricing, memberships, and booking flow. You review it. It goes live. Most studios are taking bookings within 24 hours of signing. No developers. No migration. No downtime.',
    items: [
      ['24 hours', 'average time to go live'],
      ['0', 'developers required'],
      ['No', 'long-term contracts'],
    ] as [string, string][],
  },
  door: {
    heading: 'The only booking software that opens your door',
    paras: ['Birdie runs unattended with native smart-lock door access across Kisi, PDK, UniFi Access, Avigilon Alta, and RemoteLock. Every booking automatically generates a time-gated SMS unlock link. Customers arrive, tap their phone, and walk in — no staff required. Off-peak hours become revenue hours.'],
    link: { label: 'Learn how 24/7 door access works', href: '/blog/golf-simulator-door-access/' },
  },
  faq: {
    heading: 'Frequently asked questions',
    items: FAQS,
  },
  related: {
    heading: 'Related',
    items: [
      ['Golf simulator software (platform overview)', '/golf-simulator-software/'],
      ['Golf simulator management software', '/golf-simulator-management-software/'],
      ['Compare the best golf simulator software', '/best-golf-simulator-software/'],
      ['Every Birdie feature, bay booking to door access', '/features/'],
      ['Running multiple simulator venues on one platform', '/platform/'],
      ['Switching from another system? All Birdie comparisons', '/compare/'],
    ] as [string, string][],
  },
  cta: {
    heading: 'Ready to replace your booking system?',
    body: '',
    items: ['Free walkthrough', 'No commitment', 'Live in 24 hours'],
    label: 'Book a Demo',
  },
  schema: [
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Golf Simulator Booking Software', item: `${SITE.url}/golf-simulator-booking-software/` },
      ],
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: 'Birdie — Golf Simulator Booking Software',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Golf Simulator Booking Software',
      operatingSystem: 'Web',
      description: DESCRIPTION,
      url: `${SITE.url}/golf-simulator-booking-software/`,
      offers: {
        '@type': 'Offer', price: '227', priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '227', priceCurrency: 'USD', unitText: 'MONTH' },
      },
      provider: { '@type': 'Organization', name: 'Birdie', url: SITE.url },
    },
  ],
};
