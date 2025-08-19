import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Stats from '@/components/Stats';
import ClientLogos from '@/components/ClientLogos';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import TechnicalSEO from '@/components/TechnicalSEO';

export const metadata: Metadata = {
  ...generateMetadata(seoConfigs.homepage),
  keywords: [
    ...seoConfigs.homepage.keywords!,
    // Phase 1 research: Quick-win keywords for homepage
    'VC deal sourcing services',
    'venture capital deal flow', 
    'startup deal sourcing',
    'investment readiness assessment',
    'Series A preparation checklist'
  ]
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ClientLogos />
      <Stats />
      <Services />
      
      {/* Strategic Internal Links - Pass homepage authority to key services */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Start Your Fundraising Journey
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive services designed to help startups successfully raise Series A funding
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/"
            context="home"
            maxLinks={4}
            layout="grid"
            showDescriptions={true}
            className="mb-12"
          />
          
          {/* Quick Navigation for key conversion paths */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-6">
              Popular Resources:
            </h3>
            <QuickNavigation />
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
