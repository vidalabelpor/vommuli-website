import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import SchemaMarkup from '@/components/SchemaMarkup';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'VC Deal Sourcing Services: Complete Guide to Venture Capital Deal Flow 2025',
  description: 'Comprehensive guide to VC deal sourcing services and venture capital deal flow. Learn how VCs find startups, evaluate opportunities, and build deal pipelines for successful Series A investments.',
  keywords: [
    // Phase 1 research: Primary quick-win keyword (170 searches, 35 difficulty)
    'VC deal sourcing services',
    'venture capital deal flow',
    'startup deal sourcing',
    'VC deal pipeline',
    'venture capital sourcing',
    'startup deal flow',
    'VC investment pipeline',
    'venture capital deal sourcing',
    'Series A deal sourcing',
    'startup investment pipeline',
    'VC deal origination',
    'venture capital deal origination',
    'investment deal sourcing',
    'startup venture capital pipeline',
    'VC startup pipeline'
  ],
  openGraph: {
    title: 'VC Deal Sourcing Services: Complete Guide to Venture Capital Deal Flow 2025',
    description: 'Comprehensive guide to VC deal sourcing services and venture capital deal flow for successful Series A investments.',
    url: 'https://vommuli.com/blog/vc-deal-sourcing-services-complete-guide-2025',
    type: 'article'
  }
};

const tableOfContents = [
  { title: 'What Are VC Deal Sourcing Services?', anchor: 'what-are-vc-deal-sourcing-services' },
  { title: 'How VC Deal Flow Works in 2025', anchor: 'how-vc-deal-flow-works' },
  { title: 'Types of VC Deal Sourcing Services', anchor: 'types-of-vc-deal-sourcing-services' },
  { title: 'Traditional vs Modern Deal Sourcing', anchor: 'traditional-vs-modern-deal-sourcing' },
  { title: 'Benefits for Mid-Tier VC Firms', anchor: 'benefits-for-mid-tier-vc-firms' },
  { title: 'Startup Perspective: Getting Sourced', anchor: 'startup-perspective-getting-sourced' },
  { title: 'Deal Sourcing Technology & Tools', anchor: 'deal-sourcing-technology-tools' },
  { title: 'Geographic Deal Sourcing Trends', anchor: 'geographic-deal-sourcing-trends' },
  { title: 'Quality vs Quantity in Deal Sourcing', anchor: 'quality-vs-quantity-deal-sourcing' },
  { title: 'Future of VC Deal Sourcing', anchor: 'future-of-vc-deal-sourcing' }
];

const dealSourcingTypes = [
  {
    type: 'Traditional Network Sourcing',
    description: 'Relying on personal networks, referrals, and industry connections',
    pros: ['High-quality referrals', 'Trust-based relationships', 'Pre-validated opportunities'],
    cons: ['Limited deal flow', 'Network bias', 'Geographic constraints'],
    effectiveness: '70%'
  },
  {
    type: 'Professional Deal Sourcing Services',
    description: 'Specialized firms that find and pre-qualify startups for VCs',
    pros: ['Scalable deal flow', 'Expert pre-qualification', 'Market intelligence'],
    cons: ['Service costs', 'Quality variability', 'Less personal connection'],
    effectiveness: '85%'
  },
  {
    type: 'AI-Powered Sourcing Platforms',
    description: 'Technology platforms using AI to identify investment opportunities',
    pros: ['Massive scale', 'Data-driven insights', 'Market coverage'],
    cons: ['Lacks human judgment', 'High noise levels', 'Generic approach'],
    effectiveness: '60%'
  },
  {
    type: 'Hybrid Human + Technology',
    description: 'Combining human expertise with technology for optimal results',
    pros: ['Best of both worlds', 'Scalable quality', 'Personalized service'],
    cons: ['Higher cost', 'Complexity', 'Implementation time'],
    effectiveness: '95%'
  }
];

const geographicTrends = [
  {
    market: 'Austin, TX',
    rank: '#3 VC Hub Globally',
    growth: '+15.2% YoY',
    focus: 'AI, CleanTech, Enterprise SaaS',
    dealVolume: '$8.5B annually',
    highlight: true
  },
  {
    market: 'Denver, CO',
    rank: 'Emerging Tier-1',
    growth: '+3.64% YoY',
    focus: 'Aerospace, Energy, HealthTech',
    dealVolume: '$2.1B annually',
    highlight: false
  },
  {
    market: 'Miami, FL',
    rank: 'Top-5 Metro',
    growth: '+8.9% YoY', 
    focus: 'FinTech, PropTech, AI',
    dealVolume: '$3.2B annually',
    highlight: false
  }
];

