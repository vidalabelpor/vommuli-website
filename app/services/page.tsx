import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Financial Capital Introduction Services | Complete Service Portfolio | Vommuli Ventures',
  description: 'Comprehensive financial capital introduction services including venture capital, private equity, growth capital, M&A advisory, and specialized sector funding for AI, healthcare, and infrastructure.',
  keywords: [
    'financial capital introduction services',
    'venture capital introduction',
    'private equity fundraising',
    'growth capital advisory',
    'M&A advisory services',
    'AI tech funding advisory',
    'healthcare medtech funding',
    'digital infrastructure funding',
    'institutional capital raising',
    'professional fundraising services',
    'investor connections',
    'capital raising consultants'
  ],
  openGraph: {
    title: 'Financial Capital Introduction Services | Complete Service Portfolio',
    description: 'Comprehensive financial capital introduction services across all funding stages and industry sectors.',
    url: 'https://vommuli.com/services',
  },
};

export default function ServicesPage() {
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
              <span className="text-blue-300 text-sm font-medium">🎯 Our Services</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Comprehensive Capital
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Introduction Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              End-to-end capital introduction services across all funding stages, from early-stage venture capital to growth equity, private equity, and strategic M&A transactions. Specialized expertise in high-growth sectors and institutional requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">🏗️ Service Portfolio</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Complete Capital Introduction Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Tailored services for every stage of growth and industry specialization, backed by deep institutional expertise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* By Stage */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30 h-full">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">By Funding Stage</h3>
                  <p className="text-slate-300">Specialized services aligned with your capital raising stage and growth phase.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Seed & Early Stage</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Series A, B, C Growth</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Growth & Expansion</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Private Equity</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">M&A & Exit</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* By Sector */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/30 h-full">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">By Industry Sector</h3>
                  <p className="text-slate-300">Deep sector expertise across high-growth industries and emerging technologies.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">AI & Deep Technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Healthcare & MedTech</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Digital Infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Climate & Clean Tech</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Fintech & Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* By Service Type */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/30 h-full">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">By Service Type</h3>
                  <p className="text-slate-300">Comprehensive support from strategy to execution and ongoing relationship management.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Capital Introduction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Investor Relations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Fundraising Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">M&A Advisory</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Market Intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Core Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Proven methodologies and extensive networks across all major funding categories and growth stages.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Venture Capital Introduction */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 group-hover:from-violet-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-violet-500/30 group-hover:border-violet-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-violet-400 mb-3">Venture Capital Introduction</h3>
                    <p className="text-slate-300 mb-4">Connect with top-tier VC firms for Series A, B, C funding rounds. Expert positioning for technology and growth companies.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Target Funding</h4>
                    <p className="text-slate-300 text-sm">$1M - $100M+ rounds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Typical Timeline</h4>
                    <p className="text-slate-300 text-sm">3-9 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-slate-300 text-sm">67% introduction to term sheet</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">VC Network</h4>
                    <p className="text-slate-300 text-sm">200+ tier-1 VC firms</p>
                  </div>
                </div>
                
                <a href="/venture-capital-introduction" className="inline-flex items-center text-violet-400 hover:text-violet-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                  Learn More About VC Introduction
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Private Equity Fundraising */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 group-hover:from-indigo-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-indigo-400 mb-3">Private Equity Fundraising</h3>
                    <p className="text-slate-300 mb-4">Strategic connections with PE firms for growth capital, buyouts, and expansion financing for established companies.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Target Funding</h4>
                    <p className="text-slate-300 text-sm">$10M - $500M+ rounds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Typical Timeline</h4>
                    <p className="text-slate-300 text-sm">6-18 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-slate-300 text-sm">73% introduction to LOI</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">PE Network</h4>
                    <p className="text-slate-300 text-sm">150+ PE firms globally</p>
                  </div>
                </div>
                
                <a href="/private-equity-fundraising" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                  Learn More About PE Fundraising
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* M&A Advisory */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 group-hover:from-cyan-600/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">M&A Advisory</h3>
                    <p className="text-slate-300 mb-4">Strategic transaction advisory connecting companies with strategic buyers and financial sponsors for acquisition opportunities.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Transaction Size</h4>
                    <p className="text-slate-300 text-sm">$25M - $1B+ valuations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Process Timeline</h4>
                    <p className="text-slate-300 text-sm">6-12 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Completion Rate</h4>
                    <p className="text-slate-300 text-sm">78% to closing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Buyer Network</h4>
                    <p className="text-slate-300 text-sm">500+ strategic acquirers</p>
                  </div>
                </div>
                
                <a href="/ma-advisory" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                  Learn More About M&A Advisory
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Growth Capital Advisory */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 group-hover:from-emerald-600/30 group-hover:to-green-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-3">Growth Capital Advisory</h3>
                    <p className="text-slate-300 mb-4">Bridge funding between venture capital and private equity for scaling companies with proven business models.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Target Funding</h4>
                    <p className="text-slate-300 text-sm">$5M - $200M rounds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Typical Timeline</h4>
                    <p className="text-slate-300 text-sm">4-8 months</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-slate-300 text-sm">71% introduction to funding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Growth Investors</h4>
                    <p className="text-slate-300 text-sm">100+ growth equity firms</p>
                  </div>
                </div>
                
                <a href="/growth-capital-advisory" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group-hover:translate-x-1 transition-all duration-300">
                  Learn More About Growth Capital
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Sector Services */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
              <span className="text-red-300 text-sm font-medium">🏭 Sector Specialization</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Specialized Sector Expertise
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain expertise in high-growth sectors with specialized investor networks and industry knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI & Tech */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">AI & Tech Funding Advisory</h3>
                <p className="text-slate-300 mb-6">Specialized expertise in AI, machine learning, and deep technology funding with technical due diligence support.</p>
                <a href="/ai-tech-funding-advisory" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center">
                  Explore AI Tech Services
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Healthcare & MedTech */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 group-hover:from-red-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-red-500/30 group-hover:border-red-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Healthcare & MedTech Funding</h3>
                <p className="text-slate-300 mb-6">Navigate complex healthcare financing with expertise in regulatory pathways and clinical validation requirements.</p>
                <a href="/healthcare-medtech-funding" className="text-red-400 hover:text-red-300 font-medium inline-flex items-center">
                  Explore Healthcare Services
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Digital Infrastructure */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Digital Infrastructure Funding</h3>
                <p className="text-slate-300 mb-6">Specialized in data centers, cloud infrastructure, 5G networks, and edge computing capital deployment.</p>
                <a href="/digital-infrastructure-funding" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                  Explore Infrastructure Services
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Structured methodology ensuring optimal outcomes across all service categories and engagement types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Strategy & Assessment</h3>
              <p className="text-slate-300">Comprehensive evaluation of funding needs, market positioning, and investor targeting strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Investor Identification</h3>
              <p className="text-slate-300">Targeted identification and qualification of optimal investors based on strategy, sector, and stage.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Introduction & Facilitation</h3>
              <p className="text-slate-300">Professional introductions with ongoing meeting coordination and relationship facilitation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Ongoing Support</h3>
              <p className="text-slate-300">Continued relationship management and support through transaction completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">❓ Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Capital Introduction Services FAQ
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Common questions about our capital introduction process, timing, and service offerings.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What types of capital introduction services do you provide?</h3>
              <p className="text-slate-300">
                We provide comprehensive capital introduction services across all funding stages: venture capital introductions (Series A, B, C), private equity fundraising ($10M-$500M+), growth capital advisory, M&A transaction advisory, and specialized sector funding for AI/tech, healthcare, and digital infrastructure. Our services include investor identification, strategic positioning, introduction facilitation, and ongoing relationship management.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What are the typical success rates for capital introductions?</h3>
              <p className="text-slate-300">
                Our success rates vary by service: 67% introduction-to-term-sheet rate for venture capital, 73% introduction-to-LOI rate for private equity, 71% introduction-to-funding rate for growth capital, and 78% completion rate for M&A transactions. These rates reflect our rigorous investor qualification process and strategic approach to matching companies with appropriate capital sources.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">How long does a typical capital introduction engagement take?</h3>
              <p className="text-slate-300">
                Engagement timelines depend on the service type: venture capital introductions typically take 3-9 months, private equity fundraising requires 6-18 months, growth capital advisory takes 4-8 months, and M&A transactions generally require 6-12 months. The process includes strategy development (2-4 weeks), investor identification (4-8 weeks), and active introduction phases with ongoing support.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What size companies and funding rounds do you work with?</h3>
              <p className="text-slate-300">
                We work with institutional-quality companies across various funding sizes: venture capital rounds from $1M to $100M+, private equity transactions from $10M to $500M+, growth capital raises from $5M to $200M, and M&A transactions with valuations from $25M to $1B+. Our minimum engagement threshold is typically companies seeking $1M+ in institutional capital or established companies with strong growth trajectories.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Do you provide services for international companies and cross-border transactions?</h3>
              <p className="text-slate-300">
                Yes, we provide global capital introduction services with primary coverage in North America, Europe, and Asia-Pacific markets. Our international network includes 200+ venture capital firms, 150+ private equity firms globally, and 500+ strategic acquirers across multiple jurisdictions. We specialize in cross-border transactions and have experience with regulatory requirements in major international markets.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What industries and sectors do you specialize in?</h3>
              <p className="text-slate-300">
                We provide both generalist capital introduction services and deep sector expertise in high-growth industries: AI & deep technology (34% increase in introduction requests YoY), healthcare & medical technology (67% institutional placement success rate), digital infrastructure & cloud technologies, climate & ESG investments, fintech & enterprise software. Our sector specialists have deep domain knowledge and dedicated investor networks for each vertical.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">How do you ensure confidentiality during the capital introduction process?</h3>
              <p className="text-slate-300">
                We maintain strict confidentiality protocols throughout all engagements. All initial consultations are completely confidential, we execute comprehensive NDAs before any information sharing, investor introductions are made only with explicit client approval, and we follow professional investment banking confidentiality standards. We never share client information, strategy details, or fundraising plans without written consent.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-blue-400 mb-3">What information do you need to begin a capital introduction engagement?</h3>
              <p className="text-slate-300">
                To begin an engagement, we typically need: company overview and business model description, current financial performance and projections, target funding amount and intended use of capital, preferred investor types and geographic preferences, existing investor relationships and any constraints, management team backgrounds, and fundraising timeline requirements. We conduct a comprehensive assessment during the initial consultation phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-blue-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                  <span className="text-blue-300 text-sm font-medium">🚀 Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Accelerate Your Capital Raising Success
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our capital introduction experts to discuss your specific funding needs and discover how our proven process can accelerate your access to the right investors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Schedule Consultation</span>
                  </button>
                  
                  <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                    <span className="flex items-center">
                      Download Service Overview
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
                
                <p className="text-slate-400 text-lg">
                  Confidential consultation • Serving institutional-quality companies worldwide
                </p>
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
              question: "What types of capital introduction services do you provide?",
              answer: "We provide comprehensive capital introduction services across all funding stages: venture capital introductions (Series A, B, C), private equity fundraising ($10M-$500M+), growth capital advisory, M&A transaction advisory, and specialized sector funding for AI/tech, healthcare, and digital infrastructure. Our services include investor identification, strategic positioning, introduction facilitation, and ongoing relationship management."
            },
            {
              question: "What are the typical success rates for capital introductions?",
              answer: "Our success rates vary by service: 67% introduction-to-term-sheet rate for venture capital, 73% introduction-to-LOI rate for private equity, 71% introduction-to-funding rate for growth capital, and 78% completion rate for M&A transactions. These rates reflect our rigorous investor qualification process and strategic approach to matching companies with appropriate capital sources."
            },
            {
              question: "How long does a typical capital introduction engagement take?",
              answer: "Engagement timelines depend on the service type: venture capital introductions typically take 3-9 months, private equity fundraising requires 6-18 months, growth capital advisory takes 4-8 months, and M&A transactions generally require 6-12 months. The process includes strategy development (2-4 weeks), investor identification (4-8 weeks), and active introduction phases with ongoing support."
            },
            {
              question: "What size companies and funding rounds do you work with?",
              answer: "We work with institutional-quality companies across various funding sizes: venture capital rounds from $1M to $100M+, private equity transactions from $10M to $500M+, growth capital raises from $5M to $200M, and M&A transactions with valuations from $25M to $1B+. Our minimum engagement threshold is typically companies seeking $1M+ in institutional capital or established companies with strong growth trajectories."
            },
            {
              question: "Do you provide services for international companies and cross-border transactions?",
              answer: "Yes, we provide global capital introduction services with primary coverage in North America, Europe, and Asia-Pacific markets. Our international network includes 200+ venture capital firms, 150+ private equity firms globally, and 500+ strategic acquirers across multiple jurisdictions. We specialize in cross-border transactions and have experience with regulatory requirements in major international markets."
            },
            {
              question: "What industries and sectors do you specialize in?",
              answer: "We provide both generalist capital introduction services and deep sector expertise in high-growth industries: AI & deep technology (34% increase in introduction requests YoY), healthcare & medical technology (67% institutional placement success rate), digital infrastructure & cloud technologies, climate & ESG investments, fintech & enterprise software. Our sector specialists have deep domain knowledge and dedicated investor networks for each vertical."
            },
            {
              question: "How do you ensure confidentiality during the capital introduction process?",
              answer: "We maintain strict confidentiality protocols throughout all engagements. All initial consultations are completely confidential, we execute comprehensive NDAs before any information sharing, investor introductions are made only with explicit client approval, and we follow professional investment banking confidentiality standards. We never share client information, strategy details, or fundraising plans without written consent."
            },
            {
              question: "What information do you need to begin a capital introduction engagement?",
              answer: "To begin an engagement, we typically need: company overview and business model description, current financial performance and projections, target funding amount and intended use of capital, preferred investor types and geographic preferences, existing investor relationships and any constraints, management team backgrounds, and fundraising timeline requirements. We conduct a comprehensive assessment during the initial consultation phase."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Financial Capital Introduction Services",
          description: "Comprehensive capital introduction services including venture capital, private equity, growth capital, M&A advisory, and specialized sector funding for AI, healthcare, and infrastructure.",
          url: "/services"
        }}
      />
    </div>
  );
}