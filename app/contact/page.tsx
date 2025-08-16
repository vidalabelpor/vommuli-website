import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vommuli Ventures | Schedule Capital Introduction Consultation',
  description: 'Contact our expert financial capital introduction team to discuss your institutional fundraising needs. Schedule a confidential consultation for venture capital, private equity, and growth capital connections.',
  keywords: [
    'contact capital introduction services',
    'schedule funding consultation',
    'investor connection inquiry',
    'capital raising consultation',
    'institutional fundraising contact',
    'venture capital introduction meeting',
    'private equity connections contact',
    'growth capital advisory consultation',
    'investment advisory contact',
    'professional fundraising inquiry'
  ],
  openGraph: {
    title: 'Contact Vommuli Ventures | Schedule Capital Introduction Consultation',
    description: 'Contact our expert team for institutional capital introduction services and professional fundraising consultation.',
    url: 'https://vommuli.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzEwREM2MSIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">📞 Get Connected</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Contact Our Capital
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                Introduction Experts
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Schedule a confidential consultation to discuss your institutional fundraising objectives and discover how our proven capital introduction process can accelerate your access to qualified investors.
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
                    <span className="text-emerald-300 text-sm font-medium">📋 Consultation Request</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Schedule Your Capital Introduction Consultation
                  </h2>
                  <p className="text-slate-300 text-lg">
                    Complete the form below to request a confidential consultation with our capital introduction specialists.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company/Fund Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your company or fund name"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fundingType" className="block text-sm font-medium text-slate-300 mb-2">
                      Funding Type of Interest *
                    </label>
                    <select
                      id="fundingType"
                      name="fundingType"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select funding type</option>
                      <option value="venture-capital">Venture Capital Introduction</option>
                      <option value="private-equity">Private Equity Fundraising</option>
                      <option value="growth-capital">Growth Capital Advisory</option>
                      <option value="ai-tech">AI & Tech Funding</option>
                      <option value="healthcare">Healthcare & MedTech Funding</option>
                      <option value="infrastructure">Digital Infrastructure Funding</option>
                      <option value="ma-advisory">M&A Advisory</option>
                      <option value="other">Other - Please Specify</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Tell Us About Your Capital Raising Objectives *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Please describe your funding needs, timeline, and any specific investor preferences..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-emerald-600 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-slate-300">
                        I agree to the confidential handling of this information and consent to being contacted by Vommuli Ventures regarding capital introduction services. *
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Request Consultation</span>
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
                      <h4 className="font-semibold text-white mb-2">Capital Introduction Services</h4>
                      <p className="text-slate-300">capital@vommuli.com</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Partnership Opportunities</h4>
                      <p className="text-slate-300">partnerships@vommuli.com</p>
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
                      <h4 className="font-semibold text-white mb-2">Consultation Scheduling</h4>
                      <p className="text-slate-300">Within 48 hours of initial contact</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Proposal Delivery</h4>
                      <p className="text-slate-300">Within 5 business days of consultation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Information */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20"></div>
                <div className="relative p-8 border border-emerald-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-xl">🏢</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400">Global Presence</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Primary Markets</h4>
                      <p className="text-slate-300">New York • San Francisco • London</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Service Coverage</h4>
                      <p className="text-slate-300">North America • Europe • Asia-Pacific</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Meeting Options</h4>
                      <p className="text-slate-300">In-person • Video Conference • Phone</p>
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
              Contact & Consultation FAQ
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What information should I prepare for our initial consultation?</h3>
              <p className="text-slate-300">
                Please prepare: (1) Overview of your investment strategy and track record, (2) Current fund size and target raise amount, (3) Preferred investor types and geographic focus, (4) Timeline for capital raising, (5) Any existing investor relationships or constraints. This information helps us provide more targeted guidance during our discussion.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Is the initial consultation confidential and free of charge?</h3>
              <p className="text-slate-300">
                Yes, all initial consultations are strictly confidential and provided at no cost. We operate under professional confidentiality standards and will not share any information about your fund, strategy, or capital raising plans without explicit written consent. The consultation allows us to understand your needs and determine if our services are a good fit.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">What is the typical engagement timeline for capital introduction services?</h3>
              <p className="text-slate-300">
                Capital introduction engagements typically span 6-18 months depending on fund size, strategy complexity, and market conditions. Phase 1 (Strategy & Planning) takes 2-4 weeks, Phase 2 (Investor Identification) takes 4-8 weeks, and Phase 3 (Active Introductions) is ongoing throughout the engagement. We provide regular progress reports and maintain close communication throughout.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Do you work with funds of all sizes and strategies?</h3>
              <p className="text-slate-300">
                We work with institutional-quality investment managers across various strategies including hedge funds, private equity, venture capital, real estate, and alternative investments. Our typical client range is $50M+ AUM for established managers or emerging managers with strong institutional backing. We evaluate each opportunity based on strategy quality, team experience, and institutional viability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}