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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-8">
              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
              <span className="text-primary-800 text-sm font-medium">Get Connected</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-8 leading-tight">
              Contact Our Capital
              <span className="block text-gradient mt-2">
                Introduction Experts
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-secondary-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Schedule a confidential consultation to discuss your institutional fundraising objectives and discover how our proven capital introduction process can accelerate your access to qualified investors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="card-elevated">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6">
                    <span className="text-primary-800 text-sm font-medium">Consultation Request</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
                    Schedule Your Capital Introduction Consultation
                  </h2>
                  <p className="text-secondary-700 text-lg">
                    Complete the form below to request a confidential consultation with our capital introduction specialists.
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-secondary-900 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="input-field"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-secondary-900 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="input-field"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-900 mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary-900 mb-2">
                      Company/Fund Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="input-field"
                      placeholder="Your company or fund name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fundingType" className="block text-sm font-medium text-secondary-900 mb-2">
                      Funding Type of Interest *
                    </label>
                    <select
                      id="fundingType"
                      name="fundingType"
                      required
                      className="input-field"
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
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-900 mb-2">
                      Tell Us About Your Capital Raising Objectives *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="input-field resize-none"
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
                        className="w-4 h-4 text-primary-600 bg-white border-neutral-300 rounded focus:ring-primary-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="text-secondary-700">
                        I agree to the confidential handling of this information and consent to being contacted by Vommuli Ventures regarding capital introduction services. *
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-3xl flex items-center justify-center mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900">Direct Contact</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">General Inquiries</h4>
                    <p className="text-secondary-700">info@vommuli.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Capital Introduction Services</h4>
                    <p className="text-secondary-700">capital@vommuli.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Partnership Opportunities</h4>
                    <p className="text-secondary-700">partnerships@vommuli.com</p>
                  </div>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-600 rounded-3xl flex items-center justify-center mr-4">
                    <span className="text-xl">⏱️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-accent-700">Response Time</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Initial Response</h4>
                    <p className="text-secondary-700">Within 24 hours during business days</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Consultation Scheduling</h4>
                    <p className="text-secondary-700">Within 48 hours of initial contact</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Proposal Delivery</h4>
                    <p className="text-secondary-700">Within 5 business days of consultation</p>
                  </div>
                </div>
              </div>
              
              {/* Office Information */}
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-700 rounded-3xl flex items-center justify-center mr-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900">Global Presence</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Primary Markets</h4>
                    <p className="text-secondary-700">New York • San Francisco • London</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Service Coverage</h4>
                    <p className="text-secondary-700">North America • Europe • Asia-Pacific</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Meeting Options</h4>
                    <p className="text-secondary-700">In-person • Video Conference • Phone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-neutral section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-6">
                <span className="text-neutral-800 text-sm font-medium">Frequently Asked</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
                Contact & Consultation FAQ
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="faq-item">
                <div className="faq-header">
                  <h3 className="text-xl font-bold text-primary-900">What information should I prepare for our initial consultation?</h3>
                </div>
                <div className="faq-content">
                  <p>
                    Please prepare: (1) Overview of your investment strategy and track record, (2) Current fund size and target raise amount, (3) Preferred investor types and geographic focus, (4) Timeline for capital raising, (5) Any existing investor relationships or constraints. This information helps us provide more targeted guidance during our discussion.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3 className="text-xl font-bold text-primary-900">Is the initial consultation confidential and free of charge?</h3>
                </div>
                <div className="faq-content">
                  <p>
                    Yes, all initial consultations are strictly confidential and provided at no cost. We operate under professional confidentiality standards and will not share any information about your fund, strategy, or capital raising plans without explicit written consent. The consultation allows us to understand your needs and determine if our services are a good fit.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3 className="text-xl font-bold text-primary-900">What is the typical engagement timeline for capital introduction services?</h3>
                </div>
                <div className="faq-content">
                  <p>
                    Capital introduction engagements typically span 6-18 months depending on fund size, strategy complexity, and market conditions. Phase 1 (Strategy & Planning) takes 2-4 weeks, Phase 2 (Investor Identification) takes 4-8 weeks, and Phase 3 (Active Introductions) is ongoing throughout the engagement. We provide regular progress reports and maintain close communication throughout.
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-header">
                  <h3 className="text-xl font-bold text-primary-900">Do you work with funds of all sizes and strategies?</h3>
                </div>
                <div className="faq-content">
                  <p>
                    We work with institutional-quality investment managers across various strategies including hedge funds, private equity, venture capital, real estate, and alternative investments. Our typical client range is $50M+ AUM for established managers or emerging managers with strong institutional backing. We evaluate each opportunity based on strategy quality, team experience, and institutional viability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}