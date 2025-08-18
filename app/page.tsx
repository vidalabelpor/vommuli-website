import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Stats from '@/components/Stats';

export const metadata: Metadata = generateMetadata(seoConfigs.homepage);

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
