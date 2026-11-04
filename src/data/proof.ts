/**
 * First-party proof-of-scale figures.
 *
 * RULES:
 * - These are real numbers from Birdie's own records. Never estimate, never round up
 *   optimistically, and never let a value here be derived from anything other than
 *   what Luke has confirmed.
 * - `asOf` must be updated in the same edit as any figure. A stale "as of" date is
 *   worse than no date, because it implies the number is current when it isn't.
 * - `cumulativeBookings` stays null until a real figure exists. It renders nothing
 *   while null. Cumulative bookings is monotonic by nature, so once it is wired to
 *   something real it only ever goes up — there is never a reason to invent it.
 *
 * Supplied by Luke 2026-09-11: 180+ active clients.
 */
export const PROOF = {
  /** Active paying clients running their simulator venues on Birdie. */
  activeClients: 180 as number | null,

  /** Cumulative bookings processed through Birdie to date. Null until real. */
  cumulativeBookings: null as number | null,

  /** Human-readable currency date for the figures above. Update alongside them. */
  asOf: 'September 2026',
};
