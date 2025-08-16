import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M&A Advisory Services | Mergers & Acquisitions Consulting',
  description: 'Expert M&A advisory services for companies seeking strategic acquisitions, mergers, or divestitures.',
  keywords: ['M&A advisory', 'mergers acquisitions', 'strategic transactions', 'corporate advisory'],
  openGraph: {
    title: 'M&A Advisory Services | Vommuli Ventures',
    description: 'Expert M&A advisory services for companies seeking strategic transactions.',
    url: 'https://vommuli.com/ma-advisory',
  },
};

export default function MAAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            M&A Advisory Services for <span className="text-red-400">Strategic Transactions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Expert guidance for mergers, acquisitions, divestitures, and strategic partnerships to maximize value and minimize risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule M&A Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download M&A Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
