import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'NYC Series A Funding Advisory | Manhattan Startup Fundraising Experts | Vommuli Ventures',
  description: 'Expert Series A funding advisory for NYC startups. Connect with Manhattan and Brooklyn entrepreneurs to top venture capital firms. Local NYC startup expertise.',
  keywords: [
    'NYC Series A funding',
    'Manhattan startup fundraising',
    'New York Series A advisory',
    'NYC startup consultants',
    'Manhattan venture capital introductions',
    'Brooklyn startup funding',
    'NYC pitch deck optimization',
    'New York startup advisory',
    'Manhattan Series A preparation',
    'NYC VC introductions',
    'Brooklyn venture capital',
    'Manhattan startup accelerators',
    'NYC fintech Series A',
    'New York startup ecosystem',
    'Manhattan Series A consultants',
    'NYC startup funding experts',
    'Brooklyn Series A advisory',
    'Manhattan pitch deck review',
    'New York startup investment',
    'NYC entrepreneur advisory',
    'Manhattan startup coaching',
    'NYC Series A success',
    'Brooklyn startup consultants',
    'Manhattan venture funding'
  ],
  openGraph: {
    title: 'NYC Series A Funding Advisory | Manhattan Startup Experts',
    description: 'Expert Series A funding advisory for NYC startups with deep Manhattan and Brooklyn startup ecosystem knowledge.',
    url: 'https://vommuli.com/locations/new-york',
  },
};

