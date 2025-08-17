import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Austin Capital Introduction Services | Texas Venture Capital & Private Equity | Vommuli Ventures',
  description: 'Premier Austin capital introduction services connecting Silicon Hills startups with Texas investors, venture capital firms, and private equity partners. Expert Austin fundraising advisory.',
  keywords: [
    'Austin venture capital',
    'Texas startup funding',
    'Austin private equity',
    'Silicon Hills investors',
    'Austin capital introduction',
    'Texas investment advisory',
    'Austin Series A funding',
    'South by Southwest investors',
    'Austin growth capital',
    'Texas venture capital firms',
    'Austin startup accelerators',
    'Texas private equity connections',
    'Austin tech funding',
    'Texas angel investors',
    'Austin capital raising consultants',
    'Silicon Hills venture capital',
    'Austin fintech funding',
    'Texas energy venture capital',
    'Austin biotech investors',
    'Texas real estate private equity',
    'Austin cryptocurrency funding',
    'Texas healthcare venture capital',
    'Austin AI funding',
    'Texas cleantech investors',
    'Austin SaaS funding'
  ],
  openGraph: {
    title: 'Austin Capital Introduction Services | Texas VC & PE',
    description: 'Connect with top Austin investors and Texas venture capital firms. Expert capital introduction services in Silicon Hills tech hub.',
    url: 'https://vommuli.com/locations/austin',
  },
};

export default function AustinLocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI0Y5NzMxNiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-300 text-sm font-medium">🌆 Austin, Texas Location</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Austin, Texas
              <span className="block text-gradient">Capital Introduction</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Connect with Silicon Hills' dynamic venture capital ecosystem and Texas growth investors. Expert capital introduction services in America's fastest-growing tech hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">75+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">VC/PE Firms</h3>
              <p className="text-slate-400">Active venture capital and private equity firms in the Austin metro area</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">$8.5B</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Annual Investment</h3>
              <p className="text-slate-400">Total venture capital deployed in Austin startups annually</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">#2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Hub Ranking</h3>
              <p className="text-slate-400">Second-largest tech hub in Texas, fastest-growing in the nation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Market Overview */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Silicon Hills Investment Ecosystem
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Austin has emerged as one of America's premier tech hubs, attracting major corporations, innovative startups, and sophisticated investors from across the globe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Austin is Booming</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Tech Giant Migration</h4>
                    <p className="text-slate-400">Tesla, Oracle, Apple, and Google have established major operations, creating a massive talent and capital influx.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">SXSW Innovation Platform</h4>
                    <p className="text-slate-400">Annual convergence of 400,000+ attendees creates unparalleled networking and deal-making opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">University of Texas Ecosystem</h4>
                    <p className="text-slate-400">Leading research university with strong entrepreneurship programs and technology transfer initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Austin Market Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Venture Capital Firms</span>
                  <span className="text-white font-semibold">45+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Private Equity Firms</span>
                  <span className="text-white font-semibold">30+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Active Startups</span>
                  <span className="text-white font-semibold">3,500+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-600">
                  <span className="text-slate-300">Annual Deal Volume</span>
                  <span className="text-white font-semibold">$8.5B+</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-300">Average Deal Size</span>
                  <span className="text-white font-semibold">$12M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin-Specific Services */}
      <section className="relative py-24 px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Austin Capital Introduction Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized services tailored to Austin's unique tech ecosystem and emerging market dynamics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-orange-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech Startup Funding</h3>
              <p className="text-slate-300 mb-6">Direct connections to Austin's thriving VC ecosystem, including local funds and Silicon Valley firms with Austin presence.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Live Oak Venture Partners
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  ATX Venture Partners
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  S3 Ventures
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy Innovation</h3>
              <p className="text-slate-300 mb-6">Specialized expertise in Austin's growing cleantech and energy innovation sector, connecting with Texas energy investors.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Solar and renewable energy
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Energy storage solutions
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Smart grid technology
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SXSW Network</h3>
              <p className="text-slate-300 mb-6">Leverage our extensive South by Southwest connections to access investors, mentors, and strategic partners during and beyond the annual festival.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Interactive technology showcase
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Music industry innovation
                </li>
                <li className="flex items-center text-slate-400">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Film and media technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Success Stories */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Austin Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Austin companies with local and national investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$25M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">SaaS Series B</h3>
                  <p className="text-slate-400">Austin enterprise software company</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Connected an Austin-based SaaS platform with Texas-based growth equity investors and Silicon Valley VCs, resulting in a $25M Series B round for market expansion.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Growth Equity + VC
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">$40M</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">CleanTech Growth</h3>
                  <p className="text-slate-400">Solar energy technology startup</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Introduced a solar technology company to specialized energy investors and Texas-based family offices, securing $40M in growth capital for manufacturing scale-up.
              </p>
              <div className="text-sm text-slate-400">
                <span className="font-medium">Investor Type:</span> Energy Funds + Family Offices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Contact CTA */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 lg:p-12 border border-orange-500/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Tap into Austin's Tech Boom?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect with Silicon Hills' dynamic investor network and secure the capital needed to scale your Austin-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Austin Consultation
              </a>
              <a 
                href="/contact" 
                className="border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Our Austin Team
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Silicon Hills | Downtown Austin | SXSW Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema Markup */}
      <SchemaMarkup 
        type="localbusiness" 
        data={{
          name: "Vommuli Ventures - Austin",
          description: "Premier Austin capital introduction services connecting Silicon Hills startups with Texas investors, venture capital firms, and private equity partners.",
          url: "https://vommuli.com/locations/austin",
          telephone: "+1-512-ATX-FUND",
          address: {
            streetAddress: "Downtown Austin",
            addressLocality: "Austin",
            addressRegion: "TX",
            postalCode: "78701",
            addressCountry: "US"
          },
          geo: {
            latitude: "30.2672",
            longitude: "-97.7431"
          },
          areaServed: [
            "Austin",
            "Silicon Hills", 
            "Cedar Park",
            "Round Rock",
            "Pflugerville",
            "Travis County"
          ],
          serviceType: [
            "Venture Capital Introduction",
            "Private Equity Connections",
            "Tech Startup Funding",
            "Growth Capital Advisory",
            "SXSW Investor Network"
          ]
        }}
      />
    </div>
  );
}