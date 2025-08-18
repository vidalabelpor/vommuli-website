import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import GrowthCapitalFAQ from './GrowthCapitalFAQ';

export const metadata: Metadata = {
  title: 'Growth Capital Advisory Services | Growth Equity Funding | Vommuli Ventures',
  description: 'Expert growth capital advisory services connecting scaling companies with growth equity firms. Strategic financing for revenue-generating businesses ready for accelerated expansion.',
  keywords: [
    'growth capital advisory',
    'growth equity funding',
    'growth stage financing',
    'expansion capital advisory',
    'late stage venture capital',
    'minority growth investments',
    'scaling business funding',
    'institutional growth capital',
    'revenue stage funding',
    'growth equity firms',
    'private growth capital',
    'expansion funding consultants',
    'growth stage fundraising',
    'minority equity investments',
    'proven business model funding',
    'growth capital introductions',
    'scaling company capital',
    'established business financing',
    'revenue growth funding',
    'institutional expansion capital',
    'growth equity placement',
    'professional growth advisory',
    'growth capital consultants',
    'growth stage investors',
    'expansion stage funding',
    'growth equity transactions',
    'scaling business advisory',
    'late venture capital',
    'growth capital raising',
    'expansion equity funding',
    'growth funding specialists',
    'institutional growth investors',
    'growth capital strategies',
    'expansion capital sources',
    'growth equity placements',
    'proven model financing',
    'scaling enterprise funding',
    'growth stage capital',
    'institutional growth funding',
    'professional growth services',
    'growth capital networks',
    'expansion funding advisory',
    'growth equity advisory',
    'institutional expansion funding',
    'scaling company advisory',
    'growth capital placement',
    'expansion stage advisory',
    'growth funding consultancy'
  ],
  openGraph: {
    title: 'Growth Capital Advisory Services | Expert Growth Equity Funding',
    description: 'Strategic growth capital advisory services for scaling companies. Connect with leading growth equity firms for accelerated expansion.',
    url: 'https://vommuli.com/growth-capital-advisory',
  },
};

export default function GrowthCapitalAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900">
      <div className="relative py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Growth Capital
            <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
              Advisory Services
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Strategic growth capital advisory for scaling companies with proven business models. Connect with leading growth equity firms for accelerated expansion and market dominance.
          </p>
        </div>
      </div>

      {/* Full content will be restored - temporarily simplified for deployment */}
      <GrowthCapitalFAQ />
      
      <SchemaMarkup 
        type="service" 
        data={{
          name: "Growth Capital Advisory Services",
          description: "Expert growth capital advisory services connecting scaling companies with growth equity firms. Strategic financing for revenue-generating businesses ready for accelerated expansion.",
          url: "/growth-capital-advisory"
        }}
      />
    </div>
  );
}