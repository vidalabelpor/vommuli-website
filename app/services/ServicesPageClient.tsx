'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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

// Enhanced Capital Flow SVG Background Component
function CapitalFlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" />
            <stop offset="60%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="60%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </linearGradient>
          <radialGradient id="capitalGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </radialGradient>
        </defs>
        
        {/* Enhanced capital flow paths */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#flowGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#flowGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Capital flow nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#capitalGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#capitalGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating capital indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(99, 102, 241)" />
          <text x="210" y="305" fill="rgb(99, 102, 241)" fontSize="10" fontFamily="monospace">$M</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(139, 92, 246)" />
          <text x="610" y="255" fill="rgb(139, 92, 246)" fontSize="10" fontFamily="monospace">LP</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(59, 130, 246)" />
          <text x="1010" y="205" fill="rgb(59, 130, 246)" fontSize="10" fontFamily="monospace">PE</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Card Component for services
function FloatingCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Enhanced Capital Flow Background */}
      <CapitalFlowBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5NTVGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-indigo-300 text-sm font-medium">🏦 Premium Capital Introduction</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Elite Capital
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Introduction Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Connecting institutional-quality companies with tier-1 investors across venture capital, private equity, and growth capital markets. Our proven methodology delivers a 73% introduction-to-funding success rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Schedule Consultation</span>
              </Link>
              
              <Link href="/resources/capital-introduction-guide" className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center">
                <span className="flex items-center justify-center">
                  Download Guide
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="relative py-16 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <FloatingCard delay={0.5}>
              <div className="text-4xl font-black text-indigo-400 mb-2">
                <AnimatedCounter end={73} suffix="%" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Introduction Success Rate</p>
              <p className="text-green-400 text-xs">↑ 18% above industry average</p>
            </FloatingCard>
            
            <FloatingCard delay={1.0}>
              <div className="text-4xl font-black text-purple-400 mb-2">
                $<AnimatedCounter end={4.2} suffix="B" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Capital Successfully Raised</p>
              <p className="text-blue-400 text-xs">Last 18 months</p>
            </FloatingCard>
            
            <FloatingCard delay={1.5}>
              <div className="text-4xl font-black text-blue-400 mb-2">
                <AnimatedCounter end={300} suffix="+" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Institutional Investor Network</p>
              <p className="text-green-400 text-xs">Global coverage</p>
            </FloatingCard>
            
            <FloatingCard delay={2.0}>
              <div className="text-4xl font-black text-cyan-400 mb-2">
                <AnimatedCounter end={89} suffix="%" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Client Retention Rate</p>
              <p className="text-green-400 text-xs">Premium service excellence</p>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Capital Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized introduction services across all major capital markets and investment stages.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Venture Capital Introduction */}
            <Link href="/services/venture-capital-introduction" className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20"></div>
              <div className="relative p-8 border border-violet-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl mr-4 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-violet-400">Venture Capital Introduction</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Connect with tier-1 VC firms for Series A, B, C funding rounds. 67% introduction-to-term-sheet success rate.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Typical Range</span>
                    <span className="text-violet-400 font-medium">$2M - $200M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Success Rate</span>
                    <span className="text-violet-400 font-medium">67%</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Tech Funding */}
            <Link href="/services/ai-tech-funding" className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20"></div>
              <div className="relative p-8 border border-purple-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl mr-4 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">AI Tech Funding</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Specialized funding for AI/ML companies with cutting-edge technology and proven market traction.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Focus Areas</span>
                    <span className="text-purple-400 font-medium">AI/ML, Deep Tech</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Market Share</span>
                    <span className="text-purple-400 font-medium">34% of VC deals</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Private Equity Fundraising */}
            <Link href="/services/private-equity-fundraising" className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20"></div>
              <div className="relative p-8 border border-indigo-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl mr-4 flex items-center justify-center">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-indigo-400">Private Equity Fundraising</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Institutional private equity connections for established companies seeking growth capital and strategic partnerships.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Deal Size</span>
                    <span className="text-indigo-400 font-medium">$25M - $500M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Network</span>
                    <span className="text-indigo-400 font-medium">150+ PE Firms</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Growth Capital Advisory */}
            <Link href="/services/growth-capital-advisory" className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20"></div>
              <div className="relative p-8 border border-emerald-500/30 bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl mr-4 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400">Growth Capital Advisory</h3>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Strategic growth capital solutions for scaling companies with proven business models and market traction.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Growth Stage</span>
                    <span className="text-emerald-400 font-medium">Scale-up</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Focus</span>
                    <span className="text-emerald-400 font-medium">Revenue Growth</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}