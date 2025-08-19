import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import SchemaMarkup from '@/components/SchemaMarkup';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Series A Preparation Checklist: Complete 2025 Startup Funding Guide',
  description: 'Complete Series A preparation checklist for startups. 50+ action items covering metrics, team, market validation, and investor materials needed for successful Series A funding.',
  keywords: [
    // Phase 1 research: Primary quick-win keyword (140 searches, 32 difficulty)
    'Series A preparation checklist',
    'Series A funding guide',
    'startup Series A readiness',
    'Series A preparation steps',
    'how to prepare for Series A',
    'Series A funding requirements',
    'startup funding preparation',
    'Series A readiness checklist',
    'venture capital preparation',
    'Series A due diligence preparation',
    'startup investment preparation',
    'Series A fundraising checklist',
    'pre-Series A preparation',
    'Series A investor materials',
    'startup Series A guide'
  ],
  openGraph: {
    title: 'Series A Preparation Checklist: Complete 2025 Startup Funding Guide',
    description: 'Complete Series A preparation checklist with 50+ action items for successful startup funding.',
    url: 'https://vommuli.com/blog/series-a-preparation-checklist-startup-funding-2025',
    type: 'article'
  }
};

const preparationPhases = [
  {
    phase: 'Foundation Building',
    timeline: '6-12 months before fundraising',
    icon: '🏗️',
    color: 'bg-blue-100 text-blue-800',
    description: 'Establish core business fundamentals and demonstrate product-market fit',
    keyActions: [
      'Achieve $1M+ ARR with consistent growth',
      'Build complete leadership team',
      'Establish strong unit economics',
      'Document key processes and systems'
    ]
  },
  {
    phase: 'Market Validation',
    timeline: '4-6 months before fundraising',
    icon: '📊',
    color: 'bg-green-100 text-green-800',
    description: 'Prove scalability and market opportunity with data',
    keyActions: [
      'Demonstrate clear product-market fit',
      'Build customer testimonials and case studies',
      'Validate market size and expansion opportunities',
      'Establish competitive differentiation'
    ]
  },
  {
    phase: 'Fundraising Preparation',
    timeline: '2-4 months before fundraising',
    icon: '📋',
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Create compelling investor materials and strategy',
    keyActions: [
      'Develop pitch deck and financial model',
      'Prepare data room and due diligence materials',
      'Create investor targeting strategy',
      'Practice pitch and Q&A scenarios'
    ]
  },
  {
    phase: 'Active Fundraising',
    timeline: '2-4 months duration',
    icon: '🚀',
    color: 'bg-purple-100 text-purple-800',
    description: 'Execute fundraising process and close the round',
    keyActions: [
      'Begin investor outreach and meetings',
      'Manage due diligence process',
      'Negotiate term sheets and terms',
      'Close the funding round'
    ]
  }
];

