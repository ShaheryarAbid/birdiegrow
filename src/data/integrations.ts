// Data that drives the /integrations hub and /integrations/[slug] pages.
// Add an entry here and the page generates on build — no new file needed.
export type Integration = {
  slug: string;
  name: string;        // display name, e.g. "Kisi"
  vendor: string;      // full brand name for copy/schema
  category: string;    // e.g. "Door access"
  tagline: string;     // one-line for the hub + hero
  intro: string;       // 1–2 sentence intro paragraph
  how: string;         // how the integration actually works (extractable answer)
  // Section "How the X integration works": the `how` answer broken into the design's numbered
  // beats. Optional — pages without a Figma flow fall back to one row per sentence.
  flow?: { t: string; d: string }[];
  // Flattened Figma hero export (photo + partner tile cluster baked in, no copy). Only partners
  // with a dedicated export get one; the rest keep the composed hero.
  heroBg?: { desktop: string; mobile: string };
  steps: string[];     // setup steps
  faqs: [string, string][];
  vendorUrl?: string;  // outbound link to the partner
};

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'kisi',
    name: 'Kisi',
    vendor: 'Kisi',
    category: 'Door access',
    tagline: 'Cloud access control that lets golf simulator customers in automatically.',
    intro:
      "Birdie's Kisi integration turns every booking into a time-limited door credential — no front desk, no shared codes. It's a strong fit for simulator venues that want cloud-managed access with mobile and QR-code entry.",
    how:
      'When Kisi door access is enabled, Birdie creates a time-limited Kisi Share for each booking. Kisi emails the customer their access credential — a QR code or tap-to-unlock link — that only works during their booked window and expires the moment the session ends.',
    flow: [
      { t: 'Integration Setup', d: 'When Kisi door access is enabled, Birdie creates a time-limited Kisi Share for each booking.' },
      { t: 'Credential Delivery', d: 'Kisi emails the customer their access credential — a QR code or tap-to-unlock link.' },
      { t: 'Time-Bound Access', d: 'Link only works during their booked window and expires the moment the session ends.' },
    ],
    heroBg: { desktop: '/assets/integrations/kisi-hero-desktop.webp', mobile: '/assets/integrations/kisi-hero-mobile.webp' },
    steps: [
      'Connect your Kisi account in Birdie’s door-access settings.',
      'Map each bay door or entrance to its Kisi place.',
      'Birdie issues a time-boxed Kisi Share automatically on every booking.',
      'Customers get a QR code or tap-to-unlock link by email and let themselves in.',
    ],
    faqs: [
      ['Does Birdie work with Kisi door access?', 'Yes. Birdie has a native Kisi integration: every booking automatically generates a time-limited Kisi Share, and the customer receives a QR code or tap-to-unlock link that only works during their session.'],
      ['Do customers need the Kisi app to get in?', 'No. Birdie sends a browser-based QR code or tap-to-unlock link, so customers do not have to download the Kisi app to enter.'],
    ],
    vendorUrl: 'https://www.getkisi.com',
  },
  {
    slug: 'pdk',
    name: 'PDK',
    vendor: 'ProDataKey (PDK)',
    category: 'Door access',
    tagline: 'ProDataKey smart-lock entry, unlocked by SMS during the booking window.',
    intro:
      "Birdie's ProDataKey (PDK) integration lets golf simulator customers unlock the door from a text link during their reserved time — ideal for venues already running PDK hardware.",
    how:
      'With PDK door access enabled, every booking generates a time-gated SMS unlock link. The link activates at the session start time and stops working when the booking ends, so only paying customers get in, and only when they should.',
    steps: [
      'Connect your PDK cloud account in Birdie’s door-access settings.',
      'Map each bay or entrance door to its PDK device.',
      'Birdie sends the customer a time-gated SMS unlock link for every booking.',
      'The link works only during the booked window — no keypad, no shared codes.',
    ],
    faqs: [
      ['Does Birdie integrate with ProDataKey (PDK)?', 'Yes. Birdie natively integrates with PDK smart locks. Every booking generates a time-gated SMS unlock link that opens the door only during the customer’s session.'],
      ['How do customers unlock a PDK door?', 'They tap the SMS unlock link Birdie sends. It activates at their session start time and expires when the booking ends — no app, PIN, or keycard required.'],
    ],
    vendorUrl: 'https://www.prodatakey.com',
  },
  {
    slug: 'unifi-access',
    name: 'UniFi Access',
    vendor: 'Ubiquiti UniFi Access',
    category: 'Door access',
    tagline: 'Self-hosted UniFi Access door control, wired into every booking.',
    intro:
      "Birdie connects to Ubiquiti's UniFi Access controllers so simulator customers can enter during their booked window — a natural fit for venues already invested in the UniFi ecosystem.",
    how:
      'Birdie integrates with your local UniFi Access controller, exposed via a Cloudflare Tunnel (recommended) or a port-forward. On each booking, Birdie grants time-limited access to the mapped door and sends the customer an unlock link that works only during their session. Cloudflare Access Service Auth is supported for locked-down tunnels.',
    steps: [
      'Expose your UniFi Access controller via a Cloudflare Tunnel (recommended) or port-forward 12445.',
      'Paste the controller URL and API token into Birdie’s door-access settings.',
      'Discover doors and map each bay to its UniFi Access door.',
      'Birdie grants time-limited access automatically on every booking.',
    ],
    faqs: [
      ['Does Birdie work with UniFi Access?', 'Yes. Birdie integrates with a local UniFi Access controller exposed through a Cloudflare Tunnel or port-forward, and grants time-limited door access automatically for each booking.'],
      ['Do I need Cloudflare for UniFi Access?', 'A Cloudflare Tunnel is the recommended way to expose your controller securely; a port-forward on 12445 also works. Birdie supports Cloudflare Access Service Auth for protected tunnels.'],
    ],
    vendorUrl: 'https://ui.com/door-access',
  },
  {
    slug: 'avigilon-alta',
    name: 'Avigilon Alta',
    vendor: 'Avigilon Alta (formerly Openpath)',
    category: 'Door access',
    tagline: 'Avigilon Alta access control with a single pre-signed link.',
    intro:
      "Birdie's Avigilon Alta integration is the fastest to set up — one pre-signed Alta API link and your bookings can open the door. A good fit for venues on Alta, formerly known as Openpath.",
    how:
      'Bookings open your door using a single pre-signed Alta API link. You generate it once in Alta and paste it into Birdie — no other credentials needed. Birdie then triggers a time-boxed unlock for each reservation, so entry is tied to the booked window.',
    steps: [
      'Generate a pre-signed Alta API link in your Avigilon Alta dashboard.',
      'Paste the link into Birdie’s Avigilon Alta door-access settings.',
      'Map the link to the bay or entrance door.',
      'Birdie triggers a time-boxed unlock automatically on each booking.',
    ],
    faqs: [
      ['Does Birdie integrate with Avigilon Alta (Openpath)?', 'Yes. Birdie works with Avigilon Alta using a single pre-signed Alta API link — generate it once, paste it into Birdie, and each booking triggers a time-boxed door unlock. No other credentials are needed.'],
      ['Is Avigilon Alta the same as Openpath?', 'Yes. Openpath was rebranded as Avigilon Alta. Birdie’s integration works with current Alta access control.'],
    ],
    vendorUrl: 'https://www.avigilon.com/products/access-control',
  },
  {
    slug: 'remotelock',
    name: 'RemoteLock',
    vendor: 'RemoteLock',
    category: 'Door access',
    tagline: 'RemoteLock PIN and mobile credentials, auto-issued at booking.',
    intro:
      "Birdie's RemoteLock integration grants time-limited entry to your bays automatically — a fit for venues using RemoteLock-supported smart locks.",
    how:
      'Birdie grants customers time-limited access to your bays via RemoteLock. Credentials — a PIN or a mobile key — are auto-issued at booking time and delivered by SMS or email, and they expire when the session ends.',
    steps: [
      'Connect your RemoteLock account in Birdie’s door-access settings.',
      'Map each bay or entrance to its RemoteLock device.',
      'Birdie auto-issues a PIN or mobile credential for every booking.',
      'The credential is texted or emailed to the customer and expires after the session.',
    ],
    faqs: [
      ['Does Birdie integrate with RemoteLock?', 'Yes. Birdie grants time-limited access via RemoteLock: a PIN or mobile credential is auto-issued at booking time, delivered by SMS or email, and expires when the session ends.'],
      ['How do customers receive their RemoteLock code?', 'Birdie sends the PIN or mobile credential automatically by SMS or email when the booking is made, so there is nothing for staff to hand out.'],
    ],
    vendorUrl: 'https://www.remotelock.com',
  },
];

