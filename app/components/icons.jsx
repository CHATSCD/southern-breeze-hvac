/**
 * Inline SVG icon set.
 * All icons are hand-rolled strokes on currentColor: no icon library,
 * no font file, no image request. Total cost: a few hundred bytes of markup.
 */

const stroke = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function IconPhone({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function IconSnowflake({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 2v20" />
      <path d="M4.2 6.5l15.6 11" />
      <path d="M19.8 6.5l-15.6 11" />
    </svg>
  );
}

export function IconBolt({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

export function IconWind({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  );
}

export function IconDroplet({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.4 0L12 2.7Z" />
    </svg>
  );
}

export function IconWrench({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </svg>
  );
}

export function IconShieldCheck({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconClock({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.5 2" />
    </svg>
  );
}

export function IconMapPin({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M21 10c0 5.5-9 12-9 12s-9-6.5-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconCheck({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function IconChevron({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrowRight({ className = '' }) {
  return (
    <svg {...stroke} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconStar({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M12 2.4l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.42l-5.88 3.09 1.12-6.55L2.48 9.32l6.58-.96L12 2.4Z" />
    </svg>
  );
}
