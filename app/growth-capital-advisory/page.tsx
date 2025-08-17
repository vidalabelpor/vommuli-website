import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicePageHero from '@/components/ServicePageHero';
import StandardFAQ from '@/components/StandardFAQ';
import { growthCapitalFaqs } from './GrowthCapitalFAQ';

export const metadata: Metadata = {
  title: 'Growth Capital Advisory Services | Growth Equity Funding | Vommuli Ventures',
  description: 'Expert growth capital advisory services connecting scaling companies with growth equity firms. Strategic financing for revenue-generating businesses ready for accelerated expansion.',
  keywords: [
    'growth capital advisory',
    'growth equity funding',
    'growth capital firms',
    'expansion capital advisory',
    'scaling business funding',
    'growth equity introduction',
    'revenue stage funding',
    'growth capital consultants',
    'expansion financing advisory',
    'growth equity placement',
    'scaling company advisory',
    'growth stage funding',
    'minority growth capital',
    'growth equity specialists',
    'expansion capital introduction',
    'growth capital intermediary',
    'growth equity advisory',
    'scaling finance advisory',
    'growth investment advisory',
    'expansion funding specialists'
  ],
  openGraph: {
    title: 'Growth Capital Advisory Services | Growth Equity Funding',
    description: 'Expert growth capital advisory connecting scaling companies with growth equity firms for strategic expansion financing.',
    url: 'https://vommuli.com/growth-capital-advisory',
  },
};

export default function GrowthCapitalAdvisoryPage() {
  const heroData = {
    title: "Growth Capital Advisory Services",
    subtitle: "Strategic Expansion Financing Specialists",
    description: "Expert growth capital advisory services connecting proven, revenue-generating companies with growth equity firms. Our specialized approach focuses on strategic expansion financing for businesses ready to scale operations, enter new markets, and accelerate growth trajectories.",
    keyBenefits: [
      "100+ Growth Equity Firm Network",
      "Proven Business Model Focus",
      "Strategic Growth Planning",
      "Operational Excellence Support"
    ],
    stats: [
      { value: "100+", label: "Growth Partners" },
      { value: "$5M-50M", label: "Funding Range" },
      { value: "4-8mo", label: "Average Timeline" },
      { value: "78%", label: "Success Rate" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        type="service"
        data={{
          name: "Growth Capital Advisory Services",
          description: "Expert growth capital advisory services connecting proven companies with growth equity firms for strategic expansion financing.",
          url: "/growth-capital-advisory"
        }}
      />

      {/* Hero Section */}
      <ServicePageHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        keyBenefits={heroData.keyBenefits}
        stats={heroData.stats}
        primaryCTA="Start Your Growth Journey"
        secondaryCTA="Schedule Consultation"
      />

      {/* Service Features Section */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Complete Growth Capital <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From strategic assessment to successful capital deployment, we guide scaling companies through every step of the growth capital funding process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Strategic Growth Planning</h3>
              <p className="text-secondary-600 mb-6">
                Comprehensive growth strategy development and market expansion planning to position companies for optimal growth equity investment.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Market expansion strategy
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Operational scaling plans
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Revenue growth modeling
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Growth Equity Matching</h3>
              <p className="text-secondary-600 mb-6">
                Targeted identification and introduction to growth equity firms that align with your business model, growth stage, and expansion objectives.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  100+ growth equity partners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Sector expertise matching
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Strategic value-add focus
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Execution Excellence</h3>
              <p className="text-secondary-600 mb-6">
                Full-service transaction support including due diligence preparation, term negotiation, and post-closing growth acceleration planning.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Due diligence preparation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Term sheet optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Growth acceleration planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Readiness Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Growth Capital <span className="text-gradient">Readiness</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Understanding the key criteria for growth capital investment and positioning your business for success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Proven Revenue Model</h3>
                  <p className="text-secondary-600">
                    Established revenue streams with $5M+ ARR and demonstrated growth trajectory showing consistent market demand.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Scalable Business Model</h3>
                  <p className="text-secondary-600">
                    Clear path to scale operations, expand market presence, and achieve significant growth without fundamental business model changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Strong Management Team</h3>
                  <p className="text-secondary-600">
                    Experienced leadership with proven track record of execution and ability to scale operations effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Clear Growth Opportunities</h3>
                  <p className="text-secondary-600">
                    Identified market expansion opportunities, product development potential, or operational improvements that capital can accelerate.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:text-center">
              <div className="card-brand p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Scale?</h3>
                <p className="text-primary-100 mb-8">
                  Our growth capital readiness assessment helps identify optimization opportunities and positions your business for successful growth equity fundraising.
                </p>
                <button className="btn-accent w-full">
                  Get Growth Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ
        title="Growth Capital Advisory FAQ"
        subtitle="Get answers to the most common questions about our growth capital services and how we help scaling companies secure expansion financing."
        faqs={growthCapitalFaqs}
        showCategoryFilter={true}
      />
    </div>
  );
}