import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateLocalBusinessSchema, cityCoordinates } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Austin Series A Funding Advisory | Texas VC Introductions & Investment Readiness | Vommuli',
  description: 'Austin Series A funding advisory with Silicon Hills expertise. 65+ successful Austin fundraises. Expert VC introductions to Texas investors. #3 VC hub globally. Local market intelligence.'
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding-lg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">🎆 Austin Series A Experts</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Austin Series A Funding
              <span className="block text-gradient-accent">Advisory & VC Introductions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Premier Series A funding advisory for Austin startups. <strong className="text-white">65+ successful fundraises in Silicon Hills.</strong> Expert VC introductions to 75+ Texas investors and national funds with Austin presence. Local market intelligence for the #3 global VC hub.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">65+</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Austin Fundraises</h3>
              <p className="text-white/80">Successful Series A fundraises completed in Austin since 2019</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">$485M</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Capital Raised</h3>
              <p className="text-white/80">Total Series A capital raised for Austin clients</p>
            </div>
            <div className="card-brand">
              <div className="w-16 h-16 bg-accent-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-secondary-900 font-bold text-xl">#3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Global VC Hub</h3>
              <p className="text-white/80">Austin ranked #3 VC hub globally in 2024, surpassing Boston and Seattle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Market Overview */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Silicon Hills Investment Ecosystem
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Austin has emerged as one of America's premier tech hubs, attracting major corporations, innovative startups, and sophisticated investors from across the globe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-900 mb-8">Why Austin is Booming</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">Tech Giant Migration</h4>
                    <p className="text-secondary-700 leading-relaxed">Tesla, Oracle, Apple, and Google have established major operations, creating a massive talent and capital influx.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">SXSW Innovation Platform</h4>
                    <p className="text-secondary-700 leading-relaxed">Annual convergence of 400,000+ attendees creates unparalleled networking and deal-making opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary-900 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-900 mb-3">University of Texas Ecosystem</h4>
                    <p className="text-secondary-700 leading-relaxed">Leading research university with strong entrepreneurship programs and technology transfer initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="text-2xl font-bold text-primary-900 mb-8">Austin Market Statistics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Venture Capital Firms</span>
                  <span className="text-primary-900 font-bold text-lg">45+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Private Equity Firms</span>
                  <span className="text-primary-900 font-bold text-lg">30+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Active Startups</span>
                  <span className="text-primary-900 font-bold text-lg">3,500+</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-neutral-200">
                  <span className="text-secondary-700 font-medium">Annual Deal Volume</span>
                  <span className="text-primary-900 font-bold text-lg">$8.5B+</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-secondary-700 font-medium">Average Deal Size</span>
                  <span className="text-primary-900 font-bold text-lg">$12M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin-Specific Services */}
      <section className="bg-service-gradient section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Austin Capital Introduction Services
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Specialized services tailored to Austin's unique tech ecosystem and emerging market dynamics.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Tech Startup Funding</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Direct connections to Austin's thriving VC ecosystem, including local funds and Silicon Valley firms with Austin presence.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Live Oak Venture Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  ATX Venture Partners
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  S3 Ventures
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Energy Innovation</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Specialized expertise in Austin's growing cleantech and energy innovation sector, connecting with Texas energy investors.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Solar and renewable energy
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Energy storage solutions
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Smart grid technology
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-primary-900 rounded-3xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">SXSW Network</h3>
              <p className="text-secondary-700 mb-6 leading-relaxed">Leverage our extensive South by Southwest connections to access investors, mentors, and strategic partners during and beyond the annual festival.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Interactive technology showcase
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Music industry innovation
                </li>
                <li className="flex items-center text-secondary-600">
                  <span className="w-3 h-3 bg-accent-600 rounded-full mr-3"></span>
                  Film and media technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Success Stories */}
      <section className="bg-gradient-primary section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Austin Success Stories
            </h2>
            <p className="text-xl text-secondary-800 max-w-3xl mx-auto">
              Recent successful capital introductions connecting Austin companies with local and national investors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$25M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">SaaS Series B</h3>
                  <p className="text-secondary-600">Austin enterprise software company</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Connected an Austin-based SaaS platform with Texas-based growth equity investors and Silicon Valley VCs, resulting in a $25M Series B round for market expansion.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Growth Equity + VC
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-success-500 rounded-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">$40M</span>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-primary-900">CleanTech Growth</h3>
                  <p className="text-secondary-600">Solar energy technology startup</p>
                </div>
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">
                Introduced a solar technology company to specialized energy investors and Texas-based family offices, securing $40M in growth capital for manufacturing scale-up.
              </p>
              <div className="text-sm text-secondary-600">
                <span className="font-medium">Investor Type:</span> Energy Funds + Family Offices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Contact CTA */}
      <section className="bg-service-gradient section-padding">
        <div className="container max-w-4xl">
          <div className="card-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Tap into Austin's Tech Boom?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect with Silicon Hills' dynamic investor network and secure the capital needed to scale your Austin-based company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/schedule-consultation" 
                className="btn-accent"
              >
                Schedule Austin Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-semibold py-3 px-6 rounded-3xl transition-all duration-200"
              >
                Contact Our Austin Team
              </a>
            </div>
            <div className="mt-8 text-sm text-white/80">
              <p>Silicon Hills | Downtown Austin | SXSW Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Schema Markup (Phase 3 optimization) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(
            'Austin',
            'Texas', 
            cityCoordinates.Austin.lat,
            cityCoordinates.Austin.lng
          ))
        }}
      />
      
      {/* Additional service-specific schema */}
      <SchemaMarkup 
        type="organization" 
        data={{
          name: "Vommuli Ventures - Austin",
          description: "Austin leaped to #3 VC hub globally in Q1 2025. Premier capital introduction services connecting Silicon Hills startups with Texas investors.",
          url: "https://vommuli.com/locations/austin",
          telephone: "+1-512-ATX-FUND",
          serviceType: [
            "Austin Venture Capital Introduction",
            "Texas Private Equity Connections", 
            "Silicon Hills Startup Funding",
            "Series A Funding Advisory Austin",
            "SXSW Investor Network Access"
          ],
          keywords: [
            "Austin venture capital",
            "Austin startup funding", 
            "Texas VC firms",
            "#3 VC hub 2025"
          ]
        }}
      />
    </div>
  );
}