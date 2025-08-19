'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Eye, Download, Star } from 'lucide-react';

const deckExamples = [
  {
    id: 1,
    title: 'SaaS Series A Deck',
    company: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    raised: '$8M Series A',
    description: 'Enterprise workflow automation platform that raised Series A from tier-1 VC',
    slides: 16,
    highlights: ['Clear problem/solution fit', 'Strong traction metrics', 'Compelling market opportunity', 'Experienced team backgrounds'],
    beforeAfter: {
      before: 'Generic template with weak messaging',
      after: '40% higher investor response rate'
    }
  },
  {
    id: 2,
    title: 'HealthTech Series A Deck',
    company: 'MedTech Innovations',
    industry: 'Healthcare Technology',
    raised: '$12M Series A',
    description: 'AI-powered diagnostic platform that successfully raised Series A funding',
    slides: 18,
    highlights: ['Clinical validation data', 'FDA pathway clarity', 'Revenue model strength', 'Strategic partnerships'],
    beforeAfter: {
      before: 'Technical focus, unclear market',
      after: 'Led to 3 term sheets within 6 weeks'
    }
  },
  {
    id: 3,
    title: 'ClimaTech Series A Deck',
    company: 'GreenEnergy Corp',
    industry: 'Climate Technology',
    raised: '$15M Series A',
    description: 'Renewable energy technology startup that raised from impact investors',
    slides: 20,
    highlights: ['Impact metrics prominence', 'Financial returns clarity', 'Scalability demonstration', 'ESG compliance focus'],
    beforeAfter: {
      before: 'Impact-only narrative',
      after: 'Balanced impact + returns story'
    }
  }
];

const commonMistakes = [
  {
    mistake: 'Too many slides (25+)',
    solution: 'Keep to 15-20 slides max',
    impact: 'Maintains investor attention'
  },
  {
    mistake: 'Weak problem definition',
    solution: 'Quantify pain points clearly',
    impact: 'Stronger solution positioning'
  },
  {
    mistake: 'Missing traction metrics',
    solution: 'Highlight key growth indicators',
    impact: 'Proves product-market fit'
  },
  {
    mistake: 'Unclear ask and use of funds',
    solution: 'Specific funding request + allocation',
    impact: 'Demonstrates planning ability'
  }
];

export default function PitchDeckExamples() {
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
            Successful Pitch Deck{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Examples
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real pitch decks from startups that successfully raised Series A funding after our optimization process
          </p>
        </motion.div>

        {/* Deck Examples */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {deckExamples.map((deck, index) => (
            <motion.div
              key={deck.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{deck.title}</h3>
                  <div className="flex items-center text-sm text-primary-600">
                    <Eye className="w-4 h-4 mr-1" />
                    {deck.slides} slides
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                    {deck.industry}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {deck.raised}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm">{deck.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Strengths:</h4>
                  <ul className="space-y-2">
                    {deck.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm">
                        <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Before/After */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Transformation:</h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-red-600 font-medium">Before: </span>
                      <span className="text-gray-600">{deck.beforeAfter.before}</span>
                    </div>
                    <div>
                      <span className="text-green-600 font-medium">After: </span>
                      <span className="text-gray-600">{deck.beforeAfter.after}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary-100 hover:bg-primary-200 text-primary-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Request Example Slides
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Common Mistakes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Common Pitch Deck Mistakes We Fix
            </h3>
            <p className="text-gray-600">
              Avoid these costly errors that can derail your Series A fundraising
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-200 rounded-xl"
              >
                <div className="flex items-start mb-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{item.mistake}</h4>
                </div>
                
                <div className="flex items-start mb-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-700">{item.solution}</p>
                </div>
                
                <div className="ml-9">
                  <p className="text-xs text-primary-600 font-medium">
                    Result: {item.impact}
                  </p>
                </div>
              </motion.div>
            ))}
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
            Optimize Your Pitch Deck
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Get professional feedback from former VCs and startup advisors
          </p>
        </motion.div>
      </div>
    </section>
  );
}