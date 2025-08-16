import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Equity Fundraising | PE Capital Advisory Services',
  description: 'Expert private equity fundraising advisory for established companies seeking growth capital and strategic partnerships.',
  keywords: ['private equity fundraising', 'PE advisory', 'growth capital', 'strategic investment'],
  openGraph: {
    title: 'Private Equity Fundraising | Vommuli Ventures',
    description: 'Expert private equity fundraising advisory for established companies seeking growth capital.',
    url: 'https://vommuli.com/private-equity-fundraising',
  },
};

export default function PrivateEquityFundraisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800">
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Private Equity Fundraising for <span className="text-orange-400">Established Companies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with private equity firms for growth capital, strategic partnerships, and transformational investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule PE Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download PE Readiness Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
