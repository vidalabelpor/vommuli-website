import { Metadata } from 'next';
import { generateMetadata, seoConfigs } from '@/lib/seo-utils';
import Link from 'next/link';
import InternalLinkingSystem, { QuickNavigation } from '@/components/InternalLinking';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = generateMetadata(seoConfigs.ventureCapitalAdvisor);

const advisoryServices = [
  {
    title: 'VC Network Access',
    description: 'Direct introductions to 500+ active VCs across Series A-C stages',
    icon: '🤝',
    features: ['Warm introductions only', 'Investor-startup matching', 'Pipeline coordination', 'Follow-up management']
  },
  {
    title: 'Investment Strategy',
    description: 'Expert guidance on funding approach and investor targeting',
    icon: '🎯',
    features: ['Funding timeline planning', 'Investor research & mapping', 'Approach strategy', 'Meeting preparation']
  },
  {
    title: 'Pitch Optimization',
    description: 'Transform your pitch into investor-ready presentation',
    icon: '📊',
    features: ['Deck review & feedback', 'Narrative development', 'Financial model review', 'Practice sessions']
  },
  {
    title: 'Due Diligence Prep',
    description: 'Comprehensive preparation for investor due diligence',
    icon: '🔍',
    features: ['Data room setup', 'Document preparation', 'Reference coordination', 'Process management']
  }
];

const successMetrics = [
  { metric: '85%', label: 'Introduction Success Rate', description: 'Startups that get meetings from our VC introductions' },
  { metric: '$500M+', label: 'Total Funding Raised', description: 'Capital secured for clients through our advisory services' },
  { metric: '200+', label: 'Successful Deals', description: 'Completed funding rounds with our guidance' },
  { metric: '6-8 weeks', label: 'Average Timeline', description: 'From introduction to term sheet for qualified startups' }
];

const vcPartners = [
  {
    name: 'Tier 1 VCs',
    description: 'Top-tier venture capital firms',
    examples: ['Sequoia Capital', 'Andreessen Horowitz', 'General Catalyst'],
    focus: 'Series A-B, $5M-$50M checks'
  },
  {
    name: 'Sector Specialists',
    description: 'Industry-focused investment firms',
    examples: ['HealthTech VCs', 'FinTech specialists', 'AI-focused funds'],
    focus: 'Deep sector expertise'
  },
  {
    name: 'Regional Players',
    description: 'Geographic market specialists',
    examples: ['NYC ecosystem VCs', 'Austin tech investors', 'Denver growth capital'],
    focus: 'Local market knowledge'
  },
  {
    name: 'Corporate VCs',
    description: 'Strategic corporate investors',
    examples: ['Google Ventures', 'Intel Capital', 'Salesforce Ventures'],
    focus: 'Strategic partnerships'
  }
];

export default function VentureCapitalAdvisorPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🎯 Expert VC Advisory</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Venture Capital Advisor &
              <span className="block text-gradient-accent">VC Introduction Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Professional venture capital advisory services with warm VC introductions. Expert guidance for Series A-C funding rounds with 85% success rate connecting startups with top VCs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">500+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">VC Network</h3>
              <p className="text-white/80">Active venture capital relationships across all stages</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">85%</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Success Rate</h3>
              <p className="text-white/80">Introduction-to-meeting conversion rate</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$500M</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Total funding secured through our advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Comprehensive VC Advisory Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              End-to-end venture capital advisory services designed to maximize your fundraising success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => (
              <div key={index} className="card-elevated group hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-3">{service.title}</h3>
                      <p className="text-secondary-700 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-secondary-600">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Proven Results for Our Clients
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Our venture capital advisory track record speaks for itself
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">📈</span>
                </div>
                <div className="text-4xl font-bold text-primary-900 mb-2">{item.metric}</div>
                <div className="text-xl font-semibold text-secondary-900 mb-3">{item.label}</div>
                <div className="text-secondary-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VC Network Overview */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Our Venture Capital Network
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Access to diverse VC ecosystem across stages, sectors, and geographies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {vcPartners.map((category, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{category.name}</h3>
                  <p className="text-secondary-700 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-900 mb-3">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <span className="font-medium text-secondary-900">Focus Area: </span>
                    <span className="text-secondary-700">{category.focus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our VC Advisory Process
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Systematic approach to connecting you with the right venture capital partners
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery & Assessment',
                description: 'Comprehensive evaluation of your startup, market position, and funding needs',
                timeline: 'Week 1'
              },
              {
                step: '2',
                title: 'Strategy Development',
                description: 'Create targeted approach with investor mapping and introduction strategy',
                timeline: 'Week 2'
              },
              {
                step: '3',
                title: 'Preparation & Optimization',
                description: 'Polish pitch materials, financial models, and prepare for investor meetings',
                timeline: 'Week 3-4'
              },
              {
                step: '4',
                title: 'VC Introductions',
                description: 'Warm introductions to matched investors with ongoing support through process',
                timeline: 'Week 5+'
              }
            ].map((phase, index) => (
              <div key={index} className="card-elevated text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{phase.title}</h3>
                  <p className="text-secondary-700 mb-4">{phase.description}</p>
                  <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {phase.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Real results from our venture capital advisory services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: 'SaaS Platform',
                funding: '$18M Series A',
                timeline: '6 weeks',
                story: 'Connected with 3 tier-1 VCs, received 2 term sheets, closed with preferred partner'
              },
              {
                company: 'HealthTech Startup',
                funding: '$25M Series B',
                timeline: '8 weeks',
                story: 'Matched with specialized healthcare VCs, leveraged strategic value beyond capital'
              },
              {
                company: 'Climate Tech',
                funding: '$12M Series A',
                timeline: '7 weeks',
                story: 'Introduced to impact investors focused on sustainability and climate solutions'
              }
            ].map((story, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{story.funding}</div>
                      <div className="text-sm text-secondary-600">{story.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{story.company}</h3>
                  <p className="text-secondary-700 italic">"{story.story}"</p>
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
              Ready to Connect with Top VCs?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your venture capital introduction process with our expert advisory team
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Free Assessment</h3>
                <p className="text-white/80 mb-4">Evaluate your VC readiness and get personalized recommendations</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Start Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your fundraising goals with our VC advisory experts</p>
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
              Related Advisory Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive support for every aspect of your fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/venture-capital-advisor"
            context="service"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Professional Service Schema */}
      <SchemaMarkup 
        type="service"
        data={{
          name: "Venture Capital Advisory Services",
          description: "Professional venture capital advisory services with warm VC introductions. Expert guidance for Series A-C funding rounds.",
          provider: {
            "@type": "FinancialService",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          serviceType: "Venture Capital Advisory",
          category: "Financial Advisory Services",
          areaServed: {
            "@type": "Country", 
            "name": "United States"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            "name": "VC Advisory Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "VC Network Introductions",
                  "description": "Warm introductions to 500+ active venture capital firms"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Investment Strategy Consulting",
                  "description": "Expert guidance on funding approach and investor targeting"
                }
              }
            ]
          }
        }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: [
            {
              question: "What is a venture capital advisor?",
              answer: "A venture capital advisor is a professional who helps startups connect with venture capital firms, providing strategic guidance on fundraising, investor targeting, and deal preparation."
            },
            {
              question: "How do VC introduction services work?",
              answer: "VC introduction services connect qualified startups with relevant venture capital investors through warm introductions, leveraging established relationships and industry expertise."
            },
            {
              question: "What's the success rate for VC introductions?",
              answer: "Our VC introduction services achieve an 85% meeting rate, meaning 85% of our introductions result in actual investor meetings for qualified startups."
            },
            {
              question: "How long does the VC introduction process take?",
              answer: "The VC introduction process typically takes 6-8 weeks from initial consultation to term sheet for qualified startups, including preparation and introduction phases."
            }
          ]
        }}
      />
    </main>
  );
}