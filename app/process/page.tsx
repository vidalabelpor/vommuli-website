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

// Process Flow SVG Background Component
function ProcessFlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="processGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="60%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" />
          </linearGradient>
          <linearGradient id="processGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="60%" stopColor="rgb(139, 92, 246)" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" />
          </linearGradient>
          <radialGradient id="workflowGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(99, 102, 241)" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" />
          </radialGradient>
        </defs>
        
        {/* Process workflow lines */}
        <path 
          d="M0,600 L200,580 L400,520 L600,480 L800,440 L1000,400 L1200,360" 
          fill="none" 
          stroke="url(#processGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,650 L200,620 L400,580 L600,540 L800,500 L1000,460 L1200,420" 
          fill="none" 
          stroke="url(#processGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Process stage indicators */}
        <circle cx="400" cy="200" r="40" fill="url(#workflowGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating process indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(99, 102, 241)" />
          <text x="210" y="305" fill="rgb(99, 102, 241)" fontSize="10" fontFamily="monospace">Week 1</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(139, 92, 246)" />
          <text x="610" y="255" fill="rgb(139, 92, 246)" fontSize="10" fontFamily="monospace">Week 4</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(168, 85, 247)" />
          <text x="1010" y="205" fill="rgb(168, 85, 247)" fontSize="10" fontFamily="monospace">Week 8</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Process Card Component
function FloatingProcessCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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

