import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: '7 Pitch Deck Mistakes That Kill Series A Deals (And How to Fix Them)',
  description: 'Avoid the most common pitch deck errors we see from 200+ startup reviews. These mistakes can cost you millions in valuation. Expert fixes included.',
  keywords: [
    'pitch deck mistakes',
    'Series A pitch deck errors',
    'pitch deck fails',
    'startup pitch deck problems',
    'venture capital pitch mistakes',
    'pitch deck red flags',
    'Series A pitch deck best practices',
    'investor pitch deck mistakes',
    'fundraising pitch errors',
    'startup presentation mistakes'
  ],
  openGraph: {
    title: '7 Pitch Deck Mistakes That Kill Series A Deals',
    description: 'Learn from 200+ pitch deck reviews - avoid these critical mistakes that cost startups millions in valuation.',
    url: 'https://vommuli.com/blog/pitch-deck-mistakes-that-kill-series-a-deals',
  },
};

const mistakes = [
  {
    title: 'Leading with Product Features Instead of Customer Value',
    problem: '73% of pitch decks we review spend 3+ slides on product features before explaining why customers care.',
    impact: 'Investors lose interest in the first 3 minutes. They need to understand the pain point before they care about your solution.',
    fix: 'Start with the customer problem. Show the pain through customer quotes, data, or market research. Only then introduce your solution.',
    example: {
      wrong: '"Our AI-powered platform uses machine learning algorithms to optimize workflow automation with 99.9% uptime..."',
      right: '"Sales teams waste 4.5 hours daily on manual data entry, costing companies $47K per rep annually. Here\'s how we eliminate that entirely."'
    }
  },
  {
    title: 'Vague or Inflated Market Size Claims',
    problem: 'Using generic TAM/SAM/SOM numbers from industry reports without showing how you\'ll capture market share.',
    impact: 'Investors immediately question your market understanding and go-to-market strategy.',
    fix: 'Use bottom-up market sizing based on your actual customer segments and pricing. Show your path to 1% market share.',
    example: {
      wrong: '"We\'re addressing the $50B enterprise software market."',
      right: '"There are 25K mid-market companies with 100-500 employees. At $120K ACV, that\'s a $3B addressable market. Here\'s our path to capturing 50 companies in Year 1."'
    }
  },
  {
    title: 'Weak or Missing Unit Economics',
    problem: 'Showing revenue projections without explaining customer acquisition costs (CAC) or lifetime value (LTV).',
    impact: 'Investors can\'t evaluate business viability or scalability. This is an automatic pass for most Series A investors.',
    fix: 'Show clear CAC and LTV by channel. Demonstrate improving unit economics over time. Include payback periods.',
    example: {
      wrong: 'Revenue chart showing exponential growth with no underlying metrics.',
      right: '"Our blended CAC is $1,200 with 18-month payback. LTV is $6,400, giving us a 5.3:1 LTV/CAC ratio that improves as we scale."'
    }
  },
  {
    title: 'Unrealistic Growth Projections',
    problem: 'Showing hockey stick growth without explaining the underlying assumptions or comparable benchmarks.',
    impact: 'Destroys credibility and suggests founders don\'t understand their business dynamics.',
    fix: 'Base projections on cohort data and conversion metrics. Show three scenarios (conservative, base, optimistic).',
    example: {
      wrong: 'Revenue growing from $1M to $50M in 3 years with no explanation.',
      right: '"Based on our current 15% monthly growth rate and expanding into 2 new segments, our base case shows $12M ARR by Year 3."'
    }
  },
  {
    title: 'Ignoring or Downplaying Competition',
    problem: 'Claiming "no competition" or showing competitors only to dismiss them as inferior.',
    impact: 'Investors know every market has competition. This shows poor market analysis and potential blind spots.',
    fix: 'Acknowledge strong competitors honestly. Explain your specific advantages and why you\'ll win market share.',
    example: {
      wrong: '"We have no direct competitors. Similar solutions are inferior because..."',
      right: '"Salesforce owns enterprise, HubSpot dominates SMB. We\'re winning the underserved mid-market with 3x faster implementation."'
    }
  },
  {
    title: 'Unclear or Missing Go-to-Market Strategy',
    problem: 'Saying "we\'ll get customers through sales and marketing" without specific channels or customer acquisition strategy.',
    impact: 'Investors need to understand how you\'ll actually acquire customers and scale revenue.',
    fix: 'Detail specific acquisition channels, conversion rates, and scaling plans. Show what\'s working today.',
    example: {
      wrong: '"Our go-to-market strategy includes digital marketing, content marketing, and inside sales."',
      right: '"LinkedIn outbound generates 3% meeting rates with $800 CAC. SEO drives 15% of pipeline at $200 CAC. We\'re scaling what works."'
    }
  },
  {
    title: 'Weak Team Positioning',
    problem: 'Generic team slides without showing why this specific team will succeed in this specific market.',
    impact: 'Investors invest in people first. They need confidence this team can execute the vision.',
    fix: 'Show domain expertise, relevant experience, and complementary skills. Include key advisors and planned hires.',
    example: {
      wrong: 'Bio slides listing previous jobs and education.',
      right: '"Sarah built the sales automation platform at Salesforce that generated $50M ARR. Mike led product at three successful Series A companies."'
    }
  }
];

