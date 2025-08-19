import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import TechnicalSEO from '@/components/TechnicalSEO';

const seoConfig = {
  title: 'Boston Series A Funding Advisory | Cambridge Startup Fundraising Experts | Vommuli Ventures',
  description: 'Expert Series A funding advisory for Boston and Cambridge startups. Connect with top VCs in Massachusetts startup ecosystem. Local Boston venture capital expertise.',
  keywords: [
    'Boston Series A funding',
    'Cambridge startup fundraising', 
    'Boston startup consultants',
    'Massachusetts Series A advisory',
    'Boston venture capital introductions',
    'Cambridge VC network',
    'Boston pitch deck optimization',
    'Massachusetts startup funding',
    'Cambridge Series A preparation',
    'Boston biotech funding',
    'MIT startup advisory',
    'Harvard startup funding',
    'Boston tech startup funding',
    'Cambridge venture capital',
    'Boston startup ecosystem',
    'Route 128 corridor funding',
    'Boston fintech Series A',
    'Cambridge medtech funding',
    'Boston startup incubators',
    'Massachusetts entrepreneur advisory'
  ],
  canonical: '/locations/boston',
  openGraph: {
    title: 'Boston Series A Funding Advisory | Cambridge Startup Experts',
    description: 'Expert Series A funding advisory for Boston and Cambridge startups with deep Massachusetts ecosystem knowledge',
    image: '/og-boston.jpg',
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

const bostonStats = [
  { metric: '50+', label: 'Boston VC Firms', description: 'Active venture capital partnerships in Greater Boston' },
  { metric: '25+', label: 'Funded Startups', description: 'Boston-area startups we\'ve helped secure Series A funding' },
  { metric: '$125M+', label: 'Capital Raised', description: 'Total funding secured for Boston startups through our network' },
  { metric: '90%', label: 'Success Rate', description: 'Meeting conversion rate for Boston startup introductions' }
];

const bostonEcosystem = [
  {
    area: 'Biotech & Life Sciences',
    description: 'Boston/Cambridge biotech cluster with proximity to world-class research institutions',
    keyPlayers: ['Flagship Pioneering', 'Atlas Venture', 'Third Rock Ventures', 'Polaris Partners'],
    focus: '$5M-$50M Series A rounds for therapeutic and diagnostic companies',
    advantages: ['Harvard/MIT research pipeline', 'Experienced biotech talent', 'Regulatory expertise', 'Clinical trial infrastructure']
  },
  {
    area: 'Fintech & Financial Services',
    description: 'Growing fintech scene leveraging Boston\'s traditional finance sector expertise',
    keyPlayers: ['General Catalyst', 'Bessemer Venture Partners', 'Bain Capital Ventures', 'Flybridge Capital'],
    focus: 'B2B fintech, insurtech, and financial infrastructure solutions',
    advantages: ['Traditional finance expertise', 'Enterprise customer base', 'Regulatory knowledge', 'Institutional connections']
  },
  {
    area: 'Enterprise Software',
    description: 'Strong B2B software ecosystem with focus on AI, data analytics, and cybersecurity',
    keyPlayers: ['OpenView Venture Partners', 'Matrix Partners', 'Spark Capital', 'Google Ventures'],
    focus: 'SaaS platforms targeting enterprise customers',
    advantages: ['Enterprise sales talent', 'B2B customer proximity', 'Technical university partnerships', 'Government contracting opportunities']
  },
  {
    area: 'Healthcare Technology',
    description: 'Digital health and medtech innovation hub with strong clinical partnerships',
    keyPlayers: ['Healthtech Capital', 'F-Prime Capital', 'Andreessen Horowitz Bio Fund', 'GV (Google Ventures)'],
    focus: 'Digital therapeutics, medical devices, and healthcare IT',
    advantages: ['World-class hospitals', 'Clinical research expertise', 'FDA regulatory knowledge', 'Healthcare provider networks']
  }
];

const localVCs = [
  {
    firm: 'General Catalyst',
    focus: 'Early-stage technology companies across multiple sectors',
    checkSize: '$2M-$10M Series A',
    portfolio: 'HubSpot, Stripe, Airbnb (Boston office)',
    specialization: 'B2B software, consumer, healthcare'
  },
  {
    firm: 'Flagship Pioneering',
    focus: 'Life sciences and sustainability ventures',
    checkSize: '$5M-$25M Series A',
    portfolio: 'Moderna, Seres Therapeutics, Indigo Agriculture',
    specialization: 'Biotech, therapeutics, ag-tech'
  },
  {
    firm: 'Spark Capital',
    focus: 'Consumer and enterprise technology',
    checkSize: '$3M-$15M Series A',
    portfolio: 'Twitter, Tumblr, Warby Parker',
    specialization: 'Consumer internet, enterprise software'
  },
  {
    firm: 'Matrix Partners',
    focus: 'Software, internet, and mobile companies',
    checkSize: '$2M-$12M Series A',
    portfolio: 'HubSpot, Octa, Canva',
    specialization: 'SaaS, marketplaces, developer tools'
  },
  {
    firm: 'Bessemer Venture Partners',
    focus: 'Cloud computing and software',
    checkSize: '$5M-$20M Series A',
    portfolio: 'Shopify, Twilio, DocuSign',
    specialization: 'Cloud infrastructure, vertical SaaS'
  }
];

const bostonAdvantages = [
  {
    advantage: 'Academic Research Pipeline',
    description: 'Unparalleled access to MIT, Harvard, and other world-class research institutions',
    impact: 'Deep technical talent pool and cutting-edge innovation in multiple sectors'
  },
  {
    advantage: 'Concentrated VC Ecosystem',
    description: 'High density of venture capital firms within Route 128 and Cambridge area',
    impact: 'Shorter travel times for meetings and stronger inter-VC relationships'
  },
  {
    advantage: 'Sector Specialization',
    description: 'Established clusters in biotech, fintech, and enterprise software',
    impact: 'Domain-expert VCs and specialized support infrastructure'
  },
  {
    advantage: 'Government & Enterprise Customers',
    description: 'Proximity to federal agencies, healthcare systems, and Fortune 500 companies',
    impact: 'Strong potential customer base for B2B and B2G startups'
  }
];

const clientSuccesses = [
  {
    company: 'HealthTech Startup',
    sector: 'Digital Health',
    challenge: 'Needed VCs with healthcare expertise and clinical partnerships',
    solution: 'Connected with Boston healthcare-focused VCs through warm introductions',
    outcome: '$18M Series A with strategic hospital system co-investor'
  },
  {
    company: 'Biotech Company', 
    sector: 'Life Sciences',
    challenge: 'Complex IP licensing and regulatory pathway concerns',
    solution: 'Matched with Boston biotech VCs familiar with FDA processes',
    outcome: '$25M Series A led by Flagship Pioneering ecosystem fund'
  },
  {
    company: 'Enterprise SaaS',
    sector: 'B2B Software',
    challenge: 'Needed VCs with enterprise sales and customer success expertise',
    solution: 'Introduced to Boston B2B-focused VCs with relevant portfolio experience',
    outcome: '$12M Series A with General Catalyst participation'
  }
];

export default function BostonLocationPage() {
  return (
    <main className="min-h-screen">
      <TechnicalSEO 
        page="boston"
        keywords={seoConfig.keywords}
        images={['/og-boston.jpg']}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🏛️ Boston Series A Experts</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Boston & Cambridge
              <span className="block text-gradient-accent">Series A Funding Advisory</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Expert Series A funding advisory for Boston and Cambridge startups. Deep connections with Massachusetts VC ecosystem, from biotech specialists to enterprise software investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {bostonStats.map((stat, index) => (
              <div key={index} className="card-brand text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-accent-300 mb-2">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boston Ecosystem Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Boston Startup Ecosystem Expertise
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized knowledge of Boston's key innovation sectors and their unique funding landscapes
            </p>
          </div>

          <div className="space-y-8">
            {bostonEcosystem.map((sector, index) => (
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
                      <h4 className="font-semibold text-secondary-900 mb-4">Boston Advantages:</h4>
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

      {/* Boston VC Network */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our Boston VC Network
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Strong relationships with Boston's top venture capital firms across all major sectors
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

      {/* Boston Advantages */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Boston Startups Choose Vommuli Ventures
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Unique advantages of working with advisors who understand the Boston startup ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {bostonAdvantages.map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{advantage.advantage}</h3>
                  <p className="text-secondary-700 mb-6">{advantage.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Impact for Your Startup:</h4>
                    <p className="text-green-700">{advantage.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Boston Client Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Real results from Boston-area startups we've helped secure Series A funding
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
              Ready to Connect with Boston VCs?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Leverage our deep Boston ecosystem knowledge and VC relationships for your Series A funding
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Boston Market Analysis</h3>
                <p className="text-white/80 mb-4">Get insights into Boston's VC landscape and funding trends for your sector</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Start Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your Boston fundraising strategy with our local experts</p>
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
              Services for Boston Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive support for your Series A fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/locations/boston"
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
          name: "Vommuli Ventures - Boston Series A Funding Advisory",
          description: "Expert Series A funding advisory for Boston and Cambridge startups with deep Massachusetts VC ecosystem knowledge",
          url: "https://vommuli.com/locations/boston",
          address: {
            streetAddress: "200 Berkeley Street",
            addressLocality: "Boston",
            addressRegion: "MA", 
            postalCode: "02116",
            addressCountry: "US"
          },
          geo: {
            latitude: 42.3501,
            longitude: -71.0742
          },
          areaServed: ["Boston", "Cambridge", "Massachusetts", "Greater Boston Area"],
          serviceType: [
            "Boston Series A Funding Advisory",
            "Cambridge Startup Fundraising",
            "Massachusetts VC Introductions",
            "Boston Pitch Deck Optimization"
          ]
        }}
      />

      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What makes Boston's startup ecosystem unique for Series A funding?",
              answer: "Boston offers concentrated VC density, strong academic research pipeline from MIT/Harvard, specialized sectors like biotech and fintech, and proximity to enterprise customers and government agencies."
            },
            {
              question: "Which VCs in Boston are most active in Series A rounds?",
              answer: "Key Boston VCs for Series A include General Catalyst, Flagship Pioneering, Spark Capital, Matrix Partners, and Bessemer Venture Partners, each with different sector specializations."
            },
            {
              question: "How do you help Boston startups connect with the right VCs?",
              answer: "We leverage deep relationships with 50+ Boston VC firms, understanding their investment thesis, portfolio needs, and decision-making processes to make strategic warm introductions."
            },
            {
              question: "What sectors are strongest in Boston for Series A funding?",
              answer: "Boston excels in biotech/life sciences, fintech, enterprise software, healthcare technology, and AI/robotics, with specialized VC expertise in each area."
            }
          ]
        }}
      />
    </main>
  );
}