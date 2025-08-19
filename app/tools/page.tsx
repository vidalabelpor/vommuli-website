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

// Fintech Tools SVG Background Component
function FintechToolsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="toolsGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
            <stop offset="60%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(34, 197, 94)" />
          </linearGradient>
          <linearGradient id="toolsGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
            <stop offset="60%" stopColor="rgb(34, 197, 94)" />
            <stop offset="100%" stopColor="rgb(101, 163, 13)" />
          </linearGradient>
          <radialGradient id="calculatorGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
          </radialGradient>
        </defs>
        
        {/* Professional fintech calculation lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#toolsGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#toolsGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Calculator interface nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#calculatorGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#calculatorGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating tool indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(20, 184, 166)" />
          <text x="210" y="305" fill="rgb(20, 184, 166)" fontSize="10" fontFamily="monospace">ROI</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(34, 197, 94)" />
          <text x="610" y="255" fill="rgb(34, 197, 94)" fontSize="10" fontFamily="monospace">CAC</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(16, 185, 129)" />
          <text x="1010" y="205" fill="rgb(16, 185, 129)" fontSize="10" fontFamily="monospace">LTV</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Tools Card Component
function FloatingToolsCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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

// Interactive Funding Calculator Component
function FundingCalculator() {
  const [inputs, setInputs] = useState({
    revenue: '',
    growthRate: '',
    burnRate: '',
    currentFunding: ''
  });
  
  const [results, setResults] = useState({
    valuation: 0,
    runway: 0,
    fundingNeeded: 0,
    confidence: 0
  });
  
  useEffect(() => {
    const revenue = parseFloat(inputs.revenue) || 0;
    const growthRate = parseFloat(inputs.growthRate) || 0;
    const burnRate = parseFloat(inputs.burnRate) || 0;
    const currentFunding = parseFloat(inputs.currentFunding) || 0;
    
    if (revenue > 0 && growthRate > 0) {
      const valuation = revenue * (4 + (growthRate / 20)) * 1000;
      const runway = currentFunding / burnRate;
      const fundingNeeded = burnRate * 24; // 24 months runway
      const confidence = Math.min(95, Math.max(60, 60 + (growthRate / 5) + (revenue / 100)));
      
      setResults({
        valuation: Math.round(valuation),
        runway: Math.round(runway * 10) / 10,
        fundingNeeded: Math.round(fundingNeeded),
        confidence: Math.round(confidence)
      });
    }
  }, [inputs]);
  
  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/30">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-emerald-400 mb-4">Series A Funding Calculator</h3>
        <p className="text-slate-300">Estimate your startup's valuation and funding requirements</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Annual Recurring Revenue (ARR)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-slate-400">$</span>
              <input
                type="number"
                value={inputs.revenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                placeholder="2500000"
                className="w-full pl-8 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Monthly Growth Rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={inputs.growthRate}
                onChange={(e) => handleInputChange('growthRate', e.target.value)}
                placeholder="15"
                className="w-full pr-8 pl-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
              <span className="absolute right-3 top-3 text-slate-400">%</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Monthly Burn Rate
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-slate-400">$</span>
              <input
                type="number"
                value={inputs.burnRate}
                onChange={(e) => handleInputChange('burnRate', e.target.value)}
                placeholder="200000"
                className="w-full pl-8 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Current Cash on Hand
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-slate-400">$</span>
              <input
                type="number"
                value={inputs.currentFunding}
                onChange={(e) => handleInputChange('currentFunding', e.target.value)}
                placeholder="500000"
                className="w-full pl-8 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-emerald-400 mb-4">Calculated Results</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-600/50">
                <span className="text-slate-300">Estimated Valuation</span>
                <span className="text-emerald-400 font-bold text-lg">
                  ${results.valuation.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-slate-600/50">
                <span className="text-slate-300">Current Runway</span>
                <span className="text-emerald-400 font-bold text-lg">
                  {results.runway} months
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-slate-600/50">
                <span className="text-slate-300">Funding Needed</span>
                <span className="text-emerald-400 font-bold text-lg">
                  ${results.fundingNeeded.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-300">Readiness Score</span>
                <span className="text-emerald-400 font-bold text-lg">
                  {results.confidence}%
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
            <h5 className="text-emerald-400 font-semibold mb-2">💡 Recommendation</h5>
            <p className="text-emerald-300 text-sm">
              {results.confidence > 80 
                ? "Strong metrics! You're well-positioned for Series A funding." 
                : results.confidence > 70 
                ? "Good foundation. Consider optimizing growth metrics before fundraising." 
                : "Focus on improving key metrics before approaching Series A investors."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Series A Funding Tools | Investment Calculators & Assessment Tools | Vommuli',
  description: 'Free Series A funding tools including investment readiness assessment, valuation calculator, and pitch deck analyzer. Expert tools for startup fundraising success.',
  keywords: [
    'Series A funding tools',
    'startup valuation calculator',
    'investment readiness assessment',
    'pitch deck analyzer',
    'fundraising tools',
    'Series A preparation tools',
    'startup funding calculator',
    'VC readiness assessment',
    'investment calculator',
    'Series A planning tools'
  ],
  openGraph: {
    title: 'Series A Funding Tools | Investment Calculators & Assessment Tools',
    description: 'Expert Series A funding tools and calculators to accelerate your startup fundraising success.',
    url: 'https://vommuli.com/tools',
  },
};

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<string>('calculator');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      <FintechToolsBackground />
      
      {/* Professional Fintech Tools Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Professional Financial Tools" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Tool Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingToolsCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Tools Used</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={5000} suffix="+" />
          </div>
        </FloatingToolsCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingToolsCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Accuracy Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={94} suffix="%" />
          </div>
        </FloatingToolsCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">🛠️ Free Funding Tools</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Series A Funding
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                Tools & Calculators
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Professional-grade tools and calculators designed by Series A funding experts to accelerate your startup's path to investment readiness and successful capital raising.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Overview Grid */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Link href="/tools/investment-readiness-assessment" className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 group-hover:from-emerald-600/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-emerald-500/30 group-hover:border-emerald-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">Investment Readiness Assessment</h3>
                <p className="text-slate-300 text-center mb-6">Comprehensive 50-point evaluation to determine your Series A funding readiness</p>
                <div className="flex justify-center">
                  <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                    Free • 5 minutes
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer" onClick={() => setActiveTab('calculator')}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20 group-hover:from-teal-600/30 group-hover:to-green-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-teal-500/30 group-hover:border-teal-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🧮</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-400 mb-4 text-center">Funding Calculator</h3>
                <p className="text-slate-300 text-center mb-6">Calculate your startup's valuation and funding requirements based on key metrics</p>
                <div className="flex justify-center">
                  <div className="bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium">
                    Interactive Tool
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-600/20 group-hover:from-green-600/30 group-hover:to-lime-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-lime-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Market Analysis Tools</h3>
                <p className="text-slate-300 text-center mb-6">Analyze your market size and competitive positioning for investor presentations</p>
                <div className="flex justify-center">
                  <div className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 backdrop-blur-sm mb-6">
              <span className="text-teal-300 text-sm font-medium">🎯 Interactive Tools</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional Funding Calculators
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Use our expert-designed calculators to optimize your funding strategy and investor presentations.
            </p>
          </div>
          
          <FundingCalculator />
        </div>
      </section>

      {/* Tool Features */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Use Our Funding Tools?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built by Series A experts with insights from 500+ successful funding rounds.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
              <div className="relative p-8 border border-blue-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Instant Results</h3>
                <p className="text-slate-300 mb-6">Get immediate calculations and assessments without waiting for manual reviews or consultations.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Real-time calculations</li>
                  <li>• Immediate feedback</li>
                  <li>• No delays or queues</li>
                  <li>• 24/7 availability</li>
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
              <div className="relative p-8 border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Expert-Designed</h3>
                <p className="text-slate-300 mb-6">Created by Series A funding specialists with proven track records in successful capital raising.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• <AnimatedCounter end={500} suffix="+" /> funding rounds analyzed</li>
                  <li>• <AnimatedCounter end={94} suffix="%" /> accuracy rate</li>
                  <li>• Industry-standard metrics</li>
                  <li>• Continuously updated</li>
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
              <div className="relative p-8 border border-orange-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Secure & Private</h3>
                <p className="text-slate-300 mb-6">Your data is processed securely and never stored or shared with third parties.</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• No data storage</li>
                  <li>• Secure calculations</li>
                  <li>• Complete privacy</li>
                  <li>• GDPR compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/20 to-green-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-emerald-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
                  <span className="text-emerald-300 text-sm font-medium">🚀 Ready to Get Started?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Series A Journey
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Use our professional tools to optimize your funding strategy and accelerate your path to successful Series A funding.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Assessment</span>
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      Get Expert Help
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <p className="text-slate-400 mt-8 text-lg">
                  Free tools. Expert guidance. Proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}