import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOOptimization from '@/components/SEOOptimization';

const seoConfig = {
  title: 'Startup Pitch Deck Guide 2024 | How to Create Winning Investor Presentations | Vommuli Ventures',
  description: 'Complete startup pitch deck guide with templates, examples, and expert tips. Learn how to create compelling investor presentations that secure Series A funding.',
  keywords: [
    'startup pitch deck guide',
    'how to create a pitch deck',
    'investor presentation template',
    'pitch deck examples',
    'startup pitch deck template',
    'Series A pitch deck',
    'venture capital pitch deck',
    'investor pitch guide',
    'pitch deck best practices',
    'startup presentation guide'
  ],
  canonical: '/resources/startup-pitch-deck-guide',
  openGraph: {
    title: 'Startup Pitch Deck Guide 2024 | Create Winning Investor Presentations',
    description: 'Master pitch deck creation with our comprehensive guide, templates, and examples from successful Series A rounds',
    image: '/og-pitch-deck-guide.jpg',
    type: 'article' as const
  }
};

export const metadata: Metadata = generateMetadata(seoConfig);

const pitchDeckSlides = [
  {
    slide: 'Title Slide',
    purpose: 'Company introduction and contact information',
    keyElements: ['Company name and tagline', 'Founder names and titles', 'Contact information', 'Company logo'],
    timeAllocation: '30 seconds',
    commonMistakes: ['Too much text', 'Unprofessional design', 'Missing contact info']
  },
  {
    slide: 'Problem',
    purpose: 'Define the pain point your startup solves',
    keyElements: ['Clear problem statement', 'Market evidence/statistics', 'Customer pain points', 'Current solutions shortfalls'],
    timeAllocation: '1-2 minutes',
    commonMistakes: ['Vague problem definition', 'No market validation', 'Too many problems listed']
  },
  {
    slide: 'Solution',
    purpose: 'Present your unique approach to solving the problem',
    keyElements: ['Product overview', 'Key features/benefits', 'Unique value proposition', 'Demo or visual proof'],
    timeAllocation: '2-3 minutes',
    commonMistakes: ['Feature overload', 'No clear differentiation', 'Technical jargon']
  },
  {
    slide: 'Market Opportunity',
    purpose: 'Demonstrate the size and potential of your market',
    keyElements: ['Total Addressable Market (TAM)', 'Serviceable Addressable Market (SAM)', 'Market growth trends', 'Target customer segments'],
    timeAllocation: '2 minutes',
    commonMistakes: ['Unrealistic market size', 'Top-down only analysis', 'No addressable market']
  },
  {
    slide: 'Product Demo',
    purpose: 'Show your product in action',
    keyElements: ['Live demo or screenshots', 'User experience flow', 'Key functionality', 'Customer testimonials'],
    timeAllocation: '3-4 minutes',
    commonMistakes: ['Technical difficulties', 'Too long demo', 'No clear value demonstration']
  },
  {
    slide: 'Traction',
    purpose: 'Prove market validation and growth',
    keyElements: ['Key metrics and KPIs', 'Revenue/user growth', 'Customer testimonials', 'Partnership highlights'],
    timeAllocation: '2-3 minutes',
    commonMistakes: ['Vanity metrics only', 'No growth story', 'Outdated information']
  },
  {
    slide: 'Business Model',
    purpose: 'Explain how you make money',
    keyElements: ['Revenue streams', 'Pricing strategy', 'Unit economics', 'Customer acquisition costs'],
    timeAllocation: '2 minutes',
    commonMistakes: ['Complex revenue model', 'No unit economics', 'Unrealistic assumptions']
  },
  {
    slide: 'Competition',
    purpose: 'Position against competitive landscape',
    keyElements: ['Direct/indirect competitors', 'Competitive advantages', 'Market positioning', 'Barriers to entry'],
    timeAllocation: '1-2 minutes',
    commonMistakes: ['Claiming no competition', 'Weak differentiation', 'Underestimating competitors']
  },
  {
    slide: 'Team',
    purpose: 'Showcase leadership and key team members',
    keyElements: ['Founder backgrounds', 'Relevant experience', 'Advisory board', 'Key hires planned'],
    timeAllocation: '1-2 minutes',
    commonMistakes: ['Too many team members', 'Irrelevant experience', 'No domain expertise']
  },
  {
    slide: 'Financial Projections',
    purpose: 'Present financial forecast and milestones',
    keyElements: ['3-5 year projections', 'Key assumptions', 'Revenue/cost breakdown', 'Funding milestones'],
    timeAllocation: '2 minutes',
    commonMistakes: ['Hockey stick projections', 'No supporting assumptions', 'Unrealistic growth']
  },
  {
    slide: 'Funding Ask',
    purpose: 'Specify funding amount and use of funds',
    keyElements: ['Funding amount needed', 'Use of funds breakdown', 'Milestones to achieve', 'Expected timeline'],
    timeAllocation: '1-2 minutes',
    commonMistakes: ['Vague funding amount', 'No clear use of funds', 'Unrealistic timeline']
  },
  {
    slide: 'Closing/Next Steps',
    purpose: 'Call to action and contact information',
    keyElements: ['Key takeaways', 'Call to action', 'Contact information', 'Thank you message'],
    timeAllocation: '30 seconds',
    commonMistakes: ['Weak closing', 'No clear next steps', 'Missing contact info']
  }
];

