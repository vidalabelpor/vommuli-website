'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, FileText, TrendingUp, Eye, Award } from 'lucide-react';

export default function PitchDeckHero() {
  return (
    <section className="relative bg-gradient-to-br from-accent-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium"
            >
              <Award className="w-4 h-4 mr-2" />
              Expert Pitch Deck Review Service
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Pitch Deck Review &{' '}
              <span className="text-gradient bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">
                Optimization
              </span>{' '}
              Services
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Professional pitch deck review and optimization for Series A-C funding. Expert feedback from former VCs. 3x higher investor response rates guaranteed.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-gray-700 font-medium">VC Perspective Review</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-gray-700 font-medium">3x Response Rate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-gray-700 font-medium">Story & Flow Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent-600" />
                </div>
                <span className="text-gray-700 font-medium">48-Hour Turnaround</span>
              </div>
            </motion.div>

            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-6 bg-red-50 border border-red-200 rounded-xl"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-bold text-red-800 mb-2">78% of pitch decks fail to engage investors</h3>
                  <p className="text-red-700 text-sm">
                    Most pitch decks focus on features instead of outcomes, lack compelling narratives, 
                    and miss critical elements that VCs look for in funding decisions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-6 bg-green-50 border border-green-200 rounded-xl"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Our expert review transforms your deck</h3>
                  <p className="text-green-700 text-sm">
                    Get actionable feedback from former VCs who've reviewed 1,000+ pitch decks and 
                    know exactly what investors want to see.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="/contact?service=pitch-deck" 
                className="btn-primary group inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                Get Pitch Deck Review
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#examples" 
                className="btn-outline inline-flex items-center justify-center px-8 py-4 text-lg"
              >
                See Before/After Examples
              </a>
            </motion.div>

            {/* Pricing Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-6 border-t border-gray-200"
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Review starts at $2,500</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>48-hour turnaround</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Satisfaction guaranteed</span>
                </div>
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
            {/* Pitch Deck Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                {/* Mock Slide */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">The Problem</h3>
                      <p className="text-gray-600 text-sm px-4">Clear market problem statement</p>
                    </div>
                  </div>
                  
                  {/* Review Notes Overlay */}
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Needs work
                  </div>
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Good visual
                  </div>
                </div>
                
                {/* Progress Indicators */}
                <div className="flex space-x-2 mb-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i}
                      className={`h-2 flex-1 rounded ${
                        i < 3 ? 'bg-primary-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Review Summary */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">7.2/10</div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                  <div className="text-xs text-gray-500 mt-1">15 improvements identified</div>
                </div>
              </div>
              
              {/* Floating Review Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
              >
                💡 Story needs clarity
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium"
              >
                ✅ Strong traction slide
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}