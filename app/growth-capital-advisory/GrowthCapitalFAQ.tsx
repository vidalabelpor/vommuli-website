'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const growthCapitalFaqs = [
  {
    question: 'What makes growth capital different from traditional venture capital?',
    answer: 'Growth capital focuses on established, revenue-generating companies seeking expansion capital rather than early-stage startups. Growth investors typically take minority stakes in profitable businesses with proven business models, strong management teams, and clear expansion opportunities. Unlike VC, growth capital emphasizes cash flow generation, operational excellence, and strategic market expansion rather than pure innovation or market creation.',
    category: 'Growth Capital Fundamentals'
  },
  {
    question: 'What stage companies are ideal for growth capital funding?',
    answer: 'Ideal growth capital candidates are typically Series B+ companies with $5M-50M+ in annual revenue, positive or near-positive cash flows, proven product-market fit, and clear expansion opportunities. These companies often have strong unit economics, established customer bases, predictable revenue models, and experienced management teams ready to scale operations, enter new markets, or accelerate growth initiatives.',
    category: 'Company Profile'
  },
  {
    question: 'How long does growth capital fundraising typically take?',
    answer: 'Growth capital fundraising averages 4-8 months depending on company readiness, market conditions, and deal complexity. Well-prepared companies with strong financials (2-4 months), companies needing operational improvements (6-8 months), complex situations or competitive processes (8-12 months). Our growth capital clients typically complete funding 35% faster due to specialized investor targeting and comprehensive preparation.',
    category: 'Timeline'
  },
  {
    question: 'What growth capital market segments are most attractive to investors?',
    answer: 'Current attractive growth capital segments include SaaS platforms (+89% YoY funding), healthcare technology (+67% YoY), fintech solutions (+54% YoY), and vertical market software (+43% YoY). Growth investors favor businesses with recurring revenue models, strong market positions, scalable operations, and clear competitive advantages in large addressable markets.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if a company is ready for growth capital?',
    answer: 'We assess growth capital readiness across six key dimensions: financial performance (revenue growth, profitability trends, unit economics), market position (competitive advantages, market share), operational scalability (systems, processes, team), growth opportunities (expansion vectors, market size), management capability (track record, execution ability), and strategic positioning (differentiation, sustainability). Our evaluation includes financial analysis, market assessment, and operational review.',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical growth capital valuation ranges by company size?',
    answer: 'Growth capital valuations vary by revenue scale, growth rate, and profitability. Current ranges: $5M-15M revenue ($25M-75M valuation), $15M-50M revenue ($75M-250M valuation), $50M+ revenue ($250M-1B+ valuation). Valuations typically based on revenue multiples (3-8x) with premiums for high growth, strong margins, recurring revenue, and market leadership positions.',
    category: 'Valuation'
  },
  {
    question: 'How many growth capital investors are in your network?',
    answer: 'Our network includes 150+ growth capital investors, including growth equity funds like General Atlantic and Insight Partners, growth-focused VCs like Bessemer and Battery Ventures, private equity growth funds, family offices with growth mandates, and strategic corporate investors managing $200B+ in growth capital globally across technology, healthcare, and services sectors.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for growth capital funding introductions?',
    answer: 'Our growth capital advisory achieves an 84% success rate for growth-stage companies, reflecting our specialized understanding of growth investor criteria, operational requirements, and market positioning. Growth capital clients average 2.4 term sheets per funding round with a 71% follow-on investment rate from existing growth investors.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with growth capital investor introductions and matching?',
    answer: 'We match growth companies based on revenue scale, growth trajectory, sector focus, geographic presence, and strategic value-add requirements. Our network includes specialized partners across growth equity, late-stage VC, growth-focused PE, and strategic investors. We maintain detailed profiles including investment criteria, portfolio company synergies, and operational expertise for optimal matching.',
    category: 'Matching Process'
  },
  {
    question: 'What ongoing support do you provide for growth capital companies post-funding?',
    answer: 'We provide comprehensive post-funding support including follow-on fundraising strategy, operational excellence planning, strategic partnership facilitation, market expansion guidance, acquisition strategy development, and exit preparation. Our goal is long-term partnership throughout your growth company\'s scaling journey, including board support and strategic advisory as needed.',
    category: 'Post-Funding Support'
  }
];

export { growthCapitalFaqs };

export default function GrowthCapitalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
            <span className="text-green-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Growth Capital Advisory FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about growth capital funding, expansion strategies, and our specialized growth equity advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {growthCapitalFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-green-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="text-slate-300 leading-relaxed space-y-4">
                    <p>{faq.answer}</p>
                    <div className="pt-4 border-t border-slate-600">
                      <div className="text-sm text-slate-400">
                        <span className="font-medium">Category:</span> {faq.category}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 lg:p-12 border border-green-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Scale with Growth Capital?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized growth capital team understands scaling challenges and can connect you with the right growth equity investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Growth Consultation
              </a>
              <a href="/contact" className="border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Growth Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}