const designPrinciples = [
  {
    principle: 'Less is More',
    description: 'Keep slides clean and focused with minimal text',
    guidelines: ['Maximum 6-8 words per slide', 'Large, readable fonts (24pt+)', 'Plenty of white space', 'One key message per slide'],
    examples: ['Use bullet points sparingly', 'Replace text with visuals', 'Break complex ideas across slides']
  },
  {
    principle: 'Visual Storytelling',
    description: 'Use visuals to support and enhance your narrative',
    guidelines: ['High-quality images and graphics', 'Consistent visual theme', 'Data visualization for numbers', 'Screenshots for product demos'],
    examples: ['Charts over tables', 'Icons over text blocks', 'Product screenshots', 'Customer photos/logos']
  },
  {
    principle: 'Professional Design',
    description: 'Maintain consistency and professional appearance',
    guidelines: ['Consistent color scheme (2-3 colors max)', 'Professional font choices', 'Aligned elements', 'Company branding throughout'],
    examples: ['Use brand colors consistently', 'Same font family throughout', 'Proper logo placement', 'Consistent slide layouts']
  },
  {
    principle: 'Data-Driven Content',
    description: 'Support claims with concrete data and evidence',
    guidelines: ['Specific metrics over generalizations', 'Third-party validation', 'Customer testimonials', 'Market research citations'],
    examples: ['\"40% month-over-month growth\" vs \"rapid growth\"', 'Include data sources', 'Customer quotes with attribution']
  }
];

const commonMistakes = [
  {
    mistake: 'Information Overload',
    impact: 'Confuses investors and dilutes key messages',
    solution: 'Focus on 3-5 key points per slide maximum',
    severity: 'High'
  },
  {
    mistake: 'Weak Problem Definition',
    impact: 'Fails to establish market need and urgency',
    solution: 'Use specific customer pain points with market evidence',
    severity: 'Critical'
  },
  {
    mistake: 'No Clear Business Model',
    impact: 'Raises questions about revenue generation and scalability',
    solution: 'Clearly explain how you make money with unit economics',
    severity: 'Critical'
  },
  {
    mistake: 'Unrealistic Financial Projections',
    impact: 'Damages credibility and trust with investors',
    solution: 'Use conservative assumptions with clear methodology',
    severity: 'High'
  },
  {
    mistake: 'Poor Design Quality',
    impact: 'Creates unprofessional impression and reduces credibility',
    solution: 'Invest in professional design or use quality templates',
    severity: 'Medium'
  },
  {
    mistake: 'Too Long Presentation',
    impact: 'Loses investor attention and prevents meaningful discussion',
    solution: 'Keep to 10-12 slides for 10-15 minute presentation',
    severity: 'High'
  }
];

const industryBenchmarks = [
  {
    stage: 'Pre-Seed',
    deckLength: '8-10 slides',
    focusAreas: ['Problem/Solution', 'Early Traction', 'Team', 'Market Opportunity'],
    keyMetrics: ['User engagement', 'Early revenue', 'Product development milestones'],
    funding: '$50K - $500K'
  },
  {
    stage: 'Seed',
    deckLength: '10-12 slides',
    focusAreas: ['Market Validation', 'Business Model', 'Growth Strategy', 'Competition'],
    keyMetrics: ['Monthly recurring revenue', 'Customer acquisition', 'User growth'],
    funding: '$500K - $2M'
  },
  {
    stage: 'Series A',
    deckLength: '12-15 slides',
    focusAreas: ['Proven Business Model', 'Market Size', 'Scalability', 'Financial Projections'],
    keyMetrics: ['$1M+ ARR', 'Unit economics', 'Market penetration', 'Growth rate'],
    funding: '$2M - $15M'
  },
  {
    stage: 'Series B+',
    deckLength: '15-18 slides',
    focusAreas: ['Market Expansion', 'Competitive Position', 'International Strategy', 'Path to Profitability'],
    keyMetrics: ['$5M+ ARR', 'Market share', 'International growth', 'Profitability timeline'],
    funding: '$10M+'
  }
];

