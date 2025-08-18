import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vommuli Ventures Capital Introduction Services | Venture Capital & Private Equity',
    template: '%s | Vommuli Ventures'
  },
  description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors. Specializing in seed funding, Series A, B, C rounds, and strategic capital raising.',
  keywords: [
    'financial capital introduction',
    'venture capital services',
    'private equity connections',
    'angel investor network',
    'startup funding',
    'capital raising advisory',
    'Series A funding',
    'Series B funding',
    'Series C funding',
    'seed funding',
    'growth capital',
    'investment advisory',
    'fundraising services',
    'startup capital',
    'business funding'
  ],
  authors: [{ name: 'Vommuli Ventures' }],
  creator: 'Vommuli Ventures',
  publisher: 'Vommuli Ventures',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vommuli.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vommuli.com',
    title: 'Vommuli Ventures Capital Introduction Services',
    description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors.',
    siteName: 'Vommuli Ventures',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Vommuli Ventures Capital Introduction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vommuli Ventures Capital Introduction Services',
    description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors.',
    images: ['/icon-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3yjR-7uzWoJg_2ksYRUe4NJyIpOOcnEbOw3NfbhG5e4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GCD27WFY2P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GCD27WFY2P');
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="3yjR-7uzWoJg_2ksYRUe4NJyIpOOcnEbOw3NfbhG5e4" />
        
        {/* Schema.org structured data */}
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="website" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <PerformanceMonitor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
