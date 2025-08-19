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

// Academic Research SVG Background Component
function AcademicResearchBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-12">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="academicGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="60%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </linearGradient>
          <linearGradient id="academicGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="60%" stopColor="rgb(14, 165, 233)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </linearGradient>
          <radialGradient id="innovationGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" />
          </radialGradient>
        </defs>
        
        {/* MIT/Harvard campus silhouettes */}
        <path 
          d="M0,450 L100,430 L150,380 L200,400 L300,350 L350,370 L450,320 L500,340 L600,290 L650,310 L750,260 L800,280 L900,230 L950,250 L1050,200 L1100,220 L1200,170 L1200,800 L0,800 Z" 
          fill="url(#academicGradient1)" 
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '5s' }}
        />
        <path 
          d="M0,550 L150,530 L200,480 L300,500 L400,450 L500,470 L650,420 L750,440 L850,390 L950,410 L1100,360 L1200,380 L1200,800 L0,800 Z" 
          fill="url(#academicGradient2)" 
          className="animate-pulse"
          style={{ animationDelay: '1.5s', animationDuration: '6s' }}
        />
        
        {/* Innovation dome */}
        <circle cx="600" cy="250" r="60" fill="url(#innovationGradient)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
        
        {/* Floating research indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="350" r="4" fill="rgb(59, 130, 246)" />
          <text x="210" y="355" fill="rgb(59, 130, 246)" fontSize="11" fontFamily="monospace">MIT</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="450" cy="280" r="4" fill="rgb(99, 102, 241)" />
          <text x="460" y="285" fill="rgb(99, 102, 241)" fontSize="11" fontFamily="monospace">Harvard</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="750" cy="220" r="4" fill="rgb(6, 182, 212)" />
          <text x="760" y="225" fill="rgb(6, 182, 212)" fontSize="11" fontFamily="monospace">$4.2B</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '3.5s' }}>
          <circle cx="950" cy="180" r="4" fill="rgb(168, 85, 247)" />
          <text x="960" y="185" fill="rgb(168, 85, 247)" fontSize="11" fontFamily="monospace">R&D</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Academic Card Component
function FloatingAcademicCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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

export const metadata: Metadata = {
  title: 'Boston Series A Funding Advisory | Cambridge Biotech & MIT Startup Capital | Vommuli',
  description: 'Premier Boston capital introduction services connecting Cambridge biotech startups with MIT/Harvard research networks and Massachusetts venture capital ecosystem. Expert academic fintech advisory.',
  keywords: [
    'Boston venture capital',
    'Cambridge biotech funding',
    'MIT startup funding',
    'Harvard venture capital',
    'Boston private equity',
    'Massachusetts capital introduction',
    'Cambridge investment advisory',
    'Boston Series A funding',
    'Route 128 corridor investors',
    'Boston growth capital',
    'Massachusetts venture capital firms',
    'Cambridge startup accelerators',
    'Boston biotech investors',
    'MIT angel investors',
    'Boston capital raising consultants',
    'Academic venture capital',
    'Boston fintech funding',
    'Cambridge medtech venture capital',
    'Massachusetts healthcare funding',
    'Boston research commercialization',
    'Cambridge AI funding',
    'MIT technology transfer',
    'Harvard innovation funding',
    'Boston life sciences funding',
    'Massachusetts cleantech investors'
  ],
  openGraph: {
    title: 'Boston Capital Introduction Services | Cambridge Biotech & Academic VC',
    description: 'Connect with top Boston investors and Cambridge biotech venture capital firms. Expert academic fintech capital introduction services.',
    url: 'https://vommuli.com/locations/boston',
  },
};


export default function BostonLocationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* Academic Research Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 overflow-hidden">
        <AcademicResearchBackground />
        
        {/* Innovation Lab Atmosphere Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Professional Academic Environment Imagery */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="MIT Campus Innovation" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Floating Academic Metrics Cards */}
            <div className="absolute top-20 right-10 hidden lg:block">
              <FloatingAcademicCard delay={0.5}>
                <div className="text-white/90 text-sm font-medium">Research Budget</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={4} prefix="$" suffix=".2B" />
                </div>
              </FloatingAcademicCard>
            </div>
            
            <div className="absolute top-40 left-10 hidden lg:block">
              <FloatingAcademicCard delay={1}>
                <div className="text-white/90 text-sm font-medium">Biotech Hub</div>
                <div className="text-2xl font-bold text-white">#1</div>
              </FloatingAcademicCard>
            </div>
            
            <div className="absolute bottom-40 right-20 hidden lg:block">
              <FloatingAcademicCard delay={1.5}>
                <div className="text-white/90 text-sm font-medium">MIT Startups</div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={600} suffix="+" />
                </div>
              </FloatingAcademicCard>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white text-sm font-medium tracking-wide">ACADEMIC RESEARCH CAPITAL</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Cambridge Research
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-2">
                  Capital Hub
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
                Premier biotech and academic capital introduction platform connecting MIT/Harvard innovation pipeline with specialized research investors and life sciences venture capital.
              </p>
              
              {/* Interactive Research Metrics Dashboard */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={125} suffix="+" />
                  </div>
                  <div className="text-white/70 text-sm">Boston Raises</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={680} prefix="$" suffix="M+" />
                  </div>
                  <div className="text-white/70 text-sm">Capital Deployed</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={94} suffix="%" />
                  </div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={3} suffix=" Months" />
                  </div>
                  <div className="text-white/70 text-sm">Avg Timeline</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Schedule Research Strategy Session
                </button>
                
                <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Explore Academic Network
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Academic research overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm"></div>
      </section>

      {/* Boston Ecosystem Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Boston Startup Ecosystem Expertise
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized knowledge of Boston's key innovation sectors and their unique funding landscapes
            </p>
          </div>

          <div className="space-y-8">
            {bostonEcosystem.map((sector, index) => (
              <div key={index} className="card-elevated">
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900 mb-4">{sector.area}</h3>
                      <p className="text-secondary-700 mb-6">{sector.description}</p>
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary-900 mb-2">Investment Focus:</h4>
                        <p className="text-primary-700">{sector.focus}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-4">Key VC Partners:</h4>
                      <ul className="space-y-2 mb-6">
                        {sector.keyPlayers.map((player, i) => (
                          <li key={i} className="flex items-center text-secondary-700">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {player}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-4">Boston Advantages:</h4>
                      <ul className="space-y-2">
                        {sector.advantages.map((advantage, i) => (
                          <li key={i} className="flex items-center text-secondary-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boston VC Network */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Our Boston VC Network
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Strong relationships with Boston's top venture capital firms across all major sectors
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

      {/* Boston Advantages */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Boston Startups Choose Vommuli Ventures
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Unique advantages of working with advisors who understand the Boston startup ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {bostonAdvantages.map((advantage, index) => (
              <div key={index} className="card bg-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{advantage.advantage}</h3>
                  <p className="text-secondary-700 mb-6">{advantage.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Impact for Your Startup:</h4>
                    <p className="text-green-700">{advantage.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              Boston Client Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Real results from Boston-area startups we've helped secure Series A funding
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
              Ready to Connect with Boston VCs?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Leverage our deep Boston ecosystem knowledge and VC relationships for your Series A funding
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Boston Market Analysis</h3>
                <p className="text-white/80 mb-4">Get insights into Boston's VC landscape and funding trends for your sector</p>
                <Link href="/tools/investment-readiness-assessment" className="btn-accent">
                  Start Assessment
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Schedule Consultation</h3>
                <p className="text-white/80 mb-4">Discuss your Boston fundraising strategy with our local experts</p>
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
              Services for Boston Startups
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Comprehensive support for your Series A fundraising journey
            </p>
          </div>
          <InternalLinkingSystem 
            currentPage="/locations/boston"
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
            'Boston',
            'Massachusetts', 
            42.3601,
            -71.0589
          ))
        }}
      />
      
      {/* Additional service-specific schema */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Boston",
          description: "Premier Boston capital introduction services connecting Cambridge biotech startups with MIT/Harvard research networks and Massachusetts venture capital ecosystem.",
          url: "https://vommuli.com/locations/boston",
          telephone: "+1-617-MIT-FUND",
          serviceType: [
            "Boston Venture Capital Introduction",
            "Cambridge Biotech Funding", 
            "MIT Technology Transfer",
            "Harvard Research Commercialization",
            "Academic Innovation Capital"
          ],
          keywords: [
            "Boston venture capital",
            "Cambridge biotech funding", 
            "MIT startup funding",
            "Harvard research investment"
          ]
        }}
      />
    </main>
  );
}