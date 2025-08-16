import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Venture Capital Introduction Services | Series A, B, C Funding | Vommuli Ventures',
  description: 'Expert venture capital introduction services connecting growth companies with tier-1 VC firms. Specialized in Series A, B, C funding rounds with 67% introduction-to-term-sheet success rate.',
  keywords: [
    'venture capital introduction',
    'VC introduction services',
    'Series A funding introduction',
    'Series B funding introduction', 
    'Series C funding introduction',
    'venture capital fundraising',
    'VC firm connections',
    'startup funding advisory',
    'growth company financing',
    'institutional VC introductions',
    'tech startup funding',
    'venture capital advisory',
    'VC network access',
    'startup capital raising',
    'venture funding strategy',
    'VC pitch preparation',
    'venture capital consultants',
    'startup fundraising experts',
    'VC introduction specialists',
    'venture capital placement'
  ],
  openGraph: {
    title: 'Venture Capital Introduction Services | Series A, B, C Funding',
    description: 'Expert VC introduction services with 67% success rate connecting growth companies with tier-1 venture capital firms.',
    url: 'https://vommuli.com/services/venture-capital-introduction',
  },
};

export default function VentureCapitalIntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5NTVGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-violet-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-violet-300 text-sm font-medium">🚀 Venture Capital Introduction</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Premier Venture Capital
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Introduction Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Connect with tier-1 venture capital firms for Series A, B, C funding rounds. Our proven introduction process delivers a 67% introduction-to-term-sheet success rate, accelerating your path to institutional growth capital.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start VC Introduction Process</span>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center">
                  Download VC Fundraising Guide
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="relative py-16 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30">
              <div className="text-4xl font-black text-violet-400 mb-2">67%</div>
              <p className="text-slate-300 text-sm mb-1">Introduction to Term Sheet Rate</p>
              <p className="text-green-400 text-xs">↑ 12% above industry average</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
              <div className="text-4xl font-black text-purple-400 mb-2">200+</div>
              <p className="text-slate-300 text-sm mb-1">Tier-1 VC Firm Network</p>
              <p className="text-blue-400 text-xs">Global coverage</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30">
              <div className="text-4xl font-black text-indigo-400 mb-2">$2.8B</div>
              <p className="text-slate-300 text-sm mb-1">Capital Raised Through Introductions</p>
              <p className="text-green-400 text-xs">Last 24 months</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-4xl font-black text-cyan-400 mb-2">4.2M</div>
              <p className="text-slate-300 text-sm mb-1">Average Days to First Meeting</p>
              <p className="text-green-400 text-xs">↓ 35% faster than industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* VC Introduction Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 backdrop-blur-sm mb-6">
              <span className="text-violet-300 text-sm font-medium">🎯 Our Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven VC Introduction Methodology
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Systematic approach optimized for maximum VC engagement and accelerated fundraising success.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-violet-400 mb-3">Strategic Positioning & Market Analysis</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Comprehensive assessment of your company's market position, competitive landscape, and growth trajectory. We analyze your business model, traction metrics, and scalability potential to develop compelling VC positioning materials.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">VC Firm Identification & Qualification</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Targeted identification of VCs based on sector focus, stage preference, check size, and portfolio fit. We leverage our network of 200+ tier-1 firms to identify optimal matches for your specific funding requirements and growth stage.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-indigo-400 mb-3">Professional Introduction & Facilitation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Strategic introductions leveraging our established relationships with VC partners and investment teams. We provide context, positioning, and ongoing facilitation to maximize engagement probability and accelerate the meeting process.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-lg font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Ongoing Relationship Management</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Continuous support throughout the due diligence process, including meeting coordination, follow-up management, and strategic guidance to navigate VC evaluation processes and term sheet negotiations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-violet-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">VC Introduction Timeline</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Strategy Development</span>
                    <span className="text-violet-400 font-medium">2-3 weeks</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">VC Identification & Qualification</span>
                    <span className="text-purple-400 font-medium">3-4 weeks</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Introduction Phase</span>
                    <span className="text-indigo-400 font-medium">4-8 weeks</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Due Diligence Support</span>
                    <span className="text-cyan-400 font-medium">8-16 weeks</span>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-600">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total Engagement</span>
                      <span className="text-green-400 font-bold">3-9 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VC Firm Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tier-1 VC Network Access
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct relationships with leading venture capital firms across all major categories and investment stages.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-violet-400 mb-4 text-center">Tier-1 Institutional VCs</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>• Andreessen Horowitz category firms</p>
                <p>• Sequoia Capital tier partners</p>
                <p>• General Catalyst network</p>
                <p>• Insight Partners level funds</p>
                <p>• $500M+ AUM institutional VCs</p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Sector-Focused VCs</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>• AI & Deep Tech specialists</p>
                <p>• Healthcare & Biotech funds</p>
                <p>• Fintech & Enterprise focused</p>
                <p>• Climate & ESG investors</p>
                <p>• Vertical SaaS specialists</p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4 text-center">Global VC Partners</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>• US East & West Coast funds</p>
                <p>• European growth investors</p>
                <p>• Asia-Pacific expansion VCs</p>
                <p>• Cross-border investment funds</p>
                <p>• International growth capital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Stage Expertise */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Funding Stage Specialization
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert guidance across all venture capital funding stages with specialized approaches for each phase.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Series A */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20"></div>
              <div className="relative p-8 border border-emerald-500/30">
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-emerald-400 mb-2">Series A</div>
                  <p className="text-slate-300">Product-Market Fit Funding</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Typical Range</span>
                    <span className="text-emerald-400">$2M - $20M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Revenue Requirement</span>
                    <span className="text-emerald-400">$1M+ ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Introduction Success</span>
                    <span className="text-emerald-400">72%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Key Focus Areas:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Product-market fit validation</li>
                    <li>• Go-to-market strategy</li>
                    <li>• Team scaling preparation</li>
                    <li>• Unit economics optimization</li>
                    <li>• Market expansion readiness</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Series B */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
              <div className="relative p-8 border border-blue-500/30">
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-blue-400 mb-2">Series B</div>
                  <p className="text-slate-300">Growth Acceleration</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Typical Range</span>
                    <span className="text-blue-400">$10M - $50M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Revenue Requirement</span>
                    <span className="text-blue-400">$5M+ ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Introduction Success</span>
                    <span className="text-blue-400">68%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Key Focus Areas:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Revenue growth acceleration</li>
                    <li>• Market share expansion</li>
                    <li>• Operational scaling</li>
                    <li>• International expansion</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Series C+ */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20"></div>
              <div className="relative p-8 border border-purple-500/30">
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-purple-400 mb-2">Series C+</div>
                  <p className="text-slate-300">Pre-IPO Scaling</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Typical Range</span>
                    <span className="text-purple-400">$25M - $200M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Revenue Requirement</span>
                    <span className="text-purple-400">$20M+ ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Introduction Success</span>
                    <span className="text-purple-400">61%</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Key Focus Areas:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• IPO preparation support</li>
                    <li>• Global market leadership</li>
                    <li>• M&A opportunities</li>
                    <li>• Public market readiness</li>
                    <li>• Exit strategy development</li>
                  </ul>
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
              question: "What is the success rate for venture capital introductions?",
              answer: "Our venture capital introduction service achieves a 67% introduction-to-term-sheet success rate, which is 12% above the industry average. This high success rate is achieved through our rigorous VC qualification process and strategic positioning approach."
            },
            {
              question: "How long does the VC introduction process take?",
              answer: "The complete VC introduction process typically takes 3-9 months, including 2-3 weeks for strategy development, 3-4 weeks for VC identification, 4-8 weeks for the introduction phase, and 8-16 weeks for due diligence support."
            },
            {
              question: "What funding stages do you support for VC introductions?",
              answer: "We support all venture capital funding stages: Series A ($2M-$20M, requiring $1M+ ARR), Series B ($10M-$50M, requiring $5M+ ARR), and Series C+ ($25M-$200M, requiring $20M+ ARR). Each stage has specialized approaches and VC network access."
            },
            {
              question: "How many VC firms are in your network?",
              answer: "Our network includes 200+ tier-1 venture capital firms globally, including institutional VCs like Andreessen Horowitz-tier firms, sector-focused specialists in AI/healthcare/fintech, and international growth capital partners across US, Europe, and Asia-Pacific markets."
            },
            {
              question: "What sectors do you specialize in for VC introductions?",
              answer: "We specialize in high-growth sectors including AI & deep technology, healthcare & biotech, fintech & enterprise software, climate & ESG investments, and vertical SaaS platforms. Our sector expertise includes dedicated VC networks for each vertical."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Venture Capital Introduction Services",
          description: "Expert venture capital introduction services connecting growth companies with tier-1 VC firms for Series A, B, C funding rounds with 67% introduction-to-term-sheet success rate.",
          url: "/services/venture-capital-introduction"
        }}
      />
    </div>
  );
}