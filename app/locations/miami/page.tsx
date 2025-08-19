'use client';

import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useState, useEffect } from 'react';

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

// Ocean Wave SVG Background Component
function OceanWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(14, 165, 233)" />
            <stop offset="50%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" />
          </linearGradient>
          <radialGradient id="sunGradient" cx="20%" cy="20%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" />
            <stop offset="100%" stopColor="rgb(245, 158, 11)" />
          </radialGradient>
        </defs>
        
        {/* Flowing wave paths */}
        <path 
          d="M0,400 Q300,300 600,350 T1200,320 L1200,800 L0,800 Z" 
          fill="url(#waveGradient1)" 
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,500 Q200,450 500,480 T1000,460 L1200,450 L1200,800 L0,800 Z" 
          fill="url(#waveGradient2)" 
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Sun */}
        <circle cx="200" cy="150" r="45" fill="url(#sunGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating capital markers */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="300" cy="250" r="4" fill="rgb(6, 182, 212)" />
          <text x="310" y="255" fill="rgb(6, 182, 212)" fontSize="12" fontFamily="monospace">$4.2B</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="200" r="4" fill="rgb(59, 130, 246)" />
          <text x="610" y="205" fill="rgb(59, 130, 246)" fontSize="12" fontFamily="monospace">LatAm</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="900" cy="180" r="4" fill="rgb(147, 51, 234)" />
          <text x="910" y="185" fill="rgb(147, 51, 234)" fontSize="12" fontFamily="monospace">80+ FOs</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Coastal Card Component
function FloatingCoastalCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(delay * 1.5) * 8}px)`
      }}
    >
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Miami Capital Introduction Services | Florida Venture Capital & Private Equity | Vommuli Ventures',
  description: 'Premier Miami capital introduction services connecting South Florida companies with Latin America gateway investors, venture capital firms, and private equity partners. Expert Miami fundraising advisory.',
  keywords: [
    'Miami venture capital',
    'Florida startup funding',
    'Miami private equity',
    'South Florida investors',
    'Miami capital introduction',
    'Florida investment advisory',
    'Miami Series A funding',
    'Brickell venture capital',
    'Miami growth capital',
    'Florida venture capital firms',
    'Miami startup accelerators',
    'South Florida private equity connections',
    'Miami fintech funding',
    'Florida angel investors',
    'Miami capital raising consultants',
    'Latin America venture capital',
    'Miami real estate private equity',
    'Florida healthcare venture capital',
    'Miami cryptocurrency funding',
    'South Florida family offices',
    'Miami international investors',
    'Florida tourism venture capital',
    'Miami shipping logistics funding',
    'South Florida impact investing',
    'Miami blockchain funding'
  ],
  openGraph: {
    title: 'Miami Capital Introduction Services | South Florida VC & PE',
    description: 'Connect with top Miami investors and South Florida venture capital firms. Expert capital introduction services in the Latin America gateway.',
    url: 'https://vommuli.com/locations/miami',
  },
};

export default function MiamiLocationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Coastal Capital Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-cyan-950 via-blue-900 to-indigo-950 overflow-hidden">
        <OceanWaveBackground />
        
        {/* Tropical Atmosphere Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Professional Coastal Business Imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Miami Business District" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Coastal Metrics Cards */}
            <div className="absolute top-20 right-10 hidden lg:block">
              <FloatingCoastalCard delay={0.5}>
                <div className="text-white/90 text-sm font-medium">LatAm Gateway</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={50} prefix="$" suffix="B+" />
                </div>
              </FloatingCoastalCard>
            </div>
            
            <div className="absolute top-40 left-10 hidden lg:block">
              <FloatingCoastalCard delay={1}>
                <div className="text-white/90 text-sm font-medium">Family Offices</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={80} suffix="+" />
                </div>
              </FloatingCoastalCard>
            </div>
            
            <div className="absolute bottom-40 right-20 hidden lg:block">
              <FloatingCoastalCard delay={1.5}>
                <div className="text-white/90 text-sm font-medium">Crypto Capital</div>
                <div className="text-2xl font-bold text-white">#1</div>
              </FloatingCoastalCard>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium tracking-wide">LATIN AMERICA GATEWAY CAPITAL</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Magic City Capital
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                  Global Advantage
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Premier international capital introduction platform connecting South Florida's innovation companies with Latin American investors, crypto capital networks, and global fintech institutions.
              </p>
              
              {/* Interactive Metrics Dashboard */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={4} prefix="$" suffix=".2B+" />
                  </div>
                  <div className="text-white/70 text-sm">Annual Flow</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={300} suffix="+" />
                  </div>
                  <div className="text-white/70 text-sm">Global Network</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={89} suffix="%" />
                  </div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={4} suffix=" Months" />
                  </div>
                  <div className="text-white/70 text-sm">Avg Timeline</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Schedule Global Strategy Session
                </button>
                
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore LatAm Network
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coastal tide overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* Miami Market Overview */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Magic City Investment Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Miami has transformed into a global financial hub, attracting international investors, family offices, and innovative startups from across the Americas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Miami's Investment Boom</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Financial Migration</h4>
                    <p className="text-slate-400">Major hedge funds, family offices, and PE firms relocating from NYC, creating unprecedented capital concentration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">LatAm Investment Hub</h4>
                    <p className="text-slate-400">Strategic gateway for $50B+ annual Latin American investment flows and cross-border deal making.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cryptocurrency Capital</h4>
                    <p className="text-slate-400">Leading crypto and blockchain innovation center with major exchanges and Web3 companies establishing headquarters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Miami Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Venture Capital Firms</span>
                  <span className="text-white font-semibold">35+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Private Equity Firms</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Family Offices</span>
                  <span className="text-white font-semibold">80+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Annual Deal Volume</span>
                  <span className="text-white font-semibold">$4.2B+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Average Deal Size</span>
                  <span className="text-white font-semibold">$15M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami-Specific Services */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              South Florida Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized services tailored to Miami's international business environment and Latin American connectivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Crypto</h3>
              <p className="text-slate-300 mb-6">Deep expertise in Miami's booming fintech and cryptocurrency ecosystem, connecting with specialized blockchain and digital asset investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Blockchain technology
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Digital payment platforms
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Cryptocurrency exchanges
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Latin America Gateway</h3>
              <p className="text-slate-300 mb-6">Unique access to Latin American investors and cross-border investment opportunities, leveraging Miami's position as the LatAm business capital.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Brazilian family offices
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Mexican corporate ventures
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Colombian growth funds
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real Estate & Hospitality</h3>
              <p className="text-slate-300 mb-6">Specialized expertise in Miami's luxury real estate and hospitality sectors, connecting with property development and tourism investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Luxury real estate development
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Hospitality technology
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Tourism and travel tech
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Success Stories */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Miami Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Miami companies with South Florida and international investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$35M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Fintech Series B</h3>
                  <p className="text-slate-400">Miami-based payment platform</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Successfully connected a Latin America-focused payment platform with Miami family offices and international fintech investors, resulting in a $35M Series B round.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Family Offices + International VCs
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$22M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">PropTech Growth</h3>
                  <p className="text-slate-400">Real estate technology startup</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Introduced a luxury real estate technology company to specialized Miami real estate investors and Brazilian family offices, securing $22M in growth capital.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Real Estate Funds + LatAm Investors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 lg:p-12 border border-cyan-500/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Tap into Miami's Global Network?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with South Florida's international investor ecosystem and Latin American capital for your Miami-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Miami Consultation
              </a>
              <a 
                href="/contact" 
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Our Miami Team
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Brickell Financial District | South Beach | Latin America Gateway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Miami",
          description: "Premier Miami capital introduction services connecting South Florida companies with Latin America gateway investors, venture capital firms, and private equity partners.",
          url: "https://vommuli.com/locations/miami",
          telephone: "+1-305-MIA-FUND",
          address: {
            streetAddress: "Brickell Financial District",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33131",
            addressCountry: "US"
          },
          geo: {
            latitude: "25.7617",
            longitude: "-80.1918"
          },
          areaServed: [
            "Miami",
            "South Beach", 
            "Brickell",
            "Coral Gables",
            "Fort Lauderdale",
            "South Florida"
          ],
          serviceType: [
            "Venture Capital Introduction",
            "Private Equity Connections",
            "Latin America Investment",
            "Fintech Funding",
            "International Capital Access"
          ]
        }}
      />
    </div>
  );
}