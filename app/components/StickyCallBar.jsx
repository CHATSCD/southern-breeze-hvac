import { SITE, TEL_HREF } from '@/lib/site';
import { IconPhone } from './icons';

/**
 * Always-visible bottom call bar.
 * One tap from anywhere on the page to a live phone call, on every device.
 */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/97 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 py-2.5">
        <a
          href={TEL_HREF}
          className="btn-call flex-1 py-3.5 text-base sm:text-lg"
          aria-label={`Call Southern Breeze HVAC Repairs now at ${SITE.phoneDisplay}`}
        >
          <IconPhone className="h-5 w-5 shrink-0" />
          <span>Call Now: {SITE.phoneDisplay}</span>
        </a>
        <a
          href="#request"
          className="hidden shrink-0 items-center justify-center rounded-2xl border border-slate-300 px-4 py-3.5 text-sm font-bold text-slateblue transition hover:border-arctic hover:text-arctic-deep sm:flex"
        >
          Request service
        </a>
      </div>
    </div>
  );
}
