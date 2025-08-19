import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Capital Introduction Services | Series A, Private Equity & M&A Advisory | Vommuli',
  description: 'Premium capital introduction services: Series A venture capital, private equity fundraising, growth capital, and M&A advisory. 73% success rate with institutional investor networks.',
  keywords: [
    'capital introduction services',
    'Series A venture capital',
    'private equity fundraising',
    'growth capital advisory',
    'M&A transaction advisory',
    'institutional investor network',
    'venture capital introduction',
    'startup funding services',
    'capital raising advisory',
    'investment banking services'
  ],
  openGraph: {
    title: 'Capital Introduction Services | Series A, Private Equity & M&A Advisory',
    description: 'Premium capital introduction platform connecting institutional-quality companies with tier-1 investors.',
    url: 'https://vommuli.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageClient />
      
      {/* Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Capital Introduction Services",
          description: "Premium capital introduction services connecting institutional-quality companies with tier-1 investors across venture capital, private equity, and growth capital markets.",
          url: "/services"
        }}
      />
    </>
  );
}