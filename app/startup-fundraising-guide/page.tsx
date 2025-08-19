import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = generateMetadata(seoConfigs.startupFundraisingGuide);

const fundraisingStages = [
  {
    stage: 'Pre-Seed',
    amount: '$50K - $500K',
    purpose: 'Validate product-market fit',
    timeline: '3-6 months',
    keyMetrics: 'User engagement, early traction'
  },
  {
    stage: 'Seed',
    amount: '$500K - $2M', 
    purpose: 'Build MVP and initial growth',
    timeline: '6-12 months',
    keyMetrics: 'Revenue, user growth'
  },
  {
    stage: 'Series A',
    amount: '$2M - $15M',
    purpose: 'Scale proven business model',
    timeline: '12-18 months',
    keyMetrics: '$1M+ ARR, strong unit economics'
  },
  {
    stage: 'Series B',
    amount: '$10M - $50M',
    purpose: 'Market expansion',
    timeline: '18-24 months', 
    keyMetrics: '$5M+ ARR, proven scalability'
  }
];

const commonMistakes = [
  {
    mistake: 'Starting fundraising too late',
    impact: 'Forces rushed decisions and weakens negotiation position',
    solution: 'Begin fundraising with 12-15 months runway remaining'
  },
  {
    mistake: 'Targeting wrong investors',
    impact: '60% of rejections come from misaligned targeting',
    solution: 'Research stage, sector, and geography alignment before outreach'
  },
  {
    mistake: 'Weak financial projections',
    impact: 'Raises questions about business acumen',
    solution: 'Build detailed 3-year model with scenario planning'
  },
  {
    mistake: 'Generic pitch narrative',
    impact: 'Fails to build investor excitement',
    solution: 'Craft compelling story focused on market opportunity'
  }
];

