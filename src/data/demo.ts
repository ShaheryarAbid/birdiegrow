// Content for the /demo/ page (src/pages/demo.astro). Form field names, validation and the lead script stay in the page.
// Headings are plain text: the page adds the green period with gd().

import { PROOF } from './proof';
import { SOFTWARE_FAQS } from './softwareFaq';
import { TESTIMONIALS } from './stories';

const SCREENS = '/assets/features/mobile-app';
const STORY_IMAGES = ['story-1', 'story-2', 'story-3'];
const CONTACT_EMAIL = 'luke@birdiegrow.com';

export const DEMO = {
  meta: {
    title: 'Book a Free Demo — Birdie Golf Simulator Software',
    description: 'No pitch. No commitment. Just a live look at the platform built for golf simulator operators. Free walkthrough.',
  },
  contactEmail: CONTACT_EMAIL,
  hero: {
    h1: 'The Booking System Built to Fill Your Bays',
    sub: 'A Booking System that grows with your business.',
    proof: `Trusted by ${PROOF.activeClients}+ Golf Simulators Nationwide`,
  },
  form: {
    heading: 'Book Your Free Walkthrough',
    firstName: { label: 'First Name', placeholder: 'John' },
    businessName: { label: 'Business Name', placeholder: 'Your venue' },
    email: { label: 'Email', placeholder: 'john@example.com' },
    phone: { label: 'Phone', placeholder: '(555)-123-4567', title: 'Enter a 10-digit US phone in the format (000)-000-0000' },
    zip: { label: 'Zip Code', placeholder: '90210', title: 'Enter a 5-digit ZIP code' },
    interests: { label: 'What are you interested in?', options: ['Booking System', 'Paid Advertising', 'Not Sure'] },
    submit: 'Submit',
    error: 'Something went wrong - please try again, or email',
    success: {
      heading: "You're all set.",
      body: "Thanks — we've got your details and will reach out within one business day to confirm your walkthrough. Prefer to grab a time now?",
      link: { text: 'Pick a slot →', href: '/book-demo/' },
    },
  },
  benefits: [
    { icon: 'calendarFilled', title: '27% more weekday bookings', text: 'Average result for venues in their first 60 days on Birdie.' },
    { icon: 'rocketFilled', title: 'Live in 24 hours', text: 'We handle the entire setup. You don’t need a developer or an IT person.' },
    { icon: 'filexFilled', title: 'No long-term contracts', text: 'Month-to-month. If it doesn’t work, you cancel. Simple.' },
  ],
  screens: {
    label: 'Book a bay',
    slides: [
      { src: `${SCREENS}/booking-bat-session.webp`, width: 441, height: 780, alt: 'Choosing a date, time and bay in the Birdie app' },
      { src: `${SCREENS}/add-extras.webp`, width: 441, height: 780, alt: 'Adding extras to a booking in the Birdie app' },
      { src: `${SCREENS}/booking-summary.webp`, width: 441, height: 780, alt: 'Booking summary in the Birdie app' },
      { src: `${SCREENS}/liability-waiver.webp`, width: 441, height: 780, alt: 'Signing liability waiver in the Birdie app' },
    ],
  },
  stories: {
    heading: 'Trusted by venues like yours',
    sub: 'From unattended 24/7 members’ clubs to full pub-and-kitchen golf venues — hear how operators across the country run bookings, memberships, and door access on Birdie.',
    link: { text: 'See all customer stories', href: '/customers/' },
    // Figma shows three stories (featured + two); the YouTube facade loads the real video on click.
    items: TESTIMONIALS.slice(0, 3).map((t, i) => ({ ...t, img: `/assets/customers/${STORY_IMAGES[i]}.webp` })),
  },
  call: {
    heading: 'What Happens on the Call',
    steps: [
      { icon: 'search', title: 'We look at your current setup' },
      { icon: 'play', title: 'We show you the platform live' },
      { icon: 'thumb', title: 'You decide if it’s a fit — zero pressure' },
    ],
    note: 'Still have questions?',
    noteLink: `Email us at ${CONTACT_EMAIL}`,
  },
  faq: {
    heading: 'Frequently asked questions',
    items: SOFTWARE_FAQS,
  },
  cta: {
    heading: 'Ready to see golf simulator software built for your studio?',
    body: 'Free walkthrough · No commitment · Live in 24 hours',
    label: 'Book a demo',
    href: '#demo-form',
  },
};
