import type { Metadata } from 'next';
import { JsonLd } from 'react-schemaorg';

export const metadata: Metadata = {
  title: 'AI & Tech Funding Advisory | Deep Tech Venture Capital & Growth Equity',
  description: 'Specialized AI and emerging technology funding advisory connecting deep tech companies with venture capital, growth equity, and strategic investors. Expertise in AI/ML, SaaS, and enterprise technology.',
  keywords: [
    'AI startup funding advisor',
    'deep tech venture capital',
    'artificial intelligence funding',
    'machine learning startup funding',
    'SaaS growth capital advisory',
    'enterprise AI funding',
    'emerging technology investment',
    'tech startup capital raising',
    'AI venture capital introduction',
    'deep tech growth equity'
  ],
  openGraph: {
    title: 'AI & Tech Funding Advisory | Vommuli Ventures',
    description: 'Specialized AI and emerging technology funding advisory connecting deep tech companies with venture capital and growth equity.',
    url: 'https://vommuli.com/ai-tech-funding-advisory',
  },
};

export default function AITechFundingPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI & Tech Funding Advisory Services",
          "description": "Specialized AI and emerging technology funding advisory connecting deep tech companies with venture capital, growth equity, and strategic investors",
          "provider": {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          "serviceType": "Technology Investment Advisory",
          "areaServed": "Global"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              AI & Emerging Technology <span className="text-purple-400">Funding Advisory</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connecting breakthrough AI, machine learning, and deep technology companies with specialized venture capital, growth equity, and strategic investors. We navigate the complexity of emerging tech funding to accelerate your innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Tech Funding Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Download AI Funding Playbook
              </button>
            </div>
          </div>
        </section>

        {/* Market Landscape Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              AI & Deep Tech Investment Landscape 2024-2025
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">$142B</h3>
                <p className="text-slate-300 text-sm">Global AI/ML funding deployed in 2024, 67% increase YoY</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">$1.8T</h3>
                <p className="text-slate-300 text-sm">Projected enterprise AI market by 2030, CAGR 42%</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/20 to-green-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">73%</h3>
                <p className="text-slate-300 text-sm">Enterprise adoption rate for AI-enabled software solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-purple-600/20 p-6 rounded-xl border border-green-500/30 text-center">
                <h3 className="text-3xl font-bold text-green-400 mb-2">18 Months</h3>
                <p className="text-slate-300 text-sm">Average time from MVP to institutional funding for AI companies</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Investor Focus Areas & Funding Trends</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">High-Priority AI Verticals</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Enterprise AI Platforms:</strong> $10M+ ARR, clear ROI metrics</li>
                    <li>• <strong>Generative AI Applications:</strong> Defensible data moats, enterprise deployment</li>
                    <li>• <strong>AI Infrastructure:</strong> MLOps, model deployment, data orchestration</li>
                    <li>• <strong>Autonomous Systems:</strong> Robotics, vehicles, industrial automation</li>
                    <li>• <strong>AI-Enabled Healthcare:</strong> FDA approval pathways, clinical validation</li>
                    <li>• <strong>Cybersecurity AI:</strong> Threat detection, zero-trust architectures</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Investor Requirements</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Technical Differentiation:</strong> Novel IP, research publications, patents</li>
                    <li>• <strong>Market Validation:</strong> Enterprise pilot programs, LOIs, recurring revenue</li>
                    <li>• <strong>Team Expertise:</strong> PhD-level technical talent, industry domain knowledge</li>
                    <li>• <strong>Scalability Proof:</strong> Unit economics, platform leverage, network effects</li>
                    <li>• <strong>Competitive Moats:</strong> Data advantages, switching costs, network effects</li>
                    <li>• <strong>Regulatory Clarity:</strong> Compliance frameworks, liability structures</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Valuation Benchmarks</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Pre-Revenue AI:</strong> 15-25x projected Year 2 revenue</li>
                    <li>• <strong>Early Revenue ($1M+ ARR):</strong> 20-40x current ARR</li>
                    <li>• <strong>Growth Stage ($10M+ ARR):</strong> 12-25x ARR based on growth</li>
                    <li>• <strong>Enterprise AI SaaS:</strong> Premium to traditional SaaS (1.5-2x)</li>
                    <li>• <strong>Deep Tech Platform:</strong> 3-8x revenue based on defensibility</li>
                    <li>• <strong>Strategic Premium:</strong> 25-50% for acquirer synergies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              AI & Deep Tech Funding Challenges
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Technical Due Diligence Complexity</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> AI and deep tech companies face extensive technical due diligence that can derail funding processes. Investors require validation of algorithms, data quality, IP ownership, and scalability claims—often through third-party technical reviews.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Common Failures:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Inadequate documentation of proprietary algorithms and training methodologies</li>
                      <li>Unclear data rights, licensing, and privacy compliance frameworks</li>
                      <li>Overstated performance metrics without independent validation</li>
                      <li>Insufficient IP protection and freedom-to-operate analysis</li>
                      <li>Lack of reproducible results and model interpretability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Product-Market Fit Validation</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> Many AI companies struggle to demonstrate clear product-market fit beyond proof-of-concept deployments. Enterprise sales cycles are long, and pilot programs don't always convert to full deployments, creating investor skepticism about commercial viability.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Critical Validation Requirements:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Measurable ROI from enterprise pilot programs and deployments</li>
                      <li>Customer references with specific use cases and business impact</li>
                      <li>Recurring revenue contracts with expansion capabilities</li>
                      <li>Clear pathway from pilot to enterprise-wide deployment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Specialized Investor Identification</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> AI and deep tech companies require investors with domain expertise and technical understanding. Generic VCs often lack the expertise to evaluate complex technologies, while specialized funds have high selectivity and specific thesis requirements.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Investor Ecosystem Navigation:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>AI-focused VCs with technical partners and domain expertise</li>
                      <li>Corporate VCs from technology companies seeking strategic assets</li>
                      <li>Government and defense contractors for dual-use technologies</li>
                      <li>Sovereign wealth funds with national AI competitiveness mandates</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Regulatory & Ethical Considerations</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> AI companies face evolving regulatory landscapes (EU AI Act, US NIST Framework) and ethical considerations that create investment risk. Investors require clear compliance strategies and risk mitigation frameworks.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Compliance Requirements:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>AI ethics frameworks and bias detection/mitigation protocols</li>
                      <li>Data privacy compliance (GDPR, CCPA) and cross-border data handling</li>
                      <li>Industry-specific regulations (healthcare HIPAA, financial SOX)</li>
                      <li>Export control compliance for dual-use AI technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vommuli Approach Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Vommuli's AI & Deep Tech Funding Methodology
            </h2>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-8 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Technical Validation & IP Assessment</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Algorithm & Technology Review</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Proprietary technology assessment with independent technical experts</li>
                      <li>• Algorithm performance validation and benchmarking studies</li>
                      <li>• Data quality, sourcing, and competitive advantage analysis</li>
                      <li>• Scalability architecture review and performance optimization</li>
                      <li>• Model interpretability and explainability framework development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Intellectual Property Strategy</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Patent landscape analysis and freedom-to-operate assessment</li>
                      <li>• Trade secret protection and data rights documentation</li>
                      <li>• Open source compliance and licensing strategy review</li>
                      <li>• IP valuation and monetization strategy development</li>
                      <li>• Competitive intelligence and prior art analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Market Validation & Commercial Readiness</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Enterprise Deployment Validation</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Customer reference development with measurable ROI documentation</li>
                      <li>• Pilot-to-production conversion analysis and success metrics</li>
                      <li>• Enterprise sales process optimization and cycle time reduction</li>
                      <li>• Implementation complexity assessment and customer success frameworks</li>
                      <li>• Competitive differentiation and value proposition refinement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Go-to-Market Strategy</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Total addressable market sizing with bottom-up validation</li>
                      <li>• Customer segmentation and ideal customer profile development</li>
                      <li>• Pricing strategy optimization based on value delivery</li>
                      <li>• Channel partner and ecosystem development strategy</li>
                      <li>• International expansion planning and localization requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/10 to-green-600/10 p-8 rounded-xl border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Specialized Investor Targeting</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">AI-Focused Venture Capital</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Tier-1 AI/ML specialist funds with domain expertise and technical partners</li>
                      <li>• Corporate venture capital from technology companies seeking strategic assets</li>
                      <li>• Government and defense-focused investors for dual-use technologies</li>
                      <li>• Sovereign wealth funds with national AI competitiveness mandates</li>
                      <li>• Industry-specific investors (healthcare, fintech, cybersecurity)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Strategic Partnership Development</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Technology integration partnerships with cloud providers and platforms</li>
                      <li>• Channel partnerships with systems integrators and consultancies</li>
                      <li>• Data partnerships for training data access and model improvement</li>
                      <li>• Joint venture opportunities for market expansion and risk sharing</li>
                      <li>• Strategic acquirer identification and relationship development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              AI & Deep Tech Success Stories
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">ML</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Computer Vision Platform</h3>
                    <p className="text-slate-400 text-sm">Series B Funding</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Manufacturing AI company needed $45M to scale proprietary defect detection algorithms across automotive industry.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $45M Series B at $280M valuation, strategic partnership with Tier-1 automotive supplier, 300% revenue growth.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">NLP</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Enterprise AI Analytics</h3>
                    <p className="text-slate-400 text-sm">Growth Equity</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Legal AI platform needed $75M growth capital to expand beyond document review into regulatory compliance.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $75M growth equity, acquisition of 2 complementary technologies, expansion into UK and APAC markets.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">AI</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Healthcare AI Diagnostics</h3>
                    <p className="text-slate-400 text-sm">Strategic Investment</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Medical imaging AI with FDA approval needed $60M for commercial deployment and clinical data generation.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $60M strategic round led by healthcare system, 15 hospital deployments, reimbursement coverage established.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              AI & Deep Tech Funding FAQ
            </h2>
            
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">What makes AI companies attractive to institutional investors?</h3>
                <p className="text-slate-300">
                  Institutional investors prioritize AI companies with: (1) Defensible technical moats—proprietary algorithms, unique datasets, or novel architectures that create sustainable competitive advantages, (2) Clear commercial validation through enterprise pilot programs with measurable ROI, typically 15-30% improvement in efficiency or accuracy metrics, (3) Experienced technical teams with relevant PhD expertise and industry domain knowledge, (4) Scalable business models with platform leverage and network effects, (5) Regulatory clarity and compliance frameworks for deployment in regulated industries.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">How do AI valuations compare to traditional software companies?</h3>
                <p className="text-slate-300">
                  AI companies typically command 1.5-2x valuation premiums compared to traditional SaaS companies due to: (1) Higher barriers to entry from technical complexity and data requirements, (2) Greater potential for market expansion and winner-take-all dynamics, (3) Strategic value to acquirers seeking AI capabilities. However, investors also apply higher scrutiny regarding technical risk, market adoption timelines, and competitive sustainability. Pre-revenue AI companies with strong technical validation often achieve 15-25x projected Year 2 revenue, while growth-stage AI companies with proven metrics trade at 12-25x ARR.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">What technical due diligence should AI companies prepare for?</h3>
                <p className="text-slate-300">
                  AI companies should prepare comprehensive technical documentation including: (1) Algorithm architecture documentation with performance benchmarks and validation studies, (2) Data sourcing, quality, and rights documentation with privacy compliance frameworks, (3) IP analysis including patent landscape, freedom-to-operate, and trade secret protection, (4) Scalability analysis with infrastructure requirements and performance optimization plans, (5) Model interpretability and bias detection protocols, (6) Reproducible results with independent validation from third-party technical experts. Many investors engage specialized technical consultants for AI due diligence.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">How important are strategic partnerships for AI company funding?</h3>
                <p className="text-slate-300">
                  Strategic partnerships are critical for AI company success and often required by institutional investors: (1) Technology partnerships with cloud providers (AWS, Google Cloud, Azure) provide credibility and distribution channels, (2) Data partnerships enable access to training data and continuous model improvement, (3) Channel partnerships with systems integrators accelerate enterprise sales cycles, (4) Industry partnerships provide domain expertise and customer validation, (5) Strategic investor partnerships offer capital plus operational support and market access. Companies with strong strategic partnerships achieve 25-40% higher valuations and faster revenue scaling.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-purple-400 mb-3">What are the key regulatory considerations for AI companies seeking funding?</h3>
                <p className="text-slate-300">
                  AI companies must address evolving regulatory landscapes: (1) EU AI Act compliance for high-risk AI systems with conformity assessments and risk management, (2) US NIST AI Risk Management Framework adoption with bias detection and mitigation protocols, (3) Industry-specific regulations (FDA for healthcare AI, financial services compliance for fintech AI), (4) Data privacy compliance (GDPR, CCPA) with cross-border data transfer mechanisms, (5) Export control compliance for dual-use AI technologies with national security implications. Investors increasingly require regulatory compliance roadmaps and legal risk assessments as standard due diligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Scale Your AI Innovation?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Connect with specialized AI and deep tech investors who understand your technology and market opportunity. Schedule a confidential consultation to discuss your funding strategy.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Technical Assessment</h3>
                <p className="text-slate-300">Comprehensive evaluation of technology, IP, and competitive positioning</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Investor Mapping</h3>
                <p className="text-slate-300">Identification of specialized AI investors and strategic partners</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-purple-400 mb-2">Funding Strategy</h3>
                <p className="text-slate-300">Customized approach for AI company funding and strategic partnerships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule AI Funding Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Submit Technology Brief
              </button>
            </div>
            
            <p className="text-slate-400 mt-8">
              Confidential technical and commercial assessment. Minimum transaction size: $5M+
            </p>
          </div>
        </section>
      </div>
    </>
  );
}