import type { Metadata } from 'next';
import { JsonLd } from 'react-schemaorg';

export const metadata: Metadata = {
  title: 'Growth Capital Advisory Services | Expansion Funding for Mid-Market Companies',
  description: 'Expert growth capital advisory services helping mid-market companies secure $5M-$500M in expansion funding. Proven track record with global institutional investors, private equity, and venture capital.',
  keywords: [
    'growth capital advisory',
    'expansion capital advisory',
    'mid-market growth funding',
    'Series B funding advisor',
    'Series C capital raising',
    'institutional growth capital',
    'private equity growth funding',
    'venture capital expansion',
    'strategic growth funding',
    'scale-up capital advisory'
  ],
  openGraph: {
    title: 'Growth Capital Advisory Services | Vommuli Ventures',
    description: 'Expert growth capital advisory services helping mid-market companies secure $5M-$500M in expansion funding.',
    url: 'https://vommuli.com/growth-capital-advisory',
  },
};

export default function GrowthCapitalAdvisoryPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Growth Capital Advisory Services",
          "description": "Expert growth capital advisory services helping mid-market companies secure $5M-$500M in expansion funding",
          "provider": {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          "serviceType": "Financial Advisory",
          "areaServed": "Global"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Growth Capital Advisory for <span className="text-blue-400">Scale-Ready Companies</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Accelerate your expansion with strategic growth capital. We connect mid-market companies with $5M-$500M funding from global institutional investors, enabling transformational growth and market leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Growth Strategy Session
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Download Growth Capital Guide
              </button>
            </div>
          </div>
        </section>

        {/* Key Challenges Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Growth Capital Challenges Facing Scale-Ready Companies
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Investor Readiness Gaps</h3>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>The Challenge:</strong> Companies with proven business models struggle to present their growth story in a format that resonates with institutional investors. Critical gaps in financial modeling, market positioning, and growth metrics presentation create barriers to securing optimal valuations.
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    <li>• Inadequate three-year financial projections with scenario modeling</li>
                    <li>• Unclear unit economics and customer acquisition cost optimization</li>
                    <li>• Insufficient competitive positioning and market size validation</li>
                    <li>• Lack of institutionalized processes for due diligence readiness</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Valuation Alignment Complexity</h3>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>The Challenge:</strong> Bridging the valuation gap between founder expectations and investor reality requires sophisticated financial engineering and market positioning. Without proper benchmarking and strategic positioning, companies often accept suboptimal terms or face prolonged fundraising cycles.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Institutional Investor Access</h3>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>The Challenge:</strong> Accessing decision-makers at top-tier institutional investors requires relationship capital and strategic positioning that most companies lack. Cold outreach yields <3% response rates, while warm introductions through established advisors achieve 60%+ engagement rates.
                  </p>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Multi-Stakeholder Deal Complexity</h3>
                  <p className="text-slate-300 leading-relaxed">
                    <strong>The Challenge:</strong> Growth capital transactions involve multiple parties with competing interests: existing investors, new lead investors, management teams, and board members. Coordinating preferences, liquidation rights, and governance structures requires specialized expertise in complex deal structuring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Insights Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Market Intelligence & Growth Capital Trends
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">$847B</h3>
                <p className="text-slate-300">
                  Global growth capital deployed in 2024, with 73% concentrated in technology, healthcare, and climate sectors
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-8 rounded-xl border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-4">18-24 Months</h3>
                <p className="text-slate-300">
                  Average time to deployment for growth capital, compared to 6-12 months for Series A/B transactions
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">42% Premium</h3>
                <p className="text-slate-300">
                  Valuation premium achieved by companies with institutional-grade financial reporting and governance structures
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Institutional Investor Appetite: 2024-2025 Outlook</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">High-Priority Sectors</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• <strong>Enterprise AI/ML:</strong> $50M+ ARR threshold, defensible moats</li>
                    <li>• <strong>Digital Infrastructure:</strong> Data centers, edge computing, 5G/6G</li>
                    <li>• <strong>Healthcare Technology:</strong> Regulatory-approved, reimbursement clarity</li>
                    <li>• <strong>Climate Technology:</strong> Proven unit economics, scalable deployment</li>
                    <li>• <strong>Fintech/Regtech:</strong> Compliance-focused, institutional adoption</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Deal Structure Preferences</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• <strong>Minority Growth Equity:</strong> 15-35% ownership preferred</li>
                    <li>• <strong>Board Representation:</strong> 1-2 seats with veto rights</li>
                    <li>• <strong>Liquidation Preferences:</strong> 1x non-participating preferred</li>
                    <li>• <strong>Anti-Dilution:</strong> Weighted average broad-based</li>
                    <li>• <strong>Exit Timeline:</strong> 3-7 year strategic exit planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vommuli Framework Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              The Vommuli Growth Capital Advisory Framework
            </h2>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Phase 1: Strategic Growth Assessment (Weeks 1-2)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Financial Architecture Review</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Three-year financial model validation with scenario analysis</li>
                      <li>• Unit economics optimization and customer lifetime value modeling</li>
                      <li>• Working capital requirements and cash flow projections</li>
                      <li>• Capital efficiency benchmarking against sector leaders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Market Positioning Analysis</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Total addressable market (TAM) validation with bottom-up methodology</li>
                      <li>• Competitive landscape mapping and differentiation analysis</li>
                      <li>• Customer concentration risk assessment and diversification strategy</li>
                      <li>• Regulatory environment assessment and compliance roadmap</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-8 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Phase 2: Investor Targeting & Outreach Strategy (Weeks 3-4)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Institutional Investor Mapping</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Growth equity firms with sector-specific expertise and check size alignment</li>
                      <li>• Strategic corporate venture capital arms with synergistic business lines</li>
                      <li>• Family offices with thesis alignment and growth capital allocation</li>
                      <li>• Sovereign wealth funds and institutional investors with global mandates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Investment Materials Development</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Executive summary with clear value proposition and growth thesis</li>
                      <li>• Comprehensive information memorandum (CIM) with market analysis</li>
                      <li>• Management presentation deck optimized for institutional audiences</li>
                      <li>• Due diligence data room preparation with organized documentation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Phase 3: Deal Execution & Structuring (Weeks 5-12)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Negotiation & Term Sheet Optimization</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Competitive process management with multiple term sheets</li>
                      <li>• Valuation optimization through strategic positioning and timing</li>
                      <li>• Governance and control provisions negotiation</li>
                      <li>• Board composition and investor rights structuring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Transaction Coordination</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Due diligence process management with legal and financial advisors</li>
                      <li>• Closing coordination with multi-party stakeholder alignment</li>
                      <li>• Post-closing integration planning with new investor partners</li>
                      <li>• Strategic growth acceleration planning and milestone setting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Growth Capital Success Stories
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-slate-800/50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">AI</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Enterprise AI Platform</h3>
                    <p className="text-slate-400">Series B Growth Capital</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400">Challenge</h4>
                    <p className="text-slate-300">$15M ARR SaaS company needed $75M to accelerate enterprise sales and expand into European markets. Previous investors lacked growth capital capacity, requiring new institutional partnership.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400">Vommuli Solution</h4>
                    <p className="text-slate-300">Restructured financial model to highlight 140% net revenue retention, developed European market entry strategy, and positioned company for growth equity investors focused on enterprise AI.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-400">Results</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• $75M Series B at $450M pre-money valuation</li>
                      <li>• 3.2x valuation increase from Series A</li>
                      <li>• 18-month market expansion accelerated to 8 months</li>
                      <li>• Strategic partnership with Fortune 500 systems integrator</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CT</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">Climate Technology Platform</h3>
                    <p className="text-slate-400">Growth Equity Financing</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400">Challenge</h4>
                    <p className="text-slate-300">Energy storage technology company with proven pilot projects needed $150M for commercial-scale deployment. Complex regulatory environment and capital-intensive business model required specialized investor expertise.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-400">Vommuli Solution</h4>
                    <p className="text-slate-300">Developed detailed project finance structure, secured strategic utility partnerships for offtake agreements, and connected with climate-focused growth equity firms and infrastructure funds.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-400">Results</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• $150M growth equity from tier-1 climate fund</li>
                      <li>• $200M project finance facility secured in parallel</li>
                      <li>• 5-year utility offtake agreements for 80% of capacity</li>
                      <li>• Pathway to $1B+ revenue within 36 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">How long does it typically take to secure $50M+ in growth capital?</h3>
                <p className="text-slate-300">
                  The growth capital process typically requires 4-8 months from initial engagement to closing, depending on company readiness and market conditions. Companies with strong financial reporting, clear growth metrics, and institutional-grade governance can accelerate this timeline to 3-4 months. Our systematic approach front-loads preparation work to minimize time-to-close once investor outreach begins.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">What information do growth equity investors require upfront?</h3>
                <p className="text-slate-300">
                  Growth equity investors require: (1) Three years of audited financial statements and management reports, (2) Detailed three-year financial projections with scenario analysis, (3) Customer concentration analysis and pipeline visibility, (4) Management team resumes and organizational chart, (5) Competitive landscape analysis and market positioning, (6) Technology/IP documentation and regulatory compliance status, (7) Board meeting minutes and governance documentation for the past 24 months.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">What valuation premiums can companies expect with proper positioning?</h3>
                <p className="text-slate-300">
                  Well-positioned companies with institutional-grade reporting and governance typically achieve 25-50% valuation premiums compared to similar transactions in their sector. Companies that can demonstrate predictable revenue models, efficient capital utilization, and clear expansion pathways often secure valuations at the upper end of market ranges. The key is creating competitive tension among qualified investors while maintaining deal certainty.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">How do you ensure alignment between management and new growth investors?</h3>
                <p className="text-slate-300">
                  We facilitate comprehensive management-investor alignment through: (1) Clear growth milestone and incentive alignment discussions, (2) Board governance structure that balances oversight with operational flexibility, (3) Detailed post-closing strategic planning sessions with specific KPI frameworks, (4) Management equity optimization to ensure retention and motivation, (5) Regular board reporting cadence and strategic planning processes. This alignment is critical for successful growth capital partnerships.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-400 mb-3">What are the typical governance and control provisions in growth equity deals?</h3>
                <p className="text-slate-300">
                  Standard growth equity governance includes: (1) Board representation of 1-2 seats with veto rights on major decisions, (2) Preferred stock with 1x non-participating liquidation preference, (3) Anti-dilution protection (typically weighted average broad-based), (4) Information rights including monthly/quarterly reporting, (5) Approval rights for budgets, strategic plans, and major contracts, (6) Tag-along and drag-along rights for future exits. We ensure these provisions support growth while maintaining management control over day-to-day operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Connect with institutional growth capital and strategic partners. Schedule a confidential strategy session to discuss your growth capital requirements and expansion objectives.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Strategy Session</h3>
                <p className="text-slate-300">Confidential 60-minute discussion of growth objectives and capital requirements</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Investor Deck Review</h3>
                <p className="text-slate-300">Professional assessment of investment materials and positioning strategy</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Mandate Discussion</h3>
                <p className="text-slate-300">Formal engagement proposal with timeline, process, and success metrics</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Confidential Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Submit Growth Capital Inquiry
              </button>
            </div>
            
            <p className="text-slate-400 mt-8">
              All discussions are strictly confidential. Minimum transaction size: $5M+
            </p>
          </div>
        </section>
      </div>
    </>
  );
}