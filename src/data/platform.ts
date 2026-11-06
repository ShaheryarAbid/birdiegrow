// Content for the /platform/ page (src/pages/platform.astro). Markup, classes and decorative icons stay in the page.
// Headings are plain text: the page adds the green periods with gd().

import { SITE } from '../consts';

const HOME_ASSETS = '/assets/home';
const ball = (colour: 'a' | 'b' | 'c' | 'd') => `${HOME_ASSETS}/ball-${colour}.svg`;
const MANAGEMENT_SOFTWARE_HREF = '/golf-simulator-management-software/';

export const PLATFORM = {
  meta: {
    title: 'Multi-Location Platform for Golf Simulator Venues | Birdie',
    description: 'Start with one venue and scale to many. Manage every location with one Birdie login and a location switcher.',
  },
  hero: {
    h1: 'One Platform. One Login. Every Location.',
    lead: 'Start with one venue. Scale to many. Birdie grows with you.',
    cta: { label: 'Book a Demo', href: SITE.demoPath },
  },
  portfolio: {
    heading: 'One login across all your locations',
    sub: 'Switch between your venues with a location switcher, from the same login.',
    title: 'Portfolio overview',
    text: 'Example venues and figures, shown to illustrate the multi-location dashboard. Not real customer data or industry benchmarks.',
    caption: 'Portfolio overview — sample data',
    columns: ['Venue', 'Bookings', 'Occupancy', 'Revenue'],
    venues: [
      ['Downtown', '124', '68%', '$9,320'],
      ['West End', '98', '55%', '$7,140'],
      ['Royal Fairway — Scottsdale', '156', '74%', '$11,880'],
      ['Royal Fairway — Denver', '89', '48%', '$6,450'],
    ],
  },
  growth: {
    heading: "Start with bookings. Expand when you're ready.",
    sub: {
      before: 'Birdie begins as your booking engine — then becomes the',
      link: { label: 'golf simulator management software', href: MANAGEMENT_SOFTWARE_HREF },
      after: 'running your entire business. No bloated stack required.',
    },
    cta: { label: 'Golf simulator management software', href: MANAGEMENT_SOFTWARE_HREF },
    stepsLabel: 'How Birdie grows with you',
    steps: ['Booking System', 'Website', 'Local SEO', 'Automated Campaigns', 'Full Revenue Platform'],
  },
  // Sample booking form. Figma 2049:91819 (mobile 2049:92286). crop = the photo's position inside its frame.
  booking: {
    dateLabel: 'Date: September 2026',
    timeLabel: 'Time',
    bayLabel: 'Bay',
    days: [
      { day: 'WED', date: 9, dots: [ball('a'), ball('a')], state: 'on' },
      { day: 'THU', date: 10, dots: [ball('b'), ball('b'), ball('b')] },
      { day: 'FRI', date: 11, dots: [ball('a'), ball('a')] },
      { day: 'SAT', date: 12, dots: [ball('c')], state: 'dim' },
      { day: 'SUN', date: 13, dots: [ball('c')], state: 'dim' },
      { day: 'MON', date: 14, dots: [ball('d')] },
    ],
    times: [
      { label: '6:00 AM' },
      { label: '7:00 AM', state: 'on' },
      { label: '8:00 AM' },
      { label: '10:30 AM', mobileOnly: true },
    ],
    bays: [
      { name: 'Callaway', price: '$45/hour', img: `${HOME_ASSETS}/bay-callaway.webp`, state: 'on', crop: 'width:127.04%;height:120.69%;left:-9.83%;top:-10.34%' },
      { name: 'Titleist', price: '$45/hour', img: `${HOME_ASSETS}/bay-titleist.webp`, crop: 'width:129.68%;height:114.55%;left:-10.34%;top:-7.28%' },
      { name: 'TaylorMade', price: '$45/hour', img: `${HOME_ASSETS}/bay-taylormade.webp`, state: 'dim', crop: 'width:132.55%;height:117.08%;left:-6.16%;top:-5.62%' },
    ],
  },
  cta: {
    heading: 'Ready to see the full platform?',
    body: 'Free walkthrough. No commitment. We handle all setup.',
    items: [] as string[],
    label: 'Book a Demo',
  },
};
