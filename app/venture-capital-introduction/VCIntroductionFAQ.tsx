'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const vcFaqs = [
  {
    question: 'What is the success rate for venture capital introductions?',
    answer: 'Our venture capital introduction service achieves a 67% introduction-to-term-sheet success rate, which is 12% above the industry average. This high success rate is achieved through our rigorous VC qualification process, strategic positioning approach, and established relationships with 200+ tier-1 venture capital firms. Success rates vary by stage: Series A (72%), Series B (68%), and Series C+ (61%), reflecting the increasing selectivity at later stages.',
    category: 'Success Metrics'
  },
  {
    question: 'How long does the VC introduction process take from start to term sheet?',
    answer: 'The complete VC introduction process typically takes 3-9 months, depending on company readiness, market conditions, and funding stage. The timeline includes: strategy development and positioning (2-3 weeks), VC identification and qualification (3-4 weeks), introduction phase with initial meetings (4-8 weeks), and due diligence with term sheet negotiation (8-16 weeks). Well-prepared companies with strong metrics often complete the process 35% faster than industry averages.',
    category: 'Timeline'
  },
  {
    question: 'What funding stages and company types do you work with for VC introductions?',
    answer: 'We support all venture capital funding stages: Series A ($2M-$20M, requiring $1M+ ARR), Series B ($10M-$50M, requiring $5M+ ARR), and Series C+ ($25M-$200M, requiring $20M+ ARR). We work with technology companies, healthcare/biotech firms, AI/ML platforms, climate tech startups, and fintech companies. Each stage has specialized approaches, specific VC network access, and tailored success metrics based on current market conditions and investor preferences.',
    category: 'Funding Stages'
  },
  {
    question: 'How many VC firms are in your network and what types of investors do you work with?',
    answer: 'Our network includes 200+ tier-1 venture capital firms globally, spanning institutional VCs like Andreessen Horowitz-tier firms, sector-focused specialists in AI/healthcare/fintech, and international growth capital partners across US, Europe, and Asia-Pacific markets. This includes both generalist funds ($100M-$2B+ AUM) and specialized investors focused on specific sectors, stages, and geographies. We maintain active relationships with partners, principals, and investment committee members to ensure optimal introduction pathways.',
    category: 'Network'
  },
  {
    question: 'What sectors and industries do you specialize in for VC introductions?',
    answer: 'We specialize in high-growth sectors including AI & deep technology (34% of current VC allocation), healthcare & biotech, fintech & enterprise software, climate & ESG investments, and vertical SaaS platforms. Our sector expertise includes dedicated VC networks for each vertical, deep understanding of sector-specific metrics and KPIs, regulatory considerations, and market dynamics. We also maintain relationships with emerging sector specialists in areas like synthetic biology, quantum computing, and space technology.',
    category: 'Industries'
  },
  {
    question: 'What information and materials do you need to begin a VC introduction engagement?',
    answer: 'To begin a VC introduction engagement, we typically need: company overview and business model description, three years of historical financial performance and forward projections, current traction metrics and KPIs, target funding amount and intended use of capital, existing investor relationships and any constraints, management team backgrounds and board composition, competitive analysis and market positioning materials, and fundraising timeline requirements. We also conduct a comprehensive readiness assessment to identify any gaps that could impact VC reception.',
    category: 'Requirements'
  },
  {
    question: 'How do you ensure confidentiality during the VC introduction process?',
    answer: 'We maintain strict confidentiality protocols throughout all engagements. All initial consultations are completely confidential with no information sharing, we execute comprehensive NDAs before any detailed business information sharing, VC introductions are made only with explicit client approval and controlled information release, and we follow professional investment banking confidentiality standards. We never share client information, strategy details, fundraising plans, or financial data without written consent. Our relationship approach ensures discrete, professional handling of all sensitive business information.',
    category: 'Confidentiality'
  },
  {
    question: 'What happens if VCs are not initially interested, and how do you manage the introduction process?',
    answer: 'If initial VC interest is limited, we analyze feedback to identify positioning adjustments, business model refinements, or timing considerations. Our process includes ongoing relationship management with follow-up strategies, quarterly updates to maintain VC awareness, pivoting to alternative VC targets with different investment theses, and business development support to strengthen company metrics before re-engagement. We maintain long-term relationships with VCs to enable future introductions as companies evolve and market conditions change. Our success comes from persistence and strategic iteration rather than one-time introduction attempts.',
    category: 'Process Management'
  }
];

export { vcFaqs };

export default function VCIntroductionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <span className="text-purple-300 text-sm font-medium">❓ Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Venture Capital Introduction FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive answers to the most common questions about VC introductions, fundraising processes, and working with our team.
          </p>
        </div>
        
        <div className="space-y-4">
          {vcFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-purple-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 lg:p-12 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Connect with VCs?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our team of VC introduction experts is here to help connect you with the right investors for your funding round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </a>
              <a href="/contact" className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}