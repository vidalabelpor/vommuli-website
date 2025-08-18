import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Equity Fundraising | PE Capital Advisory Services',
  description: 'Expert private equity fundraising advisory for established companies seeking growth capital, expansion funding, and strategic partnerships with leading PE firms.',
  keywords: [
    'private equity fundraising advisor',
    'PE capital raising consultant',
    'growth equity advisory',
    'institutional investment advisory',
    'private equity transaction advisory',
    'PE firm introduction services',
    'growth capital fundraising',
    'private equity deal advisory',
    'institutional capital raising',
    'PE investment banking'
  ],
  openGraph: {
    title: 'Private Equity Fundraising | Vommuli Ventures',
    description: 'Expert private equity fundraising advisory for established companies seeking growth capital.',
    url: 'https://vommuli.com/private-equity-fundraising',
  },
};

export default function PrivateEquityFundraisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Private Equity Fundraising for <span className="text-orange-400">Established Companies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with premier private equity firms for growth capital, strategic partnerships, and transformational investments. We facilitate $25M-$500M+ transactions with institutional investors seeking proven business models and scalable growth opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule PE Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download PE Readiness Guide
            </button>
          </div>
        </div>
      </section>

      {/* Private Equity Market Landscape */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Market Dynamics 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 p-6 rounded-xl border border-orange-500/30 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">$3.7T</h3>
              <p className="text-slate-300 text-sm">Global private equity assets under management, with $950B+ dry powder available</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600/20 to-yellow-600/20 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-3xl font-bold text-amber-400 mb-2">18-24%</h3>
              <p className="text-slate-300 text-sm">Target IRR for private equity growth investments in mid-market companies</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/20 to-red-600/20 p-6 rounded-xl border border-yellow-500/30 text-center">
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">4-7 Years</h3>
              <p className="text-slate-300 text-sm">Typical investment holding period for PE portfolio company optimization</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-6 rounded-xl border border-red-500/30 text-center">
              <h3 className="text-3xl font-bold text-red-400 mb-2">$75M</h3>
              <p className="text-slate-300 text-sm">Average transaction size for mid-market private equity deals in 2024</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Private Equity Investment Focus Areas</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">Technology & Software</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Enterprise Software:</strong> SaaS platforms with recurring revenue models and strong retention</li>
                  <li>• <strong>Vertical Software:</strong> Industry-specific solutions with high switching costs</li>
                  <li>• <strong>FinTech & Payments:</strong> Payment processing, lending platforms, and financial infrastructure</li>
                  <li>• <strong>Healthcare Technology:</strong> Health IT, telemedicine, and medical device software</li>
                  <li>• <strong>Cybersecurity:</strong> Enterprise security solutions with mission-critical applications</li>
                  <li>• <strong>Data & Analytics:</strong> Business intelligence, data infrastructure, and AI applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">Healthcare & Life Sciences</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Healthcare Services:</strong> Specialty care, outpatient services, and value-based care</li>
                  <li>• <strong>Medical Devices:</strong> Established devices with FDA approval and market traction</li>
                  <li>• <strong>Pharmaceuticals:</strong> Specialty pharma, generics, and drug delivery systems</li>
                  <li>• <strong>Healthcare IT:</strong> EHR systems, practice management, and population health</li>
                  <li>• <strong>Biotechnology:</strong> Commercial-stage biotech with proven therapeutic platforms</li>
                  <li>• <strong>Contract Services:</strong> CROs, CDMOs, and healthcare outsourcing services</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">Industrial & Business Services</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Business Services:</strong> Outsourced services, consulting, and professional services</li>
                  <li>• <strong>Industrial Technology:</strong> Automation, manufacturing technology, and industrial software</li>
                  <li>• <strong>Logistics & Transportation:</strong> Last-mile delivery, freight, and supply chain solutions</li>
                  <li>• <strong>Energy & Infrastructure:</strong> Renewable energy, energy services, and infrastructure assets</li>
                  <li>• <strong>Consumer Services:</strong> Education, franchise concepts, and consumer-facing services</li>
                  <li>• <strong>Financial Services:</strong> Asset management, insurance services, and specialty finance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PE Fundraising Challenges */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Complex Private Equity Fundraising Challenges
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">PE Readiness & Institutional Standards</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Private equity firms require sophisticated financial reporting, governance structures, and operational systems that many successful companies lack. Meeting institutional standards requires significant preparation and infrastructure development.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Institutional Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Audited financial statements with Big Four accounting firm oversight</li>
                    <li>Monthly and quarterly reporting systems with KPI dashboards</li>
                    <li>Professional board composition with independent directors</li>
                    <li>Management equity incentive plans and retention strategies</li>
                    <li>Legal entity structure optimization and corporate governance</li>
                    <li>Professional management team with institutional experience</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Valuation Complexity & Deal Structuring</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Private equity transactions involve complex valuation methodologies, deal structures, and governance arrangements that require sophisticated financial and legal expertise to optimize outcomes for all stakeholders.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Deal Structure Considerations:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Multiple valuation approaches and comparable company analysis</li>
                    <li>Management rollover equity and incentive structure design</li>
                    <li>Preferred equity features and liquidation preferences</li>
                    <li>Board composition and control provisions</li>
                    <li>Operational covenants and performance milestones</li>
                    <li>Exit strategy alignment and timing considerations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Due Diligence Intensity & Process Management</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Private equity due diligence is comprehensive and invasive, requiring extensive documentation, management time, and coordination across multiple workstreams while maintaining business operations and confidentiality.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Due Diligence Scope:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Financial due diligence with quality of earnings analysis</li>
                    <li>Commercial due diligence and market position validation</li>
                    <li>Operational due diligence and process optimization assessment</li>
                    <li>Technology due diligence and systems architecture review</li>
                    <li>Legal due diligence and regulatory compliance verification</li>
                    <li>Management team assessment and organizational capability</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Strategic Alignment & Partnership Dynamics</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Successful private equity partnerships require cultural alignment, shared vision, and complementary capabilities. Selecting the right PE partner involves evaluating sector expertise, value creation approach, and long-term strategic goals.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Partnership Evaluation:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sector expertise and portfolio company synergies</li>
                    <li>Value creation methodology and operational support</li>
                    <li>Deal team experience and post-investment involvement</li>
                    <li>Portfolio company references and track record validation</li>
                    <li>Exit strategy capability and market relationships</li>
                    <li>Cultural fit and management relationship dynamics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli PE Methodology */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Private Equity Fundraising Framework
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-orange-600/10 to-amber-600/10 p-8 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Phase 1: PE Readiness Assessment & Optimization (Weeks 1-10)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Institutional Infrastructure Development</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Financial reporting systems and audit readiness preparation</li>
                    <li>• Management information systems and KPI dashboard implementation</li>
                    <li>• Corporate governance structure and board composition optimization</li>
                    <li>• Legal entity structure review and optimization</li>
                    <li>• Management equity incentive plan design and implementation</li>
                    <li>• Operational process documentation and scalability assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic Positioning & Value Creation</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Market position analysis and competitive differentiation</li>
                    <li>• Growth strategy development and expansion opportunities</li>
                    <li>• Operational efficiency optimization and margin improvement</li>
                    <li>• Technology roadmap and digital transformation planning</li>
                    <li>• Acquisition strategy and buy-and-build opportunities</li>
                    <li>• ESG framework development and sustainability initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600/10 to-yellow-600/10 p-8 rounded-xl border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Phase 2: PE Targeting & Relationship Development (Weeks 11-20)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic PE Firm Selection</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• PE firm sector focus and investment thesis alignment</li>
                    <li>• Fund size and check size capability assessment</li>
                    <li>• Portfolio company analysis and value creation track record</li>
                    <li>• Deal team experience and post-investment support capabilities</li>
                    <li>• Geographic focus and international expansion support</li>
                    <li>• Exit strategy capability and market relationships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Marketing Materials & Presentation</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Executive summary and investment memorandum development</li>
                    <li>• Management presentation and deal roadshow preparation</li>
                    <li>• Financial model and projections optimization</li>
                    <li>• Data room organization and due diligence preparation</li>
                    <li>• Reference customer and market validation documentation</li>
                    <li>• Competitive analysis and market position validation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-red-600/10 p-8 rounded-xl border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Phase 3: Process Management & Deal Execution (Weeks 21-35)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Due Diligence Process Management</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Due diligence workstream coordination and timeline management</li>
                    <li>• Management presentation and Q&A session facilitation</li>
                    <li>• Data room management and information request coordination</li>
                    <li>• Expert network development and reference call coordination</li>
                    <li>• Issue identification and resolution strategy development</li>
                    <li>• Competitive tension management and process optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Deal Negotiation & Closing</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Term sheet negotiation and valuation optimization</li>
                    <li>• Legal documentation review and negotiation support</li>
                    <li>• Management equity structure and incentive plan finalization</li>
                    <li>• Board composition and governance structure agreement</li>
                    <li>• Closing coordination and funds transfer facilitation</li>
                    <li>• Post-closing integration planning and relationship establishment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PE Investment Stages */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Investment Stages & Requirements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">GE</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Growth Equity</h3>
                  <p className="text-slate-400">Scaling Proven Business Models</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-400">Investment Range & Profile</h4>
                  <p className="text-slate-300">$25M-$150M for companies with $10M+ revenue, strong growth trajectory, and expansion capital needs for market leadership.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Proven business model with strong unit economics</li>
                    <li>• Significant market opportunity and competitive advantages</li>
                    <li>• Experienced management team with growth execution capability</li>
                    <li>• Clear growth strategy and capital deployment plan</li>
                    <li>• Strong financial performance and predictable cash flows</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Typical PE Investor Profile</h4>
                  <p className="text-slate-300">Growth equity funds, large-cap PE funds, and crossover investors with sector expertise and operational support capabilities.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">BO</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Buyout</h3>
                  <p className="text-slate-400">Control Transactions & Transformation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-400">Investment Range & Profile</h4>
                  <p className="text-slate-300">$50M-$500M+ for mature companies seeking ownership transition, operational improvement, or strategic transformation.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Stable cash flows and defensible market position</li>
                    <li>• Clear operational improvement and value creation opportunities</li>
                    <li>• Management team retention and incentive alignment</li>
                    <li>• Platform for add-on acquisitions and market consolidation</li>
                    <li>• Predictable exit pathway within 4-7 year investment horizon</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-amber-400">Typical PE Investor Profile</h4>
                  <p className="text-slate-300">Mid-market and large-cap buyout funds with operational expertise, sector focus, and buy-and-build strategies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">RE</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Recapitalization</h3>
                  <p className="text-slate-400">Liquidity & Capital Structure Optimization</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-400">Investment Range & Profile</h4>
                  <p className="text-slate-300">$25M-$200M for established companies seeking partial liquidity, dividend recapitalization, or capital structure optimization.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Strong historical financial performance and cash generation</li>
                    <li>• Experienced management team committed to continued leadership</li>
                    <li>• Stable market position with limited execution risk</li>
                    <li>• Clear growth opportunities and expansion strategies</li>
                    <li>• Debt capacity for leverage optimization and returns</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400">Typical PE Investor Profile</h4>
                  <p className="text-slate-300">Growth equity funds, family offices, and specialty finance providers with partnership-oriented investment approach.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">SP</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Special Situations</h3>
                  <p className="text-slate-400">Distressed & Turnaround Opportunities</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-400">Investment Range & Profile</h4>
                  <p className="text-slate-300">$10M-$100M+ for distressed companies, turnaround situations, or complex restructuring transactions requiring specialized expertise.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Key Requirements</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Underlying business viability and competitive advantages</li>
                    <li>• Clear operational or financial issues with addressable solutions</li>
                    <li>• Management team capability or replacement strategy</li>
                    <li>• Stakeholder alignment and restructuring feasibility</li>
                    <li>• Value creation potential through operational improvement</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Typical PE Investor Profile</h4>
                  <p className="text-slate-300">Distressed debt funds, turnaround specialists, and opportunistic investors with restructuring and operational expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PE Success Stories */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">ST</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">SaaS Technology Platform</h3>
                  <p className="text-slate-400 text-sm">Growth Equity Partnership</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> $25M ARR SaaS company sought growth capital for international expansion and product development.</p>
                <p className="text-slate-300"><strong>Result:</strong> $75M growth equity round, expanded to 15 countries, achieved $100M ARR and successful exit at 8x revenue multiple.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">HS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Healthcare Services</h3>
                  <p className="text-slate-400 text-sm">Management Buyout</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Family-owned healthcare services company with $50M revenue sought management buyout and growth capital.</p>
                <p className="text-slate-300"><strong>Result:</strong> $85M buyout transaction, completed 12 add-on acquisitions, achieved 3.2x MOIC over 5-year hold period.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">IS</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Industrial Services</h3>
                  <p className="text-slate-400 text-sm">Operational Turnaround</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Industrial services company with operational challenges sought turnaround capital and management expertise.</p>
                <p className="text-slate-300"><strong>Result:</strong> $40M investment, operational transformation achieved 40% EBITDA margin improvement, strategic exit to industry consolidator.</p>
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
              <h3 className="text-xl font-bold text-orange-400 mb-3">Pre-PE Growth Capital</h3>
              <p className="text-slate-300 mb-4">Scale your business with growth capital before pursuing private equity partnerships.</p>
              <a href="/growth-capital-advisory" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Early-Stage Funding</h3>
              <p className="text-slate-300 mb-4">Venture capital connections for companies in early growth stages before PE readiness.</p>
              <a href="/venture-capital-introduction" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Strategic Exit Planning</h3>
              <p className="text-slate-300 mb-4">M&A advisory for private equity exits and strategic transactions.</p>
              <a href="/ma-advisory" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Private Equity Fundraising FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">What makes a company attractive to private equity investors?</h3>
              <p className="text-slate-300">
                Private equity firms seek companies with specific characteristics that enable predictable returns: (1) <strong>Proven Business Model:</strong> Established revenue streams ($10M+ typically), strong unit economics, and predictable cash flows with demonstrated market demand, (2) <strong>Market Leadership:</strong> Defensible market position, competitive advantages, and barriers to entry that protect market share and pricing power, (3) <strong>Growth Opportunities:</strong> Clear expansion pathways through geographic expansion, product development, or market penetration with addressable growth strategies, (4) <strong>Management Team:</strong> Experienced leadership with sector expertise, operational excellence, and track record of execution and value creation, (5) <strong>Scalable Operations:</strong> Systems, processes, and infrastructure capable of supporting significant growth without proportional cost increases, (6) <strong>Financial Performance:</strong> Strong margins, cash generation, and growth trajectory with historical performance demonstrating business resilience. PE firms also value acquisition opportunities, operational improvement potential, and clear exit pathways through strategic sale or IPO.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">How do private equity firms evaluate investment opportunities and conduct due diligence?</h3>
              <p className="text-slate-300">
                PE due diligence is comprehensive and involves multiple expert workstreams: (1) <strong>Financial Due Diligence:</strong> Quality of earnings analysis, working capital assessment, revenue recognition validation, and financial projection stress testing by specialized accounting firms, (2) <strong>Commercial Due Diligence:</strong> Market size validation, competitive positioning, customer concentration analysis, and growth opportunity assessment through market research and expert interviews, (3) <strong>Operational Due Diligence:</strong> Process efficiency evaluation, technology systems assessment, organizational capability analysis, and operational improvement identification, (4) <strong>Management Assessment:</strong> Leadership team evaluation, cultural fit analysis, reference checks, and retention/incentive planning, (5) <strong>Legal Due Diligence:</strong> Corporate structure review, contract analysis, regulatory compliance verification, and litigation risk assessment, (6) <strong>Technology Due Diligence:</strong> IT systems architecture, cybersecurity assessment, digital transformation opportunities, and technology roadmap evaluation. The process typically takes 8-12 weeks with multiple site visits, management presentations, and expert consultations before investment committee approval.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">What are typical private equity deal structures and terms?</h3>
              <p className="text-slate-300">
                PE deal structures vary by transaction type and company characteristics: (1) <strong>Growth Equity:</strong> Minority investments (25-49%) with limited control rights, growth-focused board representation, and management-friendly terms supporting expansion, (2) <strong>Majority Buyout:</strong> Control transactions (51%+) with board control, operational oversight, and management equity rollover typically 10-20% of transaction value, (3) <strong>Valuation Multiples:</strong> 8-15x EBITDA for mature companies, 3-8x revenue for high-growth technology companies, with purchase price adjustments for working capital and debt, (4) <strong>Management Incentives:</strong> Equity participation through stock options, phantom equity, or direct investment creating alignment with PE returns and retention incentives, (5) <strong>Board Composition:</strong> PE representatives, independent directors, and management representation with committee structures for compensation, audit, and strategy, (6) <strong>Exit Planning:</strong> 4-7 year investment horizon with exit strategy planning through strategic sale, secondary buyout, or public offering depending on company scale and market conditions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">How should companies prepare for private equity fundraising?</h3>
              <p className="text-slate-300">
                PE fundraising preparation requires institutional infrastructure development: (1) <strong>Financial Systems:</strong> Audited financial statements, monthly/quarterly reporting systems, KPI dashboards, and budgeting/forecasting processes meeting institutional standards, (2) <strong>Corporate Governance:</strong> Professional board composition, committee structures, equity incentive plans, and corporate policies aligned with PE requirements, (3) <strong>Management Team:</strong> Experienced leadership team, organizational depth, succession planning, and professional development supporting growth and institutional partnership, (4) <strong>Operational Excellence:</strong> Documented processes, quality management systems, customer diversification, and scalable operations supporting growth and value creation, (5) <strong>Strategic Planning:</strong> Clear growth strategy, market expansion plans, acquisition pipeline, and operational improvement opportunities creating value creation roadmap, (6) <strong>Legal Preparation:</strong> Corporate structure optimization, contract standardization, regulatory compliance, and intellectual property protection. Companies should begin preparation 12-18 months before fundraising to address infrastructure gaps and optimize positioning for PE partnership success.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-400 mb-3">What value does private equity bring beyond capital?</h3>
              <p className="text-slate-300">
                Private equity value creation extends far beyond financial investment: (1) <strong>Strategic Guidance:</strong> Board-level strategic planning, market expansion strategy, acquisition identification, and competitive positioning with seasoned industry expertise, (2) <strong>Operational Improvement:</strong> Process optimization, technology implementation, organizational development, and best practice implementation from portfolio company experience, (3) <strong>Network Access:</strong> Customer introductions, strategic partnerships, vendor relationships, and industry connections accelerating business development and growth, (4) <strong>Talent Acquisition:</strong> Executive recruiting, board member identification, and professional development supporting organizational capability building, (5) <strong>Buy-and-Build Strategy:</strong> Acquisition sourcing, due diligence support, integration planning, and consolidation strategy creating platform value through market consolidation, (6) <strong>Exit Optimization:</strong> Strategic buyer identification, IPO preparation, and transaction execution maximizing exit value and liquidity options. PE firms typically maintain active involvement through board participation, quarterly business reviews, and strategic initiative support throughout the investment holding period creating alignment between PE returns and company success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Partner with Private Equity?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Connect with premier private equity firms aligned with your growth strategy and value creation objectives. Our specialized PE expertise accelerates your path to institutional partnership.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-orange-400 mb-2">PE Readiness Assessment</h3>
              <p className="text-slate-300">Comprehensive evaluation of institutional infrastructure and investment attractiveness</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Strategic PE Targeting</h3>
              <p className="text-slate-300">Identification and access to optimal PE partners for your sector and transaction type</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Process Management</h3>
              <p className="text-slate-300">End-to-end transaction support from preparation through closing and integration</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule PE Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit PE Funding Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            Confidential assessment. Serving companies with $10M+ revenue seeking institutional partnership.
          </p>
        </div>
      </section>
    </div>
  );
}