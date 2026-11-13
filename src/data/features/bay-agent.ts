// Content for the bay booking & waivers feature page: /features/bay-booking/ (src/pages/features/bay-booking.astro).
// Copy is the design's (Figma "Bay booking & waivers", node 546:20535); facts match src/data/features.ts.

import { SITE } from '../../consts';
import { PRODUCT_LINKS } from '../featurePages';

const IMG = '/assets/features';
const BB = `${IMG}/bay-booking`;
const BA = `${IMG}/bay-agent`;

const faqs: [string, string][] = [
  ['How does pricing work for simulator bays?', 'You set rates per bay and by time of day: peak, off-peak and time-of-day rates, with optional surge (demand) pricing that raises rates automatically at busy times. Birdie can also suggest prices, which you review and apply in one click.'],
  ['How long does it take a customer to book a bay?', 'Under 30 seconds on a phone: pick a bay and a time, choose the group size and add-ons, and pay. No app download is needed.'],
  ['Can I take a deposit instead of full payment?', 'Yes. You set the rule per booking type: full payment, a deposit, reserve with card (the card is saved and nothing is charged now), or pay at venue.'],
  ['Which payment processors does Birdie support?', 'Stripe, Square, Clover and Helcim (beta). Helcim is in beta and enabled on request. Payment runs inside the booking flow, with no redirect.'],
  ['Are waivers built in?', 'Yes. Waivers and membership agreements are signed online, with versions. Customers sign as part of booking or from their customer portal, and every signature is tied to the waiver version the customer agreed to.'],
  ['How should I handle minors?', 'If you allow players under 18, a parent or guardian must sign on their behalf.'],
  ['What happens when a time is fully booked?', 'Birdie can keep a booking waitlist for full times.'],
];

