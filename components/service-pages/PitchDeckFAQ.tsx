'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SchemaMarkup from '../SchemaMarkup';

const faqs = [
  {
    id: 1,
    question: 'What makes a pitch deck effective for Series A fundraising?',
    answer: 'An effective Series A pitch deck tells a compelling story with clear problem definition, strong market opportunity ($1B+ TAM), proven product-market fit with traction metrics, experienced team, and realistic financial projections. It should be 12-15 slides, visually appealing, and demonstrate clear path to $100M+ revenue potential.'
  },
  {
    id: 2,
    question: 'How long should my pitch deck be for Series A investors?',
    answer: 'Series A pitch decks should be 12-15 slides for presentations and 15-20 slides for detailed versions sent to investors. Each slide should convey one key message clearly. Any longer risks losing investor attention, any shorter may miss critical information VCs need to make investment decisions.'
  },
  {
    id: 3,
    question: 'What are the biggest pitch deck mistakes that kill Series A deals?',
    answer: 'Common deal-killers include: unclear value proposition, no proven traction metrics, unrealistic market size claims, weak competitive analysis, missing team credentials, unclear business model, poor financial projections, and failing to demonstrate clear path to scale. We help avoid these critical errors.'
  },
  {
    id: 4,
    question: 'What financial metrics should I include in my Series A pitch deck?',
    answer: 'Include key metrics like Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Lifetime Value (LTV), gross margins, burn rate, and runway. For Series A, investors want to see $100K+ ARR, improving unit economics, and clear path to $10M+ ARR within 3 years. Metrics should show strong growth trends.'
  },
  {
    id: 5,
    question: 'How do you help redesign and optimize pitch decks?',
    answer: 'We completely redesign your pitch deck with investor-focused narrative, compelling visual design, optimized slide flow, strengthened value proposition, enhanced traction presentation, improved financial modeling, competitive positioning, and risk mitigation strategies. We also provide pitch coaching and Q&A preparation.'
  },
  {
    id: 6,
    question: 'Do you provide pitch deck templates or start from scratch?',
    answer: 'We create custom pitch decks tailored to your specific business, not generic templates. While we use proven frameworks and slide structures that work with VCs, every deck is uniquely designed to highlight your company\'s strengths and address your market opportunity in the most compelling way possible.'
  },
  {
    id: 7,
    question: 'How long does the pitch deck optimization process take?',
    answer: 'Our pitch deck optimization typically takes 7-10 business days. This includes initial consultation (1 day), first draft creation (3-4 days), revision cycles (2-3 days), and final polish (1-2 days). Rush delivery in 5 days is available for urgent deadlines with expedited service.'
  },
  {
    id: 8,
    question: 'What information do I need to provide for pitch deck optimization?',
    answer: 'We need your current pitch deck or company overview, business plan/strategy document, financial model and key metrics, competitive analysis, team backgrounds, customer testimonials/case studies, and market research data. We also review any previous investor feedback to address specific concerns.'
  },
  {
    id: 9,
    question: 'Do you help with pitch presentation coaching?',
    answer: 'Yes, our premium package includes pitch presentation coaching. We conduct practice sessions, help refine your delivery, prepare you for common investor questions, work on storytelling techniques, and provide feedback on presentation style. This significantly improves your confidence and success rate in investor meetings.'
  },
  {
    id: 10,
    question: 'What\'s the difference between a presentation deck and a reading deck?',
    answer: 'Presentation decks (12-15 slides) are designed for live presentations with minimal text and compelling visuals. Reading decks (15-20 slides) include more detailed information and can stand alone when sent to investors. We create both versions optimized for their specific purposes.'
  },
  {
    id: 11,
    question: 'How do you ensure my pitch deck stands out to investors?',
    answer: 'We use professional design with clear visual hierarchy, compelling storytelling that addresses investor psychology, market-specific insights and benchmarks, differentiated positioning against competitors, and proven frameworks that have raised $500M+ in funding. Every deck is unique and memorable.'
  },
  {
    id: 12,
    question: 'What are your pitch deck optimization fees?',
    answer: 'Our pitch deck optimization packages range from $5K (Essential) to $15K (Premium). The Essential package includes deck redesign and optimization. Professional ($10K) adds financial modeling. Premium includes presentation coaching and ongoing revisions. All packages include unlimited revisions until you\'re completely satisfied.'
  }
];

interface FAQItemProps {
  faq: typeof faqs[0];
  index: number;
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-xl shadow-sm"
    >
      <button
        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PitchDeckFAQ() {
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
            Pitch Deck Optimization{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about creating investor-ready pitch decks for Series A fundraising
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Pitch Deck?
          </h3>
          <p className="text-gray-600 mb-6">
            Get a professional pitch deck that captures investor attention and drives funding success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-flex items-center justify-center px-6 py-3">
              Start Your Pitch Deck
            </a>
            <a href="/downloads/series-a-pitch-deck-template" className="btn-outline inline-flex items-center justify-center px-6 py-3">
              Download Free Template
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • See examples of winning decks
          </p>
        </motion.div>
      </div>

      {/* FAQ Schema Markup for Pitch Deck Featured Snippets */}
      <SchemaMarkup 
        type="faq"
        data={{
          faqs: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />
    </section>
  );
}