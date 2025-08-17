import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Denver Capital Introduction Services | Colorado Venture Capital & Private Equity | Vommuli Ventures',
  description: 'Premier Denver capital introduction services connecting Colorado companies with Rocky Mountain investors, venture capital firms, and private equity partners. Expert Denver fundraising advisory.',
  keywords: [
    'Denver venture capital',
    'Colorado startup funding',
    'Denver private equity',
    'Rocky Mountain investors',
    'Denver capital introduction',
    'Colorado investment advisory',
    'Denver Series A funding',
    'Colorado Springs venture capital',
    'Denver growth capital',
    'Colorado venture capital firms',
    'Denver startup accelerators',
    'Colorado private equity connections',
    'Denver tech funding',
    'Colorado angel investors',
    'Denver capital raising consultants',
    'Rocky Mountain venture capital',
    'Denver cleantech funding',
    'Colorado energy venture capital',
    'Denver biotech investors',
    'Colorado real estate private equity',
    'Denver cryptocurrency funding',
    'Colorado healthcare venture capital',
    'Denver aerospace funding',
    'Colorado outdoor industry investors',
    'Denver cannabis investment'
  ],
  openGraph: {
    title: 'Denver Capital Introduction Services | Colorado VC & PE',
    description: 'Connect with top Denver investors and Colorado venture capital firms. Expert capital introduction services in the Mile High City.',
    url: 'https://vommuli.com/locations/denver',
  },
};

export default function DenverLocationPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🏔️ Denver, Colorado Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Denver, Colorado
              <span className="block text-gradient-accent">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with the Rocky Mountain region's thriving venture capital ecosystem and sustainability-focused investors. Expert capital introduction services in America's outdoor innovation hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">50+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">VC/PE Firms</h3>
              <p className="text-white/80">Active venture capital and private equity firms in the Denver metro area</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$2.8B</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Annual Investment</h3>
              <p className="text-white/80">Total venture capital deployed in Colorado startups annually</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">#3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Cleantech Hub</h3>
              <p className="text-white/80">Third-largest cleantech ecosystem in the United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Market Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Mile High Investment Ecosystem
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Denver has emerged as a leading destination for innovative companies and impact investors, driven by outdoor lifestyle, sustainability focus, and strategic location.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-8">Why Denver is Rising</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Sustainability Leadership</h4>
                    <p className="text-secondary-700 leading-relaxed">Nation's largest concentration of renewable energy companies and climate-focused startups driving innovation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Outdoor Innovation Hub</h4>
                    <p className="text-secondary-700 leading-relaxed">Home to 400+ outdoor industry companies, creating unique opportunities in adventure tech and sustainable products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Aerospace & Defense</h4>
                    <p className="text-secondary-700 leading-relaxed">Major aerospace hub with Lockheed Martin, Ball Aerospace, and emerging space technology companies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">Denver Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Venture Capital Firms</span>
                  <span className="text-primary-900 font-bold text-lg">25+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Private Equity Firms</span>
                  <span className="text-primary-900 font-bold text-lg">25+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Active Startups</span>
                  <span className="text-primary-900 font-bold text-lg">2,200+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Annual Deal Volume</span>
                  <span className="text-primary-900 font-bold text-lg">$2.8B+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-secondary-700 font-medium">Average Deal Size</span>
                  <span className="text-primary-900 font-bold text-lg">$8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver-Specific Services */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Rocky Mountain Capital Introduction Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized services tailored to Denver's unique focus on sustainability, outdoor innovation, and impact investing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Cleantech & Energy</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Connect with Denver's leading renewable energy and cleantech investors, leveraging Colorado's commitment to sustainability.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Access Venture Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Foundry Group
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Energize Ventures
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Outdoor Innovation</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Specialized expertise in outdoor recreation technology, adventure sports, and lifestyle brands unique to Colorado's ecosystem.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Adventure tech platforms
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Sustainable outdoor gear
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Recreation technology
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Aerospace & Defense</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Access to Colorado's aerospace corridor investors and defense technology specialists, including space industry expertise.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Space technology startups
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Defense contractors
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Satellite and communications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Denver Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Denver companies with Colorado and national investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$18M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">CleanTech Series A</h3>
                  <p className="text-secondary-600">Denver renewable energy startup</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Successfully connected a solar technology company with specialized Colorado cleantech investors and impact funds, resulting in an $18M Series A for manufacturing expansion.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Cleantech VCs + Impact Funds
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$12M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">Outdoor Tech Growth</h3>
                  <p className="text-secondary-600">Adventure technology platform</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Introduced an outdoor recreation technology company to Colorado lifestyle investors and national outdoor industry funds, securing $12M for product development.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Outdoor Industry VCs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Contact CTA */}
      <section className="bg-service-gradient section-padding">
        <div className="container max-w-4xl">
          <div className="card-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale in the Mile High City?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with Denver's sustainability-focused investor network and secure the capital needed to grow your Colorado-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="btn-accent"
              >
                Schedule Denver Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-6 rounded-3xl transition-all duration-200"
              >
                Contact Our Denver Team
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>Mile High City | Rocky Mountain Region | Cleantech Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Denver",
          description: "Premier Denver capital introduction services connecting Colorado companies with Rocky Mountain investors, venture capital firms, and private equity partners focusing on cleantech and outdoor innovation.",
          url: "https://vommuli.com/locations/denver",
          telephone: "+1-303-DEN-FUND",
          address: {
            streetAddress: "Downtown Denver",
            addressLocality: "Denver",
            addressRegion: "CO",
            postalCode: "80202",
            addressCountry: "US"
          },
          geo: {
            latitude: "39.7392",
            longitude: "-104.9903"
          },
          areaServed: [
            "Denver",
            "Boulder", 
            "Fort Collins",
            "Colorado Springs",
            "Lakewood",
            "Rocky Mountain Region"
          ],
          serviceType: [
            "Venture Capital Introduction",
            "Private Equity Connections",
            "Cleantech Funding",
            "Outdoor Industry Investment",
            "Aerospace Venture Capital"
          ]
        }}
      />
    </div>
  );
}