export default function StartupPitchDeckGuidePage() {
  return (
    <main className="min-h-screen">
      <SEOOptimization 
        page="pitch-deck-guide"
        keywords={seoConfig.keywords}
      />

      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📊 Pitch Deck Mastery</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              The Complete Startup
              <span className="block text-gradient-accent">Pitch Deck Guide</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Master the art of investor presentations with our comprehensive guide, templates, and examples from successful Series A rounds. Created by experts who reviewed 1,000+ pitch decks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">1K+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Decks Reviewed</h3>
              <p className="text-white/80">Expert analysis of successful pitches</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">200+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Funded Startups</h3>
              <p className="text-white/80">Successful funding with optimized decks</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">3x</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Higher Success</h3>
              <p className="text-white/80">Improved investor response rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck Structure */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Essential Pitch Deck Structure
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              The proven 12-slide framework that top VCs expect to see in every startup presentation
            </p>
          </div>

          <div className="space-y-6">
            {pitchDeckSlides.map((slide, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center mb-4">
                        <span className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mr-4">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-primary-900">{slide.slide}</h3>
                          <span className="text-primary-600 text-sm">{slide.timeAllocation}</span>
                        </div>
                      </div>
                      <p className="text-secondary-700 mb-4">{slide.purpose}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-secondary-900 mb-3">Key Elements:</h4>
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {slide.keyElements.map((element, i) => (
                          <div key={i} className="flex items-center text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {element}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-red-800 mb-3">Avoid:</h4>
                      <ul className="space-y-1">
                        {slide.commonMistakes.map((mistake, i) => (
                          <li key={i} className="text-sm text-red-700 flex items-center">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                            {mistake}
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

      {/* Design Principles */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Pitch Deck Design Principles
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Professional design principles that make your presentation stand out to investors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {designPrinciples.map((principle, index) => (
              <div key={index} className="card bg-gradient-to-br from-primary-50 to-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{principle.principle}</h3>
                  <p className="text-secondary-700 mb-6">{principle.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Guidelines:</h4>
                      <ul className="space-y-2">
                        {principle.guidelines.map((guideline, i) => (
                          <li key={i} className="flex items-start text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {guideline}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {principle.examples.map((example, i) => (
                          <li key={i} className="flex items-start text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {example}
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

      {/* Industry Benchmarks */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Pitch Deck by Funding Stage
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Tailor your presentation to your funding stage with these industry benchmarks and focus areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industryBenchmarks.map((stage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold mr-4">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900">{stage.stage}</h3>
                      <span className="text-primary-600 font-semibold">{stage.funding}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-secondary-600 mb-2">Recommended Length</div>
                      <div className="font-semibold text-secondary-900">{stage.deckLength}</div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.focusAreas.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Essential Metrics:</h4>
                      <ul className="space-y-1">
                        {stage.keyMetrics.map((metric, i) => (
                          <li key={i} className="flex items-center text-sm text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {metric}
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

      {/* Common Mistakes */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Avoid These Pitch Deck Mistakes
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Learn from common pitfalls that hurt investor presentations and funding success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                      mistake.severity === 'Critical' ? 'bg-red-500 text-white' : 
                      mistake.severity === 'High' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      ❌
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-red-800">{mistake.mistake}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          mistake.severity === 'Critical' ? 'bg-red-100 text-red-800' : 
                          mistake.severity === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {mistake.severity}
                        </span>
                      </div>
                      <p className="text-red-700 mb-4">{mistake.impact}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Solution:</h4>
                    <p className="text-green-700">{mistake.solution}</p>
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
              Ready to Perfect Your Pitch Deck?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert feedback and optimization to maximize your investor presentation impact
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Professional Review</h3>
                <p className="text-white/80 mb-4">Get expert pitch deck review and optimization from former VCs</p>
                <Link href="/pitch-deck-review-consulting" className="btn-accent">
                  Optimize Your Deck
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Free Resources</h3>
                <p className="text-white/80 mb-4">Download pitch deck templates and access our preparation checklist</p>
                <Link href="/resources" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Access Templates
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
              Complete Your Fundraising Toolkit
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Explore additional resources to support your startup fundraising success
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/resources/startup-pitch-deck-guide"
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
          headline: "Startup Pitch Deck Guide 2024 | How to Create Winning Investor Presentations",
          description: "Complete startup pitch deck guide with templates, examples, and expert tips for creating compelling investor presentations that secure Series A funding.",
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
            "@id": "https://vommuli.com/resources/startup-pitch-deck-guide"
          },
          wordCount: 4500,
          articleSection: "Startup Fundraising",
          keywords: "startup pitch deck guide, how to create a pitch deck, investor presentation template, pitch deck examples"
        }}
      />

      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "How many slides should a startup pitch deck have?",
              answer: "A startup pitch deck should typically have 10-12 slides for a 10-15 minute presentation. This includes: Title, Problem, Solution, Market, Product Demo, Traction, Business Model, Competition, Team, Financials, Funding Ask, and Next Steps."
            },
            {
              question: "What is the most important slide in a pitch deck?",
              answer: "The Problem slide is often considered most important as it establishes the market need and pain point your startup solves. Without a clear, compelling problem, investors won't understand why your solution matters."
            },
            {
              question: "How long should a pitch deck presentation take?",
              answer: "A pitch deck presentation should take 10-15 minutes, leaving 10-15 minutes for investor questions and discussion. This timing works best for both initial meetings and formal presentations."
            },
            {
              question: "What metrics should I include in my pitch deck?",
              answer: "Include stage-appropriate metrics: Pre-seed (user engagement, early revenue), Seed (MRR, customer acquisition), Series A ($1M+ ARR, unit economics, growth rate), Series B+ ($5M+ ARR, market share, profitability path)."
            }
          ]
        }}
      />
    </main>
  );
}