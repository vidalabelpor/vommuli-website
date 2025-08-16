import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venture Capital Introduction Services | VC Funding for Growth Companies',
  description: 'Expert venture capital introduction services connecting high-growth companies with top-tier VC firms for Series A, B, C funding rounds and strategic capital raising.',
  keywords: [
    'venture capital introduction services',
    'VC funding advisory',
    'Series A funding advisor',
    'Series B capital raising',
    'Series C funding consultant',
    'startup funding advisory',
    'venture capital introduction',
    'VC firm connections',
    'growth stage funding',
    'early stage venture capital'
  ],
  openGraph: {
    title: 'Venture Capital Introduction Services | Vommuli Ventures',
    description: 'Expert venture capital introduction services connecting high-growth companies with top-tier VC firms.',
    url: 'https://vommuli.com/venture-capital-introduction',
  },
};

export default function VentureCapitalIntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Venture Capital Introduction for <span className="text-violet-400">High-Growth Companies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier venture capital firms and accelerate your growth trajectory. We facilitate Series A, B, C funding rounds and strategic partnerships with leading VC investors globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule VC Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download VC Readiness Guide
            </button>
          </div>
        </div>
      </section>

      {/* Market Landscape Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Venture Capital Market Dynamics 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 p-6 rounded-xl border border-violet-500/30 text-center">
              <h3 className="text-3xl font-bold text-violet-400 mb-2">$285B</h3>
              <p className="text-slate-300 text-sm">Global VC investment in 2024, with 34% focused on AI and emerging tech</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">12-18 Months</h3>
              <p className="text-slate-300 text-sm">Average fundraising timeline for Series A companies with proven traction</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 p-6 rounded-xl border border-indigo-500/30 text-center">
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">2.3%</h3>
              <p className="text-slate-300 text-sm">Cold outreach success rate vs 67% warm introduction conversion</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">$15M</h3>
              <p className="text-slate-300 text-sm">Average Series A round size for technology companies in 2024</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">High-Priority VC Investment Themes</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-violet-400 mb-4">Technology & AI Innovation</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Artificial Intelligence:</strong> LLMs, computer vision, autonomous systems, AI infrastructure</li>
                  <li>• <strong>Enterprise Software:</strong> SaaS platforms, vertical software, API-first solutions</li>
                  <li>• <strong>Developer Tools:</strong> DevOps, cloud infrastructure, cybersecurity platforms</li>
                  <li>• <strong>Data & Analytics:</strong> Real-time analytics, data infrastructure, business intelligence</li>
                  <li>• <strong>Fintech Innovation:</strong> Embedded finance, digital banking, blockchain applications</li>
                  <li>• <strong>Climate Technology:</strong> Clean energy, carbon capture, sustainable transportation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-violet-400 mb-4">Market Requirements</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Product-Market Fit:</strong> Strong user engagement, retention metrics, and growth trajectory</li>
                  <li>• <strong>Scalable Business Model:</strong> Predictable revenue streams and unit economics</li>
                  <li>• <strong>Market Size:</strong> $1B+ total addressable market with clear expansion pathways</li>
                  <li>• <strong>Competitive Advantage:</strong> Defensible moats through technology, data, or network effects</li>
                  <li>• <strong>Team Excellence:</strong> Experienced leadership with domain expertise and execution track record</li>
                  <li>• <strong>Growth Velocity:</strong> Demonstrated ability to scale efficiently with capital deployment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-violet-400 mb-4">VC Selection Criteria</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Investment Stage Alignment:</strong> Matching company stage with VC fund focus and check size</li>
                  <li>• <strong>Sector Expertise:</strong> Domain knowledge and portfolio company synergies</li>
                  <li>• <strong>Value-Add Capabilities:</strong> Operational support, customer introductions, talent network</li>
                  <li>• <strong>Brand Reputation:</strong> Track record of successful exits and founder-friendly approach</li>
                  <li>• <strong>Geographic Focus:</strong> Regional presence and international expansion support</li>
                  <li>• <strong>Follow-On Capacity:</strong> Ability to participate in future funding rounds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venture Capital Challenges */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Complex Venture Capital Fundraising Challenges
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">VC Access & Relationship Building</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Breaking through to decision-makers at top-tier VC firms requires relationship capital, timing, and strategic positioning that most entrepreneurs lack. Cold outreach achieves &lt;2.3% response rates while warm introductions convert at 67%+.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Access Barriers:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Limited visibility into VC investment timelines and portfolio construction needs</li>
                    <li>Lack of trusted intermediaries with established VC relationships</li>
                    <li>Insufficient understanding of individual partner investment thesis and preferences</li>
                    <li>Inadequate preparation for VC meeting requirements and due diligence processes</li>
                    <li>Poor timing alignment with fund lifecycle and investment pacing requirements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">Investment Readiness & Positioning</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> VCs evaluate hundreds of deals per quarter, requiring entrepreneurs to present compelling, differentiated investment narratives with clear value propositions and growth pathways that resonate with institutional investors.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Positioning Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Market size validation and competitive differentiation analysis</li>
                    <li>Unit economics modeling and customer acquisition optimization</li>
                    <li>Financial projections with scenario planning and sensitivity analysis</li>
                    <li>Product roadmap alignment with market opportunity and growth strategy</li>
                    <li>Team assessment and key hire planning for scaling challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">Due Diligence Process Management</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> VC due diligence involves extensive evaluation across technology, market, financial, legal, and team dimensions. Managing multiple VC processes simultaneously while maintaining business operations requires sophisticated coordination.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Due Diligence Complexity:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Technical due diligence including code review, architecture assessment, and IP analysis</li>
                    <li>Market research validation and customer reference calls</li>
                    <li>Financial audit and accounting systems evaluation</li>
                    <li>Legal review of corporate structure, contracts, and compliance</li>
                    <li>Management team background checks and reference verification</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">Valuation & Term Negotiation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> VC term sheets involve complex structures including liquidation preferences, board composition, anti-dilution provisions, and control mechanisms that significantly impact founder equity and company governance over multiple funding rounds.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Term Sheet Considerations:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Valuation optimization balancing dilution with growth capital needs</li>
                    <li>Liquidation preference structures and participation rights</li>
                    <li>Board composition and investor control provisions</li>
                    <li>Anti-dilution protection and future round pricing impacts</li>
                    <li>Option pool sizing and employee equity preservation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli VC Methodology */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Venture Capital Introduction Framework
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 p-8 rounded-xl border-l-4 border-violet-500">
              <h3 className="text-2xl font-bold text-violet-400 mb-6">Phase 1: VC Readiness Assessment & Strategic Positioning (Weeks 1-6)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Investment Narrative Development</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Market opportunity assessment and total addressable market validation</li>
                    <li>• Competitive landscape analysis and differentiation strategy</li>
                    <li>• Product-market fit demonstration and traction metrics optimization</li>
                    <li>• Business model validation and unit economics refinement</li>
                    <li>• Growth strategy development and scaling pathway definition</li>
                    <li>• Risk assessment and mitigation strategy formulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Financial Modeling & Projections</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Three-year financial model with monthly granularity and scenario analysis</li>
                    <li>• Customer acquisition cost (CAC) and lifetime value (LTV) optimization</li>
                    <li>• Cash flow projections and funding requirements analysis</li>
                    <li>• Key performance indicator (KPI) framework and reporting systems</li>
                    <li>• Burn rate optimization and runway extension strategies</li>
                    <li>• Valuation analysis and comparable company benchmarking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 p-8 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Phase 2: VC Targeting & Relationship Mapping (Weeks 7-12)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic VC Selection</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Investment stage alignment (seed, Series A, B, C) and check size optimization</li>
                    <li>• Sector expertise assessment and portfolio company synergy analysis</li>
                    <li>• Geographic focus evaluation and international expansion support</li>
                    <li>• Value-add capabilities including operational support and network access</li>
                    <li>• Fund lifecycle timing and investment pace evaluation</li>
                    <li>• Partner background research and investment thesis alignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Introduction Strategy & Materials</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Executive summary and pitch deck optimization for VC audiences</li>
                    <li>• Demo preparation and product positioning for technical evaluation</li>
                    <li>• Data room organization and due diligence preparation</li>
                    <li>• Reference customer identification and case study development</li>
                    <li>• Team presentation coaching and Q&A preparation</li>
                    <li>• Market research compilation and competitive analysis documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600/10 to-blue-600/10 p-8 rounded-xl border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-indigo-400 mb-6">Phase 3: VC Process Management & Deal Execution (Weeks 13-26)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Introduction Orchestration</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Warm introduction facilitation through established VC relationships</li>
                    <li>• Meeting coordination and presentation logistics management</li>
                    <li>• Follow-up communication and interest level assessment</li>
                    <li>• Multiple VC process coordination and timeline management</li>
                    <li>• Investor updates and relationship maintenance throughout process</li>
                    <li>• Competitive tension creation and FOMO (fear of missing out) dynamics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Due Diligence & Negotiation Support</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Due diligence process coordination across technical, financial, and legal workstreams</li>
                    <li>• Term sheet review and negotiation strategy development</li>
                    <li>• Valuation optimization and dilution impact analysis</li>
                    <li>• Legal documentation review and founder-friendly term advocacy</li>
                    <li>• Board composition and governance structure negotiation</li>
                    <li>• Closing coordination and post-investment relationship establishment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VC Funding Stages */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Venture Capital Funding Stages & Requirements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Series A Funding</h3>
                  <p className="text-slate-400">Product-Market Fit to Scale</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-violet-400">Funding Range & Metrics</h4>
                  <p className="text-slate-300">$8M-$25M rounds for companies with proven product-market fit, $1M+ ARR (B2B) or strong user growth (B2C), clear path to $10M+ revenue within 24 months.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-violet-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Demonstrated product-market fit with strong user engagement</li>
                    <li>• Scalable business model with positive unit economics</li>
                    <li>• Large addressable market ($1B+ TAM) with expansion opportunities</li>
                    <li>• Experienced management team with execution track record</li>
                    <li>• Clear competitive differentiation and defensible technology moats</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-violet-400">Typical VC Profile</h4>
                  <p className="text-slate-300">Tier 1 and Tier 2 VC firms with $100M-$1B+ AUM, sector-specific expertise, hands-on operational support, and follow-on investment capacity.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Series B Funding</h3>
                  <p className="text-slate-400">Scale to Market Leadership</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-400">Funding Range & Metrics</h4>
                  <p className="text-slate-300">$15M-$50M rounds for companies with $5M+ ARR, efficient growth engines, and clear path to market leadership within target segments.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Strong revenue growth (100%+ YoY) with improving unit economics</li>
                    <li>• Market traction with recognizable customer base and case studies</li>
                    <li>• Operational infrastructure and systems to support scaling</li>
                    <li>• International expansion opportunities or vertical market penetration</li>
                    <li>• Clear competitive advantages and market positioning strength</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-400">Typical VC Profile</h4>
                  <p className="text-slate-300">Growth-focused VCs, crossover funds, and strategic investors with $500M+ AUM, global networks, and late-stage investment experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Series C+ Funding</h3>
                  <p className="text-slate-400">Pre-IPO & Strategic Growth</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-400">Funding Range & Metrics</h4>
                  <p className="text-slate-300">$25M-$100M+ rounds for companies with $20M+ ARR, clear path to IPO or strategic exit, and market leadership positions.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Market-leading position with strong competitive moats</li>
                    <li>• Predictable revenue model with high gross margins (70%+)</li>
                    <li>• International presence and global expansion capabilities</li>
                    <li>• Path to profitability and public company readiness</li>
                    <li>• Strategic acquisition opportunities and market consolidation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-indigo-400">Typical VC Profile</h4>
                  <p className="text-slate-300">Late-stage VCs, crossover funds, sovereign wealth funds, and strategic corporate investors with public market experience.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Seed Funding</h3>
                  <p className="text-slate-400">Concept to Product-Market Fit</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">Funding Range & Metrics</h4>
                  <p className="text-slate-300">$500K-$5M rounds for early-stage companies with compelling vision, strong founding teams, and initial market validation or MVP.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Exceptional founding team with domain expertise and execution capability</li>
                    <li>• Large market opportunity with clear customer pain points</li>
                    <li>• Unique solution approach with potential for significant differentiation</li>
                    <li>• Initial customer validation or pilot program traction</li>
                    <li>• Clear development milestones and product roadmap</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400">Typical VC Profile</h4>
                  <p className="text-slate-300">Seed-focused VCs, angel investors, accelerators, and corporate venture arms with early-stage investment focus and hands-on support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Venture Capital Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold">AI</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">AI Infrastructure Platform</h3>
                  <p className="text-slate-400 text-sm">Series A Success</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Early-stage AI company with strong technical team needed Series A funding to scale infrastructure and acquire enterprise customers.</p>
                <p className="text-slate-300"><strong>Result:</strong> $18M Series A led by top-tier VC, 3x oversubscribed round, secured strategic customer partnerships.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">HC</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Healthcare SaaS</h3>
                  <p className="text-slate-400 text-sm">Series B Growth</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Healthcare technology company with $8M ARR sought Series B funding for market expansion and product development.</p>
                <p className="text-slate-300"><strong>Result:</strong> $35M Series B, expanded to 3 new markets, achieved $25M ARR within 18 months.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">FT</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Fintech Innovation</h3>
                  <p className="text-slate-400 text-sm">Series C Expansion</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Fintech platform with strong US traction needed Series C for international expansion and regulatory compliance.</p>
                <p className="text-slate-300"><strong>Result:</strong> $75M Series C from global VCs, launched in 5 countries, achieved unicorn valuation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Comprehensive Capital Advisory Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-violet-400 mb-3">Growth Stage Funding</h3>
              <p className="text-slate-300 mb-4">Scale established companies with institutional growth capital and expansion funding.</p>
              <a href="/growth-capital-advisory" className="text-violet-400 hover:text-violet-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-violet-400 mb-3">Strategic Exit Planning</h3>
              <p className="text-slate-300 mb-4">M&A advisory for venture-backed companies seeking strategic transactions and exits.</p>
              <a href="/ma-advisory" className="text-violet-400 hover:text-violet-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-violet-400 mb-3">Sector-Specific Expertise</h3>
              <p className="text-slate-300 mb-4">Specialized VC introductions for AI, healthcare, and infrastructure technology companies.</p>
              <a href="/ai-tech-funding-advisory" className="text-violet-400 hover:text-violet-300 underline font-semibold">
                AI & Tech Funding →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Venture Capital Introduction FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-400 mb-3">How long does the venture capital fundraising process typically take?</h3>
              <p className="text-slate-300">
                VC fundraising timelines vary by stage and company readiness: (1) <strong>Seed Stage:</strong> 3-6 months for companies with strong teams and market validation, (2) <strong>Series A:</strong> 6-12 months requiring proven product-market fit and growth traction, (3) <strong>Series B+:</strong> 9-18 months involving extensive due diligence and multiple investor processes. Key factors affecting timeline include preparation quality, market conditions, competitive landscape, and investor relationship development. Companies with strong metrics, clear market position, and professional advisory support can accelerate timelines by 30-50%.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-400 mb-3">What metrics do VCs focus on when evaluating investment opportunities?</h3>
              <p className="text-slate-300">
                VC evaluation criteria vary by stage and sector but include key metrics: (1) <strong>Financial Metrics:</strong> Revenue growth rate (100%+ YoY early stage), gross margins (70%+ for software), customer acquisition cost (CAC), lifetime value (LTV), and LTV/CAC ratios &gt;3:1, (2) <strong>Product Metrics:</strong> User engagement, retention rates, net promoter scores, and product-market fit indicators, (3) <strong>Market Metrics:</strong> Total addressable market size ($1B+), market penetration, and competitive positioning, (4) <strong>Team Metrics:</strong> Founder-market fit, execution track record, and leadership capability, (5) <strong>Operational Metrics:</strong> Burn rate, runway, capital efficiency, and scaling systems. Early-stage companies emphasize team and market while later stages focus on financial performance and market leadership.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-400 mb-3">How important are warm introductions versus cold outreach to VCs?</h3>
              <p className="text-slate-300">
                Warm introductions are critical for VC access and success rates: (1) <strong>Response Rates:</strong> Warm introductions achieve 60-80% response rates vs 2-5% for cold outreach, (2) <strong>Meeting Quality:</strong> Introduced meetings receive more partner attention and preparation time, (3) <strong>Trust Transfer:</strong> Introductions from trusted sources (portfolio CEOs, advisors, other VCs) provide immediate credibility, (4) <strong>Process Acceleration:</strong> Warm introductions often bypass initial screening stages and access senior partners directly, (5) <strong>Due Diligence Depth:</strong> Introduced companies receive more thorough evaluation and feedback. Best introduction sources include portfolio company executives, successful entrepreneurs, industry advisors, other VCs, and established service providers with VC relationships. Professional advisory services can provide systematic access to high-quality VC introductions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-400 mb-3">What should entrepreneurs expect during VC due diligence?</h3>
              <p className="text-slate-300">
                VC due diligence is comprehensive and covers multiple dimensions: (1) <strong>Financial Due Diligence:</strong> Revenue verification, accounting review, customer analysis, unit economics validation, and financial projection assessment, (2) <strong>Technical Due Diligence:</strong> Code review, architecture evaluation, security assessment, IP analysis, and technology differentiation validation, (3) <strong>Market Due Diligence:</strong> Competitive analysis, customer interviews, market sizing validation, and growth opportunity assessment, (4) <strong>Team Due Diligence:</strong> Background checks, reference calls, cultural assessment, and leadership evaluation, (5) <strong>Legal Due Diligence:</strong> Corporate structure review, contract analysis, compliance assessment, and IP protection validation. The process typically takes 4-8 weeks with multiple work streams running in parallel. Companies should prepare organized data rooms, reference lists, and clear documentation to facilitate efficient due diligence.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-violet-400 mb-3">How do entrepreneurs choose between multiple VC term sheets?</h3>
              <p className="text-slate-300">
                VC selection involves evaluating multiple factors beyond valuation: (1) <strong>Financial Terms:</strong> Pre-money valuation, liquidation preferences, anti-dilution provisions, board composition, and option pool sizing, (2) <strong>Strategic Value:</strong> Domain expertise, portfolio company synergies, customer introductions, and market knowledge, (3) <strong>Operational Support:</strong> Recruiting assistance, operational expertise, financial planning, and strategic guidance, (4) <strong>Network Access:</strong> Investor connections, customer relationships, partnership opportunities, and follow-on funding capacity, (5) <strong>Cultural Fit:</strong> Communication style, decision-making process, crisis management approach, and long-term vision alignment, (6) <strong>Track Record:</strong> Portfolio company success rates, exit history, founder references, and reputation in market. Entrepreneurs should conduct extensive reference calls with portfolio CEOs and evaluate long-term partnership potential beyond immediate funding needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Accelerate Your VC Fundraising?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Connect with top-tier venture capital firms through our proven introduction process. Schedule a confidential consultation to discuss your funding strategy and VC readiness.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-violet-400 mb-2">VC Readiness Assessment</h3>
              <p className="text-slate-300">Comprehensive evaluation of fundraising readiness and strategic positioning</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-violet-400 mb-2">Strategic VC Targeting</h3>
              <p className="text-slate-300">Identification and introduction to optimal VC partners for your stage and sector</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-violet-400 mb-2">Process Management</h3>
              <p className="text-slate-300">End-to-end fundraising support from introduction through term negotiation</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule VC Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit Funding Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            All discussions strictly confidential. Serving companies at all growth stages.
          </p>
        </div>
      </section>
    </div>
  );
}