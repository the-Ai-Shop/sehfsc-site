import type { Metadata } from 'next';
import { PT_Serif, PT_Sans } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-serif',
  display: 'swap',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans',
  display: 'swap',
});

// Non-critical: load client-side only
const EditBridge = dynamic(() => import('@/components/EditBridge'), { ssr: false });
const EmergencyBanner = dynamic(() => import('@/components/EmergencyBanner'), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL('https://sehfsc.org'),
  title: {
    default: 'San Elijo Hills Fire Safe Council — Wildfire Preparedness for San Elijo Hills',
    template: '%s — San Elijo Hills Fire Safe Council',
  },
  description:
    'The San Elijo Hills Fire Safe Council educates and prepares our community for wildfire emergencies. Resources for fire prevention, preparation, and evacuation in San Elijo Hills, San Marcos, CA.',
  keywords: [
    'San Elijo Hills Fire Safe Council',
    'SEHFSC',
    'wildfire preparedness',
    'fire prevention San Marcos',
    'defensible space',
    'Firewise USA',
    'evacuation plan San Elijo Hills',
    'fire safety community',
    'San Marcos CA wildfire',
    'fire safe council San Diego',
  ],
  alternates: { canonical: 'https://sehfsc.org' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/SEHFSC_logo.png' },
  openGraph: {
    title: 'San Elijo Hills Fire Safe Council',
    description:
      'Educating and preparing our community for wildfire emergencies. Fire prevention, preparation, and evacuation resources for San Elijo Hills.',
    url: 'https://sehfsc.org',
    siteName: 'San Elijo Hills Fire Safe Council',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Elijo Hills Fire Safe Council',
    description: 'Wildfire preparedness and community fire safety for San Elijo Hills, San Marcos, CA.',
    images: ['/images/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://sehfsc.org/#website',
      url: 'https://sehfsc.org',
      name: 'San Elijo Hills Fire Safe Council',
      description: 'Wildfire preparedness and community fire safety for San Elijo Hills',
    },
    {
      '@type': 'NGO',
      '@id': 'https://sehfsc.org/#organization',
      name: 'San Elijo Hills Fire Safe Council',
      alternateName: 'SEHFSC',
      url: 'https://sehfsc.org',
      email: 'info@sehfsc.org',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '310 South Twin Oaks Valley Road #107-238',
        addressLocality: 'San Marcos',
        addressRegion: 'CA',
        postalCode: '92078',
        addressCountry: 'US',
      },
      description:
        'The San Elijo Hills Fire Safe Council is a 501(c)3 nonprofit organization that educates and prepares the community for wildfire emergencies.',
      sameAs: [
        'https://facebook.com/sehfsc',
        'https://instagram.com/sehfsc',
        'https://youtube.com/@SEHFSC',
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${ptSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f5f4f0] text-gray-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <EmergencyBanner />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <EditBridge />
      </body>
    </html>
  );
}
