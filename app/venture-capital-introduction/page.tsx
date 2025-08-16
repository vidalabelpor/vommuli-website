import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venture Capital Introduction Services | VC Funding for Growth Companies',
  description: 'Expert venture capital introduction services connecting high-growth companies with top-tier VC firms.',
  keywords: ['venture capital introduction', 'VC funding advisory', 'Series A funding', 'startup funding'],
  openGraph: {
    title: 'Venture Capital Introduction Services | Vommuli Ventures',
    description: 'Expert venture capital introduction services connecting high-growth companies with top-tier VC firms.',
    url: 'https://vommuli.com/venture-capital-introduction',
  },
};

export default function VentureCapitalIntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-800">
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Venture Capital Introduction for <span className="text-violet-400">High-Growth Companies</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with top-tier venture capital firms and accelerate your growth trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule VC Strategy Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download VC Readiness Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
