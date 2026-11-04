/**
 * Cloudflare Pages Function — POST /api/booking
 *
 * Fired client-side when a Calendly booking completes inside an LP embed
 * (Calendly's `calendly.event_scheduled` message). The browser re-sends the
 * details the visitor already entered in the funnel, so the notification is
 * fully populated (Calendly's client event alone doesn't include contact info).
 *
 * Forwards to:
 *   1. Command Center — updates the contact with a "Call Booked" source.
 *   2. Slack — posts a booking alert to the configured channel.
 *
 * Env overrides (Cloudflare Pages → Settings → Environment variables):
 *   COMMAND_CENTER_WEBHOOK_URL, COMMAND_CENTER_TOKEN, SLACK_WEBHOOK_URL
 */
const FALLBACK_COMMAND_CENTER_WEBHOOK =
  'https://business-command-post.lovable.app/api/public/hooks/leadconnector';
const FALLBACK_SLACK_WEBHOOK =
  'https://hooks.slack.com/services/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';

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

// Retries on a non-2xx or a thrown error so a transient blip doesn't silently
// drop the alert. Only the failure path adds latency.
async function post(url, body, headers, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: headers || { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) return true;
    } catch {
      /* fall through to retry */
    }
    if (attempt < retries) {
      await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
    }
  }
  return false;
}

// Look up a Calendly scheduled event's start time (raw ISO) via the API.
// Calendly's browser event only gives us the event URI; the time needs a token.
async function calendlyStartIso(eventUri, token) {
  if (!eventUri || !token) return '';
  try {
    const res = await fetch(eventUri, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return '';
    const j = await res.json();
    return (j && j.resource && j.resource.start_time) || '';
  } catch {
    return '';
  }
}

// Format an ISO time for humans in Central Time, e.g. "Sun, Jul 20, 5:00 PM CDT".
function fmtCentral(iso) {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Chicago',
      timeZoneName: 'short',
    }).format(new Date(iso));
  } catch {
    return '';
  }
}

export async function onRequestPost({ request, env }) {
  const commandCenter =
    (env && env.COMMAND_CENTER_WEBHOOK_URL) || FALLBACK_COMMAND_CENTER_WEBHOOK;
  const slack = (env && env.SLACK_WEBHOOK_URL) || FALLBACK_SLACK_WEBHOOK;
  const ccToken = env && env.COMMAND_CENTER_TOKEN;

  let form;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      form = new Map(Object.entries(await request.json()));
    } else {
      form = await request.formData();
    }
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const get = (k) => ((form.get(k) ?? '') + '').trim();

  const first = get('first_name');
  const email = get('email');
  const phone = get('phone');
  const business = get('business_name');
  const zip = get('zip');
  const interests = get('interests');
  const formSource = get('form_source');
  const referer = request.headers.get('referer') || '';

  // Attribution (carried from the funnel so a booking preserves the lead's source).
  const leadSource = get('lead_source');
  const utmSource = get('utm_source');
  const utmMedium = get('utm_medium');
  const utmCampaign = get('utm_campaign');
  const utmTerm = get('utm_term');
  const utmContent = get('utm_content');
  const gclid = get('gclid');
  const fbclid = get('fbclid');
  const landingPage = get('landing_page');

  // Identify which funnel the booking came from, and who the call is with.
  let funnelPath, rep, assignee;
  if (formSource === 'booking-system-lp' || referer.includes('/lpbookingsystem')) {
    funnelPath = '/lpbookingsystem';
    rep = 'Jimmy';
    assignee = 'Jimmy Bothwell';
  } else if (formSource === 'advertising-lp' || referer.includes('/lpadvertising')) {
    funnelPath = '/lpadvertising';
    rep = 'Luke';
    assignee = 'Luke Meyer';
  } else if (formSource === 'demo' || referer.includes('/demo') || referer.includes('/book-demo')) {
    funnelPath = '/demo';
    rep = 'Jimmy';
    assignee = 'Jimmy Bothwell';
  } else {
    funnelPath = '/';
    rep = 'the team';
    assignee = '';
  }

  // On booking, move the contact into the "Demo Booked" stage of the same pipeline.
  const pipeline = 'Paid Advertising Leads';
  const stage = 'Demo Booked';

  const bookedAt = new Date().toISOString();
  const source =
    funnelPath === '/lpadvertising'
      ? 'Advertising Page'
      : funnelPath === '/lpbookingsystem'
        ? 'Booking Software Page'
        : 'Demo Page';

  // Fetch the booked date/time from Calendly (needs a token for that rep's account).
  const eventUri = get('calendly_event_uri');
  const calToken =
    rep === 'Luke'
      ? (env && (env.CALENDLY_TOKEN_LUKE || env.CALENDLY_TOKEN))
      : (env && (env.CALENDLY_TOKEN_JIMMY || env.CALENDLY_TOKEN));
  const callScheduledIso = await calendlyStartIso(eventUri, calToken);
  const when = fmtCentral(callScheduledIso);

  // Command Center — mark the contact as having booked a call.
  const ccHeaders = { 'content-type': 'application/json' };
  if (ccToken) ccHeaders['authorization'] = `Bearer ${ccToken}`;
  const ccPayload = {
    name: first || 'Unknown',
    email,
    phone,
    business_name: business,
    zip,
    interests,
    source,
    pipeline,
    stage,
    assignee,
    call_scheduled: callScheduledIso,
    // Attribution — preserve the lead's source through the booking update.
    lead_source: leadSource,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
    gclid,
    fbclid,
    landing_page: landingPage,
    notes: `Booked a call with ${rep} via birdiegrow.com${funnelPath}${
      when ? ` for ${when}` : ''
    } (submitted ${bookedAt})`,
  };

  // Slack — "Call booked with {rep} — {customer}".
  const customer = first || business || email || '';
  const headline = customer
    ? `Call booked with ${rep} — ${customer}`
    : `Call booked with ${rep}`;
  const detail = [business, email, phone].filter(Boolean).join(' · ');
  const slackPayload = {
    text: `📅 ${headline}${when ? `\n🕐 ${when}` : ''}${
      detail ? `\n${detail} · \`${funnelPath}\`` : ` · \`${funnelPath}\``
    }`,
  };

  const [ccOk, slackOk] = await Promise.all([
    post(commandCenter, ccPayload, ccHeaders),
    post(slack, slackPayload),
  ]);

  // Surface a dropped Slack alert in Cloudflare logs instead of swallowing it.
  if (!slackOk) console.error('[booking] Slack notify failed for', email || first);

  if (ccOk || slackOk) return json({ ok: true, cc: ccOk, slack: slackOk });
  return json({ ok: false, error: 'upstream' }, 502);
}

// Reject non-POST methods cleanly.
export async function onRequest({ request }) {
  if (request.method === 'POST') return; // handled by onRequestPost
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}
