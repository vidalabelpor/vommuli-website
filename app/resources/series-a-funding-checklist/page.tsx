import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOOptimization from '@/components/SEOOptimization';

const seoConfig = {
  title: 'Series A Funding Checklist 2024 | Complete Preparation Guide | Vommuli Ventures',
  description: 'Complete Series A funding checklist with 50+ essential requirements. Preparation guide covering financials, legal, team, and documentation for successful Series A fundraising.',
  keywords: [
    'Series A funding checklist',
    'Series A preparation guide',
    'Series A requirements',
    'Series A due diligence checklist',
    'startup Series A preparation',
    'Series A funding requirements',
    'Series A readiness checklist',
    'venture capital preparation',
    'Series A documentation',
    'Series A fundraising preparation'
  ],
  canonical: '/resources/series-a-funding-checklist',
  openGraph: {
    title: 'Series A Funding Checklist 2024 | Complete Preparation Guide',
    description: 'Master Series A preparation with our comprehensive checklist covering all essential requirements',
    image: '/og-series-a-checklist.jpg',
    type: 'article' as const
  }
};

export const metadata: Metadata = generateMetadata(seoConfig);

const checklistCategories = [
  {
    category: 'Financial Foundation',
    weight: '30%',
    description: 'Core financial metrics and documentation that VCs evaluate first',
    requirements: [
      {
        item: 'Annual Recurring Revenue (ARR) of $1M+',
        priority: 'Critical',
        description: 'Minimum revenue threshold for most Series A rounds',
        status: 'required'
      },
      {
        item: 'Positive unit economics (LTV > 3x CAC)',
        priority: 'Critical',
        description: 'Proof of sustainable business model economics',
        status: 'required'
      },
      {
        item: '20%+ month-over-month growth rate',
        priority: 'Critical',
        description: 'Consistent growth trajectory demonstrating scalability',
        status: 'required'
      },
      {
        item: 'Detailed 3-year financial model',
        priority: 'High',
        description: 'Comprehensive projections with scenario planning',
        status: 'required'
      },
      {
        item: 'Monthly P&L, balance sheet, and cash flow statements',
        priority: 'High',
        description: 'Professional financial reporting and bookkeeping',
        status: 'required'
      },
      {
        item: '12-15 months current runway',
        priority: 'High',
        description: 'Sufficient time for fundraising process',
        status: 'recommended'
      }
    ]
  },
  {
    category: 'Business Traction',
    weight: '25%',
    description: 'Market validation and customer traction indicators',
    requirements: [
      {
        item: 'Product-market fit validation',
        priority: 'Critical',
        description: 'Strong customer retention and satisfaction metrics',
        status: 'required'
      },
      {
        item: 'Diverse customer base (no single customer >20% of revenue)',
        priority: 'High',
        description: 'Reduced customer concentration risk',
        status: 'required'
      },
      {
        item: 'Net Revenue Retention (NRR) >100%',
        priority: 'High',
        description: 'Existing customers growing their usage/spend',
        status: 'required'
      },
      {
        item: 'Customer case studies and references',
        priority: 'High',
        description: 'Proof points for investor due diligence',
        status: 'required'
      },
      {
        item: 'Market size validation (TAM >$1B)',
        priority: 'High',
        description: 'Large addressable market opportunity',
        status: 'required'
      },
      {
        item: 'Competitive differentiation analysis',
        priority: 'Medium',
        description: 'Clear positioning vs. competitors',
        status: 'recommended'
      }
    ]
  },
  {
    category: 'Team & Organization',
    weight: '25%',
    description: 'Leadership team and organizational readiness',
    requirements: [
      {
        item: 'Complete C-suite team (CEO, CTO, at minimum)',
        priority: 'Critical',
        description: 'Strong leadership foundation with complementary skills',
        status: 'required'
      },
      {
        item: 'Key team member retention agreements',
        priority: 'High',
        description: 'Vesting schedules and retention incentives',
        status: 'required'
      },
      {
        item: 'Experienced advisory board',
        priority: 'High',
        description: 'Industry experts and successful entrepreneurs',
        status: 'recommended'
      },
      {
        item: 'Scalable hiring plan and budget',
        priority: 'High',
        description: 'Plan for team growth with funding',
        status: 'required'
      },
      {
        item: 'Clear organizational structure and reporting',
        priority: 'Medium',
        description: 'Professional management structure',
        status: 'recommended'
      },
      {
        item: 'Employee handbook and HR policies',
        priority: 'Medium',
        description: 'Professional HR foundation',
        status: 'recommended'
      }
    ]
  },
  {
    category: 'Legal & Documentation',
    weight: '20%',
    description: 'Corporate structure and legal compliance',
    requirements: [
      {
        item: 'Clean cap table with <20% employee pool',
        priority: 'Critical',
        description: 'Well-structured equity distribution',
        status: 'required'
      },
      {
        item: 'Delaware C-Corp incorporation',
        priority: 'Critical',
        description: 'Standard structure for VC investments',
        status: 'required'
      },
      {
        item: 'Board of directors established',
        priority: 'High',
        description: 'Formal governance structure',
        status: 'required'
      },
      {
        item: 'Intellectual property protection (patents, trademarks)',
        priority: 'High',
        description: 'Protected core technology and brand',
        status: 'required'
      },
      {
        item: 'Data room with organized documentation',
        priority: 'High',
        description: 'All company documents accessible for due diligence',
        status: 'required'
      },
      {
        item: 'Legal compliance audit completed',
        priority: 'Medium',
        description: 'No outstanding legal issues',
        status: 'recommended'
      }
    ]
  }
];

