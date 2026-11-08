// Content for the mobile app feature page: /features/mobile-app/ (src/pages/features/mobile-app.astro).
// NOT CONFIRMED: the mobile app isn't verified as offered, so nothing here should be reused on other pages yet.
// Prices come from Figma and the store badges have no URLs. See the page header for what's needed to go live.

import { SITE } from '../../consts';
import { PRICING } from '../product';

const IMG = '/assets/features/mobile-app';

export const MOBILE_APP = {
  meta: {
    title: 'Mobile App for Golf Simulator Venues | Birdie',
    description:
      'The Birdie mobile app puts your venue on every golfer\'s phone: book bays, join leagues and manage an account, with the same bays, prices and rules as your booking page.',
  },
  hero: {
    crumb: ['Product', 'Mobile app'],
    h1: "Your venue. In every golfer's pocket.",
    lead: 'The Birdie mobile app for iOS and Android. Golfers book bays, join leagues and manage their account — your venue, one tap away.',
    badges: [
      {
        small: 'Download on the',
        label: 'App Store',
        image: '/assets/icons/apple-brand.png',
        imageSide: 'left' as const,
        imageWidth: 20,
        imageHeight: 24,
      },
      {
        small: 'GET IT ON',
        label: 'Google Play',
        image: '/assets/icons/playstore.svg',
        imageSide: 'left' as const,
        imageWidth: 20,
        imageHeight: 24,
      },
    ],
  },
  screens: {
    heading: 'What golfers see.',
    sub: "The same bays, prices and rules you set in Birdie — in an app on your customers' phones. Three things they do most.",
    tabs: [
      {
        label: 'Book a bay',
        slides: [
          {
            src: `${IMG}/booking-bat-session.webp`,
            width: 441,
            height: 780,
            alt: 'Choosing a date, time and bay in the Birdie app',
          },
          {
            src: `${IMG}/add-extras.webp`,
            width: 441,
            height: 780,
            alt: 'Adding extras to a booking in the Birdie app',
          },
          {
            src: `${IMG}/contact-details.webp`,
            width: 441,
            height: 780,
            alt: 'Entering contact details in the Birdie app',
          },
          {
            src: `${IMG}/booking-summary.webp`,
            width: 441,
            height: 780,
            alt: 'Booking summary in the Birdie app',
          },
        ],
      },
      {
        label: 'Join a league',
        slides: [
          { src: `${IMG}/leagues.webp`, alt: 'Browsing available leagues in the Birdie app' },
          { src: `${IMG}/league-details.webp`, alt: "Viewing a league's season, schedule and location in the Birdie app" },
          { src: `${IMG}/team-details.webp`, alt: 'Registering a team for a league in the Birdie app' },
          { src: `${IMG}/team-roaster.webp`, alt: 'Adding players to a team roster in the Birdie app' },
        ],
      },
      {
        label: 'Profile',
        slides: [
          { src: `${IMG}/profile-overview.webp`, alt: 'Profile overview with account credit and upcoming bookings in the Birdie app' },
          { src: `${IMG}/profile-plans.webp`, alt: 'Active membership plans and remaining hours in the Birdie app' },
          { src: `${IMG}/profile-explore.webp`, alt: 'Exploring upcoming events and leagues in the Birdie app' },
          { src: `${IMG}/profile-details.webp`, alt: 'Profile details, account settings and wallet in the Birdie app' },
        ],
      },
    ],
  },
  plans: {
    heading: 'Add the app to your plan.',
    sub: 'Two ways to get it. Add the app to the Booking System you already run, or start on the plan that includes it.',
    buttons: [
      { text: 'Book a demo', href: SITE.demoPath, mode: 'dark' as const },
      {
        text: 'See the booking system',
        href: '/features/bay-booking/',
        mode: 'light' as const,
        hierarchy: 'secondary' as const,
        icon: '/assets/home/arrow-right-dark.svg',
      },
    ],
    // Annual prices are placeholders (monthly x 12): the design only shows monthly prices. Replace them with the real ones.
    tiers: [
      {
        name: 'Booking System + Mobile app',
        tagline: 'Everything you need, plus your app',
        price: { monthly: '$247', annually: '$2,964' },
        dark: true,
        background: `${IMG}/plan-bg.webp`,
        billingTabs: true,
        features: PRICING[0].features,
      },
      {
        name: 'Booking + Website',
        tagline: 'Your booking system with a conversion-ready site',
        price: { monthly: 'From $50', annually: 'From $600' },
        featuresLead: 'Added to your current plan +',
        features: [
          'iOS and Android app for your golfers',
          'Bay booking, leagues and profile in the app',
          'Same bays, prices and rules as your booking page',
        ],
      },
    ],
    benefits: ['No long-term contracts', 'Live in 24 hours', 'We handle all setup'],
  },
  cta: {
    heading: 'Put your venue on their home screen.',
    body: 'Free walkthrough. No commitment. We handle all setup.',
  },
};