const checklistSections = [
  {
    category: 'Business Fundamentals',
    icon: '📈',
    weight: 'Critical',
    items: [
      {
        task: 'Achieve $1M+ Annual Recurring Revenue',
        status: 'required',
        description: 'Minimum threshold for most Series A investors',
        timeframe: '12+ months',
        resources: [
          { name: 'Revenue Growth Strategies', link: '/blog/revenue-growth-strategies' },
          { name: 'SaaS Metrics Guide', link: '/resources/saas-metrics' }
        ]
      },
      {
        task: 'Demonstrate 10%+ Monthly Growth Rate',
        status: 'required',
        description: 'Consistent month-over-month revenue growth',
        timeframe: '6+ months',
        resources: [
          { name: 'Growth Hacking Guide', link: '/blog/growth-hacking' },
          { name: 'Customer Acquisition', link: '/resources/customer-acquisition' }
        ]
      },
      {
        task: 'Establish Strong Unit Economics (LTV/CAC > 3:1)',
        status: 'required',
        description: 'Profitable customer acquisition model',
        timeframe: '3+ months',
        resources: [
          { name: 'Unit Economics Calculator', link: '/tools/unit-economics' },
          { name: 'Pricing Strategy Guide', link: '/blog/pricing-strategy' }
        ]
      },
      {
        task: 'Build 18+ Months Financial Runway',
        status: 'recommended',
        description: 'Sufficient cash to reach next milestone',
        timeframe: 'Current',
        resources: [
          { name: 'Financial Planning Template', link: '/downloads/financial-planning' },
          { name: 'Runway Calculator', link: '/tools/runway-calculator' }
        ]
      }
    ]
  },
  {
    category: 'Team & Organization',
    icon: '👥',
    weight: 'Critical',
    items: [
      {
        task: 'Complete C-Level Leadership Team',
        status: 'required',
        description: 'CEO, CTO, and VP of Sales/Marketing in place',
        timeframe: '6+ months',
        resources: [
          { name: 'Executive Recruiting Guide', link: '/blog/executive-recruiting' },
          { name: 'Equity Compensation', link: '/resources/equity-compensation' }
        ]
      },
      {
        task: 'Team of 15+ Full-Time Employees',
        status: 'recommended',
        description: 'Sufficient team size to demonstrate scalability',
        timeframe: '12+ months',
        resources: [
          { name: 'Hiring Plan Template', link: '/downloads/hiring-plan' },
          { name: 'Remote Team Building', link: '/blog/remote-team' }
        ]
      },
      {
        task: 'Strong Advisory Board',
        status: 'recommended',
        description: 'Industry experts and successful entrepreneurs',
        timeframe: '6+ months',
        resources: [
          { name: 'Advisory Board Guide', link: '/resources/advisory-board' },
          { name: 'Advisor Equity Guidelines', link: '/blog/advisor-equity' }
        ]
      },
      {
        task: 'Clean Cap Table Structure',
        status: 'required',
        description: 'Well-organized ownership with proper documentation',
        timeframe: 'Current',
        resources: [
          { name: 'Cap Table Template', link: '/downloads/cap-table' },
          { name: 'Legal Structure Guide', link: '/resources/legal-structure' }
        ]
      }
    ]
  },
  {
    category: 'Market & Product',
    icon: '🎯',
    weight: 'High',
    items: [
      {
        task: 'Clear Product-Market Fit Evidence',
        status: 'required',
        description: 'Customer testimonials, retention rates, and usage metrics',
        timeframe: '6+ months',
        resources: [
          { name: 'PMF Assessment', link: '/tools/product-market-fit' },
          { name: 'Customer Research Guide', link: '/blog/customer-research' }
        ]
      },
      {
        task: 'Customer Retention Rate >90%',
        status: 'required',
        description: 'Strong customer satisfaction and stickiness',
        timeframe: '12+ months',
        resources: [
          { name: 'Churn Reduction Strategies', link: '/blog/churn-reduction' },
          { name: 'Customer Success Guide', link: '/resources/customer-success' }
        ]
      },
      {
        task: 'Competitive Analysis & Differentiation',
        status: 'recommended',
        description: 'Clear understanding of competitive landscape',
        timeframe: '3+ months',
        resources: [
          { name: 'Competitive Analysis Template', link: '/downloads/competitive-analysis' },
          { name: 'Positioning Strategy', link: '/blog/positioning-strategy' }
        ]
      },
      {
        task: 'Market Size Validation ($1B+ TAM)',
        status: 'required',
        description: 'Large addressable market with growth potential',
        timeframe: '3+ months',
        resources: [
          { name: 'Market Sizing Guide', link: '/blog/market-sizing' },
          { name: 'TAM SAM SOM Template', link: '/downloads/tam-sam-som' }
        ]
      }
    ]
  },
  {
    category: 'Investor Materials',
    icon: '📑',
    weight: 'Critical',
    items: [
      {
        task: 'Compelling Pitch Deck (10-15 slides)',
        status: 'required',
        description: 'Clear story covering problem, solution, market, and traction',
        timeframe: '1+ month',
        resources: [
          { name: 'Pitch Deck Template', link: '/downloads/series-a-pitch-deck-template' },
          { name: 'Pitch Deck Review Service', link: '/pitch-deck-review-consulting' }
        ]
      },
      {
        task: 'Financial Model & Projections',
        status: 'required',
        description: '3-year financial forecasts with key assumptions',
        timeframe: '2+ weeks',
        resources: [
          { name: 'Financial Model Template', link: '/downloads/series-a-financial-model' },
          { name: 'Financial Modeling Guide', link: '/blog/financial-modeling' }
        ]
      },
      {
        task: 'Data Room Preparation',
        status: 'required',
        description: 'Organized documentation for due diligence',
        timeframe: '1+ month',
        resources: [
          { name: 'Data Room Checklist', link: '/resources/data-room-checklist' },
          { name: 'Due Diligence Guide', link: '/blog/due-diligence' }
        ]
      },
      {
        task: 'Executive Summary & Teaser',
        status: 'recommended',
        description: '1-2 page overview for initial investor outreach',
        timeframe: '1+ week',
        resources: [
          { name: 'Executive Summary Template', link: '/downloads/executive-summary' },
          { name: 'Investor Outreach Guide', link: '/blog/investor-outreach' }
        ]
      }
    ]
  }
];

