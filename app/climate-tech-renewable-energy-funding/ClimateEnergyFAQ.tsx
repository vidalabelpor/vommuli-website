'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const climateEnergyFaqs = [
  {
    question: 'What makes climate tech and renewable energy funding different from traditional venture capital?',
    answer: 'Climate tech funding focuses on companies developing solutions for decarbonization, energy transition, and environmental sustainability. Unlike traditional VC, climate investors emphasize environmental impact alongside financial returns, often requiring longer development timelines, regulatory navigation, and specialized technical expertise. Climate funds typically understand complex energy markets, policy landscapes, and sustainability metrics.',
    category: 'Climate Tech Fundamentals'
  },
  {
    question: 'What stage companies are ideal for climate tech and renewable energy funding?',
    answer: 'Ideal climate tech candidates range from early-stage R&D companies with breakthrough technologies to growth-stage companies with proven clean energy solutions. Investors seek companies with strong IP portfolios, regulatory compliance, market validation, experienced technical teams, and clear paths to commercial scalability in renewable energy, energy storage, carbon capture, or sustainable technologies.',
    category: 'Company Profile'
  },
  {
    question: 'How long does climate tech fundraising typically take?',
    answer: 'Climate tech fundraising averages 6-12 months depending on technology maturity, regulatory complexity, and market readiness. Deep tech solutions (12-18 months), proven renewable technologies (4-8 months), later-stage climate solutions (6-10 months). Climate tech companies typically require specialized investor education due to technical complexity and longer development cycles.',
    category: 'Timeline'
  },
  {
    question: 'What climate tech sectors are most attractive to investors currently?',
    answer: 'High-growth climate sectors include renewable energy storage (+94% YoY funding), carbon capture & utilization (+78% YoY), clean transportation (+65% YoY), and sustainable agriculture (+52% YoY). Investors favor technologies addressing large carbon reduction opportunities, regulatory tailwinds, established revenue models, and scalable deployment potential.',
    category: 'Market Segments'
  },
  {
    question: 'How do you evaluate if a climate tech company is ready for institutional funding?',
    answer: 'We assess climate tech readiness across seven dimensions: technology maturity (IP strength, pilot validation), market opportunity (addressable carbon impact, commercial viability), regulatory environment (policy support, compliance status), team expertise (technical depth, industry experience), financial projections (unit economics, scaling models), competitive positioning (differentiation, barriers to entry), and impact measurement (ESG metrics, sustainability outcomes).',
    category: 'Investment Readiness'
  },
  {
    question: 'What are typical climate tech valuation ranges by development stage?',
    answer: 'Climate tech valuations vary by technology risk, market size, and development stage. Current ranges: Pre-revenue/R&D ($5M-25M), Pilot/demonstration ($25M-75M), Commercial deployment ($75M-250M), Scaled operations ($250M-1B+). Valuations consider technology differentiation, carbon impact potential, regulatory advantages, and commercial traction alongside traditional financial metrics.',
    category: 'Valuation'
  },
  {
    question: 'How many climate tech and renewable energy investors are in your network?',
    answer: 'Our network includes 120+ climate-focused investors, including dedicated climate funds like Breakthrough Energy Ventures, traditional VCs with climate mandates like NEA and Kleiner Perkins, corporate strategic investors, government-backed funds, and international climate capital sources managing $150B+ in climate-focused capital across North America, Europe, and Asia.',
    category: 'Network'
  },
  {
    question: 'What is the success rate for climate tech funding introductions?',
    answer: 'Our climate tech advisory achieves an 81% success rate for funding introductions, reflecting specialized understanding of climate investor criteria, technical due diligence requirements, and impact measurement frameworks. Climate tech clients average 2.1 term sheets per funding round with a 73% follow-on investment rate from climate-focused investors.',
    category: 'Success Metrics'
  },
  {
    question: 'How do you help with climate tech investor introductions and impact positioning?',
    answer: 'We match climate companies based on technology focus, development stage, carbon impact potential, geographic markets, and investor expertise in specific climate sectors. Our process includes impact measurement framework development, technical diligence preparation, regulatory landscape analysis, and carbon reduction quantification for optimal investor alignment.',
    category: 'Matching Process'
  },
  {
    question: 'What ongoing support do you provide for climate tech companies post-funding?',
    answer: 'We provide specialized post-funding support including follow-on climate funding strategy, regulatory navigation guidance, carbon market positioning, strategic partnership facilitation with energy companies, government relations support, impact reporting development, and exit strategy planning for climate tech companies throughout their growth and scaling journey.',
    category: 'Post-Funding Support'
  }
];

export default function ClimateEnergyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-green-500/20 border border-orange-500/30 backdrop-blur-sm mb-6">
            <span className="text-orange-300 text-sm font-medium">❓ Comprehensive FAQ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Climate Tech & Renewable Energy FAQ
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto">
            Comprehensive answers to the most common questions about climate tech funding, renewable energy investment, and our specialized environmental impact advisory process.
          </p>
        </div>
        
        <div className="space-y-4">
          {climateEnergyFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-orange-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-2xl p-8 lg:p-12 border border-orange-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Drive Climate Impact with Funding?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our specialized climate tech team understands sustainability challenges and can connect you with the right impact-focused investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Climate Consultation
              </a>
              <a href="/contact" className="border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Climate Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}