import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare & MedTech Funding | Medical Technology Investment Advisory',
  description: 'Specialized healthcare and medical technology funding advisory connecting innovative health companies with strategic investors.',
  keywords: ['healthcare funding', 'MedTech investment', 'health technology', 'medical device funding'],
  openGraph: {
    title: 'Healthcare & MedTech Funding | Vommuli Ventures',
    description: 'Specialized healthcare and medical technology funding advisory.',
    url: 'https://vommuli.com/healthcare-medtech-funding',
  },
};

export default function HealthcareMedTechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Healthcare & MedTech Funding for <span className="text-teal-400">Innovation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect breakthrough healthcare and medical technology companies with strategic investors and growth capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Healthcare Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Healthcare Funding Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
