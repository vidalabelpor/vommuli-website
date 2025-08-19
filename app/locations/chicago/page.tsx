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

// Trading Floor SVG Background Component
function TradingFloorBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-12">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="tradingGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(234, 88, 12)" />
            <stop offset="60%" stopColor="rgb(249, 115, 22)" />
            <stop offset="100%" stopColor="rgb(251, 146, 60)" />
          </linearGradient>
          <linearGradient id="tradingGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(220, 38, 127)" />
            <stop offset="60%" stopColor="rgb(239, 68, 68)" />
            <stop offset="100%" stopColor="rgb(248, 113, 113)" />
          </linearGradient>
          <radialGradient id="marketGradient" cx="30%" cy="20%">
            <stop offset="0%" stopColor="rgb(245, 158, 11)" />
            <stop offset="100%" stopColor="rgb(217, 119, 6)" />
          </radialGradient>
        </defs>
        
        {/* Chicago skyline with trading emphasis */}
        <path 
          d="M0,400 L80,380 L120,350 L160,370 L220,320 L260,340 L320,290 L360,310 L420,260 L460,280 L520,230 L560,250 L620,200 L660,220 L720,170 L760,190 L820,140 L860,160 L920,110 L960,130 L1020,80 L1060,100 L1120,50 L1200,70 L1200,800 L0,800 Z" 
          fill="url(#tradingGradient1)" 
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,500 L100,480 L150,450 L200,470 L280,420 L320,440 L400,390 L480,410 L560,360 L640,380 L720,330 L800,350 L880,300 L960,320 L1040,270 L1120,290 L1200,240 L1200,800 L0,800 Z" 
          fill="url(#tradingGradient2)" 
          className="animate-pulse"
          style={{ animationDelay: '1.5s', animationDuration: '5s' }}
        />
        
        {/* Trading charts and indicators */}
        <circle cx="300" cy="200" r="50" fill="url(#marketGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating trading indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="4" fill="rgb(249, 115, 22)" />
          <text x="210" y="305" fill="rgb(249, 115, 22)" fontSize="11" fontFamily="monospace">CME</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="500" cy="200" r="4" fill="rgb(239, 68, 68)" />
          <text x="510" y="205" fill="rgb(239, 68, 68)" fontSize="11" fontFamily="monospace">$2.8T</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="800" cy="150" r="4" fill="rgb(245, 158, 11)" />
          <text x="810" y="155" fill="rgb(245, 158, 11)" fontSize="11" fontFamily="monospace">36 F500</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '3.5s' }}>
          <circle cx="950" cy="100" r="4" fill="rgb(251, 146, 60)" />
          <text x="960" y="105" fill="rgb(251, 146, 60)" fontSize="11" fontFamily="monospace">Trading</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Trading Card Component
function FloatingTradingCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <div 
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `translateY(${Math.sin(delay * 1.8) * 10}px)`
      }}
    >
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Chicago Series A Funding Advisory | Commodities Trading & CME Fintech Capital | Vommuli',
  description: 'Premier Chicago capital introduction services connecting commodities trading and fintech startups with CME Group network and Illinois venture capital ecosystem. Expert trading floor fintech advisory.',
  keywords: [
    'Chicago venture capital',
    'Illinois fintech funding',
    'CME Group investors',
    'Chicago commodities trading',
    'Chicago private equity',
    'Midwest capital introduction',
    'Illinois investment advisory',
    'Chicago Series A funding',
    'Trading floor fintech',
    'Chicago growth capital',
    'Illinois venture capital firms',
    'Chicago startup accelerators',
    'Midwest fintech investors',
    'Chicago trading technology',
    'Illinois capital raising consultants',
    'Commodities venture capital',
    'Chicago financial services funding',
    'Illinois enterprise software',
    'Chicago logistics funding',
    'Midwest healthcare venture capital',
    'Chicago manufacturing funding',
    'Illinois transportation tech',
    'Chicago supply chain funding',
    'Midwest industrial tech investors',
    'Chicago B2B funding'
  ],
  openGraph: {
    title: 'Chicago Capital Introduction Services | CME Trading & Commodities VC',
    description: 'Connect with top Chicago investors and commodities trading venture capital firms. Expert trading floor fintech capital introduction services.',
    url: 'https://vommuli.com/locations/chicago',
  },
};