export default function VCDealSourcingServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📈 VC Deal Sourcing Guide 2025</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              VC Deal Sourcing Services:
              <span className="block text-gradient-accent">Complete Guide 2025</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about venture capital deal sourcing services, from traditional methods to cutting-edge technology platforms.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-white/80">
              <span>📅 Updated January 2025</span>
              <span>⏱️ 15 min read</span>
              <span>👥 For VCs & Startups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.anchor}`}
                    className="flex items-start space-x-3 text-secondary-700 hover:text-primary-600 transition-colors duration-200 p-2 hover:bg-primary-50 rounded-lg"
                  >
                    <span className="text-primary-500 font-semibold text-sm mt-0.5">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium">{item.title}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <article className="bg-white section-padding">
        <div className="container max-w-4xl">
          
          {/* What Are VC Deal Sourcing Services */}
          <section id="what-are-vc-deal-sourcing-services" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              What Are VC Deal Sourcing Services?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-700 leading-relaxed mb-6">
                <strong>VC deal sourcing services</strong> are specialized solutions that help venture capital firms identify, evaluate, and connect with high-potential startups seeking investment. These services bridge the gap between promising startups and VCs looking for quality deal flow.
              </p>
              
              <Card variant="bordered" className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Components of VC Deal Sourcing</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">For VCs:</h4>
                      <ul className="space-y-2 text-secondary-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Pre-qualified startup pipeline
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Market intelligence and trends
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Due diligence support
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Geographic market access
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">For Startups:</h4>
                      <ul className="space-y-2 text-secondary-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Access to relevant VCs
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Pitch optimization guidance
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Investment readiness assessment
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Market positioning advice
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How VC Deal Flow Works */}
          <section id="how-vc-deal-flow-works" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              How VC Deal Flow Works in 2025
            </h2>
            <p className="text-secondary-700 leading-relaxed mb-8">
              The modern venture capital deal flow process has evolved significantly, with professional sourcing services playing an increasingly important role in connecting mid-tier VCs with quality startups.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card variant="elevated" className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Discovery</h3>
                  <p className="text-secondary-700 text-sm">
                    Identifying promising startups through networks, platforms, and sourcing services
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Qualification</h3>
                  <p className="text-secondary-700 text-sm">
                    Pre-screening startups for investment criteria, stage, and potential fit
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="elevated" className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">Connection</h3>
                  <p className="text-secondary-700 text-sm">
                    Facilitating introductions between qualified startups and relevant VCs
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Types of VC Deal Sourcing Services */}
          <section id="types-of-vc-deal-sourcing-services" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Types of VC Deal Sourcing Services
            </h2>
            <p className="text-secondary-700 leading-relaxed mb-8">
              The venture capital deal sourcing landscape includes several distinct approaches, each with unique advantages and limitations. Understanding these options helps VCs choose the right strategy for their investment goals.
            </p>
            
            <div className="space-y-8">
              {dealSourcingTypes.map((type, index) => (
                <Card key={index} variant="bordered" className="overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-primary-900 mb-2">{type.type}</h3>
                        <p className="text-secondary-700">{type.description}</p>
                      </div>
                      <div className="ml-6 text-right">
                        <div className="text-2xl font-bold text-primary-600">{type.effectiveness}</div>
                        <div className="text-sm text-secondary-600">Effectiveness</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3">✅ Advantages</h4>
                        <ul className="space-y-2">
                          {type.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-secondary-700 flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3">❌ Limitations</h4>
                        <ul className="space-y-2">
                          {type.cons.map((con, i) => (
                            <li key={i} className="text-sm text-secondary-700 flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Geographic Deal Sourcing Trends */}
          <section id="geographic-deal-sourcing-trends" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Geographic Deal Sourcing Trends 2025
            </h2>
            <p className="text-secondary-700 leading-relaxed mb-8">
              The venture capital landscape is shifting, with emerging markets presenting new opportunities for deal sourcing. <strong>Austin leaped to #3 VC hub globally in Q1 2025</strong>, while Denver and Miami continue their rapid growth.
            </p>
            
            <div className="space-y-6">
              {geographicTrends.map((market, index) => (
                <Card 
                  key={index} 
                  variant={market.highlight ? "brand" : "elevated"} 
                  className={market.highlight ? "border-2 border-accent-400" : ""}
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className={`text-xl font-semibold mb-2 ${market.highlight ? 'text-white' : 'text-primary-900'}`}>
                          {market.market}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          market.highlight 
                            ? 'bg-white/20 text-white' 
                            : 'bg-primary-100 text-primary-800'
                        }`}>
                          {market.rank}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-1 ${market.highlight ? 'text-accent-300' : 'text-green-600'}`}>
                          {market.growth}
                        </div>
                        <div className={`text-sm ${market.highlight ? 'text-white/80' : 'text-secondary-600'}`}>
                          Growth Rate
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-1 ${market.highlight ? 'text-accent-300' : 'text-primary-600'}`}>
                          {market.dealVolume}
                        </div>
                        <div className={`text-sm ${market.highlight ? 'text-white/80' : 'text-secondary-600'}`}>
                          Annual Volume
                        </div>
                      </div>
                      
                      <div>
                        <h4 className={`font-semibold mb-2 ${market.highlight ? 'text-white' : 'text-secondary-900'}`}>
                          Key Sectors:
                        </h4>
                        <p className={`text-sm ${market.highlight ? 'text-white/90' : 'text-secondary-700'}`}>
                          {market.focus}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits for Mid-Tier VC Firms */}
          <section id="benefits-for-mid-tier-vc-firms" className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Benefits for Mid-Tier VC Firms ($50M-$500M AUM)
            </h2>
            <p className="text-secondary-700 leading-relaxed mb-8">
              Mid-tier venture capital firms face unique challenges in deal sourcing. Unlike mega-funds with brand recognition or micro-VCs with niche focus, mid-tier VCs need strategic approaches to access quality deal flow while competing effectively.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card variant="elevated">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-6">Key Challenges</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Limited Brand Recognition</div>
                        <div className="text-sm text-secondary-600">Struggle to attract top-tier startups</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Resource Constraints</div>
                        <div className="text-sm text-secondary-600">Limited time for extensive deal sourcing</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Geographic Limitations</div>
                        <div className="text-sm text-secondary-600">Miss opportunities in emerging markets</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card variant="elevated">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-6">Professional Sourcing Solutions</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Qualified Deal Pipeline</div>
                        <div className="text-sm text-secondary-600">Pre-screened, investment-ready startups</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Market Intelligence</div>
                        <div className="text-sm text-secondary-600">Trends, competitive landscape, and opportunities</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </span>
                      <div>
                        <div className="font-medium text-secondary-900">Geographic Expansion</div>
                        <div className="text-sm text-secondary-600">Access to emerging markets and opportunities</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <Card variant="brand" className="text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Optimize Your VC Deal Sourcing?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get professional deal sourcing services that connect you with pre-qualified, investment-ready startups in your target sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-white text-primary-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-8 rounded-3xl transition-all duration-200"
                  >
                    Try Assessment Tool
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </article>

      {/* Related Resources */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Related Resources
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Explore more insights on venture capital and startup fundraising
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/blog/vc-deal-sourcing-services-complete-guide-2025"
            context="blog"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-6">
              Popular Resources:
            </h3>
            <QuickNavigation />
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup 
        type="article"
        data={{
          headline: "VC Deal Sourcing Services: Complete Guide to Venture Capital Deal Flow 2025",
          description: "Comprehensive guide to VC deal sourcing services and venture capital deal flow. Learn how VCs find startups, evaluate opportunities, and build deal pipelines for successful Series A investments.",
          image: "https://vommuli.com/og-vc-deal-sourcing.jpg",
          author: "Vidal Porto",
          datePublished: "2025-01-17",
          dateModified: "2025-01-17",
          url: "https://vommuli.com/blog/vc-deal-sourcing-services-complete-guide-2025"
        }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What are VC deal sourcing services?",
              answer: "VC deal sourcing services are specialized solutions that help venture capital firms identify, evaluate, and connect with high-potential startups seeking investment. They provide pre-qualified startup pipelines and market intelligence to VCs."
            },
            {
              question: "How do VC deal sourcing services work?",
              answer: "These services work through a three-step process: Discovery (identifying promising startups), Qualification (pre-screening for investment criteria), and Connection (facilitating introductions between qualified startups and relevant VCs)."
            },
            {
              question: "What are the benefits of VC deal sourcing services for mid-tier VCs?",
              answer: "Mid-tier VCs benefit from qualified deal pipelines, market intelligence, geographic expansion access, and resource efficiency. These services help overcome challenges like limited brand recognition and resource constraints."
            },
            {
              question: "Which geographic markets are trending for VC deal sourcing in 2025?",
              answer: "Austin, TX has leaped to #3 VC hub globally with $8.5B annual volume, while Denver, CO and Miami, FL are emerging as top-tier markets with significant growth rates and sector specializations."
            }
          ]
        }}
      />
    </main>
  );
}