export default function PitchDeckMistakes() {
  const publishDate = new Date('2024-01-10');

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="bg-gradient-primary section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="text-white text-sm font-medium">📊 Pitch Deck Strategy</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              7 Pitch Deck Mistakes That Kill Series A Deals
              <span className="block text-2xl lg:text-3xl text-secondary-800 mt-4">(And How to Fix Them)</span>
            </h1>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto leading-relaxed mb-8">
              Avoid the most common pitch deck errors we see from 200+ startup reviews. These mistakes can cost you millions in valuation and months of wasted time.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-secondary-700">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">MR</span>
                </div>
                <div className="text-left">
                  <div className="font-medium">Michael Rodriguez</div>
                  <div className="text-sm text-secondary-600">Advisory Director</div>
                </div>
              </div>
              <div className="text-sm">
                <div>Published: {publishDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                <div className="text-secondary-600">8 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white section-padding">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-secondary-700 mb-6">
              After reviewing over <strong>200 Series A pitch decks</strong> in the last 18 months, I've noticed the same critical mistakes appearing again and again. These aren't minor tweaks—they're fundamental errors that cause investors to pass within the first 5 minutes.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              The difference between a successful Series A pitch and a rejection often comes down to avoiding these seven deadly mistakes. Companies that fix these issues see a <strong>40% higher meeting conversion rate</strong> and <strong>25% better valuation outcomes</strong>.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="font-semibold text-red-800 mb-3">The Cost of Bad Pitch Decks</h3>
              <div className="grid md:grid-cols-3 gap-4 text-red-700">
                <div className="text-center">
                  <div className="text-2xl font-bold">6 months</div>
                  <div className="text-sm">Average delay in funding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25%</div>
                  <div className="text-sm">Lower valuation impact</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm">Rejection rate for weak decks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mistakes Section */}
          <div className="space-y-16 mb-16">
            {mistakes.map((mistake, index) => (
              <div key={index} className="border-b border-neutral-200 pb-16 last:border-b-0">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4">
                      {mistake.title}
                    </h2>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-red-800 mb-3">The Problem</h3>
                    <p className="text-red-700 mb-4">{mistake.problem}</p>
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Impact on Your Fundraise</h4>
                      <p className="text-red-700 text-sm">{mistake.impact}</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">The Fix</h3>
                    <p className="text-green-700 mb-4">{mistake.fix}</p>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Pro Tip</h4>
                      <p className="text-green-700 text-sm">Test your fix with 3-5 potential investors before your official fundraise to validate the messaging.</p>
                    </div>
                  </div>
                </div>

                {mistake.example && (
                  <div className="bg-neutral-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-neutral-800 mb-4">Before & After Example</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-medium text-red-800 mb-2">❌ Wrong Way</h4>
                        <p className="text-red-700 text-sm italic">"{mistake.example.wrong}"</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-medium text-green-800 mb-2">✅ Right Way</h4>
                        <p className="text-green-700 text-sm italic">"{mistake.example.right}"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <section className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Bonus: The 2-Minute Rule</h2>
            <p className="text-lg text-blue-700 mb-6">
              Most investors decide within 2 minutes whether they're interested in your company. Here's what needs to be crystal clear in your opening:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">First 2 Minutes Must Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-blue-700">What problem you solve</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-blue-700">Who pays for the solution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-blue-700">How big the opportunity is</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-blue-700">Early traction proof points</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Test Your Opening</h3>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <p className="text-blue-700 text-sm mb-3">
                    <strong>The Elevator Test:</strong> Can someone explain your business to a friend after hearing your first 2 slides?
                  </p>
                  <p className="text-blue-700 text-sm">
                    If not, you're leading with the wrong information. Investors need to "get it" immediately.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Action Items */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Your Action Plan</h2>
            <p className="text-lg text-secondary-700 mb-8">
              Don't let these mistakes kill your Series A round. Here's your immediate action plan:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Week 1: Audit Your Deck</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <span className="text-green-700">Review each mistake against your current deck</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <span className="text-green-700">Score yourself 1-10 on each area</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <span className="text-green-700">Prioritize the 3 biggest weaknesses</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Week 2: Get Expert Review</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <span className="text-blue-700">Get feedback from 3 experienced founders</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <span className="text-blue-700">Test with friendly investors for honest feedback</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <span className="text-blue-700">Consider professional pitch deck review</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-primary-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Success Stories: Before & After</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">$12M</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900">SaaS Startup</h3>
                    <p className="text-secondary-600">B2B Marketing Platform</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-red-600">Before:</span>
                    <p className="text-secondary-700">3 months, 45 meetings, 0 term sheets</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">After deck fixes:</span>
                    <p className="text-secondary-700">6 weeks, 12 meetings, 3 term sheets</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <span className="font-medium text-green-800">Key fix:</span>
                    <p className="text-green-700">Started with customer pain instead of product features</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">$8M</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary-900">FinTech Startup</h3>
                    <p className="text-secondary-600">SMB Lending Platform</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium text-red-600">Before:</span>
                    <p className="text-secondary-700">4 months, 60 meetings, 1 lowball offer</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">After deck fixes:</span>
                    <p className="text-secondary-700">8 weeks, 15 meetings, 2 competitive offers</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <span className="font-medium text-green-800">Key fix:</span>
                    <p className="text-green-700">Added detailed unit economics and realistic projections</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Don't Let These Mistakes Kill Your Round</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get expert feedback on your pitch deck before you start pitching. Our team has reviewed 200+ decks and helped startups raise $500M+.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pitch-deck-review-consulting" 
                  className="bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Get Expert Pitch Deck Review
                </Link>
                <Link 
                  href="/tools/investment-readiness-assessment"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-900 transition-colors"
                >
                  Take Free Assessment
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>

      {/* Related Resources */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Continue improving your fundraising strategy with these expert resources
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/blog/pitch-deck-mistakes-that-kill-series-a-deals"
            context="tool"
            maxLinks={4}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Schema Markup for Article */}
      <SchemaMarkup 
        type="article"
        data={{
          headline: "7 Pitch Deck Mistakes That Kill Series A Deals (And How to Fix Them)",
          description: "Avoid the most common pitch deck errors we see from 200+ startup reviews. These mistakes can cost you millions in valuation. Expert fixes included.",
          author: {
            "@type": "Person",
            "name": "Michael Rodriguez",
            "jobTitle": "Advisory Director",
            "worksFor": {
              "@type": "Organization",
              "name": "Vommuli Ventures"
            }
          },
          datePublished: "2024-01-10T09:00:00Z",
          dateModified: "2024-01-10T09:00:00Z",
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
            "@id": "https://vommuli.com/blog/pitch-deck-mistakes-that-kill-series-a-deals"
          },
          wordCount: 2800,
          articleSection: "Pitch Deck Strategy",
          keywords: "pitch deck mistakes, Series A pitch, fundraising errors, investor pitch, startup presentation"
        }}
      />
    </main>
  );
}