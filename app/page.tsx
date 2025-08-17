import { Metadata } from 'next';
import AnalyticsHero from '@/components/AnalyticsHero';
import AnalyticsFeatures from '@/components/AnalyticsFeatures';
import AnalyticsTestimonial from '@/components/AnalyticsTestimonial';
import AnalyticsFAQ from '@/components/AnalyticsFAQ';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CTASection from '@/components/CTASection';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  title: 'Financial Capital Introduction Services | NYC, Austin, Denver VC & PE Connections | Vommuli Ventures',
  description: 'Expert capital introduction services in New York, Austin, Denver, and nationwide. Connect startups with venture capital, private equity, and angel investors. Specializing in Series A, B, C funding and strategic capital raising.',
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
    'NYC venture capital',
    'Austin startup funding',
    'Denver private equity',
    'Miami venture capital',
    'New York capital introduction',
    'Texas investment advisory',
    'Colorado growth capital',
    'Manhattan venture capital firms',
    'Silicon Hills investors',
    'Wall Street private equity',
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
    siteName: 'Vommuli Ventures',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Vommuli Ventures Capital Introduction Services',
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
      <AnalyticsHero 
        title="Transform Your Financial Future with Data-Driven Capital Introduction"
        subtitle="Connect with the right investors for your startup or growth company. Our expert capital introduction services leverage analytics and market intelligence to match you with venture capital, private equity, and angel investors."
        ctaText="Schedule Consultation"
      />
      <Stats />
      <AnalyticsFeatures 
        title="Expert Capital Introduction Services That Drive Results"
        subtitle="Leverage our proven methodology and extensive network to secure the right investment for your company's growth trajectory."
        features={[
          {
            title: "Venture Capital Connections",
            description: "Access to top-tier VC firms specializing in your industry and stage. From seed to Series C, we connect you with investors who understand your vision.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
              </svg>
            )
          },
          {
            title: "Private Equity Introductions",
            description: "Strategic partnerships with growth capital and private equity firms for scaling businesses ready for the next level of expansion.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.375-.062-2.083-.375" />
              </svg>
            )
          },
          {
            title: "Market Intelligence",
            description: "Data-driven insights on investor preferences, market conditions, and optimal timing to maximize your fundraising success.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            )
          },
          {
            title: "Strategic Advisory",
            description: "End-to-end guidance through the fundraising process, from deck optimization to term sheet negotiation and deal closure.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            )
          },
          {
            title: "Industry Specialization",
            description: "Deep expertise in AI/ML, climate tech, digital infrastructure, healthcare, and emerging technology sectors with specialized investor networks.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            )
          },
          {
            title: "Global Network Access",
            description: "Connections across major financial centers including NYC, Austin, Denver, Miami, and Silicon Valley with international reach.",
            icon: (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            )
          }
        ]}
      />
      <Services />
      <Process />
      <AnalyticsTestimonial 
        quote="Vommuli Ventures delivered exactly what they promised. Their deep understanding of our climate tech sector and strategic investor connections resulted in a successful Series A that exceeded our expectations."
        author="Sarah Martinez"
        title="CEO & Co-founder"
        company="GreenTech Innovations"
        companyLogos={[
          {
            name: "Sequoia Capital",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">Sequoia</span>
              </div>
            )
          },
          {
            name: "Andreessen Horowitz",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">a16z</span>
              </div>
            )
          },
          {
            name: "First Round",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">First Round</span>
              </div>
            )
          },
          {
            name: "Bessemer",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">Bessemer</span>
              </div>
            )
          },
          {
            name: "NEA",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">NEA</span>
              </div>
            )
          },
          {
            name: "Greylock",
            logo: (
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-600">Greylock</span>
              </div>
            )
          }
        ]}
      />
      <AnalyticsFAQ 
        title="Frequently asked questions"
        subtitle="Everything you need to know about our capital introduction services and process."
        faqs={[
          {
            question: "What is your typical timeline for securing investment?",
            answer: "Our typical engagement timeline is 3-6 months from initial consultation to term sheet. This includes market preparation, investor identification, introduction coordination, and negotiation support. Timeline varies based on company readiness and market conditions."
          },
          {
            question: "What types of companies do you work with?",
            answer: "We specialize in growth-stage companies seeking Series A through Series C funding, with particular expertise in AI/ML, climate tech, digital infrastructure, and healthcare sectors. We work with companies that have proven traction and are ready to scale."
          },
          {
            question: "How do you get paid for your services?",
            answer: "We work on a success-fee basis, typically charging 3-5% of the funding amount raised. We also offer retainer-based engagements for ongoing advisory services. No payment is required unless we successfully help you secure investment."
          },
          {
            question: "What geographic markets do you cover?",
            answer: "We have deep networks across major financial centers including New York, Austin, Denver, Miami, and Silicon Valley, with expanding international reach in London and Asia-Pacific markets."
          },
          {
            question: "Do you provide ongoing support after funding?",
            answer: "Yes, we offer post-funding advisory services including board preparation, investor relations, and preparation for subsequent funding rounds. Many clients engage us for Series B and C rounds after successful initial partnerships."
          },
          {
            question: "What information do you need to get started?",
            answer: "We'll need your pitch deck, financial projections, cap table, and a brief overview of your funding objectives. During our initial consultation, we'll assess your readiness and provide recommendations for market preparation."
          }
        ]}
      />
      <CTASection />
    </main>
  );
}
