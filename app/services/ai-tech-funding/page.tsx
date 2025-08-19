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

// AI Neural Network SVG Background Component
function AINetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="aiGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" />
            <stop offset="60%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(99, 102, 241)" />
          </linearGradient>
          <linearGradient id="aiGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" />
            <stop offset="60%" stopColor="rgb(139, 92, 246)" />
            <stop offset="100%" stopColor="rgb(79, 70, 229)" />
          </linearGradient>
          <radialGradient id="neuralGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </radialGradient>
        </defs>
        
        {/* Neural network connections */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#aiGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#aiGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* AI nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#neuralGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#neuralGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating AI indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(168, 85, 247)" />
          <text x="210" y="305" fill="rgb(168, 85, 247)" fontSize="10" fontFamily="monospace">ML</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(139, 92, 246)" />
          <text x="610" y="255" fill="rgb(139, 92, 246)" fontSize="10" fontFamily="monospace">AI</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(79, 70, 229)" />
          <text x="1010" y="205" fill="rgb(79, 70, 229)" fontSize="10" fontFamily="monospace">GPU</text>
        </g>
      </svg>
    </div>
  );
}

// Floating AI Card Component
function FloatingAICard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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
  title: 'AI & Tech Funding Advisory | Artificial Intelligence Startup Capital Introduction | Vommuli',
  description: 'Specialized AI and technology funding advisory services. Expert introductions to AI-focused VCs and tech investors with deep understanding of machine learning, deep tech, and artificial intelligence markets.',
  keywords: [
    'AI funding advisory',
    'artificial intelligence funding',
    'AI startup funding',
    'tech funding advisory',
    'AI venture capital',
    'machine learning funding',
    'deep tech funding',
    'AI investment advisory',
    'technology startup capital',
    'AI VC introductions',
    'artificial intelligence investors',
    'tech startup fundraising',
    'AI capital introduction',
    'deep tech investors',
    'AI seed funding',
    'AI Series A funding',
    'machine learning VC',
    'AI technology funding',
    'artificial intelligence capital',
    'tech innovation funding',
    'generative AI funding',
    'AI infrastructure funding',
    'computer vision funding',
    'NLP funding advisory',
    'AI technical due diligence'
  ],
  openGraph: {
    title: 'AI & Tech Funding Advisory | Artificial Intelligence Startup Capital Introduction',
    description: 'Specialized AI and deep tech funding advisory with expert introductions to AI-focused investors and deep understanding of artificial intelligence markets.',
    url: 'https://vommuli.com/services/ai-tech-funding',
  },
};

