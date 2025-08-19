'use client';

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import HealthcareFAQ from './HealthcareFAQ';

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

// Healthcare Technology SVG Background Component
function HealthcareBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="healthGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(239, 68, 68)" />
            <stop offset="60%" stopColor="rgb(236, 72, 153)" />
            <stop offset="100%" stopColor="rgb(251, 113, 133)" />
          </linearGradient>
          <linearGradient id="healthGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(236, 72, 153)" />
            <stop offset="60%" stopColor="rgb(251, 113, 133)" />
            <stop offset="100%" stopColor="rgb(249, 115, 22)" />
          </linearGradient>
          <radialGradient id="medicalGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(236, 72, 153)" />
            <stop offset="100%" stopColor="rgb(239, 68, 68)" />
          </radialGradient>
        </defs>
        
        {/* Medical innovation flow lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#healthGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#healthGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Healthcare innovation nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#medicalGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#medicalGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating healthcare indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(236, 72, 153)" />
          <text x="210" y="305" fill="rgb(236, 72, 153)" fontSize="10" fontFamily="monospace">FDA</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(251, 113, 133)" />
          <text x="610" y="255" fill="rgb(251, 113, 133)" fontSize="10" fontFamily="monospace">510K</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(249, 115, 22)" />
          <text x="1010" y="205" fill="rgb(249, 115, 22)" fontSize="10" fontFamily="monospace">RCT</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Healthcare Card Component
function FloatingHealthcareCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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
  title: 'Healthcare & MedTech Funding Advisory | Medical Device & Digital Health Capital Introduction | Vommuli',
  description: 'Specialized healthcare and medical technology funding advisory services. Expert introductions to healthcare-focused investors with deep understanding of regulatory pathways, clinical validation, and healthcare markets.',
  keywords: [
    'healthcare funding advisory',
    'medtech funding services',
    'medical device funding',
    'digital health funding',
    'healthcare venture capital',
    'medtech investment advisory',
    'healthcare capital introduction',
    'medical technology funding',
    'biotech funding advisory',
    'healthcare startup funding',
    'medical device VC',
    'healthcare private equity',
    'medtech investor network',
    'clinical validation funding',
    'FDA approval funding',
    'healthcare growth capital',
    'medical innovation funding',
    'digital therapeutics funding',
    'telemedicine funding',
    'health tech investment',
    'pharmaceutical funding',
    'life sciences funding',
    'healthcare IT funding',
    'medical AI funding',
    'precision medicine funding',
    'healthcare compliance advisory',
    'HIPAA compliance funding',
    'healthcare regulatory strategy',
    'medical device regulatory',
    'healthcare market analysis',
    'medtech due diligence',
    'healthcare investor matching',
    'medical technology valuation',
    'healthcare investment trends',
    'medtech success rate',
    'healthcare funding timeline',
    'medical device investment',
    'healthcare partnership advisory',
    'medtech strategic planning',
    'healthcare exit strategy',
    'medical innovation advisory',
    'healthcare investment banking',
    'medtech capital deployment',
    'healthcare institutional funding',
    'medical technology consulting',
    'healthcare specialized advisory',
    'medtech investor relations',
    'healthcare funding preparation'
  ],
  openGraph: {
    title: 'Healthcare & MedTech Funding Advisory | Medical Device & Digital Health Capital Introduction',
    description: 'Specialized healthcare and medtech funding advisory with expert introductions to healthcare-focused investors and deep understanding of medical technology markets.',
    url: 'https://vommuli.com/services/healthcare-medtech-funding',
  },
};

export default function HealthcareMedTechFundingPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-pink-900 relative overflow-hidden">
      <HealthcareBackground />
      
      {/* Professional Healthcare Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Healthcare Technology Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Healthcare Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingHealthcareCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Healthcare Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={81} suffix="%" />
          </div>
        </FloatingHealthcareCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingHealthcareCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Capital Facilitated</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={2.7} prefix="$" suffix="B" />
          </div>
        </FloatingHealthcareCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-300 text-sm font-medium">🏥 Healthcare & MedTech Funding</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Healthcare & Medical Technology
              <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent animate-pulse">
                Funding Advisory Excellence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized funding advisory for healthcare and medical technology companies. Expert introductions to healthcare-focused investors with deep understanding of regulatory pathways, clinical validation requirements, and medical innovation market dynamics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:scale-105 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Launch Healthcare Funding Process</span>
              </Link>
              
              <Link 
                href="/tools/investment-readiness-assessment"
                className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
              >
                <span className="flex items-center justify-center">
                  Healthcare Readiness Assessment
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Market Statistics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
              <span className="text-red-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare Funding Market Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the transformation in medical technology and healthcare delivery with specialized expertise in clinical validation and regulatory navigation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20"></div>
              <div className="relative p-8 border border-red-500/30 text-center">
                <div className="text-4xl font-black text-red-400 mb-2">
                  <AnimatedCounter end={42} suffix="%" prefix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Healthcare Introduction Requests YoY</p>
                <p className="text-pink-400 text-xs">Fastest growing healthcare segment</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20"></div>
              <div className="relative p-8 border border-pink-500/30 text-center">
                <div className="text-4xl font-black text-pink-400 mb-2">
                  <AnimatedCounter end={95} suffix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Healthcare-Focused VC Partners</p>
                <p className="text-rose-400 text-xs">Specialized medical network</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-orange-600/20"></div>
              <div className="relative p-8 border border-rose-500/30 text-center">
                <div className="text-4xl font-black text-rose-400 mb-2">
                  <AnimatedCounter end={2.7} prefix="$" suffix="B" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Healthcare Capital Facilitated</p>
                <p className="text-orange-400 text-xs">Last 24 months</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
              <div className="relative p-8 border border-orange-500/30 text-center">
                <div className="text-4xl font-black text-orange-400 mb-2">
                  <AnimatedCounter end={81} suffix="%" />
                </div>
                <p className="text-slate-300 text-sm mb-1">Healthcare Startup Success Rate</p>
                <p className="text-red-400 text-xs">↑ 29% vs general market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Technology Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
              <span className="text-red-300 text-sm font-medium">🔬 Technology Focus Areas</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare & MedTech Specializations
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert funding advisory across the full spectrum of healthcare innovation and medical technology advancement.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20"></div>
              <div className="relative p-8 border border-red-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Medical Devices & Diagnostics</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Advanced medical devices, diagnostic equipment, and surgical technologies transforming patient care and clinical outcomes.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-red-300 mb-2">Device Categories</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Surgical Instruments</li>
                        <li>• Diagnostic Equipment</li>
                        <li>• Monitoring Devices</li>
                        <li>• Implantable Devices</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-red-300 mb-2">Market Focus</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Cardiology Devices</li>
                        <li>• Orthopedic Solutions</li>
                        <li>• Neurology Equipment</li>
                        <li>• Point-of-Care Testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $8M - $75M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-600/20"></div>
              <div className="relative p-8 border border-pink-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-pink-400 mb-4 text-center">Digital Health & Health IT</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Digital health platforms, health information systems, and technology solutions enabling remote care and data-driven healthcare.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-pink-300 mb-2">Platform Types</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Telemedicine Platforms</li>
                        <li>• EHR/EMR Systems</li>
                        <li>• Patient Monitoring</li>
                        <li>• Clinical Decision Support</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-pink-300 mb-2">Applications</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Remote Patient Care</li>
                        <li>• Healthcare Analytics</li>
                        <li>• Practice Management</li>
                        <li>• Population Health</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-pink-500/20 rounded-full text-pink-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $3M - $45M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-orange-600/20"></div>
              <div className="relative p-8 border border-rose-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-xl font-bold text-rose-400 mb-4 text-center">Biotechnology & Life Sciences</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Biotechnology innovations, pharmaceutical development, and life sciences research advancing precision medicine and therapeutic solutions.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-rose-300 mb-2">Research Areas</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Drug Discovery</li>
                        <li>• Gene Therapy</li>
                        <li>• Immunotherapy</li>
                        <li>• Regenerative Medicine</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-rose-300 mb-2">Technologies</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• CRISPR & Gene Editing</li>
                        <li>• Cell & Tissue Engineering</li>
                        <li>• Biomarker Discovery</li>
                        <li>• Precision Diagnostics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-rose-500/20 rounded-full text-rose-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $15M - $125M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Investor Network */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare-Specialized Investor Network
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct access to the most active healthcare investors and medical technology-focused funds driving healthcare innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-4">Tier-1 Healthcare VCs</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Leading Healthcare Funds</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Andreessen Horowitz Bio Fund</li>
                      <li>• GV (Google Ventures)</li>
                      <li>• Kleiner Perkins</li>
                      <li>• NEA Healthcare</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Healthcare Specialists</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Andreessen Horowitz a16z</li>
                      <li>• 7wire Ventures</li>
                      <li>• Healthtech Capital</li>
                      <li>• Venrock Healthcare</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/30">
                <h3 className="text-xl font-bold text-pink-400 mb-4">Medical Device Investors</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Device-Focused VCs</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Johnson & Johnson Innovation</li>
                      <li>• Medtronic Ventures</li>
                      <li>• Boston Scientific</li>
                      <li>• Edwards Lifesciences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Strategic Investors</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Abbott Ventures</li>
                      <li>• Stryker Ventures</li>
                      <li>• Zimmer Biomet</li>
                      <li>• Baxter Ventures</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-rose-500/30">
                <h3 className="text-xl font-bold text-rose-400 mb-4">Digital Health Capital</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Digital Health VCs</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Oak HC/FT</li>
                      <li>• Bessemer Venture Partners</li>
                      <li>• General Catalyst</li>
                      <li>• Insight Partners</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Health IT Leaders</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Flare Capital Partners</li>
                      <li>• .406 Ventures</li>
                      <li>• Healthtech Capital</li>
                      <li>• Polaris Partners</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Healthcare Investment Trends 2024</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-3">Fastest Growing Healthcare Segments</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Digital Therapeutics</span>
                        <span className="text-green-400 text-sm font-medium">+156% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">AI-Powered Diagnostics</span>
                        <span className="text-green-400 text-sm font-medium">+134% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Remote Patient Monitoring</span>
                        <span className="text-green-400 text-sm font-medium">+98% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Precision Medicine Tools</span>
                        <span className="text-green-400 text-sm font-medium">+87% YoY</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <h4 className="font-semibold text-pink-400 mb-3">Average Funding by Category</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Digital Health Seed</span>
                        <span className="text-pink-400">$3.2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">MedTech Series A</span>
                        <span className="text-pink-400">$12.8M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Biotech Series B</span>
                        <span className="text-pink-400">$45.6M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Healthcare Growth</span>
                        <span className="text-pink-400">$89.3M</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Market Opportunity</h4>
                      <p className="text-slate-300 text-sm">
                        Global healthcare market projected to reach $13.9T by 2030, with digital health adoption accelerating 4x faster than traditional healthcare sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Funding Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
              <span className="text-red-300 text-sm font-medium">⚡ Strategic Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare Funding Advisory Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized methodology for positioning healthcare companies to secure institutional funding from medical technology-focused investors.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-transparent"></div>
                
                <div className="space-y-8">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/30">
                      <h3 className="text-xl font-bold text-red-400 mb-3">Clinical & Regulatory Assessment</h3>
                      <p className="text-slate-300 mb-4">Comprehensive evaluation of clinical development stage, regulatory pathway strategy, and competitive positioning within healthcare market segments.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Clinical Analysis</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Clinical trial design & status</li>
                            <li>• Safety & efficacy data review</li>
                            <li>• Regulatory milestone planning</li>
                            <li>• FDA/CE pathway assessment</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Market Positioning</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Clinical differentiation analysis</li>
                            <li>• Reimbursement strategy</li>
                            <li>• Healthcare economic value</li>
                            <li>• Competitive landscape mapping</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30">
                      <h3 className="text-xl font-bold text-pink-400 mb-3">Healthcare Investor Matching</h3>
                      <p className="text-slate-300 mb-4">Strategic matching with healthcare-specialized investors based on therapeutic focus, development stage, investment thesis, and clinical expertise.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Investor Analysis</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Healthcare portfolio mapping</li>
                            <li>• Therapeutic area expertise</li>
                            <li>• Clinical advisory networks</li>
                            <li>• Regulatory experience depth</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Strategic Targeting</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Development stage alignment</li>
                            <li>• Risk tolerance assessment</li>
                            <li>• Clinical milestone expectations</li>
                            <li>• Value creation capabilities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-rose-500/30">
                      <h3 className="text-xl font-bold text-rose-400 mb-3">Healthcare Due Diligence Support</h3>
                      <p className="text-slate-300 mb-4">Specialized due diligence preparation focusing on clinical data validation, regulatory compliance, and healthcare market opportunity analysis.</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Clinical DD</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Clinical data verification</li>
                            <li>• Safety profile assessment</li>
                            <li>• Efficacy endpoint analysis</li>
                            <li>• Regulatory compliance audit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Commercial DD</h4>
                          <ul className="text-slate-300 space-y-1">
                            <li>• Healthcare market sizing</li>
                            <li>• Physician adoption analysis</li>
                            <li>• Reimbursement pathway validation</li>
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
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">Healthcare Funding Success Metrics</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-red-400 mb-1">4.2x</div>
                      <div className="text-sm text-slate-300">Faster regulatory approval funding</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-pink-400 mb-1">91%</div>
                      <div className="text-sm text-slate-300">Healthcare companies reach milestones</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Healthcare-Specific Value Drivers</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Clinical Data Quality</span>
                        <span className="text-green-400 font-medium">Critical</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Regulatory Strategy</span>
                        <span className="text-green-400 font-medium">Critical</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Clinical Team Expertise</span>
                        <span className="text-yellow-400 font-medium">High</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Reimbursement Pathway</span>
                        <span className="text-yellow-400 font-medium">High</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Market Traction</span>
                        <span className="text-blue-400 font-medium">Medium</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Healthcare Funding Timeline</h4>
                    <p className="text-slate-300 text-sm">
                      Healthcare companies typically complete funding rounds 4.2x faster when clinical milestones are clearly defined and regulatory strategy is validated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Market Dynamics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare Market Dynamics & Investment Landscape
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Understanding the rapidly evolving healthcare investment ecosystem, regulatory environments, and market opportunities driving medical innovation capital allocation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-red-400">Healthcare Market Scale</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">Global Healthcare Investment</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The global healthcare market reached $8.5T in 2023, with digital health and medtech sectors attracting $57B in venture investment, representing 23% of total VC activity.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">2023 Healthcare VC</span>
                      <span className="text-red-400 font-medium">$57B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Digital Health Share</span>
                      <span className="text-red-400 font-medium">$31B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">MedTech Investment</span>
                      <span className="text-red-400 font-medium">$26B</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Growth Acceleration Drivers</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• Aging population demographics (2.1B over 60 by 2050)</li>
                    <li>• Chronic disease prevalence increases</li>
                    <li>• Healthcare cost containment pressure</li>
                    <li>• Digital transformation acceleration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-pink-400">Investment Focus Shifts</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">High-Priority Healthcare Segments</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Investors are concentrating capital in healthcare segments with proven clinical outcomes, clear regulatory pathways, and strong reimbursement models.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Digital Therapeutics</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Hot</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">AI-Powered Diagnostics</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">Hot</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Remote Patient Monitoring</span>
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Healthcare Cybersecurity</span>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Emerging</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Geographic Investment Distribution</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• US: 62% of global healthcare funding ($35.3B in 2023)</li>
                    <li>• Europe: 23% ($13.1B), strong in medtech innovation</li>
                    <li>• China: 11% ($6.3B), digital health focus</li>
                    <li>• Other: 4% ($2.3B), emerging markets growth</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-rose-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-rose-400">Regulatory Environment</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">FDA Innovation Pathways</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Accelerated regulatory frameworks like FDA Breakthrough Device Designation and Digital Health Pre-Cert Program are reducing time-to-market and investment risk.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-rose-400 font-medium">Breakthrough Devices:</span>
                      <span className="text-slate-300 ml-2">67% faster approval</span>
                    </div>
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-rose-400 font-medium">Digital Health:</span>
                      <span className="text-slate-300 ml-2">Pre-certification pathways</span>
                    </div>
                    <div className="bg-slate-700/50 p-2 rounded">
                      <span className="text-rose-400 font-medium">SaMD Framework:</span>
                      <span className="text-slate-300 ml-2">Software as Medical Device</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white text-sm mb-2">Reimbursement Evolution</h4>
                  <ul className="text-slate-300 text-xs space-y-1">
                    <li>• CMS innovation pathways (MCIT, TCET)</li>
                    <li>• Value-based care reimbursement models</li>
                    <li>• Digital therapeutics CPT codes expansion</li>
                    <li>• Remote monitoring Medicare coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Success Stories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🏆 Success Stories</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare Funding Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Real-world examples of successful healthcare companies that secured institutional funding through our specialized advisory services and medical technology investor network.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">AI-Powered Diagnostic Platform</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-300">Series B</span>
                    <span className="text-green-400 font-medium">$89M Raised</span>
                    <span className="text-slate-400">Medical AI</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-slate-300 text-sm">
                    AI-powered radiology platform needed to demonstrate clinical validation and navigate FDA regulatory pathway while securing growth capital for commercial expansion across health systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Our Strategy</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Developed comprehensive clinical evidence package</li>
                    <li>• Created regulatory strategy with FDA pathway clarity</li>
                    <li>• Positioned against competitive AI diagnostic solutions</li>
                    <li>• Connected with healthcare AI specialist investors</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Outcome</h4>
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 font-medium">FDA Clearance:</span>
                        <span className="text-slate-300 ml-2">3 indications</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Health Systems:</span>
                        <span className="text-slate-300 ml-2">47 deployments</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Lead Investor:</span>
                        <span className="text-slate-300 ml-2">Tier-1 Healthcare VC</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Clinical Results:</span>
                        <span className="text-slate-300 ml-2">94% accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Digital Therapeutics Platform</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-slate-300">Series A</span>
                    <span className="text-blue-400 font-medium">$32M Raised</span>
                    <span className="text-slate-400">Mental Health</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Background</h4>
                  <p className="text-slate-300 text-sm">
                    Evidence-based digital therapeutics platform for anxiety and depression treatment needed clinical validation and reimbursement strategy while navigating complex mental health market dynamics.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Execution Approach</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Designed randomized controlled trial (RCT) study</li>
                    <li>• Developed payer value proposition and health economics</li>
                    <li>• Built clinical advisory board with KOLs</li>
                    <li>• Identified mental health-focused investors</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Results</h4>
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-blue-400 font-medium">Clinical Trial:</span>
                        <span className="text-slate-300 ml-2">Positive results</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">FDA Designation:</span>
                        <span className="text-slate-300 ml-2">Breakthrough</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Patient Outcomes:</span>
                        <span className="text-slate-300 ml-2">67% improvement</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Payer Coverage:</span>
                        <span className="text-slate-300 ml-2">3 major plans</span>
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
                  <span className="text-xl">🧬</span>
                </div>
                <h3 className="text-lg font-bold text-purple-400 mb-1">Medical Device Startup</h3>
                <div className="text-sm text-slate-400">Seed → Series A</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Initial Raise:</span>
                  <span className="text-purple-400">$8.5M Seed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Follow-up:</span>
                  <span className="text-purple-400">$28M Series A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">FDA Pathway:</span>
                  <span className="text-green-400">510(k) cleared</span>
                </div>
                <div className="bg-purple-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Minimally invasive surgical device achieving 89% procedure success rate across 12 clinical sites with significant cost reduction vs. standard of care.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-bold text-indigo-400 mb-1">Health Analytics Platform</h3>
                <div className="text-sm text-slate-400">Growth Capital</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Amount Raised:</span>
                  <span className="text-indigo-400">$45M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Health Systems:</span>
                  <span className="text-indigo-400">120+ customers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Cost Savings:</span>
                  <span className="text-green-400">$2.3M avg/system</span>
                </div>
                <div className="bg-indigo-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Population health analytics platform reducing hospital readmissions by 34% and improving clinical outcomes across value-based care contracts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🧪</span>
                </div>
                <h3 className="text-lg font-bold text-cyan-400 mb-1">Biotech Drug Discovery</h3>
                <div className="text-sm text-slate-400">Series B</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Amount Raised:</span>
                  <span className="text-cyan-400">$78M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Pipeline Assets:</span>
                  <span className="text-cyan-400">5 programs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Clinical Stage:</span>
                  <span className="text-green-400">Phase II</span>
                </div>
                <div className="bg-cyan-500/20 p-3 rounded mt-4">
                  <p className="text-slate-300 text-xs">
                    Novel immunotherapy approach for autoimmune diseases showing 73% response rate in Phase II trials with breakthrough therapy designation potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges & Solutions */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-300 text-sm font-medium">⚡ Challenge Solutions</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Healthcare Funding Challenges & Strategic Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Common obstacles facing healthcare companies in fundraising and our proven methodologies for overcoming regulatory, clinical, and market access challenges.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">⚒️</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">Challenge: Regulatory Pathway Complexity</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Common Regulatory Issues</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Unclear FDA pathway selection (510k vs PMA vs De Novo)</li>
                      <li>• Insufficient clinical evidence for regulatory submission</li>
                      <li>• Inadequate understanding of software as medical device (SaMD)</li>
                      <li>• International regulatory harmonization challenges</li>
                      <li>• Post-market surveillance and quality system requirements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">Impact on Investment</h4>
                    <p className="text-slate-300 text-sm">
                      74% of healthcare funding delays are attributed to regulatory uncertainty, with average fundraising timelines extending 6-9 months longer than other sectors.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">Solution: Regulatory Strategy Framework</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Comprehensive Regulatory Planning</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• FDA pre-submission meetings and feedback integration</li>
                      <li>• Clinical development plan aligned with regulatory requirements</li>
                      <li>• Quality management system implementation roadmap</li>
                      <li>• International regulatory strategy (CE marking, Health Canada)</li>
                      <li>• Post-market commitments and risk management planning</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Results Achieved</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Regulatory Timeline:</span>
                          <span className="text-green-400">-45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Investor Confidence:</span>
                          <span className="text-green-400">+92%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">First Submission Success:</span>
                          <span className="text-green-400">+78%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Funding Success Rate:</span>
                          <span className="text-green-400">+56%</span>
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
                    <span className="text-xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">Challenge: Reimbursement & Market Access</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Market Access Barriers</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Unclear reimbursement pathway for novel technologies</li>
                      <li>• Health economics and outcomes research (HEOR) gaps</li>
                      <li>• Payer evidence requirements not well-defined</li>
                      <li>• Limited understanding of value-based care integration</li>
                      <li>• Complex hospital procurement and budgeting cycles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-2">Commercial Challenges</h4>
                    <p className="text-slate-300 text-sm">
                      67% of healthcare technologies struggle with market access strategy, leading to delayed revenue generation and extended cash requirements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">Solution: Comprehensive Market Access Strategy</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white mb-2">Strategic Market Access Planning</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Health economics study design and execution</li>
                      <li>• Payer value proposition development and validation</li>
                      <li>• CPT code strategy and application support</li>
                      <li>• Value-based care pilot program design</li>
                      <li>• Key opinion leader (KOL) engagement strategy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Market Access Outcomes</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Payer Coverage:</span>
                          <span className="text-blue-400">+89% success</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Time to Revenue:</span>
                          <span className="text-blue-400">-34%</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Revenue Growth:</span>
                          <span className="text-blue-400">+156%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Market Penetration:</span>
                          <span className="text-blue-400">+67%</span>
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

      {/* Comprehensive Healthcare FAQ */}
      <HealthcareFAQ />

      {/* FAQ Schema Markup */}
      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What makes healthcare funding different from traditional tech funding?",
              answer: "Healthcare funding requires specialized due diligence including clinical validation, regulatory pathway assessment, reimbursement strategy evaluation, and healthcare market dynamics analysis. Investors evaluate healthcare companies on clinical outcomes, regulatory progress, and market access potential rather than just traditional business metrics."
            },
            {
              question: "What clinical documentation do healthcare investors require?",
              answer: "Healthcare investors typically require comprehensive clinical documentation including study protocols, clinical data reports, regulatory correspondence, safety profiles, efficacy endpoints, and competitive clinical benchmarking. We help prepare investor-ready clinical packages and regulatory summaries."
            },
            {
              question: "How long does healthcare startup fundraising typically take?",
              answer: "Healthcare startup fundraising averages 6-12 months depending on development stage and regulatory complexity. Our clients typically complete funding 40% faster due to specialized investor targeting and clinical validation preparation."
            },
            {
              question: "What healthcare market segments are most attractive to investors?",
              answer: "Current hot healthcare segments include digital therapeutics (+156% YoY funding), AI-powered diagnostics (+134% YoY), remote patient monitoring (+98% YoY), and precision medicine tools (+87% YoY). We track real-time investor interest across all healthcare verticals."
            },
            {
              question: "How do you evaluate if a healthcare company is investment-ready?",
              answer: "We assess healthcare companies across four key dimensions: clinical validation (safety, efficacy, clinical outcomes), regulatory strategy (FDA pathway, approval timeline), market access (reimbursement, adoption barriers), and team expertise (clinical advisory, regulatory experience)."
            },
            {
              question: "What are typical healthcare startup valuation ranges by development stage?",
              answer: "Healthcare startup valuations vary significantly by development stage and clinical progress. Current ranges: preclinical ($3M-12M), Phase I/II ($8M-35M), Phase II/III ($25M-125M), commercial ($75M-500M+). Healthcare companies command 2-4x premiums over traditional tech due to clinical barriers."
            },
            {
              question: "How many healthcare-focused investors are in your network?",
              answer: "Our healthcare investor network includes 95+ specialized partners across medical device VCs, digital health funds, biotech investors, and strategic healthcare corporations managing $23B+ in healthcare-focused capital with deep therapeutic area expertise."
            },
            {
              question: "What is the success rate for healthcare startup funding introductions?",
              answer: "Our healthcare and medtech funding advisory achieves an 81% success rate for healthcare startups, which is 29% higher than general market companies. This reflects our specialized understanding of healthcare regulations, clinical validation, and medical market dynamics."
            },
            {
              question: "How do you help with healthcare investor introductions and matching?",
              answer: "We match healthcare companies based on therapeutic area, development stage, regulatory pathway, and clinical expertise requirements. Our network includes medical device VCs, digital health funds, biotech investors, and strategic healthcare corporations with 73% follow-on investment rates."
            },
            {
              question: "What ongoing support do you provide for healthcare companies post-funding?",
              answer: "We provide comprehensive post-funding support including regulatory milestone planning, clinical advisory connections, reimbursement strategy development, follow-on fundraising coordination, and strategic partnership facilitation throughout your healthcare company's development journey."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Healthcare & MedTech Funding Advisory Services",
          description: "Specialized healthcare and medical technology funding advisory services with expert introductions to healthcare-focused investors and deep understanding of regulatory pathways and medical innovation markets.",
          url: "/services/healthcare-medtech-funding"
        }}
      />
    </div>
  );
}