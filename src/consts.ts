// Central site config. Edit these once; everything derives from them.
export const SITE = {
  url: 'https://www.birdiegrow.com', // canonical host (matches the live site)
  name: 'Birdie',
  title: 'Birdie — Booking & Revenue for Golf Simulator Venues',
  description:
    'Bay scheduling, memberships, Stripe, Square, Clover and Helcim (beta) payments, and automated confirmations for golf simulator venues. Live in 24 hours.',
  ogImage: '/og-image.jpg',
  demoPath: '/demo/',
  // Venue-owner dashboard (the Birdie app, hosted separately on Lovable).
  // Linked from the header and footer so existing clients can reach their
  // login without knowing the URL. Always link it rel="noopener nofollow":
  // it's an external app login with nothing to crawl.
  appUrl: 'https://app.birdiegrow.com',
};

export const NAV = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Customers', href: '/customers/' },
  { label: 'Resources', href: '/resources/' },
];

// Ad + analytics tracking. IDs match what's live on birdiegrow.com today,
// so campaigns/audiences/conversion history carry over unchanged.
export const ANALYTICS = {
  metaPixelId: '1494525908709398', // Meta (Facebook) Pixel
  ga4Id: 'G-5LZSS06SY5', // Google Analytics 4
  googleAdsId: 'AW-18069103108', // Google Ads
  // Optional: paste the Google Ads *conversion label* for your "Book a Demo" lead
  // action (Google Ads → Goals → Conversions → your action → "Google tag" →
  // send_to looks like AW-18069103108/AbC-dEfG). Leave '' to skip the Ads-specific
  // conversion hit — the GA4 generate_lead + Meta Lead events still fire.
  googleAdsLeadLabel: 'AW-18069103108/lQfDCJ2rvZocEITEgqhD',
  // Reddit Pixel. Create it in Reddit Ads → Events Manager → Conversions, then
  // paste the pixel ID here (looks like 'a2_xxxxxxxxxxxx'). Leave '' and nothing
  // renders — the pixel + PageVisit + the /demo Lead event only fire once set.
  redditPixelId: 'a2_jeu8bv0oqz7y',
};

// Calendly scheduling link used on /book-demo (the live site embeds Calendly there).
// Paste your scheduling URL, e.g. 'https://calendly.com/birdiegrow/15min'.
// If left '', /book-demo falls back to a button linking to the /demo form.
export const CALENDLY = {
  url: 'https://calendly.com/jimmy-birdiegrow/demo-meeting?background_color=ffffff&text_color=1a1a1a&primary_color=1aa24c',
};
