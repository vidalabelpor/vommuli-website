import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import TechnicalSEO from '@/components/TechnicalSEO';

const seoConfig = {
  title: 'Chicago Series A Funding Advisory | Midwest Startup Fundraising Experts | Vommuli Ventures',
  description: 'Expert Series A funding advisory for Chicago startups. Connect with Midwest VCs and investors. Local Chicago startup ecosystem expertise and venture capital introductions.',
  keywords: [
    'Chicago Series A funding',
    'Midwest startup fundraising',
    'Chicago startup consultants', 
    'Illinois Series A advisory',
    'Chicago venture capital introductions',
    'Midwest VC network',
    'Chicago pitch deck optimization',
    'Illinois startup funding',
    'Chicago Series A preparation',
    'Midwest startup ecosystem',
    'Chicago tech startup funding',
    'Illinois venture capital',
    'Chicago fintech funding',
    'Midwest enterprise software',
    'Chicago startup incubators',
    'Illinois entrepreneur advisory',
    'Chicago investment advisory',
    'Midwest Series A consultants',
    'Chicago VC introductions',
    'Illinois startup investment'
  ],
  canonical: '/locations/chicago',
  openGraph: {
    title: 'Chicago Series A Funding Advisory | Midwest Startup Experts',
    description: 'Expert Series A funding advisory for Chicago startups with deep Midwest ecosystem knowledge',
    image: '/og-chicago.jpg',
    type: 'website' as const
  }
};

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: seoConfig.openGraph,
  alternates: {
    canonical: seoConfig.canonical
  }
};

const chicagoStats = [
  { metric: '30+', label: 'Chicago VC Firms', description: 'Active venture capital partnerships in Chicagoland area' },
  { metric: '15+', label: 'Funded Startups', description: 'Chicago-area startups we\'ve helped secure Series A funding' },
  { metric: '$85M+', label: 'Capital Raised', description: 'Total funding secured for Chicago startups through our network' },
  { metric: '88%', label: 'Success Rate', description: 'Meeting conversion rate for Chicago startup introductions' }
];

const chicagoEcosystem = [
  {
    area: 'Fintech & Financial Services',
    description: 'Chicago\'s strong financial sector foundation creates robust fintech innovation ecosystem',
    keyPlayers: ['Chicago Ventures', 'OCA Ventures', 'GTCR', 'Origin Ventures'],
    focus: 'B2B fintech, trading technology, and financial infrastructure',
    advantages: ['CME Group proximity', 'Traditional finance expertise', 'Enterprise customer base', 'Regulatory knowledge']
  },
  {
    area: 'Enterprise Software & SaaS',
    description: 'Growing B2B software ecosystem serving Fortune 500 companies headquartered in Chicago',
    keyPlayers: ['Lightbank', 'OCA Ventures', 'Chicago Ventures', 'MATH Venture Partners'],
    focus: 'Enterprise SaaS, productivity software, and business intelligence',
    advantages: ['Corporate customer proximity', 'B2B sales talent', 'Lower cost structure', 'Midwest work ethic']
  },
  {
    area: 'Healthcare & MedTech',
    description: 'Strong healthcare innovation driven by major medical centers and research institutions',
    keyPlayers: ['ARCH Venture Partners', 'OCA Ventures', 'Pritzker Group Venture Capital'],
    focus: 'Digital health, medical devices, and healthcare IT solutions',
    advantages: ['World-class medical centers', 'Northwestern/UChicago research', 'Healthcare provider networks', 'FDA expertise']
  },
  {
    area: 'E-commerce & Logistics',
    description: 'Central location and transportation infrastructure fuel logistics and e-commerce innovation',
    keyPlayers: ['Chicago Ventures', 'Origin Ventures', 'Corazon Capital'],
    focus: 'Supply chain tech, e-commerce platforms, and logistics software',
    advantages: ['Transportation hub', 'Distribution expertise', 'Manufacturing base', 'Central US location']
  }
];