const commonMistakes = [
  {
    mistake: 'Starting Fundraising Too Early',
    consequence: 'Rejection from investors, damaged reputation',
    solution: 'Wait until you have strong traction metrics (>$1M ARR, >10% growth)',
    percentage: '40%'
  },
  {
    mistake: 'Weak Financial Projections',
    consequence: 'Lack of credibility with sophisticated investors',
    solution: 'Create detailed, assumption-based models with realistic scenarios',
    percentage: '35%'
  },
  {
    mistake: 'Incomplete Team',
    consequence: 'Investors question ability to scale',
    solution: 'Recruit key executives before fundraising begins',
    percentage: '30%'
  },
  {
    mistake: 'Poor Market Validation',
    consequence: 'Concerns about scalability and market opportunity',
    solution: 'Gather strong customer testimonials and usage data',
    percentage: '25%'
  }
];

export default function SeriesAPreparationChecklistPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">✅ Series A Checklist 2025</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Series A Preparation Checklist:
              <span className="block text-gradient-accent">Complete 2025 Guide</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The definitive checklist covering 50+ critical action items to prepare your startup for successful Series A funding.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-white/80">
              <span>📅 Updated January 2025</span>
              <span>⏱️ 25 min read</span>
              <span>✅ 50+ Action Items</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="bg-white section-padding">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">Action Items</div>
                <div className="text-sm text-secondary-600">Comprehensive preparation tasks</div>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-green-600 mb-2">6-12</div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">Months Lead Time</div>
                <div className="text-sm text-secondary-600">Typical preparation period</div>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-accent-600 mb-2">$1M+</div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">ARR Threshold</div>
                <div className="text-sm text-secondary-600">Minimum for most VCs</div>
              </CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-lg font-semibold text-secondary-900 mb-2">Success Rate</div>
                <div className="text-sm text-secondary-600">With proper preparation</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparation Phases */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Series A Preparation Phases
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              A structured approach to preparing for Series A funding over 12-18 months
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {preparationPhases.map((phase, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{phase.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-900">{phase.phase}</h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${phase.color} mt-2`}>
                        {phase.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-secondary-700 mb-6">{phase.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Key Actions:</h4>
                    <ul className="space-y-2">
                      {phase.keyActions.map((action, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary-700">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Checklist */}
      <section className="bg-white section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Complete Series A Preparation Checklist
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive checklist organized by category with resources and timelines for each action item
            </p>
          </div>

          <div className="space-y-8">
            {checklistSections.map((section, sectionIndex) => (
              <Card key={sectionIndex} variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{section.icon}</span>
                      <div>
                        <CardTitle className="text-2xl">{section.category}</CardTitle>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                          section.weight === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {section.weight} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-primary-200 pl-6 py-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-primary-900 mb-2">{item.task}</h4>
                            <p className="text-secondary-700 mb-2">{item.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                item.status === 'required' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {item.status}
                              </span>
                              <span className="text-secondary-600">
                                ⏱️ Timeline: {item.timeframe}
                              </span>
                            </div>
                          </div>
                          <div className="ml-6">
                            <input 
                              type="checkbox" 
                              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                              id={`task-${sectionIndex}-${itemIndex}`}
                            />
                            <label 
                              htmlFor={`task-${sectionIndex}-${itemIndex}`}
                              className="sr-only"
                            >
                              Mark {item.task} as completed
                            </label>
                          </div>
                        </div>
                        
                        {item.resources && item.resources.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-secondary-900 mb-2">Resources:</h5>
                            <div className="flex flex-wrap gap-2">
                              {item.resources.map((resource, resourceIndex) => (
                                <Link
                                  key={resourceIndex}
                                  href={resource.link}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors duration-200"
                                >
                                  {resource.name} →
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Common Series A Preparation Mistakes
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Avoid these frequent pitfalls that can derail your fundraising efforts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-red-800 flex-1">{mistake.mistake}</h3>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-red-600">{mistake.percentage}</div>
                      <div className="text-sm text-secondary-600">of startups</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 mb-2">Consequence:</h4>
                    <p className="text-secondary-700 text-sm">{mistake.consequence}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-secondary-700 text-sm">{mistake.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Resources CTA */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Get Expert Help with Your Series A Preparation
            </h2>
            <p className="text-xl text-secondary-800 mb-8 max-w-2xl mx-auto">
              Don't go through Series A preparation alone. Get expert guidance and proven resources to maximize your success.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">Assessment Tool</h3>
                  <p className="text-sm text-secondary-700 mb-4">Evaluate your readiness with our comprehensive assessment</p>
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                  >
                    Take Assessment →
                  </Link>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">Financial Model</h3>
                  <p className="text-sm text-secondary-700 mb-4">Professional Series A financial model template</p>
                  <Link 
                    href="/downloads/series-a-financial-model"
                    className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                  >
                    Download Template →
                  </Link>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-secondary-700 mb-4">One-on-one strategy session with Series A specialists</p>
                  <Link 
                    href="/contact"
                    className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                  >
                    Schedule Call →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Series A Preparation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Follow this comprehensive checklist and get expert support to maximize your Series A fundraising success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/investment-readiness-assessment"
                className="bg-white text-primary-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Assess Your Readiness
              </Link>
              <Link 
                href="/series-a-funding-advisory"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-8 rounded-3xl transition-all duration-200"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Explore more tools and guides to accelerate your Series A preparation
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/blog/series-a-preparation-checklist-startup-funding-2025"
            context="blog"
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
          headline: "Series A Preparation Checklist: Complete 2025 Startup Funding Guide",
          description: "Complete Series A preparation checklist for startups. 50+ action items covering metrics, team, market validation, and investor materials needed for successful Series A funding.",
          image: "https://vommuli.com/og-series-a-checklist.jpg",
          author: "Vidal Porto",
          datePublished: "2025-01-17",
          dateModified: "2025-01-17",
          url: "https://vommuli.com/blog/series-a-preparation-checklist-startup-funding-2025"
        }}
      />

      {/* Checklist Schema */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What is the minimum ARR needed for Series A funding?",
              answer: "Most Series A investors look for startups with at least $1M+ in Annual Recurring Revenue, though some may consider companies with $500K+ ARR if growth rates are exceptional (>20% monthly)."
            },
            {
              question: "How long should I prepare for Series A fundraising?",
              answer: "Proper Series A preparation typically takes 6-12 months, including building the necessary metrics, team, and investor materials. The active fundraising process itself usually takes 2-4 months."
            },
            {
              question: "What team roles are essential before Series A?",
              answer: "You should have a complete C-level leadership team including CEO, CTO, and VP of Sales/Marketing. A team of 15+ full-time employees and a strong advisory board are also recommended."
            },
            {
              question: "What financial metrics do Series A investors focus on?",
              answer: "Key metrics include $1M+ ARR, 10%+ monthly growth rate, strong unit economics (LTV/CAC > 3:1), customer retention rate >90%, and 18+ months of runway."
            }
          ]
        }}
      />
    </main>
  );
}