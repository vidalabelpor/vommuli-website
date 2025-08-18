'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Target, Clock } from 'lucide-react';

export default function SeriesAHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              #1 Series A Advisory Service
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Series A Funding{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Preparation & Investor
              </span>{' '}
              Introductions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Expert Series A preparation and investor matching services. 4-8 week timeline, $2M-$15M funding range. 85% success rate connecting validated startups with top-tier VCs.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">85%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4-8wk</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">$2-15M</div>
                <div className="text-sm text-gray-600">Funding Range</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">150+</div>
                <div className="text-sm text-gray-600">VC Partners</div>
              </div>
            </motion.div>

            {/* Value Propositions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {[
                'Expert preparation of pitch deck, financial model, and due diligence materials',
                'Curated investor targeting based on stage, sector, and geographic preferences',
                'Warm introductions to perfect-fit VCs through our extensive network',
                'Strategic guidance throughout the entire fundraising process'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/tools/investment-readiness-assessment" 
                className="btn-primary group inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Start Series A Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/contact" 
                className="btn-outline inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Schedule Expert Call
              </a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-3">Recent Series A successes:</p>
              <div className="flex flex-wrap gap-4">
                <div className="px-3 py-2 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-900">AI/ML Startup: $12M</span>
                </div>
                <div className="px-3 py-2 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-green-900">HealthTech: $18M</span>
                </div>
                <div className="px-3 py-2 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium text-purple-900">Climate Tech: $25M</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Element */}
            <div className="relative p-8 bg-white rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Series A Success Pipeline</h3>
                <p className="text-gray-600">Our proven 4-step process</p>
              </div>
              
              {/* Process Steps */}
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Preparation', desc: 'Perfect your materials', color: 'bg-blue-100 text-blue-600' },
                  { icon: Users, title: 'Targeting', desc: 'Identify perfect VCs', color: 'bg-green-100 text-green-600' },
                  { icon: TrendingUp, title: 'Introductions', desc: 'Warm VC connections', color: 'bg-purple-100 text-purple-600' },
                  { icon: CheckCircle, title: 'Closing', desc: 'Term sheet to close', color: 'bg-orange-100 text-orange-600' }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Success Indicator */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">4.2x</div>
                <div className="text-sm text-green-800">Average valuation increase from initial assessment</div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">$15M</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Clock className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}