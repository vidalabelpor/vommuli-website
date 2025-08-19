import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import VentureCapitalPageClient from './VentureCapitalPageClient';

export const metadata: Metadata = {
  title: 'Venture Capital Introduction Services | Series A, B, C Funding | Vommuli Ventures',
  description: 'Expert venture capital introduction services connecting growth companies with tier-1 VC firms. Specialized in Series A, B, C funding rounds with 67% introduction-to-term-sheet success rate.',
  keywords: [
    'VC deal sourcing services',
    'venture capital deal flow',
    'startup deal sourcing',
    'venture capital introduction',
    'VC introduction services',
    'Series A funding introduction',
    'Series B funding introduction', 
    'Series C funding introduction',
    'venture capital fundraising',
    'VC firm connections',
    'startup funding advisory',
    'growth company financing',
    'institutional VC introductions',
    'tech startup funding',
    'venture capital advisory',
    'VC network access',
    'startup capital raising',
    'venture funding strategy',
    'VC pitch preparation',
    'venture capital consultants',
    'startup fundraising experts',
    'VC introduction specialists',
    'venture capital placement'
  ],
  openGraph: {
    title: 'Venture Capital Introduction Services | Series A, B, C Funding',
    description: 'Expert VC introduction services with 67% success rate connecting growth companies with tier-1 venture capital firms.',
    url: 'https://vommuli.com/services/venture-capital-introduction',
  },
};

export default function VentureCapitalIntroductionPage() {
  return (
    <>
      <VentureCapitalPageClient />
      
      {/* Schema Markup */}
      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What is the success rate for venture capital introductions?",
              answer: "Our venture capital introduction service achieves a 67% introduction-to-term-sheet success rate, which is 12% above the industry average."
            }
          ]
        }}
      />
      
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Venture Capital Introduction Services",
          description: "Expert venture capital introduction services connecting growth companies with tier-1 VC firms for Series A, B, C funding rounds with 67% introduction-to-term-sheet success rate.",
          url: "/services/venture-capital-introduction"
        }}
      />
    </>
  );
}