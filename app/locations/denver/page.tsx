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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzEwQjk4MSIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
              <span className="text-green-300 text-sm font-medium">🏔️ Denver, Colorado Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Denver, Colorado
              <span className="block text-gradient">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with the Rocky Mountain region's thriving venture capital ecosystem and sustainability-focused investors. Expert capital introduction services in America's outdoor innovation hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">VC/PE Firms</h3>
              <p className="text-slate-400">Active venture capital and private equity firms in the Denver metro area</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">$2.8B</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Annual Investment</h3>
              <p className="text-slate-400">Total venture capital deployed in Colorado startups annually</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">#3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cleantech Hub</h3>
              <p className="text-slate-400">Third-largest cleantech ecosystem in the United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Market Overview */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Mile High Investment Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Denver has emerged as a leading destination for innovative companies and impact investors, driven by outdoor lifestyle, sustainability focus, and strategic location.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Denver is Rising</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Sustainability Leadership</h4>
                    <p className="text-slate-400">Nation's largest concentration of renewable energy companies and climate-focused startups driving innovation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Outdoor Innovation Hub</h4>
                    <p className="text-slate-400">Home to 400+ outdoor industry companies, creating unique opportunities in adventure tech and sustainable products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Aerospace & Defense</h4>
                    <p className="text-slate-400">Major aerospace hub with Lockheed Martin, Ball Aerospace, and emerging space technology companies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Denver Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Venture Capital Firms</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Private Equity Firms</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Active Startups</span>
                  <span className="text-white font-semibold">2,200+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Annual Deal Volume</span>
                  <span className="text-white font-semibold">$2.8B+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Average Deal Size</span>
                  <span className="text-white font-semibold">$8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver-Specific Services */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Rocky Mountain Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized services tailored to Denver's unique focus on sustainability, outdoor innovation, and impact investing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-green-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cleantech & Energy</h3>
              <p className="text-slate-300 mb-6">Connect with Denver's leading renewable energy and cleantech investors, leveraging Colorado's commitment to sustainability.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Access Venture Partners
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Foundry Group
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Energize Ventures
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Outdoor Innovation</h3>
              <p className="text-slate-300 mb-6">Specialized expertise in outdoor recreation technology, adventure sports, and lifestyle brands unique to Colorado's ecosystem.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Adventure tech platforms
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Sustainable outdoor gear
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Recreation technology
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-teal-800/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aerospace & Defense</h3>
              <p className="text-slate-300 mb-6">Access to Colorado's aerospace corridor investors and defense technology specialists, including space industry expertise.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  Space technology startups
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  Defense contractors
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                  Satellite and communications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Success Stories */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Denver Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Denver companies with Colorado and national investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$18M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">CleanTech Series A</h3>
                  <p className="text-slate-400">Denver renewable energy startup</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Successfully connected a solar technology company with specialized Colorado cleantech investors and impact funds, resulting in an $18M Series A for manufacturing expansion.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Cleantech VCs + Impact Funds
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$12M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Outdoor Tech Growth</h3>
                  <p className="text-slate-400">Adventure technology platform</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Introduced an outdoor recreation technology company to Colorado lifestyle investors and national outdoor industry funds, securing $12M for product development.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Outdoor Industry VCs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denver Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 lg:p-12 border border-green-500/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale in the Mile High City?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with Denver's sustainability-focused investor network and secure the capital needed to grow your Colorado-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Denver Consultation
              </a>
              <a 
                href="/contact" 
                className="border border-green-500 text-green-400 hover:bg-green-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Our Denver Team
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Mile High City | Rocky Mountain Region | Cleantech Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="localbusiness" 
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