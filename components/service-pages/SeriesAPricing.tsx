import { Check, Star, ArrowRight } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Essential',
    price: '$15,000',
    description: 'Perfect for startups ready to optimize their Series A preparation',
    popular: false,
    features: [
      'Comprehensive investment readiness assessment',
      'Pitch deck optimization and design',
      'Financial model review and enhancement',
      'Targeted VC list (20 qualified firms)',
      'Market positioning strategy',
      'Due diligence preparation checklist',
      '2 weeks of email support'
    ],
    cta: 'Get Assessment',
    href: '/tools/investment-readiness-assessment'
  },
  {
    name: 'Professional',
    price: '$35,000',
    description: 'Complete Series A advisory with warm VC introductions',
    popular: true,
    features: [
      'Everything in Essential package',
      'Warm introductions to 8-12 target VCs',
      'Personal pitch coaching sessions',
      'Investor meeting coordination',
      'Due diligence process management',
      'Term sheet negotiation guidance',
      'Weekly strategy calls',
      '6 weeks of dedicated support'
    ],
    cta: 'Start Process',
    href: '/contact'
  },
  {
    name: 'Premium',
    price: '$65,000',
    description: 'White-glove service with guaranteed meetings and success fee',
    popular: false,
    features: [
      'Everything in Professional package',
      'Guaranteed 15+ VC meetings',
      'Dedicated senior advisor',
      'Legal and tax advisory coordination',
      'Post-funding strategic support',
      'Success fee: 3% of capital raised',
      'Unlimited calls and support',
      'Until successful closing'
    ],
    cta: 'Schedule Call',
    href: '/contact'
  }
];

export default function SeriesAPricing() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Series A Advisory{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right level of support for your Series A fundraising journey. All packages include our proven 4-step methodology.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-primary-500 scale-105' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-4">{tier.price}</div>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                      tier.popular ? 'bg-primary-500' : 'bg-primary-100'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        tier.popular ? 'text-white' : 'text-primary-600'
                      }`} />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={tier.href}
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Vommuli for Your Series A?
            </h3>
            <p className="text-gray-600">
              Our pricing reflects the value we deliver - successful Series A funding for ambitious startups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-600">85%</div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Success Rate</h4>
              <p className="text-sm text-gray-600">From intro to term sheet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-600">6.2</div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Avg Weeks</h4>
              <p className="text-sm text-gray-600">To term sheet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-xl font-bold text-primary-600">$500M+</div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Capital Raised</h4>
              <p className="text-sm text-gray-600">For our clients</p>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="font-semibold text-gray-900 mb-3">
              Flexible Payment Terms
            </h4>
            <p className="text-gray-600 text-sm">
              • 50% upfront, 50% at first VC meeting • Premium package success fee only applies to successful funding • 30-day satisfaction guarantee on Essential package • All packages include post-engagement support period
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}