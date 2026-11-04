/**
 * Cloudflare Pages Function — POST /api/calendly-webhook
 *
 * Backstop notifier. Calendly calls this on `invitee.created` for EVERY booking,
 * no matter how the invitee reached the scheduler (funnel form, /book-demo embed,
 * a shared Calendly link, etc.). This guarantees a #birdie-leads Slack ping even if
 * the on-site /api/lead or /api/booking Slack post drops on a transient blip.
 *
 * ── One-time setup (create the subscription once per Calendly account) ──
 *   1. Pick a random secret for signing (e.g. `openssl rand -hex 32`).
 *   2. Create the subscription:
 *        curl -X POST https://api.calendly.com/webhook_subscriptions \
 *          -H "Authorization: Bearer $CALENDLY_TOKEN_JIMMY" \
 *          -H "Content-Type: application/json" \
 *          -d '{
 *            "url": "https://www.birdiegrow.com/api/calendly-webhook",
 *            "events": ["invitee.created"],
 *            "organization": "<your organization URI>",
 *            "scope": "organization",
 *            "signing_key": "<the secret from step 1>"
 *          }'
 *      (Get the organization URI from GET https://api.calendly.com/users/me.)
 *   3. In Cloudflare Pages → Settings → Environment variables, set
 *        CALENDLY_WEBHOOK_SIGNING_KEY = <the secret from step 1>
 *      Until that env var is set, signature verification is skipped (still works,
 *      just unauthenticated). Set it to lock the endpoint down.
 *
 * Env:
 *   SLACK_LEADS_WEBHOOK_URL         — override the #birdie-leads hook (optional)
 *   CALENDLY_WEBHOOK_SIGNING_KEY    — enables HMAC signature verification (optional)
 */
const FALLBACK_SLACK_LEADS_WEBHOOK =
  'https://hooks.slack.com/services/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';

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

// Best-effort Slack post with retry on a non-2xx / thrown error.
async function postSlack(url, text, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (res.ok) return true;
    } catch {
      /* retry */
    }
    if (attempt < retries) await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
  }
  return false;
}

// Verify Calendly's `Calendly-Webhook-Signature: t=..,v1=..` header
// (HMAC-SHA256 of `${t}.${rawBody}`). Skipped when no signing key is configured.
async function verify(signingKey, header, rawBody) {
  if (!signingKey) return true; // not configured → accept (see setup notes)
  try {
    const parts = {};
    (header || '').split(',').forEach((kv) => {
      const i = kv.indexOf('=');
      if (i > 0) parts[kv.slice(0, i).trim()] = kv.slice(i + 1).trim();
    });
    if (!parts.t || !parts.v1) return false;
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(signingKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const sigBuf = await crypto.subtle.sign(
      'HMAC',
      key,
      new TextEncoder().encode(`${parts.t}.${rawBody}`)
    );
    const hex = [...new Uint8Array(sigBuf)]
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hex === parts.v1;
  } catch {
    return false;
  }
}

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
  const slack = (env && env.SLACK_LEADS_WEBHOOK_URL) || FALLBACK_SLACK_LEADS_WEBHOOK;

  const raw = await request.text();
  const sigHeader = request.headers.get('Calendly-Webhook-Signature') || '';
  if (!(await verify(env && env.CALENDLY_WEBHOOK_SIGNING_KEY, sigHeader, raw))) {
    return json({ ok: false, error: 'bad_signature' }, 401);
  }

  let evt;
  try {
    evt = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Only act on new bookings; ack everything else so Calendly doesn't retry.
  if (!evt || evt.event !== 'invitee.created') return json({ ok: true, ignored: true });

  const p = evt.payload || {};
  const name =
    p.name || [p.first_name, p.last_name].filter(Boolean).join(' ').trim() || 'Unknown';
  const email = p.email || '';
  let phone = p.text_reminder_number || '';
  let business = '';
  let interests = '';

  // Pull business/phone/interests out of the Calendly intake questions if present.
  const qa = Array.isArray(p.questions_and_answers) ? p.questions_and_answers : [];
  for (const item of qa) {
    const q = ((item && item.question) || '').toLowerCase();
    const a = (item && item.answer) || '';
    if (!a) continue;
    if (!phone && q.includes('phone')) phone = a;
    if (!business && (q.includes('business') || q.includes('company') || q.includes('venue')))
      business = a;
    if (!interests && q.includes('interest')) interests = a;
  }

  const startIso =
    (p.scheduled_event && p.scheduled_event.start_time) || p.start_time || '';
  const when = fmtCentral(startIso);
  const rep = 'Jimmy';

  const text =
    `📅 *Demo booked (Calendly)* — ${name}${business ? ` (${business})` : ''}\n` +
    `via Calendly · ${rep}\n` +
    `${[email, phone].filter(Boolean).join(' · ')}` +
    (when ? `\n🕐 ${when}` : '') +
    (interests ? `\nInterested in: ${interests}` : '');

  const slackOk = await postSlack(slack, text);
  if (!slackOk) console.error('[calendly-webhook] Slack notify failed for', email || name);

  // Always 200 so Calendly marks delivery successful and doesn't spam retries.
  return json({ ok: true, slack: slackOk });
}

// Calendly only POSTs; reject others cleanly.
export async function onRequest({ request }) {
  if (request.method === 'POST') return; // handled by onRequestPost
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}
