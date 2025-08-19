import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOOptimization from '@/components/SEOOptimization';

const seoConfig = {
  title: 'Complete Venture Capital Guide 2024 | VC Funding Process & Strategies | Vommuli Ventures',
  description: 'Comprehensive venture capital guide covering VC types, funding stages, investment criteria, and strategies. Expert insights for startups seeking VC funding.',
  keywords: [
    'venture capital guide',
    'VC funding process',
    'venture capital basics',
    'VC investment stages',
    'startup VC funding',
    'venture capital types',
    'VC investment criteria',
    'how venture capital works',
    'VC funding guide',
    'startup investment guide'
  ],
  canonical: '/resources/venture-capital-guide',
  openGraph: {
    title: 'Complete Venture Capital Guide 2024 | VC Funding Strategies',
    description: 'Master venture capital funding with our comprehensive guide to VC types, processes, and strategies',
    image: '/og-vc-guide.jpg',
    type: 'article' as const
  }
};

export const metadata: Metadata = generateMetadata(seoConfig);

const vcStages = [
  {
    stage: 'Pre-Seed VC',
    amount: '$250K - $1M',
    focus: 'Concept validation and early development',
    timeline: 'Idea to MVP stage',
    keyPlayers: 'Micro VCs, Angel groups, Pre-seed specialists'
  },
  {
    stage: 'Seed VC',
    amount: '$1M - $3M',
    focus: 'Product development and initial traction',
    timeline: 'MVP to early customers',
    keyPlayers: 'Seed funds, Early-stage VCs, Strategic investors'
  },
  {
    stage: 'Series A VC',
    amount: '$3M - $15M',
    focus: 'Business model validation and scaling',
    timeline: 'Proven traction to growth',
    keyPlayers: 'Traditional VCs, Growth-stage funds'
  },
  {
    stage: 'Series B+ VC',
    amount: '$10M - $100M+',
    focus: 'Market expansion and scale optimization',
    timeline: 'Growth stage to maturity',
    keyPlayers: 'Growth equity firms, Late-stage VCs'
  }
];

const vcTypes = [
  {
    type: 'Tier 1 VCs',
    description: 'Top-tier venture capital firms with largest funds and highest profiles',
    examples: ['Sequoia Capital', 'Andreessen Horowitz', 'Kleiner Perkins', 'Benchmark Capital'],
    characteristics: ['$500M+ fund sizes', 'Highly selective', 'Strong brand recognition', 'Extensive partner networks'],
    checkSizes: '$5M - $50M per investment',
    portfolio: '15-25 companies per fund'
  },
  {
    type: 'Sector Specialists',
    description: 'VCs focused on specific industry verticals with deep domain expertise',
    examples: ['Bessemer Venture Partners (SaaS)', 'Khosla Ventures (CleanTech)', 'GV (Google Ventures - AI)'],
    characteristics: ['Industry expertise', 'Sector-specific networks', 'Technical due diligence', 'Strategic value-add'],
    checkSizes: '$2M - $25M per investment',
    portfolio: '20-30 companies per fund'
  },
  {
    type: 'Geographic VCs',
    description: 'Regional venture capital firms with local market focus',
    examples: ['Union Square Ventures (NYC)', 'Foundry Group (Denver)', 'Austin Ventures (Texas)'],
    characteristics: ['Local ecosystem knowledge', 'Regional networks', 'Community involvement', 'Market-specific insights'],
    checkSizes: '$1M - $15M per investment',
    portfolio: '25-40 companies per fund'
  },
  {
    type: 'Corporate VCs',
    description: 'Investment arms of large corporations seeking strategic synergies',
    examples: ['Intel Capital', 'Salesforce Ventures', 'Google Ventures', 'Microsoft Ventures'],
    characteristics: ['Strategic partnerships', 'Industry connections', 'Technology integration', 'Distribution channels'],
    checkSizes: '$2M - $30M per investment',
    portfolio: 'Varies by strategy'
  }
];

