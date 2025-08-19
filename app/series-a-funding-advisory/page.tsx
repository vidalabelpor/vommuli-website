import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import SeriesAHero from '@/components/service-pages/SeriesAHero';
import SeriesAProcess from '@/components/service-pages/SeriesAProcess';
import SeriesAPricing from '@/components/service-pages/SeriesAPricing';
import SeriesATimeline from '@/components/service-pages/SeriesATimeline';
import SeriesACaseStudies from '@/components/service-pages/SeriesACaseStudies';
import SeriesAFAQ from '@/components/service-pages/SeriesAFAQ';
import CTASection from '@/components/CTASection';
import InternalLinkingSystem, { CrossSell } from '@/components/InternalLinking';

export const metadata: Metadata = generateMetadata(seoConfigs.seriesAFunding);

export default function SeriesAFundingAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <SeriesAHero />
      <SeriesAProcess />
      
      {/* Related Services - Strategic Internal Linking */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Related Services & Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive solutions to support your Series A fundraising success
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/series-a-funding-advisory"
            context="service"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      <SeriesATimeline />
      <SeriesAPricing />
      
      {/* Cross-sell after pricing */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <CrossSell 
            currentService="series-a"
            className="mb-8"
          />
        </div>
      </section>

      <SeriesACaseStudies />
      <SeriesAFAQ />
      <CTASection />
    </main>
  );
}