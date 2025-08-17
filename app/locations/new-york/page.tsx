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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzNDE1NSIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <span className="text-blue-300 text-sm font-medium">🏙️ New York City Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              New York City
              <span className="block text-gradient">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with Manhattan's elite venture capital firms and Wall Street private equity partners. Expert capital introduction services in the heart of the global financial capital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">600+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">VC/PE Firms</h3>
              <p className="text-slate-400">Active venture capital and private equity firms in the NYC metro area</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">$2.1T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assets Under Management</h3>
              <p className="text-slate-400">Total AUM managed by NYC-based investment firms</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">#1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Financial Hub</h3>
              <p className="text-slate-400">World's largest concentration of capital and investment expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Market Overview */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              NYC Investment Landscape
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              New York City remains the global epicenter of finance, housing the world's largest concentration of institutional investors, family offices, and investment firms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Wall Street's Investment Ecosystem</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Venture Capital Hub</h4>
                    <p className="text-slate-400">Home to premier VC firms like Union Square Ventures, Bessemer, and General Atlantic, funding the next generation of startups.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Private Equity Capital</h4>
                    <p className="text-slate-400">Global headquarters for KKR, Blackstone, Apollo, and other mega-funds managing trillions in institutional capital.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Family Office Network</h4>
                    <p className="text-slate-400">Largest concentration of ultra-high-net-worth family offices seeking direct investment opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">NYC Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Venture Capital Firms</span>
                  <span className="text-white font-semibold">200+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Private Equity Firms</span>
                  <span className="text-white font-semibold">400+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Family Offices</span>
                  <span className="text-white font-semibold">150+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Annual Deal Volume</span>
                  <span className="text-white font-semibold">$180B+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Average Deal Size</span>
                  <span className="text-white font-semibold">$45M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC-Specific Services */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Manhattan Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized services tailored to New York City's unique investment ecosystem and regulatory environment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Wall Street Connections</h3>
              <p className="text-slate-300 mb-6">Direct access to tier-1 investment banks, bulge bracket firms, and institutional investors in the Financial District.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Goldman Sachs Private Wealth
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Morgan Stanley Capital Partners
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  JPMorgan Strategic Investments
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech Specialization</h3>
              <p className="text-slate-300 mb-6">Deep expertise in New York's thriving fintech ecosystem, connecting companies with specialized financial technology investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Digital banking platforms
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Cryptocurrency exchanges
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Regulatory technology (RegTech)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Family Office Network</h3>
              <p className="text-slate-300 mb-6">Exclusive access to Manhattan's ultra-high-net-worth family offices seeking direct investment opportunities.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Single family offices ($1B+ AUM)
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Multi-family office platforms
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Private wealth management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Success Stories */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              NYC Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recent successful capital introductions connecting New York companies with Manhattan-based investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$75M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Fintech Series C</h3>
                  <p className="text-slate-400">Manhattan-based digital banking platform</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Successfully introduced a digital banking startup to a consortium of NYC family offices and institutional investors, resulting in a $75M Series C round led by a prominent Wall Street firm.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Family Offices + PE Fund
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$120M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Real Estate Tech</h3>
                  <p className="text-slate-400">PropTech growth capital round</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Connected a commercial real estate technology company with specialized NYC real estate private equity funds, securing $120M in growth capital for market expansion.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Real Estate PE Funds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NYC Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 lg:p-12 border border-blue-500/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Connect with NYC Investors?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Leverage our deep Wall Street relationships and Manhattan investor network to secure the capital your company needs to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule NYC Consultation
              </a>
              <a 
                href="/contact" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Our NYC Team
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Manhattan Office | Financial District | Wall Street Connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="localbusiness" 
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