const investmentCriteria = [
  {
    criteria: 'Market Opportunity',
    weight: '30%',
    details: [
      'Total Addressable Market (TAM) size - typically $1B+',
      'Market growth rate and trending dynamics',
      'Competitive landscape and differentiation',
      'Timing and market readiness for solution'
    ]
  },
  {
    criteria: 'Team Quality',
    weight: '25%',
    details: [
      'Founder-market fit and domain expertise',
      'Track record of execution and leadership',
      'Technical capabilities and complementary skills',
      'Ability to attract top talent and advisors'
    ]
  },
  {
    criteria: 'Business Model',
    weight: '25%',
    details: [
      'Revenue model and unit economics',
      'Customer acquisition and retention strategy',
      'Scalability and operational efficiency',
      'Path to profitability and cash flow positive'
    ]
  },
  {
    criteria: 'Traction & Metrics',
    weight: '20%',
    details: [
      'Revenue growth and customer adoption',
      'Key performance indicators and benchmarks',
      'Product-market fit validation',
      'Customer satisfaction and retention rates'
    ]
  }
];

export default function VentureCapitalGuidePage() {
  return (
    <main className="min-h-screen">
      <SEOOptimization 
        page="vc-guide"
        keywords={seoConfig.keywords}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📚 Complete VC Guide</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The Complete Venture Capital
              <span className="block text-gradient-accent">Guide for Startups</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Master venture capital funding with comprehensive insights on VC types, investment processes, and strategies from experts who facilitated 200+ VC deals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">500+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Active VCs</h3>
              <p className="text-white/80">In our comprehensive database</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Deals Facilitated</h3>
              <p className="text-white/80">Successful VC funding rounds</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$500M</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Through our VC network</p>
            </div>
          </div>
        </div>
      </section>

      {/* VC Funding Stages */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Venture Capital Funding Stages Explained
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Understanding each VC funding stage is crucial for timing your approach and targeting the right investors
            </p>
          </div>

          <div className="space-y-8">
            {vcStages.map((stage, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-5 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-lg mb-4 lg:mb-0">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">{stage.stage}</h3>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Funding Range</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.amount}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Focus Area</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.focus}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Timeline</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.timeline}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Key Players</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.keyPlayers}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of VCs */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Types of Venture Capital Firms
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Different VC types offer unique advantages and focus areas for startup investments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {vcTypes.map((type, index) => (
              <div key={index} className="card bg-gradient-to-br from-primary-50 to-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{type.type}</h3>
                  <p className="text-secondary-700 mb-6">{type.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Key Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((example, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Characteristics:</h4>
                      <ul className="space-y-1">
                        {type.characteristics.map((char, i) => (
                          <li key={i} className="flex items-center text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-secondary-600">Check Size</div>
                        <div className="font-semibold text-secondary-900">{type.checkSizes}</div>
                      </div>
                      <div>
                        <div className="text-sm text-secondary-600">Portfolio Size</div>
                        <div className="font-semibold text-secondary-900">{type.portfolio}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              What VCs Look for in Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Understanding VC investment criteria helps you prepare for due diligence and pitch meetings
            </p>
          </div>

          <div className="space-y-8">
            {investmentCriteria.map((item, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mr-4">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-900">{item.criteria}</h3>
                          <span className="text-primary-600 font-semibold text-lg">{item.weight}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-secondary-900 mb-4">Key Evaluation Points:</h4>
                      <div className="space-y-3">
                        {item.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-secondary-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VC Process Deep Dive */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              The VC Investment Process
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Step-by-step breakdown of how VCs evaluate and invest in startups
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: 'Initial Screening',
                duration: '1-2 weeks',
                description: 'VCs review pitch decks and conduct preliminary market research',
                activities: ['Pitch deck review', 'Market size analysis', 'Competitive landscape check', 'Team background research']
              },
              {
                phase: 'First Meeting',
                duration: '1-2 hours',
                description: 'Formal presentation and Q&A session with investment team',
                activities: ['Executive presentation', 'Product demonstration', 'Business model explanation', 'Market opportunity discussion']
              },
              {
                phase: 'Due Diligence',
                duration: '4-8 weeks',
                description: 'Comprehensive evaluation of business, team, market, and financials',
                activities: ['Financial audit', 'Reference checks', 'Technical review', 'Market validation', 'Legal review']
              },
              {
                phase: 'Investment Committee',
                duration: '1-2 weeks',
                description: 'Internal VC decision-making process and term sheet approval',
                activities: ['Partner presentation', 'Investment committee meeting', 'Risk assessment', 'Term sheet preparation']
              },
              {
                phase: 'Term Sheet & Closing',
                duration: '2-6 weeks',
                description: 'Negotiation, legal documentation, and fund transfer',
                activities: ['Term sheet negotiation', 'Legal documentation', 'Board composition', 'Closing and funding']
              }
            ].map((phase, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-primary-900">{phase.phase}</h3>
                        <span className="text-sm text-secondary-600 bg-primary-100 px-3 py-1 rounded-full">{phase.duration}</span>
                      </div>
                      <p className="text-secondary-700 mb-6">{phase.description}</p>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-3">Key Activities:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.activities.map((activity, i) => (
                            <div key={i} className="flex items-center text-sm text-secondary-700">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
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
              Ready to Connect with the Right VCs?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Use our expertise to identify and connect with VCs that are the perfect fit for your startup
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">VC Network Access</h3>
                <p className="text-white/80 mb-4">Get warm introductions to our 500+ VC network across all stages and sectors</p>
                <Link href="/venture-capital-advisor" className="btn-accent">
                  Explore VC Advisory
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Investment Readiness</h3>
                <p className="text-white/80 mb-4">Assess your readiness for VC funding with our comprehensive evaluation tool</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Take Assessment
                </Link>
              </div>
            </div>

            <QuickNavigation className="justify-center" />
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Continue Your VC Journey
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Dive deeper into specific aspects of venture capital funding
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/resources/venture-capital-guide"
            context="resource"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup 
        type="article"
        data={{
          headline: "The Complete Venture Capital Guide for Startups",
          description: "Comprehensive venture capital guide covering VC types, funding stages, investment criteria, and strategies for startups seeking VC funding.",
          author: {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com/about"
          },
          datePublished: "2024-01-01T08:00:00Z",
          dateModified: "2024-01-01T08:00:00Z",
          publisher: {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "logo": {
              "@type": "ImageObject",
              "url": "https://vommuli.com/logo.png"
            }
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://vommuli.com/resources/venture-capital-guide"
          },
          wordCount: 3500,
          articleSection: "Venture Capital Education",
          keywords: "venture capital guide, VC funding process, venture capital basics, VC investment stages"
        }}
      />

      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What are the main types of venture capital firms?",
              answer: "The main types of VCs include Tier 1 VCs (top-tier firms like Sequoia and A16z), Sector Specialists (focused on specific industries), Geographic VCs (regional focus), and Corporate VCs (strategic investors from large companies)."
            },
            {
              question: "What do VCs look for when investing in startups?",
              answer: "VCs primarily evaluate four key areas: Market Opportunity (30% weight), Team Quality (25%), Business Model (25%), and Traction & Metrics (20%). They look for large addressable markets, strong founding teams, scalable business models, and proven traction."
            },
            {
              question: "How long does the VC investment process take?",
              answer: "The typical VC investment process takes 3-6 months from initial pitch to funding, including initial screening (1-2 weeks), first meeting (1-2 hours), due diligence (4-8 weeks), investment committee decision (1-2 weeks), and term sheet negotiation/closing (2-6 weeks)."
            },
            {
              question: "What is the difference between VC funding stages?",
              answer: "Pre-seed VC ($250K-$1M) focuses on concept validation, Seed VC ($1M-$3M) on product development, Series A ($3M-$15M) on business model scaling, and Series B+ ($10M+) on market expansion and optimization."
            }
          ]
        }}
      />
    </main>
  );
}