export default function ChicagoLocationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* Trading Floor Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-950 via-red-900 to-amber-950 overflow-hidden">
        <TradingFloorBackground />
        
        {/* Market Energy Atmosphere Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Professional Trading Floor Environment Imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Chicago Trading Floor" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Trading Metrics Cards */}
            <div className="absolute top-20 right-10 hidden lg:block">
              <FloatingTradingCard delay={0.5}>
                <div className="text-white/90 text-sm font-medium">Trading Volume</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={2} prefix="$" suffix=".8T" />
                </div>
              </FloatingTradingCard>
            </div>
            
            <div className="absolute top-40 left-10 hidden lg:block">
              <FloatingTradingCard delay={1}>
                <div className="text-white/90 text-sm font-medium">Fortune 500</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={36} suffix="" />
                </div>
              </FloatingTradingCard>
            </div>
            
            <div className="absolute bottom-40 right-20 hidden lg:block">
              <FloatingTradingCard delay={1.5}>
                <div className="text-white/90 text-sm font-medium">CME Group</div>
                <div className="text-2xl font-bold text-white">#1</div>
              </FloatingTradingCard>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium tracking-wide">COMMODITIES TRADING CAPITAL</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Chicago Trading
                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent mt-2">
                  Capital Center
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Premier commodities trading and fintech capital introduction platform connecting Chicago's enterprise-focused startups with CME Group networks and Midwest institutional investors.
              </p>
              
              {/* Interactive Trading Metrics Dashboard */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={85} suffix="+" />
                  </div>
                  <div className="text-white/70 text-sm">Chicago Raises</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={420} prefix="$" suffix="M+" />
                  </div>
                  <div className="text-white/70 text-sm">Capital Deployed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={88} suffix="%" />
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
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Schedule Trading Strategy Session
                </button>
                
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore CME Network
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trading floor overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* Chicago Trading Ecosystem */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Chicago Trading & Financial Ecosystem
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              World's leading commodities trading hub with deep enterprise customer base and cost-effective operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-8">Trading Capital Advantages</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">CME Group Leadership</h4>
                    <p className="text-secondary-700 leading-relaxed">World's largest derivatives marketplace with $2.8T+ annual trading volume and deep fintech innovation networks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Fortune 500 Concentration</h4>
                    <p className="text-secondary-700 leading-relaxed">36 Fortune 500 companies headquartered in Chicago, creating massive enterprise customer base for B2B startups.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Cost-Effective Operations</h4>
                    <p className="text-secondary-700 leading-relaxed">30-50% lower operational costs extend runway significantly while maintaining access to world-class talent.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">Chicago Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Trading Firms</span>
                  <span className="text-primary-900 font-bold text-lg">150+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">VC Firms</span>
                  <span className="text-primary-900 font-bold text-lg">30+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Fortune 500 HQs</span>
                  <span className="text-primary-900 font-bold text-lg">36</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Annual Deal Volume</span>
                  <span className="text-primary-900 font-bold text-lg">$2.8T+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-secondary-700 font-medium">Cost Advantage</span>
                  <span className="text-primary-900 font-bold text-lg">50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago VC Network */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our Chicago VC Network
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Established relationships with Chicago's most active Series A investors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {localVCs.map((vc, index) => (
              <div key={index} className="card bg-gradient-to-br from-primary-50 to-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{vc.firm}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Investment Focus:</h4>
                      <p className="text-secondary-700">{vc.focus}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Check Size:</h4>
                        <p className="text-secondary-700 font-medium">{vc.checkSize}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Specialization:</h4>
                        <p className="text-secondary-700 font-medium">{vc.specialization}</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-semibold text-blue-800 mb-2">Notable Portfolio:</h4>
                      <p className="text-blue-700">{vc.portfolio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Midwest Benefits */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              The Chicago/Midwest Advantage
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Why Chicago startups have unique competitive advantages in today's funding environment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {chicagoAdvantages.map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{advantage.advantage}</h3>
                  <p className="text-secondary-700 mb-6">{advantage.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Strategic Impact:</h4>
                    <p className="text-green-700">{advantage.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-primary-900 text-center mb-12">Additional Midwest Benefits</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {midwestBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-primary-900 mb-3">{benefit.benefit}</h4>
                  <p className="text-secondary-700 mb-4">{benefit.description}</p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <strong className="text-blue-800">Investor Advantage:</strong>
                    <span className="text-blue-700 ml-2">{benefit.advantage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Chicago Client Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Real results from Chicago-area startups we've helped secure Series A funding
            </p>
          </div>

          <div className="space-y-8">
            {clientSuccesses.map((client, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    <div>
                      <div className="bg-primary-600 text-white rounded-lg p-4 text-center mb-4">
                        <h3 className="font-bold text-lg">{client.company}</h3>
                        <p className="text-primary-200 text-sm">{client.sector}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3">Challenge:</h4>
                      <p className="text-secondary-700">{client.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3">Our Solution:</h4>
                      <p className="text-secondary-700">{client.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3">Outcome:</h4>
                      <p className="text-secondary-700">{client.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white section-padding">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Leverage Chicago's Advantages?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with Chicago VCs who understand your market position and competitive advantages
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Chicago Market Analysis</h3>
                <p className="text-white/80 mb-4">Understand Chicago's unique positioning advantages for your funding strategy</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Start Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your Chicago/Midwest fundraising strategy with our experts</p>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-900">
                  Book Meeting
                </Link>
              </div>
            </div>

            <QuickNavigation className="justify-center" />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">
              Services for Chicago Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive support for your Series A fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/locations/chicago"
            context="location"
            maxLinks={6}
            layout="grid"
            showDescriptions={true}
          />
        </div>
      </section>

      {/* Enhanced Location Schema Markup (Phase 3 optimization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(
            'Chicago',
            'Illinois', 
            41.8781,
            -87.6298
          ))
        }}
      />
      
      {/* Additional service-specific schema */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Chicago",
          description: "Premier Chicago capital introduction services connecting commodities trading and fintech startups with CME Group network and Illinois venture capital ecosystem.",
          url: "https://vommuli.com/locations/chicago",
          telephone: "+1-312-CME-FUND",
          serviceType: [
            "Chicago Venture Capital Introduction",
            "CME Group Trading Network", 
            "Illinois Fintech Funding",
            "Commodities Trading Capital",
            "Midwest Enterprise Investment"
          ],
          keywords: [
            "Chicago venture capital",
            "CME Group investors", 
            "Illinois fintech funding",
            "Chicago trading capital"
          ]
        }}
      />
    </main>
  );
}