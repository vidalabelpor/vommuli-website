// Enhanced Stats with animated counters and competitor-inspired design
'use client';
import { TrendingUp, Users, Target, Award, BarChart3, Zap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Animated counter hook
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return { count, ref };
}

const stats = [
  {
    icon: TrendingUp,
    value: 2.3,
    suffix: 'B+',
    prefix: '$',
    label: 'Capital Raised',
    description: 'Total funding facilitated across all deals',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    prefix: '',
    label: 'Companies Served',
    description: 'Startups and growth companies helped',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    icon: Target,
    value: 95,
    suffix: '%',
    prefix: '',
    label: 'Success Rate',
    description: 'Companies that secured funding',
    color: 'from-purple-500 to-indigo-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    icon: BarChart3,
    value: 23,
    suffix: 'M',
    prefix: '$',
    label: 'Average Deal Size',
    description: 'Median funding amount per round',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-orange-100'
  }
];

const additionalMetrics = [
  {
    category: 'Funding Rounds',
    metrics: [
      { label: 'Seed', value: '150+', percentage: '30%' },
      { label: 'Series A', value: '200+', percentage: '40%' },
      { label: 'Series B', value: '100+', percentage: '20%' },
      { label: 'Series C+', value: '50+', percentage: '10%' }
    ]
  },
  {
    category: 'Industries Served',
    metrics: [
      { label: 'Technology', value: '200+', percentage: '40%' },
      { label: 'Healthcare', value: '100+', percentage: '20%' },
      { label: 'Fintech', value: '75+', percentage: '15%' },
      { label: 'Other', value: '125+', percentage: '25%' }
    ]
  }
];

// Individual stat card component - Fintech Design Standard
function StatCard({ stat, index }: { stat: typeof stats[0], index: number }) {
  const { count, ref } = useCountUp(stat.value, 2000 + index * 200);
  
  return (
    <div 
      ref={ref}
      className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300/50 transform hover:-translate-y-3 hover:scale-105`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Stripe-style gradient background effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Enhanced Icon with Fintech Styling */}
        <div className={`w-18 h-18 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
          <stat.icon className="w-9 h-9 text-white" />
        </div>
        
        {/* Animated Value with Financial Typography */}
        <div className="text-center mb-6">
          <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2 tracking-tight">
            <span className="inline-block">
              {stat.prefix}
              {stat.value === 2.3 ? (count / 10).toFixed(1) : count}
              {stat.suffix}
            </span>
          </div>
          <div className="text-lg font-semibold text-slate-600 mb-3 tracking-wide">
            {stat.label}
          </div>
          <div className="text-sm text-slate-500 leading-relaxed">
            {stat.description}
          </div>
        </div>
        
        {/* Enhanced progress indicator */}
        <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
          <div 
            className={`bg-gradient-to-r ${stat.color} h-1.5 rounded-full transition-all duration-1000 ease-out shadow-sm`}
            style={{ width: `${Math.min((count / stat.value) * 100, 100)}%` }}
          ></div>
        </div>
        
        {/* Coinbase-style data point indicator */}
        <div className="flex justify-center mt-4">
          <div className={`w-2 h-2 bg-gradient-to-r ${stat.color} rounded-full animate-pulse`}></div>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Stripe-Inspired Background with Financial Data Visualization */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/3 via-blue-500/2 to-indigo-500/4"></div>
        
        {/* Professional financial imagery */}
        <div className="absolute inset-0 opacity-8">
          <img 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Financial technology data visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-slate-50/90"></div>
        </div>
      </div>

      {/* Coinbase-style floating elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-indigo-400/10 to-purple-500/8 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Track Record & Performance
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Proven Results</span>
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              That Speak For Themselves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record demonstrates consistent success in connecting startups with the right investors at the right time.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className={`text-center transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">8 Weeks</div>
              <div className="text-sm text-gray-600">Average time from intro to term sheet</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">47 Active</div>
              <div className="text-sm text-gray-600">Deals currently in pipeline</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">12 States</div>
              <div className="text-sm text-gray-600">Geographic coverage across US markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}