import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicePageHero from '@/components/ServicePageHero';
import StandardFAQ from '@/components/StandardFAQ';
import { vcFaqs } from './VCIntroductionFAQ';

export const metadata: Metadata = {
  title: 'Venture Capital Introduction Services | Series A, B, C Funding | Vommuli Ventures',
  description: 'Expert venture capital introduction services connecting growth companies with tier-1 VC firms. Specialized in Series A, B, C funding rounds with 67% introduction-to-term-sheet success rate.',
  keywords: [
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
    url: 'https://vommuli.com/venture-capital-introduction',
  },
};

export default function VentureCapitalIntroductionPage() {
  const heroData = {
    title: "Venture Capital Introduction Services",
    subtitle: "Series A, B & C Funding Specialists",
    description: "Expert venture capital introduction services connecting growth companies with tier-1 VC firms. Our specialized approach achieves a 67% introduction-to-term-sheet success rate through strategic positioning and established relationships with 200+ venture capital firms.",
    keyBenefits: [
      "67% Introduction-to-Term-Sheet Success Rate",
      "200+ Tier-1 VC Firm Network Access",
      "Strategic Positioning & Pitch Optimization",
      "Comprehensive Due Diligence Support"
    ],
    stats: [
      { value: "67%", label: "Success Rate" },
      { value: "200+", label: "VC Partners" },
      { value: "3-9mo", label: "Average Timeline" },
      { value: "$2M-200M", label: "Funding Range" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        type="service"
        data={{
          name: "Venture Capital Introduction Services",
          description: "Expert venture capital introduction services connecting growth companies with tier-1 VC firms for Series A, B, and C funding rounds.",
          url: "/venture-capital-introduction"
        }}
      />

      {/* Hero Section */}
      <ServicePageHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        keyBenefits={heroData.keyBenefits}
        stats={heroData.stats}
        primaryCTA="Start Your VC Introduction"
        secondaryCTA="Schedule Consultation"
      />

      {/* Service Features Section */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Complete VC Introduction <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From strategic positioning to successful term sheet negotiation, we guide you through every step of the venture capital introduction process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Strategic VC Matching</h3>
              <p className="text-secondary-600 mb-6">
                Intelligent matching with 200+ tier-1 venture capital firms based on sector focus, stage preference, investment thesis, and portfolio synergies.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Series A, B, C specialist VCs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Sector-focused investment teams
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  International VC network access
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Pitch Optimization</h3>
              <p className="text-secondary-600 mb-6">
                Strategic positioning and pitch deck refinement to maximize VC engagement and interest, tailored to specific investor preferences and market conditions.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  VC-focused pitch deck design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Financial model optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Market positioning strategy
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Deal Execution</h3>
              <p className="text-secondary-600 mb-6">
                End-to-end support through due diligence, term sheet negotiation, and closing processes with dedicated expertise for complex VC transactions.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Due diligence coordination
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Term sheet negotiation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Legal & financial coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ
        title="Venture Capital Introduction FAQ"
        subtitle="Get answers to the most common questions about our VC introduction services and how we help companies secure venture capital funding."
        faqs={vcFaqs}
        showCategoryFilter={true}
      />
    </div>
  );
}