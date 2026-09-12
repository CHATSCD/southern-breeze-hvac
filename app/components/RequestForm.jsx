'use client';

import { useState } from 'react';
import { SERVICE_OPTIONS, SITE, TEL_HREF } from '@/lib/site';
import { IconCheck, IconPhone } from './icons';

const URGENCY_OPTIONS = [
  { value: 'emergency', label: 'Emergency — now' },
  { value: 'today', label: 'Today' },
  { value: 'soon', label: 'This week' },
];

export default function RequestForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [message, setMessage] = useState('');
  const [submittedPhone, setSubmittedPhone] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const name = String(data.name || '').trim();
    const phone = String(data.phone || '').trim();

    if (name.length < 2) {
      setStatus('error');
      setMessage('Add your name so we know who to ask for.');
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      setStatus('error');
      setMessage('Add a phone number we can call or text you back on.');
      return;
    }

    setStatus('submitting');
    setMessage('');
    setSubmittedPhone(phone);

    try {
      const response = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setStatus('error');
        setMessage(
          result.error === 'not_configured'
            ? 'Our online form is briefly offline — calling is faster anyway.'
            : 'We could not send that request just now.',
        );
        return;
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
      setMessage('Your connection dropped before we got it.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card border-arctic/50 bg-arctic-tint" role="status" aria-live="polite">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-arctic text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="mt-3 text-xl font-extrabold text-slateblue-dark">Request received.</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slateblue">
          We have your number ({submittedPhone}) and we&rsquo;re on it. Emergencies get called back first — usually
          within a few minutes.
        </p>
        <a href={TEL_HREF} className="btn-call mt-4">
          <IconPhone className="h-5 w-5 shrink-0" />
          <span>Call now: {SITE.phoneDisplay}</span>
        </a>
        <p className="mt-2 text-center text-xs font-semibold text-slateblue-light">
          If it&rsquo;s blowing warm air right now, don&rsquo;t wait on a callback — calling is faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card">
      <div className="space-y-3.5">
        <Field label="Your name" htmlFor="rf-name">
          <input
            id="rf-name"
            name="name"
            autoComplete="name"
            className="field"
            placeholder="First and last"
            required
          />
        </Field>

        <Field label="Best phone number" htmlFor="rf-phone" hint="We call or text this number — nothing else.">
          <input
            id="rf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            placeholder="(228) 555-0000"
            required
          />
        </Field>

        <Field label="What's going on?" htmlFor="rf-service">
          <select id="rf-service" name="service" className="field" defaultValue={SERVICE_OPTIONS[0]}>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <fieldset>
          <legend className="mb-1.5 block text-[13px] font-bold uppercase tracking-wide text-slateblue-light">
            How urgent?
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {URGENCY_OPTIONS.map((option) => (
              <label key={option.value} className="cursor-pointer">
                <input
                  type="radio"
                  name="urgency"
                  value={option.value}
                  defaultChecked={option.value === 'emergency'}
                  className="peer sr-only"
                />
                <span className="block rounded-xl border border-slate-300 px-2 py-2.5 text-center text-[13px] font-bold leading-tight text-slateblue-light transition peer-checked:border-arctic peer-checked:bg-arctic peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-arctic/40">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <Field label="City (optional)" htmlFor="rf-city">
            <input id="rf-city" name="city" className="field" placeholder="Diamondhead" />
          </Field>
          <Field label="Unit / notes (optional)" htmlFor="rf-notes">
            <input id="rf-notes" name="notes" className="field" placeholder="Upstairs unit, warm since last night" />
          </Field>
        </div>

        {/* Honeypot: bots fill this, humans never see it. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
      </div>

      {status === 'error' ? (
        <div
          role="alert"
          className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm font-semibold text-red-700"
        >
          {message}{' '}
          <a href={TEL_HREF} className="underline underline-offset-2">
            Call {SITE.phoneDisplay}
          </a>{' '}
          instead and we&rsquo;ll take it from there.
        </div>
      ) : null}

      <button type="submit" disabled={status === 'submitting'} className="btn-call mt-4 disabled:opacity-70">
        <IconPhone className="h-5 w-5 shrink-0" />
        <span>{status === 'submitting' ? 'Sending…' : 'Request Service'}</span>
      </button>

      <p className="mt-2 text-center text-xs leading-relaxed text-slateblue-light">
        Emergency right now? Calling is fastest:{' '}
        <a href={TEL_HREF} className="link">
          {SITE.phoneDisplay}
        </a>
        . We never share your number.
      </p>
    </form>
  );
}

function Field({ label, htmlFor, hint, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[13px] font-bold uppercase tracking-wide text-slateblue-light"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}
