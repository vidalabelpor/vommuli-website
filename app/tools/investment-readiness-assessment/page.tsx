import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo-utils';
import InvestmentReadinessAssessment from '@/components/tools/InvestmentReadinessAssessment';

const seoConfig = {
  title: 'Investment Readiness Assessment Tool | Vommuli Ventures',
  description: 'Free 5-minute investment readiness assessment for startups. Get your personalized readiness score and Series A preparation roadmap. 95% accuracy rate.',
  keywords: [
    'investment readiness assessment',
    'startup funding assessment',
    'Series A readiness',
    'investor readiness evaluation',
    'fundraising preparation quiz',
    'startup assessment tool'
  ],
  canonical: '/tools/investment-readiness-assessment',
  openGraph: {
    title: 'Free Investment Readiness Assessment | Get Your Funding Score',
    description: 'Discover your startup\'s investment readiness with our expert assessment tool',
    image: '/og-assessment-tool.jpg',
    type: 'website' as const
  }
};

export const metadata: Metadata = generateMetadata(seoConfig);

export default function InvestmentReadinessAssessmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <InvestmentReadinessAssessment />
    </main>
  );
}