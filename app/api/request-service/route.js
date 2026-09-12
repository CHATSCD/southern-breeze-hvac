import { SITE } from '@/lib/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const clean = (value, max) =>
  String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, max);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot — pretend success so bots move on.
  if (clean(body.company, 40)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 32);

  if (name.length < 2 || phone.replace(/\D/g, '').length < 10) {
    return Response.json({ ok: false, error: 'invalid_input' }, { status: 400 });
  }

  const lead = {
    name,
    phone,
    service: clean(body.service, 120) || null,
    urgency: clean(body.urgency, 40) || null,
    city: clean(body.city, 80) || null,
    notes: clean(body.notes, 1000) || null,
    source: 'landing-page',
    user_agent: clean(request.headers.get('user-agent'), 300) || null,
  };

  const supabaseUrl = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Fail loudly in the logs, and tell the visitor to call instead of silently
  // swallowing a lead. A lost web lead in August is worse than a lost form fill.
  if (!supabaseUrl || !supabaseKey) {
    console.error(
      `[service-request] Supabase env vars missing — lead NOT stored. Tell them to call ${SITE.phoneDisplay}.`,
      JSON.stringify(lead),
    );
    return Response.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/service_requests`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
      cache: 'no-store',
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[service-request] Supabase insert failed', response.status, detail);
      return Response.json({ ok: false, error: 'storage_failed' }, { status: 502 });
    }
  } catch (error) {
    console.error('[service-request] Supabase request threw', error);
    return Response.json({ ok: false, error: 'storage_failed' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
