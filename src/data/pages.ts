// Data that drives the generated pages ([slug].astro). Add/remove entries here
// and the pages regenerate on build — no new files needed.

export const STATES: { ab: string; name: string }[] = [
  { ab: 'al', name: 'Alabama' }, { ab: 'ak', name: 'Alaska' }, { ab: 'az', name: 'Arizona' },
  { ab: 'ar', name: 'Arkansas' }, { ab: 'ca', name: 'California' }, { ab: 'co', name: 'Colorado' },
  { ab: 'ct', name: 'Connecticut' }, { ab: 'de', name: 'Delaware' }, { ab: 'fl', name: 'Florida' },
  { ab: 'ga', name: 'Georgia' }, { ab: 'hi', name: 'Hawaii' }, { ab: 'id', name: 'Idaho' },
  { ab: 'il', name: 'Illinois' }, { ab: 'in', name: 'Indiana' }, { ab: 'ia', name: 'Iowa' },
  { ab: 'ks', name: 'Kansas' }, { ab: 'ky', name: 'Kentucky' }, { ab: 'la', name: 'Louisiana' },
  { ab: 'me', name: 'Maine' }, { ab: 'md', name: 'Maryland' }, { ab: 'ma', name: 'Massachusetts' },
  { ab: 'mi', name: 'Michigan' }, { ab: 'mn', name: 'Minnesota' }, { ab: 'ms', name: 'Mississippi' },
  { ab: 'mo', name: 'Missouri' }, { ab: 'mt', name: 'Montana' }, { ab: 'ne', name: 'Nebraska' },
  { ab: 'nv', name: 'Nevada' }, { ab: 'nh', name: 'New Hampshire' }, { ab: 'nj', name: 'New Jersey' },
  { ab: 'nm', name: 'New Mexico' }, { ab: 'ny', name: 'New York' }, { ab: 'nc', name: 'North Carolina' },
  { ab: 'nd', name: 'North Dakota' }, { ab: 'oh', name: 'Ohio' }, { ab: 'ok', name: 'Oklahoma' },
  { ab: 'or', name: 'Oregon' }, { ab: 'pa', name: 'Pennsylvania' }, { ab: 'ri', name: 'Rhode Island' },
  { ab: 'sc', name: 'South Carolina' }, { ab: 'sd', name: 'South Dakota' }, { ab: 'tn', name: 'Tennessee' },
  { ab: 'tx', name: 'Texas' }, { ab: 'ut', name: 'Utah' }, { ab: 'vt', name: 'Vermont' },
  { ab: 'va', name: 'Virginia' }, { ab: 'wa', name: 'Washington' }, { ab: 'wv', name: 'West Virginia' },
  { ab: 'wi', name: 'Wisconsin' }, { ab: 'wy', name: 'Wyoming' },
];

export const PROVINCES: { slug: string; name: string }[] = [
  { slug: 'ontario', name: 'Ontario' },
  { slug: 'british-columbia', name: 'British Columbia' },
  { slug: 'alberta', name: 'Alberta' },
  { slug: 'quebec', name: 'Quebec' },
  { slug: 'manitoba', name: 'Manitoba' },
];

export const COMPARISONS: { slug: string; name: string }[] = [
  { slug: 'birdie-vs-foreup', name: 'ForeUp' },
  { slug: 'birdie-vs-golf-oclock', name: "Golf O'Clock" },
  { slug: 'birdie-vs-lightspeed-golf', name: 'Lightspeed Golf' },
  { slug: 'birdie-vs-chronogolf', name: 'Chronogolf' },
  { slug: 'birdie-vs-birrdi', name: 'Birrdi' },
  { slug: 'birdie-vs-golf918', name: 'Golf 918' },
  { slug: 'birdie-vs-butter', name: 'Butter' },
  { slug: 'birdie-vs-ezfacility', name: 'EZFacility' },
  { slug: 'birdie-vs-mindbody', name: 'Mindbody' },
  { slug: 'birdie-vs-acuity', name: 'Acuity' },
  { slug: 'birdie-vs-square', name: 'Square' },
  { slug: 'birdie-vs-booked-bays', name: 'Booked Bays' },
  { slug: 'birdie-vs-avus', name: 'Avus Systems' },
  { slug: 'birdie-vs-simbook', name: 'Simbook' },
  { slug: 'birdie-vs-teeflow', name: 'TeeFlow' },
  { slug: 'birdie-vs-itg-golf', name: 'ITG.golf' },
  { slug: 'birdie-vs-playbypoint', name: 'Playbypoint' },
  { slug: 'birdie-vs-whoosh', name: 'Whoosh' },
  { slug: 'birdie-vs-activebooker', name: 'ActiveBooker' },
  { slug: 'birdie-vs-proagenda', name: 'ProAgenda' },
];

export const HEADTERMS: { slug: string; h1: string; title: string; description: string }[] = [
];

// Reused across generated pages.
export const CORE_FEATURES: [string, string][] = [
  ['Bay-based scheduling', 'Real-time availability across all bays'],
  ['Membership plans', 'Hour banks, bay restrictions, advance booking windows'],
  ['Automated text and email confirmations, reminders and receipts', 'Instant confirmation plus pre-session reminders'],
  ['Stripe, Square, Clover and Helcim (beta) payments', 'Built into the booking flow, no redirect'],
  ['24/7 smart-lock door access', 'Time-gated SMS unlock links, no staff on-site'],
  ['Revenue intelligence', 'Utilization tracking, reactivation, review automation'],
];
