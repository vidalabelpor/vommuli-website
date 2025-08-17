'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const healthcareFaqs = [
  {
    question: 'What makes healthcare and MedTech funding different from traditional venture capital?',
    answer: 'Healthcare funding requires specialized expertise in regulatory pathways, clinical validation, and healthcare market dynamics. Unlike traditional VC, healthcare investors understand FDA approval processes, reimbursement landscapes, and longer development timelines. MedTech investors focus on clinical evidence, safety data, regulatory compliance, and healthcare system adoption rather than just technology innovation.',
    category: 'Healthcare Fundamentals'
  },
  {
    question: 'What stage companies are ideal for healthcare and MedTech funding?',
    answer: 'Ideal healthcare candidates range from pre-clinical companies with breakthrough medical technologies to revenue-generating companies with proven clinical outcomes. Investors seek companies with strong IP portfolios, clinical validation, regulatory clarity, experienced medical teams, and clear commercialization pathways in medical devices, digital health, or healthcare services.',
    category: 'Company Profile'
  },
  {
    question: 'How long does healthcare and MedTech fundraising typically take?',
    answer: 'Healthcare fundraising averages 8-14 months depending on regulatory complexity, clinical development stage, and market readiness. Early-stage/pre-clinical (12-18 months), clinical-stage companies (8-12 months), commercial-stage healthcare (6-10 months). Healthcare companies require specialized investor education due to regulatory requirements and longer validation cycles.',
    category: 'Timeline'
  },
  {
    question: 'What healthcare sectors are most attractive to investors currently?',
    answer: 'High-growth healthcare sectors include digital therapeutics (+112% YoY funding), AI-powered diagnostics (+89% YoY), remote patient monitoring (+73% YoY), and healthcare automation (+61% YoY). Investors favor technologies addressing clinical outcomes, cost reduction, healthcare access, and regulatory-approved solutions with strong reimbursement pathways.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if a healthcare company is ready for institutional funding?',
    answer: 'We assess healthcare readiness across eight dimensions: clinical validation (safety data, efficacy outcomes), regulatory status (FDA pathway, approvals), market opportunity (addressable patient population, commercial viability), team expertise (medical advisory, regulatory experience), intellectual property (patent protection, freedom to operate), reimbursement strategy (payer coverage, health economics), competitive positioning (clinical differentiation), and commercialization readiness (sales strategy, market access).',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical healthcare and MedTech valuation ranges by development stage?',
    answer: 'Healthcare valuations vary by clinical risk, market size, and regulatory progress. Current ranges: Pre-clinical/concept ($5M-20M), Clinical trials ($20M-75M), FDA-approved/commercial ($75M-300M), Scaled operations ($300M-1B+). Valuations consider clinical data quality, regulatory milestones, reimbursement status, and commercial traction alongside traditional financial metrics.',
    category: 'Valuation'
  },
  {
    question: 'How many healthcare and MedTech investors are in your network?',
    answer: 'Our network includes 110+ healthcare-focused investors, including dedicated health funds like Andreessen Bio and GV, traditional VCs with healthcare practices like NEA and Kleiner Perkins, strategic corporate investors like Johnson & Johnson Innovation, and healthcare-focused family offices managing $125B+ in healthcare capital across North America, Europe, and Asia.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for healthcare funding introductions?',
    answer: 'Our healthcare advisory achieves an 83% success rate for funding introductions, reflecting specialized understanding of healthcare investor criteria, clinical validation requirements, and regulatory frameworks. Healthcare clients average 2.2 term sheets per funding round with a 76% follow-on investment rate from healthcare-focused investors.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with healthcare investor introductions and clinical positioning?',
    answer: 'We match healthcare companies based on therapeutic area, development stage, regulatory pathway, clinical evidence, and investor expertise in specific healthcare sectors. Our process includes clinical data optimization, regulatory milestone planning, reimbursement strategy development, and market access positioning for optimal investor alignment.',
    category: 'Matching Process'
  },
  {
    question: 'What ongoing support do you provide for healthcare companies post-funding?',
    answer: 'We provide specialized post-funding support including follow-on healthcare funding strategy, regulatory milestone planning, clinical trial design guidance, strategic partnership facilitation with healthcare systems, FDA submission support, reimbursement strategy development, and exit planning for healthcare companies throughout their clinical and commercial journey.',
    category: 'Post-Funding Support'
  }
];

export { healthcareFaqs };

export default function HealthcareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
            <span className="text-cyan-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Healthcare & MedTech Funding FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about healthcare funding, medical technology investment, and our specialized healthcare advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {healthcareFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-cyan-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 lg:p-12 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Advance Healthcare Innovation?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized healthcare team understands medical innovation challenges and can connect you with the right healthcare-focused investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Healthcare Consultation
              </a>
              <a href="/contact" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Healthcare Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}