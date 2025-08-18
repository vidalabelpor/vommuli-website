import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import SeriesAHero from '@/components/service-pages/SeriesAHero';
import SeriesAProcess from '@/components/service-pages/SeriesAProcess';
import SeriesAPricing from '@/components/service-pages/SeriesAPricing';
import SeriesATimeline from '@/components/service-pages/SeriesATimeline';
import SeriesACaseStudies from '@/components/service-pages/SeriesACaseStudies';
import SeriesAFAQ from '@/components/service-pages/SeriesAFAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = generateMetadata(seoConfigs.seriesAFunding);

export default function SeriesAFundingAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <SeriesAHero />
      <SeriesAProcess />
      <SeriesATimeline />
      <SeriesAPricing />
      <SeriesACaseStudies />
      <SeriesAFAQ />
      <CTASection />
    </main>
  );
}