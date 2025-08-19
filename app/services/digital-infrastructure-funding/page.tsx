'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import DigitalInfrastructureFAQ from './DigitalInfrastructureFAQ';

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

// Digital Infrastructure SVG Background Component
function DigitalInfrastructureBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="infraGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="60%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(20, 184, 166)" />
          </linearGradient>
          <linearGradient id="infraGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="60%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(14, 165, 233)" />
          </linearGradient>
          <radialGradient id="datacenterGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </radialGradient>
        </defs>
        
        {/* Digital infrastructure network lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#infraGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#infraGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Data center nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#datacenterGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#datacenterGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating infrastructure indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(6, 182, 212)" />
          <text x="210" y="305" fill="rgb(6, 182, 212)" fontSize="10" fontFamily="monospace">5G</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(20, 184, 166)" />
          <text x="610" y="255" fill="rgb(20, 184, 166)" fontSize="10" fontFamily="monospace">DC</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(59, 130, 246)" />
          <text x="1010" y="205" fill="rgb(59, 130, 246)" fontSize="10" fontFamily="monospace">CDN</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Infrastructure Card Component
function FloatingInfraCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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
  title: 'Digital Infrastructure Funding Advisory | Data Center & Cloud Infrastructure Capital Introduction | Vommuli',
  description: 'Specialized digital infrastructure funding advisory services. Expert introductions to infrastructure-focused investors with deep understanding of data centers, cloud computing, 5G networks, and edge computing markets.',
  keywords: [
    'digital infrastructure funding',
    'data center funding',
    'cloud infrastructure funding',
    'edge computing funding',
    '5G network funding',
    'infrastructure venture capital',
    'digital infrastructure investment',
    'cloud computing capital',
    'data center investment',
    'network infrastructure funding',
    'telecommunications funding',
    'fiber optic funding',
    'wireless infrastructure funding',
    'edge data center funding',
    'hyperscale data center funding',
    'colocation funding',
    'infrastructure as a service funding',
    'cloud services funding',
    'digital infrastructure advisory',
    'infrastructure capital introduction',
    'data center development funding',
    'cloud platform funding',
    'network connectivity funding',
    'digital transformation funding',
    'infrastructure modernization funding',
    'smart city infrastructure funding',
    'IoT infrastructure funding',
    'infrastructure scalability funding',
    'digital infrastructure growth capital',
    'infrastructure private equity',
    'data center REIT funding',
    'infrastructure debt financing',
    'digital infrastructure valuation',
    'infrastructure market analysis',
    'data center due diligence',
    'infrastructure investor network',
    'digital infrastructure trends',
    'infrastructure funding timeline',
    'data center investment strategy',
    'cloud infrastructure advisory',
    'edge computing investment',
    'infrastructure deployment funding',
    'digital infrastructure consulting',
    'infrastructure asset management',
    'data center operational funding',
    'infrastructure technology funding',
    'digital infrastructure partnerships',
    'infrastructure expansion funding'
  ],
  openGraph: {
    title: 'Digital Infrastructure Funding Advisory | Data Center & Cloud Infrastructure Capital Introduction',
    description: 'Specialized digital infrastructure funding advisory with expert introductions to infrastructure-focused investors and deep understanding of data center and cloud computing markets.',
    url: 'https://vommuli.com/services/digital-infrastructure-funding',
  },
};

export default function DigitalInfrastructureFundingPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      <DigitalInfrastructureBackground />
      
      {/* Professional Digital Infrastructure Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Digital Infrastructure Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Infrastructure Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingInfraCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Infrastructure Market</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={8.9} prefix="$" suffix="B" />
          </div>
        </FloatingInfraCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingInfraCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={89} suffix="%" />
          </div>
        </FloatingInfraCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">🏗️ Digital Infrastructure Funding</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Digital Infrastructure &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
                Data Center Funding Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized funding advisory for digital infrastructure and data center companies. Expert introductions to infrastructure-focused investors with deep understanding of cloud computing, edge networks, 5G deployment, and digital transformation market dynamics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Launch Infrastructure Funding Process</span>
              </Link>
              
              <Link 
                href="/tools/investment-readiness-assessment"
                className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center">
                  Infrastructure Readiness Assessment
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Infrastructure Market Statistics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Digital Infrastructure Market Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the surge in digital infrastructure investment with specialized expertise in data centers, cloud platforms, and network technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
              <div className="relative p-8 border border-blue-500/30 text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">
                  <AnimatedCounter end={67} suffix="%" prefix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Infrastructure Investment Growth YoY</p>
                <p className="text-cyan-400 text-xs">Record deployment acceleration</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">
                  <AnimatedCounter end={120} suffix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Infrastructure-Focused Investors</p>
                <p className="text-teal-400 text-xs">Global network coverage</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-sky-600/20"></div>
              <div className="relative p-8 border border-teal-500/30 text-center">
                <div className="text-4xl font-black text-teal-400 mb-2">
                  <AnimatedCounter end={8.9} prefix="$" suffix="B" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Infrastructure Capital Facilitated</p>
                <p className="text-sky-400 text-xs">Last 30 months</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-blue-600/20"></div>
              <div className="relative p-8 border border-sky-500/30 text-center">
                <div className="text-4xl font-black text-sky-400 mb-2">
                  <AnimatedCounter end={89} suffix="%" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Infrastructure Project Success Rate</p>
                <p className="text-blue-400 text-xs">↑ 31% vs market average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Technology Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">🔧 Infrastructure Focus Areas</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Digital Infrastructure Specializations
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert funding advisory across the full spectrum of digital infrastructure and data center technologies enabling global connectivity.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
              <div className="relative p-8 border border-blue-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Data Centers & Cloud Infrastructure</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Hyperscale data centers, colocation facilities, and cloud computing infrastructure powering digital services and enterprise applications.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-300 mb-2">Data Center Types</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Hyperscale Facilities</li>
                        <li>• Colocation Centers</li>
                        <li>• Edge Data Centers</li>
                        <li>• Enterprise Data Centers</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-300 mb-2">Cloud Services</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Infrastructure as a Service</li>
                        <li>• Platform as a Service</li>
                        <li>• Software as a Service</li>
                        <li>• Container Orchestration</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Investment: $25M - $500M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Network & Connectivity Infrastructure</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">5G networks, fiber optic systems, and telecommunications infrastructure enabling high-speed connectivity and wireless communications.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-cyan-300 mb-2">Network Technologies</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• 5G Network Infrastructure</li>
                        <li>• Fiber Optic Networks</li>
                        <li>• Wireless Communication</li>
                        <li>• Network Equipment</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-cyan-300 mb-2">Connectivity Solutions</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Internet Service Providers</li>
                        <li>• Content Delivery Networks</li>
                        <li>• Network Security</li>
                        <li>• SD-WAN Solutions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Investment: $15M - $300M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20"></div>
              <div className="relative p-8 border border-teal-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-teal-400 mb-4 text-center">Edge Computing & IoT Infrastructure</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Edge computing platforms, IoT networks, and distributed computing infrastructure enabling low-latency applications and smart city solutions.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-teal-300 mb-2">Edge Technologies</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Edge Data Centers</li>
                        <li>• CDN Edge Nodes</li>
                        <li>• Multi-Access Edge Computing</li>
                        <li>• Fog Computing</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-teal-300 mb-2">IoT Applications</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Smart City Infrastructure</li>
                        <li>• Industrial IoT Networks</li>
                        <li>• Connected Vehicle Systems</li>
                        <li>• Environmental Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 rounded-full text-teal-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Investment: $8M - $150M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Investor Network */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Infrastructure-Specialized Investor Network
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct access to the most active infrastructure investors and digital transformation-focused funds driving connectivity innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Tier-1 Infrastructure VCs</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Leading Infrastructure Funds</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Digital Colony Partners</li>
                      <li>• KKR Infrastructure</li>
                      <li>• Blackstone Infrastructure</li>
                      <li>• Brookfield Infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Tech-Focused Infrastructure</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Digital Bridge</li>
                      <li>• EQT Infrastructure</li>
                      <li>• Global Infrastructure Partners</li>
                      <li>• APG Infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Data Center & Cloud Investors</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Data Center REITs</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Digital Realty Trust</li>
                      <li>• Equinix</li>
                      <li>• CoreSite Realty</li>
                      <li>• QTS Data Centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cloud Infrastructure</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Amazon AWS Ventures</li>
                      <li>• Microsoft Azure Capital</li>
                      <li>• Google Cloud Ventures</li>
                      <li>• Oracle Infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-teal-500/30">
                <h3 className="text-xl font-bold text-teal-400 mb-4">Telecommunications Capital</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Telecom Strategic Investors</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Verizon Ventures</li>
                      <li>• AT&T Ventures</li>
                      <li>• T-Mobile Ventures</li>
                      <li>• Comcast Ventures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Network Equipment Leaders</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Cisco Investments</li>
                      <li>• Nokia Growth Partners</li>
                      <li>• Ericsson Ventures</li>
                      <li>• Qualcomm Ventures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Infrastructure Investment Trends 2024</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-3">Fastest Growing Infrastructure Segments</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Edge Data Centers</span>
                        <span className="text-green-400 text-sm font-medium">+189% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">5G Infrastructure</span>
                        <span className="text-green-400 text-sm font-medium">+145% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Cloud Infrastructure</span>
                        <span className="text-green-400 text-sm font-medium">+123% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Fiber Optic Networks</span>
                        <span className="text-green-400 text-sm font-medium">+98% YoY</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <h4 className="font-semibold text-cyan-400 mb-3">Average Investment by Category</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Edge Computing Seed</span>
                        <span className="text-cyan-400">$8.7M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Data Center Development</span>
                        <span className="text-cyan-400">$125M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">5G Network Infrastructure</span>
                        <span className="text-cyan-400">$85M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Cloud Platform Growth</span>
                        <span className="text-cyan-400">$67M</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Market Opportunity</h4>
                      <p className="text-slate-300 text-sm">
                        Global digital infrastructure market projected to reach $2.3T by 2030, with edge computing and 5G deployment driving 4x faster growth than traditional infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Funding Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">⚡ Strategic Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Infrastructure Funding Advisory Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized methodology for positioning digital infrastructure companies to secure institutional funding from infrastructure-focused investors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
                
                <div className="space-y-8">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Infrastructure Asset Assessment</h3>
                      <p className="text-slate-300 mb-4">Comprehensive evaluation of infrastructure assets, technology architecture, operational metrics, and competitive positioning within digital infrastructure markets.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Technical Analysis</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Infrastructure capacity assessment</li>
                            <li>• Technology stack evaluation</li>
                            <li>• Performance benchmarking</li>
                            <li>• Scalability architecture review</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Market Positioning</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Market share analysis</li>
                            <li>• Competitive differentiation</li>
                            <li>• Customer concentration review</li>
                            <li>• Geographic coverage mapping</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30">
                      <h3 className="text-xl font-bold text-cyan-400 mb-3">Infrastructure Investor Matching</h3>
                      <p className="text-slate-300 mb-4">Strategic matching with infrastructure-specialized investors based on asset type, investment thesis, geographic focus, and operational expertise requirements.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Investor Analysis</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Infrastructure portfolio mapping</li>
                            <li>• Asset class preferences</li>
                            <li>• Geographic investment scope</li>
                            <li>• Operational value-add capabilities</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Strategic Targeting</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Investment size alignment</li>
                            <li>• Risk tolerance assessment</li>
                            <li>• Development stage matching</li>
                            <li>• Exit strategy compatibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30">
                      <h3 className="text-xl font-bold text-teal-400 mb-3">Infrastructure Due Diligence Support</h3>
                      <p className="text-slate-300 mb-4">Specialized due diligence preparation focusing on infrastructure technical validation, operational performance, and market opportunity analysis.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Technical DD</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Infrastructure architecture review</li>
                            <li>• Performance metrics validation</li>
                            <li>• Reliability & uptime analysis</li>
                            <li>• Security & compliance audit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Commercial DD</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Market demand analysis</li>
                            <li>• Customer contract review</li>
                            <li>• Revenue model validation</li>
                            <li>• Competitive intelligence</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Infrastructure Funding Success Metrics</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-400 mb-1">3.8x</div>
                      <div className="text-sm text-slate-300">Faster infrastructure deployment</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">94%</div>
                      <div className="text-sm text-slate-300">Infrastructure projects reach scale</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Infrastructure-Specific Value Drivers</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Asset Quality & Location</span>
                        <span className="text-green-400 font-medium">Critical</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Operational Performance</span>
                        <span className="text-green-400 font-medium">Critical</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Customer Diversity</span>
                        <span className="text-yellow-400 font-medium">High</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Technology Innovation</span>
                        <span className="text-yellow-400 font-medium">High</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300\">ESG Compliance</span>
                        <span className="text-blue-400 font-medium">Medium</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Infrastructure Funding Timeline</h4>
                    <p className="text-slate-300 text-sm">
                      Infrastructure companies typically complete funding rounds 3.8x faster when asset quality and operational metrics are clearly demonstrated with institutional-grade documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Market Dynamics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Infrastructure Market Dynamics & Investment Environment
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Understanding the rapidly evolving digital infrastructure investment ecosystem, technology trends, and market opportunities driving connectivity innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400">Digital Infrastructure Scale</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">Global Infrastructure Investment</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The global digital infrastructure market reached $1.2T in 2023, with data center and cloud infrastructure attracting $234B in investment, representing unprecedented growth in connectivity demand.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">2023 Infrastructure Investment</span>
                      <span className="text-blue-400 font-medium">$234B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Data Center Share</span>
                      <span className="text-blue-400 font-medium">$156B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">5G Infrastructure</span>
                      <span className="text-blue-400 font-medium">$78B</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Growth Acceleration Drivers</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Cloud adoption reaching 94% enterprise penetration</li>
                    <li>• Edge computing demand for low-latency applications</li>
                    <li>• 5G network deployment acceleration</li>
                    <li>• IoT device proliferation (75B devices by 2025)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400">Investment Focus Evolution</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">High-Priority Infrastructure Segments</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Investors are concentrating capital in infrastructure segments with proven demand drivers, sustainable competitive advantages, and clear technology differentiation.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Edge Data Centers</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Hot</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">5G Infrastructure</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Hot</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Cloud Infrastructure</span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Fiber Networks</span>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Emerging</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Geographic Investment Distribution</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• US: 58% of global infrastructure funding ($135.7B)</li>
                    <li>• Asia-Pacific: 26% ($60.8B), led by China and Japan</li>
                    <li>• Europe: 13% ($30.4B), focus on green infrastructure</li>
                    <li>• Other: 3% ($7.1B), emerging markets expansion</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-teal-400">Technology Innovation Cycles</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">Next-Generation Infrastructure</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Infrastructure investment is shifting toward next-generation technologies including edge computing, 5G networks, and sustainable data center technologies driving efficiency gains.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-teal-400 font-medium">Edge Computing:</span>
                      <span className="text-slate-300 ml-2">189% growth acceleration</span>
                    </div>
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-teal-400 font-medium">Green Infrastructure:</span>
                      <span className="text-slate-300 ml-2">ESG compliance priority</span>
                    </div>
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-teal-400 font-medium">AI Infrastructure:</span>
                      <span className="text-slate-300 ml-2">GPU computing demand</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Infrastructure Innovation Trends</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Liquid cooling for high-density computing</li>
                    <li>• Renewable energy integration (85% by 2025)</li>
                    <li>• Software-defined infrastructure automation</li>
                    <li>• Quantum computing infrastructure preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Success Stories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🏆 Success Stories</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Infrastructure Funding Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Real-world examples of successful digital infrastructure companies that secured institutional funding through our specialized advisory services and infrastructure investor network.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Edge Data Center Platform</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-300">Growth Capital</span>
                    <span className="text-green-400 font-medium">$185M Raised</span>
                    <span className="text-slate-400">Edge Computing</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2\">Challenge</h4>
                  <p className="text-slate-300 text-sm">
                    Edge data center platform needed growth capital to expand nationwide footprint while demonstrating sustainable unit economics and competitive differentiation against hyperscale cloud providers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Our Strategy</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Developed comprehensive market expansion strategy</li>
                    <li>• Created detailed unit economics and ROI models</li>
                    <li>• Positioned edge computing value proposition</li>
                    <li>• Connected with infrastructure-focused growth funds</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Outcome</h4>
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 font-medium">Market Expansion:</span>
                        <span className="text-slate-300 ml-2">15 new markets</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Revenue Growth:</span>
                        <span className="text-slate-300 ml-2">340% in 18 months</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Customer Base:</span>
                        <span className="text-slate-300 ml-2">120+ enterprise clients</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Capacity Utilization:</span>
                        <span className="text-slate-300 ml-2">87% average</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">5G Network Infrastructure</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-300">Series B</span>
                    <span className="text-blue-400 font-medium">$275M Raised</span>
                    <span className="text-slate-400">Telecommunications</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Background</h4>
                  <p className="text-slate-300 text-sm">
                    5G network infrastructure provider required significant capital to deploy nationwide small cell network while navigating complex regulatory requirements and municipal partnerships.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Execution Approach</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Developed regulatory compliance framework</li>
                    <li>• Created municipal partnership strategy</li>
                    <li>• Built comprehensive network deployment plan</li>
                    <li>• Identified telecom-focused infrastructure investors</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Results</h4>
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-400 font-medium">Network Coverage:</span>
                        <span className="text-slate-300 ml-2">23 metropolitan areas</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Small Cells Deployed:</span>
                        <span className="text-slate-300 ml-2">8,500+ nodes</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Carrier Partnerships:</span>
                        <span className="text-slate-300 ml-2">3 major operators</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Revenue Run Rate:</span>
                        <span className="text-slate-300 ml-2">$145M ARR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-lg font-bold text-purple-400 mb-1">Cloud Infrastructure Platform</h3>
                <div className="text-sm text-slate-400">Series A</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Amount Raised:</span>
                  <span className="text-purple-400">$125M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Customer Growth:</span>
                  <span className="text-purple-400">450% in 2 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Market Expansion:</span>
                  <span className="text-green-400">12 new regions</span>
                </div>
                <div className="bg-purple-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Multi-cloud management platform enabling enterprise customers to optimize cloud infrastructure costs by 35% while improving performance and reliability.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🌐</span>
                </div>
                <h3 className="text-lg font-bold text-indigo-400 mb-1">Fiber Network Operator</h3>
                <div className="text-sm text-slate-400">Infrastructure Debt + Equity</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Total Funding:</span>
                  <span className="text-indigo-400">$450M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Network Miles:</span>
                  <span className="text-indigo-400">2,300+ route miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Market Coverage:</span>
                  <span className="text-green-400">18 states</span>
                </div>
                <div className="bg-indigo-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Regional fiber network providing high-speed connectivity to underserved markets with 99.99% uptime and 50x faster speeds than incumbent providers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-1">IoT Connectivity Platform</h3>
                <div className="text-sm text-slate-400">Growth Capital</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Amount Raised:</span>
                  <span className="text-cyan-400">$89M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Connected Devices:</span>
                  <span className="text-cyan-400">45M+ endpoints</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Enterprise Customers:</span>
                  <span className="text-green-400">1,200+ companies</span>
                </div>
                <div className="bg-cyan-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Global IoT connectivity platform enabling smart city infrastructure, industrial monitoring, and connected vehicle applications across 45 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Challenges & Solutions */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-300 text-sm font-medium">⚡ Challenge Solutions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Infrastructure Funding Challenges & Strategic Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Common obstacles facing digital infrastructure companies in fundraising and our proven methodologies for overcoming technical, operational, and market challenges.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🏗️</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Challenge: Capital Intensity & Scale Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Common Capital Challenges</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• High upfront capital requirements for infrastructure deployment</li>
                      <li>• Long payback periods and complex ROI calculations</li>
                      <li>• Difficulty demonstrating unit economics at scale</li>
                      <li>• Infrastructure development timeline uncertainties</li>
                      <li>• Regulatory approval and permitting delays</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Investment Impact</h4>
                    <p className="text-slate-300 text-sm">
                      78% of infrastructure funding delays are attributed to capital intensity concerns, with investors requiring detailed models showing sustainable unit economics and clear paths to profitability.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Solution: Infrastructure Economics Framework</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Comprehensive Financial Modeling</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Detailed unit economics with sensitivity analysis</li>
                      <li>• Infrastructure deployment timeline and milestone modeling</li>
                      <li>• Capacity utilization curves and revenue ramp scenarios</li>
                      <li>• Competitive benchmarking and market positioning</li>
                      <li>• Risk mitigation strategies and contingency planning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Funding Timeline:</span>
                          <span className="text-green-400">-52%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Investor Confidence:</span>
                          <span className="text-green-400">+89%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Valuation Premium:</span>
                          <span className="text-green-400">+23%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Term Sheet Rate:</span>
                          <span className="text-green-400">+67%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">Challenge: Technology Differentiation & Competitive Moats</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Differentiation Challenges</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Commoditization concerns in infrastructure markets</li>
                      <li>• Competition from hyperscale cloud providers</li>
                      <li>• Technology evolution and obsolescence risks</li>
                      <li>• Difficulty articulating technical advantages</li>
                      <li>• Customer switching costs and vendor lock-in questions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Competitive Positioning</h4>
                    <p className="text-slate-300 text-sm">
                      62% of infrastructure companies struggle with competitive differentiation, requiring clear technical moats and sustainable competitive advantages to attract institutional capital.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">Solution: Technical Moat Development Strategy</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Competitive Advantage Framework</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Technical architecture and performance benchmarking</li>
                      <li>• Intellectual property portfolio development and protection</li>
                      <li>• Customer integration depth and switching cost analysis</li>
                      <li>• Network effects and ecosystem development strategies</li>
                      <li>• Operational excellence and cost structure optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Differentiation Outcomes</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Technical Validation:</span>
                          <span className="text-blue-400">+94% confidence</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Competitive Positioning:</span>
                          <span className="text-blue-400">+78% clarity</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Customer Retention:</span>
                          <span className="text-blue-400">+45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Pricing Power:</span>
                          <span className="text-blue-400">+31%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Infrastructure FAQ */}
      <DigitalInfrastructureFAQ />

      {/* FAQ Schema Markup */}
      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What makes digital infrastructure funding different from traditional tech funding?",
              answer: "Digital infrastructure funding requires specialized due diligence including technical architecture assessment, operational performance validation, capacity utilization analysis, and infrastructure economics modeling. Investors evaluate infrastructure companies on asset quality, operational metrics, and sustainable competitive advantages rather than just growth metrics."
            },
            {
              question: "What technical documentation do infrastructure investors require?",
              answer: "Infrastructure investors typically require comprehensive technical documentation including network architecture diagrams, capacity and utilization reports, performance SLAs and uptime metrics, operational procedures, and competitive benchmarking studies. We help prepare investor-ready technical packages."
            },
            {
              question: "How long does infrastructure startup fundraising typically take?",
              answer: "Infrastructure startup fundraising averages 8-14 months depending on project scale and capital requirements. Our clients typically complete funding 52% faster due to specialized investor targeting and infrastructure validation preparation."
            },
            {
              question: "What infrastructure market segments are most attractive to investors?",
              answer: "Current hot infrastructure segments include edge data centers (+189% YoY funding), 5G infrastructure (+145% YoY), cloud infrastructure (+123% YoY), and fiber optic networks (+98% YoY). We track real-time investor interest across all infrastructure verticals."
            },
            {
              question: "How do you evaluate if an infrastructure company is investment-ready?",
              answer: "We assess infrastructure companies across four key dimensions: technical architecture (performance, reliability, scalability), operational excellence (uptime, efficiency, cost structure), market positioning (competitive advantages, customer diversity), and financial metrics (unit economics, cash flow generation)."
            },
            {
              question: "What are typical infrastructure investment ranges by asset type?",
              answer: "Infrastructure investment ranges vary by asset type: edge computing ($8M-150M), data centers ($25M-500M), network infrastructure ($15M-300M), cloud platforms ($12M-200M). Infrastructure investments typically require larger capital commitments than traditional software."
            },
            {
              question: "How many infrastructure-focused investors are in your network?",
              answer: "Our infrastructure investor network includes 120+ specialized partners across data center REITs, infrastructure funds, telecom strategics, and cloud platforms managing $45B+ in infrastructure-focused capital with deep operational expertise."
            },
            {
              question: "What is the success rate for infrastructure funding introductions?",
              answer: "Our digital infrastructure funding advisory achieves an 89% success rate for infrastructure projects, which is 31% higher than general market companies. This reflects our specialized understanding of infrastructure economics, operational metrics, and investor evaluation criteria."
            },
            {
              question: "How do you help with infrastructure investor introductions and matching?",
              answer: "We match infrastructure companies based on asset type, investment stage, geographic focus, and operational value-add requirements. Our network includes data center REITs, infrastructure funds, telecom strategics, and cloud platforms with 82% follow-on investment rates."
            },
            {
              question: "What ongoing support do you provide for infrastructure companies post-funding?",
              answer: "We provide comprehensive post-funding support including operational optimization planning, expansion strategy development, follow-on fundraising coordination, strategic partnership facilitation, and exit preparation throughout your infrastructure company's growth journey."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Digital Infrastructure Funding Advisory Services",
          description: "Specialized digital infrastructure funding advisory services with expert introductions to infrastructure-focused investors and deep understanding of data centers, cloud computing, 5G networks, and edge computing markets.",
          url: "/services/digital-infrastructure-funding"
        }}
      />
    </div>
  );
}