import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vommuli Ventures | Series A Funding & Startup Advisory Experts',
  description: 'Learn about Vommuli Ventures\' expertise in Series A funding advisory, pitch deck optimization, and VC introductions for high-growth startups. $500M+ raised for 200+ clients.',
  keywords: [
    'Series A funding experts',
    'startup fundraising consultants',
    'venture capital advisory team',
    'pitch deck optimization specialists',
    'startup investment readiness',
    'Series A preparation experts',
    'VC introduction specialists',
    'fundraising success rate',
    'startup advisory services',
    'Series A consulting experts'
  ],
  openGraph: {
    title: 'About Vommuli Ventures | Series A Funding & Startup Advisory Experts',
    description: 'Expert team helping startups successfully raise Series A funding with proven track record of $500M+ raised.',
    url: 'https://vommuli.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzM5OEVGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">🚀 Series A Funding Specialists</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Series A Funding Experts
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                For High-Growth Startups
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Helping ambitious entrepreneurs successfully raise Series A funding through expert advisory services, optimized pitch decks, investor introductions, and proven strategies that have generated $500M+ in funding for 200+ startups.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Expertise */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
                <span className="text-blue-300 text-sm font-medium">🎯 Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Empowering Startups with
                <span className="block text-blue-400">Series A Success</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                At Vommuli Ventures, we specialize in Series A funding advisory services that transform ambitious startups into investment-ready companies. Our deep understanding of venture capital markets, investor preferences, and startup scaling enables us to guide entrepreneurs through successful fundraising journeys that accelerate business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Series A Specialization</h3>
                    <p className="text-slate-300">Exclusively focused on Series A funding for validated startups with proven product-market fit and growth metrics.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">VC Network Access</h3>
                    <p className="text-slate-300">Extensive relationships with 150+ tier-1 and tier-2 venture capital firms specializing in Series A investments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Methodology</h3>
                    <p className="text-slate-300">4-step systematic approach with clear milestones, from investment readiness to successful term sheet negotiations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-8">Series A Success Metrics</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-400 mb-2">$500M+</div>
                    <p className="text-slate-300 text-sm">Series A Capital Raised</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-indigo-400 mb-2">200+</div>
                    <p className="text-slate-300 text-sm">Startups Funded</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">85%</div>
                    <p className="text-slate-300 text-sm">Success Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-400 mb-2">6.2</div>
                    <p className="text-slate-300 text-sm">Avg Weeks to Term Sheet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm mb-6">
              <span className="text-indigo-300 text-sm font-medium">👥 Our Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Series A Funding & Startup Advisory Experts
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our team combines decades of venture capital experience with deep startup ecosystem expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Venture Capital Experience</h3>
                <p className="text-slate-300 mb-4">Former investment professionals from leading venture capital firms and growth equity funds.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 15+ years average VC experience</li>
                  <li>• Series 7, 63, 65 licenses</li>
                  <li>• CFA, MBA credentials</li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">VC Network</h3>
                <p className="text-slate-300 mb-4">Extensive relationships with tier-1 and tier-2 venture capital firms across key markets.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 150+ VC firm relationships</li>
                  <li>• Silicon Valley, NYC, Austin coverage</li>
                  <li>• Series A specialization focus</li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Startup Intelligence</h3>
                <p className="text-slate-300 mb-4">Deep understanding of startup scaling, investor preferences, and market timing for Series A.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Real-time VC market insights</li>
                  <li>• Investor thesis mapping</li>
                  <li>• Series A trend analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">⚡ Our Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Structured Capital Introduction Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our systematic 4-step approach ensures successful Series A fundraising with clear milestones and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Investment Readiness</h3>
              <p className="text-slate-300 text-sm">Comprehensive assessment of your startup's readiness for Series A funding and optimization plan.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-teal-400 mb-3">VC Targeting & Strategy</h3>
              <p className="text-slate-300 text-sm">Strategic identification of Series A venture capital firms aligned with your sector, stage, and check size.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-3">Warm VC Introductions</h3>
              <p className="text-slate-300 text-sm">Leveraging our network for warm introductions to target VCs with ongoing pitch coaching and support.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Deal Closing Support</h3>
              <p className="text-slate-300 text-sm">Due diligence coordination, term sheet negotiation guidance, and closing process management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-blue-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                  <span className="text-blue-300 text-sm font-medium">🚀 Ready to Raise Series A?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Series A Journey
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our Series A funding experts to assess your investment readiness and explore how we can accelerate your startup's path to successful Series A funding.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get Investment Readiness Assessment</span>
                  </button>
                  
                  <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                    <span className="flex items-center">
                      View Our Services
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <p className="text-slate-400 mt-8 text-lg">
                  Free assessment. Serving ambitious startups ready for Series A funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}