const timelinePhases = [
  {
    phase: 'Pre-Fundraising (3-4 months)',
    description: 'Preparation and foundation building',
    tasks: [
      'Complete financial model and projections',
      'Organize legal documentation and data room',
      'Develop compelling pitch deck narrative',
      'Validate product-market fit metrics',
      'Build strategic advisory board'
    ]
  },
  {
    phase: 'Fundraising Launch (1-2 months)',
    description: 'Investor outreach and initial meetings',
    tasks: [
      'Finalize investor target list and research',
      'Begin warm introduction process',
      'Start investor meeting cadence',
      'Refine pitch based on early feedback',
      'Maintain business momentum during process'
    ]
  },
  {
    phase: 'Due Diligence (4-6 weeks)',
    description: 'Deep investor evaluation and validation',
    tasks: [
      'Provide access to comprehensive data room',
      'Coordinate customer reference calls',
      'Support technical due diligence process',
      'Management presentation to investment committee',
      'Navigate multiple investor processes'
    ]
  },
  {
    phase: 'Term Sheets & Closing (2-4 weeks)',
    description: 'Negotiation and deal completion',
    tasks: [
      'Review and negotiate term sheets',
      'Select lead investor and syndicate',
      'Complete legal documentation',
      'Finalize board composition',
      'Close funding and deploy capital'
    ]
  }
];

const commonPitfalls = [
  {
    pitfall: 'Starting fundraising too late',
    impact: 'Forces rushed decisions and weakens negotiation position',
    solution: 'Begin 6-9 months before runway ends, with 12-15 months remaining',
    severity: 'Critical'
  },
  {
    pitfall: 'Weak financial foundation',
    impact: 'Raises questions about business viability and management capability',
    solution: 'Ensure clean books, professional reporting, and strong unit economics',
    severity: 'High'
  },
  {
    pitfall: 'Unprofessional data room',
    impact: 'Slows due diligence and creates negative investor impression',
    solution: 'Organize documents professionally with clear folder structure',
    severity: 'High'
  },
  {
    pitfall: 'Targeting wrong investor types',
    impact: '60% of rejections due to misaligned investor focus',
    solution: 'Research stage, sector, and geographic preferences carefully',
    severity: 'High'
  },
  {
    pitfall: 'Overly optimistic projections',
    impact: 'Damages credibility and creates unrealistic expectations',
    solution: 'Use conservative assumptions with scenario planning',
    severity: 'Medium'
  },
  {
    pitfall: 'Neglecting existing business during fundraising',
    impact: 'Declining metrics during due diligence process',
    solution: 'Maintain business focus and delegate fundraising tasks',
    severity: 'Medium'
  }
];

