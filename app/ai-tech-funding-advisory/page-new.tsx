import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicePageHero from '@/components/ServicePageHero';
import StandardFAQ from '@/components/StandardFAQ';
import { aiFaqs } from './AIFundingFAQ';

export const metadata: Metadata = {
  title: 'AI & Tech Funding Advisory | Artificial Intelligence Startup Capital Introduction | Vommuli',
  description: 'Specialized AI and technology funding advisory services. Expert introductions to AI-focused VCs and tech investors with deep understanding of machine learning, deep tech, and artificial intelligence markets.',
  keywords: [
    'AI funding advisory',
    'artificial intelligence funding',
    'AI startup funding',
    'tech funding advisory',
    'AI venture capital',
    'machine learning funding',
    'deep tech funding',
    'AI investment advisory',
    'technology startup capital',
    'AI VC introductions',
    'artificial intelligence investors',
    'tech startup fundraising',
    'AI capital introduction',
    'deep tech investors',
    'AI seed funding',
    'AI Series A funding',
    'machine learning VC',
    'AI technology funding',
    'artificial intelligence capital',
    'tech innovation funding',
    'generative AI funding',
    'AI infrastructure funding',
    'AI investment banking',
    'technology capital raising',
    'AI fundraising services'
  ],
  openGraph: {
    title: 'AI & Tech Funding Advisory | Artificial Intelligence Investment Services',
    description: 'Specialized funding advisory for AI and technology companies. Connect with AI-focused VCs and tech investors for seed, Series A, B, C funding rounds.',
    url: 'https://vommuli.com/ai-tech-funding-advisory',
    siteName: 'Vommuli Ventures',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Vommuli AI & Tech Funding Advisory Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://vommuli.com/ai-tech-funding-advisory',
  },
};

export default function AITechFundingAdvisoryPage() {
  const heroStats = [
    { value: '85+', label: 'AI-Focused VCs' },
    { value: '$45B+', label: 'AI Capital Access' },
    { value: '76%', label: 'Success Rate' },
    { value: '40%', label: 'Faster Funding' }
  ];

  const keyBenefits = [
    'Specialized AI investor network access',
    'Technical due diligence preparation',
    'Model performance validation support',
    'AI market positioning strategy'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicePageHero
        title="AI & Tech Funding Advisory"
        subtitle="Specialized Capital Introduction for Artificial Intelligence Companies"
        description="Expert funding advisory services connecting AI and technology companies with specialized venture capital, private equity, and strategic investors who understand machine learning, deep tech, and artificial intelligence markets."
        keyBenefits={keyBenefits}
        stats={heroStats}
        iconColor="text-primary-600"
      />

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              Why AI Companies Need <span className="text-gradient">Specialized Funding</span>
            </h2>
            <p className="text-xl text-secondary-600 leading-relaxed">
              AI companies face unique challenges in fundraising, from technical validation complexity to specialized investor requirements. Our deep understanding of both AI technology and investor evaluation criteria ensures optimal outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Technical Validation</h3>
              <p className="text-secondary-600">
                Comprehensive model performance analysis, scalability assessment, and bias testing to meet investor technical due diligence requirements.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Investor Matching</h3>
              <p className="text-secondary-600">
                Access to 85+ AI-specialized VCs, including tier-1 funds, AI-native investors, and corporate strategic partners managing $45B+ in AI capital.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Market Positioning</h3>
              <p className="text-secondary-600">
                Strategic positioning framework highlighting technical moats, competitive advantages, and scalability potential specific to AI markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Market Insights */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              AI Funding <span className="text-gradient">Market Insights</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Current trends and opportunities in AI startup funding across all stages and verticals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="card-subtle">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Hot AI Segments (YoY Growth)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Generative AI Applications</span>
                    <span className="text-accent-600 font-semibold">+127%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">AI Infrastructure & Tools</span>
                    <span className="text-accent-600 font-semibold">+89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Enterprise AI Platforms</span>
                    <span className="text-accent-600 font-semibold">+71%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">AI Security Solutions</span>
                    <span className="text-accent-600 font-semibold">+56%</span>
                  </div>
                </div>
              </div>

              <div className="card-subtle">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Valuation Ranges by Stage</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Pre-Seed AI</span>
                    <span className="text-primary-600 font-semibold">$5M-15M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Seed AI</span>
                    <span className="text-primary-600 font-semibold">$15M-50M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Series A AI</span>
                    <span className="text-primary-600 font-semibold">$50M-150M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Series B AI</span>
                    <span className="text-primary-600 font-semibold">$150M-500M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elevated">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">AI Premium Factors</h3>
                <p className="text-secondary-600 mb-6">
                  AI companies command 2-3x valuation premiums over traditional software, with additional multipliers based on specific advantages.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Proven AI Team</span>
                    <span className="text-primary-600 font-bold">2-3x</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Technical Moats</span>
                    <span className="text-accent-600 font-bold">1.5-2x</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Enterprise Traction</span>
                    <span className="text-secondary-600 font-bold">2x</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <span className="text-secondary-700 font-medium">Hot AI Segments</span>
                    <span className="text-secondary-600 font-bold">1.5x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
              AI Funding <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-secondary-600">
              Our specialized methodology for AI company fundraising success.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Technical Assessment',
                description: 'Comprehensive model performance validation, scalability analysis, and competitive differentiation review.'
              },
              {
                step: '02',
                title: 'Market Positioning',
                description: 'Strategic positioning based on AI market trends, customer validation, and competitive landscape analysis.'
              },
              {
                step: '03',
                title: 'Investor Matching',
                description: 'Targeted introductions to AI-specialized VCs, corporate strategic investors, and international AI capital.'
              },
              {
                step: '04',
                title: 'Deal Execution',
                description: 'Technical due diligence support, term sheet negotiation, and ongoing investor relationship management.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ
        title="AI Funding Frequently Asked Questions"
        subtitle="Get expert answers to the most common questions about AI startup funding and our specialized advisory services."
        faqs={aiFaqs}
        showCategoryFilter={true}
      />

      {/* Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "AI & Tech Funding Advisory Services",
          description: "Specialized AI and technology funding advisory services with expert introductions to AI-focused VCs and deep understanding of machine learning, deep tech, and artificial intelligence markets.",
          url: "https://vommuli.com/ai-tech-funding-advisory"
        }}
      />

      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: aiFaqs.slice(0, 10).map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />
    </div>
  );
}