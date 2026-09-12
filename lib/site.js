/**
 * Single source of truth for business info.
 * Every phone number, city, rating and FAQ lives here so the UI, the
 * structured data, and the meta tags can never drift apart.
 */

export const SITE = {
  name: 'Southern Breeze HVAC Repairs',
  phoneDisplay: '(228) 255-9190',
  phoneTel: '+12282559190',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://southern-breeze-hvac.vercel.app').replace(/\/$/, ''),

  tagline: 'Cold air back in about 45 minutes.',
  hours: 'Open 24/7 — nights, weekends & holidays',
  hoursShort: '24/7 Emergency Line',
  yearsInBusiness: 14,
  licenseNote: 'Licensed & Insured HVAC Technician',
  responseTime: '~45 minutes',
  region: 'Hancock County, Mississippi',
  regionShort: 'Hancock County, MS',
  primaryCity: 'Diamondhead',
  priceRangeNote: 'Honest diagnostics, upfront component replacement pricing',

  rating: {
    value: 4.6,
    count: 38,
    best: 5,
    sources: 'Google, Angi & BBB',
  },

  // Cities the business explicitly covers, with ZIPs for local SEO.
  cities: [
    { name: 'Diamondhead', zip: '39525' },
    { name: 'Kiln', zip: '39556' },
    { name: 'Bay St. Louis', zip: '39520' },
  ],
};

export const TEL_HREF = `tel:${SITE.phoneTel}`;
export const SMS_HREF = `sms:${SITE.phoneTel}`;

export const SERVICES = [
  {
    id: 'ac-emergency-repair',
    icon: 'bolt',
    title: 'AC emergency repair',
    blurb:
      "Warm air, a system that won't turn on, or one that keeps tripping the breaker. We find the actual cause and get you cooling again — same visit whenever the part is on the truck.",
    detail:
      "In South Mississippi, most no-cool calls come down to a capacitor, a clogged drain line, or a choked coil. We check those first because they're the cheapest things to fix.",
  },
  {
    id: 'blower-motor',
    icon: 'wind',
    title: 'Blower motor replacement',
    blurb:
      "Weak airflow, a humming indoor unit, or nothing at all coming out of the vents. A tired blower motor is one of the most common reasons a house stops cooling.",
    detail:
      'You get the replacement price up front, before we pull the old motor out — and you decide from there.',
  },
  {
    id: 'coil-cleaning',
    icon: 'droplet',
    title: 'Coil cleanings',
    blurb:
      'Dirty evaporator coils choke airflow, freeze into a block of ice, and make your system run longer for less cooling. Cleaning them restores airflow and lowers the power bill.',
    detail:
      "A yearly coil cleaning is the cheapest way to add years to a system that's otherwise still working fine.",
  },
  {
    id: 'condenser-fan',
    icon: 'wrench',
    title: 'Condenser fan fixes',
    blurb:
      "Outdoor unit humming but the fan isn't spinning? That's usually a fan motor or a capacitor — and it will overheat the compressor if you keep running it.",
    detail:
      'Shut the system off at the thermostat and call us. Running it like that is how a cheap fix turns into a dead compressor.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Came out to Diamondhead on a Sunday afternoon when our AC went out. Had it blowing cold air in 20 minutes.',
    name: 'Dave R.',
    city: 'Diamondhead',
  },
  {
    quote:
      "Honest diagnostic, didn't try to sell me a whole new system when it just needed a capacitor.",
    name: 'Sarah W.',
    city: 'Kiln',
  },
];

export const FAQS = [
  {
    q: 'Do you charge for estimates or diagnostics?',
    a: "There's a diagnostic charge to get a licensed tech to your door, and we tell you what it is before you agree to anything. After that you get the repair price up front — you approve it before we start. No surprise line items at the end.",
  },
  {
    q: 'How fast can you actually get here?',
    a: `Our average response time in Hancock County is about ${SITE.responseTime.replace('~', '')}. In the middle of a July or August heat wave it can run longer, so call the moment you notice warm air — the sooner you're on the board, the sooner you're back in the cool.`,
  },
  {
    q: 'Is it really 24/7? Will someone answer at 2 a.m. on a Sunday?',
    a: "Yes. The line rings a local technician, not a call center — nights, weekends, holidays, and Sundays. If your AC quits at midnight in August, that's exactly the call we're set up for.",
  },
  {
    q: 'Will you pressure me into a whole new system?',
    a: "No. We're repair-first. If a capacitor, a blower motor, or a fan motor is what's wrong, that's what we replace. If a repair genuinely doesn't make sense, we'll show you the numbers and you decide.",
  },
  {
    q: 'What kinds of jobs do you take?',
    a: 'AC emergency repair, blower motor replacements, coil cleanings, and condenser fan fixes. That\'s what we do all day, all summer, across Hancock County.',
  },
  {
    q: 'Are you licensed, insured, and actually local?',
    a: `Yes — ${SITE.licenseNote}, ${SITE.yearsInBusiness} years in business, based right here in Hancock County. We're not a franchise passing your call to whoever is closest.`,
  },
  {
    q: 'Anything I should check before I call?',
    a: 'Three quick things: set the thermostat to OFF and back to COOL, check the breaker at the panel, and make sure the air filter is not completely choked. If it is still not cooling after that, call us — those checks take a minute and sometimes save you the trip.',
  },
];

export const SERVICE_OPTIONS = [
  'AC emergency repair — not cooling',
  'Blower motor replacement',
  'Coil cleaning',
  'Condenser fan fix',
  'Not sure — I need a diagnosis',
];
