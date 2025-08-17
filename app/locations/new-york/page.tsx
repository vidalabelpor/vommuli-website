import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'New York City Capital Introduction Services | Manhattan Venture Capital & Private Equity | Vommuli Ventures',
  description: 'Premier New York City capital introduction services connecting Manhattan-based companies with Wall Street investors, venture capital firms, and private equity partners. Expert NYC fundraising advisory.',
  keywords: [
    'NYC capital introduction',
    'Manhattan venture capital',
    'New York private equity',
    'Wall Street investors',
    'NYC startup funding',
    'Manhattan investment advisory',
    'Financial District capital raising',
    'New York growth capital',
    'NYC Series A funding',
    'Manhattan private equity firms',
    'New York venture capital introduction',
    'Wall Street private equity connections',
    'NYC institutional investors',
    'Manhattan angel investors',
    'New York capital raising consultants',
    'Financial District venture capital',
    'NYC investment banking services',
    'Manhattan startup accelerators',
    'New York fintech funding',
    'Wall Street capital advisory',
    'NYC biotech venture capital',
    'Manhattan real estate private equity',
    'New York hedge fund introductions',
    'Financial District growth equity',
    'NYC corporate venture capital'
  ],
  openGraph: {
    title: 'New York City Capital Introduction Services | Manhattan VC & PE',
    description: 'Connect with top Wall Street investors and Manhattan venture capital firms. Expert NYC capital introduction services for growth companies.',
    url: 'https://vommuli.com/locations/new-york',
  },
};

export default function NewYorkLocationPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🏙️ New York City Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              New York City
              <span className="block text-gradient-accent">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with Manhattan's elite venture capital firms and Wall Street private equity partners. Expert capital introduction services in the heart of the global financial capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">600+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">VC/PE Firms</h3>
              <p className="text-white/80">Active venture capital and private equity firms in the NYC metro area</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$2.1T</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Assets Under Management</h3>
              <p className="text-white/80">Total AUM managed by NYC-based investment firms</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">#1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Global Financial Hub</h3>
              <p className="text-white/80">World's largest concentration of capital and investment expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Market Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              NYC Investment Landscape
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              New York City remains the global epicenter of finance, housing the world's largest concentration of institutional investors, family offices, and investment firms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-8">Wall Street's Investment Ecosystem</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Venture Capital Hub</h4>
                    <p className="text-secondary-700 leading-relaxed">Home to premier VC firms like Union Square Ventures, Bessemer, and General Atlantic, funding the next generation of startups.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Private Equity Capital</h4>
                    <p className="text-secondary-700 leading-relaxed">Global headquarters for KKR, Blackstone, Apollo, and other mega-funds managing trillions in institutional capital.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Family Office Network</h4>
                    <p className="text-secondary-700 leading-relaxed">Largest concentration of ultra-high-net-worth family offices seeking direct investment opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">NYC Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Venture Capital Firms</span>
                  <span className="text-primary-900 font-bold text-lg">200+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Private Equity Firms</span>
                  <span className="text-primary-900 font-bold text-lg">400+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Family Offices</span>
                  <span className="text-primary-900 font-bold text-lg">150+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Annual Deal Volume</span>
                  <span className="text-primary-900 font-bold text-lg">$180B+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-secondary-700 font-medium">Average Deal Size</span>
                  <span className="text-primary-900 font-bold text-lg">$45M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC-Specific Services */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Manhattan Capital Introduction Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized services tailored to New York City's unique investment ecosystem and regulatory environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Wall Street Connections</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Direct access to tier-1 investment banks, bulge bracket firms, and institutional investors in the Financial District.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Goldman Sachs Private Wealth
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Morgan Stanley Capital Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  JPMorgan Strategic Investments
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Fintech Specialization</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Deep expertise in New York's thriving fintech ecosystem, connecting companies with specialized financial technology investors.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Digital banking platforms
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Cryptocurrency exchanges
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Regulatory technology (RegTech)
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Family Office Network</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Exclusive access to Manhattan's ultra-high-net-worth family offices seeking direct investment opportunities.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Single family offices ($1B+ AUM)
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Multi-family office platforms
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Private wealth management
                </li>
              </ul>
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