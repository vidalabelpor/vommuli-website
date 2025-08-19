'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SchemaMarkup from '../SchemaMarkup';

const faqs = [
  {
    id: 1,
    question: 'What stage should my startup be at for Series A funding?',
    answer: 'Series A is typically for startups that have achieved product-market fit with validated demand. You should have recurring revenue (ideally $100K+ ARR), proven growth metrics, a strong founding team, and a clear path to scale. Most Series A companies have moved beyond the initial MVP stage and are looking to accelerate growth and expand their market presence.'
  },
  {
    id: 2,
    question: 'How much should I raise in my Series A round?',
    answer: 'Series A rounds typically range from $2M to $15M, with the median around $8M in 2024. The amount should provide 18-24 months of runway and fund specific growth initiatives like team expansion, marketing, and product development. We help you determine the optimal raise amount based on your growth plan, market opportunity, and investor expectations.'
  },
  {
    id: 3,
    question: 'What is your typical timeline for Series A fundraising?',
    answer: 'Our systematic approach typically takes 4-8 weeks from preparation to term sheet. This includes 1-2 weeks for investment readiness assessment and preparation, 1 week for VC targeting and research, 2-4 weeks for warm introductions and meetings, and 2-8 weeks for deal management and closing. The timeline can vary based on market conditions and your specific situation.'
  },
  {
    id: 4,
    question: 'Do you guarantee that I will successfully raise Series A funding?',
    answer: 'While we cannot guarantee funding success (no ethical advisor can), we have an 85% success rate from introduction to term sheet. We only work with Series A-ready startups after conducting a thorough investment readiness assessment. Our structured process and extensive VC network significantly increase your chances of success.'
  },
  {
    id: 5,
    question: 'What makes your VC network different from other advisors?',
    answer: 'We have warm, established relationships with 150+ tier-1 and tier-2 venture capital firms that actively invest in Series A rounds. Our introductions come with context and our endorsement, not cold outreach. We match startups with VCs based on investment thesis, sector focus, check size, and stage preferences, resulting in higher meeting conversion rates.'
  },
  {
    id: 6,
    question: 'How do you help with pitch deck optimization?',
    answer: 'We completely redesign and optimize your pitch deck based on what VCs want to see in Series A presentations. This includes crafting compelling narratives, highlighting key metrics and traction, addressing market opportunity and competition, and ensuring visual design meets investor standards. We also provide pitch coaching and practice sessions.'
  },
  {
    id: 7,
    question: 'What information do you need to get started?',
    answer: 'We need your current pitch deck, financial model, key metrics and traction data, team backgrounds, competitive landscape analysis, and fundraising objectives. We also review any previous investor feedback and assess your current market position. All information is kept strictly confidential under professional advisory standards.'
  },
  {
    id: 8,
    question: 'How do you determine which VCs to target for introductions?',
    answer: 'We analyze 100+ potential VCs and filter based on investment thesis alignment, stage focus (Series A), check size ($2M-$15M), sector specialization, geographic preferences, and portfolio companies. We create a prioritized target list of 20-30 VCs and focus on warm introductions through our network for the highest probability matches.'
  },
  {
    id: 9,
    question: 'What support do you provide during due diligence?',
    answer: 'We help coordinate the due diligence process, prepare documentation, manage investor communications, facilitate reference calls, and support term sheet negotiations. We guide you through common due diligence requests, help address investor concerns, and ensure the process moves efficiently toward successful closing.'
  },
  {
    id: 10,
    question: 'What are your fees and payment terms?',
    answer: 'We offer three package levels: Essential ($15K), Professional ($35K), and Premium ($65K + 3% success fee). Payment terms are typically 50% upfront and 50% at first VC meeting. The Premium package success fee only applies if funding is successfully raised. We also offer a 30-day satisfaction guarantee on the Essential package.'
  },
  {
    id: 11,
    question: 'Do you work with international startups or only US-based companies?',
    answer: 'While we primarily focus on US and Canadian startups, we also work with international companies that are targeting US venture capital markets or have a strong US market presence. Our VC network is concentrated in Silicon Valley, New York, Austin, and other major US tech hubs.'
  },
  {
    id: 12,
    question: 'What happens if my startup is not ready for Series A yet?',
    answer: 'If our investment readiness assessment shows you need more preparation, we provide a detailed roadmap of what needs to be improved before fundraising. This might include achieving specific traction milestones, improving key metrics, or strengthening the team. We can also recommend our pitch deck optimization service to prepare for when you are ready.'
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
        <motion.div className="px-6 pb-6 pt-0">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function SeriesAFAQ() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Series A Funding{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our Series A funding advisory process and what to expect
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a free consultation to discuss your specific Series A fundraising needs and get personalized answers.
          </p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-flex items-center justify-center px-6 py-3">
              Schedule Consultation
            </a>
            <a href="/tools/investment-readiness-assessment" className="btn-outline inline-flex items-center justify-center px-6 py-3">
              Get Free Assessment
            </a>
          </motion.div>
          
          <p className="text-sm text-gray-500 mt-4">
            Confidential consultation • No commitment required
          </p>
        </motion.div>
      </motion.div>

      {/* FAQ Schema Markup for Series A Featured Snippets */}
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