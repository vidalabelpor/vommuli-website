import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Free Series A Pitch Deck Template Download | Proven 15-Slide Framework',
  description: 'Download our proven Series A pitch deck template used by startups that raised $500M+. 15 slides with examples, tips, and best practices.',
  keywords: [
    'Series A pitch deck template',
    'free pitch deck template',
    'startup pitch deck template',
    'Series A presentation template',
    'venture capital pitch deck',
    'fundraising pitch template',
    'investor presentation template',
    'Series A fundraising template'
  ],
  openGraph: {
    title: 'Free Series A Pitch Deck Template',
    description: 'Proven 15-slide pitch deck template used by startups that raised $500M+ in Series A funding.',
    url: 'https://vommuli.com/downloads/series-a-pitch-deck-template',
  },
};

export default function PitchDeckTemplatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📄 Free Template</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Series A Pitch Deck Template
              <span className="block text-2xl lg:text-3xl text-white/80 mt-4">
                Proven 15-Slide Framework
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The exact pitch deck template used by our clients who have raised $500M+ in Series A funding. Includes slide-by-slide guidance, examples, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Template Preview */}
      <section className="bg-white section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Everything you need to create a compelling Series A pitch deck
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6">Template Features</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: '📊',
                    title: '15 Essential Slides',
                    description: 'Complete framework covering every aspect investors want to see'
                  },
                  {
                    icon: '💡',
                    title: 'Slide-by-Slide Guidance',
                    description: 'Detailed instructions for each slide with do\'s and don\'ts'
                  },
                  {
                    icon: '🎯',
                    title: 'Real Examples',
                    description: 'Examples from successful Series A decks (anonymized)'
                  },
                  {
                    icon: '✅',
                    title: 'Investor-Approved',
                    description: 'Template refined through 200+ pitch deck reviews'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h4>
                      <p className="text-secondary-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">15-Slide Framework</h3>
              <div className="space-y-3 text-sm">
                {[
                  '1. Company Purpose & Vision',
                  '2. Problem & Market Pain Point',
                  '3. Solution & Product Demo',
                  '4. Market Opportunity & Size',
                  '5. Business Model & Revenue Streams',
                  '6. Traction & Growth Metrics', 
                  '7. Unit Economics & Key Metrics',
                  '8. Go-to-Market Strategy',
                  '9. Competitive Landscape',
                  '10. Product Roadmap',
                  '11. Team & Advisory Board',
                  '12. Financial Projections',
                  '13. Funding Ask & Use of Funds',
                  '14. Milestones & Timeline',
                  '15. Appendix & Supporting Data'
                ].map((slide, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-secondary-800">{slide.split('. ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Used by Successful Startups</h3>
              <p className="text-secondary-700">See how companies used this template to raise millions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: 'TechFlow AI',
                  amount: '$12M Series A',
                  quote: '"This template saved us months of work. The structure is exactly what investors want to see."'
                },
                {
                  company: 'GreenData Solutions',
                  amount: '$8M Series A', 
                  quote: '"The slide-by-slide guidance helped us tell our story clearly and compelling."'
                },
                {
                  company: 'FinanceForward',
                  amount: '$15M Series A',
                  quote: '"We followed the template exactly and got 3 term sheets. Game changer."'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="mb-4">
                    <div className="font-bold text-primary-900">{testimonial.company}</div>
                    <div className="text-green-600 font-semibold">{testimonial.amount}</div>
                  </div>
                  <p className="text-secondary-700 text-sm italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Form */}
      <section className="bg-gradient-primary section-padding">
        <div className="container max-w-2xl">
          <div className="card-elevated">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  Download Your Free Template
                </h2>
                <p className="text-secondary-700">
                  Get instant access to the Series A pitch deck template + bonus materials
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your Startup"
                  />
                </div>

                <div>
                  <label htmlFor="stage" className="block text-sm font-medium text-secondary-700 mb-2">
                    Funding Stage *
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select your current stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="pre-series-a">Pre-Series A</option>
                    <option value="series-a">Series A</option>
                    <option value="post-series-a">Post-Series A</option>
                  </select>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                    defaultChecked
                  />
                  <label htmlFor="newsletter" className="text-sm text-secondary-700">
                    Send me weekly fundraising insights and resources (you can unsubscribe anytime)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Download Template + Bonus Materials
                </button>

                <div className="text-center">
                  <p className="text-sm text-secondary-600">
                    🔒 Your information is secure and will never be shared
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Bonus Materials */}
          <div className="mt-8 bg-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
              Bonus Materials Included
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h4 className="font-semibold text-primary-900">Pitch Deck Checklist</h4>
                </div>
                <p className="text-sm text-secondary-700">50-point checklist to review your deck before presenting</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">📧</span>
                  <h4 className="font-semibold text-primary-900">Follow-up Templates</h4>
                </div>
                <p className="text-sm text-secondary-700">Email templates for following up with investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Complete Your Fundraising Toolkit
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Complement your pitch deck with these essential resources
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/downloads/series-a-pitch-deck-template"
            context="tool"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>
    </main>
  );
}