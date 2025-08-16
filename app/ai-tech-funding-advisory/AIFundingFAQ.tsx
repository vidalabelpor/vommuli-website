'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const aiFaqs = [
  {
    question: 'What makes AI funding different from traditional tech funding?',
    answer: 'AI funding requires specialized technical due diligence, including model performance validation, data quality assessment, scalability analysis, and bias testing. Investors evaluate AI companies on technical metrics like model accuracy, computational efficiency, and data moats rather than just traditional business metrics. AI companies also command 2-3x premiums over traditional software due to technical barriers and market opportunity size.',
    category: 'AI Fundamentals'
  },
  {
    question: 'What technical documentation do AI investors require?',
    answer: 'AI investors typically require comprehensive technical documentation including model architecture diagrams, performance benchmarks, training data specifications, validation methodologies, scalability analysis, and bias testing reports. We help prepare investor-ready technical packages that include model performance metrics, data quality assessments, IP portfolio documentation, and competitive differentiation analysis.',
    category: 'Technical Requirements'
  },
  {
    question: 'How long does AI startup fundraising typically take?',
    answer: 'AI startup fundraising averages 4-8 months depending on stage and technical complexity. Our clients typically complete funding 40% faster due to specialized investor targeting and technical validation preparation. Timeline varies: Pre-Seed AI (3-5 months), Seed AI (4-6 months), Series A AI (6-8 months). Well-prepared companies with strong technical documentation and metrics often accelerate this process significantly.',
    category: 'Timeline'
  },
  {
    question: 'What AI market segments are most attractive to investors?',
    answer: 'Current hot AI segments include generative AI applications (+127% YoY funding), AI infrastructure & tools (+89% YoY), enterprise AI platforms (+71% YoY), and AI security solutions (+56% YoY). We track real-time investor interest across all AI verticals including emerging areas like quantum-AI, vertical AI solutions, and AI-powered automation platforms.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if an AI company is investment-ready?',
    answer: 'We assess AI companies across four key dimensions: technical excellence (model performance, data quality), market validation (customer traction, use case validation), team expertise (AI/ML talent depth), and competitive positioning (technical moats, IP). Our evaluation framework includes technical readiness checklists, business validation metrics, and competitive analysis to identify gaps and optimization opportunities.',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical AI startup valuation ranges by stage?',
    answer: 'AI startup valuations vary significantly by technical complexity, market traction, and team experience. Current ranges: pre-seed ($5M-15M), seed ($15M-50M), Series A ($50M-150M), Series B ($150M-500M). AI companies command 2-3x premiums over traditional software, with additional premium factors including proven AI teams (2-3x), strong technical moats (1.5-2x), enterprise traction (2x), and hot AI segments (1.5x).',
    category: 'Valuation'
  },
  {
    question: 'How many AI-focused investors are in your network?',
    answer: 'Our network includes 85+ AI-specialized VC partners, including tier-1 funds like Andreessen Horowitz, AI-focused specialists like AI Fund and Radical Ventures, corporate investors like Google Ventures and Microsoft Ventures, and international AI capital managing $45B+ in AI-focused capital. We maintain relationships across the full spectrum of AI investment focus areas.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for AI startup funding introductions?',
    answer: 'Our AI and tech funding advisory achieves a 76% success rate for AI startups, which is 23% higher than general tech companies. This reflects our specialized understanding of technical requirements, AI market dynamics, and investor evaluation criteria. Our clients average 3.2 term sheets per funding round with a 67% follow-on investment rate.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with AI investor introductions and matching?',
    answer: 'We match companies based on technology focus, investment stage, sector expertise, and strategic value-add capabilities. Our network includes 85+ specialized partners across tier-1 funds, AI-native VCs, corporate strategics, and international capital. We track 340+ AI investments and maintain detailed investor profiles to ensure optimal matching based on technical specialization, investment criteria, and strategic alignment.',
    category: 'Matching Process'
  },
  {
    question: 'What ongoing support do you provide post-funding?',
    answer: 'We provide comprehensive post-funding support including follow-on fundraising strategy, investor relations management, strategic partnership introductions, technical advisory connections, and market expansion planning. Our goal is long-term partnership throughout your AI company\'s growth journey, including immediate support (investor onboarding, board meeting preparation) and long-term strategic guidance (follow-on rounds, exit preparation).',
    category: 'Post-Funding Support'
  }
];

export default function AIFundingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
            <span className="text-blue-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            AI Funding Advisory FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about AI startup funding, investor requirements, and our specialized advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {aiFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 lg:p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Accelerate Your AI Funding?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized AI funding team understands the technical requirements and can connect you with the right AI-focused investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule AI Consultation
              </a>
              <a href="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact AI Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}