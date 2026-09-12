import { SITE, TEL_HREF } from '@/lib/site';
import { IconPhone, IconSnowflake } from './icons';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#area', label: 'Service Area' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#request', label: 'Request Service' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5">
        <a href="#main" className="flex min-w-0 items-center gap-2">
          <IconSnowflake className="h-6 w-6 shrink-0 text-arctic" />
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-extrabold leading-tight text-slateblue-dark">
              {SITE.name}
            </span>
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.14em] text-arctic-deep">
              24/7 Emergency &middot; Hancock County, MS
            </span>
          </span>
        </a>

        <nav
          aria-label="Page sections"
          className="ml-auto hidden items-center gap-5 text-sm font-semibold text-slateblue-light lg:flex"
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-arctic-deep">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={TEL_HREF}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-arctic px-4 py-2 text-sm font-extrabold text-white transition hover:bg-arctic-dark lg:flex"
        >
          <IconPhone className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>
      </div>

      {/* Mobile: one scrollable row of anchor pills, no hamburger menu to open. */}
      <nav aria-label="Page sections" className="flex gap-1.5 overflow-x-auto px-3 pb-2 lg:hidden">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slateblue-light transition active:border-arctic active:text-arctic-deep"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