const localVCs = [
  {
    firm: 'Chicago Ventures',
    focus: 'Early-stage technology companies across multiple verticals',
    checkSize: '$1M-$8M Series A',
    portfolio: 'Allstate, Grubhub (early investor), SMS Assist',
    specialization: 'B2B software, fintech, marketplaces'
  },
  {
    firm: 'OCA Ventures', 
    focus: 'Healthcare and technology investments',
    checkSize: '$2M-$10M Series A',
    portfolio: 'Prognos, Healthfinch, Peerfit',
    specialization: 'Healthcare IT, SaaS, digital health'
  },
  {
    firm: 'ARCH Venture Partners',
    focus: 'Science and technology commercialization',
    checkSize: '$3M-$15M Series A', 
    portfolio: 'Juno Therapeutics, Illumina, Exelixis',
    specialization: 'Life sciences, healthcare, deep tech'
  },
  {
    firm: 'Origin Ventures',
    focus: 'Early-stage Chicago-area companies',
    checkSize: '$1M-$5M Series A',
    portfolio: 'Cameo, Farmers Business Network, Fooda',
    specialization: 'Consumer tech, marketplaces, B2B services'
  },
  {
    firm: 'Lightbank',
    focus: 'Early-stage internet and software companies',
    checkSize: '$500K-$5M Series A',
    portfolio: 'Groupon (founding team), Echo Global Logistics, Mediaocean',
    specialization: 'Consumer internet, enterprise software'
  }
];

const chicagoAdvantages = [
  {
    advantage: 'Cost-Effective Operations',
    description: 'Significantly lower operational costs compared to coastal markets',
    impact: 'Extend runway 30-50% longer than Silicon Valley equivalents, attractive to cost-conscious VCs'
  },
  {
    advantage: 'Corporate Customer Proximity',
    description: 'Home to 36 Fortune 500 companies including Boeing, Abbott, McDonald\'s',
    impact: 'Easier enterprise customer acquisition and pilot program development'
  },
  {
    advantage: 'Diverse Talent Pool',
    description: 'Strong engineering and business talent from Northwestern, UChicago, and other institutions',
    impact: 'High-quality team building at competitive compensation levels'
  },
  {
    advantage: 'Central Market Position',
    description: 'Geographic advantage for serving both coasts and middle America',
    impact: 'Optimal location for national expansion strategies and distribution'
  }
];

const clientSuccesses = [
  {
    company: 'Fintech Platform',
    sector: 'Financial Technology',
    challenge: 'Needed VCs familiar with regulatory requirements and enterprise sales cycles',
    solution: 'Connected with Chicago fintech-focused VCs through warm introductions',
    outcome: '$15M Series A led by Chicago Ventures with strategic financial services co-investor'
  },
  {
    company: 'Healthcare SaaS',
    sector: 'Healthcare Technology', 
    challenge: 'Required investors with healthcare provider network and compliance expertise',
    solution: 'Matched with Chicago healthcare VCs familiar with HIPAA and provider workflows',
    outcome: '$12M Series A with OCA Ventures participation'
  },
  {
    company: 'Logistics Software',
    sector: 'Supply Chain Tech',
    challenge: 'Needed VCs understanding complex B2B sales and manufacturing customers',
    solution: 'Introduced to Midwest-focused VCs with logistics and supply chain portfolio experience',
    outcome: '$8M Series A with follow-on commitment for Series B'
  }
];

const midwestBenefits = [
  {
    benefit: 'Lower Valuation Multiples',
    description: 'Chicago startups typically raise at 20-30% lower valuations than coastal equivalents',
    advantage: 'More favorable terms for early investors, less dilution for founders'
  },
  {
    benefit: 'Practical Business Focus',
    description: 'Midwest culture emphasizes sustainable business models over growth-at-all-costs',
    advantage: 'Attractive to VCs seeking profitable, capital-efficient companies'
  },
  {
    benefit: 'Less Competition',
    description: 'Fewer startups competing for VC attention compared to oversaturated coastal markets',
    advantage: 'Higher probability of securing meetings and building relationships'
  },
  {
    benefit: 'Strong Work Ethic',
    description: 'Midwest talent known for dedication, loyalty, and practical problem-solving',
    advantage: 'Attractive team characteristics for long-term company building'
  }
];

