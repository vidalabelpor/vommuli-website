import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import PitchDeckHero from '@/components/service-pages/PitchDeckHero';
import PitchDeckProcess from '@/components/service-pages/PitchDeckProcess';
import PitchDeckExamples from '@/components/service-pages/PitchDeckExamples';
import PitchDeckPricing from '@/components/service-pages/PitchDeckPricing';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = generateMetadata(seoConfigs.pitchDeckOptimization);

export default function PitchDeckReviewConsultingPage() {
  return (
    <main className="min-h-screen">
      <PitchDeckHero />
      <PitchDeckProcess />
      <PitchDeckExamples />
      <PitchDeckPricing />
      <CTASection />
    </main>
  );
}