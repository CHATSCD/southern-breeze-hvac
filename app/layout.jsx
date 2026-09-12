import './globals.css';
import { SITE } from '@/lib/site';
import Header from './components/Header';
import StickyCallBar from './components/StickyCallBar';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Emergency AC Repair, Diamondhead MS | Southern Breeze HVAC',
  description:
    '24/7 emergency AC repair in Diamondhead, Kiln & Bay St. Louis, MS. Licensed & insured, 14 years local, ~45-min average response. Call (228) 255-9190.',
  applicationName: SITE.name,
  category: 'HVAC',
  keywords: [
    'emergency AC repair Diamondhead MS',
    'AC repair Diamondhead Mississippi',
    '24 hour AC repair Hancock County',
    'HVAC repair Bay St. Louis MS',
    'AC not cooling Kiln MS',
    'blower motor replacement Mississippi Gulf Coast',
    'coil cleaning Bay St. Louis',
    'condenser fan repair Diamondhead',
    'emergency HVAC technician near me',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    title: 'Emergency AC Repair in Diamondhead, MS — 24/7 | Southern Breeze HVAC',
    description:
      'Cold air back in ~45 minutes. 24/7 AC emergency repair, blower motors, coil cleanings & condenser fan fixes across Hancock County, MS. Call (228) 255-9190.',
  },
  twitter: {
    card: 'summary',
    title: 'Emergency AC Repair in Diamondhead, MS — 24/7',
    description:
      'Avg response ~45 min across Hancock County, MS. Licensed & insured, 14 years. Call (228) 255-9190.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06B6D4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        Bottom padding reserves space for the always-visible sticky call bar.
        Note the underscores: Tailwind turns them into the spaces that CSS calc() requires.
      */}
      <body className="pb-[calc(88px_+_env(safe-area-inset-bottom))] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-slateblue-dark focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <StickyCallBar />
      </body>
    </html>
  );
}
