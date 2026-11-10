// Content for the leagues & events feature page: /features/leagues-events/ (src/pages/features/leagues-events.astro).
// Facts match src/data/features.ts.

import { SITE } from "../../consts";
import { PRODUCT_LINKS } from "../featurePages";

const IMG = "/assets/features";
// Package and Lesson have no design yet, so they show a placeholder calendar image.
const PLACEHOLDER = `${IMG}/weekly-booking-calendar-placeholder.svg`;

const faqs: [string, string][] = [
  [
    "Can teams manage their own rosters?",
    "Yes. Leagues include teams and rosters, with team invites and substitutes.",
  ],
  [
    "Does Birdie handle league scoring?",
    "Yes. Leagues include standings and stroke-play scoring, and there is a GSPro online tournament (SGT) integration for leagues.",
  ],
  [
    "Can I hold the same bays every league night?",
    "Yes. League-night bay holds repeat for the whole season, so you set them once and only sell the bays that are left.",
  ],
  [
    "Can members still book during a block?",
    "Optionally. Block time can close bays one-off or repeating, and can still let members, or specific plans, book.",
  ],
  [
    "How do event sign-ups work?",
    "Camps, clinics and tournaments get custom sign-up forms, check-in and reminders.",
  ],
  [
    "Can I sell lessons?",
    "Yes. Instructors and lesson booking come with availability, rates and intake questions, plus lesson packages and member lesson rates.",
  ],
  [
    "Can I take a deposit for a private event?",
    "Yes. Deposits, reserve-with-card and pay-at-venue rules are set per booking type.",
  ],
];

export const LEAGUES_EVENTS = {
  meta: {
    title: "Leagues & Events for Golf Simulator Venues | Birdie",
    description:
      "Run leagues, events and lessons on the same bay calendar as every other booking: teams, rosters, standings, stroke-play scoring, league-night bay holds and event sign-ups.",
  },
  hero: {
    crumb: ["Product", "Leagues & events"],
    h1: "One calendar for everything.",
    lead: "Leagues with teams, rosters and standings. Events with sign-up forms and check-in. Lessons with instructors. All on the same bays and the same calendar as every other booking.",
    primary: { label: "Book a demo", href: SITE.demoPath },
    secondary: { label: "See how it works", href: "#league-planner" },
  },
  shortAnswer: {
    body: "Birdie runs leagues, events and lessons on the same calendar customers book from. Leagues get teams, rosters, weekly billing, standings and stroke-play scoring, with league-night bay holds. Camps, clinics and tournaments get custom sign-up forms, check-in and reminders. Block time closes bays one-off or repeating, and can still let members or specific plans book.",
    chips: [
      ["flagBannerFoldFilled", "League-night bay holds"],
      ["tableFilled", "Standings and stroke-play scoring"],
      ["calendarFilled", "Event sign-up and check-in"],
      ["golfFilled", "Instructors and lesson booking"],
    ] as [string, string][],
    image: {
      src: "/assets/product/leagues-and-events-short-answer.webp",
      mobileSrc: "/assets/product/leagues-and-events-short-answer-mobile.webp",
      alt: "Block the time, collect sign-ups, automate payments, and play and score.",
    },
  },
  // League season planner — Figma 2049:102254 (mobile 2049:102760). Static example, not interactive.
  planner: {
    id: "league-planner",
    heading: "Plan a season in four taps",
    sub: "A league is a repeating block: same bays, same night, every week. Set it once and only sell the bays that are left.",
    nights: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    night: "Tuesday",
    modes: ["Closed to all", "Members can book"],
    mode: "Closed to all",
    bays: 1,
    weeks: 8,
    start: "7:00 PM",
    bayHours: 24,
    baysLeft: 4,
    note: "Example. Block time is set from your Birdie dashboard.",
  },
  // Four formats — Figma 2049:102341 (tab 2: 2049:102483, mobile: 2049:102850)
  formats: {
    id: "formats",
    heading: "Four formats. Zero double-bookings.",
    sub: "Every format sits on the same bay calendar as regular bookings, so a party never lands on top of league night.",
    bg: "/assets/home/product-previews.webp",
    cta: { label: "Book a demo", href: SITE.demoPath },
    tabs: [
      {
        label: "League",
        title: "League",
        text: "Teams, rosters, standings and stroke-play scoring, with team invites and substitutes.",
        facts: [
          ["Bays", "1–3"],
          ["Season", "8 weeks"],
          ["Billing", "Weekly"],
        ] as [string, string][],
        img: `${IMG}/weekly-booking-calendar-league.webp`,
        alt: "Weekly calendar with the Tuesday League holding bays 1 to 3 at 7, 8 and 9 PM",
      },
      {
        label: "Event",
        title: "Event",
        text: "Camps, clinics and tournaments, with custom sign-up forms, check-in and reminders.",
        facts: [
          ["Sign-up", "Custom form"],
          ["Check-in", "On arrival"],
          ["Reminders", "Automatic"],
        ] as [string, string][],
        img: `${IMG}/weekly-booking-calendar-events.webp`,
        alt: "Weekly calendar with an event booked alongside regular bookings",
      },
      {
        label: "Package",
        title: "Package",
        text: "The customer pays once, then picks their own date and time.",
        facts: [
          ["Payment", "Paid Once"],
          ["Date and time", "Customer picks"],
          ["Length", "2 hrs"],
        ] as [string, string][],
        img: `/assets/league-and-analytics/league-package.webp`,
        alt: "",
      },
      {
        label: "Lesson",
        title: "Lesson",
        text: "Instructors and lesson booking, with availability, rates and intake questions.",
        facts: [
          ["Instructor", "Availability & rates"],
          ["Intake", "Questions before booking"],
          ["Packages", "Member lesson rates"],
        ] as [string, string][],
        img: `/assets/league-and-analytics/league-lesson.webp`,
        alt: "",
      },
    ],
  },
  // League-night timeline — Figma 2049:102426 (mobile 2049:102939). Icons are names from src/data/icons.ts.
  timeline: {
    heading: "From an empty Tuesday to a league night.",
    sub: "Most venues run around 40% weekday utilization. A league turns one of those nights into a weekly fixture.",
    textWidth: 300,
    steps: [
      {
        title: "Hold the bays",
        text: "League-night bay holds repeat for the whole season. Set it once.",
        icon: "calendar",
      },
      {
        title: "Build the teams",
        text: "Teams invite players and add substitutes. Weekly billing runs automatically, and a waitlist catches late sign-ups.",
        icon: "users",
      },
      {
        title: "Play and score",
        text: "Stroke-play scoring and standings update every week. GSPro online tournaments (SGT) plug in too.",
        icon: "trophy",
      },
      {
        title: "Same night next week",
        text: "Reminders go out, the bays are already held, and you only sell the bays that are left.",
        icon: "repeat",
      },
    ],
  },
  faq: {
    heading: "Questions owners ask about leagues and events",
    items: faqs,
    open: 1,
  },
  links: {
    heading: "See the rest of Birdie",
    sub: "Each part of the platform has its own page.",
    items: PRODUCT_LINKS.filter(([, h]) => h !== "/features/leagues-events/"),
  },
  cta: {
    heading: "Turn quiet weeknights into league nights.",
    body: "Free walkthrough. We set up your bays, blocks and booking rules during onboarding.",
  },
};
