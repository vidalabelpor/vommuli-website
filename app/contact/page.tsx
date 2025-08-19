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

// Professional Contact SVG Background Component
function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
        <defs>
          <linearGradient id="contactGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" />
            <stop offset="60%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(34, 197, 94)" />
          </linearGradient>
          <linearGradient id="contactGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
            <stop offset="60%" stopColor="rgb(34, 197, 94)" />
            <stop offset="100%" stopColor="rgb(101, 163, 13)" />
          </linearGradient>
          <radialGradient id="supportGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgb(20, 184, 166)" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
          </radialGradient>
        </defs>
        
        {/* Professional contact network lines */}
        <path 
          d="M0,500 L300,480 L600,440 L900,400 L1200,360" 
          fill="none" 
          stroke="url(#contactGradient1)" 
          strokeWidth="3"
          className="animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '4s' }}
        />
        <path 
          d="M0,550 L250,530 L500,490 L750,450 L1000,410 L1200,380" 
          fill="none" 
          stroke="url(#contactGradient2)" 
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '5s' }}
        />
        
        {/* Global connection nodes */}
        <circle cx="300" cy="200" r="35" fill="url(#supportGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="900" cy="180" r="25" fill="url(#supportGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating contact indicators */}
        <g className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <circle cx="200" cy="300" r="3" fill="rgb(20, 184, 166)" />
          <text x="210" y="305" fill="rgb(20, 184, 166)" fontSize="10" fontFamily="monospace">24h</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '1.5s' }}>
          <circle cx="600" cy="250" r="3" fill="rgb(34, 197, 94)" />
          <text x="610" y="255" fill="rgb(34, 197, 94)" fontSize="10" fontFamily="monospace">Global</text>
        </g>
        <g className="animate-bounce" style={{ animationDelay: '2.5s' }}>
          <circle cx="1000" cy="200" r="3" fill="rgb(16, 185, 129)" />
          <text x="1010" y="205" fill="rgb(16, 185, 129)" fontSize="10" fontFamily="monospace">Support</text>
        </g>
      </svg>
    </div>
  );
}

