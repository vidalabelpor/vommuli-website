import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Growth Capital Advisory Services | Expansion Funding for Mid-Market Companies',
  description: 'Expert growth capital advisory services helping mid-market companies secure $5M-$500M in expansion funding. Proven track record with global institutional investors, private equity, and venture capital.',
  keywords: [
    'growth capital advisory',
    'expansion capital advisory',
    'mid-market growth funding',
    'Series B funding advisor',
    'Series C capital raising',
    'institutional growth capital',
    'private equity growth funding',
    'venture capital expansion',
    'strategic growth funding',
    'scale-up capital advisory'
  ],
  openGraph: {
    title: 'Growth Capital Advisory Services | Vommuli Ventures',
    description: 'Expert growth capital advisory services helping mid-market companies secure $5M-$500M in expansion funding.',
    url: 'https://vommuli.com/growth-capital-advisory',
  },
};

export default function GrowthCapitalAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Growth Capital Advisory for <span className="text-blue-400">Scale-Ready Companies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Accelerate your expansion with strategic growth capital. We connect mid-market companies with $5M-$500M funding from global institutional investors, enabling transformational growth and market leadership.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Growth Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Growth Capital Guide
            </button>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Growth Capital Challenges Facing Scale-Ready Companies
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Investor Readiness Gaps</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong>The Challenge:</strong> Companies with proven business models struggle to present their growth story in a format that resonates with institutional investors. Critical gaps in financial modeling, market positioning, and growth metrics presentation create barriers to securing optimal valuations.
                </p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>• Inadequate three-year financial projections with scenario modeling</li>
                  <li>• Unclear unit economics and customer acquisition cost optimization</li>
                  <li>• Insufficient competitive positioning and market size validation</li>
                  <li>• Lack of institutionalized processes for due diligence readiness</li>
                </ul>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Valuation Alignment Complexity</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong>The Challenge:</strong> Bridging the valuation gap between founder expectations and investor reality requires sophisticated financial engineering and market positioning. Without proper benchmarking and strategic positioning, companies often accept suboptimal terms or face prolonged fundraising cycles.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Institutional Investor Access</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong>The Challenge:</strong> Accessing decision-makers at top-tier institutional investors requires relationship capital and strategic positioning that most companies lack. Cold outreach yields &lt;3% response rates, while warm introductions through established advisors achieve 60%+ engagement rates.
                </p>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Multi-Stakeholder Deal Complexity</h3>
                <p className="text-slate-300 leading-relaxed">
                  <strong>The Challenge:</strong> Growth capital transactions involve multiple parties with competing interests: existing investors, new lead investors, management teams, and board members. Coordinating preferences, liquidation rights, and governance structures requires specialized expertise in complex deal structuring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli's Solution Framework */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Proven Growth Capital Framework
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Investor Readiness Assessment</h3>
              <p className="text-slate-300">
                Comprehensive evaluation of financial models, market positioning, and growth metrics to identify gaps and optimization opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Positioning & Packaging</h3>
              <p className="text-slate-300">
                Craft compelling investment narratives and optimize deal structures to maximize investor interest and valuation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Institutional Investor Access</h3>
              <p className="text-slate-300">
                Leverage our global network of decision-makers at top-tier institutional investors, <a href="/private-equity-fundraising" className="text-blue-400 hover:text-blue-300 underline">private equity firms</a>, and family offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Explore Our Related Capital Advisory Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Earlier Stage Funding</h3>
              <p className="text-slate-300 mb-4">For companies seeking Series A or B funding to establish product-market fit and early scaling.</p>
              <a href="/venture-capital-introduction" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Strategic Exit Planning</h3>
              <p className="text-slate-300 mb-4">When growth capital leads to acquisition opportunities or strategic transactions.</p>
              <a href="/ma-advisory" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Sector-Specific Expertise</h3>
              <p className="text-slate-300 mb-4">Specialized growth capital advisory for technology, healthcare, and infrastructure companies.</p>
              <a href="/ai-tech-funding-advisory" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                Technology Funding →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join the 50+ companies that have successfully secured growth capital through Vommuli's proven advisory framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
