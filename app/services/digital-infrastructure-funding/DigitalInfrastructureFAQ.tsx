'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const digitalInfrastructureFaqs = [
  {
    question: 'What makes digital infrastructure funding different from traditional tech venture capital?',
    answer: 'Digital infrastructure funding focuses on the foundational technologies that enable digital transformation - cloud platforms, edge computing, cybersecurity, networking, and data infrastructure. Unlike traditional tech VC, infrastructure investors emphasize scalability, reliability, enterprise adoption, and technical moats. These companies typically have longer sales cycles, enterprise customers, and require significant capital for scaling infrastructure capabilities.',
    category: 'Infrastructure Fundamentals'
  },
  {
    question: 'What types of digital infrastructure companies are ideal for institutional funding?',
    answer: 'Ideal digital infrastructure candidates include cloud platforms, edge computing solutions, cybersecurity technologies, networking infrastructure, data management platforms, API-first companies, and developer tools. Investors seek companies with proven enterprise adoption, technical differentiation, strong security postures, scalable architectures, and clear monetization models serving critical digital infrastructure needs.',
    category: 'Company Profile'
  },
  {
    question: 'How long does digital infrastructure fundraising typically take?',
    answer: 'Digital infrastructure fundraising averages 5-10 months depending on technical complexity, enterprise customer validation, and market positioning. Enterprise-ready solutions (4-6 months), complex platform technologies (8-12 months), early-stage infrastructure (10-15 months). Infrastructure companies require specialized investor education due to technical depth and enterprise sales cycles.',
    category: 'Timeline'
  },
  {
    question: 'What digital infrastructure sectors are most attractive to investors currently?',
    answer: 'High-growth infrastructure sectors include AI infrastructure platforms (+156% YoY funding), cloud-native security (+98% YoY), edge computing solutions (+87% YoY), and developer productivity tools (+72% YoY). Investors favor technologies enabling digital transformation, supporting remote work, enhancing cybersecurity, and improving developer experience.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if a digital infrastructure company is ready for institutional funding?',
    answer: 'We assess infrastructure readiness across seven dimensions: technical architecture (scalability, security, performance), market validation (enterprise customers, usage metrics), competitive positioning (technical moats, differentiation), team expertise (infrastructure experience, technical depth), business model (recurring revenue, unit economics), go-to-market strategy (enterprise sales, developer adoption), and growth potential (market size, expansion opportunities).',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical digital infrastructure valuation ranges by development stage?',
    answer: 'Digital infrastructure valuations vary by technical complexity, enterprise adoption, and market opportunity. Current ranges: Early product-market fit ($25M-75M), Enterprise traction ($75M-200M), Scaled platform ($200M-500M), Market leader ($500M-2B+). Valuations consider technical differentiation, customer concentration, revenue growth, and infrastructure market dynamics.',
    category: 'Valuation'
  },
  {
    question: 'How many digital infrastructure investors are in your network?',
    answer: 'Our network includes 130+ infrastructure-focused investors, including dedicated infrastructure funds like Battery Ventures and Bessemer, enterprise VCs like Accel and Index Ventures, strategic corporate investors like Intel Capital and Cisco Investments, and cloud-focused funds managing $180B+ in infrastructure capital across North America, Europe, and Asia.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for digital infrastructure funding introductions?',
    answer: 'Our digital infrastructure advisory achieves an 85% success rate for funding introductions, reflecting specialized understanding of infrastructure investor criteria, technical validation requirements, and enterprise market dynamics. Infrastructure clients average 2.3 term sheets per funding round with a 74% follow-on investment rate from infrastructure-focused investors.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with infrastructure investor introductions and technical positioning?',
    answer: 'We match infrastructure companies based on technology focus, target market, enterprise readiness, technical architecture, and investor expertise in specific infrastructure domains. Our process includes technical differentiation analysis, competitive landscape assessment, enterprise readiness evaluation, and scalability planning for optimal investor alignment.',
    category: 'Matching Process'
  },
  {
    question: 'What ongoing support do you provide for digital infrastructure companies post-funding?',
    answer: 'We provide specialized post-funding support including follow-on infrastructure funding strategy, enterprise customer development, strategic partnership facilitation with cloud providers, technical advisory board recruitment, competitive positioning refinement, international expansion planning, and exit strategy development for infrastructure companies throughout their scaling journey.',
    category: 'Post-Funding Support'
  }
];

export default function DigitalInfrastructureFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-500/20 to-zinc-500/20 border border-slate-500/30 backdrop-blur-sm mb-6">
            <span className="text-slate-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Digital Infrastructure Funding FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about digital infrastructure funding, enterprise technology investment, and our specialized infrastructure advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {digitalInfrastructureFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-slate-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-slate-500/10 to-zinc-500/10 rounded-2xl p-8 lg:p-12 border border-slate-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Scale Digital Infrastructure?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized infrastructure team understands enterprise technology challenges and can connect you with the right infrastructure-focused investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-slate-600 to-zinc-600 hover:from-slate-700 hover:to-zinc-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Infrastructure Consultation
              </a>
              <a href="/contact" className="border border-slate-500 text-slate-400 hover:bg-slate-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Infrastructure Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}