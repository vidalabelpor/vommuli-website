import { Metadata } from 'next';
import Link from 'next/link';
import InternalLinkingSystem from '@/components/InternalLinking';

export const metadata: Metadata = {
  title: 'Free Series A Financial Model Template | Complete 3-Year Excel Model',
  description: 'Download our comprehensive Series A financial model template with unit economics, cash flow projections, and scenario planning. Used by 100+ funded startups.',
  keywords: [
    'Series A financial model',
    'startup financial model template',
    'free financial model Excel',
    'Series A financial projections',
    'startup financial planning',
    'venture capital financial model',
    'Series A business plan financials',
    'startup cash flow model'
  ],
  openGraph: {
    title: 'Free Series A Financial Model Template',
    description: 'Complete 3-year financial model template with unit economics and scenario planning. Used by 100+ funded startups.',
    url: 'https://vommuli.com/downloads/series-a-financial-model',
  },
};

export default function FinancialModelTemplatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">📊 Free Excel Template</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Series A Financial Model
              <span className="block text-2xl lg:text-3xl text-white/80 mt-4">
                Complete 3-Year Excel Model
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The comprehensive financial model template used by our clients who raised $500M+. Includes unit economics, cash flow projections, scenario planning, and investor-grade reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Model Preview */}
      <section className="bg-white section-padding">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              What's Included
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Everything you need for sophisticated financial planning and investor presentations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-6">Model Components</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: '📈',
                    title: 'Revenue Model',
                    description: 'Multiple revenue streams, pricing tiers, and growth scenarios'
                  },
                  {
                    icon: '💰',
                    title: 'Unit Economics',
                    description: 'CAC, LTV, payback period, and contribution margin analysis'
                  },
                  {
                    icon: '📊',
                    title: 'P&L Statement',
                    description: '3-year monthly and annual profit & loss projections'
                  },
                  {
                    icon: '💳',
                    title: 'Cash Flow Model',
                    description: 'Detailed cash flow with runway calculations and burn rate'
                  },
                  {
                    icon: '📋',
                    title: 'Balance Sheet',
                    description: 'Assets, liabilities, and equity projections'
                  },
                  {
                    icon: '🎯',
                    title: 'Scenario Planning',
                    description: 'Conservative, base case, and optimistic scenarios'
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
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Model Worksheets</h3>
              <div className="space-y-3">
                {[
                  { name: 'Dashboard', description: 'Executive summary with key metrics' },
                  { name: 'Assumptions', description: 'Input all your business assumptions' },
                  { name: 'Revenue Model', description: 'Customer acquisition and pricing' },
                  { name: 'Unit Economics', description: 'CAC, LTV, and cohort analysis' },
                  { name: 'Headcount Plan', description: 'Hiring timeline and compensation' },
                  { name: 'P&L Statement', description: 'Monthly and annual financials' },
                  { name: 'Cash Flow', description: 'Working capital and cash runway' },
                  { name: 'Balance Sheet', description: 'Assets and equity structure' },
                  { name: 'Scenarios', description: '3-scenario sensitivity analysis' },
                  { name: 'Investor View', description: 'Clean summary for presentations' }
                ].map((worksheet, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div>
                      <div className="font-medium text-secondary-900">{worksheet.name}</div>
                      <div className="text-sm text-secondary-600">{worksheet.description}</div>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                      Excel
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics Dashboard Preview */}
          <div className="bg-primary-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
              Built-in Metrics Dashboard
            </h3>
            <div className="grid lg:grid-cols-4 gap-6">
              {[
                { metric: 'Monthly Recurring Revenue', example: '$2.1M', growth: '+15% MoM' },
                { metric: 'Customer Acquisition Cost', example: '$1,200', trend: 'Improving' },
                { metric: 'Lifetime Value', example: '$6,400', ratio: '5.3x CAC' },
                { metric: 'Cash Runway', example: '24 months', scenario: 'Base case' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-900 mb-2">{item.example}</div>
                  <div className="text-sm font-medium text-secondary-900 mb-1">{item.metric}</div>
                  <div className="text-xs text-green-600">{item.growth || item.trend || item.ratio || item.scenario}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-green-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Trusted by Funded Startups</h3>
              <p className="text-secondary-700">See what founders say about our financial model</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: 'DataViz Pro',
                  founder: 'Sarah Chen, CEO',
                  amount: '$10M Series A',
                  quote: '"The unit economics section was exactly what our investors wanted to see. Saved us weeks of work."'
                },
                {
                  company: 'CloudSecure',
                  founder: 'Mike Johnson, CFO', 
                  amount: '$15M Series A',
                  quote: '"Three scenarios helped us negotiate better terms. VCs appreciated the thorough financial planning."'
                },
                {
                  company: 'EcomFlow',
                  founder: 'Lisa Wang, Founder',
                  amount: '$8M Series A',
                  quote: '"The cash flow projections were spot-on. We\'ve used this model for ongoing financial planning."'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <div className="mb-4">
                    <div className="font-bold text-primary-900">{testimonial.company}</div>
                    <div className="text-sm text-secondary-600">{testimonial.founder}</div>
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
                  Download Your Free Financial Model
                </h2>
                <p className="text-secondary-700">
                  Get instant access to the complete Excel model + setup guide
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
                  <label htmlFor="revenue" className="block text-sm font-medium text-secondary-700 mb-2">
                    Current Annual Revenue
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select revenue range</option>
                    <option value="pre-revenue">Pre-revenue</option>
                    <option value="0-100k">$0-$100K</option>
                    <option value="100k-500k">$100K-$500K</option>
                    <option value="500k-1m">$500K-$1M</option>
                    <option value="1m-5m">$1M-$5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="businessModel" className="block text-sm font-medium text-secondary-700 mb-2">
                    Business Model
                  </label>
                  <select
                    id="businessModel"
                    name="businessModel"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select business model</option>
                    <option value="saas">SaaS (Software as a Service)</option>
                    <option value="marketplace">Marketplace</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="fintech">FinTech</option>
                    <option value="healthtech">HealthTech</option>
                    <option value="other">Other</option>
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
                    Send me weekly financial modeling tips and best practices (you can unsubscribe anytime)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Download Financial Model + Setup Guide
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
                  <span className="text-2xl">📘</span>
                  <h4 className="font-semibold text-primary-900">Setup Guide</h4>
                </div>
                <p className="text-sm text-secondary-700">Step-by-step instructions for customizing the model</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">🧮</span>
                  <h4 className="font-semibold text-primary-900">Formula Documentation</h4>
                </div>
                <p className="text-sm text-secondary-700">Explanation of all calculations and assumptions</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">📊</span>
                  <h4 className="font-semibold text-primary-900">Investor Presentation</h4>
                </div>
                <p className="text-sm text-secondary-700">Clean summary slides for investor presentations</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h4 className="font-semibold text-primary-900">KPI Dashboard</h4>
                </div>
                <p className="text-sm text-secondary-700">Pre-built dashboard with key startup metrics</p>
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
              Complement your financial model with these essential resources
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/downloads/series-a-financial-model"
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