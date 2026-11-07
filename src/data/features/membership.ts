// Content for the memberships feature page: /features/memberships/ (src/pages/features/memberships.astro).
// Facts match src/data/features.ts and the membership guide.

import { SITE } from '../../consts';
import { PRODUCT_LINKS } from '../featurePages';

const IMG = '/assets/features';

// Example membership from the design (Figma 2049:103192); the stat boxes are derived from it.
const ex = { members: 40, rate: 229, hours: 8, walkin: 40 };
const memberRate = ex.rate / ex.hours;

const faqs: [string, string][] = [
  ['How do hour-bank memberships work?', 'Members buy a block of hours and book against it. Birdie draws the hours down automatically and enforces the rules of every plan.'],
  ['Can unused hours roll over?', 'Yes. Hour rollover is supported, and you can offer overage discounts once hours run out.'],
  ['Can I restrict a plan to certain bays or times?', 'Yes. Each plan can have its own bay restrictions, advance booking window, time window and members-only hours.'],
  ['Which billing intervals are supported?', 'Monthly, quarterly, annual and 6-month prepaid billing.'],
  ['Can members manage their own membership?', 'Yes. Members can self-cancel, cancel at period end or self-pause, and they sign in to the customer portal to check hours and balances, update cards and sign waivers.'],
  ['Does Birdie support family and household plans?', 'Yes. Family, household and group plans with seats are supported, plus add-on memberships linked to a main member.'],
  ['Can I sell memberships before the venue opens?', 'Yes. Pre-opening and pre-sale memberships are charged on opening day.'],
];

