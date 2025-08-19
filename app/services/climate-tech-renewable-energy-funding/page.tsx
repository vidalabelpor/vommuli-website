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

// Sustainable Energy SVG Background Component
function SustainableEnergyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="sustainableGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" />
            <stop offset="60%" stopColor="rgb(16, 185, 129)" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
          </linearGradient>
          <linearGradient id="sustainableGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
            <stop offset="60%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(14, 165, 233)" />
          </linearGradient>
          <radialGradient id="renewableGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
            <stop offset="100%" stopColor="rgb(34, 197, 94)" />
          </radialGradient>
        </defs>
        
        {/* Renewable energy flow lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#sustainableGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#sustainableGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Sustainable energy nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#renewableGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#renewableGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating sustainability indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(16, 185, 129)" />
          <text x="210" y="305" fill="rgb(16, 185, 129)" fontSize="10" fontFamily="monospace">ESG</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(34, 197, 94)" />
          <text x="610" y="255" fill="rgb(34, 197, 94)" fontSize="10" fontFamily="monospace">CO2</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(6, 182, 212)" />
          <text x="1010" y="205" fill="rgb(6, 182, 212)" fontSize="10" fontFamily="monospace">GWh</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Climate Card Component
function FloatingClimateCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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
  title: 'Climate Tech & Renewable Energy Funding Advisory | ESG Investment Services | Vommuli',
  description: 'Expert climate technology and renewable energy funding advisory. Connect with impact investors, ESG funds, and clean tech VCs for sustainable innovation financing.',
  keywords: [
    'climate tech funding advisory',
    'renewable energy investment',
    'ESG investment advisory',
    'sustainable technology funding',
    'clean energy capital introduction',
    'climate technology investment',
    'green energy funding services',
    'sustainability investment advisory',
    'impact investing consultants',
    'clean tech venture capital',
    'climate finance advisory',
    'sustainable finance consultants',
    'green technology funding',
    'environmental impact investing',
    'carbon reduction funding',
    'renewable energy capital',
    'clean tech fundraising',
    'climate startup funding',
    'ESG capital introduction',
    'sustainable business funding',
    'green bond advisory',
    'climate impact investment',
    'renewable energy venture capital',
    'clean technology investment',
    'sustainable energy funding',
    'climate innovation funding',
    'environmental technology investment',
    'green infrastructure funding',
    'climate solutions financing',
    'sustainable development funding',
    'clean energy project finance',
    'climate adaptation funding',
    'renewable energy project funding',
    'green tech investment advisory',
    'climate resilience funding',
    'sustainable innovation capital',
    'environmental finance advisory',
    'clean energy investment services',
    'climate technology capital',
    'renewable energy fundraising',
    'ESG focused investment',
    'sustainable technology capital',
    'climate venture capital',
    'green energy investment',
    'environmental impact funding',
    'clean tech capital advisory',
    'climate financing solutions',
    'renewable energy advisory'
  ],
  openGraph: {
    title: 'Climate Tech & Renewable Energy Funding Advisory | Expert ESG Investment',
    description: 'Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with impact investors.',
    url: 'https://vommuli.com/services/climate-tech-renewable-energy-funding',
  },
};

export default function ClimateTechRenewableEnergyFundingPage() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-hidden">
      <SustainableEnergyBackground />
      
      {/* Professional Sustainable Energy Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Sustainable Energy Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Climate Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingClimateCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Climate Impact</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={2.8} prefix="$" suffix="T" />
          </div>
        </FloatingClimateCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingClimateCard delay={1}>
          <div className="text-white/90 text-sm font-medium">ESG Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={74} suffix="%" />
          </div>
        </FloatingClimateCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">🌍 Climate Tech & Renewable Energy</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Climate Technology &
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent animate-pulse">
                Renewable Energy Funding
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Expert advisory services connecting breakthrough climate technology and renewable energy companies with impact investors, ESG-focused funds, and strategic capital to accelerate the transition to a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Climate Tech Funding Process</span>
              </Link>
              
              <Link 
                href="/tools/investment-readiness-assessment"
                className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center">
                  Climate Impact Assessment
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Investment Statistics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Climate Investment Market Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the surge in sustainable technology investment with specialized expertise in ESG-focused capital raising.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20"></div>
              <div className="relative p-8 border border-green-500/30 text-center">
                <div className="text-4xl font-black text-green-400 mb-2">
                  <AnimatedCounter end={2.8} suffix="T" prefix="$" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Global Climate Investment Market</p>
                <p className="text-emerald-400 text-xs">Fastest growing sector</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20"></div>
              <div className="relative p-8 border border-emerald-500/30 text-center">
                <div className="text-4xl font-black text-emerald-400 mb-2">
                  <AnimatedCounter end={74} suffix="%" />
                </div>
                <p className="text-slate-300 text-sm mb-1">ESG Investment Success Rate</p>
                <p className="text-cyan-400 text-xs">Above market average</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-sky-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">
                  <AnimatedCounter end={180} suffix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Climate Tech Investors Network</p>
                <p className="text-sky-400 text-xs">Specialized network</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-blue-600/20"></div>
              <div className="relative p-8 border border-sky-500/30 text-center">
                <div className="text-4xl font-black text-sky-400 mb-2">
                  <AnimatedCounter end={7} suffix=" months" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Average Timeline</p>
                <p className="text-blue-400 text-xs">Optimized process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Tech Landscape */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
                <span className="text-green-300 text-sm font-medium">🌱 Climate Tech Ecosystem</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                The Climate Technology Investment Revolution
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Climate technology represents the fastest-growing investment sector, with $2.8 trillion in committed capital driving innovation across renewable energy, carbon capture, sustainable agriculture, and green infrastructure. Our specialized advisory connects breakthrough climate companies with the expanding ecosystem of impact investors and ESG-focused funds.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">Proven Climate Impact</h3>
                    <p className="text-slate-300">Technologies with measurable environmental benefits, carbon reduction potential, and alignment with global sustainability goals and Paris Agreement targets.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">Commercial Viability</h3>
                    <p className="text-slate-300">Scalable business models with sustainable unit economics, competitive advantages, and clear paths to profitability within the growing green economy framework.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-lime-400 mb-2">ESG Integration</h3>
                    <p className="text-slate-300">Comprehensive Environmental, Social, and Governance integration with transparent impact metrics and alignment with institutional ESG investment mandates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Climate Investment Categories</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Renewable Energy</h4>
                    <p className="text-slate-300 text-sm">Solar, wind, hydro, geothermal, and energy storage technologies with proven deployment models and grid integration capabilities.</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Carbon Management</h4>
                    <p className="text-slate-300 text-sm">Carbon capture, utilization, storage, and direct air capture technologies addressing industrial decarbonization requirements.</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Sustainable Agriculture</h4>
                    <p className="text-slate-300 text-sm">Precision agriculture, alternative proteins, vertical farming, and regenerative agriculture technologies improving food security and sustainability.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Green Transportation</h4>
                    <p className="text-slate-300 text-sm">Electric vehicles, sustainable aviation fuels, hydrogen mobility, and transportation electrification infrastructure solutions.</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-6">
                    <h4 className="font-semibold text-white mb-2">Circular Economy</h4>
                    <p className="text-slate-300 text-sm">Waste reduction, recycling technologies, sustainable materials, and resource optimization platforms driving circular business models.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Tech Funding Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">🛠️ Climate Funding Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Strategic Climate Technology Funding Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized methodology designed for climate technology and renewable energy companies seeking impact investment and ESG-focused capital.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Impact Assessment & ESG Positioning</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Climate Impact Validation</h4>
                      <p className="text-slate-300 text-sm">Comprehensive assessment of environmental benefits, carbon reduction potential, and alignment with climate goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">ESG Framework Development</h4>
                      <p className="text-slate-300 text-sm">Environmental, Social, and Governance metrics development with transparent impact measurement and reporting.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Market Opportunity Analysis</h4>
                      <p className="text-slate-300 text-sm">Climate market sizing, regulatory drivers, and competitive landscape assessment across target geographic markets.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Technology Readiness Evaluation</h4>
                      <p className="text-slate-300 text-sm">Technical due diligence, scalability assessment, and commercial deployment readiness across climate technology sectors.</p>
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
            
            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">Impact Investor Targeting</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">ESG Fund Mapping</h4>
                      <p className="text-slate-300 text-sm">Identification of ESG-focused funds, impact investors, and climate-dedicated investment vehicles aligned with company profile.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Climate VC Network Access</h4>
                      <p className="text-slate-300 text-sm">Strategic targeting of climate-focused venture capital firms and sector specialists with deep domain expertise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Strategic Corporate Investors</h4>
                      <p className="text-slate-300 text-sm">Engagement with corporate venture arms, strategic investors, and industrial partners seeking climate innovation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Impact Thesis Development</h4>
                      <p className="text-slate-300 text-sm">Compelling impact investment narrative highlighting climate benefits, commercial potential, and ESG alignment.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-2">Timeline</div>
                    <div className="text-lg font-semibold text-emerald-400">4-6 weeks</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-lime-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-lime-400 mb-4">Impact Investment Execution</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Strategic Climate Introductions</h4>
                      <p className="text-slate-300 text-sm">Professional introductions to impact investors with contextual climate impact thesis and sustainability narrative.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Impact Presentation Development</h4>
                      <p className="text-slate-300 text-sm">Climate-focused pitch materials highlighting environmental benefits, market opportunity, and ESG compliance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">ESG Due Diligence Support</h4>
                      <p className="text-slate-300 text-sm">Comprehensive ESG documentation, impact measurement validation, and climate compliance verification.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Impact-Aligned Term Negotiation</h4>
                      <p className="text-slate-300 text-sm">Term sheet structuring incorporating impact metrics, ESG reporting requirements, and sustainability milestones.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-2">Timeline</div>
                    <div className="text-lg font-semibold text-lime-400">10-20 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Investment Market Dynamics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Climate Investment Market Dynamics
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Understanding global climate investment trends, regulatory drivers, and positioning strategies for optimal impact investment outcomes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Market Trends */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Global Climate Investment Trends</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">💰 Capital Acceleration</h4>
                    <p className="text-slate-300 mb-2">Climate tech investments reached $165B in 2023, representing 42% growth YoY with increasing focus on commercially proven solutions.</p>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300">Average deal size: $28M | Corporate participation: 67% of rounds | Geographic expansion: 45%</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">🎯 Sector Prioritization</h4>
                    <p className="text-slate-300 mb-2">Energy storage (24%), renewable generation (19%), and carbon management (16%) represent 59% of climate tech investment volume.</p>
                    <div className="bg-emerald-500/20 rounded-lg p-3">
                      <div className="text-sm text-emerald-300">Energy storage valuations: 6-12x revenue | Carbon tech: 4-8x revenue | AgTech: 3-7x revenue</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">⚡ Regulatory Momentum</h4>
                    <p className="text-slate-300 mb-2">IRA tax credits, EU Green Deal, and carbon pricing mechanisms creating $2.1T in regulatory incentives through 2030.</p>
                    <div className="bg-lime-500/20 rounded-lg p-3">
                      <div className="text-sm text-lime-300">IRA impact: 73% deal acceleration | EU taxonomy: 58% ESG compliance | Carbon pricing: 34 jurisdictions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investor Preferences */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">Impact Investor Preferences</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">📈 Measurable Impact</h4>
                    <p className="text-slate-300 mb-2">Quantifiable environmental benefits with verified carbon reduction, energy efficiency, or sustainability metrics aligned with SDGs.</p>
                    <div className="bg-emerald-500/20 rounded-lg p-3">
                      <div className="text-sm text-emerald-300">Carbon impact: 1M+ tons CO2e annually | Energy savings: 20%+ improvement | Water reduction: 30%+ efficiency</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">🌐 Commercial Scalability</h4>
                    <p className="text-slate-300 mb-2">Proven technology readiness (TRL 7+) with clear deployment pathways, regulatory approval, and market adoption evidence.</p>
                    <div className="bg-lime-500/20 rounded-lg p-3">
                      <div className="text-sm text-lime-300">Technology maturity: TRL 7+ required | Market validation: Pilot customers | Regulatory: Approvals in progress</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">👥 ESG Leadership</h4>
                    <p className="text-slate-300 mb-2">Strong Environmental, Social, and Governance practices with transparent reporting and stakeholder engagement.</p>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300">ESG compliance: 95%+ of impact deals | Board diversity: 40%+ representation | Transparency: Annual impact reporting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Criteria */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-lime-500/30">
              <h3 className="text-2xl font-bold text-lime-400 mb-8">Optimal Climate Tech Investment Criteria</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">🌍 Environmental Impact</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Carbon Reduction</span>
                      <span className="text-lime-400 font-semibold">1M+ tons CO2e/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Technology Readiness</span>
                      <span className="text-lime-400 font-semibold">TRL 7+ required</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Market Deployment</span>
                      <span className="text-lime-400 font-semibold">Pilot validation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Regulatory Alignment</span>
                      <span className="text-lime-400 font-semibold">Policy support</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">💼 Commercial Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Revenue Traction</span>
                      <span className="text-emerald-400 font-semibold">$2M+ ARR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Growth Rate</span>
                      <span className="text-emerald-400 font-semibold">100%+ YoY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Gross Margins</span>
                      <span className="text-emerald-400 font-semibold">40%+ sustainable</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Market Size</span>
                      <span className="text-emerald-400 font-semibold">$10B+ TAM</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4">🚀 Growth Enablers</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Strategic Partnerships</span>
                      <span className="text-green-400 font-semibold">Corporate agreements</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Geographic Expansion</span>
                      <span className="text-green-400 font-semibold">Multi-market presence</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">IP Portfolio</span>
                      <span className="text-green-400 font-semibold">Defensible technology</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Team Experience</span>
                      <span className="text-green-400 font-semibold">Climate expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Tech Investor Network */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-sm font-medium">🤝 Investor Network</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Climate Tech Investor Network
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct relationships with leading climate-focused investors, ESG funds, and impact investment firms across all stages and geographic regions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Climate VCs */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Climate-Focused VCs</h3>
                  <p className="text-slate-300">Dedicated climate technology venture capital firms with deep sector expertise.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Breakthrough Energy Ventures</h4>
                    <p className="text-slate-400 text-xs">Climate tech focus | $3.5B AUM | Deep tech & infrastructure</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Energy Impact Partners</h4>
                    <p className="text-slate-400 text-xs">Energy innovation | $2.8B AUM | Utility partnerships</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Prelude Ventures</h4>
                    <p className="text-slate-400 text-xs">Climate tech specialist | $750M AUM | Early-stage focus</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Prime Movers Lab</h4>
                    <p className="text-slate-400 text-xs">Deep tech climate | $500M AUM | Moonshot technologies</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Lowercarbon Capital</h4>
                    <p className="text-slate-400 text-xs">Carbon reduction | $1.8B AUM | Climate solutions focus</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-green-400">$1M - $100M</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ESG & Impact Funds */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">ESG & Impact Funds</h3>
                  <p className="text-slate-300">Institutional ESG-focused funds and impact investors with sustainability mandates.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">TPG Rise</h4>
                    <p className="text-slate-400 text-xs">Impact investing | $12.5B AUM | Global sustainability focus</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">BlackRock Climate Solutions</h4>
                    <p className="text-slate-400 text-xs">Climate investment | $850B ESG AUM | Infrastructure focus</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Generation Investment Management</h4>
                    <p className="text-slate-400 text-xs">Sustainable long-term | $45B AUM | Public & private markets</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Bain Capital Double Impact</h4>
                    <p className="text-slate-400 text-xs">Impact PE/VC | $3.2B AUM | Social & environmental returns</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Blue Haven Initiative</h4>
                    <p className="text-slate-400 text-xs">Impact investment | $2.5B AUM | Climate & sustainability</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-emerald-400">$10M - $500M</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Corporate Strategic Investors */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-lime-500/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-lime-400 mb-4">Corporate Strategic Investors</h3>
                  <p className="text-slate-300">Corporate venture arms and strategic investors with climate innovation focus.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Shell Ventures</h4>
                    <p className="text-slate-400 text-xs">Energy transition | $2.5B CVC fund | Clean tech focus</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Microsoft Climate Innovation Fund</h4>
                    <p className="text-slate-400 text-xs">Climate tech | $1B fund | Technology integration</p>
                  </div>
                  
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Amazon Climate Pledge Fund</h4>
                    <p className="text-slate-400 text-xs">Climate solutions | $10B commitment | Logistics & cloud</p>
                  </div>
                  
                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">Caterpillar Venture Capital</h4>
                    <p className="text-slate-400 text-xs">Industrial innovation | $750M AUM | Sustainability tech</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white text-sm">ENGIE New Ventures</h4>
                    <p className="text-slate-400 text-xs">Energy innovation | $500M fund | Renewable integration</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-sm text-slate-400">Investment Range</div>
                    <div className="text-lg font-semibold text-lime-400">$5M - $200M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Geographic Coverage */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">Global Climate Investment Coverage</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🇺🇸</span>
                    North America
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 85+ climate tech investors</div>
                    <div className="text-slate-300 text-sm">• $78B+ climate investment AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: $35M</div>
                    <div className="text-slate-300 text-sm">• Focus: Energy storage, carbon tech</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🇪🇺</span>
                    Europe
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 55+ climate investors</div>
                    <div className="text-slate-300 text-sm">• €45B+ green investment AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: €22M</div>
                    <div className="text-slate-300 text-sm">• Focus: Renewable energy, circular economy</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-2">🌏</span>
                    Asia-Pacific
                  </h4>
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm">• 40+ climate tech funds</div>
                    <div className="text-slate-300 text-sm">• $32B+ sustainability AUM</div>
                    <div className="text-slate-300 text-sm">• Average investment: $18M</div>
                    <div className="text-slate-300 text-sm">• Focus: Clean mobility, AgTech</div>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🏆 Success Stories</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Climate Tech Funding Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Representative climate technology transactions demonstrating our expertise across renewable energy, carbon management, and sustainable innovation sectors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🔋</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Advanced Battery Storage Platform</h3>
                    <p className="text-slate-300">Grid-scale energy storage technology with advanced battery management systems</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$35M revenue energy storage company with 150+ utility deployments, 2.5GWh installed capacity, and proven 15-year battery life technology reducing grid carbon emissions by 2.3M tons annually.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Climate Investment Requirements</h4>
                    <p className="text-slate-300 text-sm">Seeking $120M Series C for manufacturing scale-up, international expansion, and next-generation chemistry development to support renewable energy grid integration.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Completed $140M Series C led by Energy Impact Partners with participation from Breakthrough Energy Ventures. Achieved 280% deployment growth and 5 new geographic markets.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$140M</div>
                    <div className="text-xs text-slate-400">Climate Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">2.3M</div>
                    <div className="text-xs text-slate-400">Tons CO2 Reduced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lime-400">2.5GWh</div>
                    <div className="text-xs text-slate-400">Deployed Capacity</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Carbon Capture Utilization Platform</h3>
                    <p className="text-slate-300">Direct air capture technology converting CO2 into sustainable products</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$18M revenue carbon capture company with 8 commercial facilities, 500K tons CO2 captured annually, and breakthrough cost reduction to $150/ton with validated conversion to sustainable aviation fuel.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Climate Investment Requirements</h4>
                    <p className="text-slate-300 text-sm">Required $95M Series B for facility expansion, technology scaling, and commercial partnerships to achieve 10M ton annual capture capacity by 2027.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Secured $110M Series B led by Breakthrough Energy Ventures with Lowercarbon Capital participation. Expanded to 15 facilities and secured $2.8B in offtake agreements.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">$110M</div>
                    <div className="text-xs text-slate-400">Climate Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lime-400">500K</div>
                    <div className="text-xs text-slate-400">Tons CO2 Captured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$150</div>
                    <div className="text-xs text-slate-400">Cost per Ton</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-600/20 to-green-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-lime-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-lime-400 mb-2">Electric Vehicle Charging Network</h3>
                    <p className="text-slate-300">High-speed charging infrastructure with renewable energy integration</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$52M revenue EV charging network with 3,200+ stations, 98.5% uptime reliability, 85% renewable energy sourcing, and partnerships with 15 automotive OEMs across North America and Europe.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Climate Investment Requirements</h4>
                    <p className="text-slate-300 text-sm">Seeking $200M growth capital for rapid network expansion, ultra-fast charging technology deployment, and strategic acquisitions to achieve 15,000 stations by 2026.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Completed $220M Series D led by TPG Rise with Shell Ventures co-investment. Accelerated to 8,500 stations and expanded to 12 new metropolitan markets.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lime-400">$220M</div>
                    <div className="text-xs text-slate-400">Climate Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">8,500</div>
                    <div className="text-xs text-slate-400">Charging Stations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">85%</div>
                    <div className="text-xs text-slate-400">Renewable Energy</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 h-full">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center mr-6">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-2">Precision Agriculture Platform</h3>
                    <p className="text-slate-300">AI-powered sustainable farming technology reducing water and chemical usage</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Company Profile</h4>
                    <p className="text-slate-300 text-sm">$28M revenue AgTech platform serving 12,000+ farms across 8 countries, achieving 35% water reduction, 28% fertilizer savings, and 18% yield improvement through AI-driven optimization.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Climate Investment Requirements</h4>
                    <p className="text-slate-300 text-sm">Required $75M Series C for AI technology enhancement, geographic expansion to emerging markets, and development of carbon credit marketplace for regenerative farming practices.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Investment Outcome</h4>
                    <p className="text-slate-300 text-sm">Secured $85M Series C led by Generation Investment Management with participation from corporate strategic investors. Expanded to 25,000+ farms and launched carbon marketplace.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">$85M</div>
                    <div className="text-xs text-slate-400">Climate Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lime-400">35%</div>
                    <div className="text-xs text-slate-400">Water Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">25K</div>
                    <div className="text-xs text-slate-400">Farms Served</div>
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
              Common Climate Tech Funding Challenges
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Addressing the unique challenges climate technology companies face when raising impact investment and navigating ESG compliance requirements.
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
                    <h3 className="text-xl font-bold text-red-400 mb-2">Proving Climate Impact and Commercial Viability</h3>
                    <p className="text-slate-300 text-sm">Climate tech companies must demonstrate both measurable environmental benefits and sustainable business models simultaneously.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Comprehensive impact measurement framework with validated carbon reduction, energy efficiency, and sustainability metrics</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Commercial viability analysis including unit economics, market adoption, and scalability validation with pilot customers</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Third-party verification and certification to enhance credibility with impact investors and ESG funds</p>
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
                    <h3 className="text-xl font-bold text-orange-400 mb-2">Navigating Complex ESG Requirements</h3>
                    <p className="text-slate-300 text-sm">ESG compliance involves multiple frameworks, reporting standards, and regulatory requirements across different markets.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">ESG framework implementation covering TCFD, EU Taxonomy, B-Corp certification, and investor-specific requirements</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Comprehensive ESG reporting system with real-time metrics tracking and transparent impact dashboard development</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Governance structure optimization incorporating board diversity, stakeholder engagement, and sustainability oversight</p>
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
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Technology Readiness and Scalability Concerns</h3>
                    <p className="text-slate-300 text-sm">Climate technologies often face questions about commercial readiness, scalability, and deployment timelines.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Technology readiness assessment and validation with independent technical experts and industry advisors</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Pilot deployment strategy and customer validation with detailed case studies and performance metrics</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Scalability roadmap development with manufacturing partnerships, supply chain analysis, and deployment planning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Challenge 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Balancing Impact Metrics with Financial Returns</h3>
                    <p className="text-slate-300 text-sm">Impact investors require clear correlation between environmental benefits and financial performance metrics.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-3">Our Solution</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Integrated impact-financial model demonstrating correlation between environmental benefits and revenue generation</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Blended value proposition highlighting traditional financial metrics alongside measurable climate impact outcomes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-lime-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-slate-300 text-sm">Impact investment structuring with milestone-based funding tied to both financial and environmental performance targets</p>
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">❓ Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Climate Tech Funding Advisory FAQ
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Common questions about climate technology funding, ESG investment criteria, and our impact investment advisory process.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">What types of climate technology companies do you work with?</h3>
              <p className="text-slate-300">
                We work with climate technology companies across five core categories: renewable energy and storage systems, carbon capture and utilization technologies, sustainable agriculture and food technology, clean transportation and mobility solutions, and circular economy and waste reduction platforms. Our focus is on companies with Technology Readiness Level (TRL) 7+ and proven commercial pilot deployments with measurable environmental impact.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">What are the key criteria that climate tech investors look for?</h3>
              <p className="text-slate-300">
                Climate tech investors prioritize measurable environmental impact (1M+ tons CO2e reduction annually), commercial viability with proven unit economics, technology readiness (TRL 7+ required), scalable business models with clear deployment pathways, strong ESG compliance and governance practices, experienced management teams with climate expertise, regulatory alignment with policy support, and market validation through pilot customers and strategic partnerships.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">How do ESG requirements impact climate technology funding?</h3>
              <p className="text-slate-300">
                ESG requirements are fundamental to climate tech funding, with 95%+ of impact deals requiring comprehensive ESG compliance. Key requirements include Environmental impact measurement and third-party verification, Social responsibility including community engagement and stakeholder consultation, Governance structures incorporating board diversity and sustainability oversight, Transparent reporting aligned with TCFD, EU Taxonomy, and investor-specific frameworks, and Impact metrics tracking with real-time dashboards and annual sustainability reporting.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">What is the typical timeline for climate technology fundraising?</h3>
              <p className="text-slate-300">
                Climate technology fundraising typically requires 5-12 months from initial assessment to closing. The process includes impact assessment and ESG positioning (3-4 weeks), impact investor targeting and thesis development (4-6 weeks), investor introductions and presentation phases (10-20 weeks), due diligence including technical and ESG validation (6-12 weeks), and term negotiation incorporating impact milestones and sustainability targets (4-8 weeks). Timeline varies based on technology maturity and regulatory complexity.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">How do you measure and validate climate impact for investors?</h3>
              <p className="text-slate-300">
                We employ comprehensive impact measurement frameworks including carbon footprint analysis and life-cycle assessment, third-party verification through certified environmental consultants, quantified environmental benefits (energy savings, emissions reduction, resource efficiency), alignment with UN Sustainable Development Goals and Paris Agreement targets, real-time impact tracking systems with transparent dashboard reporting, regulatory compliance validation, and independent impact auditing for investor confidence and ESG reporting requirements.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">What role do government incentives and policies play in climate tech funding?</h3>
              <p className="text-slate-300">
                Government incentives significantly accelerate climate tech funding through tax credits (IRA providing $370B in climate incentives), grant programs and co-funding opportunities, regulatory mandates creating market demand, carbon pricing mechanisms enabling revenue streams, procurement policies supporting early adoption, R&D tax incentives reducing development costs, and international climate agreements driving policy alignment. We help companies navigate these incentives and incorporate policy support into investor presentations.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">How do corporate strategic investors participate in climate tech funding?</h3>
              <p className="text-slate-300">
                Corporate strategic investors are increasingly active in climate tech through dedicated climate innovation funds ($45B+ committed), technology partnerships and pilot deployments, supply chain integration opportunities, carbon offset and sustainability goal alignment, co-development agreements for commercial deployment, market access and customer validation support, and strategic acquisitions for technology integration. Corporate participation often provides validation, market access, and accelerated commercial deployment beyond just capital.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-green-400 mb-3">What documentation is required for climate technology due diligence?</h3>
              <p className="text-slate-300">
                Climate technology due diligence requires comprehensive environmental impact assessment and life-cycle analysis, technology validation reports and third-party technical due diligence, ESG compliance documentation including governance frameworks, regulatory approvals and environmental permits, pilot deployment data and customer validation studies, intellectual property portfolio and freedom-to-operate analysis, sustainability reporting and impact measurement systems, management team climate expertise and advisory board composition, and financial models incorporating climate risk and opportunity assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-lime-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-green-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
                  <span className="text-green-300 text-sm font-medium">🌍 Ready to Make Climate Impact?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Accelerate Climate Solutions with Strategic Capital
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our climate technology specialists to explore how impact investment can accelerate your path to commercial deployment and environmental impact at scale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <Link 
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Climate Tech Assessment</span>
                  </Link>
                  
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      ESG Impact Assessment
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <p className="text-slate-400 text-lg">
                  Confidential consultation • Proven climate tech expertise • Impact-driven results
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
              question: "What types of climate technology companies do you work with?",
              answer: "We work with climate technology companies across five core categories: renewable energy and storage systems, carbon capture and utilization technologies, sustainable agriculture and food technology, clean transportation and mobility solutions, and circular economy and waste reduction platforms. Our focus is on companies with Technology Readiness Level (TRL) 7+ and proven commercial pilot deployments with measurable environmental impact."
            },
            {
              question: "What are the key criteria that climate tech investors look for?",
              answer: "Climate tech investors prioritize measurable environmental impact (1M+ tons CO2e reduction annually), commercial viability with proven unit economics, technology readiness (TRL 7+ required), scalable business models with clear deployment pathways, strong ESG compliance and governance practices, experienced management teams with climate expertise, regulatory alignment with policy support, and market validation through pilot customers and strategic partnerships."
            },
            {
              question: "How do ESG requirements impact climate technology funding?",
              answer: "ESG requirements are fundamental to climate tech funding, with 95%+ of impact deals requiring comprehensive ESG compliance. Key requirements include Environmental impact measurement and third-party verification, Social responsibility including community engagement and stakeholder consultation, Governance structures incorporating board diversity and sustainability oversight, Transparent reporting aligned with TCFD, EU Taxonomy, and investor-specific frameworks, and Impact metrics tracking with real-time dashboards and annual sustainability reporting."
            },
            {
              question: "What is the typical timeline for climate technology fundraising?",
              answer: "Climate technology fundraising typically requires 5-12 months from initial assessment to closing. The process includes impact assessment and ESG positioning (3-4 weeks), impact investor targeting and thesis development (4-6 weeks), investor introductions and presentation phases (10-20 weeks), due diligence including technical and ESG validation (6-12 weeks), and term negotiation incorporating impact milestones and sustainability targets (4-8 weeks). Timeline varies based on technology maturity and regulatory complexity."
            },
            {
              question: "How do you measure and validate climate impact for investors?",
              answer: "We employ comprehensive impact measurement frameworks including carbon footprint analysis and life-cycle assessment, third-party verification through certified environmental consultants, quantified environmental benefits (energy savings, emissions reduction, resource efficiency), alignment with UN Sustainable Development Goals and Paris Agreement targets, real-time impact tracking systems with transparent dashboard reporting, regulatory compliance validation, and independent impact auditing for investor confidence and ESG reporting requirements."
            },
            {
              question: "What role do government incentives and policies play in climate tech funding?",
              answer: "Government incentives significantly accelerate climate tech funding through tax credits (IRA providing $370B in climate incentives), grant programs and co-funding opportunities, regulatory mandates creating market demand, carbon pricing mechanisms enabling revenue streams, procurement policies supporting early adoption, R&D tax incentives reducing development costs, and international climate agreements driving policy alignment. We help companies navigate these incentives and incorporate policy support into investor presentations."
            },
            {
              question: "How do corporate strategic investors participate in climate tech funding?",
              answer: "Corporate strategic investors are increasingly active in climate tech through dedicated climate innovation funds ($45B+ committed), technology partnerships and pilot deployments, supply chain integration opportunities, carbon offset and sustainability goal alignment, co-development agreements for commercial deployment, market access and customer validation support, and strategic acquisitions for technology integration. Corporate participation often provides validation, market access, and accelerated commercial deployment beyond just capital."
            },
            {
              question: "What documentation is required for climate technology due diligence?",
              answer: "Climate technology due diligence requires comprehensive environmental impact assessment and life-cycle analysis, technology validation reports and third-party technical due diligence, ESG compliance documentation including governance frameworks, regulatory approvals and environmental permits, pilot deployment data and customer validation studies, intellectual property portfolio and freedom-to-operate analysis, sustainability reporting and impact measurement systems, management team climate expertise and advisory board composition, and financial models incorporating climate risk and opportunity assessment."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Climate Tech & Renewable Energy Funding Advisory",
          description: "Expert climate technology and renewable energy funding advisory. Connect with impact investors, ESG funds, and clean tech VCs for sustainable innovation financing.",
          url: "/services/climate-tech-renewable-energy-funding"
        }}
      />
    </div>
  );
}