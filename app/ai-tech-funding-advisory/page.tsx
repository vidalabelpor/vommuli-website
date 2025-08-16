import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Tech Funding Advisory | Deep Tech Venture Capital & Growth Equity',
  description: 'Specialized AI and emerging technology funding advisory connecting deep tech companies with venture capital, growth equity, and strategic investors.',
  keywords: [
    'AI startup funding advisor',
    'deep tech venture capital',
    'artificial intelligence funding',
    'machine learning startup funding',
    'SaaS growth capital advisory',
    'enterprise AI funding',
    'emerging technology investment',
    'tech startup capital raising',
    'AI venture capital introduction',
    'deep tech growth equity'
  ],
  openGraph: {
    title: 'AI & Tech Funding Advisory | Vommuli Ventures',
    description: 'Specialized AI and emerging technology funding advisory connecting deep tech companies with venture capital and growth equity.',
    url: 'https://vommuli.com/ai-tech-funding-advisory',
  },
};

export default function AITechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            AI & Emerging Technology <span className="text-purple-400">Funding Advisory</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting breakthrough AI, machine learning, and deep technology companies with specialized venture capital, growth equity, and strategic investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Tech Funding Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download AI Funding Playbook
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            AI & Deep Tech Investment Landscape
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">High-Priority AI Verticals</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Enterprise AI Platforms</li>
                <li>• Generative AI Applications</li>
                <li>• AI Infrastructure & MLOps</li>
                <li>• Autonomous Systems</li>
                <li>• AI-Enabled Healthcare</li>
                <li>• Cybersecurity AI</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Investor Requirements</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Technical Differentiation</li>
                <li>• Market Validation</li>
                <li>• Team Expertise</li>
                <li>• Scalability Proof</li>
                <li>• Competitive Moats</li>
                <li>• Regulatory Clarity</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Vommuli's Approach</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Technical Due Diligence</li>
                <li>• Market Positioning</li>
                <li>• Investor Matching</li>
                <li>• Deal Structuring</li>
                <li>• Ongoing Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Comprehensive Technology Funding Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Early-Stage VC Funding</h3>
              <p className="text-slate-300 mb-4">Series A and B funding for AI startups with proven product-market fit.</p>
              <a href="/venture-capital-introduction" className="text-purple-400 hover:text-purple-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Growth & Expansion Capital</h3>
              <p className="text-slate-300 mb-4">Scaling proven AI technologies with institutional growth capital.</p>
              <a href="/growth-capital-advisory" className="text-purple-400 hover:text-purple-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Strategic Exit Planning</h3>
              <p className="text-slate-300 mb-4">M&A advisory for AI companies seeking strategic acquisitions or partnerships.</p>
              <a href="/ma-advisory" className="text-purple-400 hover:text-purple-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Accelerate Your AI Innovation?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Connect with the right investors to scale your AI technology and dominate your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View AI Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
