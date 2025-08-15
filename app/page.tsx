import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  title: 'Financial Capital Introduction Services | Venture Capital & Private Equity Connections',
  description: 'Expert financial capital introduction services connecting startups and growth-stage companies with venture capital, private equity, and angel investors. Specializing in seed funding, Series A, B, C rounds, and strategic capital raising. Get connected with the right investors today.',
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
    'business funding',
    'capital introduction firm',
    'investor matchmaking',
    'startup investment',
    'venture funding',
    'private equity investment'
  ],
  openGraph: {
    title: 'Financial Capital Introduction Services | Venture Capital & Private Equity',
    description: 'Connect with the right investors for your startup or growth company. Expert capital introduction services for seed funding, Series A, B, C rounds, and strategic investments.',
    url: 'https://vommuli.com',
    siteName: 'Vommuli Financial Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vommuli Financial Capital Introduction Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vommuli.com',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
