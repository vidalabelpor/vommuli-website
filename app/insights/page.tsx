import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Capital Markets Insights | Investment Trends & Fundraising Intelligence | Vommuli Ventures',
  description: 'Expert insights on capital markets, investment trends, fundraising strategies, and institutional investor preferences. Deep analysis of venture capital, private equity, and growth capital markets.',
  keywords: [
    'capital markets insights',
    'investment trends analysis',
    'fundraising market intelligence',
    'institutional investor preferences',
    'venture capital trends',
    'private equity market analysis',
    'growth capital insights',
    'capital introduction best practices',
    'fundraising strategies',
    'investor behavior analysis',
    'market timing strategies',
    'institutional allocation trends'
  ],
  openGraph: {
    title: 'Capital Markets Insights | Investment Trends & Fundraising Intelligence',
    description: 'Expert insights on capital markets, investment trends, and institutional fundraising strategies.',
    url: 'https://vommuli.com/insights',
  },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDNDBGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Capital Markets
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Insights & Intelligence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Expert analysis of capital markets trends, institutional investor behavior, and fundraising strategies. Deep insights to guide your capital raising success in an evolving investment landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-purple-300 text-sm font-medium">🔥 Featured Analysis</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest Market Intelligence
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real-time analysis of capital markets, investor preferences, and fundraising strategies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Article 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                    Market Analysis
                  </div>
                  <span className="text-slate-400 text-sm ml-auto">December 2024</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Q4 2024 Institutional Allocation Trends: Shift Toward Alternative Investments
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Analysis of institutional investor allocation patterns showing 23% increase in alternative investment commitments, driven by pension fund diversification strategies and endowment model adoption.
                </p>
                
                <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  <span>Read Analysis</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Featured Article 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-medium">
                    Fundraising Strategy
                  </div>
                  <span className="text-slate-400 text-sm ml-auto">December 2024</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  The Rise of Sector-Specific Capital Introduction: AI and Healthcare Leading Demand
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Deep dive into specialized capital introduction trends, with AI/tech funds capturing 34% of VC introductions and healthcare funds seeing 67% success rates in institutional placement.
                </p>
                
                <div className="flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                  <span>Read Analysis</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Featured Article 3 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-red-600/20 group-hover:from-pink-600/30 group-hover:to-red-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-pink-500/30 group-hover:border-pink-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-xs font-medium">
                    Regulatory Impact
                  </div>
                  <span className="text-slate-400 text-sm ml-auto">November 2024</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                  SEC Capital Introduction Rule Changes: Impact on Fund Marketing and Investor Relations
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Comprehensive analysis of recent SEC amendments affecting capital introduction practices, including new disclosure requirements and their implications for fund managers and intermediaries.
                </p>
                
                <div className="flex items-center text-pink-400 font-medium group-hover:text-pink-300 transition-colors">
                  <span>Read Analysis</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Dashboard */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/40 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Real-Time Market Intelligence Dashboard
                </h2>
                <p className="text-xl text-slate-400">Key metrics and trends shaping institutional capital markets</p>
              </div>
              
              <div className="grid lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-2">$2.1T</div>
                  <p className="text-slate-300 text-sm mb-1">Alternative Assets AUM</p>
                  <p className="text-green-400 text-xs">↑ 12.3% YoY</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-indigo-400 mb-2">18.2%</div>
                  <p className="text-slate-300 text-sm mb-1">Target Alt Allocation</p>
                  <p className="text-green-400 text-xs">↑ 2.1% YoY</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-pink-400 mb-2">156</div>
                  <p className="text-slate-300 text-sm mb-1">Days Avg Fundraise</p>
                  <p className="text-red-400 text-xs">↑ 23 days</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">67%</div>
                  <p className="text-slate-300 text-sm mb-1">Intro Success Rate</p>
                  <p className="text-green-400 text-xs">↑ 5.2%</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Most Active Investor Types</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Family Offices</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-slate-700 rounded-full mr-3">
                          <div className="w-28 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                        <span className="text-purple-400 font-medium">87%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Pension Funds</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-slate-700 rounded-full mr-3">
                          <div className="w-24 h-2 bg-indigo-500 rounded-full"></div>
                        </div>
                        <span className="text-indigo-400 font-medium">76%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Endowments</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-slate-700 rounded-full mr-3">
                          <div className="w-20 h-2 bg-pink-500 rounded-full"></div>
                        </div>
                        <span className="text-pink-400 font-medium">64%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Insurance Companies</span>
                      <div className="flex items-center">
                        <div className="w-32 h-2 bg-slate-700 rounded-full mr-3">
                          <div className="w-16 h-2 bg-cyan-500 rounded-full"></div>
                        </div>
                        <span className="text-cyan-400 font-medium">52%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Fastest Growing Strategies</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">AI & Deep Tech</h4>
                        <p className="text-slate-300 text-sm">+34% capital introduction requests YoY</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Healthcare & Biotech</h4>
                        <p className="text-slate-300 text-sm">+28% institutional interest growth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Climate & ESG</h4>
                        <p className="text-slate-300 text-sm">+21% allocation commitments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <span className="text-white text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Digital Infrastructure</h4>
                        <p className="text-slate-300 text-sm">+19% investor demand increase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep analysis across all aspects of institutional capital markets and fundraising strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Market Analysis */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Market Analysis</h3>
                <p className="text-slate-300 mb-4">Real-time analysis of capital markets trends, investor behavior, and allocation patterns.</p>
                <span className="text-purple-400 text-sm font-medium">12 Articles →</span>
              </div>
            </div>
            
            {/* Fundraising Strategy */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 group-hover:from-indigo-600/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Fundraising Strategy</h3>
                <p className="text-slate-300 mb-4">Best practices for capital raising, investor targeting, and introduction process optimization.</p>
                <span className="text-indigo-400 text-sm font-medium">8 Articles →</span>
              </div>
            </div>
            
            {/* Regulatory Updates */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 group-hover:from-cyan-600/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Regulatory Updates</h3>
                <p className="text-slate-300 mb-4">Latest SEC, FINRA, and international regulatory changes affecting capital introduction.</p>
                <span className="text-cyan-400 text-sm font-medium">6 Articles →</span>
              </div>
            </div>
            
            {/* Investor Profiles */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20 group-hover:from-teal-600/30 group-hover:to-green-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-teal-500/30 group-hover:border-teal-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-teal-400 mb-3">Investor Profiles</h3>
                <p className="text-slate-300 mb-4">Deep dives into institutional investor preferences, allocation strategies, and decision processes.</p>
                <span className="text-teal-400 text-sm font-medium">10 Articles →</span>
              </div>
            </div>
            
            {/* Technology & Innovation */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 group-hover:from-green-600/30 group-hover:to-emerald-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Technology & Innovation</h3>
                <p className="text-slate-300 mb-4">How technology is transforming capital introduction and investor relations.</p>
                <span className="text-green-400 text-sm font-medium">5 Articles →</span>
              </div>
            </div>
            
            {/* Case Studies */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 group-hover:from-emerald-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Case Studies</h3>
                <p className="text-slate-300 mb-4">Real-world examples of successful capital introductions and fundraising strategies.</p>
                <span className="text-emerald-400 text-sm font-medium">7 Articles →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-pink-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-purple-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                  <span className="text-purple-300 text-sm font-medium">📧 Stay Informed</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Weekly Capital Markets Intelligence
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Receive our weekly newsletter with the latest capital markets insights, investor behavior analysis, and fundraising best practices.
                </p>
                
                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your professional email"
                      className="flex-1 px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 whitespace-nowrap"
                    >
                      <span className="relative z-10">Subscribe</span>
                    </button>
                  </div>
                </form>
                
                <p className="text-slate-400 mt-6 text-sm">
                  Join 2,500+ institutional investment professionals • Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}