export default function StartupFundraisingGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - SEO Optimized */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📚 Complete Fundraising Guide</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The Complete Startup
              <span className="block text-gradient-accent">Fundraising Guide 2024</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Master the startup fundraising process with proven strategies from advisors who have helped startups raise $500M+. Everything you need for successful Series A funding.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Funded Startups</h3>
              <p className="text-white/80">Real data from successful funding rounds</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$500M</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Total funding secured for clients</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">85%</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Success Rate</h3>
              <p className="text-white/80">Introduction-to-term-sheet conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Your Complete Fundraising Roadmap
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Follow this proven step-by-step process used by 200+ successful startups
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Fundraising Fundamentals', sections: ['Understanding funding stages', 'When to raise capital', 'Types of investors', 'Valuation basics'] },
              { title: 'Preparation Phase', sections: ['Investment readiness assessment', 'Financial model building', 'Pitch deck creation', 'Legal preparation'] },
              { title: 'Investor Outreach', sections: ['Building investor lists', 'Getting warm introductions', 'Email templates', 'Meeting preparation'] },
              { title: 'Due Diligence & Closing', sections: ['Data room preparation', 'Term sheet negotiation', 'Legal documentation', 'Post-funding setup'] }
            ].map((chapter, index) => (
              <div key={index} className="bg-primary-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  Chapter {index + 1}: {chapter.title}
                </h3>
                <ul className="space-y-2">
                  {chapter.sections.map((section, i) => (
                    <li key={i} className="flex items-center text-secondary-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Stages Breakdown */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Startup Funding Stages Explained
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Understanding each funding stage is crucial for timing your fundraising correctly
            </p>
          </div>

          <div className="space-y-8">
            {fundraisingStages.map((stage, index) => (
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
                      <div className="text-sm text-secondary-600 mb-1">Funding Amount</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.amount}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Purpose</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.purpose}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Timeline</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.timeline}</div>
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-sm text-secondary-600 mb-1">Key Metrics</div>
                      <div className="text-lg font-semibold text-secondary-900">{stage.keyMetrics}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series A Deep Dive */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Series A Funding: The Complete Process
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Series A is often the most challenging funding round. Here's how to navigate it successfully.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">When You're Ready for Series A</h3>
            <p className="text-secondary-700 mb-6">
              Series A funding typically occurs when startups have validated their business model and are ready to scale. 
              Key indicators include having $1M+ in annual recurring revenue, strong unit economics, and a clear path to profitability.
            </p>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
              <h4 className="font-semibold text-primary-900 mb-3">Series A Readiness Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-secondary-800 mb-2">Financial Metrics</h5>
                  <ul className="space-y-1 text-secondary-700">
                    <li>• $1M+ Annual Recurring Revenue</li>
                    <li>• Positive unit economics (LTV &gt; 3x CAC)</li>
                    <li>• 20%+ month-over-month growth</li>
                    <li>• 12+ months runway</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-secondary-800 mb-2">Business Foundation</h5>
                  <ul className="space-y-1 text-secondary-700">
                    <li>• Product-market fit validation</li>
                    <li>• Repeatable sales process</li>
                    <li>• Strong customer retention</li>
                    <li>• Experienced leadership team</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary-900 mb-4">The Series A Timeline</h3>
            <p className="text-secondary-700 mb-6">
              A typical Series A fundraising process takes 6-8 months from preparation to close. Here's the breakdown:
            </p>

            <div className="space-y-6">
              {[
                { phase: 'Preparation', duration: '3-4 months', activities: 'Financial modeling, pitch deck creation, legal cleanup' },
                { phase: 'Investor Outreach', duration: '2-3 months', activities: 'Building lists, getting introductions, initial meetings' },
                { phase: 'Due Diligence', duration: '4-6 weeks', activities: 'Data room, reference calls, detailed analysis' },
                { phase: 'Term Sheet & Closing', duration: '2-4 weeks', activities: 'Negotiation, legal documentation, wire transfer' }
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-primary-900">{phase.phase}</h4>
                      <span className="text-sm text-secondary-600 bg-white px-2 py-1 rounded">{phase.duration}</span>
                    </div>
                    <p className="text-secondary-700">{phase.activities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Avoid These Critical Fundraising Mistakes
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Learn from the most common errors that cause startups to fail in their fundraising efforts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonMistakes.map((item, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                      ❌
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800 mb-2">{item.mistake}</h3>
                      <p className="text-red-700">{item.impact}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources CTA */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Fundraising Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the tools and templates you need to successfully raise your next funding round
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Free Assessment</h3>
                <p className="text-white/80 mb-4">Evaluate your startup's investment readiness with our comprehensive 50-point analysis</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Take Assessment Free
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Expert Consultation</h3>
                <p className="text-white/80 mb-4">Get personalized fundraising guidance from advisors who raised $500M+ for clients</p>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Schedule Consultation
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
              Continue Learning
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Dive deeper into specific aspects of startup fundraising
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/startup-fundraising-guide"
            context="tool"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Enhanced Schema Markup for Article */}
      <SchemaMarkup 
        type="article"
        data={{
          headline: "The Complete Startup Fundraising Guide 2024",
          description: "Master the startup fundraising process with proven strategies from advisors who have helped startups raise $500M+. Complete Series A funding guide.",
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
            "@id": "https://vommuli.com/startup-fundraising-guide"
          },
          wordCount: 2500,
          articleSection: "Startup Fundraising",
          keywords: "startup fundraising guide, Series A funding, venture capital process, fundraising timeline"
        }}
      />

      {/* FAQ Schema for Common Questions */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "How long does startup fundraising typically take?",
              answer: "A typical startup fundraising process takes 6-8 months from preparation to close for Series A rounds. Pre-seed and seed rounds can be faster at 3-4 months."
            },
            {
              question: "When should startups start fundraising?",
              answer: "Startups should begin fundraising when they have 12-15 months of runway remaining. This provides enough time for the full process without forcing rushed decisions."
            },
            {
              question: "What do investors look for in Series A startups?",
              answer: "Series A investors look for $1M+ ARR, strong unit economics (LTV > 3x CAC), proven product-market fit, and a clear path to scalability and profitability."
            },
            {
              question: "How much equity do startups typically give up in Series A?",
              answer: "Startups typically give up 20-25% equity in Series A rounds, though this varies based on valuation, funding amount, and negotiation dynamics."
            }
          ]
        }}
      />
    </main>
  );
}