// Floating Card Component
function FloatingContactCard({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
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
  title: 'Contact Vommuli Ventures | Schedule Series A Funding Consultation',
  description: 'Contact our Series A funding experts to discuss your startup fundraising needs. Schedule a free investment readiness assessment and VC introduction consultation.',
  keywords: [
    'contact Series A funding experts',
    'schedule startup fundraising consultation',
    'Series A readiness assessment',
    'VC introduction inquiry',
    'startup funding consultation',
    'Series A advisory meeting',
    'pitch deck optimization contact',
    'venture capital advisory consultation',
    'investment readiness contact',
    'startup fundraising inquiry'
  ],
  openGraph: {
    title: 'Contact Vommuli Ventures | Schedule Series A Funding Consultation',
    description: 'Contact our Series A funding experts for startup advisory services and VC introduction consultation.',
    url: 'https://vommuli.com/contact',
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    fundingStage: '',
    message: '',
    privacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('success');
      setTimeout(() => setSubmissionStatus('idle'), 5000);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      <ContactBackground />
      
      {/* Professional Contact Environment Imagery */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Professional Contact Environment" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Floating Contact Cards */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <FloatingContactCard delay={0.5}>
          <div className="text-white/90 text-sm font-medium">Response Time</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={24} suffix="h" />
          </div>
        </FloatingContactCard>
      </div>
      
      <div className="absolute top-96 left-20 hidden lg:block">
        <FloatingContactCard delay={1}>
          <div className="text-white/90 text-sm font-medium">Global Offices</div>
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter end={6} suffix="+" />
          </div>
        </FloatingContactCard>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">🚀 Get Series A Ready</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Contact Our Series A
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                Funding Experts
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Schedule a free investment readiness assessment to discover how our proven Series A funding process can accelerate your startup's path to successful venture capital funding.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl border border-emerald-500/30">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm mb-6">
                    <span className="text-emerald-300 text-sm font-medium">📋 Investment Readiness Assessment</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Get Your Free Series A Readiness Assessment
                  </h2>
                  <p className="text-slate-300 text-lg">
                    Complete the form below to request a free consultation with our Series A funding specialists.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submissionStatus === 'success' && (
                    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h4 className="text-emerald-400 font-semibold">Thank you for your submission!</h4>
                          <p className="text-emerald-300 text-sm">We'll contact you within 24 hours to schedule your assessment.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Startup/Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your startup or company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fundingStage" className="block text-sm font-medium text-slate-300 mb-2">
                      Funding Stage *
                    </label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select funding stage</option>
                      <option value="series-a">Series A ($2M-$15M)</option>
                      <option value="pre-series-a">Pre-Series A (Seed+)</option>
                      <option value="series-b">Series B ($15M+)</option>
                      <option value="growth-capital">Growth Capital</option>
                      <option value="pitch-deck-only">Pitch Deck Optimization Only</option>
                      <option value="assessment-only">Investment Readiness Assessment Only</option>
                      <option value="other">Other - Please Specify</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Tell Us About Your Startup and Funding Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Please describe your startup, traction metrics, funding timeline, and Series A goals..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-emerald-600 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500 transition-all duration-300"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-slate-300">
                        I agree to the confidential handling of this information and consent to being contacted by Vommuli Ventures regarding Series A funding advisory services. *
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Get Free Assessment'
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-green-600/20"></div>
                <div className="relative p-8 border border-teal-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">📧</span>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-400">Direct Contact</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">General Inquiries</h4>
                      <p className="text-slate-300">info@vommuli.com</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Series A Funding Advisory</h4>
                      <p className="text-slate-300">funding@vommuli.com</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Pitch Deck Optimization</h4>
                      <p className="text-slate-300">pitchdeck@vommuli.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20"></div>
                <div className="relative p-8 border border-green-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">⏱️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-400">Response Time</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Initial Response</h4>
                      <p className="text-slate-300">Within 24 hours during business days</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Assessment Scheduling</h4>
                      <p className="text-slate-300">Within 48 hours of initial contact</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Readiness Report</h4>
                      <p className="text-slate-300">Within 3 business days of assessment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Global Office Display */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
                <div className="relative p-8 border border-emerald-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🌍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400">Global Presence</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        <AnimatedCounter end={6} suffix="+" />
                      </div>
                      <p className="text-slate-300 text-sm">Global Offices</p>
                    </div>
                    <div className="bg-slate-700/30 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        <AnimatedCounter end={15} suffix="+" />
                      </div>
                      <p className="text-slate-300 text-sm">Time Zones</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Markets</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Silicon Valley
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          New York
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Austin
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Miami
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Boston
                        </div>
                        <div className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                          Chicago
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Regional Coverage</h4>
                      <p className="text-slate-300 text-sm">United States • Canada • United Kingdom • European Union</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Meeting Formats</h4>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">In-Person</span>
                        <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">Video Conference</span>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Phone</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">❓ Frequently Asked</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Series A Funding FAQ
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What information should I prepare for our Series A assessment?</h3>
              <p className="text-slate-300">
                Please prepare: (1) Startup overview and business model, (2) Current traction metrics (revenue, users, growth rate), (3) Target funding amount and timeline, (4) Team background and experience, (5) Competitive landscape and differentiation. This helps us provide more targeted Series A readiness feedback during our discussion.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Is the investment readiness assessment confidential and free?</h3>
              <p className="text-slate-300">
                Yes, all initial assessments are strictly confidential and provided at no cost. We operate under professional confidentiality standards and will not share any information about your startup, metrics, or fundraising plans without explicit written consent. The assessment allows us to understand your readiness and determine if our Series A advisory services are a good fit.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What is the typical timeline for Series A funding advisory?</h3>
              <p className="text-slate-300">
                Series A advisory engagements typically span 4-8 weeks depending on your startup's readiness and market conditions. Phase 1 (Investment Readiness) takes 1-2 weeks, Phase 2 (VC Targeting) takes 1 week, Phase 3 (Warm Introductions) takes 2-4 weeks, and Phase 4 (Deal Support) takes 2-8 weeks. We provide weekly progress reports and maintain close communication throughout.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Do you work with startups at all stages and sectors?</h3>
              <p className="text-slate-300">
                We specialize in Series A-ready startups with validated product-market fit and growth traction. Our typical clients are raising $2M-$15M Series A rounds across SaaS, fintech, healthtech, climate tech, and AI/ML sectors. We evaluate each opportunity based on team strength, market opportunity, traction metrics, and Series A readiness. Pre-revenue or pre-seed startups should consider our pitch deck optimization services first.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}