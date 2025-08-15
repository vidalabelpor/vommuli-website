import type { Metadata } from 'next';
import { JsonLd } from 'react-schemaorg';

export const metadata: Metadata = {
  title: 'Climate Tech & Renewable Energy Funding Advisory | ESG Capital Solutions',
  description: 'Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with ESG-focused investors, green bonds, and climate-focused growth capital.',
  keywords: [
    'climate tech funding advisor',
    'renewable energy project financing',
    'ESG capital raising',
    'sustainable technology funding',
    'green bond advisory',
    'climate tech venture capital',
    'renewable energy investment banking',
    'environmental technology funding',
    'clean tech capital advisory',
    'carbon credit financing'
  ],
  openGraph: {
    title: 'Climate Tech & Renewable Energy Funding Advisory | Vommuli Ventures',
    description: 'Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with ESG-focused investors.',
    url: 'https://vommuli.com/climate-tech-renewable-energy-funding',
  },
};

export default function ClimateTechFundingPage() {
  return (
    <>
      <JsonLd
        type="Service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Climate Tech & Renewable Energy Funding Advisory",
          "description": "Specialized climate technology and renewable energy funding advisory connecting sustainable innovation companies with ESG-focused investors",
          "provider": {
            "@type": "Organization",
            "name": "Vommuli Ventures",
            "url": "https://vommuli.com"
          },
          "serviceType": "Climate Technology Investment Advisory",
          "areaServed": "Global"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Climate Tech & Renewable Energy <span className="text-green-400">Funding Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Accelerating the energy transition through strategic capital. We connect climate technology innovators and renewable energy projects with ESG-focused investors, green bonds, and sustainable growth capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Climate Capital Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Download ESG Funding Guide
              </button>
            </div>
          </div>
        </section>

        {/* Market Landscape Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Climate Technology Investment Landscape 2024-2025
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-green-500/30 text-center">
                <h3 className="text-3xl font-bold text-green-400 mb-2">$394B</h3>
                <p className="text-slate-300 text-sm">Global climate tech funding in 2024, 28% increase YoY</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30 text-center">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">$23T</h3>
                <p className="text-slate-300 text-sm">Investment needed for net-zero transition by 2050</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/20 to-emerald-600/20 p-6 rounded-xl border border-cyan-500/30 text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">67%</h3>
                <p className="text-slate-300 text-sm">Institutional investor allocation to ESG strategies</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 p-6 rounded-xl border border-emerald-500/30 text-center">
                <h3 className="text-3xl font-bold text-emerald-400 mb-2">3.2x</h3>
                <p className="text-slate-300 text-sm">Climate tech valuation premium vs traditional energy</p>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Investment Priorities & Market Dynamics</h3>
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">High-Growth Climate Sectors</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Energy Storage:</strong> Battery technology, grid-scale storage, 47% CAGR</li>
                    <li>• <strong>Carbon Capture:</strong> Direct air capture, industrial CCUS, $1.2T market</li>
                    <li>• <strong>Green Hydrogen:</strong> Electrolysis, fuel cells, transportation applications</li>
                    <li>• <strong>Sustainable Aviation:</strong> eVTOL, electric aircraft, sustainable fuels</li>
                    <li>• <strong>Industrial Decarbonization:</strong> Process optimization, alternative materials</li>
                    <li>• <strong>Climate Adaptation:</strong> Resilience infrastructure, monitoring systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Investor Requirements</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Proven Technology:</strong> TRL 7+, commercial demonstration</li>
                    <li>• <strong>Market Validation:</strong> Offtake agreements, customer commitments</li>
                    <li>• <strong>Regulatory Clarity:</strong> Permits, compliance frameworks, policy support</li>
                    <li>• <strong>ESG Metrics:</strong> Measurable environmental impact, sustainability reporting</li>
                    <li>• <strong>Financial Viability:</strong> Path to profitability, competitive economics</li>
                    <li>• <strong>Scalability:</strong> Manufacturing capacity, supply chain readiness</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Funding Structures</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li>• <strong>Green Bonds:</strong> $500B+ annual issuance, 3-7 year terms</li>
                    <li>• <strong>Project Finance:</strong> Non-recourse debt, 15-25 year tenor</li>
                    <li>• <strong>Sustainability-Linked Loans:</strong> KPI-based pricing, ESG targets</li>
                    <li>• <strong>Climate Venture Capital:</strong> $50B+ specialized funds</li>
                    <li>• <strong>Development Finance:</strong> IFC, EBRD, multilateral institutions</li>
                    <li>• <strong>Corporate Venture Capital:</strong> Strategic partnerships, technology access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Climate Tech Funding Challenges & Solutions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Technology Risk Assessment</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> Climate technologies often involve unproven technologies at commercial scale, creating significant technical and market risk that traditional investors struggle to evaluate. The gap between laboratory demonstrations and commercial viability creates funding challenges.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Critical Risk Factors:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Technology Readiness Level (TRL) assessment and validation requirements</li>
                      <li>Commercial-scale performance versus laboratory/pilot results</li>
                      <li>Manufacturing scalability and supply chain complexity</li>
                      <li>Long-term durability and maintenance requirements</li>
                      <li>Competitive technology emergence and obsolescence risk</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Regulatory & Policy Dependencies</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> Climate technology investments are heavily dependent on government policies, incentives, and regulations that can change with political cycles. This policy risk creates uncertainty for both investors and companies.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Policy Risk Mitigation:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Multi-jurisdiction policy analysis and hedging strategies</li>
                      <li>Incentive optimization and subsidy timing strategies</li>
                      <li>Regulatory pathway development and compliance planning</li>
                      <li>Political risk assessment and diversification approaches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Capital-Intensive Deployment</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> Many climate technologies require massive capital for infrastructure development and scaling, often exceeding traditional venture capital capacity. Project finance structures are complex and require specialized expertise.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>Capital Structure Solutions:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Blended finance combining private, public, and development capital</li>
                      <li>Staged financing linked to technology and commercial milestones</li>
                      <li>Strategic partnerships for shared infrastructure and risk</li>
                      <li>Government guarantee programs and de-risking mechanisms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">ESG Measurement & Reporting</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>The Challenge:</strong> Investors require rigorous ESG measurement and impact reporting, but standardized frameworks are still evolving. Companies must demonstrate quantifiable environmental benefits while maintaining financial returns.
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong>ESG Framework Requirements:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Life cycle assessment and carbon footprint quantification</li>
                      <li>Third-party ESG verification and impact measurement</li>
                      <li>Sustainability reporting aligned with global standards (TCFD, SASB)</li>
                      <li>Integration with investor ESG objectives and mandates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vommuli Approach Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Vommuli's Climate Tech Funding Methodology
            </h2>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-8 rounded-xl border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-400 mb-6">Technology Validation & Risk Assessment</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technical Due Diligence</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Independent technology assessment with industry experts and research institutions</li>
                      <li>• Commercial scalability analysis and manufacturing readiness evaluation</li>
                      <li>• Competitive technology benchmarking and intellectual property analysis</li>
                      <li>• Supply chain risk assessment and critical material dependency analysis</li>
                      <li>• Performance validation through third-party testing and certification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Market Validation Framework</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Customer validation through binding offtake agreements and LOIs</li>
                      <li>• Market size analysis with addressable market quantification</li>
                      <li>• Economic competitiveness assessment versus incumbent technologies</li>
                      <li>• Adoption timeline modeling with market penetration scenarios</li>
                      <li>• Strategic partnership development for market access and validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">ESG Integration & Impact Measurement</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Impact Quantification</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Life cycle assessment (LCA) and carbon footprint analysis</li>
                      <li>• Environmental impact measurement with third-party verification</li>
                      <li>• Social impact assessment including job creation and community benefits</li>
                      <li>• Governance framework development and stakeholder engagement protocols</li>
                      <li>• Sustainability reporting aligned with global standards and investor requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">ESG Investor Alignment</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• ESG-focused investor identification and mandate alignment</li>
                      <li>• Impact investment framework development and measurement protocols</li>
                      <li>• Green bond structuring and sustainability-linked financing options</li>
                      <li>• Development finance institution (DFI) engagement and blended finance structures</li>
                      <li>• Corporate sustainability partnership development for strategic investment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600/10 to-emerald-600/10 p-8 rounded-xl border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Regulatory Navigation & Policy Optimization</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Regulatory Strategy</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Multi-jurisdiction regulatory analysis and compliance pathway development</li>
                      <li>• Environmental permitting and approval process management</li>
                      <li>• Grid interconnection and utility partnership facilitation</li>
                      <li>• International standards compliance (ISO 14001, TCFD reporting)</li>
                      <li>• Policy advocacy and regulatory engagement strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Incentive Optimization</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Government incentive and subsidy maximization strategies</li>
                      <li>• Carbon credit monetization and trading program participation</li>
                      <li>• Tax credit optimization and renewable energy certificate (REC) strategies</li>
                      <li>• International climate finance access and development bank engagement</li>
                      <li>• Public-private partnership structuring and government collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Climate Tech Success Stories
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">ES</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Energy Storage Platform</h3>
                    <p className="text-slate-400 text-sm">Project Finance</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Battery storage developer needed $200M for 500MWh grid-scale deployment across 3 states.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $200M green bond financing, 15-year power purchase agreements, 40% IRR to investors.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">CC</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Carbon Capture Technology</h3>
                    <p className="text-slate-400 text-sm">Growth Equity</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Direct air capture startup needed $150M for commercial-scale facility development and technology scaling.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $150M Series C led by climate fund, strategic partnership with major oil company, carbon credit offtake agreements.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">GH</div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Green Hydrogen Producer</h3>
                    <p className="text-slate-400 text-sm">Infrastructure Financing</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-slate-300"><strong>Challenge:</strong> Hydrogen production facility required $300M infrastructure financing with complex offtake and regulatory considerations.</p>
                  <p className="text-slate-300"><strong>Result:</strong> $300M project finance, government loan guarantees, 10-year hydrogen supply contracts with industrial customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">
              Climate Tech Funding FAQ
            </h2>
            
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">What are the key factors climate tech investors evaluate?</h3>
                <p className="text-slate-300">
                  Climate tech investors prioritize: (1) Technology Readiness Level (TRL) of 7+ with commercial demonstration, (2) Clear path to economic competitiveness without subsidies, (3) Measurable environmental impact with third-party verification, (4) Strong management team with industry and technology expertise, (5) Market validation through binding offtake agreements or strategic partnerships, (6) Regulatory pathway clarity and permit status, (7) Scalable business model with defensible competitive advantages. ESG impact measurement and sustainability reporting are increasingly critical for institutional investors.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">How do green bonds and sustainability-linked financing work?</h3>
                <p className="text-slate-300">
                  Green bonds are debt securities specifically earmarked for environmental projects, typically offering lower interest rates (10-50 basis points) due to strong investor demand. Sustainability-linked loans tie interest rates to ESG performance targets, providing financing cost benefits for achieving environmental milestones. These instruments require: (1) Use of proceeds framework aligned with green taxonomy, (2) Third-party verification and impact reporting, (3) Regular ESG performance monitoring and disclosure, (4) Compliance with international standards (ICMA Green Bond Principles). The global green bond market exceeds $500B annually with growing institutional allocation.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">What role do government incentives play in climate tech financing?</h3>
                <p className="text-slate-300">
                  Government incentives are critical for climate tech economics and investor confidence: (1) Investment tax credits (ITC) and production tax credits (PTC) improve project returns by 20-40%, (2) Loan guarantee programs reduce financing costs and enable higher leverage, (3) Grants and R&D support de-risk early-stage technology development, (4) Carbon pricing mechanisms create revenue streams for emission reduction technologies, (5) Regulatory mandates (renewable portfolio standards) create guaranteed demand. However, policy dependency creates risk, requiring diversification across jurisdictions and policy-independent value propositions. Successful climate tech investments often combine multiple incentive programs with strategic structuring.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">How do climate tech valuations compare to traditional technology companies?</h3>
                <p className="text-slate-300">
                  Climate tech companies typically command valuation premiums due to: (1) ESG investor demand creating multiple arbitrage, (2) Government policy support improving risk-adjusted returns, (3) Large addressable markets driven by energy transition needs, (4) Strategic value to corporate acquirers pursuing sustainability goals. However, valuations also reflect higher risks: longer development timelines, capital intensity, and regulatory dependencies. Early-stage climate tech often trades at 2-4x revenue multiples, while proven technologies with commercial traction achieve 4-8x revenue. Project-level investments typically target 12-20% IRR depending on technology risk and policy support.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-3">What are the key challenges in scaling climate technologies?</h3>
                <p className="text-slate-300">
                  Climate tech scaling faces unique challenges: (1) "Valley of Death" between R&D and commercialization requiring $10-100M+ investment, (2) Manufacturing scale-up complexity with supply chain and quality control risks, (3) Infrastructure dependencies requiring coordinated development and regulatory approval, (4) Customer adoption barriers including performance validation and integration costs, (5) Competition from incumbent technologies with established economics and infrastructure, (6) Policy uncertainty affecting long-term market demand and economics. Successful scaling requires blended finance, strategic partnerships, phased deployment strategies, and strong government support. Most climate tech companies require multiple financing rounds with patient capital over 5-10 year development cycles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Accelerate Climate Innovation?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Connect with specialized climate technology investors and sustainable finance partners. Schedule a confidential consultation to discuss your climate tech funding strategy and ESG objectives.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-green-400 mb-2">Technology Assessment</h3>
                <p className="text-slate-300">Comprehensive evaluation of climate technology readiness and commercial viability</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-green-400 mb-2">ESG Strategy</h3>
                <p className="text-slate-300">Impact measurement framework and ESG investor targeting</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-green-400 mb-2">Capital Structure</h3>
                <p className="text-slate-300">Blended finance solutions and green financing structures</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule Climate Capital Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Submit Climate Tech Brief
              </button>
            </div>
            
            <p className="text-slate-400 mt-8">
              Confidential assessment of climate technology and funding opportunities. Minimum transaction size: $5M+
            </p>
          </div>
        </section>
      </div>
    </>
  );
}