import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Private Equity Fundraising Services | Institutional PE Capital Introduction | Vommuli',
  description: 'Expert private equity fundraising services connecting established companies with PE firms. Specialized in growth capital, buyouts, and expansion financing with 73% introduction-to-LOI success rate.',
  keywords: [
    'private equity fundraising',
    'PE fundraising services',
    'private equity introduction',
    'PE firm connections',
    'growth capital fundraising',
    'private equity advisory',
    'PE capital introduction',
    'institutional private equity',
    'private equity placement',
    'PE fund connections',
    'private equity consultants',
    'PE fundraising experts',
    'growth equity fundraising',
    'expansion capital advisory',
    'private equity specialists',
    'PE investment advisory',
    'institutional PE access',
    'private equity network',
    'PE fundraising strategy',
    'private equity partnerships'
  ],
  openGraph: {
    title: 'Private Equity Fundraising Services | Institutional PE Capital Introduction',
    description: 'Expert PE fundraising with 73% success rate connecting established companies with private equity firms for growth capital and buyouts.',
    url: 'https://vommuli.com/services/private-equity-fundraising',
  },
};

export default function PrivateEquityFundraisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzODBGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-indigo-300 text-sm font-medium">💼 Private Equity Fundraising</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Institutional Private Equity
              <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Fundraising Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Strategic connections with premier private equity firms for growth capital, buyouts, and expansion financing. Our institutional approach delivers a 73% introduction-to-LOI success rate for established companies seeking $10M-$500M+ in PE capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Initiate PE Fundraising Process</span>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center">
                  PE Fundraising Playbook
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="relative py-16 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30">
              <div className="text-4xl font-black text-indigo-400 mb-2">73%</div>
              <p className="text-slate-300 text-sm mb-1">Introduction to LOI Success Rate</p>
              <p className="text-green-400 text-xs">↑ 18% above market average</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
              <div className="text-4xl font-black text-blue-400 mb-2">150+</div>
              <p className="text-slate-300 text-sm mb-1">Global PE Firm Network</p>
              <p className="text-cyan-400 text-xs">Institutional quality</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-4xl font-black text-cyan-400 mb-2">$4.2B</div>
              <p className="text-slate-300 text-sm mb-1">PE Capital Facilitated</p>
              <p className="text-green-400 text-xs">Last 36 months</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/30">
              <div className="text-4xl font-black text-teal-400 mb-2">6.8M</div>
              <p className="text-slate-300 text-sm mb-1">Average Months to Close</p>
              <p className="text-green-400 text-xs">↓ 28% faster execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* PE Transaction Types */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 backdrop-blur-sm mb-6">
              <span className="text-indigo-300 text-sm font-medium">💰 Transaction Types</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Private Equity Transaction Expertise
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive PE fundraising across all transaction structures and business stages.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20"></div>
              <div className="relative p-8 border border-emerald-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">Growth Capital</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm">Minority equity investments for established companies seeking expansion capital without operational control changes.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Typical Range</span>
                      <span className="text-emerald-400 text-sm">$10M - $200M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Equity Stake</span>
                      <span className="text-emerald-400 text-sm">10% - 40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Revenue Req.</span>
                      <span className="text-emerald-400 text-sm">$10M+ ARR</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">Use Cases:</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Market expansion & geographic growth</li>
                    <li>• Product development & innovation</li>
                    <li>• Strategic acquisitions</li>
                    <li>• Working capital optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
              <div className="relative p-8 border border-blue-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Management Buyouts</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm">Partnering with management teams to acquire controlling stakes in established, profitable businesses.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Typical Range</span>
                      <span className="text-blue-400 text-sm">$25M - $500M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Equity Stake</span>
                      <span className="text-blue-400 text-sm">51% - 90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">EBITDA Req.</span>
                      <span className="text-blue-400 text-sm">$5M+ annual</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">Use Cases:</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Management-led acquisitions</li>
                    <li>• Succession planning solutions</li>
                    <li>• Operational improvements</li>
                    <li>• Platform consolidation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20"></div>
              <div className="relative p-8 border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Strategic Buyouts</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm">Institutional acquisitions of mature companies with proven business models and stable cash flows.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Typical Range</span>
                      <span className="text-purple-400 text-sm">$50M - $1B+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">Equity Stake</span>
                      <span className="text-purple-400 text-sm">75% - 100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 text-sm">EBITDA Req.</span>
                      <span className="text-purple-400 text-sm">$10M+ annual</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white text-sm">Use Cases:</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Corporate carve-outs</li>
                    <li>• Founder/family exits</li>
                    <li>• Distressed acquisitions</li>
                    <li>• Roll-up strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PE Fundraising Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Institutional PE Fundraising Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Systematic approach designed for complex PE transactions and institutional requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Business Assessment & Positioning</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Comprehensive evaluation of financial performance, operational metrics, market position, and growth potential. Development of institutional-grade materials including management presentations, financial models, and strategic positioning documents.
                  </p>
                  <div className="bg-slate-800/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 text-sm">Key Deliverables:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Comprehensive business assessment</li>
                      <li>• Management presentation deck</li>
                      <li>• 3-year financial projections</li>
                      <li>• Competitive positioning analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">PE Firm Identification & Qualification</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Strategic identification of PE firms based on sector focus, transaction size, investment thesis, and portfolio fit. Rigorous qualification process including fund capacity, investment timeline, and decision-making process analysis.
                  </p>
                  <div className="bg-slate-800/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 text-sm">Qualification Criteria:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Fund size & deployment timeline</li>
                      <li>• Sector expertise & portfolio fit</li>
                      <li>• Investment committee preferences</li>
                      <li>• Value creation approach</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Strategic Introduction & Process Management</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Professional introductions leveraging established PE relationships. Comprehensive process management including meeting coordination, information flow management, and competitive dynamics optimization.
                  </p>
                  <div className="bg-slate-800/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2 text-sm">Process Elements:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Partner-level introductions</li>
                      <li>• Controlled auction process</li>
                      <li>• Due diligence coordination</li>
                      <li>• Competitive tension management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/30">
                <h3 className="text-2xl font-bold text-white mb-8">PE Transaction Timeline</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Business Assessment</span>
                        <span className="text-indigo-400 font-medium">4-6 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">PE Firm Qualification</span>
                        <span className="text-blue-400 font-medium">3-4 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Introduction Phase</span>
                        <span className="text-cyan-400 font-medium">6-10 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Due Diligence</span>
                        <span className="text-teal-400 font-medium">8-12 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Documentation & Closing</span>
                        <span className="text-emerald-400 font-medium">4-8 weeks</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Timeline</span>
                      <span className="text-green-400 font-bold">6-18 months</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Success Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">LOI Success Rate</span>
                      <span className="text-green-400">73%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Avg. Valuation Premium</span>
                      <span className="text-green-400">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Time to Close</span>
                      <span className="text-green-400">-28% vs market</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What is the success rate for private equity fundraising introductions?",
              answer: "Our private equity fundraising service achieves a 73% introduction-to-LOI success rate, which is 18% above the market average. This is achieved through our rigorous PE firm qualification process and institutional-grade positioning approach."
            },
            {
              question: "What size companies do you work with for PE fundraising?",
              answer: "We work with established companies seeking $10M-$500M+ in private equity capital. Typical requirements include $5M+ annual EBITDA for buyouts, $10M+ ARR for growth capital, and proven business models with institutional scalability."
            },
            {
              question: "How long does the private equity fundraising process take?",
              answer: "The complete PE fundraising process typically takes 6-18 months, including 4-6 weeks for business assessment, 3-4 weeks for PE firm qualification, 6-10 weeks for introductions, 8-12 weeks for due diligence, and 4-8 weeks for documentation and closing."
            },
            {
              question: "What types of PE transactions do you support?",
              answer: "We support all major PE transaction types: growth capital (minority equity, $10M-$200M), management buyouts (majority control, $25M-$500M), and strategic buyouts (full control, $50M-$1B+). Each has specialized approaches and PE firm networks."
            },
            {
              question: "How many private equity firms are in your network?",
              answer: "Our network includes 150+ institutional-quality private equity firms globally, including growth capital specialists, buyout funds, sector-focused PE firms, and international expansion capital partners across North America, Europe, and Asia-Pacific markets."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Private Equity Fundraising Services",
          description: "Expert private equity fundraising services connecting established companies with PE firms for growth capital, buyouts, and expansion financing with 73% introduction-to-LOI success rate.",
          url: "/services/private-equity-fundraising"
        }}
      />
    </div>
  );
}