import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AccessibilityEnhancements from '@/components/AccessibilityEnhancements';
import './globals.css';
import '../styles/mobile-optimizations.css';
import '../styles/accessibility-enhancements.css';

// Optimized font loading for LCP performance
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false, // Prevent layout shift
});

const merriweather = Merriweather({ 
  weight: ['400', '700'], // Only essential weights
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
  adjustFontFallback: false, // Prevent layout shift
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
        
        
        {/* Critical Resource Preloading for LCP Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Font Preloading - Critical for LCP */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" as="style" />
        
        {/* DNS prefetch for analytics domains */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//vercel-insights.com" />
        
{/* Google Analytics moved to bottom for performance */}
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="3yjR-7uzWoJg_2ksYRUe4NJyIpOOcnEbOw3NfbhG5e4" />
        
        {/* Schema.org structured data */}
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="website" />
        
{/* Core Web Vitals tracking disabled during LCP optimization */}
        {/* Will re-enable after LCP is fixed */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <PerformanceMonitor />
        <AccessibilityEnhancements />
        <Analytics />
        <SpeedInsights />
        
        {/* Deferred Google Analytics 4 for optimal LCP performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function loadGA() {
                  const script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-GCD27WFY2P';
                  script.async = true;
                  document.head.appendChild(script);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-GCD27WFY2P');
                }
                
                // Load GA after critical rendering
                if (document.readyState === 'complete') {
                  setTimeout(loadGA, 100);
                } else {
                  window.addEventListener('load', () => setTimeout(loadGA, 100));
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
