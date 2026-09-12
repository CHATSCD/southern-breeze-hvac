import { FAQS, SERVICES, SITE, TEL_HREF, TESTIMONIALS } from '@/lib/site';
import RequestForm from './components/RequestForm';
import {
  IconBolt,
  IconCheck,
  IconChevron,
  IconClock,
  IconDroplet,
  IconMapPin,
  IconPhone,
  IconShieldCheck,
  IconSnowflake,
  IconStar,
  IconWind,
  IconWrench,
} from './components/icons';

const ICONS = {
  bolt: IconBolt,
  wind: IconWind,
  droplet: IconDroplet,
  wrench: IconWrench,
};

/* ------------------------------------------------------------------ */
/* Structured data: LocalBusiness (HVACBusiness) + FAQPage            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HVACBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      description: `${SITE.licenseNote} offering 24/7 emergency AC repair, blower motor replacement, coil cleaning, and condenser fan repair across Diamondhead, Kiln, Bay St. Louis, and all of Hancock County, Mississippi. ${SITE.yearsInBusiness} years in business, average response time ${SITE.responseTime}.`,
      url: SITE.url,
      telephone: SITE.phoneTel,
      image: `${SITE.url}/icon.svg`,
      priceRange: '$$',
      slogan: 'Repair-first HVAC service, 24/7, across Hancock County, MS.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.primaryCity,
        addressRegion: 'MS',
        postalCode: '39525',
        addressCountry: 'US',
      },
      areaServed: [
        ...SITE.cities.map((city) => ({ '@type': 'City', name: `${city.name}, MS` })),
        { '@type': 'AdministrativeArea', name: SITE.region },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE.rating.value,
        reviewCount: SITE.rating.count,
        bestRating: SITE.rating.best,
        worstRating: 1,
      },
      review: TESTIMONIALS.map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
        reviewBody: t.quote,
      })),
      makesOffer: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.blurb },
      })),
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Years in business', value: SITE.yearsInBusiness },
        { '@type': 'PropertyValue', name: 'Average response time', value: SITE.responseTime },
        { '@type': 'PropertyValue', name: 'Emergency availability', value: '24/7, including nights, weekends and holidays' },
        { '@type': 'PropertyValue', name: 'Pricing', value: SITE.priceRangeNote },
      ],
      knowsAbout: [
        'Emergency air conditioning repair',
        'Blower motor replacement',
        'Evaporator coil cleaning',
        'Condenser fan motor repair',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustBar />
      <Services />
      <ServiceArea />
      <Reviews />
      <RequestSection />
      <Faq />
      <FinalCall />
      <SiteFooter />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Above the fold                                                      */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slateblue-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_85%_at_85%_-15%,rgba(6,182,212,0.45),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 pb-7 pt-5 sm:pb-14 sm:pt-12">
        <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-arctic-light">
          <IconSnowflake className="h-5 w-5" />
          {SITE.name}
        </p>

        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-arctic/40 bg-arctic/15 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-arctic-light">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-softping rounded-full bg-arctic-light" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-arctic-light" />
          </span>
          24/7 Emergency Line &middot; Answering Now
        </p>

        <h1 className="mt-3 text-[27px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          Emergency AC Repair in <span className="text-arctic-light">{SITE.primaryCity}, MS</span>
        </h1>

        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-200 sm:text-lg">
          {SITE.tagline} 24/7 repair for Diamondhead, Kiln, Bay St. Louis and all of Hancock County —{' '}
          {SITE.licenseNote.toLowerCase()}, local for {SITE.yearsInBusiness} years.
        </p>

        <div className="mt-5">
          <a href={TEL_HREF} className="btn-call sm:text-xl" aria-label={`Call ${SITE.phoneDisplay} now`}>
            <IconPhone className="h-6 w-6 shrink-0" />
            <span>Call Now: {SITE.phoneDisplay}</span>
          </a>
          <p className="mt-2.5 text-center text-sm text-slate-300">
            or{' '}
            <a href="#request" className="font-bold text-arctic-light underline underline-offset-4">
              request service online
            </a>{' '}
            — we call back in minutes
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold text-slate-300">
          <li className="flex items-center gap-1.5">
            <IconClock className="h-4 w-4 shrink-0 text-arctic-light" />
            Nights, weekends &amp; holidays
          </li>
          <li className="flex items-center gap-1.5">
            <IconShieldCheck className="h-4 w-4 shrink-0 text-arctic-light" />
            Licensed &amp; insured
          </li>
          <li className="flex items-center gap-1.5">
            <IconBolt className="h-4 w-4 shrink-0 text-arctic-light" />
            Avg response {SITE.responseTime}
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust bar — directly under the hero                                */
/* ------------------------------------------------------------------ */
function TrustBar() {
  const items = [
    { Icon: IconShieldCheck, top: 'Licensed & Insured', bottom: 'HVAC technician' },
    { Icon: IconClock, top: '24/7 Emergency Line', bottom: `Avg response ${SITE.responseTime}` },
    {
      Icon: IconStar,
      top: `${SITE.rating.value} ★ · ${SITE.rating.count} reviews`,
      bottom: SITE.rating.sources,
    },
    { Icon: IconMapPin, top: 'Hancock County native', bottom: `${SITE.yearsInBusiness} years local` },
  ];

  return (
    <section aria-label="Why homeowners call us" className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, top, bottom }) => (
          <li key={top} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-arctic-tint text-arctic-deep">
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-extrabold leading-tight text-slateblue-dark">{top}</span>
              <span className="block text-[12px] text-slateblue-light">{bottom}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
function Services() {
  return (
    <section id="services" className="section">
      <p className="eyebrow">What we fix</p>
      <h2 className="h2">Four repairs that get the cold air back</h2>
      <p className="lede mt-3 max-w-2xl">
        No jargon and no guesswork. We tell you what&rsquo;s wrong, what it costs to fix, and how fast we can be at
        your door.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon] || IconBolt;
          return (
            <article key={service.id} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-arctic-tint text-arctic-deep">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 text-lg font-extrabold leading-snug text-slateblue-dark">{service.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slateblue-light">{service.blurb}</p>
              <p className="mt-3 border-t border-slate-100 pt-3 text-[13px] leading-relaxed text-slateblue-light">
                {service.detail}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-slateblue-dark p-5 text-white sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] font-semibold">
          Not sure what&rsquo;s wrong? Describe it in one sentence and we&rsquo;ll tell you what it usually is.
        </p>
        <a href={TEL_HREF} className="btn-call shrink-0 sm:w-auto sm:px-6">
          <IconPhone className="h-5 w-5" />
          {SITE.phoneDisplay}
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service area                                                        */
/* ------------------------------------------------------------------ */
function ServiceArea() {
  return (
    <section id="area" className="border-y border-slate-200 bg-white">
      <div className="section">
        <p className="eyebrow">Service area</p>
        <h2 className="h2">We&rsquo;re already in your neighborhood</h2>
        <p className="lede mt-3 max-w-2xl">
          We&rsquo;re based in Hancock County, not routed in from Gulfport or Mobile. These are the towns and ZIP codes
          we cover every day:
        </p>

        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SITE.cities.map((city) => (
            <li key={city.zip} className="rounded-xl border border-slate-200 bg-ice px-3 py-3">
              <span className="flex items-center gap-1.5 text-sm font-extrabold text-slateblue-dark">
                <IconMapPin className="h-4 w-4 shrink-0 text-arctic" />
                {city.name}
              </span>
              <span className="mt-0.5 block text-xs font-semibold text-slateblue-light">ZIP {city.zip}</span>
            </li>
          ))}
          <li className="rounded-xl border border-dashed border-arctic/50 bg-arctic-tint px-3 py-3">
            <span className="flex items-center gap-1.5 text-sm font-extrabold text-arctic-deep">
              <IconCheck className="h-4 w-4 shrink-0" />
              Hancock County
            </span>
            <span className="mt-0.5 block text-xs font-semibold text-arctic-deep">All of it, MS</span>
          </li>
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-slateblue-light">
          Right on the county line and not sure you&rsquo;re in range?{' '}
          <a href={TEL_HREF} className="link">
            Call {SITE.phoneDisplay}
          </a>{' '}
          — we&rsquo;ll tell you straight, no runaround.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Reviews                                                             */
/* ------------------------------------------------------------------ */
function Reviews() {
  return (
    <section id="reviews" className="section">
      <p className="eyebrow">Reviews</p>
      <h2 className="h2">Hancock County neighbors, in their own words</h2>

      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
        <IconStar className="h-5 w-5 text-arctic-deep" />
        <span className="text-sm font-extrabold text-slateblue-dark">{SITE.rating.value} out of 5</span>
        <span className="text-sm text-slateblue-light">
          &middot; {SITE.rating.count} reviews on {SITE.rating.sources}
        </span>
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <blockquote key={testimonial.name} className="card">
            <p className="text-[16px] font-semibold leading-relaxed text-slateblue-dark">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-2.5 text-sm text-slateblue-light">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-arctic-tint text-xs font-extrabold text-arctic-deep">
                {initials(testimonial.name)}
              </span>
              <span>
                <span className="font-bold text-slateblue-dark">{testimonial.name}</span> &middot; {testimonial.city},
                MS
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Request service (secondary CTA)                                     */
/* ------------------------------------------------------------------ */
function RequestSection() {
  const reassurances = [
    'Repair-first — no pushy full-system upsells',
    'Upfront pricing on replacements before we start',
    `${SITE.licenseNote}, ${SITE.yearsInBusiness} years in Hancock County`,
  ];

  return (
    <section id="request" className="border-y border-slate-200 bg-white">
      <div className="section">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow">Request service</p>
            <h2 className="h2">Tell us what&rsquo;s wrong — we&rsquo;ll call you back</h2>
            <p className="lede mt-3">
              Takes about 20 seconds, and emergencies get called back first. If you&rsquo;d rather just talk to someone
              right now, the phone is always faster:
            </p>

            <a href={TEL_HREF} className="btn-call mt-4">
              <IconPhone className="h-5 w-5 shrink-0" />
              <span>Call Now: {SITE.phoneDisplay}</span>
            </a>

            <ul className="mt-5 space-y-2.5">
              {reassurances.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-slateblue-light">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-arctic" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-ice p-4">
              <IconClock className="h-6 w-6 shrink-0 text-arctic-deep" />
              <p className="text-sm font-semibold text-slateblue">
                {SITE.hoursShort} &middot; Avg response {SITE.responseTime} in Hancock County
              </p>
            </div>
          </div>

          <RequestForm />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
function Faq() {
  return (
    <section id="faq" className="section">
      <p className="eyebrow">Straight answers</p>
      <h2 className="h2">Questions people ask at 2 a.m.</h2>

      <div className="mt-5 space-y-2.5">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-card">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-extrabold leading-snug text-slateblue-dark">
              {faq.q}
              <IconChevron className="h-5 w-5 shrink-0 text-arctic transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-slateblue-light">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA + footer                                                  */
/* ------------------------------------------------------------------ */
function FinalCall() {
  return (
    <section className="bg-slateblue-dark text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:py-14">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-arctic-light">24/7 Emergency Line</p>
        <h2 className="mt-2 text-[26px] font-extrabold leading-tight sm:text-3xl">
          Your AC isn&rsquo;t going to fix itself. We&rsquo;re awake.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-300">
          Nights, weekends and holidays — including Sunday afternoons in July. Average response across Hancock County:{' '}
          {SITE.responseTime}.
        </p>

        <a href={TEL_HREF} className="btn-call mt-5 sm:text-xl">
          <IconPhone className="h-6 w-6 shrink-0" />
          <span>Call Now: {SITE.phoneDisplay}</span>
        </a>

        <p className="mt-3 text-sm text-slate-400">
          Prefer text or a callback?{' '}
          <a href="#request" className="font-bold text-arctic-light underline underline-offset-4">
            Request service online
          </a>
        </p>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-slateblue-light">
        <p className="text-base font-extrabold text-slateblue-dark">{SITE.name}</p>
        <p className="mt-1.5">
          {SITE.licenseNote} &middot; Diamondhead, Kiln, Bay St. Louis &amp; all of Hancock County, MS
        </p>
        <p className="mt-1.5">
          <a href={TEL_HREF} className="link">
            {SITE.phoneDisplay}
          </a>{' '}
          &middot; {SITE.hours}
        </p>
        <p className="mt-4 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {SITE.name}. Emergency AC repair, blower motor replacement, coil cleaning
          and condenser fan repair in Hancock County, Mississippi.
        </p>
      </div>
    </footer>
  );
}

function initials(name) {
  return name
    .replace(/[^A-Za-z ]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');
}