export const BAY_BOOKING = {
  meta: {
    title: 'Bay Agent: your bookings, running on every simulator PC | Birdie',
    description: 'Hourly bay pricing, deposits, built-in payments and online waivers in one booking flow built for golf simulator venues. Customers book on a phone with no app download.',
  },
  hero: {
    crumb: ['Product', 'Bay Agent'],
    h1: 'Bay Agent: your bookings, running on every simulator PC.',
    lead: 'Bay Agent is a program that runs on each simulator PC and connects the booking to the bay. It starts and ends sessions with the booking.',
    primary: { label: 'Book a demo', href: SITE.demoPath },
    secondary: { label: 'See how it works', href: '#pricing-by-hour' },
  },
  // "What it does" — Figma 2049:100754 (mobile 2049:101473). Cards 2 and 3 use flattened card art; on mobile card 2 moves first.
  whatItDoes: {
    heading: 'What it does',
    items: [
      { title: 'When you opt in', body: 'After opting in, you\u2019ll receive a confirmation: \u201cBirdie: You are subscribed to receive booking confirmations, reminders, and venue updates. Msg &amp; data rates may apply. Reply STOP to opt out.\u201d', icon: `${BA}/calendar-check.svg`, textWidth: 416, mobileOrder: 2 },
      { title: 'Opt-in &amp; opt-out keywords', body: 'Opt in or resubscribe by texting START, YES, or UNSTOP. Opt out at any time by replying STOP \u2014 you\u2019ll receive a single confirmation that you\u2019ve been unsubscribed. For help, reply HELP, visit <a href="/">birdiegrow.com</a>, or email <a href="mailto:luke@birdiegrow.com">luke@birdiegrow.com</a>.', icon: `${BA}/hand-tap.svg`, bg: `${BA}/opt-in-and-opt-out-keywords-bg.webp`, textWidth: 371, mobileOrder: 1 },
      { title: 'Privacy', body: 'Phone numbers are never shared, sold, or rented. Mobile information is handled as described in our <a href="/privacy/">Privacy Policy,</a> and messaging is governed by our <a href="/sms-terms/">SMS Terms &amp; Conditions.</a>', icon: `${BA}/lock-key.svg`, bg: `${BA}/privacy-bg.webp`, textWidth: 339, mobileOrder: 3 },
      { title: 'Message frequency &amp; rates', body: 'Message frequency varies based on your activity \u2014 the bookings you make and the reminders tied to your sessions. Message and data rates may apply, depending on your mobile carrier and plan.', icon: `${BA}/envelope-simple.svg`, mobileOrder: 4 },
    ],
  },
  // Hourly pricing calculator — Figma 2049:99348 (mobile 2049:100151). Static example, not interactive.
  pricing: {
    id: 'pricing-by-hour',
    heading: 'Priced by the hour. Not by the appointment.',
    sub: 'Bay time is worth more at 6 PM on a Friday than at 2 PM on a Tuesday. Birdie prices every slot by its window and by the size of the group.',
    title: 'Sample booking flow',
    startLabel: 'Start time · Friday',
    starts: [['2 PM · $38', 'Off-peak'], ['5 PM · $52', 'Evening'], ['6 PM · $68', 'Peak'], ['8 PM · $62', 'Late']] as [string, string][],
    start: '2 PM · $38',
    length: 1,
    players: 4,
    day: 'Friday · rate by hour',
    // Hour, price, tile colour (Figma rate panel 2049:99382)
    rates: [['2 PM', 38, '#222b25'], ['3 PM', 38, '#111613'], ['4 PM', 38, '#111814'], ['5 PM', 52, '#1c2d22'], ['6 PM', 68, '#304f36'], ['7 PM', 68, '#315139'], ['8 PM', 62, '#274330'], ['9 PM', 62, '#274330']] as [string, number, string][],
    rate: '2 PM',
    legend: [['Off-peak', '#242e27'], ['Evening', '#34573d'], ['Peak', '#79be7a'], ['Late', '#558a5b']] as [string, string][],
    date: 'Friday, Sep 9',
    time: '2:00 PM- 3:00 PM · 1 hour',
    total: '$67',
    note: 'Example pricing — you set your own rates.',
  },
  // Waivers & signatures — Figma 2049:99461 (mobile 2049:100272). The booking form is an exported image.
  waivers: {
    id: 'waivers',
    heading: 'Four players. Four signatures. Before tee time.',
    sub: 'Waivers and membership agreements are signed online, with versions. Customers sign as part of booking or from their customer portal.',
    bg: '/assets/home/product-previews.webp',
    items: [
      { icon: 'clockCounterClockwiseFilled', title: 'Versioned', text: 'Every signature is tied to the waiver version the customer agreed to.' },
      { icon: 'userCircleFilled', title: 'Customer portal', text: 'Sign in with a one-time code to book, check hours and balances, update cards and sign waivers.' },
      { icon: 'shieldCheckFilled', title: 'Minors', text: 'If you allow players under 18, a parent or guardian must sign on their behalf.' },
    ],
    img: {
      src: `${IMG}/bay-booking-form.webp`,
      mobileSrc: `${IMG}/bay-booking-form-mobile.webp`,
      alt: 'Bay 1, Friday 6:00 PM: three of four players have signed waiver v3, and a signing link has been sent to the fourth.',
      width: 610, height: 572, mobileWidth: 529, mobileHeight: 549,
    },
  },
  // Payment rules — Figma 2049:99568 (mobile 2049:100374). The four cards are exported images.
  payments: {
    id: 'payments',
    heading: 'One booking. Four ways to get paid.',
    sub: 'Set the rule per booking type. Payment runs inside the booking flow through Stripe, Square or Clover, with Helcim in beta. No redirect.',
    bg: `${BB}/bay-booking-get-paid-bg.webp`,
    cards: [
      { src: `${BB}/bay-booking-full-payment-card.webp`, alt: 'Full payment: $120.00 now, $120.00 at the venue. If the group doesn’t show up you keep the full amount.' },
      { src: `${BB}/bay-booking-deposit-card.webp`, alt: 'Deposit: $60.00 now, $60.00 at the venue. If the group doesn’t show up you keep the deposit.' },
      { src: `${BB}/bay-booking-reserve-card.webp`, alt: 'Reserve with card: $0.00 now, $120.00 at the venue. The saved card lets you charge a no-show fee under your own policy.' },
      { src: `${BB}/bay-booking-pay-at-venue-card.webp`, alt: 'Pay at venue: $0.00 now, $120.00 at the venue. Nothing is held.' },
    ],
    note: 'Example amounts. Deposit size and rules are yours.',
  },
  // Rules — Figma 2325:62650 (mobile 2049:101872). Shared Timeline; the Book a demo button is desktop/tablet only.
  rules: {
    heading: 'Rules that protect the calendar.',
    sub: 'Pricing, length and timing rules run on every booking, so the busy hours earn more and the quiet ones still fill.',
    cta: { label: 'Book a demo', href: SITE.demoPath, variant: 'primary' as const, hideOn: ['mobile' as const] },
    steps: [
      ['Time-of-day and surge pricing', 'Set per bay and raised automatically at busy times.'],
      ['AI pricing suggestions', 'Suggestions you review and apply in one click.'],
      ['Booking length rules and short-booking fee', 'Length, step and advance-window rules, per bay.'],
      ['Block Time', 'Close bays for private events or members-only hours.'],
      ['Session extensions', 'Offered in the bay, or the customer extends by text.'],
      ['Booking waitlist for full times', 'Customers can join a waitlist when a time is full.'],
    ] as [string, string][],
  },
  comparison: {
    heading: 'Built for bays. Not haircuts.',
    sub: 'Appointment software sells a person’s time in fixed slots. A simulator venue sells a room by the hour, to a group, at a price that changes through the day.',
    cta: { label: 'All comparisons', href: '/compare/' },
    colLabel: 'Generic tools',
    name: 'generic booking tools',
    rows: [
      ['Bay-based scheduling', 'Yes', 'No'],
      ['Simulator memberships with hour banks', 'Yes', 'No'],
      ['Built for simulators', 'Yes', 'No'],
      ['Automated SMS confirmations', 'Yes', 'Limited'],
      ['24/7 smart-lock door access', 'Yes', 'No'],
      ['Built-in payments', 'Stripe, Square, Clover, Helcim (beta)', 'Varies'],
      ['Weekday utilization tracking', 'Yes', 'No'],
      ['Lapsed customer reactivation', 'Yes', 'No'],
      ['Setup time', '24 hours', 'Weeks'],
    ] as [string, string, string][],
  },
  faq: {
    heading: 'Questions owners ask about booking',
    items: faqs,
    open: 1,
  },
  links: {
    heading: 'See the rest of Birdie',
    sub: 'Each part of the platform has its own page.',
    items: PRODUCT_LINKS.filter(([, h]) => h !== '/features/bay-booking/'),
  },
  cta: {
    heading: 'See your booking flow, set up for your bays.',
    body: 'Free walkthrough. We configure your bays, pricing windows, add-ons and waiver step.',
  },
};
