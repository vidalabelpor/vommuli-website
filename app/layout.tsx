import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import { JsonLd } from 'react-schemaorg';

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
    default: 'Vommuli Financial Capital Introduction Services | Venture Capital & Private Equity',
    template: '%s | Vommuli Financial Services'
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
  authors: [{ name: 'Vommuli Financial Services' }],
  creator: 'Vommuli Financial Services',
  publisher: 'Vommuli Financial Services',
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
    title: 'Vommuli Financial Capital Introduction Services',
    description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors.',
    siteName: 'Vommuli Financial Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vommuli Financial Capital Introduction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vommuli Financial Capital Introduction Services',
    description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/merriweather-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Schema.org structured data */}
        <JsonLd
          type="FinancialService"
          data={{
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Vommuli Financial Capital Introduction Services",
            "description": "Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors.",
            "url": "https://vommuli.com",
            "logo": "https://vommuli.com/logo.png",
            "sameAs": [
              "https://linkedin.com/company/vommuli-financial",
              "https://twitter.com/vommuli_financial"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-0123",
              "contactType": "customer service",
              "email": "info@vommuli.com"
            },
            "serviceType": [
              "Capital Introduction",
              "Venture Capital Services",
              "Private Equity Connections",
              "Angel Investor Network",
              "Startup Funding Advisory"
            ],
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Financial Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Seed Funding Introduction",
                    "description": "Connect early-stage startups with seed investors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Series A Funding",
                    "description": "Connect growth-stage companies with Series A investors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Private Equity Connections",
                    "description": "Connect established companies with private equity firms"
                  }
                }
              ]
            }
          }}
        />
        
        {/* Organization schema */}
        <JsonLd
          type="Organization"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vommuli Financial Services",
            "url": "https://vommuli.com",
            "logo": "https://vommuli.com/logo.png",
            "description": "Leading financial capital introduction services for startups and growth companies",
            "foundingDate": "2024",
            "industry": "Financial Services",
            "numberOfEmployees": "10-50"
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
