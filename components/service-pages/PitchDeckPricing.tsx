'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Clock, Users, Target } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Review & Feedback',
    price: '$2,500',
    timeline: '3-5 days',
    description: 'Professional review and actionable feedback on your existing pitch deck',
    popular: false,
    icon: Target,
    features: [
      'Comprehensive deck analysis (structure, content, design)',
      'Detailed feedback report with specific recommendations',
      'Slide-by-slide comments and suggestions',
      'Competitive benchmarking against successful decks',
      'Video walkthrough of key improvements needed',
      '1 follow-up call to discuss feedback',
      '30-day email support for questions'
    ],
    deliverables: [
      'Detailed feedback report (15+ pages)',
      '30-minute video analysis',
      '1-hour consultation call'
    ],
    ideal: 'Startups with existing decks needing expert feedback',
    cta: 'Get Review',
    href: '/contact'
  },
  {
    name: 'Complete Redesign',
    price: '$7,500',
    timeline: '7-10 days',
    description: 'Full pitch deck redesign with professional design and compelling narrative',
    popular: true,
    icon: Users,
    features: [
      'Everything in Review & Feedback package',
      'Complete deck redesign from scratch',
      'Professional visual design and branding',
      'Compelling narrative development',
      'Financial model integration and visualization',
      'Industry-specific customization',
      'Multiple design iterations until perfect',
      '2 presentation coaching sessions'
    ],
    deliverables: [
      'Redesigned pitch deck (15-20 slides)',
      'Presentation-ready and PDF versions',
      'One-page executive summary',
      'Speaker notes for each slide'
    ],
    ideal: 'Startups preparing for Series A fundraising',
    cta: 'Start Redesign',
    href: '/contact'
  },
  {
    name: 'Deck + Fundraising',
    price: '$15,000',
    timeline: '14-21 days',
    description: 'Complete deck redesign plus fundraising strategy and investor targeting',
    popular: false,
    icon: Clock,
    features: [
      'Everything in Complete Redesign package',
      'Comprehensive fundraising strategy development',
      'Investor research and targeting (20 VCs)',
      'Pitch coaching and presentation training',
      'Q&A preparation and practice sessions',
      'Fundraising timeline and milestone planning',
      'Email templates for investor outreach',
      '30 days of fundraising support'
    ],
    deliverables: [
      'All Complete Redesign deliverables',
      'Fundraising strategy document',
      'Target investor list with contacts',
      'Outreach email templates'
    ],
    ideal: 'Startups ready to actively fundraise',
    cta: 'Get Full Package',
    href: '/contact'
  }
];

const addOns = [
  {
    name: 'Rush Delivery',
    price: '+50%',
    description: 'Complete project in half the standard timeline'
  },
  {
    name: 'Video Pitch Creation',
    price: '+$2,500',
    description: 'Professional 2-3 minute video pitch with voiceover'
  },
  {
    name: 'Financial Model Review',
    price: '+$1,500',
    description: 'Comprehensive financial model optimization'
  },
  {
    name: 'Additional Coaching',
    price: '$500/hour',
    description: 'Extra presentation coaching and Q&A practice'
  }
];

export default function PitchDeckPricing() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pitch Deck{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Optimization Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional pitch deck services designed to help you secure Series A funding from top-tier VCs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular ? 'border-primary-500 scale-105' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  plan.popular ? 'bg-primary-100' : 'bg-gray-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-primary-600' : 'text-gray-600'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">{plan.price}</div>
                <div className="text-sm text-gray-500 mb-4">{plan.timeline} delivery</div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-primary-500' : 'text-green-500'
                    }`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                <ul className="space-y-2">
                  {plan.deliverables.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className={`p-4 rounded-lg mb-6 ${
                plan.popular ? 'bg-primary-50' : 'bg-gray-50'
              }`}>
                <div className="text-sm">
                  <span className={`font-medium ${
                    plan.popular ? 'text-primary-800' : 'text-gray-700'
                  }`}>Ideal for: </span>
                  <span className={plan.popular ? 'text-primary-700' : 'text-gray-600'}>
                    {plan.ideal}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={plan.href}
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Optional Add-Ons
            </h3>
            <p className="text-gray-600">
              Enhance your package with additional services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
              >
                <div className="text-lg font-bold text-primary-600 mb-2">{addon.price}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-lg opacity-90 mb-6">
            If you're not completely satisfied with your pitch deck optimization, we'll revise it until you are or provide a full refund.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-1">Unlimited Revisions</div>
              <div className="opacity-75">Until you're 100% happy</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Money-Back Guarantee</div>
              <div className="opacity-75">30-day refund policy</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Expert Team</div>
              <div className="opacity-75">Former VCs & startup founders</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/contact" className="btn-primary inline-flex items-center px-8 py-4 text-lg">
            Get Your Pitch Deck Optimized
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Used by 200+ startups to successfully raise Series A funding
          </p>
        </motion.div>
      </div>
    </section>
  );
}