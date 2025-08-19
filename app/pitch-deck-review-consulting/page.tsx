import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import PitchDeckHero from '@/components/service-pages/PitchDeckHero';
import PitchDeckProcess from '@/components/service-pages/PitchDeckProcess';
import PitchDeckExamples from '@/components/service-pages/PitchDeckExamples';
import PitchDeckPricing from '@/components/service-pages/PitchDeckPricing';
import PitchDeckFAQ from '@/components/service-pages/PitchDeckFAQ';
import CTASection from '@/components/CTASection';
import InternalLinkingSystem, { CrossSell } from '@/components/InternalLinking';

export const metadata: Metadata = generateMetadata(seoConfigs.pitchDeckOptimization);

export default function PitchDeckReviewConsultingPage() {
  return (
    <main className="min-h-screen">
      <PitchDeckHero />
      <PitchDeckProcess />
      
      {/* Related Services - Strategic Internal Linking */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Complete Your Fundraising Strategy
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Beyond pitch deck optimization - comprehensive services for successful fundraising
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/pitch-deck-review-consulting"
            context="service"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      <PitchDeckExamples />
      <PitchDeckPricing />
      
      {/* Cross-sell after pricing */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <CrossSell 
            currentService="pitch-deck"
            className="mb-8"
          />
        </div>
      </section>

      <PitchDeckFAQ />
      <CTASection />
    </main>
  );
}