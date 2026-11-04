// Shared copy for the product / feature pages (batch d). Illustrative figures are the example numbers from the Figma design
// and the previous /features page; pages label them as examples.

/** Sample dashboard, as shown on /features/ and /revenue/. [value, label, delta, negative, sub] */
export const DASH_KPIS: [string, string, string, boolean, string][] = [
  ['41.3%', 'Weekday Occupancy', '-3.2%', true, 'vs 44.5% last month'],
  ['83', 'Lapsed Customers', '+11', false, 'no booking in 60+ days'],
  ['$187', 'Revenue / Bay / Day', '+$14', false, 'vs $173 last month'],
  ['58.7%', 'Utilization by Bay', '+4.1%', false, 'across all 4 bays'],
];
export const DASH_GAP = { label: 'Weekday Revenue Gap', value: '+18%', note: 'Mon–Thu bookings vs capacity · Last 30 days' };
export const DASH_TABLE = {
  title: 'Upcoming Bookings · 7 bookings · 3 this week',
  head: ['Customer', 'Bay', 'Date', 'Time', 'Players', 'Amount', 'Status'],
  rows: [
    ['Jake Morrison', 'Bay 1', 'Mar 19', '6:00 PM', '4', '$68', 'Confirmed'],
    ['Sarah Chen', 'Bay 3', 'Mar 19', '7:30 PM', '2', '$52', 'Confirmed'],
    ['Mike Torres', 'Bay 2', 'Mar 20', '2:00 PM', '3', '$45', 'Pending'],
    ['Alex Rivera', 'Bay 4', 'Mar 20', '5:00 PM', '1', '$38', 'Confirmed'],
    ['Ryan Park', 'Bay 3', 'Mar 21', '8:00 PM', '4', '$72', 'Pending'],
  ],
};

/** The product pages, in footer order. [label, href] */
export const PRODUCT_LINKS: [string, string][] = [
  ['Bay booking & waivers', '/features/bay-booking/'],
  ['Memberships & passes', '/features/memberships/'],
  ['Leagues & events', '/features/leagues-events/'],
  ['24/7 door access', '/features/door-access/'],
  ['Payments & revenue', '/revenue/'],
  ['SMS & marketing', '/sms/'],
];