export default function ChicagoLocationPage() {
  return (
    <main className="min-h-screen">
      <TechnicalSEO 
        page="chicago"
        keywords={seoConfig.keywords}
        images={['/og-chicago.jpg']}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🏙️ Chicago Series A Experts</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Chicago & Midwest
              <span className="block text-gradient-accent">Series A Funding Advisory</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Expert Series A funding advisory for Chicago and Midwest startups. Leverage Chicago's cost advantages, enterprise customer base, and growing VC ecosystem for successful fundraising.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {chicagoStats.map((stat, index) => (
              <div key={index} className="card-brand text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-accent-300 mb-2">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicago Ecosystem Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Chicago Startup Ecosystem Strengths
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Deep expertise in Chicago's key innovation sectors and their unique competitive advantages
            </p>
          </div>

          <div className="space-y-8">
            {chicagoEcosystem.map((sector, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">{sector.area}</h3>
                      <p className="text-secondary-700 mb-6">{sector.description}</p>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary-900 mb-2">Investment Focus:</h4>
                        <p className="text-primary-700">{sector.focus}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-4">Key VC Partners:</h4>
                      <ul className="space-y-2 mb-6">
                        {sector.keyPlayers.map((player, i) => (
                          <li key={i} className="flex items-center text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {player}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-4">Chicago Advantages:</h4>
                      <ul className="space-y-2">
                        {sector.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-center text-secondary-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicago VC Network */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our Chicago VC Network
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Established relationships with Chicago's most active Series A investors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {localVCs.map((vc, index) => (
              <div key={index} className="card bg-gradient-to-br from-primary-50 to-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{vc.firm}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Investment Focus:</h4>
                      <p className="text-secondary-700">{vc.focus}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Check Size:</h4>
                        <p className="text-secondary-700 font-medium">{vc.checkSize}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Specialization:</h4>
                        <p className="text-secondary-700 font-medium">{vc.specialization}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Notable Portfolio:</h4>
                      <p className="text-blue-700">{vc.portfolio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Midwest Benefits */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              The Chicago/Midwest Advantage
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Why Chicago startups have unique competitive advantages in today's funding environment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chicagoAdvantages.map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{advantage.advantage}</h3>
                  <p className="text-secondary-700 mb-6">{advantage.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Strategic Impact:</h4>
                    <p className="text-green-700">{advantage.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-primary-900 text-center mb-12">Additional Midwest Benefits</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {midwestBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">{benefit.benefit}</h4>
                  <p className="text-secondary-700 mb-4">{benefit.description}</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <strong className="text-blue-800">Investor Advantage:</strong>
                    <span className="text-blue-700 ml-2">{benefit.advantage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Chicago Client Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Real results from Chicago-area startups we've helped secure Series A funding
            </p>
          </div>

          <div className="space-y-8">
            {clientSuccesses.map((client, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    <div>
                      <div className="bg-primary-600 text-white rounded-lg p-4 text-center mb-4">
                        <h3 className="font-bold text-lg">{client.company}</h3>
                        <p className="text-primary-200 text-sm">{client.sector}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Challenge:</h4>
                      <p className="text-secondary-700">{client.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Our Solution:</h4>
                      <p className="text-secondary-700">{client.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Outcome:</h4>
                      <p className="text-secondary-700">{client.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Leverage Chicago's Advantages?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with Chicago VCs who understand your market position and competitive advantages
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Chicago Market Analysis</h3>
                <p className="text-white/80 mb-4">Understand Chicago's unique positioning advantages for your funding strategy</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Start Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your Chicago/Midwest fundraising strategy with our experts</p>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Book Meeting
                </Link>
              </div>
            </div>

            <QuickNavigation className="justify-center" />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Services for Chicago Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive support for your Series A fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/locations/chicago"
            context="location"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Local Business Schema */}
      <SchemaMarkup 
        type="localbusiness"
        data={{
          name: "Vommuli Ventures - Chicago Series A Funding Advisory",
          description: "Expert Series A funding advisory for Chicago and Midwest startups with deep Chicagoland VC ecosystem knowledge",
          url: "https://vommuli.com/locations/chicago",
          address: {
            streetAddress: "333 North Michigan Avenue",
            addressLocality: "Chicago",
            addressRegion: "IL",
            postalCode: "60601", 
            addressCountry: "US"
          },
          geo: {
            latitude: 41.8781,
            longitude: -87.6298
          },
          areaServed: ["Chicago", "Illinois", "Midwest", "Chicagoland"],
          serviceType: [
            "Chicago Series A Funding Advisory",
            "Midwest Startup Fundraising", 
            "Illinois VC Introductions",
            "Chicago Pitch Deck Optimization"
          ]
        }}
      />

      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What advantages do Chicago startups have for Series A funding?",
              answer: "Chicago startups benefit from lower operational costs, proximity to Fortune 500 customers, diverse talent pool, central market position, and less competition for VC attention compared to coastal markets."
            },
            {
              question: "Which VCs in Chicago are most active in Series A rounds?",
              answer: "Key Chicago VCs for Series A include Chicago Ventures, OCA Ventures, ARCH Venture Partners, Origin Ventures, and Lightbank, each with different sector specializations."
            },
            {
              question: "How does Chicago's cost structure benefit fundraising?",
              answer: "Chicago's 30-50% lower operational costs extend runway significantly, making startups more attractive to VCs and allowing for more favorable valuation discussions."
            },
            {
              question: "What sectors are strongest in Chicago for Series A funding?",
              answer: "Chicago excels in fintech, enterprise software/SaaS, healthcare/medtech, and e-commerce/logistics, leveraging the city's traditional industry strengths."
            }
          ]
        }}
      />
    </main>
  );
}