export const MEMBERSHIP = {
  meta: {
    title: 'Memberships & Passes for Golf Simulator Venues | Birdie',
    description:
      'Hour-bank, unlimited, member-rate and credit plans for golf simulator venues, with bay restrictions, advance booking windows, billing and punch passes handled automatically.',
  },
  hero: {
    crumb: ['Product', 'Memberships & passes'],
    h1: 'Memberships that run themselves.',
    lead: 'Monthly plans built on hour banks. Members book from their balance, Birdie draws the hours down and enforces the rules of every plan.',
    primary: { label: 'Book a demo', href: SITE.demoPath },
    secondary: { label: 'See how it works', href: '#plan-rules' },
  },
  shortAnswer: {
    body: 'Birdie runs simulator memberships the way venues actually sell them: hour-bank plans where members book from their balance and hours draw down automatically, plus unlimited, member-rate and credit plans. Each plan can have its own bay restrictions, advance booking window, time window and members-only hours.',
    chips: [
      ['clockCounterClockwiseFilled', 'Hour banks with rollover'],
      ['prohibitFilled', 'Bay restrictions'],
      ['clockCountdownFilled', 'Plan time windows'],
      ['ticketFilled', 'Punch passes'],
    ] as [string, string][],
    image: {
      src: '/assets/product/membership-short-answer.webp',
      mobileSrc: '/assets/product/membership-short-answer-mobile.webp',
      alt: 'Build custom plans, set bay and time rules, automate hours and billing, and secure predictable revenue.',
    },
  },
  // Figma 2049:103192 (mobile 2049:103898). A "\n" in a metric title or caption is a line break on mobile.
  revenue: {
    heading: 'Turn memberships into predictable revenue',
    sub: `See how ${ex.members} members on a $${ex.rate} monthly plan with ${ex.hours} hours each can generate recurring revenue.`,
    card: {
      title: 'Example membership',
      headline: `${ex.members} members`,
      rows: [
        ['Plan rate', `$${ex.rate}/month`],
        ['Included hours', `${ex.hours} hours`],
        ['Walk-in rate', `$${ex.walkin}/hour`],
      ] as [string, string][],
      text: 'Memberships give your venue a predictable monthly cash flow. Automate recurring billing, lock in off-peak utilization, and build a sustainable business model on autopilot. This ensures financial stability and eliminates the stress of unpredictable walk-in traffic.',
    },
    metrics: [
      { title: 'Recurring\nrevenue', prefix: '$', value: (ex.members * ex.rate).toLocaleString('en-US'), caption: 'per month, before\na single booking' },
      { title: 'Effective\nmember rate', prefix: '$', value: String(Math.round(memberRate)), caption: 'per bay hour' },
      { title: 'Member discount vs drop-in', value: String(Math.round((1 - memberRate / ex.walkin) * 100)), suffix: '%', caption: 'in the 20–35%\nsweet spot' },
      { title: 'Member bay-hours / month', value: (ex.members * ex.hours).toLocaleString('en-US'), caption: 'hours members\ncan book' },
    ],
  },
  tiers: {
    heading: 'Build plans around your quiet',
    sub: 'A typical program runs four tiers, including a weekday-only plan that fills your slowest hours.',
    cols: 4 as const,
    tiers: [
      ['Starter', 'For casual players who want an affordable way to play regularly without committing to a larger plan.', '$99–$129/mo'],
      ['Regular', 'For regular players and league participants who book most weeks.', '$179–$229/mo', 'dark'],
      ['Weekday-Only', 'For players with flexible schedules who prefer quieter sessions and want to save by booking during off-peak hours.', '$129–$199/mo'],
      ['Premium', 'For dedicated golfers who practice frequently and want more playing time, better rates.', '$249–$329/mo'],
    ] as [string, string, string, ('light' | 'dark')?][],
    note: 'Example time and price ranges from our membership program guide. You set your own.',
    cta: { label: 'Book a demo', href: SITE.demoPath },
  },
  rules: {
    id: 'plan-rules',
    heading: 'Every plan gets its own rules',
    sub: 'Set them once. Birdie enforces them on every booking, so the front desk never has to.',
    tabs: [
      { label: 'Members-only slots', title: 'Members-only hours', text: 'Keep times for members, one-off or repeating. Optionally let specific plans still book.', img: `${IMG}/members-only-slots.webp`, alt: 'Members-only booking slots' },
      { label: 'Advance booking windows', title: 'Advance booking windows', text: 'Give higher tiers priority, like a 48- or 72-hour head start.', img: `${IMG}/advanced-booking-window.webp`, alt: 'Advance booking window by plan' },
      { label: 'Plan time windows', title: 'Plan time windows', text: 'For example off-peak-only plans, with discounted rates outside the window.', img: `${IMG}/plan-time-windows.webp`, alt: 'Member access time window' },
      { label: 'Bay restrictions', title: 'Bay restrictions', text: 'Limit a plan to certain bays, or open all of them.', img: `${IMG}/bay-restrictions.webp`, alt: 'Bay restriction by plan' },
    ],
  },
  planTypes: {
    id: 'plan-types',
    heading: "Every kind of plan you'd want to sell",
    sub: 'Hour banks are the start. Pick a topic to see everything else Birdie runs for members.',
    groups: [
      { label: 'Plan types', items: [['Hour-bank plans', 'Members buy a block of hours and book against it.'], ['Unlimited plans', 'One flat price, no hour tracking.'], ['Pay-per-use member-rate plans', 'Members pay a lower rate per hour than walk-ins.'], ['Unit and credit plans', 'Sell credits that cover different services.'], ['Punch passes and guest passes', 'Fixed-visit bundles, plus passes for friends.'], ['Plan time windows', 'For example off-peak-only plans, with discounted rates outside the window.']] as [string, string?][] },
      { label: 'Billing', items: [['Monthly, quarterly, annual and 6-month prepaid billing'], ['Overage discounts and hour rollover', 'Discounts once hours run out; hours can roll over.'], ['Grandfathered pricing for existing members'], ['Late-cancel and no-show fees', 'A flat amount per hour.']] as [string, string?][] },
      { label: 'Households', items: [['Family, household and group plans with seats', 'Plus add-on memberships linked to a main member.'], ['Comped memberships']] as [string, string?][] },
      { label: 'Member self-service', items: [['Member self-service', 'Self-cancel, cancel at period end, self-pause.'], ['Waivers and membership agreements', 'Signed online, with versions.']] as [string, string?][] },
      { label: 'Launch and loyalty', items: [['Pre-opening and pre-sale memberships', 'Charge on opening day.'], ['Sign-up proration, birthday and anniversary bonus hours']] as [string, string?][] },
    ],
  },
  faq: {
    heading: 'Questions owners ask about memberships',
    items: faqs,
    open: 0,
  },
  links: {
    heading: 'See the rest of Birdie',
    sub: 'Each part of the platform has its own page.',
    items: PRODUCT_LINKS.filter(([, h]) => h !== '/features/memberships/'),
  },
  cta: {
    heading: 'Fill quiet weeknights with members.',
    body: 'Free walkthrough. We set up your plans, bay restrictions and booking windows during onboarding.',
  },
};
