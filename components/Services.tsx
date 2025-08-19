import { 
  Sprout, 
  TrendingUp, 
  Rocket, 
  Building2, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Sprout,
    title: 'Seed Funding Introduction',
    description: 'Connect early-stage startups with angel investors and seed funds. Perfect for companies with a proven concept ready for initial capital injection.',
    keywords: ['seed funding', 'startup capital', 'angel investors', 'early stage funding'],
    features: [
      'Angel investor network access',
      'Seed fund introductions',
      'Pitch deck optimization',
      'Due diligence preparation'
    ],
    typicalAmount: '$50K - $2M',
    timeline: '2-4 weeks',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: TrendingUp,
    title: 'Series A Funding',
    description: 'Connect growth-stage companies with venture capital firms for Series A rounds. Ideal for startups with proven traction and market validation.',
    keywords: ['Series A funding', 'venture capital', 'growth capital', 'startup investment'],
    features: [
      'VC firm introductions',
      'Growth strategy consulting',
      'Financial modeling support',
      'Board member connections'
    ],
    typicalAmount: '$2M - $15M',
    timeline: '4-8 weeks',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Rocket,
    title: 'Series B & C Funding',
    description: 'Connect established companies with late-stage investors for significant growth capital. Perfect for scaling operations and market expansion.',
    keywords: ['Series B funding', 'Series C funding', 'late stage funding', 'growth capital'],
    features: [
      'Late-stage VC connections',
      'Private equity introductions',
      'Strategic investor matching',
      'International expansion support'
    ],
    typicalAmount: '$15M - $100M+',
    timeline: '6-12 weeks',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Building2,
    title: 'Private Equity Connections',
    description: 'Connect established businesses with private equity firms for buyouts, recapitalizations, and strategic investments.',
    keywords: ['private equity', 'buyout funding', 'recapitalization', 'strategic investment'],
    features: [
      'PE firm introductions',
      'M&A advisory support',
      'Financial restructuring',
      'Exit strategy planning'
    ],
    typicalAmount: '$25M - $500M+',
    timeline: '8-16 weeks',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Angel Investor Network',
    description: 'Access our curated network of 500+ accredited angel investors across various industries and investment preferences.',
    keywords: ['angel investors', 'angel network', 'accredited investors', 'startup funding'],
    features: [
      'Curated investor matching',
      'Industry-specific connections',
      'Investment preference alignment',
      'Ongoing relationship management'
    ],
    typicalAmount: '$25K - $1M',
    timeline: '2-6 weeks',
    color: 'from-teal-500 to-green-600'
  },
  {
    icon: Target,
    title: 'Strategic Capital Advisory',
    description: 'Comprehensive advisory services for companies seeking strategic capital, including debt financing and alternative funding sources.',
    keywords: ['strategic capital', 'debt financing', 'alternative funding', 'capital advisory'],
    features: [
      'Debt financing options',
      'Alternative funding sources',
      'Capital structure optimization',
      'Risk management consulting'
    ],
    typicalAmount: 'Varies by need',
    timeline: '4-12 weeks',
    color: 'from-pink-500 to-rose-600'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="text-gradient">Capital Introduction</span>{' '}
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From seed funding to private equity, we provide targeted introductions to the right investors for every stage of your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Typical Amount:</span>
                        <p className="font-semibold text-gray-900">{service.typicalAmount}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <p className="font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 btn-outline group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Connect with the Right Investors?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of capital introduction experts will help you identify and connect with the perfect investors for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Investor Search
              </button>
              <button className="btn-secondary">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
