import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Equity Fundraising Advisory | Institutional Capital Raising Services',
  description: 'Expert private equity fundraising advisory connecting mid-market and enterprise companies with top-tier PE firms. Specialized in $25M-$500M transactions with proven track record.',
  keywords: [
    'private equity fundraising consultant',
    'PE capital raising advisory',
    'institutional capital raising advisor',
    'private equity transaction advisory',
    'growth equity fundraising',
    'buyout advisory services',
    'private equity introduction services',
    'institutional investor access',
    'PE deal structuring',
    'private equity exit advisory'
  ],
  openGraph: {
    title: 'Private Equity Fundraising Advisory | Vommuli Ventures',
    description: 'Expert private equity fundraising advisory connecting companies with top-tier PE firms and institutional capital.',
    url: 'https://vommuli.com/private-equity-fundraising',
  },
};

export default function PrivateEquityFundraisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Private Equity Fundraising <span className="text-indigo-400">Advisory</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic capital raising from top-tier private equity and growth equity firms. We facilitate $25M-$500M transactions through deep institutional relationships and proven deal structuring expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule PE Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download PE Readiness Guide
            </button>
          </div>
        </div>
      </section>

      {/* Market Landscape Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Market Dynamics 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-6 rounded-xl border border-indigo-500/30 text-center">
              <h3 className="text-3xl font-bold text-indigo-400 mb-2">$2.6T</h3>
              <p className="text-slate-300 text-sm">Global PE dry powder, driving intense competition for quality deals</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30 text-center">
              <h3 className="text-3xl font-bold text-purple-400 mb-2">18-24 Months</h3>
              <p className="text-slate-300 text-sm">Average PE fundraising timeline for institutional-ready companies</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 p-6 rounded-xl border border-pink-500/30 text-center">
              <h3 className="text-3xl font-bold text-pink-400 mb-2">12.8%</h3>
              <p className="text-slate-300 text-sm">Average net IRR for global PE funds (2023), driving LP demand</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-600/20 to-indigo-600/20 p-6 rounded-xl border border-rose-500/30 text-center">
              <h3 className="text-3xl font-bold text-rose-400 mb-2">73%</h3>
              <p className="text-slate-300 text-sm">PE deals requiring growth capital vs traditional buyouts</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">PE Investment Thesis Evolution & Sector Focus</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-4">High-Conviction PE Sectors</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Technology & Software:</strong> 47% of PE capital deployment, focus on SaaS, cybersecurity, AI/ML</li>
                  <li>• <strong>Healthcare & Life Sciences:</strong> Aging demographics driving 23% increase in PE healthcare investments</li>
                  <li>• <strong>Business Services:</strong> Recession-resistant models with predictable cash flows</li>
                  <li>• <strong>Energy Transition:</strong> $180B PE investment in clean energy and infrastructure</li>
                  <li>• <strong>Consumer & Retail:</strong> Digital transformation and direct-to-consumer focus</li>
                  <li>• <strong>Financial Services:</strong> FinTech disruption creating consolidation opportunities</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-4">Investment Criteria Evolution</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>ESG Integration:</strong> 89% of PE firms have formal ESG policies and reporting requirements</li>
                  <li>• <strong>Digital Transformation:</strong> Portfolio company digitization capabilities as core value creation</li>
                  <li>• <strong>Management Quality:</strong> Institutional-grade leadership teams with proven execution track records</li>
                  <li>• <strong>Market Position:</strong> #1 or #2 market position in defensible niches</li>
                  <li>• <strong>Growth Scalability:</strong> Clear pathway to 2-3x revenue growth within 3-5 years</li>
                  <li>• <strong>Cash Generation:</strong> Strong free cash flow conversion and capital efficiency</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-indigo-400 mb-4">Deal Structure Trends</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Growth Equity:</strong> 68% of PE deals now minority stakes vs traditional buyouts</li>
                  <li>• <strong>Management Rollover:</strong> 15-25% management equity retention becoming standard</li>
                  <li>• <strong>Earn-out Structures:</strong> Performance-based consideration in 45% of deals</li>
                  <li>• <strong>Covenant-Lite Debt:</strong> 87% of leveraged deals with flexible debt structures</li>
                  <li>• <strong>ESG Reps & Warranties:</strong> Environmental and governance compliance requirements</li>
                  <li>• <strong>Technology Escrows:</strong> IP and data security provisions in all tech deals</li>
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
            Complex Challenges in Private Equity Fundraising
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Institutional Readiness Gaps</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Private equity firms require institutional-grade operations, governance, and reporting that most companies lack. The gap between entrepreneurial management and PE-ready infrastructure creates significant barriers to successful fundraising and post-investment value creation.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Critical Readiness Factors:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Board governance structures with independent directors and committees</li>
                    <li>Monthly financial reporting with variance analysis and KPI dashboards</li>
                    <li>Management incentive plans aligned with PE value creation objectives</li>
                    <li>Enterprise risk management and insurance coverage frameworks</li>
                    <li>IT security and data governance protocols meeting institutional standards</li>
                    <li>ESG reporting and sustainability program implementation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Competitive Auction Dynamics</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> With $2.6T in PE dry powder competing for limited high-quality deals, companies must differentiate beyond financial metrics. Strategic positioning, timing, and process management significantly impact valuation outcomes and investor selection.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Auction Process Complexities:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Managing 8-12 PE firms through structured bid process</li>
                    <li>Balancing price optimization with strategic fit and execution certainty</li>
                    <li>Negotiating management equity participation and employment agreements</li>
                    <li>Coordinating due diligence across multiple work streams simultaneously</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Valuation & Deal Structure Complexity</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> PE valuations involve complex methodologies combining DCF analysis, comparable company multiples, and strategic value assessments. Deal structures require balancing growth capital needs, management incentives, and PE return requirements.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Valuation Methodology Factors:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>EBITDA normalization for one-time items and pro forma adjustments</li>
                    <li>Revenue quality assessment including customer concentration and recurring revenue</li>
                    <li>Market position analysis and competitive moat sustainability</li>
                    <li>Management team assessment and succession planning evaluation</li>
                    <li>Growth investment requirements and capital allocation priorities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">Post-Investment Value Creation Alignment</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> PE firms evaluate companies based on 100-day plans and 3-year value creation strategies. Management teams must demonstrate capability to execute operational improvements, strategic initiatives, and growth acceleration under PE ownership.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Value Creation Expectations:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Operational efficiency improvements targeting 15-25% EBITDA margin expansion</li>
                    <li>Inorganic growth through strategic acquisitions and market consolidation</li>
                    <li>Digital transformation and technology stack modernization</li>
                    <li>International expansion and new market entry strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli Methodology Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Private Equity Fundraising Methodology
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 p-8 rounded-xl border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-indigo-400 mb-6">Phase 1: PE Readiness Assessment & Optimization (Weeks 1-4)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Institutional Infrastructure Audit</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Board governance and committee structure evaluation</li>
                    <li>• Financial reporting systems and KPI dashboard implementation</li>
                    <li>• Management team assessment and succession planning</li>
                    <li>• Operational infrastructure and scalability analysis</li>
                    <li>• IT security, data governance, and compliance frameworks</li>
                    <li>• ESG program development and sustainability reporting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic Positioning & Value Creation Planning</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Market position analysis and competitive differentiation</li>
                    <li>• Growth strategy validation and investment requirements</li>
                    <li>• Value creation opportunities identification and prioritization</li>
                    <li>• Management equity structure and incentive alignment</li>
                    <li>• Three-year business plan development with PE value creation themes</li>
                    <li>• Risk assessment and mitigation strategy development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Phase 2: PE Investor Targeting & Process Design (Weeks 5-8)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic PE Firm Selection</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Sector-specialist PE firms with relevant portfolio company experience</li>
                    <li>• Check size alignment ($25M-$500M) and fund lifecycle stage analysis</li>
                    <li>• Investment thesis compatibility and value creation capability assessment</li>
                    <li>• Geographic focus and international expansion support capabilities</li>
                    <li>• Management team cultural fit and partnership style evaluation</li>
                    <li>• Reference calls with portfolio company CEOs and management teams</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Investment Marketing Materials Development</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Confidential Information Memorandum (CIM) with PE-focused narrative</li>
                    <li>• Management presentation emphasizing value creation opportunities</li>
                    <li>• Financial model with detailed scenario analysis and sensitivity testing</li>
                    <li>• Due diligence data room organization with institutional-grade documentation</li>
                    <li>• Market research and competitive analysis supporting growth thesis</li>
                    <li>• ESG and sustainability reporting aligned with PE firm requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 p-8 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Phase 3: Auction Process Management & Deal Execution (Weeks 9-20)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Competitive Auction Orchestration</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Initial round process with 8-12 qualified PE firms</li>
                    <li>• Management presentation coordination and investor meetings facilitation</li>
                    <li>• First round bid evaluation and finalist selection (3-4 PE firms)</li>
                    <li>• Detailed due diligence process management across multiple work streams</li>
                    <li>• Final round negotiations and best and final offer (BAFO) process</li>
                    <li>• Winner selection based on price, terms, certainty, and strategic fit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Deal Structuring & Documentation</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Letter of intent (LOI) negotiation and term sheet optimization</li>
                    <li>• Management equity participation and employment agreement structuring</li>
                    <li>• Purchase agreement and representation & warranty insurance coordination</li>
                    <li>• Financing structure optimization and debt package arrangement</li>
                    <li>• Closing coordination with legal, financial, and operational advisors</li>
                    <li>• Post-closing integration planning and 100-day plan development</li>
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
            Private Equity Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">TE</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Technology Enablement Platform</h3>
                  <p className="text-slate-400 text-sm">Growth Equity Partnership</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> $50M ARR software company sought growth capital to accelerate international expansion and strategic acquisitions.</p>
                <p className="text-slate-300"><strong>Result:</strong> $125M growth equity at $750M valuation, 2.3x revenue multiple, management retained 25% equity stake.</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">HS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Healthcare Services Company</h3>
                  <p className="text-slate-400 text-sm">Management Buyout</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Family-owned healthcare business needed succession planning and growth capital for market consolidation strategy.</p>
                <p className="text-slate-300"><strong>Result:</strong> $200M management buyout, completed 4 strategic acquisitions, 15x EBITDA multiple expansion.</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold">MS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Manufacturing & Distribution</h3>
                  <p className="text-slate-400 text-sm">Recapitalization</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Industrial company required capital for digital transformation and operational efficiency improvements.</p>
                <p className="text-slate-300"><strong>Result:</strong> $85M recapitalization, 40% EBITDA margin improvement, successful exit to strategic buyer after 4 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Fundraising FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">What makes a company attractive to private equity investors?</h3>
              <p className="text-slate-300">
                PE firms prioritize companies with: (1) Market-leading positions with defensible competitive moats and barriers to entry, (2) Proven management teams with institutional-grade operations and scalable business models, (3) Predictable cash flow generation with 15%+ EBITDA margins and strong working capital management, (4) Clear growth opportunities through organic expansion, strategic acquisitions, or operational improvements, (5) Strong industry dynamics with favorable secular trends and limited cyclical exposure, (6) Institutional-ready governance structures including board oversight, financial reporting, and risk management frameworks.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">How long does the private equity fundraising process typically take?</h3>
              <p className="text-slate-300">
                The PE fundraising process requires 18-24 months from initial preparation to closing: (1) Months 1-4: PE readiness assessment, institutional infrastructure development, and investment marketing materials preparation, (2) Months 5-8: PE firm targeting, initial meetings, and management presentations, (3) Months 9-12: First round bids, due diligence process, and finalist selection, (4) Months 13-18: Final negotiations, deal documentation, and regulatory approvals, (5) Months 19-24: Closing coordination and post-investment integration. Companies with strong institutional readiness can accelerate this timeline to 12-15 months.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">What valuation multiples can companies expect in PE transactions?</h3>
              <p className="text-slate-300">
                PE valuation multiples vary by sector, growth profile, and market conditions: (1) Software/Technology: 8-15x EBITDA for growth companies, 5-10x for mature businesses, (2) Healthcare Services: 10-18x EBITDA based on regulatory moats and growth visibility, (3) Business Services: 6-12x EBITDA depending on recurring revenue and scalability, (4) Manufacturing/Distribution: 4-8x EBITDA with premiums for market leadership and operational efficiency, (5) Consumer/Retail: 6-12x EBITDA based on brand strength and omnichannel capabilities. High-growth companies with >20% revenue growth often command premium valuations 25-50% above sector medians.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">How do management teams benefit from private equity partnerships?</h3>
              <p className="text-slate-300">
                PE partnerships provide management teams significant value beyond capital: (1) Equity participation typically 15-25% of company value with potential for substantial wealth creation upon exit, (2) Operational expertise through PE firm portfolio company resources, industry specialists, and best practice sharing, (3) Strategic guidance including M&A execution, international expansion, and digital transformation initiatives, (4) Professional development through board engagement with experienced investors and industry leaders, (5) Growth acceleration through access to additional capital, strategic partnerships, and market expansion opportunities, (6) Risk mitigation through institutional governance, professional management systems, and financial discipline.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">What are the key differences between growth equity and traditional buyouts?</h3>
              <p className="text-slate-300">
                Growth equity and buyouts serve different company needs and stages: (1) <strong>Growth Equity:</strong> Minority investment (15-49%) in profitable, growing companies seeking expansion capital without founder/management liquidity, focused on organic growth acceleration and market expansion, (2) <strong>Traditional Buyouts:</strong> Majority control (51-100%) often involving founder liquidity, management changes, or strategic repositioning, emphasis on operational improvements and financial engineering, (3) <strong>Deal Structure:</strong> Growth equity typically involves less leverage (2-3x debt/EBITDA) vs buyouts (4-6x), simpler governance with board representation vs operational control, (4) <strong>Value Creation:</strong> Growth equity focuses on revenue acceleration and market expansion vs buyouts emphasizing margin improvement and efficiency gains.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">How do companies prepare for private equity due diligence?</h3>
              <p className="text-slate-300">
                PE due diligence requires comprehensive preparation across multiple dimensions: (1) <strong>Financial:</strong> Three years of audited financials, monthly reporting packages, detailed budgets/forecasts, working capital analysis, and EBITDA bridge documentation, (2) <strong>Legal:</strong> Corporate structure charts, material contracts review, litigation summary, IP portfolio analysis, and regulatory compliance documentation, (3) <strong>Commercial:</strong> Market research, competitive analysis, customer concentration studies, pricing analysis, and growth strategy validation, (4) <strong>Operational:</strong> Management org charts, key employee contracts, IT systems documentation, and operational KPI reporting, (5) <strong>ESG:</strong> Environmental compliance, governance policies, and social impact measurement aligned with PE firm sustainability requirements.
              </p>
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
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Pre-PE Growth Capital</h3>
              <p className="text-slate-300 mb-4">Scale your business with growth capital before pursuing private equity partnerships.</p>
              <a href="/growth-capital-advisory" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Early-Stage Funding</h3>
              <p className="text-slate-300 mb-4">Venture capital connections for companies in early growth stages before PE readiness.</p>
              <a href="/venture-capital-introduction" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Strategic Exit Planning</h3>
              <p className="text-slate-300 mb-4">M&A advisory for private equity exits and strategic transactions.</p>
              <a href="/ma-advisory" className="text-indigo-400 hover:text-indigo-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Partner with Private Equity?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Access top-tier private equity firms and optimize your transaction outcome. Schedule a confidential consultation to discuss your PE fundraising strategy and institutional readiness.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-400 mb-2">PE Readiness Assessment</h3>
              <p className="text-slate-300">Comprehensive evaluation of institutional infrastructure and market positioning</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Strategic PE Targeting</h3>
              <p className="text-slate-300">Identification and engagement of optimal PE partners for your industry and growth stage</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Process Management</h3>
              <p className="text-slate-300">End-to-end auction management and deal execution with institutional expertise</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule PE Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit PE Readiness Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            All discussions strictly confidential. Minimum transaction size: $25M+
          </p>
        </div>
      </section>
    </div>
  );
}