export default function SeriesAFundingChecklistPage() {
  return (
    <main className="min-h-screen">
      <SEOOptimization 
        page="series-a-checklist"
        keywords={seoConfig.keywords}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">✅ Complete Checklist</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Series A Funding
              <span className="block text-gradient-accent">Preparation Checklist</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Complete preparation guide with 50+ essential requirements for Series A funding success. Based on analysis of 200+ funded startups and VC best practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">50+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Requirements</h3>
              <p className="text-white/80">Essential checklist items covered</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Funded Startups</h3>
              <p className="text-white/80">Analysis of successful Series A rounds</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">85%</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Success Rate</h3>
              <p className="text-white/80">Completion rate for prepared startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Categories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Series A Preparation Requirements
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive checklist organized by the four key areas that VCs evaluate during Series A due diligence
            </p>
          </div>

          <div className="space-y-12">
            {checklistCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-elevated">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-xl mr-6">
                      {categoryIndex + 1}
                    </span>
                    <div>
                      <h3 className="text-3xl font-bold text-primary-900">{category.category}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-primary-600 font-semibold text-lg">{category.weight} weighting</span>
                      </div>
                      <p className="text-secondary-700 mt-2">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="bg-white rounded-lg p-6 border-l-4 border-primary-500">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${ 
                                req.status === 'required' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {req.status === 'required' ? 'Required' : 'Recommended'}
                              </span>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                req.priority === 'Critical' ? 'bg-red-100 text-red-800' : 
                                req.priority === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {req.priority} Priority
                              </span>
                            </div>
                            <h4 className="text-lg font-semibold text-secondary-900 mb-2">{req.item}</h4>
                            <p className="text-secondary-700">{req.description}</p>
                          </div>
                          <div className="ml-4">
                            <input 
                              type="checkbox" 
                              className="w-6 h-6 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              aria-label={`Mark ${req.item} as complete`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Series A Fundraising Timeline
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Typical 6-9 month Series A process broken down by phase and key activities
            </p>
          </div>

          <div className="space-y-8">
            {timelinePhases.map((phase, index) => (
              <div key={index} className="card bg-gradient-to-r from-primary-50 to-white">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2">{phase.phase}</h3>
                      <p className="text-secondary-700 mb-6">{phase.description}</p>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-4">Key Tasks:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.tasks.map((task, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-secondary-700">{task}</span>
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

      {/* Common Pitfalls */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Avoid These Series A Pitfalls
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Common mistakes that derail Series A fundraising efforts and how to avoid them
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonPitfalls.map((pitfall, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      pitfall.severity === 'Critical' ? 'bg-red-500 text-white' : 
                      pitfall.severity === 'High' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      ⚠️
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-red-800">{pitfall.pitfall}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          pitfall.severity === 'Critical' ? 'bg-red-100 text-red-800' : 
                          pitfall.severity === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {pitfall.severity}
                        </span>
                      </div>
                      <p className="text-red-700 mb-4">{pitfall.impact}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">{pitfall.solution}</p>
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
              Ready to Start Your Series A Preparation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Use our expertise and tools to ensure your startup is fully prepared for Series A success
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Readiness Assessment</h3>
                <p className="text-white/80 mb-4">Evaluate your current Series A readiness with our comprehensive assessment</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Take Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Consultation</h3>
                <p className="text-white/80 mb-4">Get personalized guidance on your Series A preparation strategy</p>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Schedule Call
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
              Series A Preparation Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Additional tools and guides to support your Series A fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/resources/series-a-funding-checklist"
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
          headline: "Series A Funding Checklist 2024 | Complete Preparation Guide",
          description: "Complete Series A funding checklist with 50+ essential requirements covering financials, legal, team, and documentation for successful fundraising.",
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
            "@id": "https://vommuli.com/resources/series-a-funding-checklist"
          },
          wordCount: 4000,
          articleSection: "Series A Preparation",
          keywords: "Series A funding checklist, Series A preparation guide, Series A requirements"
        }}
      />

      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What are the main requirements for Series A funding?",
              answer: "Key Series A requirements include: $1M+ ARR, positive unit economics (LTV > 3x CAC), 20%+ monthly growth, complete leadership team, clean cap table, Delaware C-Corp structure, and 12-15 months runway."
            },
            {
              question: "How long should I prepare for Series A fundraising?",
              answer: "Series A preparation should begin 6-9 months before you need funding, with the full process taking 3-4 months for preparation plus 3-6 months for active fundraising."
            },
            {
              question: "What financial metrics do VCs look for in Series A?",
              answer: "VCs focus on ARR growth, unit economics (LTV/CAC ratio), gross margin, net revenue retention >100%, diverse customer base, and a clear path to profitability within 18-24 months."
            },
            {
              question: "What documents do I need for Series A due diligence?",
              answer: "Essential documents include: financial statements, cap table, board materials, customer contracts, IP documentation, employee agreements, insurance policies, and legal compliance records organized in a professional data room."
            }
          ]
        }}
      />
    </main>
  );
}