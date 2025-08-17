import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vommuli Ventures | Expert Financial Capital Introduction Services',
  description: 'Learn about Vommuli Ventures\' expertise in connecting growth companies with institutional investors. Our team facilitates venture capital, private equity, and strategic capital introductions worldwide.',
  keywords: [
    'financial capital introduction experts',
    'institutional fundraising advisors',
    'venture capital introduction team',
    'private equity connections',
    'capital raising specialists',
    'investment banking professionals',
    'fundraising consultants',
    'institutional investor relations',
    'capital introduction success rate',
    'professional fundraising services'
  ],
  openGraph: {
    title: 'About Vommuli Ventures | Expert Financial Capital Introduction Services',
    description: 'Expert team connecting growth companies with institutional investors through specialized capital introduction services.',
    url: 'https://vommuli.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-8">
              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
              <span className="text-primary-800 text-sm font-medium">Institutional Capital Specialists</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 mb-8 leading-tight">
              Expert Financial Capital
              <span className="block text-gradient mt-2">
                Introduction Services
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-secondary-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connecting growth companies with institutional investors through proven expertise, extensive networks, and a track record of successful capital introductions across venture capital, private equity, and strategic funding rounds.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Expertise */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6">
                <span className="text-primary-800 text-sm font-medium">Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-8">
                Bridging Capital Gaps with
                <span className="block text-gradient">Institutional Expertise</span>
              </h2>
              
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                At Vommuli Ventures, we specialize in facilitating high-quality capital introductions between institutional investment managers and qualified investors. Our deep understanding of both sides of the capital equation enables us to create meaningful, long-term relationships that drive business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Institutional Focus</h3>
                    <p className="text-secondary-700">Exclusively serving institutional-quality investment managers and their capital raising needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-600 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <span className="text-secondary-900 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Proven Network</h3>
                    <p className="text-secondary-700">Extensive relationships with pension funds, endowments, family offices, and institutional allocators.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary-700 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">Success-Driven Process</h3>
                    <p className="text-secondary-700">Structured approach with clear milestones, reporting, and accountability throughout the introduction process.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-elevated">
                <h3 className="text-2xl font-bold text-secondary-900 mb-8">Our Track Record</h3>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-gradient mb-2">$2.8B+</div>
                    <p className="text-secondary-600 text-sm font-medium">Capital Introduced</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-gradient mb-2">150+</div>
                    <p className="text-secondary-600 text-sm font-medium">Successful Introductions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-gradient mb-2">67%</div>
                    <p className="text-secondary-600 text-sm font-medium">Conversion Rate</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-black text-gradient mb-2">12+</div>
                    <p className="text-secondary-600 text-sm font-medium">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="bg-gradient-secondary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 border border-secondary-200 mb-6">
              <span className="text-secondary-800 text-sm font-medium">Our Team</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Institutional Capital Introduction Experts
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Our team combines decades of institutional investment experience with deep capital markets expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Institutional Experience</h3>
              <p className="text-secondary-700 mb-4">Former investment professionals from leading pension funds, endowments, and family offices.</p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• 20+ years average experience</li>
                <li>• Series 7, 66 licenses</li>
                <li>• CFA, CAIA certifications</li>
              </ul>
            </div>
            
            <div className="card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-accent-700 mb-3">Global Network</h3>
              <p className="text-secondary-700 mb-4">Extensive relationships across North America, Europe, and Asia-Pacific regions.</p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• 500+ investor relationships</li>
                <li>• Multi-regional coverage</li>
                <li>• Cross-border expertise</li>
              </ul>
            </div>
            
            <div className="card group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-700 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Market Intelligence</h3>
              <p className="text-secondary-700 mb-4">Deep understanding of allocation trends, investor preferences, and market timing.</p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Real-time market insights</li>
                <li>• Investor preference mapping</li>
                <li>• Allocation trend analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Process */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 border border-accent-200 mb-6">
              <span className="text-accent-800 text-sm font-medium">Our Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
              Structured Capital Introduction Process
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Our proven methodology ensures efficient, high-quality introductions with clear accountability and measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-3">Assessment & Strategy</h3>
              <p className="text-secondary-700 text-sm">Comprehensive review of investment strategy, track record, and capital raising objectives.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-secondary-900 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-accent-700 mb-3">Investor Identification</h3>
              <p className="text-secondary-700 text-sm">Targeted identification of qualified institutional investors aligned with your strategy and terms.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-700 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-3">Introduction & Facilitation</h3>
              <p className="text-secondary-700 text-sm">Professional introductions with ongoing meeting facilitation and relationship management.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-700 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-3">Ongoing Support</h3>
              <p className="text-secondary-700 text-sm">Continued relationship support and additional introductions throughout the capital raising process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-accent section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card-brand">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8">
                  <span className="text-white text-sm font-medium">Ready to Connect?</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Start Your Capital Introduction Process
                </h2>
                <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Connect with our institutional capital introduction experts to discuss your fundraising objectives and explore how we can accelerate your capital raising success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/schedule-consultation" className="btn-secondary hover:scale-105 transition-transform duration-300">
                    Schedule Consultation
                  </a>
                  
                  <a href="/services" className="btn-ghost text-white border-white/30 hover:bg-white hover:text-secondary-900 flex items-center justify-center">
                    View Our Services
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-white/80 mt-8 text-lg">
                  Confidential consultation. Serving institutional investment managers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}