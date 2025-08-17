import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import ServicePageHero from '@/components/ServicePageHero';
import StandardFAQ from '@/components/StandardFAQ';
import { climateEnergyFaqs } from './ClimateEnergyFAQ';

export const metadata: Metadata = {
  title: 'Climate Tech & Renewable Energy Funding Advisory | ESG Investment Services | Vommuli',
  description: 'Expert climate technology and renewable energy funding advisory. Connect with impact investors, ESG funds, and clean tech VCs for sustainable innovation financing.',
  keywords: [
    'climate tech funding advisory',
    'renewable energy investment',
    'clean tech funding',
    'ESG investment advisory',
    'climate technology VC',
    'sustainable tech funding',
    'green energy investment',
    'climate innovation funding',
    'renewable energy advisory',
    'ESG venture capital',
    'climate finance advisory',
    'clean technology investment',
    'sustainability funding',
    'climate startup funding',
    'green tech investment',
    'carbon reduction funding',
    'clean energy advisory',
    'climate solutions funding',
    'environmental tech funding',
    'impact investment advisory'
  ],
  openGraph: {
    title: 'Climate Tech & Renewable Energy Funding Advisory | ESG Investment Services',
    description: 'Expert climate technology and renewable energy funding advisory connecting sustainable innovations with impact investors and ESG funds.',
    url: 'https://vommuli.com/climate-tech-renewable-energy-funding',
  },
};

export default function ClimateTechRenewableEnergyFundingPage() {
  const heroData = {
    title: "Climate Tech & Renewable Energy Funding",
    subtitle: "Sustainable Innovation Finance Specialists",
    description: "Expert climate technology and renewable energy funding advisory connecting breakthrough sustainable innovations with specialized impact investors, ESG funds, and clean tech venture capital firms focused on environmental transformation and carbon reduction solutions.",
    keyBenefits: [
      "80+ Climate-Focused Investor Network",
      "ESG & Impact Investment Expertise",
      "Regulatory & Policy Navigation",
      "Carbon Market Understanding"
    ],
    stats: [
      { value: "80+", label: "Climate Investors" },
      { value: "$1M-100M", label: "Funding Range" },
      { value: "6-18mo", label: "Average Timeline" },
      { value: "74%", label: "Success Rate" }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        type="service"
        data={{
          name: "Climate Tech & Renewable Energy Funding Advisory",
          description: "Expert climate technology and renewable energy funding advisory connecting sustainable innovations with impact investors and ESG funds.",
          url: "/climate-tech-renewable-energy-funding"
        }}
      />

      {/* Hero Section */}
      <ServicePageHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        keyBenefits={heroData.keyBenefits}
        stats={heroData.stats}
        primaryCTA="Start Climate Funding"
        secondaryCTA="Schedule Consultation"
      />

      {/* Service Features Section */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Complete Climate Tech <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From climate strategy development to successful funding deployment, we guide sustainable technology companies through every step of the ESG and impact investment process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-elevated">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">ESG Investor Matching</h3>
              <p className="text-secondary-600 mb-6">
                Strategic connections with 80+ climate-focused investors including ESG funds, impact VCs, and clean tech specialists aligned with your environmental mission.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Impact investment funds
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  ESG-focused venture capital
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Clean tech specialists
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Climate Strategy & Positioning</h3>
              <p className="text-secondary-600 mb-6">
                Comprehensive climate impact assessment and strategic positioning to maximize appeal to ESG investors and demonstrate measurable environmental benefits.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Carbon impact measurement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  ESG reporting frameworks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Sustainability metrics
                </li>
              </ul>
            </div>

            <div className="card-elevated">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Regulatory & Compliance Support</h3>
              <p className="text-secondary-600 mb-6">
                Navigate complex climate regulations, carbon markets, and environmental compliance requirements essential for sustainable technology deployment.
              </p>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Climate policy navigation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Carbon credit markets
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                  Environmental compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Sectors Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Climate Technology <span className="text-gradient">Focus Areas</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Specialized expertise across key climate technology sectors driving environmental transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Renewable Energy</h3>
              <p className="text-secondary-600">
                Solar, wind, hydro, and emerging renewable energy technologies with grid integration solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Energy Storage</h3>
              <p className="text-secondary-600">
                Battery technologies, grid storage solutions, and innovative energy storage systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Carbon Capture</h3>
              <p className="text-secondary-600">
                Direct air capture, carbon utilization, and storage technologies for emissions reduction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Circular Economy</h3>
              <p className="text-secondary-600">
                Waste reduction, recycling technologies, and sustainable materials innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="section-padding bg-gradient-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Climate Impact <span className="text-gradient">Measurement</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive impact assessment and reporting frameworks that resonate with ESG investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Carbon Footprint Analysis</h3>
                  <p className="text-secondary-600">
                    Detailed measurement of carbon reduction potential and environmental impact across your technology's lifecycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">ESG Reporting Standards</h3>
                  <p className="text-secondary-600">
                    Implementation of recognized ESG frameworks including GRI, SASB, and UN SDG alignment for investor reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">Impact Monetization</h3>
                  <p className="text-secondary-600">
                    Quantification of environmental benefits in financial terms to demonstrate ROI for impact investors.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:text-center">
              <div className="card-brand p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Climate Impact Assessment</h3>
                <p className="text-primary-100 mb-8">
                  Get a comprehensive climate impact assessment and ESG readiness evaluation for your technology solution.
                </p>
                <button className="btn-accent w-full">
                  Start Impact Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <StandardFAQ
        title="Climate Tech Funding FAQ"
        subtitle="Get answers to the most common questions about our climate technology and renewable energy funding services."
        faqs={climateEnergyFaqs}
        showCategoryFilter={true}
      />
    </div>
  );
}