export default function NewYorkLocationPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Wall Street Hero Section */}
      <section className="bg-nyc-hero relative section-padding-lg overflow-hidden">
        {/* NYC Skyline Silhouette Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-nyc-skyline opacity-20"></div>
        
        {/* Manhattan Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-manhattan-grid opacity-5"></div>
        
        {/* Financial Data Stream Animation */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-financial-stream"></div>
        
        {/* Animated Stock Ticker */}
        <div className="absolute top-8 left-0 right-0 overflow-hidden">
          <div className="animate-stock-ticker whitespace-nowrap text-yellow-400/60 text-sm font-mono">
            <span className="inline-block px-8">VOM +5.2% • FUND +3.8% • CAPITAL +7.1% • SERIES-A +2.4% • VENTURE +4.6% • NYC +8.3%</span>
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 backdrop-blur-sm mb-8">
              <span className="text-yellow-400 text-sm font-medium flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Wall Street Series A Experts
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Manhattan Capital
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Advisory Elite
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Navigate Wall Street's exclusive investor network with Manhattan's premier Series A advisory firm. 
              Connect your startup with the Financial District's most influential venture capital institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-3xl shadow-2xl p-8 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-slate-900 font-bold text-xl">850+</span>
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Wall Street Firms</h3>
              <p className="text-slate-300">Investment banks, VC firms, and private equity partners in Manhattan's Financial District</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-3xl shadow-2xl p-8 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-slate-900 font-bold text-lg">$4.2T</span>
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Assets Under Management</h3>
              <p className="text-slate-300">Total capital managed by Manhattan-based institutional investors and family offices</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 rounded-3xl shadow-2xl p-8 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-slate-900 font-bold text-xl">#1</span>
              </div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Global Finance Capital</h3>
              <p className="text-slate-300">World's premier financial center with unmatched institutional capital access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial District Overview */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 section-padding relative">
        {/* Interactive NYC Borough Map Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="nyc-borough-grid w-full h-full"></div>
        </div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Wall Street's
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                Investment Empire
              </span>
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              The Financial District commands over $4.2 trillion in assets under management, making it the world's 
              most powerful concentration of institutional capital and investment expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-slate-900 mb-8 flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-4 animate-pulse"></span>
                Manhattan's Capital Ecosystem
              </h3>
              
              <div className="space-y-8">
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-yellow-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-700 transition-colors">Tier-1 VC Powerhouses</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">Union Square Ventures, Bessemer Venture Partners, FirstMark Capital, and General Atlantic lead Manhattan's venture ecosystem with $180B+ in annual deal flow.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-yellow-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-700 transition-colors">Mega-Fund Headquarters</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">KKR, Blackstone, Apollo Global Management controlling $2.4T in assets, setting global investment standards from Manhattan offices.</p>
                    </div>
                  </div>
                </div>
                
                <div className="group hover:bg-white/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-yellow-200">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-700 transition-colors">Elite Family Office Network</h4>
                      <p className="text-slate-700 leading-relaxed text-lg">300+ ultra-high-net-worth family offices managing $1.8T in private wealth, seeking direct investment opportunities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl p-10 text-white border border-yellow-500/20">
              <div className="flex items-center mb-8">
                <h3 className="text-3xl font-bold text-yellow-400">Live Market Metrics</h3>
                <div className="ml-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-yellow-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Investment Banks</span>
                  <span className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">47</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-yellow-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">VC Firms (Series A+)</span>
                  <span className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">285+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-yellow-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Private Equity Funds</span>
                  <span className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">520+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-yellow-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Family Offices ($1B+)</span>
                  <span className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">300+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-700/50 group hover:border-yellow-500/30 transition-colors">
                  <span className="text-slate-300 font-medium text-lg">Quarterly Deal Volume</span>
                  <span className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">$320B+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-slate-300 font-medium text-lg">Average Series A</span>
                  <span className="text-green-400 font-bold text-xl">$62M</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-400 mb-2 font-mono">REAL-TIME MARKET INDEX</div>
                <div className="text-2xl font-bold text-green-400">VOM-NYC: +12.4% ↗</div>
                <div className="text-sm text-slate-400">Manhattan Venture Activity Index</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall Street Elite Services */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 section-padding relative overflow-hidden">
        {/* Trading Floor Visualization Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="trading-floor-grid w-full h-full"></div>
        </div>
        
        {/* Animated Market Data Streams */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-sm mb-8">
              <span className="text-yellow-400 text-sm font-medium font-mono">EXECUTIVE TIER SERVICES</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
              Wall Street
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Access Protocol
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Exclusive capital introduction services designed for Manhattan's sophisticated investment ecosystem. 
              Navigate the Financial District's most influential institutional investors with elite-level advisory.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl p-10 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 group hover:transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-yellow-400 mb-6 group-hover:text-yellow-300 transition-colors">Bulge Bracket Access</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">Direct pipelines to Goldman Sachs, Morgan Stanley, JPMorgan strategic investment divisions and their exclusive deal flow networks.</p>
              
              <div className="space-y-4">
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse"></div>
                  Goldman Sachs Private Capital
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  Morgan Stanley Capital Partners
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  JPMorgan Development Finance
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  Citi Ventures Strategic Capital
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl p-10 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 group hover:transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border-2 border-yellow-400">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-yellow-400 mb-6 group-hover:text-yellow-300 transition-colors">FinTech Intelligence</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">Manhattan's fintech corridor expertise connecting breakthrough companies with specialized financial technology institutional investors.</p>
              
              <div className="space-y-4">
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse"></div>
                  Digital banking platforms
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  Institutional crypto infrastructure
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  Regulatory technology (RegTech)
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  Capital markets infrastructure
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl shadow-2xl p-10 text-white backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 group hover:transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-bold text-yellow-400 mb-6 group-hover:text-yellow-300 transition-colors">Ultra-HNW Network</h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">Exclusive access to Manhattan's ultra-high-net-worth family offices and private wealth platforms managing $1.8T+ in institutional capital.</p>
              
              <div className="space-y-4">
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse"></div>
                  Single family offices ($5B+ AUM)
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  Multi-family office platforms
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  Private wealth management
                </div>
                <div className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  Sovereign wealth fund access
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Subway Map Visualization */}
          <div className="mt-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-10 backdrop-blur-sm border border-slate-700">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Manhattan Investment District Network</h3>
            <div className="subway-map-container relative h-64 bg-slate-900/50 rounded-2xl p-8">
              <div className="absolute inset-4 grid grid-cols-4 gap-4">
                <div className="investor-node bg-yellow-500/20 border border-yellow-400/40 rounded-lg p-3 flex items-center justify-center text-yellow-400 text-sm font-semibold hover:bg-yellow-500/30 transition-colors cursor-pointer">
                  Financial District
                </div>
                <div className="investor-node bg-blue-500/20 border border-blue-400/40 rounded-lg p-3 flex items-center justify-center text-blue-400 text-sm font-semibold hover:bg-blue-500/30 transition-colors cursor-pointer">
                  Midtown West
                </div>
                <div className="investor-node bg-green-500/20 border border-green-400/40 rounded-lg p-3 flex items-center justify-center text-green-400 text-sm font-semibold hover:bg-green-500/30 transition-colors cursor-pointer">
                  Upper East Side
                </div>
                <div className="investor-node bg-purple-500/20 border border-purple-400/40 rounded-lg p-3 flex items-center justify-center text-purple-400 text-sm font-semibold hover:bg-purple-500/30 transition-colors cursor-pointer">
                  SoHo Tech
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              NYC Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Recent successful capital introductions connecting New York companies with Manhattan-based investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$75M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">Fintech Series C</h3>
                  <p className="text-secondary-600">Manhattan-based digital banking platform</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Successfully introduced a digital banking startup to a consortium of NYC family offices and institutional investors, resulting in a $75M Series C round led by a prominent Wall Street firm.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Family Offices + PE Fund
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$120M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">Real Estate Tech</h3>
                  <p className="text-secondary-600">PropTech growth capital round</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Connected a commercial real estate technology company with specialized NYC real estate private equity funds, securing $120M in growth capital for market expansion.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Real Estate PE Funds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Contact CTA */}
      <section className="bg-service-gradient section-padding">
        <div className="container max-w-4xl">
          <div className="card-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Connect with NYC Investors?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Leverage our deep Wall Street relationships and Manhattan investor network to secure the capital your company needs to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="btn-accent"
              >
                Schedule NYC Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-6 rounded-3xl transition-all duration-200"
              >
                Contact Our NYC Team
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>Manhattan Office | Financial District | Wall Street Connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - New York",
          description: "Premier New York City capital introduction services connecting Manhattan companies with Wall Street investors, venture capital firms, and private equity partners.",
          url: "https://vommuli.com/locations/new-york",
          telephone: "+1-555-NYC-FUND",
          address: {
            streetAddress: "Financial District",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10004",
            addressCountry: "US"
          },
          geo: {
            latitude: "40.7074",
            longitude: "-74.0113"
          },
          areaServed: [
            "New York City",
            "Manhattan", 
            "Brooklyn",
            "Financial District",
            "Midtown",
            "Wall Street"
          ],
          serviceType: [
            "Venture Capital Introduction",
            "Private Equity Connections",
            "Investment Advisory",
            "Capital Raising",
            "Institutional Investor Access"
          ]
        }}
      />
    </div>
  );
}