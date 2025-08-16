import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Infrastructure Funding | Data Center & Cloud Investment Advisory",
  description: "Specialized digital infrastructure funding advisory for data centers, cloud infrastructure, and telecom networks.",
  keywords: ["digital infrastructure funding", "data center investment", "cloud infrastructure", "telecom funding"],
  openGraph: {
    title: "Digital Infrastructure Funding | Vommuli Ventures",
    description: "Specialized digital infrastructure funding advisory for data centers and cloud infrastructure.",
    url: "https://vommuli.com/digital-infrastructure-funding",
  },
};

export default function DigitalInfrastructureFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Digital Infrastructure Funding for <span className="text-blue-400">Technology Backbone</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect data center, cloud infrastructure, and telecom companies with strategic capital for expansion and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Infrastructure Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Infrastructure Funding Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
