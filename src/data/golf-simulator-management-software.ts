// Content for the /golf-simulator-management-software/ page (src/pages/golf-simulator-management-software.astro). Presentational props stay in the page.
// Headings are plain text: the section components add the green period.
// Proof-of-scale figures live in src/data/proof.ts — update them there, not here.

import { SITE } from '../consts';

const FAQS: [string, string][] = [
  ['What should golf simulator management software be able to do?', 'For a commercial simulator venue the core checklist is: bay-level scheduling by the hour rather than generic appointment slots; hour-bank memberships with automatic draw-down, bay restrictions and advance-booking windows; weekday, off-peak and weekend pricing windows; payment captured at the moment of booking; automated text and email confirmations, reminders and receipts; 24/7 smart-lock door access for unattended operation; utilization and revenue reporting broken out by day and bay; multi-location support if you run more than one venue; and compatibility with whatever simulator hardware and game software you already own. Birdie covers all nine — it sits above TrackMan, GSPro, Foresight, Uneekor, E6 Connect and TruGolf rather than replacing them, connects to Stripe, Square, Clover and Helcim (beta) for payments and to Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock for door access, and is flat-fee from $197/month with no per-booking fees.'],
  ['What is the difference between booking software and management software?', 'A booking app captures reservations. A management platform runs the whole business behind them — memberships, payments, customer communication, door access, and revenue reporting — from one system instead of four disconnected tools.'],
  ['Can I start with just the booking system and add the rest later?', 'Yes. Most studios start with bookings and add the website, marketing, and ads management when they are ready to grow. There are no locked-in tiers.'],
  ['Are simulator management systems compatible with POS and inventory tools?', 'Payment and POS compatibility is standard — Birdie connects natively to Stripe, Square, Clover and Helcim (beta), so bay bookings, deposits, memberships, and in-venue sales all settle through the processor you already use. Inventory works differently: rather than syncing to a separate inventory platform, Birdie sells add-ons and retail items directly inside the booking and checkout flow — BYOB fees, guest passes, rentals, and custom items — so bay revenue and add-on revenue land in one report instead of two systems you have to reconcile. If you run a full kitchen or a large retail floor, you will still want a dedicated F&B or inventory platform alongside it. For the food, drink, and pro-shop volume a typical simulator venue actually does, the built-in add-on model is usually enough.'],
  ['Do memberships and hour banks get tracked automatically?', 'Yes. Birdie tracks hour banks, bay restrictions, and advance-booking windows natively — no spreadsheets, no manual draw-downs. A member’s balance updates the moment they book.'],
  ['Can I run my studio remotely?', 'Yes. The owner dashboard works from any device — see live bay status, trigger door unlocks, resend customer links, and monitor revenue from your phone.'],
  ['Is there a long-term contract?', 'No. Birdie is flat-fee and month-to-month, live in 24 hours with white-glove setup. Cancel anytime.'],
  ['How long does it take to roll out golf simulator management software, and does it need IT resources?', 'Birdie goes live in 24 hours with white-glove setup, and it needs no developers and no IT department. Migration, configuration and staff walkthrough are handled for you — a venue manager is the only person whose time is required. Because Birdie sits above the simulator hardware and game software you already run rather than replacing it, there is nothing to rip out and no on-site installation: bays, pricing windows, memberships and door-access rules are configured in the dashboard, and the booking page is live on your existing website the same day.'],
];

