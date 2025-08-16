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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzgzMzNGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-violet-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-violet-300 text-sm font-medium">💎 Elite VC Network Access</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Venture Capital Introduction for
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                High-Growth Companies
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Connect with top-tier venture capital firms and accelerate your growth trajectory. We facilitate Series A, B, C funding rounds and strategic partnerships with leading VC investors globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule VC Strategy Session</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center">
                  Download VC Readiness Guide
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Landscape Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 backdrop-blur-sm mb-6">
              <span className="text-violet-300 text-sm font-medium">📈 Market Intelligence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Venture Capital Market Dynamics
              <span className="block text-3xl lg:text-4xl bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                2024-2025
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Navigate the evolving VC landscape with strategic positioning and elite network access.
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-violet-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-violet-400 mb-3 group-hover:scale-110 transition-transform duration-300">$285B</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Global VC investment in 2024, with 34% focused on AI and emerging tech</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-4">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">12-18</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Average fundraising timeline in months for Series A companies with proven traction</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-blue-600/20 to-indigo-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300">67%</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Warm introduction conversion rate vs 2.3% cold outreach success</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-blue-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">$15M</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Average Series A round size for technology companies in 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Themes */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/40 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  High-Priority VC Investment Themes
                </h3>
                <p className="text-xl text-slate-400">Strategic funding opportunities across growth sectors</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 group-hover:from-violet-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                    <div className="relative p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-xl">🚀</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold text-violet-400">Technology & AI Innovation</h4>
                      </div>
                      <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Artificial Intelligence:</strong> LLMs, computer vision, autonomous systems, AI infrastructure
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Enterprise Software:</strong> SaaS platforms, vertical software, API-first solutions
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Developer Tools:</strong> DevOps, cloud infrastructure, cybersecurity platforms
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Data & Analytics:</strong> Real-time analytics, data infrastructure, business intelligence
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Fintech Innovation:</strong> Embedded finance, digital banking, blockchain applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Climate Technology:</strong> Clean energy, carbon capture, sustainable transportation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
                    <div className="relative p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-xl">📊</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold text-purple-400">Market Requirements</h4>
                      </div>
                      <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Product-Market Fit:</strong> Strong user engagement, retention metrics, and growth trajectory
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Scalable Business Model:</strong> Predictable revenue streams and unit economics
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Market Size:</strong> $1B+ total addressable market with clear expansion pathways
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Competitive Advantage:</strong> Defensible moats through technology, data, or network effects
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Team Excellence:</strong> Experienced leadership with domain expertise and execution track record
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Growth Velocity:</strong> Demonstrated ability to scale efficiently with capital deployment
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 group-hover:from-indigo-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
                    <div className="relative p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-xl">🏆</span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold text-indigo-400">Success Factors</h4>
                      </div>
                      <ul className="space-y-4 text-slate-300">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Strong Unit Economics:</strong> Clear path to profitability with scalable cost structure
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Proven Execution:</strong> Track record of hitting milestones and delivering results
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Market Timing:</strong> Riding macro trends with proper timing and positioning
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Customer Validation:</strong> Strong customer testimonials and expanding user base
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Strategic Vision:</strong> Clear long-term strategy with multiple expansion vectors
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <strong className="text-white">Investment Readiness:</strong> Professional systems, governance, and investor materials
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-violet-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 backdrop-blur-sm mb-8">
                  <span className="text-violet-300 text-sm font-medium">🚀 Ready to Scale?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Ready to Connect with Top-Tier VCs?
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Accelerate your funding timeline with warm introductions to leading venture capital firms. Our elite network and proven process maximize your success rate.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="group relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 group-hover:from-violet-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                    <div className="relative p-6 border border-violet-500/30 group-hover:border-violet-400/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl">🎯</span>
                      </div>
                      <h3 className="text-lg font-bold text-violet-400 mb-2">Strategic Positioning</h3>
                      <p className="text-slate-300">Optimize your story and positioning for maximum VC appeal</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
                    <div className="relative p-6 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl">🤝</span>
                      </div>
                      <h3 className="text-lg font-bold text-purple-400 mb-2">Elite Network Access</h3>
                      <p className="text-slate-300">Direct connections to tier-1 VCs and decision makers</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 group-hover:from-indigo-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
                    <div className="relative p-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-xl">⚡</span>
                      </div>
                      <h3 className="text-lg font-bold text-indigo-400 mb-2">Process Acceleration</h3>
                      <p className="text-slate-300">Streamlined fundraising with expert guidance throughout</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Schedule VC Strategy Consultation</span>
                  </button>
                  
                  <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                    <span className="flex items-center">
                      Submit Funding Inquiry
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <p className="text-slate-400 mt-8 text-lg">
                  Confidential assessment. Serving high-growth companies seeking Series A+ funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}