// Per-competitor content for the /birdie-vs-* comparison pages.
// Rows: [feature, birdie value, competitor value]. "Yes" renders as a green check.
export type CompData = {
  metaTitle?: string;
  metaDescription?: string;
  tagline: string;
  secondaryBtn: string;
  rows: [string, string, string][];
  cardsEyebrow: string;
  cards: [string, string][];
  verdict?: string[];
  ctaHeading: string;
  ctaBody: string;
};

export const COMPARISON_CONTENT: Record<string, CompData> = {
  // ActiveBooker facts below were read from activebooker.com on 2026-09-20:
  // bay pricing ($79/mo incl. 2 bays, +$10/mo per extra bay to 12, then Enterprise),
  // the 30-day free trial, the six activity verticals, the named door-lock partners,
  // built-in digital waivers, and Stripe/Square/Clover/Helcim (beta) payments. Re-check before editing.
  'birdie-vs-activebooker': {
    metaTitle: 'ActiveBooker Alternative for Golf Simulators | Birdie',
    metaDescription:
      'Comparing ActiveBooker and Birdie for simulator venues — flat pricing with no per-bay fee, simulator-only tooling, and the lock brands indoor golf uses.',
    tagline:
      'ActiveBooker runs six activity industries and charges per bay. Birdie does one thing — golf simulator venues — for one flat monthly price, however many bays you add.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Built for', 'Golf simulator venues only', 'Six activity verticals — indoor golf is one of them'],
      ['Pricing model', 'From $197/mo — no per-bay charge', '$79/mo including 2 bays, +$10/mo per additional bay'],
      ['Lower monthly cost at', '12+ bays', 'Under 12 bays'],
      ['Free trial', 'No — free demo, then done-for-you setup', '30-day free trial, self-serve setup'],
      [
        '24/7 door access — named lock brands',
        'Kisi, PDK, UniFi, Avigilon Alta, RemoteLock',
        'Avigilon, Hartmann Controls, Verkada, Acre Security, ButterflyMX, Yale',
      ],
      ['Payments', 'Stripe, Square, Clover, Helcim (beta)', 'Stripe, Square, Clover'],
      ['Automated SMS', 'Native Telnyx', 'Email and/or text reminders'],
      ['Built-in digital waivers', 'Not included', 'Included, unlimited'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Dynamic pricing and reporting'],
      ['Operator resource library', '90+ golf-simulator guides', 'Blog spanning all six verticals'],
      ['Live and taking bookings', 'In 24 hours, done-for-you', 'Self-serve during the trial'],
    ],
    cardsEyebrow: 'Where Birdie pulls ahead',
    cards: [
      [
        'One industry, not six',
        'ActiveBooker serves tours, bowling, escape rooms, pickleball, axe throwing and indoor golf from one platform. That breadth is real, and it means simulator bays share a roadmap with five other business models. Birdie only builds for golf simulator venues — hour banks, bay-level utilisation, weekday fill, member booking windows — because that is the only thing it has to get right.',
      ],
      [
        'Flat pricing that stops mattering as you grow',
        'ActiveBooker is the cheaper monthly line item for most small venues: $79 covers two bays, and each additional bay adds $10. Birdie is one flat rate no matter how many bays you run, so the two cross over around twelve bays — and Birdie stays flat while you keep expanding. If you are at two or three bays and price is the deciding factor, ActiveBooker will be cheaper. If you plan to add bays, model both at the bay count you expect in two years, not the one you have today.',
      ],
      [
        'The lock brands indoor golf actually runs',
        'Both platforms automate unattended access. The difference is which hardware they name: ActiveBooker lists Avigilon, Hartmann Controls, Verkada, Acre Security, ButterflyMX and Yale — a commercial-building and multifamily set. Birdie names Kisi, PDK, UniFi, Avigilon Alta and RemoteLock, which is what small simulator venues tend to already have on the door. Check your own lock brand against both lists before you choose.',
      ],
    ],
    verdict: [
      'ActiveBooker is a capable, well-established booking platform and the closest thing in this comparison set to a genuine all-rounder. It includes unlimited digital waivers, memberships with recurring billing, dynamic pricing, league management and automated review requests, it integrates Stripe, Square and Clover, it runs on no contracts and no setup fees, and it offers a 30-day free trial you can start without talking to anyone. For a two- or three-bay venue watching every line item, it is cheaper than Birdie and easier to try.',
      'The trade-off is focus. Indoor golf is one of six industries ActiveBooker serves, and its plans, feature language and preferred hardware partners reflect that generalist footing. Birdie is built only for simulator venues: flat monthly pricing with no per-bay charge, revenue intelligence that surfaces dead weekday hours and wins back lapsed customers over SMS, door-access integrations chosen for the locks simulator operators actually install, done-for-you setup that has you live in 24 hours, and 90+ guides written for this one business.',
      'The honest way to decide is by bay count and by how much you want to configure yourself. Few bays, tight budget, happy to set it up in a free trial — ActiveBooker deserves a look. Growing bay count, or you would rather hand the setup over and get a system tuned to simulator economics — that is the case for Birdie. Put both against your own bays and your own numbers.',
    ],
    ctaHeading: 'See Birdie on your own bays before you decide',
    ctaBody:
      'Book a free walkthrough — bay booking, memberships, 24/7 door access, and the revenue dashboard, priced flat with no per-bay fee and set up for you. Live in 24 hours.',
  },
  'birdie-vs-booked-bays': {
    metaTitle: 'Booked Bays Alternative for Golf Simulators | Birdie',
    metaDescription: 'Comparing Booked Bays and Birdie for simulator venues — published $197/mo pricing, named integrations, revenue intelligence, and proven in Google & AI search.',
    tagline: 'Booked Bays keeps its pricing behind a sales call. Birdie publishes the full cost, names every integration, and is the platform operators actually find in search.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Pricing published on the website', '$197/mo flat, no per-booking fees', 'Not published — quote required'],
      ['24/7 door access — named lock brands', 'Kisi, PDK, UniFi, Avigilon, RemoteLock', 'Smart-lock (brands not specified)'],
      ['Payments', 'Stripe, Square, Clover and Helcim (beta); no added transaction fees', 'Cards, Apple Pay, gift cards'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Standard booking & revenue reports'],
      ['Automated re-engagement SMS', 'Native Telnyx', 'Text & email reminders'],
      ['Live and taking bookings', 'In 24 hours, done-for-you', 'Within days, done-for-you'],
      ['Cited in AI answers (ChatGPT, Copilot, Perplexity, AI Overviews)', 'Yes', 'Not yet'],
      ['Google rankings + operator resource library', '80+ guides, ranks nationwide', 'Minimal — new site'],
    ],
    cardsEyebrow: 'Where Birdie pulls ahead',
    cards: [
      ['Pricing you can see before you talk to sales', 'Birdie publishes one flat rate — $197/month, no per-booking fees, no per-bay charges, no long-term contract. Booked Bays keeps its pricing behind a “contact us,” so you can’t compare the real cost until you’re already in a sales conversation.'],
      ['Revenue, not just bookings', 'Both platforms take bookings and show reports. Birdie adds a revenue-intelligence layer on top: it surfaces your dead weekday hours, flags customers who’ve lapsed, and wins them back automatically over SMS — the part that actually recovers lost bay revenue.'],
      ['Proven where operators look', 'Ask ChatGPT or Google for simulator booking software and Birdie shows up — cited across ChatGPT, Copilot, Perplexity, and Google AI Overviews, and backed by 80+ operator guides. That depth is how you know the platform will still be here, and improving, next year.'],
    ],
    verdict: [
      'Booked Bays is a newer entrant in the same category and markets a broad feature list — memberships, leagues, lessons, gift cards, and smart-lock access. But its pricing isn’t published anywhere on the site, its door-access and payment integrations aren’t named, and it has effectively no presence yet in Google or AI search with only a starter blog — so it’s hard to compare the real cost or judge the track record before a sales call.',
      'Birdie competes on transparency and proof. One flat $197/month plan published upfront, named integrations — Stripe, Square, Clover and Helcim (beta) payments, Telnyx SMS, and five smart-lock brands from Kisi to RemoteLock — a revenue-intelligence dashboard that turns dead hours and lapsed customers back into bookings, and done-for-you setup that has you live in 24 hours. It’s also the platform simulator operators actually find, ranked across Google and cited in AI answers, backed by 80+ operator resources.',
      'If Booked Bays is on your shortlist, put the two side by side on your own bays and pricing. Birdie will show you the full cost, the full feature set, and the revenue tools in a single walkthrough — no quote request required.',
    ],
    ctaHeading: 'See how Birdie compares on your own bays',
    ctaBody: 'Book a free walkthrough — bay booking, memberships, 24/7 door access, and the revenue dashboard, with pricing shown upfront and setup handled for you. Live in 24 hours.',
  },

  'birdie-vs-avus': {
    metaTitle: 'Avus Systems Alternative for Golf Simulators | Birdie',
    metaDescription: 'Comparing Avus Systems and Birdie for simulator venues — what each plan really costs per bay, door access that is live today, and who each one suits.',
    tagline: 'Avus is a pre-launch platform bundling SGT leagues and GSPro into one bill. Birdie is live today on 180+ venues, at one flat price with no per-bay or transaction fees.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Available today', 'Live — 180+ active venues', 'Pre-launch — “Get Early Access”, no launch date published'],
      ['Headline price', '$197/mo flat, every bay included', 'Flex $99/mo · Unlimited $399/mo · Enterprise $399 + $99/location'],
      ['Transaction fee', 'None', '3% on the $99 Flex plan (venue may pass it to customers)'],
      ['Per-bay fees', 'None', 'GSPro integration $25/mo per bay — billed on every bay at the venue'],
      ['24/7 physical door access', 'Live — Kisi, PDK, UniFi Access, Avigilon Alta, RemoteLock', '“Computer auto lock / unlock”; Door Access Control listed under Coming soon'],
      ['Payment processing', 'Stripe, Square, Clover and Helcim (beta)', 'Stripe'],
      ['League & event management', 'Recurring league bookings, upfront payment, automated reminders, event packages', 'Recurring league bookings via SGT'],
      ['Competitive tour infrastructure (live scoring, handicaps, national leaderboard)', 'Not included — Birdie runs the bookings and the revenue', 'Included via SGT Premium'],
      ['Player-side fees', 'None', '$5 per player per league per month'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Business analytics and reporting'],
      ['Cited in AI answers (ChatGPT, Copilot, Perplexity, Gemini)', 'Yes', 'Not yet — zero citations on every engine'],
      ['Operator resource library', '80+ guides, ranks nationwide', 'No blog or resource library'],
    ],
    cardsEyebrow: 'How the two actually compare',
    cards: [
      ['Run the real monthly number, not the headline one', 'Both platforms publish pricing, which is refreshing — but the sticker price and the invoice are different things. Take a four-bay venue open 12 hours a day at $45 an hour, running 50% utilisation: that is $32,400 a month in bookings. On Avus Flex, the 3% transaction fee is $972 a month, plus $99 for the plan and $25 per bay for GSPro — about $1,171 a month. Avus Unlimited avoids the transaction fee at $399, plus the same $100 of per-bay GSPro, so roughly $499. Birdie is $197 flat, every bay included, no transaction fee and no per-bay charge. Avus notes the 3% can be passed to your customers, which is true — it just moves the cost to the person booking.'],
      ['Door access you can switch on this week', 'This is the clearest difference, and it matters most if you want unstaffed hours. Birdie runs live, certified integrations with five named lock brands — Kisi, PDK, UniFi Access, Avigilon Alta and RemoteLock — with time-gated SMS unlock links tied to each booking. Avus lists “computer auto lock / unlock” among its included features, which keeps the simulator screen dark until the session starts, and puts “Door Access Control” in its own Coming soon list. No lock brand is named anywhere on the Avus site. Locking the PC is not the same as unlocking the front door at 11pm with nobody on site.'],
      ['Leagues: both run them, but not the same way', 'Both platforms run leagues. Birdie handles them as a booking and revenue problem — recurring weekly league bookings, paid upfront, with automated reminders and event packages alongside memberships. Venues like Fairways Pub Grub &amp; Indoor Golf run their leagues, events and memberships on Birdie today. What Avus adds through SGT Premium is the competitive layer on top: live scoring, handicap management, player profiles, season standings and a national leaderboard across every SGT venue. If your league nights are a social weekly booking, Birdie already covers it. If you want your players ranked on a national tour, that is the piece Avus bundles and Birdie does not. Two things to pin down in writing first: the Avus simulators page says GSPro access is included in the subscription with “no separate subscriptions”, while its pricing page lists GSPro as a $25-per-bay-per-month optional add-on — those cannot both be right. And its own FAQ on migrating from existing simulator software currently reads “we are finalising this answer with our team”.'],
    ],
    verdict: [
      'Avus Systems is an early-stage platform from three founders, built around a genuinely interesting idea: bundle the gameplay (GSPro), the competition (SGT tours and national leaderboards), and the business layer (booking, payments, access) into a single monthly bill. For a venue that wants its players ranked on a national tour, that is a real proposition — the SGT competitive layer is the one thing here Birdie does not offer.',
      'The caveats are the ones you would expect of any pre-launch product. Avus is not generally available — every call to action on the site is “Get Early Access”, and its own FAQ says the launch timeline is still being finalised. Its Privacy, Terms and Security links are empty placeholders. Door access, which is the feature that makes unstaffed hours possible, appears in its Coming soon list while the shipping feature is computer lock/unlock. Its answer on migrating from your current booking software has not been written yet. And it has no organic search presence and zero citations across ChatGPT, Copilot, Perplexity and Gemini, so there is no independent operator track record to check.',
      'Birdie is the opposite trade. It is live on 180+ venues today, at one published flat rate of $197 a month with no transaction fee, no per-bay charge and no contract. Door access is certified and running on five named lock brands. Payments settle through Stripe, Square, Clover and Helcim (beta). On top of bookings it adds a revenue layer — surfacing dead weekday hours and winning back lapsed customers over SMS — and it is backed by 80+ operator guides and citations across every major AI assistant. Leagues, events and memberships all run on it today at venues like Fairways Pub Grub &amp; Indoor Golf; what it does not do is rank those players on a national tour.',
      'So the honest split: if national-tour play and live scoring are the centre of your business and you are comfortable waiting for a launch, Avus is worth a conversation. If you want unstaffed bays working tonight, a bill that does not scale with bookings or bay count, and a platform with a track record you can verify, that is Birdie. Price both against your own bay count and monthly booking volume before deciding — the 3% and the per-bay GSPro line are where the gap opens up.',
    ],
    ctaHeading: 'See Birdie running on your own bays',
    ctaBody: 'Book a free walkthrough — bay booking, hour-bank memberships, 24/7 door access on your choice of five lock brands, and the revenue dashboard. Flat $197/month, no transaction or per-bay fees, live in 24 hours.',
  },

  'birdie-vs-golf918': {
    metaTitle: 'Golf 918 Alternative for Simulator Venues | Birdie',
    metaDescription: 'Comparing Golf 918 and Birdie for your golf simulator venue — memberships, 24/7 door access, revenue intelligence, and flat $197/mo pricing, live in 24 hours.',
    tagline: 'Per-bay fees, stacked tiers, and invisible in search. Here’s why simulator operators pick Birdie over Golf 918.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Bay-native scheduling (not a golf-course tee sheet)', 'Yes', 'Tee-sheet based'],
      ['Hour-bank memberships', 'Yes', 'Basic time credits'],
      ['24/7 door access (choice of lock brands)', 'Kisi, PDK, UniFi, Avigilon, RemoteLock', 'RemoteLock only'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Loyalty points only'],
      ['Flat pricing, no per-bay fees', '$197 flat', '$150–$500 + $25/bay'],
      ['Live in 24 hours, done-for-you setup', 'Yes', 'Onboarding call; config from $250'],
      ['Proven in Google & AI search', 'Yes', 'Not yet'],
    ],
    cardsEyebrow: 'Where Birdie fits best',
    cards: [
      ['Revenue, not just bookings', 'Golf 918 stops at taking bookings and handing out loyalty points. Birdie shows you which weekday hours are dead, which customers have lapsed, and what winning them back is worth — the revenue layer Golf 918 simply doesn’t have.'],
      ['Unattended by design', 'Birdie was built around 24/7 self-serve operation — door access for Kisi, PDK, UniFi, Avigilon Alta, or RemoteLock, time-gated SMS unlock links, and hour-bank memberships so bays earn while you sleep, with no staff on the floor. Golf 918 connects to RemoteLock alone.'],
      ['Live in 24 hours, done-for-you', 'Birdie configures your bays, pricing, and memberships for you and goes live in a day — with no 30-day trial you have to set up yourself. A one-time onboarding fee covers the setup.'],
    ],
    verdict: [
      'Golf 918 is a newer, golf-course-style platform retrofitted for simulator facilities, and the costs stack up fast: tiers run from $150 to $500 a month, every additional bay adds $25, and custom onboarding starts at another $250 before you even go live. Its “revenue” tooling is a basic loyalty-points program — not the weekday-utilization tracking and lapsed-customer win-back that actually recover lost bay revenue. And it has effectively no presence in Google or AI search, so the operators looking for a solution never find it.',
      'Birdie is purpose-built for how simulator venues actually make money: bay-native scheduling, hour-bank memberships, automated texts and emails, 24/7 unattended access, and a revenue-intelligence dashboard that surfaces every dead hour and lapsed customer — all on one flat $197/month plan, with no per-bay fees, configured for you and live in 24 hours. It’s also the platform operators actually find, in both search and AI answers.',
    ],
    ctaHeading: 'See how Birdie compares for your venue',
    ctaBody: 'Book a free walkthrough — we’ll show you bay booking, memberships, 24/7 access, and the revenue dashboard, then handle setup so you’re live in 24 hours.',
  },

  'birdie-vs-butter': {
    metaTitle: 'Butter Software Alternative for Golf Simulators | Birdie',
    metaDescription: 'Comparing Butter and Birdie for your golf simulator venue — 24/7 door access, text and email automation, revenue intelligence, and flat $197/mo pricing.',
    tagline: 'Butter books your bays. Birdie books them, fills them, and grows the revenue.',
    secondaryBtn: 'See Birdie Pricing',
    // Competitor column verified against buttersoftware.com on 2026-09-10.
    // Every claim here must be checkable on their live site — an earlier version
    // of this page had Butter's pricing at "$199/$249", called their setup
    // "self-serve signup", and said door access and analytics were "not
    // advertised", all of which their own site contradicts. Re-verify before
    // editing; a false claim about a named rival discredits the whole page.
    rows: [
      ['Purpose-built for simulator venues', 'Yes', 'Yes — indoor golf facilities'],
      ['Hour-bank memberships', 'Yes', 'Memberships, passes & usage limits'],
      ['24/7 unattended door access', 'Kisi, PDK, UniFi, Avigilon, RemoteLock — all named', 'Access control integrations (brands not named)'],
      ['Automated text and email confirmations, reminders and receipts', 'Native SMS on every booking', 'Automatic confirmations (channel not specified)'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Advanced analytics (Pro tier)'],
      ['Published entry price', '$197/mo flat', '$247/mo Standard · $347/mo Pro'],
      ['Setup & migration fees', 'One-time onboarding fee, done-for-you', '$499 onboarding · $499 migration'],
      ['Feature add-on fees', 'None', 'White-label app, upsell automation, PC integration — +$49/mo each'],
      ['Operator resource library', '80+ guides', 'None'],
      ['Cited in AI answers', 'ChatGPT, Copilot, Perplexity, Gemini, AI Overviews', 'None on any engine'],
    ],
    cardsEyebrow: 'Where Birdie goes further',
    cards: [
      ['The real monthly cost', 'Birdie is $197/month flat with no per-feature add-ons, plus a one-time onboarding fee quoted on your walkthrough. Butter starts at $247/month billed annually and charges $499 to onboard, $499 to migrate your data, and $49/month each for its white-label app, upsell automation, and PC integration. Priced side by side on the features most venues want, the gap widens rather than narrows.'],
      ['Built to grow revenue', 'Butter covers bookings, memberships, passes, and access control well. Birdie adds the layer past that — a dashboard that surfaces your dead weekday hours, flags customers who have lapsed, and wins them back automatically over SMS. That is the difference between a system that records bookings and one that creates them.'],
      ['Open 24/7, unattended', 'Birdie generates a time-gated SMS unlock link on every booking and integrates with Kisi, PDK, UniFi, Avigilon Alta, and RemoteLock locks, so customers let themselves in and off-peak hours become revenue — no staff required.'],
      ['Proven, not just launched', 'Birdie brings 80+ pages of operator resources, real customer stories, and citations across ChatGPT and AI search — the depth that tells you the platform will still be here next year.'],
    ],
    verdict: [
      'Butter is a genuine simulator-industry product, built by an operator who ran an indoor golf facility for three years, and it covers bookings, memberships, passes, payments, and access control competently. Where it costs you is the pricing structure: $247 a month to start (billed annually) against Birdie’s $197, plus $499 to onboard, $499 to migrate, and $49 a month for each of the white-label app, upsell automation, and PC integration. The features most venues actually want sit behind those add-ons.',
      'Birdie goes further where simulator revenue actually comes from: hour-bank memberships, 24/7 door access across five named lock brands, automated SMS reminders and lapsed-customer win-backs, and a revenue-intelligence dashboard that shows which weekday hours are empty and what filling them is worth — on one flat $197/month plan, configured for you and live in 24 hours.',
      'The other difference is reach. Birdie is backed by 80+ operator guides and is cited across ChatGPT, Copilot, Perplexity, Gemini, and Google AI Overviews. Butter has no blog, no operator resources, and no citations on any AI engine — so when a prospective member or operator asks an AI assistant which platform to use, Butter isn’t in the answer.',
    ],
    ctaHeading: 'See how Birdie compares for your venue',
    ctaBody: 'Book a free walkthrough — we’ll show you bay booking, memberships, 24/7 access, and the revenue dashboard, then handle setup so you’re live in 24 hours.',
  },

  // Sourced from playbypoint.com/pricing on 2026-09-15. All competitor values below are
  // taken verbatim from their own published pricing page — re-verify before editing, and
  // do not add a claim that is not on their site.
  'birdie-vs-playbypoint': {
    metaTitle: 'Playbypoint Alternative for Golf Simulators | Birdie',
    metaDescription: 'Playbypoint is multi-sport club software sold on annual contracts. Birdie is built for golf simulator venues — $197/mo flat, month-to-month, no card markup.',
    tagline: 'Playbypoint runs clubs of every sport. Birdie does one thing: golf simulator venues.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Entry price', '$197/mo flat', '$199/mo (annual contract)'],
      ['Contract', 'Month-to-month, cancel anytime', 'Published pricing is based on an annual contract'],
      ['Top tier', 'One plan — every feature included', '$599/mo Premium'],
      ['Card processing markup', 'None — native payments at your own processor rate', '2.9% + $0.30, or 2.7% + $0.15 on higher tiers'],
      ['Built specifically for simulator bays', 'Yes', 'No — clubs across padel, tennis and other sports'],
      ['Hour-bank memberships', 'Yes', 'Club Account System (Advanced tier and above)'],
      ['24/7 smart-lock door access', 'Kisi, PDK, UniFi Access, Avigilon Alta, RemoteLock', 'Kiosk / smart locks'],
      ['API / webhooks', 'Included', 'Data Access Plan from $99/mo extra'],
      ['Live and taking bookings', 'In about 24 hours, done-for-you', 'Guided onboarding; concierge onboarding on higher tiers'],
    ],
    cardsEyebrow: 'Where the two genuinely differ',
    cards: [
      ['Specialist vs generalist', 'Playbypoint is a multi-sport club platform — its own customer stories feature padel courts and racquet clubs. Birdie only serves golf simulator venues, so bay scheduling, hour banks and door access are the product rather than a configuration of it.'],
      ['Flat fee, and no cut of your card volume', "Birdie is $197/mo flat with payments running natively through your own processor (Stripe, Square, Clover; Helcim in beta) at your own processing rate. Playbypoint publishes card fees of 2.9% + $0.30, falling to 2.7% + $0.15 on higher tiers. On meaningful volume that spread can exceed the software cost itself."],
      ['Month-to-month, not annual', 'Playbypoint’s published prices are based on an annual contract. Birdie is month-to-month with no long-term commitment, which matters most in year one when your utilisation assumptions are still unproven.'],
    ],
    verdict: [
      'Birdie is built for one business: fixed-location golf simulator venues in North America. Bay-by-bay scheduling, hour-bank memberships, automated texts and emails, reservation-linked door access across five named lock brands, and an owner revenue dashboard that surfaces dead weekday hours — on one flat $197/mo plan with no per-booking fee, no card markup and no contract.',
      'Playbypoint is a club-management platform serving racquet and multi-sport facilities as well as golf, sold in three tiers with merchandise, a club account system and a white-label app on the higher plans. If you run a multi-sport club, that breadth is the point. If every bay you own is a golf simulator, you are paying for breadth you will not use — and, on the published rates, a percentage of every card transaction on top.',
    ],
    ctaHeading: 'Run simulator bays, not a multi-sport club?',
    ctaBody: 'Book a free walkthrough and see how Birdie handles bay booking, hour-bank memberships, and 24/7 door access on one flat monthly fee.',
  },

  // Sourced from whoosh.io on 2026-09-15 (homepage + solutions nav; they publish no pricing
  // page — "Book a Demo" only). Do not add a price or a claim that is not on their site.
  'birdie-vs-whoosh': {
    metaTitle: 'Whoosh Alternative for Golf Simulator Venues | Birdie',
    metaDescription: 'Whoosh is club operations software for private golf clubs, racquets and activities. Birdie is built only for simulator venues — $197/mo flat, published pricing.',
    tagline: 'Whoosh makes staffed clubs run better. Birdie lets simulator bays run without staff.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Published pricing', '$197/mo flat, on the website', 'Not published — book a demo'],
      ['Primary market', 'Golf simulator venues', 'Private and public green-grass golf clubs, racquets, activities'],
      ['Simulators in the product', 'The entire product', 'One of several solution categories ("Alt. Golf and Simulators")'],
      ['Operating model it assumes', 'Self-serve booking, optional unstaffed hours', 'Staff on the floor, tablet in hand'],
      ['24/7 smart-lock door access', 'Kisi, PDK, UniFi Access, Avigilon Alta, RemoteLock', 'Not a published capability'],
      ['Hour-bank memberships', 'Yes', 'Member rosters and club membership management'],
      ['Contract', 'Month-to-month', 'Not published'],
      ['Live and taking bookings', 'In about 24 hours, done-for-you', 'Not published'],
    ],
    cardsEyebrow: 'Two different philosophies',
    cards: [
      ['Better staff vs fewer staff', 'Whoosh is explicit that it untethers staff from the counter and saves 20+ hours of staff time a week — it is built to make a staffed operation better. Birdie is built so the hours nobody is on site can still sell, through self-serve booking and reservation-linked door access.'],
      ['Club software vs venue software', 'Whoosh serves private and public green-grass clubs, racquet facilities and activity management, with simulators as one category alongside them. If your whole business is bays, most of that surface area is not for you.'],
      ['You can see what Birdie costs', 'Birdie publishes $197/mo flat on the website, month-to-month. Whoosh does not publish pricing, so a comparison starts with a sales call.'],
    ],
    verdict: [
      'Birdie is built for one model: a fixed-location golf simulator venue selling bay time. Bay-by-bay scheduling, hour-bank memberships, automated texts and emails, reservation-linked door access across five named lock brands, and a revenue dashboard aimed at weekday utilisation — flat fee, month-to-month, live in about 24 hours.',
      'Whoosh is club-operations software for green-grass golf clubs, racquet facilities and activity management, and its published customer list is largely established private clubs. If members expect staffed hospitality and simulators are one amenity among many, it is aimed at you. If every square foot you rent contains a simulator bay, you are buying a club platform to use one slice of it — and you will need a sales call to find out what that costs.',
    ],
    ctaHeading: 'Running bays, not a country club?',
    ctaBody: 'Book a free walkthrough and see how Birdie handles bay booking, memberships, and 24/7 access on one flat monthly fee.',
  },

  // Sourced from proagenda.com/pricing on 2026-09-15. Plan prices, per-agenda add-on costs and
  // the plan/segment guidance are taken verbatim from that page. Re-verify before editing.
  'birdie-vs-proagenda': {
    metaTitle: 'ProAgenda Alternative for Simulator Venues | Birdie',
    metaDescription: 'ProAgenda is lesson-booking software for golf pros and academies, priced per agenda. Birdie is built for simulator venues — flat $197/mo, any bay count.',
    tagline: 'ProAgenda books lessons. Birdie books bays — and the price does not climb with each one.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Built for', 'Simulator venues selling bay time', 'Golf professionals and coaching academies'],
      ['Entry price', '$197/mo flat', '$13/mo Base · $54/mo Plus · $99/mo Premium'],
      ['Price as you add bays', 'Flat — bay count does not change the price', 'Each bookable simulator needs its own agenda, from $13–$24/mo each'],
      ['Simulator booking', 'The entire product', 'Bookable indoor studios and simulators, on the Premium feature set'],
      ['Hour-bank memberships', 'Yes', 'Memberships and peak rates; packages and vouchers'],
      ['24/7 smart-lock door access', 'Kisi, PDK, UniFi Access, Avigilon Alta, RemoteLock', 'Not a published capability'],
      ['Free trial', 'Free walkthrough, white-glove setup', 'Yes — one full month, no credit card'],
      ['Contract', 'Month-to-month', 'Month-to-month or annual (annual saves 15%)'],
    ],
    cardsEyebrow: 'Where the models diverge',
    cards: [
      ['Per-agenda vs flat fee', 'ProAgenda prices on the number of agendas you need, and its own guidance says bookable simulators each require one. A venue therefore pays more as it adds bays. Birdie is $197/mo whether you run two bays or twelve.'],
      ['Lessons vs bay time', "ProAgenda's plan guidance is written around client counts and how many golf professionals an academy employs. That is a coaching business. A simulator venue's economics are hourly bay utilisation, memberships and weekday demand."],
      ['Unstaffed hours', 'Birdie ties door access to the reservation across five named smart-lock brands, so 6am and 11pm are sellable inventory. ProAgenda does not publish a door-access capability.'],
    ],
    verdict: [
      'Birdie is built for the venue business model — hourly bay rental, hour-bank memberships, weekday utilisation, and unstaffed operation — on a flat $197/mo that does not move when you add a bay.',
      'ProAgenda targets individual golf professionals and teaching academies. Entry pricing starts at $13/mo, below Birdie, and there is a one-month free trial with no credit card required. If you are a coach or an academy that also has a studio to book, it is a reasonable fit. If your revenue is bay hours rather than lesson hours, you would be adapting a lesson-scheduling tool to a business it was not designed around — and paying per agenda for every bay to do it.',
    ],
    ctaHeading: 'Selling bay hours, not lesson hours?',
    ctaBody: 'Book a free walkthrough and see how Birdie handles bay booking, memberships, and 24/7 access on one flat monthly fee.',
  },

  'birdie-vs-golf-oclock': {
    metaTitle: "Golf O'Clock Alternative for Simulator Venues | Birdie",
    metaDescription: "Looking for a Golf O'Clock alternative? Birdie is built for US & Canada simulator venues — bay booking, memberships, revenue tracking, and 24/7 door access.",
    tagline: 'Both handle booking. Only one handles your whole business.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for simulator bays', 'Yes', 'No'],
      ['Membership management', 'Yes', 'Basic'],
      ['POS / retail sales', 'Yes', 'No'],
      ['Utilization analytics', 'Yes', 'No'],
      ['Revenue reporting', 'Yes', 'Limited'],
      ['White-label booking widget', 'Yes', 'Partial'],
      ['Contract required', 'No', 'Check terms'],
      ['US-based support', 'Yes', 'Varies'],
    ],
    cardsEyebrow: 'Where Birdie goes further',
    cards: [
      ['Beyond the calendar', "Golf O'Clock books bays. Birdie books bays, tracks revenue per bay, manages memberships, and shows you where you're leaving money on the table."],
      ['Know your numbers', "Birdie's utilization dashboard shows you which hours are dead, which bays underperform, and what a 10% booking improvement is worth in dollars."],
      ['One platform, not a stack', 'No separate POS. No separate membership tool. No spreadsheets. Everything in one place.'],
    ],
    verdict: [
      'Birdie is built specifically for golf simulator businesses in North America. Bay-by-bay scheduling, hour-bank memberships, automated Telnyx SMS, an owner revenue dashboard, and white-glove 24-hour setup — all on flat-fee pricing with no long-term contract. The roadmap, the support, and the product decisions are all driven by simulator operators, not generic facility owners.',
      'Golf O’Clock is a European-built booking platform that competes in the same space but on a different continent, with a different support model, different payment integrations, and a feature set tuned for European simulator venues. For US and Canadian operators, that gap shows up in everything from billing currency and SMS deliverability to onboarding response time.',
    ],
    ctaHeading: 'Ready to see what Birdie can do for your simulator?',
    ctaBody: 'Book a free walkthrough and see how Birdie handles your booking, memberships, and revenue tracking.',
  },

  'birdie-vs-foreup': {
    metaTitle: 'ForeUp Alternative for Golf Simulators | Birdie',
    metaDescription: 'ForeUp is built for golf courses. Birdie is built for simulator bays — bay booking, memberships, revenue tracking, and 24/7 door access.',
    tagline: "ForeUp is built for golf courses. Birdie is built for simulator bays. Here's the difference.",
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Built for golf simulators', 'Yes', 'No (course-focused)'],
      ['Bay-by-bay booking', 'Yes', 'Limited'],
      ['Membership management', 'Yes', 'No'],
      ['POS system', 'Yes', 'No'],
      ['Pricing transparency', 'Flat monthly', 'Quote required'],
      ['Setup time', 'Under 24 hours', 'Weeks'],
      ['Contract required', 'No', 'Often yes'],
      ['Built-in utilization analytics', 'Yes', 'No'],
    ],
    cardsEyebrow: 'Why simulator owners switch to Birdie',
    cards: [
      ["ForeUp wasn't built for bays", "Tee time logic doesn't translate to 1-hour bay blocks. You end up fighting the software instead of running your business."],
      ['Pricing that scales with you', "ForeUp requires a sales call for every quote. Birdie's pricing is public, predictable, and month-to-month."],
      ['Up and running in a day', 'No implementation team, no 6-week onboarding. Birdie is configured and taking bookings within 24 hours.'],
    ],
    verdict: [
      'Birdie is built specifically for golf simulator venues — bay-by-bay scheduling, hour-bank memberships, automated texts and emails, and an owner dashboard that surfaces utilization and revenue per bay. Setup is white-glove and takes under 24 hours, pricing is a transparent flat monthly rate, and there is no long-term contract.',
      'ForeUp is tee-sheet and pro-shop software built for outdoor golf courses. Its booking model is designed around tee times and green fees, not hourly simulator bays, so simulator operators end up bending the software to fit — and paying enterprise-style pricing that requires a sales call for a quote.',
      'If you run a simulator venue, ForeUp is course software adapted to a use case it was never designed for. Book a walkthrough and judge Birdie against your actual bay setup. No contracts, no pressure.',
    ],
    ctaHeading: 'See Birdie in action — no sales call required',
    ctaBody: 'Most demo requests get a response within a few hours. See exactly how Birdie handles your booking flow.',
  },

  'birdie-vs-lightspeed-golf': {
    metaTitle: 'Lightspeed Golf Alternative for Simulators | Birdie',
    metaDescription: 'Lightspeed Golf is enterprise course software. Birdie is built for 1–10 bay simulator venues — flat pricing, live in 24 hours, no contract.',
    tagline: 'Lightspeed is an enterprise system. Birdie is built for 1–10 bay operations that need to move fast.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for simulator bays', 'Yes', 'Course/retail POS'],
      ['Setup time', '24 hours', 'Weeks/months'],
      ['Contract required', 'No', 'Yes, annual'],
      ['Monthly cost', 'Transparent flat rate', 'Custom enterprise pricing'],
      ['Bay utilization analytics', 'Yes', 'Not natively'],
      ['Membership management', 'Yes', 'No'],
      ['Ease of use', 'Built for operators', 'Complex, training required'],
      ['Customer support', 'Direct', 'Tiered enterprise support'],
    ],
    cardsEyebrow: 'The honest comparison',
    cards: [
      ['Enterprise software for a 4-bay business?', "Lightspeed is designed for large golf courses and retail chains. If you're running a simulator studio, you're paying for 90% of features you'll never use."],
      ['Up in 24 hours, not 24 days', 'No implementation specialists. No onboarding timeline. Birdie is configured and taking bookings the same day.'],
      ['Pricing you can actually plan around', 'Lightspeed requires a sales call and an annual contract. Birdie is month-to-month with transparent pricing on the website.'],
    ],
    verdict: [
      'Birdie is built specifically for golf simulator businesses. Bay-by-bay scheduling, real-time availability, hour-bank memberships, automated text and email confirmations, reminders and receipts, and an owner dashboard that shows utilization and revenue per bay — all in one platform with flat-fee pricing and a 24-hour setup. Every feature is tuned for a 1-to-12 bay indoor venue.',
      'Lightspeed Golf is enterprise software built for full-size golf courses — tee sheets, green fees, retail POS, F&B, pro shop inventory, and clubhouse operations. It carries enterprise pricing, requires staff training, and treats simulator bays (when it handles them at all) as an afterthought to the course operation.',
      'If you operate a simulator venue, Lightspeed is overbuilt and mispriced for what you need. Book a walkthrough and judge it against your actual operation. No contracts, no pressure.',
    ],
    ctaHeading: 'See it yourself before you commit to anything',
    ctaBody: 'Free walkthrough. No contracts, no pressure.',
  },

  'birdie-vs-chronogolf': {
    metaTitle: 'Chronogolf Alternative for Golf Simulators | Birdie',
    metaDescription: 'Chronogolf became Lightspeed Golf — course software, not simulator tooling. Birdie is the simulator-built alternative operators actually want.',
    tagline: "Chronogolf was a golf course platform acquired by Lightspeed in 2019 — now Lightspeed Golf, enterprise software built for courses, not simulators. Birdie is what simulator operators were actually looking for.",
    secondaryBtn: 'See Pricing',
    rows: [
      ['What it is', 'Simulator management platform', 'Discontinued — now Lightspeed Golf'],
      ['Target customer', 'Simulator business owners', 'Full-size golf courses'],
      ['Still available?', 'Yes', 'No'],
      ['Bay-by-bay scheduling', 'Yes', 'No'],
      ['Membership tools', 'Yes', 'No'],
      ['Revenue analytics', 'Yes', 'No'],
      ['Pricing', 'Month-to-month', 'Enterprise pricing only'],
    ],
    cardsEyebrow: 'What Birdie offers that Chronogolf never did',
    cards: [
      ['Built for bays', 'Bay-by-bay scheduling with real-time availability, plus membership management and recurring billing.'],
      ['Know your numbers', 'Utilization analytics show which hours and bays underperform — revenue dashboards, not just a booking calendar.'],
      ['Sell more than bay time', 'Point of sale for retail, food, and add-ons, plus an embeddable booking widget for your own website.'],
    ],
    verdict: [
      'Birdie is built specifically for golf simulator businesses — small-to-mid-sized indoor venues with anywhere from one to twelve bays that need bay-by-bay scheduling, hour-bank memberships, automated texts and emails, and an owner dashboard that surfaces utilization and revenue per bay.',
      'Chronogolf was built for full-size outdoor golf courses — tee sheets, green fees, retail POS, and pro shop inventory. After the 2019 Lightspeed acquisition, it was rolled into Lightspeed Golf, enterprise software with enterprise pricing aimed at course operators. Neither version was designed for a 4-bay simulator studio.',
      'If you searched for Chronogolf because you needed simulator-specific tooling, the honest answer is that you were never the target customer. Birdie is. Book a live demo and judge it against your real bay setup, pricing, and customer base.',
    ],
    ctaHeading: "If you're running a simulator business, Birdie is what you need",
    ctaBody: 'See the platform live. No commitment required.',
  },

  'birdie-vs-birrdi': {
    metaTitle: "Birdie vs Birrdi: What's the Difference? | Birdie",
    metaDescription: "Birdie (birdiegrow.com) and Birrdi are separate, unaffiliated products. Here's what each does and which fits a golf simulator venue.",
    tagline: 'Birdie (birdiegrow.com) and Birrdi (birrdigolf.com) are two separate, unaffiliated products with confusingly similar names. Here’s what each one actually does.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for', 'Indoor golf simulator venues', 'Indoor golf venues (general)'],
      ['Pricing model', 'Flat $197/month', 'Varies — percentage-based fees'],
      ['Online booking', 'Yes', 'Yes'],
      ['Membership management', 'Yes', 'Varies'],
      ['Automated SMS', 'Yes (native Telnyx)', 'Not confirmed'],
      ['Owner dashboard', 'Yes', 'Limited'],
      ['Setup time', '24 hours', 'Longer'],
      ['Setup fee', 'One-time onboarding fee', 'Not confirmed'],
      ['Website included', 'Optional ($400)', 'Not included'],
      ['Support', 'Direct (no ticketing)', 'Not confirmed'],
    ],
    cardsEyebrow: 'The honest breakdown',
    cards: [
      ['Two separate companies', 'Birdie and Birrdi are unaffiliated products. The similar names are a coincidence — this page helps you tell them apart.'],
      ['Who Birrdi is for', 'Birrdi serves a range of golf venue types — not optimized specifically for the simulator model of bay-based bookings and membership hour packages.'],
      ['Who Birdie is for', 'Birdie is purpose-built for simulator venues: multiple bays, flexible durations, membership hour banks, and automated re-engagement, on flat pricing.'],
    ],
    verdict: [
      'Birdie is purpose-built for indoor golf simulator venues — multiple bays, flexible session durations, membership hour banks, automated SMS re-engagement, and an owner revenue dashboard, all on flat $197/month pricing with 24-hour setup and no long-term contract.',
      'Birrdi (birrdigolf.com) is a separate, unaffiliated product serving indoor golf venues more generally. The similar name causes real confusion, but the products, companies, and pricing models differ — Birrdi uses percentage-based fees rather than a flat rate.',
      'If you found this page because of the name overlap: they are not the same company. If your business is specifically simulator bays and memberships, Birdie is the one built for that model. Book a 20-minute demo to see it on your own venue.',
    ],
    ctaHeading: 'See Birdie in action',
    ctaBody: "Book a 20-minute demo. We'll show you the booking system, membership tools, and owner dashboard — all set up for your venue.",
  },

  'birdie-vs-ezfacility': {
    metaTitle: 'EZFacility Alternative for Golf Simulators | Birdie',
    metaDescription: 'EZFacility is built for gyms and multi-sport facilities. Birdie is built for simulator bays — bay booking, memberships, and revenue tracking.',
    tagline: 'EZFacility is a sports and fitness facility platform built for gyms and multi-sport venues. Birdie is built for how a simulator business actually works.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for', 'Golf simulator venues', 'Multi-sport / fitness facilities'],
      ['Pricing model', 'Flat $197/month', 'Varies — tiered by features'],
      ['Bay-based booking', 'Yes', 'No'],
      ['Membership hour tracking', 'Yes', 'Partial'],
      ['Automated SMS', 'Yes', 'Add-on / limited'],
      ['Setup time', '24 hours', 'Days to weeks'],
      ['Golf simulator-specific features', 'Yes', 'No'],
      ['Owner revenue dashboard', 'Yes', 'Limited'],
      ['Setup fee', 'One-time onboarding fee', 'Yes'],
    ],
    cardsEyebrow: 'Why simulator owners choose Birdie',
    cards: [
      ['Built for bays, not courts', 'EZFacility manages courts, fields, and classes. Birdie manages simulator bays with hourly packages and membership tracking built in.'],
      ['Simple, flat pricing', 'No tiered plans. $197/month for everything — bookings, memberships, SMS, and revenue dashboard — plus a one-time onboarding fee for done-for-you setup.'],
      ['Live in 24 hours', 'No implementation project. Configure your bays, connect Stripe, and start taking bookings the same day.'],
    ],
    verdict: [
      'EZFacility works well for multi-sport facilities managing courts, fields, and classes across staff members. If you run a facility with many different activity types and need centralized staff scheduling, it is worth evaluating.',
      'Birdie is purpose-built for golf simulator venues — single-activity businesses where bay-based bookings, membership packages, and automated customer re-engagement drive all the revenue. If your entire business is simulators, you don’t need a platform designed for gyms.',
    ],
    ctaHeading: 'See Birdie in action',
    ctaBody: 'Most demo requests get a response within a few hours. See exactly how Birdie handles your booking flow.',
  },

  'birdie-vs-mindbody': {
    metaTitle: 'Mindbody Alternative for Golf Simulators | Birdie',
    metaDescription: 'Mindbody is built for fitness classes, not bay rentals. Birdie is built for golf simulator venues — bay booking, memberships, and automated SMS.',
    tagline: 'Mindbody is built around classes, instructors, and appointment types — not bay-based hourly rentals. Simulator venues force-fitting into it end up with workarounds.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for', 'Golf simulator venues', 'Fitness / wellness studios'],
      ['Pricing model', 'Flat $197/month', 'Starts ~$129/month + fees'],
      ['Bay-based booking', 'Yes', 'No'],
      ['Membership hour tracking', 'Yes', 'Class-pack model only'],
      ['Automated SMS', 'Yes', 'Higher tiers only'],
      ['Golf simulator-specific features', 'Yes', 'No'],
      ['Setup time', '24 hours', 'Days to weeks'],
      ['Setup fee', 'One-time onboarding fee', 'Onboarding fee varies'],
      ['Transaction fees', 'Stripe standard only', 'Yes — Mindbody Pay fees'],
    ],
    cardsEyebrow: 'Why simulator owners choose Birdie',
    cards: [
      ['Bays, not classes', 'Mindbody is built around classes and instructors. Birdie is built around bay-based hourly rentals — the way simulator venues actually work.'],
      ['No hidden processing fees', 'Birdie uses Stripe at standard rates. No proprietary payment processor with added fees on every transaction.'],
      ['No workarounds needed', 'Bay scheduling, membership hour banks, and SMS re-engagement are native — not hacked together from class booking features.'],
    ],
    verdict: [
      'Mindbody is excellent for yoga studios, personal trainers, spas, and fitness businesses with class-based scheduling and instructor management. If that is your business, it is a well-proven choice.',
      'Birdie is for indoor golf simulator venues. Bay scheduling, hourly memberships, re-engagement SMS, and a revenue dashboard built around utilization — not class attendance. If you have been forcing your simulator business into a fitness tool, Birdie is what you actually need.',
    ],
    ctaHeading: 'See Birdie in action',
    ctaBody: 'Most demo requests get a response within a few hours. See exactly how Birdie handles your booking flow.',
  },

  'birdie-vs-acuity': {
    metaTitle: 'Acuity Alternative for Golf Simulators | Birdie',
    metaDescription: 'Acuity books generic appointments — no bays, memberships, or SMS. Birdie is the golf simulator booking software built for venues.',
    tagline: 'Acuity Scheduling (now part of Squarespace) is a general-purpose appointment tool — no bays, no membership hour tracking, no revenue dashboard, no automated SMS. Those missing features cost a growing venue real money.',
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for', 'Golf simulator venues', 'Generic appointments'],
      ['Pricing model', 'Flat $197/month', '$16–$61/month'],
      ['Bay-based booking', 'Yes', 'No'],
      ['Membership hour tracking', 'Yes', 'No'],
      ['Automated SMS re-engagement', 'Yes', 'No'],
      ['Revenue dashboard', 'Yes', 'No'],
      ['Golf simulator-specific features', 'Yes', 'No'],
      ['Group/event bookings', 'Yes', 'Basic'],
      ['Owner support', 'Direct', 'Help docs / email'],
    ],
    cardsEyebrow: 'Why simulator owners choose Birdie',
    cards: [
      ['More than a calendar', 'Acuity books appointments. Birdie manages your entire simulator business — bays, memberships, re-engagement, and revenue tracking.'],
      ["Revenue you're leaving behind", "Without automated SMS re-engagement and membership hour tracking, you're losing rebookings every week. Birdie closes that gap."],
      ['Built for growth', 'Acuity works for getting started. Birdie works for scaling — utilization dashboards show you exactly where to focus.'],
    ],
    verdict: [
      'Acuity is a solid entry-level tool for consultants, coaches, and service providers who need simple appointment booking. If you are a solo operator just starting out and cost is the only factor, it gets the job done minimally.',
      'Birdie is for simulator venue owners who want to grow revenue, not just manage a calendar. Bay scheduling, memberships, automated SMS to bring lapsed customers back, and a dashboard that shows exactly where your revenue is coming from — none of that exists in Acuity.',
    ],
    ctaHeading: 'See Birdie in action',
    ctaBody: 'Most demo requests get a response within a few hours. See exactly how Birdie handles your booking flow.',
  },

  'birdie-vs-square': {
    metaTitle: 'Square Alternative for Golf Simulators | Birdie',
    metaDescription: 'Square is payments and POS, not venue management. Birdie adds bay scheduling, memberships, and automated SMS built for golf simulator venues.',
    tagline: "Square is how most venues start — reliable payments, free tier. But it's a payments/POS platform, not a venue management system: no bay scheduling, no membership hour tracking, no automated SMS.",
    secondaryBtn: 'See Pricing',
    rows: [
      ['Built for', 'Golf simulator venues', 'Payments / POS'],
      ['Pricing model', 'Flat $197/month', 'Free + transaction %'],
      ['Online bay scheduling', 'Yes', 'No'],
      ['Membership management', 'Yes', 'No'],
      ['Automated SMS re-engagement', 'Yes', 'No'],
      ['Revenue dashboard by bay', 'Yes', 'Basic sales reports'],
      ['Golf simulator-specific features', 'Yes', 'No'],
      ['All-in-one system', 'Yes', 'No'],
      ['Setup fee', 'One-time onboarding fee', '$0'],
    ],
    cardsEyebrow: 'Why simulator owners choose Birdie',
    cards: [
      ['Square is a register, not a platform', 'Square handles transactions. Birdie handles your entire booking, membership, and customer re-engagement workflow — the things that actually drive revenue.'],
      ['Stop cobbling tools together', 'Square for payments, another tool for bookings, a spreadsheet for members. Birdie replaces the patchwork with one system built for simulator venues.'],
      ['Automated re-engagement', "Square can't text a lapsed customer to rebook. Birdie's automated SMS brings them back — that's revenue you're currently losing."],
    ],
    verdict: [
      'Square is the right choice for point-of-sale transactions — food & beverage, merchandise, walk-in payments. Many Birdie venues still use Square for their F&B side while using Birdie for all bookings and memberships.',
      "Birdie replaces the booking + membership + re-engagement stack that Square can't provide. If you're using Square for everything and wondering why customers don't rebook, why your weekdays are empty, and why you can't see which bays are underperforming — Birdie is the fix.",
    ],
    ctaHeading: 'See Birdie in action',
    ctaBody: 'Most demo requests get a response within a few hours. See exactly how Birdie handles your booking flow.',
  },

  'birdie-vs-simbook': {
    metaTitle: 'Simbook Alternative for Simulator Venues | Birdie',
    metaDescription: 'Comparing Simbook and Birdie for indoor golf venues — per-sim vs flat $197/mo pricing, smart-lock door access, revenue intelligence, and live in 24 hours.',
    tagline: 'Simbook locks the bay PC until it is paid for. Birdie unlocks the building and fills the calendar.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Pricing model', '$197/mo flat, any number of bays', '$39/sim/mo (Software) · $100/sim/mo (Full Service)'],
      ['Cost at 4 bays', '$197', '$156 – $400'],
      ['Cost at 8 bays', '$197', '$312 – $800'],
      ['Building door access — named lock brands', 'Kisi, PDK, UniFi, Avigilon Alta, RemoteLock', 'Not offered — locks the bay PC, not the door'],
      ['Bay PC lockdown & kiosk session control', 'Not offered — Birdie controls the door, not the PC', 'Yes — per-PC agent, kiosk PIN, heartbeat'],
      ['Payments', 'Stripe, Square, Clover, Helcim (beta)', 'Stripe'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Booking, league and gift-card reporting'],
      ['Hour-bank memberships', 'Yes', 'Memberships & leagues'],
      ['Live and taking bookings', 'In 24 hours, done-for-you', 'Demo-led onboarding'],
      ['Contract', 'Month to month', 'Month to month'],
      ['Found in Google & AI search', 'DR 47 · cited in ChatGPT, Copilot, Perplexity, AI Overviews', 'DR 4 · regional footprint (central PA)'],
    ],
    cardsEyebrow: 'How to tell which one fits',
    cards: [
      ['Two different definitions of control', 'Simbook keeps the bay PC locked until a paid session checks in at a kiosk, and flags a silent station within 90 seconds. Birdie works one layer out: a time-gated SMS unlock link opens the front door on every booking, through Kisi, PDK, UniFi, Avigilon Alta, or RemoteLock. If your problem is people playing without paying, Simbook addresses it directly. If your problem is getting paying customers into an empty building at 6am with nobody on staff, that is what Birdie was built for.'],
      ['The pricing crossover is around five bays', 'Simbook charges per sim. At four bays its Software tier is $156/month, genuinely less than Birdie. At six bays it is $234, at eight $312, and the Full Service tier runs $100 per sim — $800/month for an eight-bay floor. Birdie is $197 flat whatever your bay count. Small venues should price both. Growing ones should note that Birdie’s bill does not move when you add a bay.'],
      ['Filling hours, not just enforcing them', 'Both platforms take bookings, sell memberships, and run leagues. Birdie adds the layer above that: which weekday hours are dead, which customers have lapsed, and automated SMS that wins them back. Simbook’s answer to a quiet Tuesday is that the PC stays locked; Birdie’s is to go and sell the hour.'],
    ],
    verdict: [
      'Simbook is a serious, well-built product with a genuinely novel offer: on its Full Service tier your customers call Simbook directly, 24/7, and their team remotes into the bay PC to fix a frozen launch monitor mid-session. Nobody else in the category does that, and if you run unstaffed hours on hardware that occasionally fails, it is worth real money. It is simulator-agnostic across Trackman, GSPro, Uneekor, Foresight, E6 and TruGolf, it handles racing rigs alongside golf bays, and it publishes its pricing openly — which is more than most of this category manages.',
      'The two platforms solve adjacent problems rather than the same one. Simbook is session enforcement: pay, unlock the PC, monitor the session, prorate the extension. Birdie is venue revenue: bay-native scheduling, hour-bank memberships, smart-lock entry to the building itself through five named lock brands, and a revenue-intelligence dashboard that surfaces dead weekday hours and lapsed customers and wins them back over SMS. Birdie also charges one flat $197/month regardless of bay count, configures the account for you, and has you live in 24 hours.',
      'The honest test is your floor plan and your failure mode. Under five bays with staff present and hardware that misbehaves, price Simbook carefully — it may well win. Six bays or more, or an unattended venue where the real leak is empty weekday hours rather than unpaid sessions, and Birdie is the better economic fit. Put both in front of your own numbers.',
    ],
    ctaHeading: 'See Birdie on your own bays and bay count',
    ctaBody: 'Book a free walkthrough — bay booking, hour-bank memberships, 24/7 smart-lock entry, and the revenue dashboard, with flat pricing shown upfront and setup handled for you.',
  },

  'birdie-vs-teeflow': {
    metaTitle: 'TeeFlow Alternative for Simulator Venues | Birdie',
    metaDescription: 'Comparing TeeFlow and Birdie for indoor golf venues — published $197/mo pricing, five smart-lock brands, Stripe, Square, Clover and Helcim (beta) payments.',
    tagline: 'The closest thing to Birdie on this list. The differences are pricing you can see, locks we name, and a track record you can check.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Pricing published on the website', '$197/mo flat, no per-booking fees', 'Not published — demo required'],
      ['Purpose-built for simulator bays', 'Yes', 'Yes'],
      ['Hour-bank memberships', 'Yes', 'Tiers with included hours'],
      ['24/7 door access — named lock brands', 'Kisi, PDK, UniFi, Avigilon Alta, RemoteLock', 'Connects to “the door system you already use” — brands not named'],
      ['Payments', 'Stripe, Square, Clover, Helcim (beta)', 'Stripe'],
      ['Lapsed-customer win-back', 'Automated SMS reactivation', 'At-risk member list with manual “send nudge”'],
      ['Lessons, fittings & coach scheduling', 'Bay time and add-ons', 'Yes — coach-led services on the same calendar'],
      ['Live and taking bookings', 'In 24 hours, done-for-you', 'Live in days, done-for-you'],
      ['Found in Google & AI search', 'DR 47 · cited in ChatGPT, Copilot, Perplexity, AI Overviews', 'DR 0 · no organic presence yet'],
      ['Operator resource library', '80+ guides', 'Starter blog'],
    ],
    cardsEyebrow: 'Where the two actually diverge',
    cards: [
      ['You can price Birdie without a sales call', 'TeeFlow does not publish pricing anywhere on its site — bookings, memberships, payments and access all route through “book a demo.” Birdie publishes one number: $197/month flat, no per-booking fees, no per-bay charges, no long-term contract. You can budget Birdie this afternoon.'],
      ['Named locks beat “the door system you already use”', 'Door access is the feature most likely to break a simulator venue’s launch, because it depends entirely on which hardware you own. Birdie names all five supported brands — Kisi, ProDataKey, UniFi Access, Avigilon Alta, and RemoteLock — with published integration pages for each, so you can confirm compatibility before you switch rather than after. TeeFlow describes door access generically.'],
      ['Automated win-back, not a manual nudge button', 'Both platforms spot members who have gone quiet. TeeFlow surfaces an at-risk list and gives your staff a “send nudge” button, which means someone has to remember to press it. Birdie runs reactivation automatically over SMS, alongside utilization tracking that shows what filling those hours is actually worth.'],
    ],
    verdict: [
      'TeeFlow is the most direct comparison on this page, and it deserves credit: it is genuinely built for indoor golf rather than retrofitted from course software, the member-facing signup and booking experience is clean and requires no app install, and it handles lessons, fittings and coach-led services on the same calendar as bay time — an area where it is arguably ahead of Birdie if coaching is a real revenue line for you.',
      'Where Birdie separates is transparency and proof. Pricing is published — $197/month flat, no per-booking or per-bay fees. Every smart-lock integration is named and documented, so compatibility is a five-minute check rather than a discovery call. Payments run natively through Square. Reactivation happens automatically instead of waiting on staff. Setup is done for you and you are live in 24 hours rather than days. And Birdie is the platform operators actually find: domain rating 47, cited across ChatGPT, Copilot, Perplexity and Google AI Overviews, and backed by 80+ operator guides — TeeFlow currently has no measurable organic search presence.',
      'If coach-led lessons are central to your business, look hard at both. If your revenue comes from bay hours, memberships and unattended access, Birdie will show you the full cost and the full feature set in one walkthrough, without a quote request.',
    ],
    ctaHeading: 'Compare Birdie side by side, with pricing upfront',
    ctaBody: 'Book a free walkthrough — bay booking, hour-bank memberships, 24/7 smart-lock entry, and automated reactivation. Setup handled for you, live in 24 hours.',
  },

  'birdie-vs-itg-golf': {
    metaTitle: 'ITG.golf Alternative for Simulator Venues | Birdie',
    metaDescription: 'Comparing ITG.golf and Birdie for indoor golf simulator venues — bay-native scheduling, named smart-lock access, revenue intelligence, and flat $197/mo pricing.',
    tagline: 'ITG.golf runs four kinds of golf business. Birdie runs one, and runs it properly.',
    secondaryBtn: 'See Birdie Pricing',
    rows: [
      ['Built exclusively for simulator venues', 'Yes', 'No — studios, coaches, courses & semi-private clubs'],
      ['Scheduling model', 'Bay-native, hourly', 'Tee times and bay scheduling'],
      ['Pricing published on the website', '$197/mo flat, no per-booking fees', 'Not published — quote required'],
      ['24/7 door access — named lock brands', 'Kisi, PDK, UniFi, Avigilon Alta, RemoteLock', 'Not offered'],
      ['Unattended / after-hours operation', 'Built for it — time-gated SMS unlock on every booking', 'Not addressed'],
      ['Hour-bank memberships', 'Yes', 'Tiers, family & corporate plans'],
      ['Revenue intelligence (dead-hour + lapsed-customer win-back)', 'Yes', 'Revenue & retention dashboards'],
      ['Tournaments & leagues with handicaps', 'Leagues and group bookings', 'Yes — flighted leagues, automated scoring, standings'],
      ['Native iOS & Android member apps', 'Mobile web, no install', 'Yes'],
      ['Payments', 'Stripe, Square, Clover, Helcim (beta)', 'Integrated POS — pro shop, F&B, green fees'],
      ['Live and taking bookings', 'In 24 hours, done-for-you', 'Dedicated onboarding'],
      ['Found in Google & AI search', 'DR 47 · cited in ChatGPT, Copilot, Perplexity, AI Overviews', 'DR 0 · no organic presence yet'],
    ],
    cardsEyebrow: 'Where Birdie fits better',
    cards: [
      ['One business model, not four', 'ITG.golf serves simulator studios, golf coaches, daily-fee courses and semi-private clubs from a single platform. That breadth is real, but it means every feature is a compromise between a tee sheet, a lesson book, a club membership roster, and your bays. Birdie only does simulator venues — hourly bays, hour-bank memberships, and unattended operation — so nothing in it is a setting inherited from an 18-hole course.'],
      ['The door is the whole business after 8pm', 'ITG.golf’s platform does not address door access. Birdie treats it as core: every booking issues a time-gated SMS unlock link through Kisi, ProDataKey, UniFi Access, Avigilon Alta or RemoteLock, so bays keep earning overnight with nobody on the floor. If unattended hours are part of your revenue plan, this is the difference between a venue that closes at 8 and one that does not.'],
      ['Pricing you can see, live in a day', 'Birdie publishes one flat rate — $197/month, no per-booking fees, no per-bay charges, no long-term contract — and configures your bays, rates and memberships for you so you are taking bookings within 24 hours. ITG.golf routes pricing through a demo and a dedicated onboarding process.'],
    ],
    verdict: [
      'ITG.golf is a broad, capable golf-operations platform, and in several areas it does more than Birdie: native iOS and Android member apps, flighted tournaments and leagues with automated scoring and live standings, a member community layer with directories and messaging, and an integrated POS spanning pro shop, food and beverage, lessons and green fees. If you run a semi-private club, or a studio attached to a course, that breadth is genuinely useful.',
      'But breadth is the trade. A platform that must also satisfy daily-fee courses and semi-private clubs starts from tee times and member rosters, and simulator venues get a bay-scheduling module bolted onto that foundation. Birdie starts from the bay: hourly scheduling with no tee-sheet logic anywhere in it, hour-bank memberships built for prepaid time rather than annual dues, automated text and email confirmations, reminders and receipts, five named smart-lock integrations for genuine 24/7 unattended operation, and a revenue-intelligence layer that surfaces dead weekday hours and lapsed customers and wins them back. One flat $197/month, published, no per-bay fee, live in 24 hours.',
      'Choose ITG.golf if your business spans courses, coaching and clubs and you need one system across all of it. Choose Birdie if you run simulator bays and want software that assumes nothing else.',
    ],
    ctaHeading: 'See software built only for simulator bays',
    ctaBody: 'Book a free walkthrough — bay booking, hour-bank memberships, 24/7 smart-lock entry, and the revenue dashboard, with flat pricing shown upfront and setup handled for you.',
  },
};