export const GOLF_SIMULATOR_MANAGEMENT_SOFTWARE = {
  meta: {
    title: 'Golf Simulator Management Software — All-in-One | Birdie',
    description: 'Run your whole golf simulator studio from one platform — bookings, memberships, payments, customers, door access, and revenue reporting. Live in 24 hours.',
  },
  hero: {
    crumb: 'Golf Simulator Management Software',
    h1: 'Golf Simulator Management Software — Everything in One Platform',
    lead: "Golf simulator management software runs your entire studio — bookings, memberships, payments, customers, marketing, and door access — from one platform instead of five tools that don't talk to each other. Most operators manage all of it from their phone, between sessions; Birdie is built to make that possible.",
    primary: { label: 'Book a Demo', href: SITE.demoPath },
    secondary: { label: 'See pricing', href: '/pricing/' },
    quickAnswer: 'Golf simulator management software runs an entire indoor golf venue from one platform — bay booking, hour-bank memberships, Stripe, Square, Clover and Helcim (beta) payments, customer records, automated texts and emails, 24/7 smart-lock door access, and revenue reporting. Where a booking app only captures reservations, a management platform handles everything behind them, replacing the four-to-six disconnected tools most studios juggle. Birdie is purpose-built for simulator operators, is flat-fee and month-to-month, and goes live in 24 hours.',
  },
  facts: [
    ['Best for', 'Simulator venues that want one system to run the whole operation — bookings, memberships, payments, door access and revenue reporting — instead of four disconnected tools. Birdie pairs that with a revenue layer that surfaces underused weekday hours and lapsed customers.'],
    ['Works with', 'Any simulator hardware or game software. Birdie is the management layer that sits above TrackMan, GSPro, Foresight, Uneekor, E6 Connect and TruGolf — it does not replace them and does not require a specific brand.'],
    ['Integrations', 'Stripe, Square, Clover and Helcim (beta) for payments; Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock for 24/7 smart-lock door access; Telnyx and Resend for automated SMS and email.'],
    ['Pricing', 'From $197/month flat. No per-booking fees, no percentage of revenue, month-to-month with no long-term contract.'],
    ['Setup', 'White-glove onboarding (one-time fee), live in about 24 hours, no developers required.'],
  ] as [string, string][],
  capabilities: {
    heading: 'Golf simulator management software: everything to run and grow your studio',
    groups: [
      ['Booking & operations', ['Bay-based scheduling with real-time availability', 'Membership plans with hour bank tracking', 'Weekday, off-peak and weekend pricing windows', 'Add-ons at checkout (BYOB, guests, custom items)', 'Automated text and email confirmations, reminders and receipts', 'Stripe, Square, Clover and Helcim (beta) payments', '24/7 smart-lock door access automation', 'Multi-location support — every venue in one login']],
      ['Revenue intelligence', ['Weekday utilization tracking — see exactly which slots underperform', 'Lapsed customer identification — auto-segments customers inactive 60+ days', 'One-click reactivation campaigns via SMS and email', 'Google review automation after every session', 'Owner dashboard with revenue, occupancy, and bay status in real time']],
      ['Growth (full platform)', ['Facebook and Google Ads management', 'Ongoing SEO optimization', 'Local search domination', 'Monthly performance reporting', 'Dedicated account manager']],
    ] as [string, string[]][],
  },
  problems: {
    heading: 'Why separate tools cost you more than you think',
    sub: 'The average studio owner uses 4–6 different tools: a booking app, a payment processor, a spreadsheet for memberships, a texting app, a review tool, and something for marketing. Each costs money. None share data. Birdie replaces all of it — one login, one dashboard.',
    items: [
      ["Booking tool doesn't track memberships", 'Birdie manages hour banks, bay restrictions, and advance booking windows natively'],
      ['SMS reminders sent manually or not at all', 'Every booking triggers automatic confirmation and reminder texts — zero manual work'],
      ['No visibility into which hours are losing money', "Birdie's dashboard shows utilization by day and time so you know exactly where to focus"],
      ['No path to 24/7 operation without hiring staff', 'PDK integration automates door access — customers let themselves in via SMS link'],
    ] as [string, string][],
  },
  remote: {
    heading: "Manage your studio from anywhere — including when you're not there",
    paras: ["Birdie's dashboard gives you full visibility and control from any device. See live bay status, trigger door unlocks remotely, resend customer SMS links, and monitor revenue — all from your phone. Combined with PDK door access, you can run a fully operational studio without being on-site."],
    link: { label: 'See how 24/7 door access works', href: '/blog/golf-simulator-door-access/' },
  },
  phased: {
    heading: "Start with bookings. Add everything else when you're ready.",
    paras: ["You don't have to implement everything at once. Start with the booking system. Add the website and SEO when you're ready to grow. Add ads management when you want to scale. Birdie grows with your studio — no locked-in tiers, no long-term contracts."],
    link: { label: 'See all platform tiers', href: '/pricing/' },
  },
  article: {
    heading: 'What "golf simulator management software" actually means',
    intro: [
      `Golf simulator management software is a single platform that runs the operational side of an indoor simulator venue — booking, memberships, payments, customer communication, and revenue reporting — instead of forcing you to stitch together four different tools. The "management" part is what separates it from generic booking apps. A booking app captures reservations. A management platform runs the business behind those reservations.`,
    ],
    items: [
      { title: 'What operators actually need in one tool', html: `<p>In practice, simulator operators need three things working together: a booking system that handles bay-by-bay availability, deposits, and automated text and email confirmations, reminders and receipts; a membership engine that tracks hour banks or unlimited tiers, bills automatically, and prevents members from accidentally booking outside their plan; and an analytics layer that shows which weekdays are dead, which bays are underperforming, which customers have lapsed, and where the recoverable revenue actually lives. Anything less and the operator ends up doing the work the software should be doing.</p>` },
      { title: 'How Birdie delivers all three', html: `<p>Birdie is the only platform built specifically to deliver all three layers for indoor simulator venues. Booking, memberships, and analytics all live in the same database, which means a member's hour-bank balance updates the moment they book, an owner's revenue dashboard updates the moment a payment clears, and a lapsed-customer re-engagement SMS goes out the moment a regular crosses the inactivity threshold you set. There's no integration step, no syncing between tools, and no place for revenue to leak between systems.</p>` },
      { title: 'Built for the actual operator', html: `<p>Birdie is flat-fee, month-to-month, and live in 24 hours with white-glove setup. The same platform runs whether you have two bays or twelve, a single location or a small multi-site footprint. If you're currently running on a stack of generic tools and feel like you're losing weekday revenue you can't quite see, this is the upgrade.</p>` },
    ],
    cta: { label: 'Book a Demo', href: SITE.demoPath },
  },
  faq: {
    heading: 'Frequently asked questions',
    items: FAQS,
  },
  related: {
    heading: 'Related',
    items: [
      ['Golf simulator software (platform overview)', '/golf-simulator-software/'],
      ['Golf simulator booking, reservation & scheduling software', '/golf-simulator-booking-software/'],
      ['Compare the best golf simulator software', '/best-golf-simulator-software/'],
      ['Every Birdie feature, bay booking to door access', '/features/'],
      ['Running multiple simulator venues on one platform', '/platform/'],
      ['Switching from another system? All Birdie comparisons', '/compare/'],
    ] as [string, string][],
  },
  cta: {
    heading: 'Ready to manage your whole studio from one place?',
    body: '',
    items: ['Free walkthrough', 'No commitment', 'Live in 24 hours'],
    label: 'Book a Demo',
  },
  schema: [
    {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: 'Birdie',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Golf Simulator Management Software',
      operatingSystem: 'Web',
      url: `${SITE.url}/golf-simulator-management-software/`,
      description: 'All-in-one golf simulator management software: bay booking, hour-bank memberships, payments, automated texts and emails, 24/7 smart-lock door access and revenue reporting.',
      offers: {
        '@type': 'Offer', price: '197', priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification', price: '197', priceCurrency: 'USD',
          referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
        },
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Golf Simulator Management Software', item: `${SITE.url}/golf-simulator-management-software/` },
      ],
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
};
