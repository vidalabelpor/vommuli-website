import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import SchemaMarkup from '@/components/SchemaMarkup';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Investment Readiness Assessment: Complete Guide to Series A Funding Preparation 2025',
  description: 'Comprehensive guide to investment readiness assessment for Series A funding. Learn how to evaluate your startup\'s readiness, improve weak areas, and successfully raise venture capital.',
  keywords: [
    // Phase 1 research: Primary quick-win keyword (300 searches, 40 difficulty)
    'investment readiness assessment',
    'startup funding readiness',
    'Series A preparation assessment',
    'fundraising readiness check',
    'startup readiness evaluation',
    'investment readiness tool',
    'Series A readiness test',
    'startup investment evaluation',
    'fundraising preparation assessment',
    'investment readiness score',
    'startup funding evaluation',
    'Series A preparation checklist',
    'investment readiness criteria',
    'startup readiness metrics',
    'funding readiness analysis'
  ],
  openGraph: {
    title: 'Investment Readiness Assessment: Complete Guide to Series A Funding Preparation 2025',
    description: 'Comprehensive guide to investment readiness assessment for Series A funding preparation and venture capital readiness.',
    url: 'https://vommuli.com/blog/investment-readiness-assessment-guide-series-a-funding',
    type: 'article'
  }
};

const readinessCriteria = [
  {
    category: 'Business Metrics',
    weight: '40%',
    icon: '📊',
    factors: [
      'Annual Recurring Revenue (ARR) of $1M+',
      'Monthly growth rate of 10%+',
      'Unit economics: LTV/CAC ratio > 3:1',
      'Clear path to $10M ARR within 24 months'
    ],
    benchmarks: {
      excellent: '$2M+ ARR, 15%+ growth',
      good: '$1M+ ARR, 10%+ growth',
      needsWork: '<$1M ARR, <10% growth'
    }
  },
  {
    category: 'Market Traction',
    weight: '25%',
    icon: '🚀',
    factors: [
      'Product-market fit validation',
      'Customer retention rate >90%',
      'Market share growth in target segment',
      'Strong customer testimonials and case studies'
    ],
    benchmarks: {
      excellent: 'Clear PMF, 95%+ retention',
      good: 'Strong PMF signals, 90%+ retention',
      needsWork: 'Limited PMF evidence, <90% retention'
    }
  },
  {
    category: 'Team & Operations',
    weight: '20%',
    icon: '👥',
    factors: [
      'Complete leadership team (CEO, CTO, VP Sales)',
      'Team size of 10+ employees',
      'Previous startup/scale-up experience',
      'Strong advisory board with industry expertise'
    ],
    benchmarks: {
      excellent: 'Complete team, strong experience',
      good: 'Most roles filled, some experience',
      needsWork: 'Key gaps, limited experience'
    }
  },
  {
    category: 'Financial Health',
    weight: '15%',
    icon: '💰',
    factors: [
      '12+ months runway remaining',
      'Financial planning and forecasting systems',
      'Clean cap table structure',
      'Previous funding history (if applicable)'
    ],
    benchmarks: {
      excellent: '18+ months runway, strong systems',
      good: '12+ months runway, basic systems',
      needsWork: '<12 months runway, limited systems'
    }
  }
];

