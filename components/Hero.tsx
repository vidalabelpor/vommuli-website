'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-400"></div>
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
              Trusted by 500+ Companies
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Series A Funding Experts{' '}
              <span className="text-gradient">$500M+ Raised</span>{' '}
              for Clients
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Premium VC deal sourcing and capital introduction services for Series A-C startups. Connect with mid-tier venture capital firms in NYC, Austin, Denver, and Miami.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">Targeted Investor Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">500+ Investor Network</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Optimized for Conversion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/tools/investment-readiness-assessment" className="btn-primary group inline-flex items-center justify-center">
                Get Your Investment Readiness Score
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="btn-outline inline-flex items-center justify-center">
                Schedule Expert Consultation
              </a>
            </motion.div>

            {/* Value Proposition Enhancement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-primary-200/30"
            >
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Success-based pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>85% success rate</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Trust Indicators with Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <p className="text-sm text-gray-500 mb-4">Recently funded companies include:</p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="h-8 w-full bg-gradient-to-r from-blue-100 to-blue-200 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-800 font-medium">AI SaaS</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$18M Series A</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-full bg-gradient-to-r from-green-100 to-green-200 rounded flex items-center justify-center">
                    <span className="text-xs text-green-800 font-medium">HealthTech</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$42M Series B</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-full bg-gradient-to-r from-purple-100 to-purple-200 rounded flex items-center justify-center">
                    <span className="text-xs text-purple-800 font-medium">Climate</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$25M Series A</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">📈 67% Introduction-to-Term-Sheet Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image/Illustration */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Capital Growth</h3>
                  <p className="text-primary-100">Connect • Grow • Succeed</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-accent-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">$2M+</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">500+</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