// Integrations that are live in the product but don't yet have a dedicated
// public doc page. They render on the /integrations hub as "Documentation
// coming soon" stubs — the RemoteLock page is the template these will follow.
export type IntegrationStub = {
  note?: string;       // label shown instead of "Documentation coming soon"
  name: string;
  vendor: string;
  category: string;
  tagline: string;
};

export const MORE_INTEGRATIONS: IntegrationStub[] = [
  { name: 'Square', vendor: 'Square', category: 'Payments', tagline: 'Native checkout — capture deposits and payments at the moment of booking.' },
  { name: 'Stripe', vendor: 'Stripe', category: 'Payments', tagline: 'Card payments and payouts for venues running on Stripe.' },
  { name: 'Clover', vendor: 'Clover', category: 'Payments', tagline: 'Point-of-sale and in-person payments at the counter.' },
  { name: 'Helcim', vendor: 'Helcim', category: 'Payments', tagline: 'Card payments in the booking flow. In beta and enabled on request.', note: 'Beta · Enabled on request' },
  { name: 'Google Calendar', vendor: 'Google Calendar', category: 'Calendar', tagline: 'Google Calendar sync for your bookings.', note: 'Available now' },
  { name: 'Meta Pixel + Conversions API', vendor: 'Meta', category: 'Tracking', tagline: 'Meta Pixel and Conversions API tracking.', note: 'Available now' },
  { name: 'Google Analytics 4', vendor: 'Google', category: 'Tracking', tagline: 'Google Analytics 4 tracking.', note: 'Available now' },
  { name: 'Google Tag Manager', vendor: 'Google', category: 'Tracking', tagline: 'Google Tag Manager support.', note: 'Available now' },
  { name: 'Telnyx', vendor: 'Telnyx', category: 'Messaging & email', tagline: 'Programmable SMS for booking confirmations, reminders, and unlock links.' },
  { name: 'Resend', vendor: 'Resend', category: 'Messaging & email', tagline: 'Transactional email delivery for confirmations and customer messaging.' },
];