// Generic default for competitors not yet individually populated.
export const DEFAULT_COMP: CompData = {
  tagline: 'Both handle booking. Only one is built for how simulator venues run.',
  secondaryBtn: 'See Pricing',
  rows: [
    ['Built for simulator bays', 'Yes', 'Varies'],
    ['Membership management', 'Yes', 'Varies'],
    ['Utilization analytics', 'Yes', 'Varies'],
    ['Revenue reporting', 'Yes', 'Varies'],
    ['24/7 PDK door access', 'Yes', 'Varies'],
    ['Pricing transparency', 'Flat monthly', 'Varies'],
    ['Contract required', 'No', 'Check terms'],
    ['US-based support', 'Yes', 'Varies'],
  ],
  cardsEyebrow: 'Where Birdie goes further',
  cards: [
    ['Built for bays, not courses', 'Birdie is designed around hourly simulator bays, memberships, and unattended access — not adapted from generic scheduling software.'],
    ['Know your numbers', "Birdie's utilization dashboard shows which hours are dead, which bays underperform, and what a 10% booking improvement is worth in dollars."],
    ['One platform, not a stack', 'No separate POS, membership tool, or spreadsheets. Everything in one place, live in 24 hours.'],
  ],
  ctaHeading: 'See what Birdie can do for your simulator',
  ctaBody: 'Book a free walkthrough on your own bays, pricing, and customers. Zero pressure.',
};
