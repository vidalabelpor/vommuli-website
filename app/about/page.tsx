import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vommuli Ventures | Expert Financial Capital Introduction Services',
  description: 'Learn about Vommuli Ventures\' expertise in connecting growth companies with institutional investors. Our team facilitates venture capital, private equity, and strategic capital introductions worldwide.',
  keywords: [
    'financial capital introduction experts',
    'institutional fundraising advisors',
    'venture capital introduction team',
    'private equity connections',
    'capital raising specialists',
    'investment banking professionals',
    'fundraising consultants',
    'institutional investor relations',
    'capital introduction success rate',
    'professional fundraising services'
  ],
  openGraph: {
    title: 'About Vommuli Ventures | Expert Financial Capital Introduction Services',
    description: 'Expert team connecting growth companies with institutional investors through specialized capital introduction services.',
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
              <span className="text-blue-300 text-sm font-medium">🏛️ Institutional Capital Specialists</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Expert Financial Capital
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Introduction Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Connecting growth companies with institutional investors through proven expertise, extensive networks, and a track record of successful capital introductions across venture capital, private equity, and strategic funding rounds.
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
                Bridging Capital Gaps with
                <span className="block text-blue-400">Institutional Expertise</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                At Vommuli Ventures, we specialize in facilitating high-quality capital introductions between institutional investment managers and qualified investors. Our deep understanding of both sides of the capital equation enables us to create meaningful, long-term relationships that drive business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Institutional Focus</h3>
                    <p className="text-slate-300">Exclusively serving institutional-quality investment managers and their capital raising needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Network</h3>
                    <p className="text-slate-300">Extensive relationships with pension funds, endowments, family offices, and institutional allocators.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Success-Driven Process</h3>
                    <p className="text-slate-300">Structured approach with clear milestones, reporting, and accountability throughout the introduction process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-8">Our Track Record</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-400 mb-2">$2.8B+</div>
                    <p className="text-slate-300 text-sm">Capital Introduced</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-indigo-400 mb-2">150+</div>
                    <p className="text-slate-300 text-sm">Successful Introductions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">67%</div>
                    <p className="text-slate-300 text-sm">Conversion Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-400 mb-2">12+</div>
                    <p className="text-slate-300 text-sm">Years Experience</p>
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
              Institutional Capital Introduction Experts
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our team combines decades of institutional investment experience with deep capital markets expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Institutional Experience</h3>
                <p className="text-slate-300 mb-4">Former investment professionals from leading pension funds, endowments, and family offices.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 20+ years average experience</li>
                  <li>• Series 7, 66 licenses</li>
                  <li>• CFA, CAIA certifications</li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Global Network</h3>
                <p className="text-slate-300 mb-4">Extensive relationships across North America, Europe, and Asia-Pacific regions.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 500+ investor relationships</li>
                  <li>• Multi-regional coverage</li>
                  <li>• Cross-border expertise</li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Market Intelligence</h3>
                <p className="text-slate-300 mb-4">Deep understanding of allocation trends, investor preferences, and market timing.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Real-time market insights</li>
                  <li>• Investor preference mapping</li>
                  <li>• Allocation trend analysis</li>
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
              Our proven methodology ensures efficient, high-quality introductions with clear accountability and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-green-400 mb-3">Assessment & Strategy</h3>
              <p className="text-slate-300 text-sm">Comprehensive review of investment strategy, track record, and capital raising objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-teal-400 mb-3">Investor Identification</h3>
              <p className="text-slate-300 text-sm">Targeted identification of qualified institutional investors aligned with your strategy and terms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-3">Introduction & Facilitation</h3>
              <p className="text-slate-300 text-sm">Professional introductions with ongoing meeting facilitation and relationship management.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-indigo-400 mb-3">Ongoing Support</h3>
              <p className="text-slate-300 text-sm">Continued relationship support and additional introductions throughout the capital raising process.</p>
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
                  <span className="text-blue-300 text-sm font-medium">🚀 Ready to Connect?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Capital Introduction Process
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our institutional capital introduction experts to discuss your fundraising objectives and explore how we can accelerate your capital raising success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Schedule Consultation</span>
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
                  Confidential consultation. Serving institutional investment managers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}