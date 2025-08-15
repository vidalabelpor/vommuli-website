'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Handshake, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Initial Assessment & Strategy',
    description: 'We begin with a comprehensive analysis of your business, funding needs, and growth objectives. Our team evaluates your financial position, market opportunity, and investment readiness.',
    details: [
      'Business model analysis',
      'Financial health assessment',
      'Market opportunity evaluation',
      'Investment readiness review',
      'Funding strategy development'
    ],
    duration: '1-2 weeks',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    step: '02',
    icon: Target,
    title: 'Investor Matching & Targeting',
    description: 'Using our extensive network and proprietary matching algorithms, we identify the most suitable investors based on your industry, stage, funding needs, and strategic goals.',
    details: [
      'Investor preference analysis',
      'Network database search',
      'Strategic fit evaluation',
      'Investment thesis alignment',
      'Initial outreach planning'
    ],
    duration: '2-3 weeks',
    color: 'from-green-500 to-emerald-600'
  },
  {
    step: '03',
    icon: Handshake,
    title: 'Introduction & Facilitation',
    description: 'We facilitate strategic introductions between your company and potential investors, ensuring proper positioning and preparation for successful meetings and discussions.',
    details: [
      'Strategic company positioning',
      'Investor introduction facilitation',
      'Meeting coordination',
      'Presentation support',
      'Follow-up management'
    ],
    duration: '3-6 weeks',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Deal Support & Closing',
    description: 'Throughout the investment process, we provide ongoing support including due diligence assistance, term sheet negotiation, and deal structuring to ensure successful closings.',
    details: [
      'Due diligence support',
      'Term sheet negotiation',
      'Deal structuring assistance',
      'Legal coordination',
      'Closing facilitation'
    ],
    duration: '4-12 weeks',
    color: 'from-orange-500 to-red-600'
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Successfully facilitated over $2B in capital raises across 500+ companies'
  },
  {
    icon: CheckCircle,
    title: 'Extensive Network',
    description: 'Access to 500+ accredited investors, VC firms, and private equity groups'
  },
  {
    icon: CheckCircle,
    title: 'Industry Expertise',
    description: 'Deep knowledge across technology, healthcare, fintech, and emerging sectors'
  },
  {
    icon: CheckCircle,
    title: 'Ongoing Support',
    description: 'Continued relationship management and strategic guidance post-investment'
  }
];

export default function Process() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-gradient">Proven Process</span>{' '}
            for Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach to capital introduction has helped hundreds of companies secure the right funding at the right time. Here's how we make it happen.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {step.step}
              </div>

              {/* Content Card */}
              <div className="card border-0 bg-white shadow-xl">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Key Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Typical Duration:</span>
                    <p className="font-semibold text-gray-900">{step.duration}</p>
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Vommuli for Capital Introduction?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines deep industry expertise with an extensive investor network to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Our Success by the Numbers
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$2B+</div>
                <div className="text-primary-100">Capital Raised</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-100">Companies Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-primary-100">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
