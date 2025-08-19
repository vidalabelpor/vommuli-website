// Enhanced Hero with competitor-inspired design elements
'use client';
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Zap, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      {/* Stripe-Inspired Background with Financial Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay - Stripe style */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/3 to-purple-500/5"></div>
        
        {/* Geometric financial patterns - Coinbase inspired */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/8 to-blue-500/8 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
        
        {/* Plaid-style technical grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="fintech-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="10" cy="10" r="0.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fintech-grid)" className="text-indigo-500" />
          </svg>
        </div>

        {/* Wise-inspired floating elements */}
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Enhanced Badge with Animation */}
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-primary-50 text-primary-800 text-sm font-semibold border border-primary-200 shadow-sm transition-all duration-300 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="relative">
                <TrendingUp className="w-4 h-4 mr-2" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
                Trusted by 500+ Companies
              </span>
            </div>

            {/* Enhanced Main Headline with Better Typography */}
            <h1 className={`text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.2s'}}>
              <span className="block">Series A Funding Experts</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                  $500M+ Raised
                </span>
                <span className="text-gray-700"> for Clients</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Premium VC deal sourcing and capital introduction services for Series A-C startups. Connect with mid-tier venture capital firms in NYC, Austin, Denver, and Miami.
            </p>

            {/* Enhanced Key Benefits with Hover Effects */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.4s'}}>
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold block">Targeted Investor Matching</span>
                  <span className="text-gray-500 text-sm">Precision-matched VCs</span>
                </div>
              </div>
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-100 to-accent-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold block">500+ Investor Network</span>
                  <span className="text-gray-500 text-sm">Pre-qualified connections</span>
                </div>
              </div>
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold block">95% Success Rate</span>
                  <span className="text-gray-500 text-sm">Proven track record</span>
                </div>
              </div>
              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-gray-800 font-semibold block">8-Week Average</span>
                  <span className="text-gray-500 text-sm">From intro to term sheet</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons with Better Visual Hierarchy */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.6s'}}>
              <a href="/tools/investment-readiness-assessment" className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">
                <span className="relative z-10">Get Your Investment Readiness Score</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              <a href="/contact" className="group bg-white text-primary-700 border-2 border-primary-200 hover:border-primary-300 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <Shield className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Schedule Expert Consultation
              </a>
            </div>

            {/* Value Proposition Enhancement */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Success-based pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>85% success rate</span>
                </div>
              </div>
            </div>

            {/* Simplified Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4">Recently funded companies include:</p>
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="h-8 w-20 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-800 font-medium">AI SaaS</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$18M Series A</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-24 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-xs text-green-800 font-medium">HealthTech</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$42M Series B</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-20 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-xs text-purple-800 font-medium">Climate</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$25M Series A</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">📈 67% Introduction-to-Term-Sheet Success Rate</p>
              </div>
            </div>
          </div>

          {/* Enhanced Right Column - Fintech-Inspired Professional Imagery */}
          <div className={`relative transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.8s'}}>
            {/* Main Hero Visual - Stripe/Coinbase Style */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                {/* Professional Financial Technology Image */}
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Modern financial technology office environment with data visualization"
                  className="w-full h-full object-cover"
                />
                
                {/* Sophisticated Financial Gradient Overlay - Stripe Inspired */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-blue-800/75 to-slate-900/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-indigo-500/10"></div>
                
                {/* Coinbase-Style Data Visualization Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,250 Q100,200 200,180 T400,120 L400,300 L0,300 Z" fill="url(#chart-gradient)"/>
                    <path d="M0,250 Q100,200 200,180 T400,120" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6"/>
                  </svg>
                </div>
                
                {/* Professional Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                    <span className="text-sm font-medium text-emerald-300 tracking-wide">Live Capital Markets</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">Strategic Capital Deployment</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Connecting growth companies with institutional capital partners</p>
                </div>
              </div>
              
              {/* Fintech-Style Floating Metrics - Stripe/Coinbase Inspired */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 tracking-wide">SUCCESS RATE</p>
                    <p className="text-2xl font-bold text-slate-800">95%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 tracking-wide">AVG DEAL SIZE</p>
                    <p className="text-2xl font-bold text-slate-800">$23M</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl px-4 py-3 shadow-xl text-white">
                <div className="text-center">
                  <p className="text-xs font-semibold opacity-90 tracking-wide">ACTIVE DEALS</p>
                  <p className="text-xl font-bold">47</p>
                </div>
              </div>
            </div>

            {/* Client Success Showcase */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=126&q=80"
                    alt="Tech startup office"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">AI SaaS</p>
                    <p className="text-xs text-green-600 font-medium">$18M Series A</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=126&q=80"
                    alt="Healthcare technology"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">HealthTech</p>
                    <p className="text-xs text-blue-600 font-medium">$42M Series B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}