export default function AITechFundingPage() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <AINetworkBackground />
      
      {/* Professional AI Technology Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="AI Technology Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating AI Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingAICard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">AI Growth Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={34} suffix="%" />
          </div>
        </FloatingAICard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingAICard delay={1}>
          <div className="text-white/90 text-sm font-medium">AI Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={76} suffix="%" />
          </div>
        </FloatingAICard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">🤖 AI & Deep Tech Funding</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Artificial Intelligence &
              <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Deep Tech Funding Advisory
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized funding advisory for AI startups and deep technology companies. Expert introductions to AI-focused VCs with deep understanding of machine learning, neural networks, computer vision, and emerging AI technologies driving market transformation.
            </p>
          </div>
        </div>
      </section>

      {/* AI Market Statistics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 backdrop-blur-sm mb-6">
              <span className="text-violet-300 text-sm font-medium">📊 Market Intelligence</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI Funding Market Leadership
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Leading the surge in artificial intelligence investment activity with specialized expertise and proven results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20"></div>
              <div className="relative p-8 border border-purple-500/30 text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">
                  <AnimatedCounter end={34} suffix="%" prefix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">AI Introduction Requests YoY</p>
                <p className="text-green-400 text-xs">Fastest growing sector</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
              <div className="relative p-8 border border-indigo-500/30 text-center">
                <div className="text-4xl font-black text-indigo-400 mb-2">
                  <AnimatedCounter end={85} suffix="+" />
                </div>
                <p className="text-slate-300 text-sm mb-1">AI-Focused VC Partners</p>
                <p className="text-violet-400 text-xs">Specialized network</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20"></div>
              <div className="relative p-8 border border-violet-500/30 text-center">
                <div className="text-4xl font-black text-violet-400 mb-2">
                  <AnimatedCounter end={1.8} prefix="$" suffix="B" />
                </div>
                <p className="text-slate-300 text-sm mb-1">AI Capital Facilitated</p>
                <p className="text-green-400 text-xs">Last 18 months</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">
                  <AnimatedCounter end={76} suffix="%" />
                </div>
                <p className="text-slate-300 text-sm mb-1">AI Startup Success Rate</p>
                <p className="text-green-400 text-xs">↑ 23% vs general tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-purple-300 text-sm font-medium">🔬 Technology Focus Areas</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI & Deep Tech Specializations
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert funding advisory across the full spectrum of artificial intelligence and deep technology innovations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredTech('ml')}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 group-hover:from-violet-600/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-violet-500/30 group-hover:border-violet-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">🧠</span>
                </div>
                
                <h3 className="text-2xl font-bold text-violet-400 mb-4 text-center">Machine Learning & AI</h3>
                <p className="text-slate-300 text-center mb-6">Core AI technologies driving automation, prediction, and intelligent decision-making across industries.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-violet-300 mb-2">Core AI</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Deep Learning</li>
                      <li>• Neural Networks</li>
                      <li>• Reinforcement Learning</li>
                      <li>• Transfer Learning</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-violet-300 mb-2">Applications</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Computer Vision</li>
                      <li>• Natural Language Processing</li>
                      <li>• Predictive Analytics</li>
                      <li>• Autonomous Systems</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter end={120} suffix="+" />
                  </div>
                  <p className="text-slate-300 text-sm">Specialized AI VCs</p>
                </div>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredTech('enterprise')}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 group-hover:from-indigo-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                
                <h3 className="text-2xl font-bold text-indigo-400 mb-4 text-center">Enterprise AI Solutions</h3>
                <p className="text-slate-300 text-center mb-6">AI-powered enterprise software and platforms transforming business operations and decision-making.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-300 mb-2">Business AI</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Process Automation</li>
                      <li>• Decision Support</li>
                      <li>• Customer Intelligence</li>
                      <li>• Supply Chain AI</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-300 mb-2">Platforms</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• AI-as-a-Service</li>
                      <li>• MLOps Platforms</li>
                      <li>• Data Analytics</li>
                      <li>• Workflow AI</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">
                    <AnimatedCounter end={95} suffix="+" />
                  </div>
                  <p className="text-slate-300 text-sm">Enterprise AI Investors</p>
                </div>
              </div>
            </div>
            
            <div 
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredTech('emerging')}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20 group-hover:from-cyan-600/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
              <div className="relative p-8 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Emerging AI Technologies</h3>
                <p className="text-slate-300 text-center mb-6">Cutting-edge AI research and next-generation technologies shaping the future of artificial intelligence.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-300 mb-2">Next-Gen AI</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Generative AI</li>
                      <li>• Edge AI</li>
                      <li>• Quantum ML</li>
                      <li>• Neuromorphic Computing</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-300 mb-2">Infrastructure</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• AI Hardware</li>
                      <li>• Model Training</li>
                      <li>• AI Semiconductors</li>
                      <li>• Cloud AI</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    <AnimatedCounter end={65} suffix="+" />
                  </div>
                  <p className="text-slate-300 text-sm">Deep Tech Funds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investment Process */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Specialized Investment Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our systematic approach to AI funding combines technical due diligence with strategic investor matching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1', title: 'AI Technical Assessment', subtitle: 'Week 1-2', color: 'purple', description: 'Comprehensive evaluation of AI models, data quality, and technical scalability' },
              { number: '2', title: 'AI Investor Targeting', subtitle: 'Week 3', color: 'indigo', description: 'Strategic identification of AI-focused VCs and deep tech specialists' },
              { number: '3', title: 'AI Demo & Validation', subtitle: 'Week 4-5', color: 'violet', description: 'Technical demonstrations and proof-of-concept validation for investors' },
              { number: '4', title: 'AI Deal Structuring', subtitle: 'Week 6-8', color: 'cyan', description: 'AI-specific valuation frameworks and deal terms optimization' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  phase.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  phase.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  phase.color === 'violet' ? 'from-violet-500 to-violet-600' :
                  'from-cyan-500 to-cyan-600'
                } rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl transform hover:rotate-12 transition-transform duration-300`}>
                  {phase.number}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  phase.color === 'purple' ? 'text-purple-400' :
                  phase.color === 'indigo' ? 'text-indigo-400' :
                  phase.color === 'violet' ? 'text-violet-400' :
                  'text-cyan-400'
                }`}>
                  {phase.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-3">{phase.subtitle}</p>
                <p className="text-slate-300 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-indigo-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-purple-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
                  <span className="text-purple-300 text-sm font-medium">🚀 Ready to Launch?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Accelerate Your AI Startup Journey
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with AI-specialized investors who understand deep technology and can accelerate your artificial intelligence innovation to market leadership.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Launch AI Funding Process</span>
                  </Link>
                  
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      AI Readiness Assessment
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <p className="text-slate-400 mt-8 text-lg">
                  Technical validation. AI-focused investors. Proven methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "AI & Tech Funding Advisory Services",
          description: "Specialized funding advisory for AI startups and deep technology companies with expert introductions to AI-focused venture capital investors.",
          provider: {
            "@type": "FinancialService",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          serviceType: "AI Technology Funding Advisory",
          category: "Artificial Intelligence Investment Services",
          url: "https://vommuli.com/services/ai-tech-funding",
          audience: {
            "@type": "BusinessAudience",
            "audienceType": "AI and Deep Technology Startups"
          }
        }}
      />
    </div>
  );
}