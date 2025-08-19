'use client';

import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useState, useEffect } from 'react';

// Since this is a client component, metadata needs to be handled differently
// For SEO, consider moving critical metadata to layout.tsx or using next/head

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

// Rocky Mountain SVG Background Component
function RockyMountainBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="mountainGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(30, 58, 138)" />
            <stop offset="60%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(147, 197, 253)" />
          </linearGradient>
          <linearGradient id="mountainGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(55, 65, 81)" />
            <stop offset="60%" stopColor="rgb(107, 114, 128)" />
            <stop offset="100%" stopColor="rgb(209, 213, 219)" />
          </linearGradient>
          <radialGradient id="sunGradient" cx="80%" cy="20%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" />
            <stop offset="100%" stopColor="rgb(245, 158, 11)" />
          </radialGradient>
        </defs>
        
        {/* Mountain silhouettes */}
        <path 
          d="M0,600 L150,300 L300,450 L500,200 L700,350 L900,150 L1200,400 L1200,800 L0,800 Z" 
          fill="url(#mountainGradient1)" 
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <path 
          d="M0,700 L200,500 L400,600 L600,350 L800,500 L1000,300 L1200,550 L1200,800 L0,800 Z" 
          fill="url(#mountainGradient2)" 
          className="animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '6s' }}
        />
        
        {/* Sun */}
        <circle cx="960" cy="160" r="40" fill="url(#sunGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating altitude markers */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="250" r="3" fill="rgb(59, 130, 246)" />
          <text x="210" y="255" fill="rgb(59, 130, 246)" fontSize="10" fontFamily="monospace">5280ft</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="500" cy="180" r="3" fill="rgb(147, 197, 253)" />
          <text x="510" y="185" fill="rgb(147, 197, 253)" fontSize="10" fontFamily="monospace">8000ft</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="800" cy="120" r="3" fill="rgb(209, 213, 219)" />
          <text x="810" y="125" fill="rgb(209, 213, 219)" fontSize="10" fontFamily="monospace">14000ft</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Elevation Card Component
function FloatingElevationCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(delay * 2) * 10}px)`
      }}
    >
      {children}
    </div>
  );
}

export default function DenverLocationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Rocky Mountain Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-gray-900 overflow-hidden">
        <RockyMountainBackground />
        
        {/* Mountain Atmosphere Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Professional Mountain Environment Imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1464822759844-d150ad6d1dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Rocky Mountains Technology Environment" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Altitude Metrics Cards */}
            <div className="absolute top-20 right-10 hidden lg:block">
              <FloatingElevationCard delay={0.5}>
                <div className="text-white/90 text-sm font-medium">Mile High Advantage</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={5280} suffix=" ft" />
                </div>
              </FloatingElevationCard>
            </div>
            
            <div className="absolute top-40 left-10 hidden lg:block">
              <FloatingElevationCard delay={1}>
                <div className="text-white/90 text-sm font-medium">Mountain Peaks</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={58} suffix="+" />
                </div>
              </FloatingElevationCard>
            </div>
            
            <div className="absolute bottom-40 right-20 hidden lg:block">
              <FloatingElevationCard delay={1.5}>
                <div className="text-white/90 text-sm font-medium">Tech Companies</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={2200} suffix="+" />
                </div>
              </FloatingElevationCard>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium tracking-wide">ROCKY MOUNTAIN CAPITAL SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Mile High Capital
                <span className="block bg-gradient-to-r from-blue-400 via-gray-300 to-slate-400 bg-clip-text text-transparent mt-2">
                  Elevation Advantage
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Premium altitude-advantage capital introduction platform connecting Colorado's high-elevation innovation companies with tier-1 investors across cleantech, aerospace, and outdoor technology sectors.
              </p>
              
              {/* Interactive Metrics Dashboard */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={2} prefix="$" suffix=".8B+" />
                  </div>
                  <div className="text-white/70 text-sm">Capital Deployed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={350} suffix="+" />
                  </div>
                  <div className="text-white/70 text-sm">Investor Network</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={85} suffix="%" />
                  </div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={5} suffix=" Months" />
                  </div>
                  <div className="text-white/70 text-sm">Avg Timeline</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Schedule Rocky Mountain Strategy Session
                </button>
                
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore Mile High Network
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mountain fog overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* Mile High Investment Ecosystem */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
        {/* Subtle mountain grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="mountain-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 10 5 L 5 10 L 0 5 Z" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#mountain-grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-gray-100 border border-blue-200/50 mb-8 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-transparent bg-gradient-to-r from-blue-700 to-gray-700 bg-clip-text text-sm font-semibold tracking-wide">MILE HIGH INVESTMENT ECOSYSTEM</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-8">
              Rocky Mountain
              <span className="block">Capital Elevation</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Denver's elevation advantage extends beyond geography to capital formation, creating unique opportunities for high-altitude innovation across cleantech, aerospace, and outdoor technology sectors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-4 animate-pulse"></span>
                Mile High Innovation Drivers
              </h3>
              
              <div className="space-y-8">
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-blue-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Cleantech Capital Concentration</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">World's third-largest cleantech ecosystem with $450M+ annual deployment across renewable energy, energy storage, and climate technology innovations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-blue-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Aerospace Innovation Corridor</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">Lockheed Martin, Ball Aerospace, and 180+ space technology companies creating $8.4B+ annual aerospace economy with specialized investor networks.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-blue-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Outdoor Industry Ecosystem</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">400+ outdoor recreation companies generating $62B+ economic impact, with specialized adventure tech and sustainable products funding networks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-blue-800 to-gray-900 rounded-3xl shadow-2xl p-10 text-white border border-blue-500/20">
              <div className="flex items-center mb-8">
                <h3 className="text-3xl font-bold text-blue-400">Live Mountain Metrics</h3>
                <div className="ml-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-blue-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Cleantech VCs</span>
                  <span className="text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">32</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-blue-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Aerospace Investors</span>
                  <span className="text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">18</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-blue-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Outdoor Industry Funds</span>
                  <span className="text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">25</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-blue-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Annual Deal Volume</span>
                  <span className="text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">$2.8B+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-blue-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Average Series A</span>
                  <span className="text-green-400 font-bold text-xl">$18M</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400 mb-2 font-mono">ALTITUDE ADVANTAGE INDEX</div>
                <div className="text-2xl font-bold text-green-400">VOM-DEN: +18.7% ↗</div>
                <div className="text-sm text-slate-400">Mile High Innovation Activity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premier Rocky Mountain Services */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900/20 to-gray-900/20 overflow-hidden">
        {/* Dynamic mountain elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-gray-500/20 backdrop-blur-md border border-white/10 mb-8">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-ping"></div>
              <span className="text-white text-sm font-semibold tracking-widest">ROCKY MOUNTAIN SERVICE SUITE</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Altitude-Grade
              <span className="block bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
                Capital Solutions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              High-elevation capital introduction infrastructure specialized for Colorado's unique ecosystem of cleantech, aerospace, and outdoor innovation companies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cleantech & Energy - Premium Card */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-slate-900/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-blue-800/30 hover:to-slate-800/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Professional Cleantech Environment Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Cleantech Environment" className="w-full h-full object-cover rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-8">
                  <div className="relative w-20 h-20 mr-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-slate-500 rounded-3xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 to-slate-400 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Cleantech & Energy Capital</h3>
                    <p className="text-white/80 leading-relaxed">Premier access to world's third-largest cleantech ecosystem, connecting breakthrough sustainability companies with specialized energy and climate investors.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Target Funding</h4>
                    <p className="text-white/70 text-lg font-bold">$2M - $50M</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-blue-400 text-lg font-bold">
                      <AnimatedCounter end={78} suffix="%" />
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Timeline</h4>
                    <p className="text-white/70 text-lg font-bold">4-8 Months</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Investor Network</h4>
                    <p className="text-slate-400 text-lg font-bold">
                      <AnimatedCounter end={32} suffix=" Funds" />
                    </p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-slate-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-slate-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Explore Cleantech Services
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Outdoor Innovation - Premium Card */}
            <div className="group relative bg-gradient-to-br from-gray-900/20 to-blue-900/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-gray-800/30 hover:to-blue-800/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Professional Outdoor Tech Environment Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Outdoor Tech Environment" className="w-full h-full object-cover rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-8">
                  <div className="relative w-20 h-20 mr-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-blue-500 rounded-3xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-gray-400 to-blue-400 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Outdoor Innovation Capital</h3>
                    <p className="text-white/80 leading-relaxed">Unique access to outdoor recreation technology investors and adventure sports platforms, leveraging Colorado's $62B outdoor economy ecosystem.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Target Range</h4>
                    <p className="text-white/70 text-lg font-bold">$1M - $25M</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-gray-400 text-lg font-bold">
                      <AnimatedCounter end={74} suffix="%" />
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Timeline</h4>
                    <p className="text-white/70 text-lg font-bold">3-7 Months</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Industry Funds</h4>
                    <p className="text-blue-400 text-lg font-bold">
                      <AnimatedCounter end={25} suffix=" Partners" />
                    </p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-gray-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-gray-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Explore Outdoor Tech Services
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Aerospace & Defense - Premium Card */}
            <div className="group relative bg-gradient-to-br from-slate-900/20 to-gray-900/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-slate-800/30 hover:to-gray-800/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Professional Aerospace Environment Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Aerospace Environment" className="w-full h-full object-cover rounded-2xl" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-8">
                  <div className="relative w-20 h-20 mr-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-gray-500 rounded-3xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-slate-400 to-gray-400 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">Aerospace & Space Capital</h3>
                    <p className="text-white/80 leading-relaxed">Elite access to Colorado's aerospace corridor investors and space technology specialists, including $8.4B aerospace economy connections.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Target Size</h4>
                    <p className="text-white/70 text-lg font-bold">$5M - $100M</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Success Rate</h4>
                    <p className="text-slate-400 text-lg font-bold">
                      <AnimatedCounter end={72} suffix="%" />
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Timeline</h4>
                    <p className="text-white/70 text-lg font-bold">6-12 Months</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Defense Investors</h4>
                    <p className="text-gray-400 text-lg font-bold">
                      <AnimatedCounter end={18} suffix=" Specialists" />
                    </p>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-slate-700 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Explore Aerospace Services
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mile High Success Stories */}
      <section className="relative py-24 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        {/* Mountain peak pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" opacity="0.03">
            <defs>
              <pattern id="peak-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="rgb(59, 130, 246)"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#peak-pattern)" />
          </svg>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200/50 mb-8 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-slate-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-transparent bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-sm font-semibold tracking-wide">ROCKY MOUNTAIN SUCCESS STORIES</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-8">
              Mile High
              <span className="block">Capital Victories</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Successful capital introductions connecting Colorado's high-altitude innovation companies with specialized mountain region and national investors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-slate-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative w-20 h-20 mr-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">$28M</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">CleanTech Series A+</h3>
                    <p className="text-slate-600">Denver renewable energy innovation</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  Connected a breakthrough solar storage technology company with Colorado cleantech ecosystem and national impact investors, securing $28M Series A+ for utility-scale manufacturing expansion and geographic growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50/50 rounded-lg p-3">
                    <div className="text-sm text-slate-500">Industry Focus</div>
                    <div className="font-semibold text-slate-900">Energy Storage</div>
                  </div>
                  <div className="bg-slate-50/50 rounded-lg p-3">
                    <div className="text-sm text-slate-500">Timeline</div>
                    <div className="font-semibold text-slate-900">5 Months</div>
                  </div>
                </div>
                
                <div className="text-sm text-slate-600 border-t border-slate-200 pt-4">
                  <span className="font-medium">Investor Type:</span> Cleantech VCs + National Impact Funds + Colorado Energy Partners
                </div>
              </div>
            </div>

            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="relative w-20 h-20 mr-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">$15M</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Outdoor Tech Growth</h3>
                    <p className="text-slate-600">Adventure platform technology</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  Introduced an adventure recreation technology platform to Colorado outdoor industry investors and national lifestyle venture funds, securing $15M growth capital for product development and market expansion.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50/50 rounded-lg p-3">
                    <div className="text-sm text-slate-500">Industry Focus</div>
                    <div className="font-semibold text-slate-900">Adventure Tech</div>
                  </div>
                  <div className="bg-slate-50/50 rounded-lg p-3">
                    <div className="text-sm text-slate-500">Timeline</div>
                    <div className="font-semibold text-slate-900">4 Months</div>
                  </div>
                </div>
                
                <div className="text-sm text-slate-600 border-t border-slate-200 pt-4">
                  <span className="font-medium">Investor Type:</span> Outdoor Industry VCs + Lifestyle Venture Funds + Colorado Tourism Board
                </div>
              </div>
            </div>
          </div>
          
          {/* Mountain Range Visualization */}
          <div className="mt-16 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 border border-slate-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Mile High Performance Metrics</h3>
              <p className="text-slate-600">Elevation advantage in capital introduction success rates</p>
            </div>
            
            <div className="grid grid-cols-4 gap-6 text-center">
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={78} suffix="%" />
                </div>
                <div className="text-sm text-slate-600">Success Rate</div>
                <div className="w-full h-2 bg-slate-200 rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-slate-600 mb-2">
                  <AnimatedCounter end={5} suffix=" Mo" />
                </div>
                <div className="text-sm text-slate-600">Avg Timeline</div>
                <div className="w-full h-2 bg-slate-200 rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-slate-500 to-slate-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-600 mb-2">
                  <AnimatedCounter end={75} suffix="+" />
                </div>
                <div className="text-sm text-slate-600">Investor Network</div>
                <div className="w-full h-2 bg-slate-200 rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="group hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  <AnimatedCounter end={18} prefix="$" suffix="M" />
                </div>
                <div className="text-sm text-slate-600">Avg Deal Size</div>
                <div className="w-full h-2 bg-slate-200 rounded-full mt-2">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Mile High Access CTA */}
      <section className="relative py-32 bg-gradient-to-br from-blue-950 via-slate-950 to-gray-950 overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Professional mountain boardroom imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Mountain Executive Meeting" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 lg:p-16">
              <div className="text-center">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:scale-105 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full mr-3 animate-ping"></div>
                  <span className="text-white text-sm font-semibold tracking-widest">MILE HIGH ACCESS PORTAL</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Scale at
                  <span className="block bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
                    5,280 Feet
                  </span>
                </h2>
                <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join Colorado's high-altitude innovation companies in our exclusive Rocky Mountain capital introduction platform. Connect with cleantech, aerospace, and outdoor technology investors at elevation advantage.
                </p>
                
                {/* Interactive altitude metrics showcase */}
                <div className="grid grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={5280} suffix=" Ft" />
                    </div>
                    <div className="text-white/70 text-sm">Mile High Advantage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={12} suffix=" Intros" />
                    </div>
                    <div className="text-white/70 text-sm">Per Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={5} suffix=" Months" />
                    </div>
                    <div className="text-white/70 text-sm">To Funding</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-slate-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                    Schedule Rocky Mountain Consultation
                  </button>
                  
                  <button className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group">
                    Access Mile High Network
                    <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-white/60 text-lg">
                  Confidential consultations • Rocky Mountain coverage • Altitude advantage service standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Denver",
          description: "Premier Denver capital introduction services connecting Colorado companies with Rocky Mountain investors, venture capital firms, and private equity partners focusing on cleantech, aerospace, and outdoor innovation. Mile High altitude advantage for high-elevation investment opportunities.",
          url: "https://vommuli.com/locations/denver",
          telephone: "+1-303-DEN-FUND",
          address: {
            streetAddress: "Downtown Denver",
            addressLocality: "Denver", 
            addressRegion: "CO",
            postalCode: "80202",
            addressCountry: "US"
          },
          geo: {
            latitude: "39.7392",
            longitude: "-104.9903"
          },
          areaServed: [
            "Denver",
            "Boulder", 
            "Fort Collins",
            "Colorado Springs",
            "Lakewood",
            "Aspen",
            "Vail",
            "Rocky Mountain Region",
            "Mile High City",
            "Front Range"
          ],
          serviceType: [
            "Denver Venture Capital Introduction",
            "Colorado Private Equity Connections",
            "Cleantech Capital Solutions", 
            "Aerospace & Defense Funding",
            "Outdoor Industry Investment",
            "Rocky Mountain Growth Capital",
            "Colorado Energy Venture Capital",
            "Mile High Investment Advisory"
          ],
          keywords: [
            "Denver venture capital",
            "Colorado startup funding",
            "Mile High investment",
            "Rocky Mountain capital",
            "cleantech funding Denver",
            "aerospace investment Colorado"
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Rocky Mountain Capital Introduction Services",
          description: "Comprehensive capital introduction services including cleantech funding, aerospace investment, outdoor industry capital, and high-altitude innovation financing for Colorado companies.",
          url: "/locations/denver"
        }}
      />
    </div>
  );
}