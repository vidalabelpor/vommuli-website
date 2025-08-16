import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M&A Advisory Services | Strategic Mergers & Acquisitions Consulting',
  description: 'Expert M&A advisory services for companies seeking strategic acquisitions, mergers, divestitures, and liquidity events. Comprehensive transaction advisory from strategy through closing.',
  keywords: [
    'M&A advisory services',
    'mergers acquisitions consultant',
    'strategic transaction advisory',
    'sell-side M&A advisor',
    'buy-side acquisition advisory',
    'divestiture advisory services',
    'strategic exit planning',
    'business sale advisory',
    'acquisition integration consulting',
    'cross-border M&A advisory'
  ],
  openGraph: {
    title: 'M&A Advisory Services | Vommuli Ventures',
    description: 'Expert M&A advisory services for companies seeking strategic transactions.',
    url: 'https://vommuli.com/ma-advisory',
  },
};

export default function MAAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            M&A Advisory Services for <span className="text-emerald-400">Strategic Transactions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Navigate complex mergers, acquisitions, divestitures, and strategic partnerships with expert guidance. We facilitate $25M-$2B+ transactions, maximizing value while minimizing execution risk throughout the strategic transaction lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule M&A Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Strategic Transaction Guide
            </button>
          </div>
        </div>
      </section>

      {/* M&A Market Landscape */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Strategic M&A Market Dynamics 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-6 rounded-xl border border-emerald-500/30 text-center">
              <h3 className="text-3xl font-bold text-emerald-400 mb-2">$4.2T</h3>
              <p className="text-slate-300 text-sm">Global M&A transaction value in 2024, with strategic buyers leading activity</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 p-6 rounded-xl border border-teal-500/30 text-center">
              <h3 className="text-3xl font-bold text-teal-400 mb-2">67%</h3>
              <p className="text-slate-300 text-sm">Of M&A deals driven by digital transformation and market consolidation</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">18-24 Months</h3>
              <p className="text-slate-300 text-sm">Average transaction timeline from strategy development to closing</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">$125M</h3>
              <p className="text-slate-300 text-sm">Average middle-market transaction size for strategic acquisitions</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Strategic M&A Transaction Drivers</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4">Technology & Digital Transformation</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Platform Consolidation:</strong> SaaS and technology platform aggregation for market leadership</li>
                  <li>• <strong>Digital Capabilities:</strong> Traditional companies acquiring digital transformation capabilities</li>
                  <li>• <strong>AI & Data Analytics:</strong> Acquisition of AI, machine learning, and data analytics companies</li>
                  <li>• <strong>Cybersecurity Consolidation:</strong> Security platform integration and capability expansion</li>
                  <li>• <strong>Cloud Migration:</strong> Cloud-native technology acquisition and infrastructure modernization</li>
                  <li>• <strong>E-commerce Integration:</strong> Digital commerce and omnichannel capability acquisition</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4">Market Consolidation & Scale</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Industry Roll-Ups:</strong> Fragmented market consolidation for operational efficiency</li>
                  <li>• <strong>Geographic Expansion:</strong> Market entry and international expansion through acquisition</li>
                  <li>• <strong>Supply Chain Integration:</strong> Vertical integration and supply chain optimization</li>
                  <li>• <strong>Distribution Channel Access:</strong> Customer base expansion and channel optimization</li>
                  <li>• <strong>Regulatory Compliance:</strong> Acquisition of regulatory expertise and compliance capabilities</li>
                  <li>• <strong>Operational Synergies:</strong> Cost reduction and efficiency improvement through scale</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4">Strategic Portfolio Optimization</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Core Business Focus:</strong> Divestiture of non-core assets and business simplification</li>
                  <li>• <strong>ESG & Sustainability:</strong> Clean technology and sustainable business model acquisition</li>
                  <li>• <strong>Demographic Trends:</strong> Healthcare, aging population, and consumer trend alignment</li>
                  <li>• <strong>Private Equity Exits:</strong> Strategic acquisition of PE portfolio companies</li>
                  <li>• <strong>Succession Planning:</strong> Founder and family business succession through strategic sale</li>
                  <li>• <strong>Capital Optimization:</strong> Balance sheet optimization and shareholder value creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M&A Transaction Challenges */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Complex M&A Transaction Challenges
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Strategic Positioning & Buyer Identification</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Successful M&A outcomes require strategic positioning that maximizes company value while identifying and engaging optimal buyers. This involves complex market analysis, competitive intelligence, and stakeholder management across multiple potential acquirers.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Strategic Positioning Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comprehensive market analysis and competitive landscape assessment</li>
                    <li>Strategic buyer identification and prioritization based on synergy potential</li>
                    <li>Financial buyer analysis and valuation optimization strategies</li>
                    <li>Investment narrative development and value proposition articulation</li>
                    <li>Confidentiality management and selective disclosure processes</li>
                    <li>Competitive tension creation and auction process optimization</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Valuation Complexity & Price Optimization</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> M&A valuation involves multiple methodologies, synergy quantification, and market condition assessment. Optimizing transaction value requires sophisticated financial modeling and negotiation strategy development.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Valuation Optimization Strategies:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Multiple valuation approaches: DCF, trading multiples, precedent transactions</li>
                    <li>Synergy identification and quantification for strategic premium capture</li>
                    <li>Market timing analysis and transaction timing optimization</li>
                    <li>Structure optimization including earnouts, contingent value rights, and risk allocation</li>
                    <li>Tax structure optimization and cross-border consideration</li>
                    <li>Working capital and purchase price adjustment mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Due Diligence Management & Risk Mitigation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> M&A due diligence is extensive and invasive, requiring careful management to maintain business operations while providing comprehensive information access to multiple potential buyers simultaneously.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Due Diligence Coordination:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Virtual data room organization and information flow management</li>
                    <li>Legal, financial, operational, and commercial due diligence coordination</li>
                    <li>Management presentation and Q&A session facilitation</li>
                    <li>Customer and vendor reference call coordination</li>
                    <li>Regulatory approval and antitrust clearance management</li>
                    <li>Issue identification and resolution strategy development</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">Integration Planning & Execution Risk</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Post-merger integration success determines transaction value realization. Integration planning must begin during due diligence while addressing cultural, operational, and strategic alignment challenges.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Integration Success Factors:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cultural assessment and change management planning</li>
                    <li>Operational integration and synergy realization roadmaps</li>
                    <li>Technology systems integration and data migration strategies</li>
                    <li>Talent retention and organizational design optimization</li>
                    <li>Customer retention and relationship continuity assurance</li>
                    <li>Regulatory compliance and approval maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli M&A Methodology */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Strategic M&A Advisory Framework
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-emerald-600/10 to-teal-600/10 p-8 rounded-xl border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Phase 1: Strategic Assessment & Transaction Planning (Weeks 1-8)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic Transaction Analysis</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Business model analysis and competitive positioning assessment</li>
                    <li>• Strategic alternatives evaluation and transaction rationale development</li>
                    <li>• Market timing analysis and transaction readiness assessment</li>
                    <li>• Synergy identification and value creation opportunity mapping</li>
                    <li>• Stakeholder analysis and approval process planning</li>
                    <li>• Transaction structure and tax optimization strategy development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Valuation & Financial Modeling</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Comprehensive valuation analysis using multiple methodologies</li>
                    <li>• Financial model development and scenario analysis</li>
                    <li>• Comparable transaction analysis and market multiple assessment</li>
                    <li>• Discounted cash flow modeling and terminal value optimization</li>
                    <li>• Synergy quantification and integration cost estimation</li>
                    <li>• Deal structure analysis and value allocation optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 p-8 rounded-xl border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold text-teal-400 mb-6">Phase 2: Buyer Identification & Process Execution (Weeks 9-20)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic & Financial Buyer Development</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Strategic buyer identification and prioritization based on synergy potential</li>
                    <li>• Financial buyer analysis and private equity firm targeting</li>
                    <li>• International buyer identification for cross-border opportunities</li>
                    <li>• Industry consolidation analysis and market participant mapping</li>
                    <li>• Buyer capability assessment and acquisition capacity evaluation</li>
                    <li>• Confidential approach and initial interest assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Marketing & Process Management</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Executive summary and confidential information memorandum development</li>
                    <li>• Virtual data room organization and information flow management</li>
                    <li>• Management presentation development and roadshow coordination</li>
                    <li>• Non-disclosure agreement and process letter coordination</li>
                    <li>• Bid process management and competitive tension optimization</li>
                    <li>• Preliminary indication of interest evaluation and buyer selection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 p-8 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Phase 3: Due Diligence & Transaction Closing (Weeks 21-36)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Due Diligence Coordination & Management</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Comprehensive due diligence workstream coordination</li>
                    <li>• Legal, financial, operational, and commercial information management</li>
                    <li>• Management presentation and expert interview facilitation</li>
                    <li>• Customer and vendor reference call coordination</li>
                    <li>• Regulatory approval and antitrust clearance support</li>
                    <li>• Issue identification and resolution strategy implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Negotiation & Closing Execution</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Final bid evaluation and buyer selection optimization</li>
                    <li>• Purchase agreement negotiation and term optimization</li>
                    <li>• Representation and warranty insurance coordination</li>
                    <li>• Closing condition satisfaction and timeline management</li>
                    <li>• Integration planning and transition coordination</li>
                    <li>• Post-closing adjustment and earnout administration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M&A Transaction Types */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Strategic M&A Transaction Types & Applications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">SS</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Strategic Sale & Exit</h3>
                  <p className="text-slate-400">Maximum Value Realization</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-400">Transaction Focus & Objectives</h4>
                  <p className="text-slate-300">Strategic sales to corporate buyers seeking synergistic acquisitions for market expansion, technology integration, or competitive positioning enhancement.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-emerald-400">Key Value Drivers</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Revenue synergies through customer base integration and cross-selling</li>
                    <li>• Cost synergies through operational consolidation and efficiency gains</li>
                    <li>• Strategic synergies including market access and competitive advantages</li>
                    <li>• Technology synergies and intellectual property integration</li>
                    <li>• Talent acquisition and organizational capability enhancement</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-emerald-400">Typical Buyer Profile</h4>
                  <p className="text-slate-300">Public companies, large private companies, and international corporations seeking strategic acquisitions for growth, diversification, or market consolidation.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">PE</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Private Equity Sale</h3>
                  <p className="text-slate-400">Institutional Partnership & Growth</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-400">Transaction Focus & Objectives</h4>
                  <p className="text-slate-300">Sales to private equity firms seeking majority or minority investments with operational improvement and growth acceleration opportunities.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-400">Key Value Drivers</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Management team retention and equity participation incentives</li>
                    <li>• Operational improvement and margin enhancement opportunities</li>
                    <li>• Buy-and-build strategies and acquisition platform development</li>
                    <li>• Market expansion and international growth initiatives</li>
                    <li>• Technology investment and digital transformation acceleration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-400">Typical Buyer Profile</h4>
                  <p className="text-slate-300">Middle-market and large-cap private equity funds with sector expertise, operational capabilities, and buy-and-build investment strategies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">DV</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Divestiture & Spin-Off</h3>
                  <p className="text-slate-400">Portfolio Optimization</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-cyan-400">Transaction Focus & Objectives</h4>
                  <p className="text-slate-300">Strategic divestiture of non-core business units, subsidiaries, or assets to optimize corporate portfolio and unlock shareholder value.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-400">Key Value Drivers</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Core business focus and resource reallocation optimization</li>
                    <li>• Multiple expansion through pure-play investment thesis</li>
                    <li>• Capital allocation efficiency and balance sheet optimization</li>
                    <li>• Regulatory compliance and antitrust issue resolution</li>
                    <li>• Strategic buyer premium capture for divested assets</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-cyan-400">Typical Buyer Profile</h4>
                  <p className="text-slate-300">Strategic buyers seeking bolt-on acquisitions, private equity firms with sector focus, and management teams pursuing management buyouts.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CB</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Cross-Border M&A</h3>
                  <p className="text-slate-400">International Expansion</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-400">Transaction Focus & Objectives</h4>
                  <p className="text-slate-300">International mergers and acquisitions enabling geographic expansion, market access, and global platform development across multiple jurisdictions.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400">Key Value Drivers</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Market access and local presence establishment</li>
                    <li>• Regulatory expertise and compliance capability acquisition</li>
                    <li>• Currency diversification and international revenue streams</li>
                    <li>• Technology transfer and intellectual property access</li>
                    <li>• Supply chain optimization and global scale advantages</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-400">Typical Buyer Profile</h4>
                  <p className="text-slate-300">Multinational corporations, sovereign wealth funds, international private equity firms, and government-backed strategic investors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M&A Success Stories */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Strategic M&A Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">TS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Technology Services Platform</h3>
                  <p className="text-slate-400 text-sm">Strategic Acquisition</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> SaaS platform with $40M ARR sought strategic exit to maximize technology synergies and market expansion.</p>
                <p className="text-slate-300"><strong>Result:</strong> $320M strategic sale to Fortune 500 acquirer, 8x revenue multiple, full management team retention and integration success.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">HS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Healthcare Services Roll-Up</h3>
                  <p className="text-slate-400 text-sm">Buy-and-Build Strategy</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Regional healthcare services company sought to create consolidation platform through strategic partnerships.</p>
                <p className="text-slate-300"><strong>Result:</strong> $150M private equity partnership, completed 8 add-on acquisitions, achieved market leadership and 2.8x MOIC exit.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">ID</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Industrial Divestiture</h3>
                  <p className="text-slate-400 text-sm">Portfolio Optimization</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Multinational corporation sought to divest non-core industrial division to focus on core technology business.</p>
                <p className="text-slate-300"><strong>Result:</strong> $450M divestiture to strategic buyer, 12% parent company multiple expansion, successful separation and transition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Strategic Capital & Advisory Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Private Equity Partnerships</h3>
              <p className="text-slate-300 mb-4">Connect with private equity firms for growth capital and strategic partnerships.</p>
              <a href="/private-equity-fundraising" className="text-emerald-400 hover:text-emerald-300 underline font-semibold">
                Private Equity Fundraising →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Growth Capital Advisory</h3>
              <p className="text-slate-300 mb-4">Scale your business with institutional growth capital before strategic exits.</p>
              <a href="/growth-capital-advisory" className="text-emerald-400 hover:text-emerald-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Early-Stage Acquisitions</h3>
              <p className="text-slate-300 mb-4">Venture capital connections for emerging companies considering strategic acquisitions.</p>
              <a href="/venture-capital-introduction" className="text-emerald-400 hover:text-emerald-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Strategic M&A Advisory FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What factors determine optimal timing for strategic M&A transactions?</h3>
              <p className="text-slate-300">
                M&A timing optimization involves multiple market and company-specific factors: (1) <strong>Market Conditions:</strong> Industry consolidation cycles, public market valuations, credit availability, and regulatory environment affecting buyer appetite and valuation multiples, (2) <strong>Company Performance:</strong> Financial performance trajectory, growth momentum, operational efficiency, and competitive positioning influencing strategic premium potential, (3) <strong>Strategic Factors:</strong> Competitive threats, technology disruption, regulatory changes, and market dynamics creating urgency or opportunity for strategic transactions, (4) <strong>Stakeholder Readiness:</strong> Management team alignment, board approval processes, shareholder expectations, and organizational preparation for transaction execution, (5) <strong>Buyer Landscape:</strong> Strategic buyer acquisition activity, private equity dry powder deployment, and cross-border investment flows affecting demand and competition, (6) <strong>Economic Environment:</strong> Interest rates, currency fluctuations, geopolitical stability, and macroeconomic trends impacting transaction financing and completion probability. Optimal timing balances company-specific readiness with favorable market conditions to maximize transaction value and execution certainty.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">How do strategic buyers versus financial buyers evaluate acquisition opportunities differently?</h3>
              <p className="text-slate-300">
                Strategic and financial buyers have fundamentally different investment criteria and value creation approaches: (1) <strong>Strategic Buyers:</strong> Corporate acquirers focus on synergy potential, market consolidation, technology integration, and long-term competitive positioning willing to pay strategic premiums for transformational assets, (2) <strong>Financial Buyers:</strong> Private equity firms emphasize cash flow generation, operational improvement potential, management team capability, and exit strategy optimization seeking predictable returns through operational enhancement, (3) <strong>Valuation Approach:</strong> Strategic buyers consider revenue synergies, cost savings, and strategic value creation while financial buyers focus on standalone cash flows and operational improvement opportunities, (4) <strong>Due Diligence Focus:</strong> Strategic buyers emphasize market position, competitive dynamics, and integration complexity while financial buyers prioritize financial performance, management team, and growth potential, (5) <strong>Transaction Structure:</strong> Strategic buyers often prefer stock consideration and long-term integration while financial buyers utilize leverage optimization and management equity participation, (6) <strong>Timeline & Process:</strong> Strategic buyers may have longer decision-making processes and regulatory approval requirements while financial buyers typically move faster with more streamlined approval processes.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What are the key success factors for post-merger integration and value realization?</h3>
              <p className="text-slate-300">
                Post-merger integration success determines transaction value realization and requires systematic execution: (1) <strong>Cultural Integration:</strong> Cultural assessment, change management, communication strategy, and leadership alignment ensuring organizational cohesion and employee retention, (2) <strong>Operational Integration:</strong> Process standardization, system integration, supply chain optimization, and operational synergy realization with clear timelines and accountability, (3) <strong>Technology Integration:</strong> IT systems consolidation, data migration, cybersecurity harmonization, and digital transformation coordination minimizing operational disruption, (4) <strong>Commercial Integration:</strong> Customer retention, sales force integration, product portfolio optimization, and go-to-market strategy alignment maximizing revenue synergies, (5) <strong>Talent Management:</strong> Key talent retention, organizational design, compensation harmonization, and performance management ensuring capability preservation and enhancement, (6) <strong>Financial Integration:</strong> Accounting system integration, financial reporting consolidation, cost synergy tracking, and performance measurement enabling accurate value realization assessment. Successful integration requires dedicated integration management office, clear governance structure, and systematic milestone tracking with regular stakeholder communication and issue resolution processes.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">How do regulatory and antitrust considerations affect M&A transaction structure and execution?</h3>
              <p className="text-slate-300">
                Regulatory and antitrust oversight significantly impacts M&A transaction design and execution: (1) <strong>Antitrust Analysis:</strong> Market concentration assessment, competitive impact evaluation, and regulatory filing requirements (HSR, EU merger control, international approvals) determining approval probability and timeline, (2) <strong>Regulatory Strategy:</strong> Early engagement with regulatory authorities, antitrust counsel selection, economic analysis preparation, and remedy negotiation strategy development, (3) <strong>Industry-Specific Regulation:</strong> Sector-specific approval requirements (FCC for telecommunications, banking regulators for financial services, healthcare regulators for medical devices) adding complexity and timeline, (4) <strong>Cross-Border Considerations:</strong> Foreign investment review (CFIUS in US, national security reviews internationally), multiple jurisdiction coordination, and diplomatic considerations for cross-border transactions, (5) <strong>Timing & Structure Impact:</strong> Regulatory approval timelines affecting deal certainty, financing arrangements, material adverse change provisions, and closing condition satisfaction, (6) <strong>Remedy Requirements:</strong> Asset divestiture requirements, behavioral remedies, and ongoing compliance obligations affecting transaction value and post-closing operations. Companies should engage antitrust counsel early, conduct preliminary regulatory analysis, and develop contingency plans for various regulatory outcomes including remedy acceptance or transaction abandonment.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What role does investment banking advisory play in maximizing M&A transaction outcomes?</h3>
              <p className="text-slate-300">
                Professional M&A advisory is critical for optimizing transaction outcomes and execution success: (1) <strong>Strategic Positioning:</strong> Market analysis, competitive positioning, strategic narrative development, and buyer identification maximizing transaction interest and strategic premium capture, (2) <strong>Process Management:</strong> Auction process design, buyer outreach coordination, confidentiality management, and competitive tension optimization ensuring maximum value realization, (3) <strong>Valuation Optimization:</strong> Multiple valuation methodologies, comparable transaction analysis, synergy quantification, and negotiation strategy development supporting optimal pricing achievement, (4) <strong>Due Diligence Coordination:</strong> Information management, buyer coordination, issue identification and resolution, and process timeline optimization minimizing business disruption while facilitating thorough evaluation, (5) <strong>Negotiation Expertise:</strong> Term negotiation, legal documentation review, risk allocation optimization, and closing coordination ensuring favorable transaction terms and successful completion, (6) <strong>Market Intelligence:</strong> Buyer capability assessment, market condition analysis, timing optimization, and strategic alternative evaluation providing informed decision-making support. Experienced M&A advisors provide access to buyer networks, market intelligence, process expertise, and negotiation capability that individual companies typically cannot replicate internally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Execute Your Strategic Transaction?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Navigate complex M&A transactions with expert guidance and proven execution capabilities. Our strategic advisory expertise maximizes value while minimizing execution risk throughout the transaction lifecycle.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Strategic Assessment</h3>
              <p className="text-slate-300">Comprehensive transaction analysis and strategic positioning for optimal outcomes</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Buyer Development</h3>
              <p className="text-slate-300">Strategic and financial buyer identification with competitive process optimization</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">Transaction Execution</h3>
              <p className="text-slate-300">End-to-end process management from strategy through successful closing</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule M&A Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit Transaction Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            Confidential consultation. Serving companies with $10M+ revenue considering strategic transactions.
          </p>
        </div>
      </section>
    </div>
  );
}