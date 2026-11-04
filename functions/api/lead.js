/**
 * Cloudflare Pages Function — POST /api/lead
 *
 * Receives the landing-page / demo form submissions and forwards each lead
 * straight to the Command Center (Lovable) inbound hook — the CRM of record.
 * Runs server-side so URLs/secrets never reach the browser.
 *
 * Env overrides (Cloudflare Pages → Settings → Environment variables):
 *   COMMAND_CENTER_WEBHOOK_URL  — override the Command Center hook
 *   COMMAND_CENTER_TOKEN        — if you enable the hook's shared-secret gate
 */
const FALLBACK_COMMAND_CENTER_WEBHOOK =
  'https://business-command-post.lovable.app/api/public/hooks/leadconnector';
// New-lead alerts post to the #birdie-leads channel (separate from booking alerts).
const FALLBACK_SLACK_LEADS_WEBHOOK =
  'https://hooks.slack.com/services/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';

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

// Retries on a non-2xx or a thrown error (best-effort delivery shouldn't silently
// drop on a transient blip). Only the failure path adds latency.
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

export async function onRequestPost({ request, env }) {
  const commandCenter =
    (env && env.COMMAND_CENTER_WEBHOOK_URL) || FALLBACK_COMMAND_CENTER_WEBHOOK;
  const ccToken = env && env.COMMAND_CENTER_TOKEN;
  const slack = (env && env.SLACK_LEADS_WEBHOOK_URL) || FALLBACK_SLACK_LEADS_WEBHOOK;

  let form;
  try {
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const j = await request.json();
      form = new Map(Object.entries(j));
    } else {
      form = await request.formData();
    }
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const get = (k) => ((form.get(k) ?? '') + '').trim();

  // Honeypot — bots fill hidden fields; silently accept and drop.
  if (get('company_website')) return json({ ok: true });

  const first = get('first_name');
  const email = get('email');
  const phone = get('phone');
  const business = get('business_name');
  const zip = get('zip');
  const interests = get('interests');
  const submittedAt = new Date().toISOString();

  // Attribution (captured client-side in BaseLayout, first-touch).
  const leadSource = get('lead_source'); // Organic | Paid – Google | Paid – Facebook | Direct
  const utmSource = get('utm_source');
  const utmMedium = get('utm_medium');
  const utmCampaign = get('utm_campaign');
  const utmTerm = get('utm_term');
  const utmContent = get('utm_content');
  const gclid = get('gclid');
  const fbclid = get('fbclid');
  const landingPage = get('landing_page');

  // Tag the lead with a distinct source per funnel so Command Center can route it.
  const referer = request.headers.get('referer') || '';
  const formSource = get('form_source');
  let source, funnelPath, assignee;
  if (formSource === 'booking-system-lp' || referer.includes('/lpbookingsystem')) {
    source = 'Booking Software Page';
    funnelPath = '/lpbookingsystem';
    assignee = 'Jimmy Bothwell';
  } else if (formSource === 'advertising-lp' || referer.includes('/lpadvertising')) {
    source = 'Advertising Page';
    funnelPath = '/lpadvertising';
    assignee = 'Luke Meyer';
  } else {
    source = 'Demo Page';
    funnelPath = '/demo';
    assignee = 'Jimmy Bothwell';
  }

  // All landing-page leads route to one pipeline + intake stage in Command Center.
  const pipeline = 'Paid Advertising Leads';
  const stage = 'Lead In';

  if (!email || !first) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }

  // Command Center payload (its schema: `name` required; normalizes the rest).
  const ccHeaders = { 'content-type': 'application/json' };
  if (ccToken) ccHeaders['authorization'] = `Bearer ${ccToken}`;
  const ccPayload = {
    name: first,
    email,
    phone,
    business_name: business,
    zip,
    interests,
    source,
    pipeline,
    stage,
    assignee,
    // Attribution — clean field for the card, plus raw campaign data for the dashboard.
    lead_source: leadSource,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_term: utmTerm,
    utm_content: utmContent,
    gclid,
    fbclid,
    landing_page: landingPage,
    page: referer,
    submitted_at: submittedAt,
    notes: '',
  };

  // Slack alert for the new lead (best-effort; lead capture doesn't depend on it).
  const slackPayload = {
    text:
      `🆕 *New lead* — ${first}${business ? ` (${business})` : ''}\n` +
      `${source} · ${assignee || 'Unassigned'}\n` +
      `${[email, phone].filter(Boolean).join(' · ')}` +
      (leadSource ? `\nLead source: ${leadSource}` : '') +
      (interests ? `\nInterested in: ${interests}` : ''),
  };

  const [ccOk, slackOk] = await Promise.all([
    post(commandCenter, ccPayload, ccHeaders),
    post(slack, slackPayload),
  ]);

  // Surface a dropped Slack alert in Cloudflare logs instead of swallowing it.
  // (The Calendly webhook backstop, /api/calendly-webhook, still catches the booking.)
  if (!slackOk) console.error('[lead] Slack #birdie-leads notify failed for', email);

  if (ccOk) return json({ ok: true, cc: ccOk, slack: slackOk });
  return json({ ok: false, error: 'upstream' }, 502);
}

// Reject non-POST methods cleanly.
export async function onRequest({ request }) {
  if (request.method === 'POST') return; // handled by onRequestPost
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}