const readinessStages = [
  {
    stage: 'Pre-Seed Ready',
    score: '30-50%',
    characteristics: [
      'Product development stage',
      'Initial customer validation',
      'Small team (3-5 people)',
      'Limited revenue or pre-revenue'
    ],
    nextSteps: [
      'Focus on product-market fit',
      'Build initial customer base',
      'Expand team strategically',
      'Establish basic financial systems'
    ],
    timeline: '6-12 months to Series A readiness'
  },
  {
    stage: 'Seed Ready',
    score: '50-70%',
    characteristics: [
      'Product-market fit signals',
      'Growing customer base',
      'Team of 5-10 people',
      'Revenue of $100K-$500K ARR'
    ],
    nextSteps: [
      'Scale customer acquisition',
      'Optimize unit economics',
      'Build operational systems',
      'Prepare Series A materials'
    ],
    timeline: '3-6 months to Series A readiness'
  },
  {
    stage: 'Series A Ready',
    score: '70-90%',
    characteristics: [
      'Strong product-market fit',
      'Scalable business model',
      'Team of 10+ people',
      'Revenue of $1M+ ARR'
    ],
    nextSteps: [
      'Refine pitch and materials',
      'Target appropriate VCs',
      'Prepare for due diligence',
      'Optimize growth metrics'
    ],
    timeline: 'Ready to fundraise immediately'
  },
  {
    stage: 'Series A+ Ready',
    score: '90-100%',
    characteristics: [
      'Proven scalable business',
      'Strong leadership team',
      'Team of 20+ people',
      'Revenue of $3M+ ARR'
    ],
    nextSteps: [
      'Consider Series B preparation',
      'Explore growth capital options',
      'Plan international expansion',
      'Build strategic partnerships'
    ],
    timeline: 'Consider larger funding rounds'
  }
];

const commonWeaknesses = [
  {
    weakness: 'Weak Unit Economics',
    prevalence: '65%',
    impact: 'High',
    description: 'LTV/CAC ratio below 3:1 or negative gross margins',
    solutions: [
      'Optimize customer acquisition costs',
      'Increase customer lifetime value',
      'Improve pricing strategy',
      'Reduce customer churn'
    ]
  },
  {
    weakness: 'Incomplete Team',
    prevalence: '55%',
    impact: 'High',
    description: 'Missing key leadership roles or insufficient experience',
    solutions: [
      'Recruit experienced executives',
      'Build strong advisory board',
      'Develop internal talent',
      'Consider interim leadership'
    ]
  },
  {
    weakness: 'Limited Market Validation',
    prevalence: '45%',
    impact: 'Medium',
    description: 'Unclear product-market fit or small addressable market',
    solutions: [
      'Conduct customer development interviews',
      'Expand market research',
      'Test new market segments',
      'Validate pricing strategies'
    ]
  },
  {
    weakness: 'Poor Financial Planning',
    prevalence: '40%',
    impact: 'Medium',
    description: 'Lack of financial forecasting or runway management',
    solutions: [
      'Implement financial planning tools',
      'Hire experienced CFO or controller',
      'Create detailed budget forecasts',
      'Establish key metrics tracking'
    ]
  }
];

export default function InvestmentReadinessAssessmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🎯 Investment Readiness Guide 2025</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Investment Readiness Assessment:
              <span className="block text-gradient-accent">Series A Funding Guide</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Complete guide to evaluating your startup's investment readiness, improving weak areas, and successfully raising Series A funding.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-white/80">
              <span>📅 Updated January 2025</span>
              <span>⏱️ 20 min read</span>
              <span>🎯 For Series A Startups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Overview */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              What is Investment Readiness Assessment?
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              An investment readiness assessment is a comprehensive evaluation of your startup's preparedness for institutional investment, measuring key criteria that VCs use to make funding decisions.
            </p>
          </div>

          <Card variant="elevated" className="mb-12">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">50+ Data Points</h3>
                  <p className="text-secondary-700">Comprehensive evaluation across business metrics, team, and market traction</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Instant Results</h3>
                  <p className="text-secondary-700">Get your readiness score and actionable recommendations in minutes</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">VC-Backed Criteria</h3>
                  <p className="text-secondary-700">Assessment based on actual VC evaluation frameworks and success patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Take Assessment CTA */}
          <div className="text-center mb-16">
            <Card variant="brand">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Assess Your Investment Readiness?
                </h3>
                <p className="text-white/90 mb-6">
                  Take our comprehensive assessment and get your personalized readiness score with expert recommendations.
                </p>
                <Link 
                  href="/tools/investment-readiness-assessment"
                  className="bg-white text-primary-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
                >
                  Take Free Assessment
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Investment Readiness Assessment Criteria
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Our assessment evaluates four key areas that Series A investors focus on during their evaluation process
            </p>
          </div>

          <div className="space-y-8">
            {readinessCriteria.map((criteria, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{criteria.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-900">{criteria.category}</h3>
                          <span className="text-primary-600 font-semibold">{criteria.weight} weighting</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Key Evaluation Factors:</h4>
                      <ul className="space-y-2">
                        {criteria.factors.map((factor, i) => (
                          <li key={i} className="flex items-start text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Performance Benchmarks:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium text-green-800">Excellent:</span>
                          <span className="text-sm text-secondary-700 ml-2">{criteria.benchmarks.excellent}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium text-yellow-800">Good:</span>
                          <span className="text-sm text-secondary-700 ml-2">{criteria.benchmarks.good}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                          <span className="text-sm font-medium text-red-800">Needs Work:</span>
                          <span className="text-sm text-secondary-700 ml-2">{criteria.benchmarks.needsWork}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Readiness Stages */}
      <section className="bg-white section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Investment Readiness Stages
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Understanding where your startup stands on the investment readiness spectrum
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {readinessStages.map((stage, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-primary-900">{stage.stage}</h3>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {stage.score}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Characteristics:</h4>
                    <ul className="space-y-2">
                      {stage.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary-700">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Next Steps:</h4>
                    <ul className="space-y-2">
                      {stage.nextSteps.map((step, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary-700">
                          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-primary-900">Timeline to Series A:</div>
                    <div className="text-sm text-primary-700">{stage.timeline}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Weaknesses */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              Most Common Investment Readiness Weaknesses
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Based on our analysis of 1,000+ startup assessments, these are the most frequent areas needing improvement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonWeaknesses.map((weakness, index) => (
              <Card key={index} variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-primary-900 flex-1">{weakness.weakness}</h3>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-red-600">{weakness.prevalence}</div>
                      <div className="text-sm text-secondary-600">of startups</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      weakness.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {weakness.impact} Impact
                    </span>
                  </div>
                  
                  <p className="text-secondary-700 mb-6">{weakness.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {weakness.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary-700">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {solution}
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

      {/* Assessment Process */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
              How Our Investment Readiness Assessment Works
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              A simple 5-minute process that provides comprehensive insights into your fundraising readiness
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Complete the Assessment</h3>
                <p className="text-secondary-700">Answer questions about your business metrics, team, market traction, and financial health. Takes approximately 5 minutes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Get Your Score</h3>
                <p className="text-secondary-700">Receive an instant readiness score (0-100%) with detailed breakdown across the four key assessment categories.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Review Recommendations</h3>
                <p className="text-secondary-700">Get personalized, actionable recommendations to improve your readiness score and prepare for successful fundraising.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">Take Action</h3>
                <p className="text-secondary-700">Implement improvements and optionally schedule a consultation with our Series A funding experts for personalized guidance.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/tools/investment-readiness-assessment"
              className="bg-primary-900 text-white hover:bg-primary-800 font-semibold py-3 px-8 rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Start Your Assessment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Consultation CTA */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Expert Help Improving Your Investment Readiness?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our Series A funding experts who have helped 200+ startups successfully raise capital.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Free Assessment</h3>
                <p className="text-white/80 mb-4">Complete evaluation with personalized recommendations</p>
                <Link 
                  href="/tools/investment-readiness-assessment"
                  className="bg-white text-primary-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-3xl transition-all duration-200 inline-block"
                >
                  Take Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Consultation</h3>
                <p className="text-white/80 mb-4">One-on-one strategy session with Series A specialists</p>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-6 rounded-3xl transition-all duration-200 inline-block"
                >
                  Schedule Call
                </Link>
              </div>
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
            currentPage="/blog/investment-readiness-assessment-guide-series-a-funding"
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
          headline: "Investment Readiness Assessment: Complete Guide to Series A Funding Preparation 2025",
          description: "Comprehensive guide to investment readiness assessment for Series A funding. Learn how to evaluate your startup's readiness, improve weak areas, and successfully raise venture capital.",
          image: "https://vommuli.com/og-investment-readiness.jpg",
          author: "Vidal Porto",
          datePublished: "2025-01-17",
          dateModified: "2025-01-17",
          url: "https://vommuli.com/blog/investment-readiness-assessment-guide-series-a-funding"
        }}
      />
    </main>
  );
}