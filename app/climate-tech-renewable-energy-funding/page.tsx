import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climate Tech & Renewable Energy Funding | ESG Investment Advisory',
  description: 'Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with impact investors and strategic capital.',
  keywords: [
    'climate tech funding',
    'renewable energy investment',
    'ESG investment advisory',
    'sustainable technology funding',
    'clean energy capital',
    'climate technology investment',
    'green energy funding',
    'sustainability investment',
    'impact investing advisory',
    'clean tech venture capital'
  ],
  openGraph: {
    title: 'Climate Tech & Renewable Energy Funding | Vommuli Ventures',
    description: 'Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with impact investors.',
    url: 'https://vommuli.com/climate-tech-renewable-energy-funding',
  },
};

export default function ClimateTechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Climate Tech & <span className="text-green-400">Renewable Energy Funding</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting breakthrough climate technology and renewable energy companies with impact investors, strategic capital, and ESG-focused funds to accelerate the transition to a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Climate Tech Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download ESG Funding Guide
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Climate Technology Investment Landscape
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-400 mb-4">High-Priority Sectors</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Renewable Energy Generation</li>
                <li>• Energy Storage Solutions</li>
                <li>• Carbon Capture & Removal</li>
                <li>• Sustainable Transportation</li>
                <li>• Circular Economy Tech</li>
                <li>• Climate Adaptation</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Investor Requirements</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Technology Validation</li>
                <li>• Market Readiness</li>
                <li>• Regulatory Pathways</li>
                <li>• Scalability Potential</li>
                <li>• Impact Measurement</li>
                <li>• Team Expertise</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Vommuli's Approach</h3>
              <ul className="space-y-3 text-slate-300">
                <li>• Technology Assessment</li>
                <li>• Market Positioning</li>
                <li>• ESG Investor Matching</li>
                <li>• Impact Measurement</li>
                <li>• Regulatory Navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Scale Your Climate Innovation?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Connect with impact investors and strategic capital to accelerate your climate technology and create lasting environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Climate Tech Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
