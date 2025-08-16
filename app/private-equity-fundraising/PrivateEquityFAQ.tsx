'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const privateEquityFaqs = [
  {
    question: 'What makes private equity funding different from venture capital or growth equity?',
    answer: 'Private equity focuses on established, profitable companies seeking buyout capital, recapitalization, or significant ownership transitions. PE investors typically acquire majority control, implement operational improvements, and work closely with management to drive value creation over 3-7 year hold periods. Unlike VC or growth equity, PE emphasizes cash flow generation, operational excellence, and strategic optimization rather than rapid scaling or market expansion.',
    category: 'PE Fundamentals'
  },
  {
    question: 'What types of companies are ideal for private equity investment?',
    answer: 'Ideal PE candidates are typically mature companies with $10M-100M+ EBITDA, stable cash flows, established market positions, experienced management teams, and clear value creation opportunities. These businesses often have predictable revenue streams, strong competitive moats, optimization potential, and may be undergoing ownership transitions, management buyouts, or strategic repositioning.',
    category: 'Company Profile'
  },
  {
    question: 'How long does private equity fundraising typically take?',
    answer: 'PE fundraising averages 6-12 months depending on company complexity, deal structure, and market conditions. Management buyouts (4-8 months), strategic recapitalizations (6-10 months), complex situations or auction processes (8-15 months). Our PE clients typically complete transactions 30% faster due to specialized investor targeting, comprehensive preparation, and deal structuring expertise.',
    category: 'Timeline'
  },
  {
    question: 'What private equity market segments are most active currently?',
    answer: 'Active PE segments include healthcare services (+76% YoY activity), business services (+68% YoY), technology services (+54% YoY), and industrial manufacturing (+41% YoY). PE firms favor businesses with recurring revenue, asset-light models, fragmented markets for roll-up opportunities, and strong defensive characteristics in economic downturns.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if a company is ready for private equity?',
    answer: 'We assess PE readiness across seven key dimensions: financial performance (EBITDA generation, cash conversion), operational maturity (systems, processes, management depth), market position (competitive advantages, customer relationships), value creation opportunities (optimization potential, growth vectors), management alignment (ownership, incentives), deal structure considerations (debt capacity, valuation expectations), and transaction readiness (governance, reporting capabilities).',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical private equity valuation ranges by company size?',
    answer: 'PE valuations vary by industry, profitability, and growth prospects. Current ranges: $5M-15M EBITDA (4-7x), $15M-50M EBITDA (6-10x), $50M+ EBITDA (8-12x+). Lower middle market PE typically pays 4-8x EBITDA, while larger funds may pay 8-15x+ for premium assets. Valuations also depend on growth rate, market position, and strategic value.',
    category: 'Valuation'
  },
  {
    question: 'How many private equity investors are in your network?',
    answer: 'Our network includes 200+ private equity investors, including lower middle market funds like Riverside Partners, middle market funds like Warburg Pincus, large-cap funds like KKR and Blackstone, sector-focused specialists, family offices with PE capabilities, and strategic acquirers managing $500B+ in private equity capital across North America, Europe, and Asia.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for private equity transaction completion?',
    answer: 'Our private equity advisory achieves an 87% transaction completion rate, reflecting our specialized understanding of PE investor criteria, deal structures, and execution requirements. PE clients average 1.8 competitive bids per process with a 78% management retention rate post-transaction, demonstrating effective investor-management alignment.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with private equity investor introductions and deal structuring?',
    answer: 'We match companies with PE investors based on deal size, industry focus, investment strategy, geographic presence, and value creation approach. Our process includes comprehensive deal structuring, management presentation preparation, due diligence coordination, and negotiation support. We maintain detailed profiles of investor preferences, portfolio strategies, and transaction structures for optimal matching.',
    category: 'Deal Process'
  },
  {
    question: 'What ongoing support do you provide during and after PE transactions?',
    answer: 'We provide comprehensive transaction support including due diligence management, deal structure optimization, management retention planning, post-closing value creation strategy, follow-on acquisition support, and exit preparation. Our goal is ensuring successful partnerships between management teams and PE investors throughout the entire investment lifecycle.',
    category: 'Transaction Support'
  }
];

export default function PrivateEquityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm mb-6">
            <span className="text-indigo-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Private Equity Fundraising FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about private equity transactions, deal structures, and our specialized PE advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {privateEquityFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-indigo-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Execute Your PE Transaction?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized private equity team understands deal structures and can connect you with the right PE investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule PE Consultation
              </a>
              <a href="/contact" className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact PE Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}