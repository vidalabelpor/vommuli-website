import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicePageHero from '@/components/ServicePageHero';
import StandardFAQ from '@/components/StandardFAQ';
import { privateEquityFaqs } from './PrivateEquityFAQ';

export const metadata: Metadata = {
  title: 'Private Equity Fundraising | Management Buyout & Recapitalization | Vommuli Ventures',
  description: 'Expert private equity fundraising advisory for established companies seeking buyout capital, management buyouts, and recapitalization. Connecting profitable businesses with 150+ PE firms.',
  keywords: [
    'private equity fundraising',
    'PE fundraising advisory',
    'management buyout funding',
    'private equity recapitalization',
    'buyout capital advisory',
    'PE firm introductions',
    'private equity consultants',
    'management buyout advisory',
    'private equity placement',
    'PE deal advisory',
    'private equity capital raising',
    'buyout funding specialists',
    'private equity intermediary',
    'PE transaction advisory',
    'management buyout specialists',
    'private equity investment banking',
    'PE fundraising consultants',
    'private equity deal sourcing',
    'buyout advisory services',
    'PE capital introduction'
  ],
  openGraph: {
    title: 'Private Equity Fundraising | Management Buyout & Recapitalization',
    description: 'Expert PE fundraising advisory connecting established companies with private equity firms for buyouts, recapitalizations, and growth capital.',
    url: 'https://vommuli.com/private-equity-fundraising',
  },
};

export default function PrivateEquityFundraisingPage() {
  const heroData = {
    title: "Private Equity Fundraising Advisory",
    subtitle: "Management Buyouts & Recapitalization Specialists",
    description: "Expert private equity fundraising advisory for established, profitable companies seeking buyout capital, management buyouts, and strategic recapitalization. Our specialized approach connects mature businesses with 150+ private equity firms focused on value creation and operational excellence.",
    keyBenefits: [
      "150+ PE Firm Network Access",
      "Management Buyout Expertise",
      "Operational Excellence Focus",
      "Strategic Deal Structuring"
    ],
    stats: [
      { value: "150+", label: "PE Partners" },
      { value: "$10M-100M+", label: "EBITDA Range" },
      { value: "6-12mo", label: "Average Timeline" },
      { value: "72%", label: "Success Rate" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        type="service"
        data={{
          name: "Private Equity Fundraising Advisory",
          description: "Expert private equity fundraising advisory for established companies seeking buyout capital, management buyouts, and strategic recapitalization.",
          url: "/private-equity-fundraising"
        }}
      />

      {/* Hero Section */}
      <ServicePageHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        keyBenefits={heroData.keyBenefits}
        stats={heroData.stats}
        primaryCTA="Start Your PE Process"
        secondaryCTA="Schedule Consultation"
      />

      {/* Service Features Section */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Complete PE Fundraising <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From strategic positioning to successful transaction closure, we guide established companies through every step of the private equity fundraising process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Strategic PE Matching</h3>
              <p className="text-secondary-600 mb-6">
                Intelligent matching with 150+ private equity firms based on sector expertise, deal size focus, value creation strategy, and management partnership approach.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Middle-market PE specialists
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Sector-focused PE funds
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Management-friendly partners
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Deal Structuring</h3>
              <p className="text-secondary-600 mb-6">
                Comprehensive deal structuring and financial optimization to maximize value for management teams and shareholders in PE transactions.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Management equity optimization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Transaction structure design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Value creation planning
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Transaction Execution</h3>
              <p className="text-secondary-600 mb-6">
                Full-service transaction execution including due diligence management, negotiation support, and closing coordination for complex PE deals.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Due diligence management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Term sheet negotiation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Closing coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Our PE Fundraising <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A proven methodology refined through hundreds of successful private equity transactions.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Strategic Assessment</h3>
              <p className="text-secondary-600">
                Comprehensive evaluation of business readiness, financial position, and value creation opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">PE Partner Selection</h3>
              <p className="text-secondary-600">
                Targeted identification and qualification of PE firms aligned with your business model and growth strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Deal Negotiation</h3>
              <p className="text-secondary-600">
                Expert negotiation of transaction terms, management equity, and partnership structure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-neutral-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Closing & Beyond</h3>
              <p className="text-secondary-600">
                Transaction closure and ongoing support for value creation and future growth initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ
        title="Private Equity Fundraising FAQ"
        subtitle="Get answers to the most common questions about our PE fundraising services and how we help established companies secure private equity capital."
        faqs={privateEquityFaqs}
        showCategoryFilter={true}
      />
    </div>
  );
}