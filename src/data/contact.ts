// Content for the /contact/ page (src/pages/contact.astro). Markup, classes and the copy-button script stay in the page.
// Headings are plain text: the page adds the green period.

import { SITE } from '../consts';

export const CONTACT = {
  meta: {
    title: 'Contact Birdie | Golf Simulator Booking Software',
    description: 'Get in touch with Birdie — book a demo or email us about booking, memberships, and 24/7 door access for your golf simulator venue.',
  },
  hero: {
    h1: "Let's talk about your simulator business",
    lead: "The fastest way to see Birdie is a walkthrough. Prefer email? Reach us directly and we'll get right back to you.",
  },
  demo: {
    heading: 'Book a demo',
    text: 'See the platform live — no commitment, and we handle all setup.',
    cta: { label: 'Book a demo', href: SITE.demoPath },
  },
  email: {
    heading: 'Email',
    text: 'Questions about pricing, switching from another booking tool, or anything else — write to Luke directly.',
    address: 'luke@birdiegrow.com',
  },
  login: {
    heading: 'Already on Birdie?',
    text: 'Log in to manage bays, bookings, memberships, and your revenue dashboard.',
    link: { label: 'Client Login', href: SITE.appUrl },
  },
  resources: {
    heading: 'Find answers on your own',
    sub: 'Guides, calculators, and stories from operators running simulator venues on Birdie.',
    items: [
      ['Guides', '/resources/', 'Operator playbooks'],
      ['Calculators', '/resources/calculators/', 'Free tools to model your numbers'],
      ['Blog', '/blog/', 'Tips to fill more bays'],
      ['Business FAQ', '/resources/golf-simulator-business-faq/', 'Quick answers'],
      ['Customers', '/customers/', 'Real venues, real results'],
      ['Pricing', '/pricing/', 'Plans and what is included'],
    ] as [string, string, string][],
  },
};
