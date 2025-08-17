import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Miami Capital Introduction Services | Florida Venture Capital & Private Equity | Vommuli Ventures',
  description: 'Premier Miami capital introduction services connecting South Florida companies with Latin America gateway investors, venture capital firms, and private equity partners. Expert Miami fundraising advisory.',
  keywords: [
    'Miami venture capital',
    'Florida startup funding',
    'Miami private equity',
    'South Florida investors',
    'Miami capital introduction',
    'Florida investment advisory',
    'Miami Series A funding',
    'Brickell venture capital',
    'Miami growth capital',
    'Florida venture capital firms',
    'Miami startup accelerators',
    'South Florida private equity connections',
    'Miami fintech funding',
    'Florida angel investors',
    'Miami capital raising consultants',
    'Latin America venture capital',
    'Miami real estate private equity',
    'Florida healthcare venture capital',
    'Miami cryptocurrency funding',
    'South Florida family offices',
    'Miami international investors',
    'Florida tourism venture capital',
    'Miami shipping logistics funding',
    'South Florida impact investing',
    'Miami blockchain funding'
  ],
  openGraph: {
    title: 'Miami Capital Introduction Services | South Florida VC & PE',
    description: 'Connect with top Miami investors and South Florida venture capital firms. Expert capital introduction services in the Latin America gateway.',
    url: 'https://vommuli.com/locations/miami',
  },
};

export default function MiamiLocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzA4OTFCMiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="text-cyan-300 text-sm font-medium">🌴 Miami, Florida Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Miami, Florida
              <span className="block text-gradient">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with South Florida's dynamic venture capital ecosystem and Latin America gateway investors. Expert capital introduction services in America's international business hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">60+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">VC/PE Firms</h3>
              <p className="text-slate-400">Active venture capital and private equity firms in the Miami metro area</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">$4.2B</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Annual Investment</h3>
              <p className="text-slate-400">Total venture capital deployed in South Florida startups annually</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">#1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Latin America Gateway</h3>
              <p className="text-slate-400">Premier entry point for Latin American investment and expansion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Market Overview */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Magic City Investment Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Miami has transformed into a global financial hub, attracting international investors, family offices, and innovative startups from across the Americas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Miami's Investment Boom</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Financial Migration</h4>
                    <p className="text-slate-400">Major hedge funds, family offices, and PE firms relocating from NYC, creating unprecedented capital concentration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">LatAm Investment Hub</h4>
                    <p className="text-slate-400">Strategic gateway for $50B+ annual Latin American investment flows and cross-border deal making.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cryptocurrency Capital</h4>
                    <p className="text-slate-400">Leading crypto and blockchain innovation center with major exchanges and Web3 companies establishing headquarters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Miami Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Venture Capital Firms</span>
                  <span className="text-white font-semibold">35+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Private Equity Firms</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Family Offices</span>
                  <span className="text-white font-semibold">80+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Annual Deal Volume</span>
                  <span className="text-white font-semibold">$4.2B+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Average Deal Size</span>
                  <span className="text-white font-semibold">$15M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami-Specific Services */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              South Florida Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized services tailored to Miami's international business environment and Latin American connectivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fintech & Crypto</h3>
              <p className="text-slate-300 mb-6">Deep expertise in Miami's booming fintech and cryptocurrency ecosystem, connecting with specialized blockchain and digital asset investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Blockchain technology
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Digital payment platforms
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Cryptocurrency exchanges
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Latin America Gateway</h3>
              <p className="text-slate-300 mb-6">Unique access to Latin American investors and cross-border investment opportunities, leveraging Miami's position as the LatAm business capital.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Brazilian family offices
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Mexican corporate ventures
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Colombian growth funds
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real Estate & Hospitality</h3>
              <p className="text-slate-300 mb-6">Specialized expertise in Miami's luxury real estate and hospitality sectors, connecting with property development and tourism investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Luxury real estate development
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Hospitality technology
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Tourism and travel tech
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Success Stories */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Miami Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Miami companies with South Florida and international investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$35M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">Fintech Series B</h3>
                  <p className="text-slate-400">Miami-based payment platform</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Successfully connected a Latin America-focused payment platform with Miami family offices and international fintech investors, resulting in a $35M Series B round.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Family Offices + International VCs
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$22M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">PropTech Growth</h3>
                  <p className="text-slate-400">Real estate technology startup</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Introduced a luxury real estate technology company to specialized Miami real estate investors and Brazilian family offices, securing $22M in growth capital.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Real Estate Funds + LatAm Investors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 lg:p-12 border border-cyan-500/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Tap into Miami's Global Network?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with South Florida's international investor ecosystem and Latin American capital for your Miami-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Miami Consultation
              </a>
              <a 
                href="/contact" 
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Our Miami Team
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Brickell Financial District | South Beach | Latin America Gateway</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="localbusiness" 
        data={{
          name: "Vommuli Ventures - Miami",
          description: "Premier Miami capital introduction services connecting South Florida companies with Latin America gateway investors, venture capital firms, and private equity partners.",
          url: "https://vommuli.com/locations/miami",
          telephone: "+1-305-MIA-FUND",
          address: {
            streetAddress: "Brickell Financial District",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33131",
            addressCountry: "US"
          },
          geo: {
            latitude: "25.7617",
            longitude: "-80.1918"
          },
          areaServed: [
            "Miami",
            "South Beach", 
            "Brickell",
            "Coral Gables",
            "Fort Lauderdale",
            "South Florida"
          ],
          serviceType: [
            "Venture Capital Introduction",
            "Private Equity Connections",
            "Latin America Investment",
            "Fintech Funding",
            "International Capital Access"
          ]
        }}
      />
    </div>
  );
}