// Interactive Process Timeline Component
function ProcessTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      phase: "Investment Readiness",
      duration: "Week 1-2",
      color: "blue",
      icon: "🎯",
      description: "Comprehensive evaluation and optimization of your startup's readiness for Series A funding",
      tasks: [
        "Complete 50-point investment readiness assessment",
        "Financial model review and optimization",
        "Pitch deck evaluation and enhancement",
        "Team composition and advisory board analysis",
        "Market positioning and competitive analysis"
      ],
      deliverables: [
        "Investment Readiness Score (0-100)",
        "Detailed gap analysis report",
        "Optimized financial model",
        "Enhanced pitch deck",
        "Series A strategy roadmap"
      ]
    },
    {
      phase: "VC Targeting & Strategy",
      duration: "Week 3",
      color: "indigo",
      icon: "🎪",
      description: "Strategic identification and prioritization of Series A venture capital firms aligned with your startup",
      tasks: [
        "VC firm research and thesis alignment",
        "Check size and stage fit analysis",
        "Geographic and sector focus mapping",
        "Partner background and portfolio review",
        "Introduction pathway identification"
      ],
      deliverables: [
        "Target VC list (15-25 firms)",
        "Prioritized outreach sequence",
        "Customized pitch materials",
        "Introduction strategy plan",
        "Timeline and milestone map"
      ]
    },
    {
      phase: "Warm Introductions",
      duration: "Week 4-6",
      color: "purple",
      icon: "🤝",
      description: "Leveraging our network for warm introductions to target VCs with ongoing pitch coaching",
      tasks: [
        "Warm introduction facilitation",
        "Initial meeting preparation and coaching",
        "Follow-up strategy and materials",
        "Due diligence preparation",
        "Ongoing pitch refinement"
      ],
      deliverables: [
        "5-8 warm VC introductions",
        "Initial meeting presentations",
        "Due diligence data room",
        "Follow-up communication plan",
        "Real-time coaching support"
      ]
    },
    {
      phase: "Deal Closing Support",
      duration: "Week 7-12",
      color: "pink",
      icon: "📝",
      description: "Comprehensive support through due diligence, term sheet negotiation, and deal closing",
      tasks: [
        "Due diligence coordination and support",
        "Term sheet review and negotiation guidance",
        "Legal and financial documentation review",
        "Investor communication management",
        "Closing process coordination"
      ],
      deliverables: [
        "Due diligence completion",
        "Negotiated term sheet",
        "Legal documentation review",
        "Investor relations framework",
        "Successful funding close"
      ]
    }
  ];
  
  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      blue: active ? 'bg-blue-500 text-white border-blue-400' : 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      indigo: active ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      purple: active ? 'bg-purple-500 text-white border-purple-400' : 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      pink: active ? 'bg-pink-500 text-white border-pink-400' : 'bg-pink-500/20 text-pink-300 border-pink-500/30'
    };
    return colors[color as keyof typeof colors];
  };
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-blue-400 mb-4">Our Proven 4-Phase Process</h3>
        <p className="text-slate-300">Interactive timeline showing our systematic approach to Series A funding success</p>
      </div>
      
      {/* Phase Selector */}
      <div className="flex flex-wrap gap-4 mb-8">
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`px-6 py-3 rounded-xl border transition-all duration-300 ${getColorClasses(phase.color, activePhase === index)} hover:scale-105`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{phase.icon}</span>
              <div className="text-left">
                <div className="font-semibold">{phase.phase}</div>
                <div className="text-sm opacity-80">{phase.duration}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Active Phase Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl">{phases[activePhase].icon}</span>
              <div>
                <h4 className="text-2xl font-bold text-white">{phases[activePhase].phase}</h4>
                <p className="text-slate-400">{phases[activePhase].duration}</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">{phases[activePhase].description}</p>
          </div>
          
          <div className="bg-slate-700/30 p-6 rounded-lg">
            <h5 className="text-lg font-semibold text-white mb-4">Key Activities</h5>
            <ul className="space-y-3">
              {phases[activePhase].tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300 text-sm">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-blue-400 mb-4">Phase Deliverables</h5>
            <ul className="space-y-3">
              {phases[activePhase].deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-blue-300 text-sm">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 bg-slate-700/30 p-6 rounded-lg">
            <h5 className="text-lg font-semibold text-white mb-4">Success Metrics</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter end={activePhase === 0 ? 95 : activePhase === 1 ? 25 : activePhase === 2 ? 8 : 85} suffix={activePhase === 1 ? '' : '%'} />
                </div>
                <p className="text-slate-300 text-xs">
                  {activePhase === 0 ? 'Readiness Score' : activePhase === 1 ? 'Target VCs' : activePhase === 2 ? 'Introductions' : 'Success Rate'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  <AnimatedCounter end={activePhase === 0 ? 2 : activePhase === 1 ? 1 : activePhase === 2 ? 3 : 8} suffix={activePhase < 3 ? ' weeks' : ' weeks'} />
                </div>
                <p className="text-slate-300 text-xs">Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Series A Funding Process | Step-by-Step Advisory Methodology | Vommuli',
  description: 'Learn our proven 4-phase Series A funding process: Investment Readiness, VC Targeting, Warm Introductions, and Deal Closing. 85% success rate with systematic approach.',
  keywords: [
    'Series A funding process',
    'startup fundraising methodology',
    'Series A advisory process',
    'VC introduction process',
    'investment readiness process',
    'Series A preparation steps',
    'fundraising process guide',
    'Series A workflow',
    'startup funding methodology',
    'venture capital process'
  ],
  openGraph: {
    title: 'Series A Funding Process | Step-by-Step Advisory Methodology',
    description: 'Proven 4-phase process for Series A funding success with 85% success rate and systematic approach.',
    url: 'https://vommuli.com/process',
  },
};

export default function ProcessPage() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <ProcessFlowBackground />
      
      {/* Professional Process Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Professional Process Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Process Metrics Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingProcessCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Success Rate</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={85} suffix="%" />
          </div>
        </FloatingProcessCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingProcessCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Avg Timeline</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={8} suffix=" weeks" />
          </div>
        </FloatingProcessCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-sm font-medium">⚡ Proven Methodology</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Series A Funding
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Process & Methodology
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Our systematic 4-phase approach to Series A funding has generated an 85% success rate across 500+ funding rounds. Learn the proven methodology that transforms ambitious startups into investment-ready companies.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-sm mb-6">
              <span className="text-indigo-300 text-sm font-medium">📊 Process Overview</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Systematic Approach to Funding Success
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Four strategic phases designed to maximize your Series A funding success with clear milestones and measurable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '1', title: 'Investment Readiness', subtitle: 'Week 1-2', color: 'blue', percentage: 95 },
              { number: '2', title: 'VC Targeting', subtitle: 'Week 3', color: 'indigo', percentage: 25 },
              { number: '3', title: 'Warm Introductions', subtitle: 'Week 4-6', color: 'purple', percentage: 8 },
              { number: '4', title: 'Deal Closing', subtitle: 'Week 7-12', color: 'pink', percentage: 85 }
            ].map((phase, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredPhase(index)}
                onMouseLeave={() => setHoveredPhase(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${hoveredPhase === index ? 'scale-105' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    phase.color === 'blue' ? 'from-blue-600/20 to-blue-800/20' :
                    phase.color === 'indigo' ? 'from-indigo-600/20 to-indigo-800/20' :
                    phase.color === 'purple' ? 'from-purple-600/20 to-purple-800/20' :
                    'from-pink-600/20 to-pink-800/20'
                  } ${hoveredPhase === index ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}></div>
                  
                  <div className={`relative p-8 border ${
                    phase.color === 'blue' ? 'border-blue-500/30' :
                    phase.color === 'indigo' ? 'border-indigo-500/30' :
                    phase.color === 'purple' ? 'border-purple-500/30' :
                    'border-pink-500/30'
                  } transition-all duration-300`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      phase.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      phase.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                      phase.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      'from-pink-500 to-pink-600'
                    } rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl`}>
                      {phase.number}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 text-center ${
                      phase.color === 'blue' ? 'text-blue-400' :
                      phase.color === 'indigo' ? 'text-indigo-400' :
                      phase.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`}>
                      {phase.title}
                    </h3>
                    
                    <p className="text-slate-300 text-center mb-4">{phase.subtitle}</p>
                    
                    <div className="text-center">
                      <div className={`text-3xl font-bold mb-1 ${
                        phase.color === 'blue' ? 'text-blue-400' :
                        phase.color === 'indigo' ? 'text-indigo-400' :
                        phase.color === 'purple' ? 'text-purple-400' :
                        'text-pink-400'
                      }`}>
                        <AnimatedCounter 
                          end={phase.percentage} 
                          suffix={index === 1 ? '' : index === 2 ? '' : '%'}
                        />
                        {index === 1 ? ' VCs' : index === 2 ? ' Intros' : ''}
                      </div>
                      <p className="text-slate-400 text-sm">
                        {index === 0 ? 'Readiness Score' : index === 1 ? 'Target Firms' : index === 2 ? 'Warm Intros' : 'Success Rate'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Interactive Process Deep Dive
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Explore each phase of our methodology with detailed activities, deliverables, and success metrics.
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>

      {/* Success Stories & Metrics */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Process Success Metrics
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results from our systematic approach to Series A funding advisory.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Success Rate</h3>
                    <p className="text-slate-300">85% of startups following our complete process successfully raise Series A funding within 6 months.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Accelerated Timeline</h3>
                    <p className="text-slate-300">Average time from process start to term sheet is 8 weeks, compared to 16-24 weeks industry average.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Premium Valuations</h3>
                    <p className="text-slate-300">Startups achieve 25-40% higher valuations compared to those without our systematic preparation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Long-term Success</h3>
                    <p className="text-slate-300">95% of our funded startups successfully reach their Series B milestone within 18-24 months.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Process Success Metrics</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-blue-400 mb-2">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <p className="text-slate-300 text-sm">Startups Guided</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-indigo-400 mb-2">
                      <AnimatedCounter end={85} suffix="%" />
                    </div>
                    <p className="text-slate-300 text-sm">Funding Success Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">
                      <AnimatedCounter end={8} suffix=" weeks" />
                    </div>
                    <p className="text-slate-300 text-sm">Avg Time to Term Sheet</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-pink-400 mb-2">
                      <AnimatedCounter end={35} suffix="%" />
                    </div>
                    <p className="text-slate-300 text-sm">Valuation Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 border border-blue-500/30">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
                  <span className="text-blue-300 text-sm font-medium">🚀 Ready to Start?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Begin Your Series A Journey
                </h2>
                <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join 500+ startups who have successfully raised Series A funding through our proven methodology. Start with a free investment readiness assessment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/tools/investment-readiness-assessment"
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 overflow-hidden text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Phase 1: Assessment</span>
                  </Link>
                  
                  <Link 
                    href="/contact"
                    className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105 text-center"
                  >
                    <span className="flex items-center justify-center">
                      Schedule Process Discussion
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <p className="text-slate-400 mt-8 text-lg">
                  85% success rate. 8-week average timeline. Proven methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}