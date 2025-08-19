'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * end));
      
      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(value);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

// Growth Capital SVG Background Component
function GrowthCapitalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="growthGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
            <stop offset="60%" stopColor="rgb(34, 197, 94)" />
            <stop offset="100%" stopColor="rgb(20, 184, 166)" />
          </linearGradient>
          <linearGradient id="growthGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" />
            <stop offset="60%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
          </linearGradient>
          <radialGradient id="scalingGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
          </radialGradient>
        </defs>
        
        {/* Growth trajectory lines */}
        <path 
          d="M0,600 L300,480 L600,360 L900,240 L1200,120" 
          fill="none" 
          stroke="url(#growthGradient1)" 
          strokeWidth="4"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        <path 
          d="M0,650 L250,530 L500,410 L750,290 L1000,170 L1200,150" 
          fill="none" 
          stroke="url(#growthGradient2)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        />
        
        {/* Growth milestone nodes */}
        <circle cx="300" cy="480" r="35" fill="url(#scalingGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="600" cy="360" r="30" fill="url(#scalingGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        <circle cx="900" cy="240" r="25" fill="url(#scalingGradient)" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
        
        {/* Floating growth indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="500" r="3" fill="rgb(16, 185, 129)" />
          <text x="210" y="505" fill="rgb(16, 185, 129)" fontSize="10" fontFamily="monospace">ARR</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="500" cy="350" r="3" fill="rgb(34, 197, 94)" />
          <text x="510" y="355" fill="rgb(34, 197, 94)" fontSize="10" fontFamily="monospace">%</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="800" cy="200" r="3" fill="rgb(20, 184, 166)" />
          <text x="810" y="205" fill="rgb(20, 184, 166)" fontSize="10" fontFamily="monospace">M</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Growth Card Component
function FloatingGrowthCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(delay * 2) * 8}px)`
      }}
    >
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Growth Capital Advisory Services | Growth Equity Funding | Vommuli Ventures',
  description: 'Expert growth capital advisory services connecting scaling companies with growth equity firms. Strategic financing for revenue-generating businesses ready for accelerated expansion.',
  keywords: [
    'growth capital advisory',
    'growth equity funding',
    'growth stage financing',
    'expansion capital advisory',
    'late stage venture capital',
    'minority growth investments',
    'scaling business funding',
    'institutional growth capital',
    'revenue stage funding',
    'growth equity firms',
    'private growth capital',
    'expansion funding consultants',
    'growth stage fundraising',
    'minority equity investments',
    'proven business model funding',
    'growth capital introductions',
    'scaling company capital',
    'established business financing',
    'revenue growth funding',
    'institutional expansion capital',
    'growth equity placement',
    'professional growth advisory',
    'growth capital consultants',
    'growth stage investors',
    'expansion stage funding',
    'growth equity transactions',
    'scaling business advisory',
    'late venture capital',
    'growth capital raising',
    'expansion equity funding',
    'growth funding specialists',
    'institutional growth investors',
    'growth capital strategies',
    'expansion capital sources',
    'growth equity placements',
    'proven model financing',
    'scaling enterprise funding',
    'growth stage capital',
    'institutional growth funding',
    'professional growth services',
    'growth capital networks',
    'expansion funding advisory',
    'growth equity advisory',
    'institutional expansion funding',
    'scaling company advisory',
    'growth capital placement',
    'expansion stage advisory',
    'growth funding consultancy'
  ],
  openGraph: {
    title: 'Growth Capital Advisory Services | Expert Growth Equity Funding',
    description: 'Strategic growth capital advisory services for scaling companies. Connect with leading growth equity firms for accelerated expansion.',
    url: 'https://vommuli.com/services/growth-capital-advisory',
  },
};

export default function GrowthCapitalAdvisoryPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 relative overflow-hidden">
      <GrowthCapitalBackground />
      
      {/* Professional Growth Capital Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Growth Capital Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Growth Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingGrowthCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Growth Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={71} suffix="%" />
          </div>
        </FloatingGrowthCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingGrowthCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Avg Investment</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={45} prefix="$" suffix="M" />
          </div>
        </FloatingGrowthCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">📈 Growth Capital Advisory</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Growth Capital
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                Advisory Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Strategic growth capital advisory for scaling companies with proven business models. Connect with leading growth equity firms for accelerated expansion and market dominance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Growth Capital Process</span>
              </Link>
              
              <Link 
                href="/tools/investment-readiness-assessment"
                className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center">
                  Growth Readiness Assessment
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Capital Market Statistics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Growth Capital Market Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the growth equity ecosystem with specialized expertise in scaling proven business models to market dominance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20"></div>
              <div className="relative p-8 border border-emerald-500/30 text-center">
                <div className="text-4xl font-black text-emerald-400 mb-2">
                  $<AnimatedCounter end={5} />M-$<AnimatedCounter end={200} />M
                </div>
                <p className="text-slate-300 text-sm mb-1">Typical Growth Funding Range</p>
                <p className="text-green-400 text-xs">Proven scalability focus</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
              <div className="relative p-8 border border-green-500/30 text-center">
                <div className="text-4xl font-black text-green-400 mb-2">
                  <AnimatedCounter end={71} suffix="%" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Introduction to Funding Success</p>
                <p className="text-teal-400 text-xs">Above market average</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-600/20"></div>
              <div className="relative p-8 border border-teal-500/30 text-center">
                <div className="text-4xl font-black text-teal-400 mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Growth Equity Firms Network</p>
                <p className="text-cyan-400 text-xs">Global coverage</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-emerald-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">
                  <AnimatedCounter end={6} /> months
                </div>
                <p className="text-slate-300 text-sm mb-1">Average Timeline</p>
                <p className="text-emerald-400 text-xs">Optimized process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Growth Capital */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
                <span className="text-emerald-300 text-sm font-medium">🔍 Growth Capital Defined</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                The Bridge Between Venture Capital and Private Equity
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Growth capital represents a distinct financing category for revenue-generating companies with proven business models seeking accelerated expansion. Unlike early-stage venture capital, growth equity targets established businesses with demonstrated market traction and clear paths to profitability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Proven Revenue Generation</h3>
                    <p className="text-slate-300">Companies typically generating $10M+ in annual recurring revenue with clear growth trajectories and market validation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Minority Investment Structure</h3>
                    <p className="text-slate-300">Growth equity typically involves minority stakes (15-49%), allowing founders to maintain control while accessing expansion capital.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-400 mb-2">Strategic Value Creation</h3>
                    <p className="text-slate-300">Focus on organic growth acceleration, market expansion, product development, and operational optimization rather than financial engineering.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">Growth Capital Sweet Spot</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Revenue Stage</h4>
                    <p className="text-slate-300 text-sm">$5M - $100M annual revenue with 20%+ growth rates and clear path to profitability or break-even operations.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Market Position</h4>
                    <p className="text-slate-300 text-sm">Established market position with competitive advantages, strong customer retention, and expansion opportunities.</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Management Team</h4>
                    <p className="text-slate-300 text-sm">Experienced leadership with proven execution capability and vision for next growth phase acceleration.</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Growth Catalysts</h4>
                    <p className="text-slate-300 text-sm">Clear growth levers including market expansion, product line extensions, strategic acquisitions, or international expansion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Capital Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🛠️ Growth Capital Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Strategic Growth Capital Advisory Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive methodology designed specifically for growth-stage companies seeking institutional expansion capital.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Growth Assessment & Strategy</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Business Model Analysis</h4>
                      <p className="text-slate-300 text-sm">Comprehensive review of revenue streams, unit economics, market position, and scalability factors.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Growth Vector Identification</h4>
                      <p className="text-slate-300 text-sm">Mapping growth opportunities including geographic expansion, product extensions, and strategic initiatives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Capital Requirements Planning</h4>
                      <p className="text-slate-300 text-sm">Detailed use of proceeds analysis aligned with growth milestones and investor return expectations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Competitive Positioning</h4>
                      <p className="text-slate-300 text-sm">Market differentiation analysis and competitive advantages that attract growth equity investors.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-2">Timeline</div>
                    <div className="text-lg font-semibold text-emerald-400">2-3 weeks</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Growth Investor Targeting</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Growth Equity Firm Mapping</h4>
                      <p className="text-slate-300 text-sm">Identification of growth equity firms aligned with sector focus, investment size, and growth stage preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Investment Thesis Development</h4>
                      <p className="text-slate-300 text-sm">Crafting compelling investment narrative highlighting growth catalysts and value creation opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Investor Prioritization</h4>
                      <p className="text-slate-300 text-sm">Strategic ranking based on investment criteria, portfolio fit, and historical transaction patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Market Positioning Strategy</h4>
                      <p className="text-slate-300 text-sm">Positioning framework emphasizing proven execution, growth potential, and strategic value creation.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-2">Timeline</div>
                    <div className="text-lg font-semibold text-green-400">3-4 weeks</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4">Investor Engagement & Execution</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Strategic Introductions</h4>
                      <p className="text-slate-300 text-sm">Professional introductions to growth equity partners with contextual investment thesis and growth story.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Presentation Development</h4>
                      <p className="text-slate-300 text-sm">Growth-focused pitch materials highlighting scalability, market opportunity, and execution capability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Process Management</h4>
                      <p className="text-slate-300 text-sm">Coordinating due diligence, management presentations, and investor meeting facilitation throughout the process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Term Negotiation Support</h4>
                      <p className="text-slate-300 text-sm">Strategic guidance on growth equity terms, board composition, and governance structures.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-2">Timeline</div>
                    <div className="text-lg font-semibold text-teal-400">8-16 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Equity Market Dynamics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Growth Equity Market Dynamics
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Understanding current market conditions, investor preferences, and positioning strategies for optimal growth capital outcomes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Market Trends */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">Current Market Trends</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">💰 Capital Deployment Acceleration</h4>
                    <p className="text-slate-300 mb-2">Growth equity funds raised $89B in 2023, with increased focus on proven revenue models and sustainable growth trajectories.</p>
                    <div className="bg-emerald-500/20 rounded-lg p-3">
                      <div className="text-sm text-emerald-300">Average fund size: $750M | Median investment: $45M</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">🎯 Sector Concentration</h4>
                    <p className="text-slate-300 mb-2">Software (31%), healthcare technology (19%), and consumer/retail (15%) represent 65% of growth equity investments.</p>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300">Enterprise software valuations: 8-15x revenue | Healthcare tech: 6-12x revenue</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">⚡ Speed to Market Premium</h4>
                    <p className="text-slate-300 mb-2">Companies demonstrating rapid scalability command 25-40% valuation premiums in competitive processes.</p>
                    <div className="bg-teal-500/20 rounded-lg p-3">
                      <div className="text-sm text-teal-300">Average process timeline: 4-6 months | Competitive situations: 2-3 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investor Preferences */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Investor Preferences</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">📈 Revenue Quality Focus</h4>
                    <p className="text-slate-300 mb-2">Predictable, recurring revenue models with net revenue retention rates above 110% receive priority attention.</p>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300">SaaS companies: 90%+ ARR | Subscription models: 80%+ recurring revenue</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">🌐 Market Leadership Position</h4>
                    <p className="text-slate-300 mb-2">Companies with clear competitive advantages and defensible market positions in growing TAMs exceeding $1B.</p>
                    <div className="bg-teal-500/20 rounded-lg p-3">
                      <div className="text-sm text-teal-300">Market share: Top 3 position | Growth rate: 20%+ annually | Gross margins: 60%+</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">👥 Management Team Strength</h4>
                    <p className="text-slate-300 mb-2">Experienced leadership teams with prior scaling experience and clear succession planning.</p>
                    <div className="bg-emerald-500/20 rounded-lg p-3">
                      <div className="text-sm text-emerald-300">CEO tenure: 3+ years | Previous exits: 45% of management teams | Board experience: 78%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Criteria */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/30">
              <h3 className="text-2xl font-bold text-teal-400 mb-8">Optimal Growth Equity Investment Criteria</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">📊 Financial Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Annual Revenue</span>
                      <span className="text-teal-400 font-semibold">$10M - $150M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Growth Rate</span>
                      <span className="text-teal-400 font-semibold">20%+ YoY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Gross Margins</span>
                      <span className="text-teal-400 font-semibold">50%+ sustainable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">EBITDA Margins</span>
                      <span className="text-teal-400 font-semibold">Break-even to 20%+</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">🎯 Business Model</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Customer Retention</span>
                      <span className="text-emerald-400 font-semibold">90%+ annual</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Revenue Visibility</span>
                      <span className="text-emerald-400 font-semibold">70%+ recurring</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Market Position</span>
                      <span className="text-emerald-400 font-semibold">Top 3 in niche</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Competitive Advantage</span>
                      <span className="text-emerald-400 font-semibold">Clear differentiation</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">🚀 Growth Catalysts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Geographic Expansion</span>
                      <span className="text-green-400 font-semibold">International opportunity</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Product Extensions</span>
                      <span className="text-green-400 font-semibold">Adjacent markets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Strategic Acquisitions</span>
                      <span className="text-green-400 font-semibold">Consolidation play</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Operational Leverage</span>
                      <span className="text-green-400 font-semibold">Scalability potential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Equity Investor Network */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🤝 Investor Network</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Growth Equity Network
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct relationships with leading growth equity firms across investment sizes, geographic regions, and sector specializations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Tier 1 Growth Equity */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Premier Growth Equity</h3>
                  <p className="text-slate-300">Top-tier growth equity firms with $1B+ funds and global reach.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">General Atlantic</h4>
                    <p className="text-slate-400 text-xs">Global growth equity | $73B AUM | Technology & healthcare focus</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Silver Lake</h4>
                    <p className="text-slate-400 text-xs">Technology-focused | $88B AUM | Enterprise software specialization</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Vista Equity Partners</h4>
                    <p className="text-slate-400 text-xs">Software focus | $86B AUM | B2B software & tech-enabled services</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Warburg Pincus</h4>
                    <p className="text-slate-400 text-xs">Global growth investor | $58B AUM | Multi-sector platform</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">TPG Capital</h4>
                    <p className="text-slate-400 text-xs">Growth platform | $127B AUM | Technology & consumer focus</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-emerald-400">$50M - $500M+</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mid-Market Growth */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Mid-Market Growth Firms</h3>
                  <p className="text-slate-300">Specialized growth investors with sector expertise and flexible structures.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Insight Partners</h4>
                    <p className="text-slate-400 text-xs">ScaleUp platform | $90B AUM | Software & internet specialization</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Accel-KKR</h4>
                    <p className="text-slate-400 text-xs">Growth equity & buyout | $12B AUM | Software & tech-enabled services</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Spectrum Equity</h4>
                    <p className="text-slate-400 text-xs">Growth capital specialist | $6B AUM | Information services & software</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">JMI Equity</h4>
                    <p className="text-slate-400 text-xs">Growth capital | $6B AUM | Software, services & healthcare IT</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Riverwood Capital</h4>
                    <p className="text-slate-400 text-xs">Technology growth investor | $2.8B AUM | Enterprise software focus</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-green-400">$15M - $150M</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sector-Focused Growth */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-4">Sector-Focused Growth</h3>
                  <p className="text-slate-300">Industry specialists with deep domain expertise and operational support.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Bessemer Venture Partners</h4>
                    <p className="text-slate-400 text-xs">Cloud software specialist | $9B AUM | BVP Cloud growth platform</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Francisco Partners</h4>
                    <p className="text-slate-400 text-xs">Technology specialist | $25B AUM | Enterprise software & tech services</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Healthtech Capital</h4>
                    <p className="text-slate-400 text-xs">Healthcare IT focus | $3.2B AUM | Digital health & medtech</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Level Equity</h4>
                    <p className="text-slate-400 text-xs">B2B software focus | $2.8B AUM | Vertical software specialization</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Evolution Equity Partners</h4>
                    <p className="text-slate-400 text-xs">Tech & consumer growth | $1.8B AUM | Scaling software companies</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-teal-400">$5M - $100M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Geographic Coverage */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30">
              <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Global Growth Equity Coverage</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🇺🇸</span>
                    North America
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 65+ growth equity firms</div>
                    <div className="text-slate-300 text-sm">• $850B+ combined AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: $45M</div>
                    <div className="text-slate-300 text-sm">• Focus: Software, healthcare, fintech</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🇪🇺</span>
                    Europe
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 25+ growth equity firms</div>
                    <div className="text-slate-300 text-sm">• $280B+ combined AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: €35M</div>
                    <div className="text-slate-300 text-sm">• Focus: B2B software, digital health</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🌏</span>
                    Asia-Pacific
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 15+ growth equity firms</div>
                    <div className="text-slate-300 text-sm">• $180B+ combined AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: $25M</div>
                    <div className="text-slate-300 text-sm">• Focus: Consumer tech, enterprise software</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">🏆 Success Stories</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Growth Capital Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Representative growth capital transactions demonstrating our expertise across sectors and investment sizes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Enterprise SaaS Platform</h3>
                    <p className="text-slate-300">Leading vertical software provider in healthcare administration</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$28M ARR healthcare software company with 850+ hospital customers and 15% market share in specialized niche. Strong customer retention (96%) and predictable growth model.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Growth Capital Requirements</h4>
                    <p className="text-slate-300 text-sm">Seeking $45M for geographic expansion, product development, and strategic acquisitions to accelerate market consolidation and enhance competitive position.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Successfully completed $50M Series C with Insight Partners at 12.5x revenue multiple. 18-month process resulted in 2.8x revenue growth and market leadership position.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">$50M</div>
                    <div className="text-xs text-slate-400">Growth Capital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">12.5x</div>
                    <div className="text-xs text-slate-400">Revenue Multiple</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">96%</div>
                    <div className="text-xs text-slate-400">Customer Retention</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Direct-to-Consumer Brand</h3>
                    <p className="text-slate-300">Omnichannel consumer products company with subscription model</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$65M revenue consumer brand with 78% subscription revenue, strong unit economics (3.2x LTV/CAC), and expanding retail presence across 2,500+ locations.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Growth Capital Requirements</h4>
                    <p className="text-slate-300 text-sm">Required $75M for international expansion, retail channel acceleration, product line extensions, and working capital to support 40%+ annual growth trajectory.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Secured $85M Series B led by General Atlantic with participation from existing investors. Achieved international launch and 180% revenue growth over 24 months.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$85M</div>
                    <div className="text-xs text-slate-400">Growth Capital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">180%</div>
                    <div className="text-xs text-slate-400">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">3.2x</div>
                    <div className="text-xs text-slate-400">LTV/CAC Ratio</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-teal-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">Industrial Technology Platform</h3>
                    <p className="text-slate-300">AI-powered manufacturing optimization software and services</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$42M revenue industrial IoT platform serving 200+ manufacturing facilities with proven ROI metrics averaging 18% efficiency improvements and $2.3M annual savings per customer.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Growth Capital Requirements</h4>
                    <p className="text-slate-300 text-sm">Seeking $60M for R&D acceleration, sales team expansion, strategic partnerships, and international market entry to capitalize on Industry 4.0 adoption trends.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Completed $65M growth equity round with TPG Capital and Francisco Partners co-leading. Achieved 150% customer growth and expanded to three new geographic markets.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">$65M</div>
                    <div className="text-xs text-slate-400">Growth Capital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">150%</div>
                    <div className="text-xs text-slate-400">Customer Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">18%</div>
                    <div className="text-xs text-slate-400">Avg Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Fintech Infrastructure Platform</h3>
                    <p className="text-slate-300">B2B payments and financial services technology platform</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$180M transaction volume fintech platform serving 1,200+ enterprise clients with embedded financial services, processing $2.1B annually with 99.97% uptime reliability.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Growth Capital Requirements</h4>
                    <p className="text-slate-300 text-sm">Required $120M for banking partnership expansion, product development, compliance infrastructure, and acquisition of complementary technology platforms to build comprehensive ecosystem.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Secured $135M Series D led by Warburg Pincus with strategic participation from JPMorgan Chase. Achieved 280% transaction volume growth and expanded to enterprise marketplace.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$135M</div>
                    <div className="text-xs text-slate-400">Growth Capital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">$2.1B</div>
                    <div className="text-xs text-slate-400">Annual Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">99.97%</div>
                    <div className="text-xs text-slate-400">Platform Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm mb-6">
              <span className="text-yellow-300 text-sm font-medium">⚡ Challenges & Solutions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Common Growth Capital Challenges
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Addressing the unique challenges growth-stage companies face when raising expansion capital and positioning for accelerated scaling.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Valuation Expectations vs Market Reality</h3>
                    <p className="text-slate-300 text-sm">Growth companies often have unrealistic valuation expectations based on peak market multiples or early-stage comparisons.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30">
                  <h4 className="font-semibold text-emerald-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Comprehensive valuation analysis using current market comparables and growth equity transaction multiples</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Investor feedback loops to calibrate expectations before formal process initiation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Strategic positioning to highlight growth premium factors and competitive differentiation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Challenge 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-orange-500/30">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-400 mb-2">Proving Scalability and Unit Economics</h3>
                    <p className="text-slate-300 text-sm">Growth investors require detailed proof of scalable unit economics and sustainable competitive advantages.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30">
                  <h4 className="font-semibold text-emerald-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Detailed financial model development demonstrating unit economics across customer segments and geographies</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Cohort analysis and customer lifetime value validation with supporting operational metrics</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Competitive moat analysis and defensibility assessment to justify growth premium valuations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Challenge 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-yellow-500/30">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Timing Market Windows and Investor Appetite</h3>
                    <p className="text-slate-300 text-sm">Growth equity markets have cyclical patterns and specific windows of optimal investor receptivity.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30">
                  <h4 className="font-semibold text-emerald-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Market timing analysis considering investor fund cycles, deployment pressures, and sector allocation trends</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Pre-marketing relationship building to establish investor interest before formal process launch</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Flexible timeline management to optimize for market conditions and competitive dynamics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Challenge 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Balancing Growth and Governance Requirements</h3>
                    <p className="text-slate-300 text-sm">Growth investors often require board seats and governance changes that founders must balance with operational needs.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30">
                  <h4 className="font-semibold text-emerald-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Governance structure optimization balancing investor oversight with management autonomy</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Board composition strategy leveraging investor expertise while maintaining founder control</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Term sheet negotiation focusing on growth-friendly structures and aligned incentives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">❓ Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Growth Capital Advisory FAQ
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Common questions about growth capital advisory, investment criteria, and our process for scaling companies.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What is the difference between growth capital and traditional venture capital?</h3>
              <p className="text-slate-300">
                Growth capital targets revenue-generating companies with proven business models seeking expansion capital, typically $5M-$200M rounds with minority stakes (15-49%). Unlike early-stage VC, growth equity focuses on scaling established businesses rather than validating new concepts. Growth investors emphasize sustainable unit economics, market leadership positions, and operational optimization rather than product-market fit development.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What are the typical investment criteria for growth equity firms?</h3>
              <p className="text-slate-300">
                Growth equity firms typically target companies with $10M-$150M annual revenue, 20%+ growth rates, 50%+ gross margins, and break-even to 20%+ EBITDA margins. Key criteria include 90%+ customer retention, 70%+ recurring revenue, top-3 market position, clear competitive advantages, experienced management teams, and identified growth catalysts including geographic expansion, product extensions, or strategic acquisitions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">How long does a typical growth capital fundraising process take?</h3>
              <p className="text-slate-300">
                Growth capital fundraising typically requires 4-8 months from strategy development to closing. The process includes growth assessment and strategy (2-3 weeks), investor targeting and positioning (3-4 weeks), active introduction and due diligence phases (8-16 weeks), and term negotiation and documentation (4-6 weeks). Timeline can vary based on market conditions, company preparedness, and competitive dynamics.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What types of growth catalysts do growth equity investors look for?</h3>
              <p className="text-slate-300">
                Growth equity investors prioritize clear, executable growth catalysts including geographic expansion into new markets, product line extensions or adjacent market opportunities, strategic acquisition opportunities for market consolidation, operational leverage through technology or process improvements, partnership expansion with enterprise customers, and international market entry strategies. These catalysts should be supported by detailed execution plans and market validation.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">How do growth equity firms differ from private equity firms?</h3>
              <p className="text-slate-300">
                Growth equity focuses on minority investments (15-49% stakes) in growing companies, while private equity typically acquires majority control (51%+) of mature businesses. Growth equity emphasizes organic growth acceleration and strategic value creation, whereas PE often employs financial engineering and operational restructuring. Growth equity allows founders to maintain control and continue leading the business, while PE usually installs new management teams and governance structures.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What role do growth equity investors play beyond providing capital?</h3>
              <p className="text-slate-300">
                Growth equity investors provide strategic value including market expansion expertise, operational best practices from portfolio companies, board-level guidance on scaling challenges, customer and partnership introductions, talent acquisition support for key hires, technology and infrastructure optimization, M&A strategy and execution support, and preparation for eventual exit opportunities. They typically take 1-2 board seats and maintain regular communication with management teams.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What are the typical terms and structures for growth equity investments?</h3>
              <p className="text-slate-300">
                Growth equity investments typically involve preferred equity structures with 15-49% ownership stakes, 1-2 board seats, liquidation preferences (1x non-participating preferred), anti-dilution protection, and governance rights including approval for major decisions. Investors often require regular board meetings, financial reporting, and strategic planning participation. Terms focus on growth-friendly structures that align investor and founder interests while providing appropriate downside protection.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">How should companies prepare for growth capital due diligence?</h3>
              <p className="text-slate-300">
                Growth capital due diligence preparation requires comprehensive financial documentation (3-year audited statements, detailed unit economics, customer cohort analysis), market positioning materials (competitive analysis, market size validation, customer references), operational metrics (KPIs, retention rates, growth levers), management team backgrounds, technology architecture review, and detailed growth strategy with supporting market research. Companies should also prepare reference lists from customers, partners, and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-green-600/20 to-teal-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-emerald-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
                  <span className="text-emerald-300 text-sm font-medium">🚀 Ready for Growth Capital?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Accelerate Your Growth with Strategic Capital
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our growth capital specialists to explore how strategic expansion funding can accelerate your path to market leadership and sustainable competitive advantage.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Growth Capital Assessment</span>
                  </Link>
                  
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      Growth Assessment Tool
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <p className="text-slate-400 text-lg">
                  Confidential consultation • Proven growth capital expertise • Results-driven approach
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
              question: "What is the difference between growth capital and traditional venture capital?",
              answer: "Growth capital targets revenue-generating companies with proven business models seeking expansion capital, typically $5M-$200M rounds with minority stakes (15-49%). Unlike early-stage VC, growth equity focuses on scaling established businesses rather than validating new concepts. Growth investors emphasize sustainable unit economics, market leadership positions, and operational optimization rather than product-market fit development."
            },
            {
              question: "What are the typical investment criteria for growth equity firms?",
              answer: "Growth equity firms typically target companies with $10M-$150M annual revenue, 20%+ growth rates, 50%+ gross margins, and break-even to 20%+ EBITDA margins. Key criteria include 90%+ customer retention, 70%+ recurring revenue, top-3 market position, clear competitive advantages, experienced management teams, and identified growth catalysts including geographic expansion, product extensions, or strategic acquisitions."
            },
            {
              question: "How long does a typical growth capital fundraising process take?",
              answer: "Growth capital fundraising typically requires 4-8 months from strategy development to closing. The process includes growth assessment and strategy (2-3 weeks), investor targeting and positioning (3-4 weeks), active introduction and due diligence phases (8-16 weeks), and term negotiation and documentation (4-6 weeks). Timeline can vary based on market conditions, company preparedness, and competitive dynamics."
            },
            {
              question: "What types of growth catalysts do growth equity investors look for?",
              answer: "Growth equity investors prioritize clear, executable growth catalysts including geographic expansion into new markets, product line extensions or adjacent market opportunities, strategic acquisition opportunities for market consolidation, operational leverage through technology or process improvements, partnership expansion with enterprise customers, and international market entry strategies. These catalysts should be supported by detailed execution plans and market validation."
            },
            {
              question: "How do growth equity firms differ from private equity firms?",
              answer: "Growth equity focuses on minority investments (15-49% stakes) in growing companies, while private equity typically acquires majority control (51%+) of mature businesses. Growth equity emphasizes organic growth acceleration and strategic value creation, whereas PE often employs financial engineering and operational restructuring. Growth equity allows founders to maintain control and continue leading the business, while PE usually installs new management teams and governance structures."
            },
            {
              question: "What role do growth equity investors play beyond providing capital?",
              answer: "Growth equity investors provide strategic value including market expansion expertise, operational best practices from portfolio companies, board-level guidance on scaling challenges, customer and partnership introductions, talent acquisition support for key hires, technology and infrastructure optimization, M&A strategy and execution support, and preparation for eventual exit opportunities. They typically take 1-2 board seats and maintain regular communication with management teams."
            },
            {
              question: "What are the typical terms and structures for growth equity investments?",
              answer: "Growth equity investments typically involve preferred equity structures with 15-49% ownership stakes, 1-2 board seats, liquidation preferences (1x non-participating preferred), anti-dilution protection, and governance rights including approval for major decisions. Investors often require regular board meetings, financial reporting, and strategic planning participation. Terms focus on growth-friendly structures that align investor and founder interests while providing appropriate downside protection."
            },
            {
              question: "How should companies prepare for growth capital due diligence?",
              answer: "Growth capital due diligence preparation requires comprehensive financial documentation (3-year audited statements, detailed unit economics, customer cohort analysis), market positioning materials (competitive analysis, market size validation, customer references), operational metrics (KPIs, retention rates, growth levers), management team backgrounds, technology architecture review, and detailed growth strategy with supporting market research. Companies should also prepare reference lists from customers, partners, and industry experts."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Growth Capital Advisory Services",
          description: "Expert growth capital advisory services connecting scaling companies with growth equity firms. Strategic financing for revenue-generating businesses ready for accelerated expansion.",
          url: "/services/growth-capital-advisory"
        }}
      />
    </div>
  );
}