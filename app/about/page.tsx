'use client';

import type { Metadata } from 'next';
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

// Professional Fintech SVG Background Component
function FintechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="fintechGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="60%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </linearGradient>
          <linearGradient id="fintechGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="60%" stopColor="rgb(139, 92, 246)" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" />
          </linearGradient>
          <radialGradient id="expertiseGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </radialGradient>
        </defs>
        
        {/* Professional fintech chart lines */}
        <path 
          d="M0,600 L200,580 L400,520 L600,480 L800,440 L1000,400 L1200,360" 
          fill="none" 
          stroke="url(#fintechGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,650 L200,620 L400,580 L600,540 L800,500 L1000,460 L1200,420" 
          fill="none" 
          stroke="url(#fintechGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Expertise indicators */}
        <circle cx="400" cy="200" r="40" fill="url(#expertiseGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating fintech indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(99, 102, 241)" />
          <text x="210" y="305" fill="rgb(99, 102, 241)" fontSize="10" fontFamily="monospace">$500M+</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(139, 92, 246)" />
          <text x="610" y="255" fill="rgb(139, 92, 246)" fontSize="10" fontFamily="monospace">200+</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(168, 85, 247)" />
          <text x="1010" y="205" fill="rgb(168, 85, 247)" fontSize="10" fontFamily="monospace">85%</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Card Component
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <FintechBackground />
      
      {/* Professional Fintech Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Professional Fintech Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Expertise Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Capital Raised</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={500} prefix="$" suffix="M+" />
          </div>
        </FloatingCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={85} suffix="%" />
          </div>
        </FloatingCard>
      </div>

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
                    <div className="text-4xl font-black text-blue-400 mb-2">
                      <AnimatedCounter end={500} prefix="$" suffix="M+" />
                    </div>
                    <p className="text-slate-300 text-sm">Series A Capital Raised</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-indigo-400 mb-2">
                      <AnimatedCounter end={200} suffix="+" />
                    </div>
                    <p className="text-slate-300 text-sm">Startups Funded</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">
                      <AnimatedCounter end={85} suffix="%" />
                    </div>
                    <p className="text-slate-300 text-sm">Success Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-cyan-400 mb-2">
                      <AnimatedCounter end={6} suffix=".2" />
                    </div>
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Venture Capital Experience</h3>
                <p className="text-slate-300 mb-4">Former investment professionals from leading venture capital firms and growth equity funds.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• <AnimatedCounter end={15} suffix="+" /> years average VC experience</li>
                  <li>• Series 7, 63, 65 licenses</li>
                  <li>• CFA, MBA credentials</li>
                  <li>• <AnimatedCounter end={50} suffix="+" /> portfolio companies managed</li>
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
                  <li>• <AnimatedCounter end={150} suffix="+" /> VC firm relationships</li>
                  <li>• Silicon Valley, NYC, Austin coverage</li>
                  <li>• Series A specialization focus</li>
                  <li>• Direct partner-level access</li>
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
                  <li>• <AnimatedCounter end={20} suffix="+" /> sectors covered</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Enhanced Team Leadership Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-6 flex items-center justify-center">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">Leadership Team</h3>
                    <p className="text-slate-300">Former VC Partners & Investment Directors</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                    <span className="text-slate-300">Average Investment Experience</span>
                    <span className="text-blue-400 font-bold">
                      <AnimatedCounter end={18} suffix=" years" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                    <span className="text-slate-300">Combined Deals Executed</span>
                    <span className="text-blue-400 font-bold">
                      <AnimatedCounter end={800} suffix="+" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                    <span className="text-slate-300">Portfolio Company Exits</span>
                    <span className="text-blue-400 font-bold">
                      <AnimatedCounter end={45} suffix=" IPOs/M&A" />
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-300">Industry Recognition</span>
                    <span className="text-blue-400 font-bold">Top 1% VCs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mr-6 flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">Expertise Areas</h3>
                    <p className="text-slate-300">Specialized Investment Focus</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Technology</h4>
                    <p className="text-slate-300 text-sm">SaaS, AI/ML, Enterprise Software</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Fintech</h4>
                    <p className="text-slate-300 text-sm">Payments, Banking, RegTech</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Healthcare</h4>
                    <p className="text-slate-300 text-sm">Digital Health, Biotech, MedTech</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">Consumer</h4>
                    <p className="text-slate-300 text-sm">E-commerce, Marketplaces, D2C</p>
                  </div>
                </div>
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
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get Investment Readiness Assessment</span>
                  </Link>
                  
                  <Link 
                    href="/services"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      View Our Services
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
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