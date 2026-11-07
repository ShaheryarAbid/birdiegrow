// Content for the bay booking & waivers feature page: /features/bay-booking/ (src/pages/features/bay-booking.astro).
// Copy is the design's (Figma "Bay booking & waivers", node 546:20535); facts match src/data/features.ts.

import { SITE } from '../../consts';
import { PRODUCT_LINKS } from '../featurePages';

const IMG = '/assets/features';
const BB = `${IMG}/bay-booking`;

const faqs: [string, string][] = [
  ['How does pricing work for simulator bays?', 'You set rates per bay and by time of day: peak, off-peak and time-of-day rates, with optional surge (demand) pricing that raises rates automatically at busy times. Birdie can also suggest prices, which you review and apply in one click.'],
  ['How long does it take a customer to book a bay?', 'Under 30 seconds on a phone: pick a bay and a time, choose the group size and add-ons, and pay. No app download is needed.'],
  ['Can I take a deposit instead of full payment?', 'Yes. You set the rule per booking type: full payment, a deposit, reserve with card (the card is saved and nothing is charged now), or pay at venue.'],
  ['Which payment processors does Birdie support?', 'Stripe, Square, Clover and Helcim (beta). Helcim is in beta and enabled on request. Payment runs inside the booking flow, with no redirect.'],
  ['Are waivers built in?', 'Yes. Waivers and membership agreements are signed online, with versions. Customers sign as part of booking or from their customer portal, and every signature is tied to the waiver version the customer agreed to.'],
  ['How should I handle minors?', 'If you allow players under 18, a parent or guardian must sign on their behalf.'],
  ['What happens when a time is fully booked?', 'Birdie can keep a booking waitlist for full times.'],
];

// "Rules that protect the calendar": every item shows the same phone image.
// Copy for items 1–2 is the design's; the rest restates facts used elsewhere on the site.
const rulesImg = { img: `${IMG}/bay-rules-phone.webp`, alt: 'Birdie bay calendar on a phone' };

export const BAY_BOOKING = {
  meta: {
    title: 'Bay Booking & Waivers for Golf Simulator Venues | Birdie',
    description: 'Hourly bay pricing, deposits, built-in payments and online waivers in one booking flow built for golf simulator venues. Customers book on a phone with no app download.',
  },
  hero: {
    crumb: ['Product', 'Bay booking & waivers'],
    h1: 'Bay booking and waivers, built for simulators.',
    lead: 'Hourly bays, group sizes, deposits and signed waivers in one booking flow. Customers book on a phone in under 30 seconds, with no app download.',
    primary: { label: 'Book a demo', href: SITE.demoPath },
    secondary: { label: 'See how it works', href: '#pricing-by-hour' },
  },
  shortAnswer: {
    body: 'Birdie is bay booking software for golf simulator venues. Customers pick a bay, a time and a group size, pay at checkout and sign the waiver online, on any phone. Appointment tools sell fixed slots; Birdie sells hourly bay time, with group pricing, peak and off-peak rates and add-ons built in.',
    chips: [
      ['broadcastFilled', 'Real-time availability per bay'],
      ['usersThreeFilled', 'Group-size pricing'],
      ['listPlusFilled', 'Add-ons at checkout'],
      ['signatureFilled', 'Waivers signed online'],
    ] as [string, string][],
    image: {
      src: '/assets/product/bay-booking-short-answer.webp',
      mobileSrc: '/assets/product/bay-booking-short-answer-mobile.webp',
      alt: 'Pick a bay and time, set group size, pay at checkout, and sign the waiver.',
    },
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
  // Rules — Figma 2049:99684 (item 2 open: 2049:99973, mobile 2049:100506). Uses the shared AccordionPreview box (no tabs).
  rules: {
    heading: 'Rules that protect the calendar.',
    sub: 'Pricing, length and timing rules run on every booking, so the busy hours earn more and the quiet ones still fill.',
    preview: {
      id: 'rules-preview',
      cta: { label: 'Book a demo', href: SITE.demoPath },
      groups: [{
        items: [
          { label: 'Time-of-day and surge pricing', text: 'Peak and off-peak rates set per bay, raised automatically when demand is high.', ...rulesImg },
          { label: 'AI pricing suggestions', text: 'Suggestions you review and apply in one click.', ...rulesImg },
          { label: 'Booking length rules and short-booking fee', text: 'Set booking length, step and advance-window rules, and charge a fee for short bookings.', ...rulesImg },
          { label: 'Block Time', text: 'Close bays one-off or on a repeat, and still let members or specific plans book.', ...rulesImg },
          { label: 'Session extensions', ...rulesImg },
          { label: 'Booking waitlist for full times', text: 'Keep a waitlist for times that are fully booked.', ...rulesImg },
        ],
      }],
    },
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
