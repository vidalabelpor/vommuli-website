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

// Venture Capital SVG Background Component
function VentureCapitalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="vcGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" />
            <stop offset="60%" stopColor="rgb(124, 58, 237)" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" />
          </linearGradient>
          <linearGradient id="vcGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(124, 58, 237)" />
            <stop offset="60%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(79, 70, 229)" />
          </linearGradient>
          <radialGradient id="startupGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(124, 58, 237)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </radialGradient>
        </defs>
        
        {/* Venture capital flow lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#vcGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#vcGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Venture capital nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#startupGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#startupGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating VC indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(124, 58, 237)" />
          <text x="210" y="305" fill="rgb(124, 58, 237)" fontSize="10" fontFamily="monospace">VC</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(139, 92, 246)" />
          <text x="610" y="255" fill="rgb(139, 92, 246)" fontSize="10" fontFamily="monospace">T/S</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(99, 102, 241)" />
          <text x="1010" y="205" fill="rgb(99, 102, 241)" fontSize="10" fontFamily="monospace">IPO</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Venture Capital Card Component
function FloatingVCCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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

export default function VentureCapitalPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-purple-900 relative overflow-hidden">
      {/* Venture Capital Background */}
      <VentureCapitalBackground />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5NTVGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-20"></div>
      
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
              <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:scale-105 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start VC Introduction Process</span>
              </Link>
              
              <Link href="/resources/vc-fundraising-guide" className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center">
                <span className="flex items-center justify-center">
                  Download VC Fundraising Guide
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
            <FloatingVCCard delay={0.5}>
              <div className="text-4xl font-black text-violet-400 mb-2">
                <AnimatedCounter end={67} suffix="%" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Introduction to Term Sheet Rate</p>
              <p className="text-green-400 text-xs">↑ 12% above industry average</p>
            </FloatingVCCard>
            
            <FloatingVCCard delay={1.0}>
              <div className="text-4xl font-black text-purple-400 mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Tier-1 VC Firm Network</p>
              <p className="text-blue-400 text-xs">Global coverage</p>
            </FloatingVCCard>
            
            <FloatingVCCard delay={1.5}>
              <div className="text-4xl font-black text-indigo-400 mb-2">
                $<AnimatedCounter end={2.8} suffix="B" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Capital Raised Through Introductions</p>
              <p className="text-green-400 text-xs">Last 24 months</p>
            </FloatingVCCard>
            
            <FloatingVCCard delay={2.0}>
              <div className="text-4xl font-black text-cyan-400 mb-2">
                <AnimatedCounter end={4.2} suffix="M" />
              </div>
              <p className="text-slate-300 text-sm mb-1">Average Days to First Meeting</p>
              <p className="text-green-400 text-xs">↓ 35% faster than industry</p>
            </FloatingVCCard>
          </div>
        </div>
      </section>

      {/* Simple Content Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Expert Venture Capital Introductions
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            We connect growth companies with the right venture capital firms through our proven methodology and extensive network of tier-1 investors. Our strategic approach ensures optimal positioning and maximum success rates for Series A, B, and C funding rounds.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">Strategic Positioning</h3>
              <p className="text-slate-300 leading-relaxed">
                Comprehensive analysis and positioning to align your company with VC investment criteria and maximize introduction success rates.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Warm Introductions</h3>
              <p className="text-slate-300 leading-relaxed">
                Leveraging established relationships with 200+ tier-1 VC firms to provide context-rich, warm introductions that generate results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}