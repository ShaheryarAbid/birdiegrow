// Feature inventory for /features (and the Bay Agent band on the homepage).
// Source: product facts supplied by Luke from the Birdie app, 2026-10-06.
// RULES: only list what the app does today. Do not add numbers, venue names or
// "coming soon" items. Deliberately NOT listed (not verified / not offered yet):
// mobile app, kiosk, Toast, webhooks, self-serve CSV import, Bay Agent warn-only mode,
// happy-hour pricing, membership waitlist, trade-ins.

export type FeatureItem = [title: string, description?: string];
export interface FeatureGroup {
  eyebrow: string;
  items: FeatureItem[];
  columnBreakAt: number;
  sections?: { heading: string; items: FeatureItem[]; columnBreakAt: number }[];
}

export const BAY_AGENT = {
  eyebrow: 'Bay Agent',
  heading: 'Bay Agent: your bookings, running on every simulator PC',
  lead:
    'Bay Agent is a program that runs on each simulator PC and connects the booking to the bay. It starts and ends sessions with the booking.',
  does: [
    ['Starts and ends sessions with the booking'],
    ['Opens the simulator software automatically'],
    ['Offers customers extra time near the end of a session'],
    ['Sends an alert if a bay goes offline'],
    ['Staff exit PIN'],
  ] as FeatureItem[],
  software: [
    'GSPro', 'TrackMan', 'ProTee VX', 'Uneekor', 'Full Swing', 'Foresight FSX Play / 2020',
    'E6 Connect', 'TGC 2019 / 2K', 'Awesome Golf', 'Creative Golf 3D',
  ],
  monitors: [
    'TrackMan', 'Uneekor', 'ProTee VX', 'Foresight GC3 / GCQuad / Falcon', 'SkyTrak', 'Mevo+', 'Bushnell Launch Pro',
  ],
  note: 'Birdie stays hardware-agnostic: it is the booking layer above your simulators. Bay Agent detects the software and launch monitors listed here.',
};

export const DOOR_ACCESS = {
  heading: 'Door access, from booking to unlock',
  lead:
    'Birdie works with Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock. Here is what a customer and an owner see.',
  items: [
    ['An unlock link or PIN with every booking', 'Sent to the customer by text or email.'],
    ['A window you set', 'Valid from shortly before the session until shortly after it ends. The window is set per venue.'],
    ['A fallback if a door does not open', 'If the door does not confirm it opened, the customer sees a fallback and the owner gets an alert.'],
    ['Provider differences', "Kisi unlocks through Kisi's own page. RemoteLock can send a PIN."],
  ] as FeatureItem[],
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    eyebrow: 'Booking & pricing',
    columnBreakAt: 4,
    items: [
      ['Peak, off-peak and time-of-day rates', 'Set per bay.'],
      ['Surge (demand) pricing', 'Raises rates automatically at busy times.'],
      ['AI pricing suggestions', 'Suggestions you review and apply in one click.'],
      ['Block Time', 'Close bays for private events or members-only hours, one-off or repeating. Optionally let members, or specific plans, still book.'],
      ['Booking length, step and advance-window rules', 'Per venue or per bay.'],
      ['Members-only booking mode'],
      ['Session extensions', 'Offered in the bay, or the customer extends by text.'],
      ['Deposits, reserve-with-card or pay at venue'],
      ['Booking waitlist for full times'],
      ['Short-booking fee'],
    ],
  },
  {
    eyebrow: 'Memberships',
    columnBreakAt: 7,
    items: [
      ['Hour-bank, unlimited, pay-per-use member-rate and unit/credit plans'],
      ['Monthly, quarterly, annual and 6-month prepaid billing'],
      ['Plan time windows', 'For example off-peak-only plans, with discounted rates outside the window.'],
      ['Overage discounts and hour rollover', 'Discounts once hours run out; hours can roll over.'],
      ['Grandfathered pricing for existing members'],
      ['Comped memberships'],
      ['Waivers and membership agreements', 'Signed online, with versions.'],
      ['Family, household and group plans with seats', 'Plus add-on memberships linked to a main member.'],
      ['Pre-opening and pre-sale memberships', 'Charge on opening day.'],
      ['Sign-up proration, birthday and anniversary bonus hours'],
      ['Member self-service', 'Self-cancel, cancel at period end, self-pause.'],
      ['Late-cancel and no-show fees', 'A flat amount per hour.'],
      ['Punch passes'],
    ],
  },
  {
    eyebrow: 'Leagues, events & lessons',
    columnBreakAt: 4,
    items: [
      ['Leagues', 'Teams, rosters, weekly billing, standings, stroke-play scoring, league-night bay holds, waitlists, team invites and substitutes.'],
      ['GSPro online tournament (SGT) integration for leagues'],
      ['Events', 'Camps, clinics and tournaments, with custom sign-up forms, check-in and reminders.'],
      ['Bookable packages', 'The customer pays once, then picks their own date and time.'],
      ['Instructors and lesson booking', 'Availability, rates and intake questions.'],
      ['Lesson packages and member lesson rates'],
      ['Club fitting', 'Fitting proposals, a build stage board, vendors and custom orders.'],
    ],
  },
  {
    eyebrow: 'Growth & marketing',
    columnBreakAt: 5,
    items: [
      ['Gift cards', 'Sold online or issued by staff.'],
      ['Promo codes, BOGO offers and corporate promo programs'],
      ['Referral program', 'Rewards in cash, hours or recurring discounts, including tiers.'],
      ['Campaigns and Segments', 'Text and email.'],
      ['Guest passes'],
      ['Workflows', 'Multi-step automations.'],
      ['Messages inbox', 'Text and email threads for each customer in one place.'],
      ['Google review requests, lapsed and at-risk customer reactivation, birthday campaigns and a newsletter'],
      ['Ad landing pages and lead capture', 'With automatic follow-ups.'],
    ],
  },
  {
    eyebrow: 'Operations',
    columnBreakAt: 4,
    items: [
      ['Food & beverage', 'Menu, modifiers, bay tabs and kitchen tickets.'],
      ['Merchandise', 'With variants and stock.'],
      ['Square in-person sales', 'Matched to customer profiles.'],
      ['Sales tax and online convenience fee', 'Including tax-exempt plans.'],
      ['Card on file', 'Automatic renewals and retries.'],
      ['Staff scheduling', 'Shifts, swaps and time off, plus a time clock, payroll exports and commissions.'],
      ['Team roles and permissions'],
      ['Activity log', 'Every change recorded with who made it.'],
    ],
  },
  {
    eyebrow: 'Customer experience & Reporting',
    columnBreakAt: 1,
    items: [
      ['A booking page themed to your venue', 'Bays, lessons, events, memberships and gift cards.'],
      ['Customer portal', 'One-time-code sign-in. Customers book, see hours and balances, update their card and sign waivers.'],
    ],
    sections: [{
      heading: 'Reporting',
      columnBreakAt: 2,
      items: [
      ['Owner dashboard'],
      ['Revenue reports'],
      ['Utilization heatmaps'],
      ],
    }],
  },
  {
    eyebrow: 'Onboarding & support',
    columnBreakAt: 1,
    items: [
      ['Done-for-you migration', 'Customers, memberships, history, gift cards and league rosters, moved by CSV.'],
      ['In-app Resources hub', 'Setup guides, plus a help bot that answers from those docs.'],
    ],
  },
];
