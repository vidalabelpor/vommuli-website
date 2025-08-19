'use client';

import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateLocalBusinessSchema, cityCoordinates } from '@/lib/seo-utils';
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

// Texas Tech Skyline SVG Background Component
function SiliconHillsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-12">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="techGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(234, 88, 12)" />
            <stop offset="60%" stopColor="rgb(251, 146, 60)" />
            <stop offset="100%" stopColor="rgb(253, 186, 116)" />
          </linearGradient>
          <linearGradient id="techGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(220, 38, 127)" />
            <stop offset="60%" stopColor="rgb(236, 72, 153)" />
            <stop offset="100%" stopColor="rgb(249, 168, 212)" />
          </linearGradient>
          <radialGradient id="texasSunGradient" cx="70%" cy="25%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" />
            <stop offset="100%" stopColor="rgb(245, 158, 11)" />
          </radialGradient>
        </defs>
        
        {/* Austin skyline silhouettes */}
        <path 
          d="M0,500 L80,480 L100,400 L120,420 L200,350 L220,360 L300,320 L350,340 L400,280 L450,300 L500,250 L550,270 L600,230 L650,250 L700,200 L750,220 L800,180 L850,200 L900,160 L950,180 L1000,140 L1050,160 L1100,120 L1150,140 L1200,100 L1200,800 L0,800 Z" 
          fill="url(#techGradient1)" 
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        />
        <path 
          d="M0,600 L100,580 L150,520 L200,540 L280,480 L320,500 L400,460 L480,480 L560,440 L640,460 L720,420 L800,440 L880,400 L960,420 L1040,380 L1120,400 L1200,360 L1200,800 L0,800 Z" 
          fill="url(#techGradient2)" 
          className="animate-pulse"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        />
        
        {/* Texas sun */}
        <circle cx="850" cy="200" r="50" fill="url(#texasSunGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating tech indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="250" cy="320" r="4" fill="rgb(251, 146, 60)" />
          <text x="260" y="325" fill="rgb(251, 146, 60)" fontSize="11" fontFamily="monospace">SXSW</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="500" cy="220" r="4" fill="rgb(236, 72, 153)" />
          <text x="510" y="225" fill="rgb(236, 72, 153)" fontSize="11" fontFamily="monospace">#3 VC</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="800" cy="160" r="4" fill="rgb(249, 168, 212)" />
          <text x="810" y="165" fill="rgb(249, 168, 212)" fontSize="11" fontFamily="monospace">$8.5B</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Tech Hub Card Component
function FloatingTechCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(delay * 1.8) * 12}px)`
      }}
    >
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Austin Series A Funding Advisory | Texas VC Introductions & Investment Readiness | Vommuli',
  description: 'Austin Series A funding advisory with Silicon Hills expertise. 65+ successful Austin fundraises. Expert VC introductions to Texas investors. #3 VC hub globally. Local market intelligence.',
  keywords: [
    'Austin venture capital',
    'Texas startup funding',
    'Austin private equity',
    'Silicon Hills investors',
    'Austin capital introduction',
    'Texas investment advisory',
    'Austin Series A funding',
    'South by Southwest investors',
    'Austin growth capital',
    'Texas venture capital firms',
    'Austin startup accelerators',
    'Texas private equity connections',
    'Austin tech funding',
    'Texas angel investors',
    'Austin capital raising consultants',
    'Silicon Hills venture capital',
    'Austin fintech funding',
    'Texas energy venture capital',
    'Austin biotech investors',
    'Texas real estate private equity',
    'Austin cryptocurrency funding',
    'Texas healthcare venture capital',
    'Austin AI funding',
    'Texas cleantech investors',
    'Austin SaaS funding'
  ],
  openGraph: {
    title: 'Austin Capital Introduction Services | Texas VC & PE',
    description: 'Connect with top Austin investors and Texas venture capital firms. Expert capital introduction services in Silicon Hills tech hub.',
    url: 'https://vommuli.com/locations/austin',
  },
};

export default function AustinLocationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Silicon Hills Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-950 via-pink-900 to-purple-950 overflow-hidden">
        <SiliconHillsBackground />
        
        {/* Texas Tech Energy Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Professional Austin Tech Environment Imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Austin Tech District" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Silicon Hills Metrics Cards */}
            <div className="absolute top-20 right-10 hidden lg:block">
              <FloatingTechCard delay={0.5}>
                <div className="text-white/90 text-sm font-medium">Global VC Rank</div>
                <div className="text-2xl font-bold text-white">#3</div>
              </FloatingTechCard>
            </div>
            
            <div className="absolute top-40 left-10 hidden lg:block">
              <FloatingTechCard delay={1}>
                <div className="text-white/90 text-sm font-medium">SXSW Network</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={400} suffix="K+" />
                </div>
              </FloatingTechCard>
            </div>
            
            <div className="absolute bottom-40 right-20 hidden lg:block">
              <FloatingTechCard delay={1.5}>
                <div className="text-white/90 text-sm font-medium">Deal Volume</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={8} prefix="$" suffix=".5B" />
                </div>
              </FloatingTechCard>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium tracking-wide">SILICON HILLS CAPITAL SOLUTIONS</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Silicon Hills
                <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
                  Tech Capital
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Premier Series A capital introduction platform for Austin's booming tech ecosystem. Connect with the #3 global VC hub's most influential investors, SXSW networks, and Texas innovation capital.
              </p>
              
              {/* Interactive Austin Metrics Dashboard */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={75} suffix="+" />
                  </div>
                  <div className="text-white/70 text-sm">Austin Raises</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={520} prefix="$" suffix="M+" />
                  </div>
                  <div className="text-white/70 text-sm">Capital Deployed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={91} suffix="%" />
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
                <button className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Schedule SXSW Network Session
                </button>
                
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore Silicon Hills Network
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Texas heat haze overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* Austin Market Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Silicon Hills Investment Ecosystem
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Austin has emerged as one of America's premier tech hubs, attracting major corporations, innovative startups, and sophisticated investors from across the globe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-8">Why Austin is Booming</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Tech Giant Migration</h4>
                    <p className="text-secondary-700 leading-relaxed">Tesla, Oracle, Apple, and Google have established major operations, creating a massive talent and capital influx.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">SXSW Innovation Platform</h4>
                    <p className="text-secondary-700 leading-relaxed">Annual convergence of 400,000+ attendees creates unparalleled networking and deal-making opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">University of Texas Ecosystem</h4>
                    <p className="text-secondary-700 leading-relaxed">Leading research university with strong entrepreneurship programs and technology transfer initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">Austin Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Venture Capital Firms</span>
                  <span className="text-primary-900 font-bold text-lg">45+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Private Equity Firms</span>
                  <span className="text-primary-900 font-bold text-lg">30+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Active Startups</span>
                  <span className="text-primary-900 font-bold text-lg">3,500+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Annual Deal Volume</span>
                  <span className="text-primary-900 font-bold text-lg">$8.5B+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-secondary-700 font-medium">Average Deal Size</span>
                  <span className="text-primary-900 font-bold text-lg">$12M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin-Specific Services */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Austin Capital Introduction Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized services tailored to Austin's unique tech ecosystem and emerging market dynamics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Tech Startup Funding</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Direct connections to Austin's thriving VC ecosystem, including local funds and Silicon Valley firms with Austin presence.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Live Oak Venture Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  ATX Venture Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  S3 Ventures
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Energy Innovation</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Specialized expertise in Austin's growing cleantech and energy innovation sector, connecting with Texas energy investors.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Solar and renewable energy
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Energy storage solutions
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Smart grid technology
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">SXSW Network</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Leverage our extensive South by Southwest connections to access investors, mentors, and strategic partners during and beyond the annual festival.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Interactive technology showcase
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Music industry innovation
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Film and media technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Austin Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Austin companies with local and national investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$25M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">SaaS Series B</h3>
                  <p className="text-secondary-600">Austin enterprise software company</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Connected an Austin-based SaaS platform with Texas-based growth equity investors and Silicon Valley VCs, resulting in a $25M Series B round for market expansion.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Growth Equity + VC
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$40M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">CleanTech Growth</h3>
                  <p className="text-secondary-600">Solar energy technology startup</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Introduced a solar technology company to specialized energy investors and Texas-based family offices, securing $40M in growth capital for manufacturing scale-up.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Energy Funds + Family Offices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Contact CTA */}
      <section className="bg-service-gradient section-padding">
        <div className="container max-w-4xl">
          <div className="card-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Tap into Austin's Tech Boom?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with Silicon Hills' dynamic investor network and secure the capital needed to scale your Austin-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="btn-accent"
              >
                Schedule Austin Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-6 rounded-3xl transition-all duration-200"
              >
                Contact Our Austin Team
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>Silicon Hills | Downtown Austin | SXSW Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Schema Markup (Phase 3 optimization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(
            'Austin',
            'Texas', 
            cityCoordinates.Austin.lat,
            cityCoordinates.Austin.lng
          ))
        }}
      />
      
      {/* Additional service-specific schema */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Austin",
          description: "Austin leaped to #3 VC hub globally in Q1 2025. Premier capital introduction services connecting Silicon Hills startups with Texas investors.",
          url: "https://vommuli.com/locations/austin",
          telephone: "+1-512-ATX-FUND",
          serviceType: [
            "Austin Venture Capital Introduction",
            "Texas Private Equity Connections", 
            "Silicon Hills Startup Funding",
            "Series A Funding Advisory Austin",
            "SXSW Investor Network Access"
          ],
          keywords: [
            "Austin venture capital",
            "Austin startup funding", 
            "Texas VC firms",
            "#3 VC hub 2025"
          ]
        }}
      />
    </div>
  );
}