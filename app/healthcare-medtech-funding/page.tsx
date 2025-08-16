import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare & MedTech Funding | Medical Technology Investment Advisory',
  description: 'Specialized healthcare and medical technology funding advisory connecting innovative health companies with venture capital, growth equity, and strategic investors for breakthrough medical innovations.',
  keywords: [
    'healthcare startup funding advisor',
    'medical technology investment',
    'biotech venture capital',
    'digital health funding',
    'medical device financing',
    'pharmaceutical funding advisory',
    'health technology capital raising',
    'life sciences investment advisory',
    'telemedicine funding consultant',
    'healthtech venture capital'
  ],
  openGraph: {
    title: 'Healthcare & MedTech Funding | Vommuli Ventures',
    description: 'Specialized healthcare and medical technology funding advisory.',
    url: 'https://vommuli.com/healthcare-medtech-funding',
  },
};

export default function HealthcareMedTechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Healthcare & MedTech <span className="text-red-400">Funding Advisory</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Navigate complex healthcare and medical technology financing for breakthrough innovations. We connect life sciences, digital health, and medical device companies with specialized investors who understand regulatory pathways and clinical validation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Healthcare Funding Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download MedTech Investment Guide
            </button>
          </div>
        </div>
      </section>

      {/* Healthcare Market Landscape */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare & MedTech Investment Landscape 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 p-6 rounded-xl border border-red-500/30 text-center">
              <h3 className="text-3xl font-bold text-red-400 mb-2">$73B</h3>
              <p className="text-slate-300 text-sm">Global healthcare VC investment in 2024, with digital health leading growth</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 p-6 rounded-xl border border-pink-500/30 text-center">
              <h3 className="text-3xl font-bold text-pink-400 mb-2">34%</h3>
              <p className="text-slate-300 text-sm">Share of healthcare funding going to AI-enabled diagnostic and therapeutic solutions</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-600/20 to-orange-600/20 p-6 rounded-xl border border-rose-500/30 text-center">
              <h3 className="text-3xl font-bold text-rose-400 mb-2">$4.8T</h3>
              <p className="text-slate-300 text-sm">Global healthcare market by 2028, driving innovation investment demand</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/30 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">7-12 Years</h3>
              <p className="text-slate-300 text-sm">Average development timeline for medical devices requiring patient capital strategies</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">High-Priority Healthcare Investment Themes</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Digital Health & AI Diagnostics</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>AI-Powered Diagnostics:</strong> Medical imaging, pathology, and radiology automation</li>
                  <li>• <strong>Telemedicine Platforms:</strong> Remote care delivery and virtual health services</li>
                  <li>• <strong>Clinical Decision Support:</strong> Evidence-based treatment recommendations and drug interactions</li>
                  <li>• <strong>Remote Patient Monitoring:</strong> Wearable devices, IoT sensors, and chronic disease management</li>
                  <li>• <strong>Electronic Health Records:</strong> Interoperability, data analytics, and clinical workflow optimization</li>
                  <li>• <strong>Mental Health Tech:</strong> Digital therapeutics, therapy platforms, and wellness applications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Medical Devices & Biotechnology</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Minimally Invasive Surgery:</strong> Robotic systems, surgical navigation, and precision instruments</li>
                  <li>• <strong>Implantable Devices:</strong> Cardiovascular, orthopedic, and neurological implants</li>
                  <li>• <strong>Diagnostic Equipment:</strong> Point-of-care testing, laboratory automation, and molecular diagnostics</li>
                  <li>• <strong>Regenerative Medicine:</strong> Cell therapy, gene therapy, and tissue engineering</li>
                  <li>• <strong>Drug Discovery & Development:</strong> Precision medicine, biomarkers, and personalized therapeutics</li>
                  <li>• <strong>Combination Products:</strong> Drug-device combinations and software as medical devices (SaMD)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Healthcare Infrastructure & Services</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Value-Based Care:</strong> Population health management and outcome-based reimbursement</li>
                  <li>• <strong>Healthcare Supply Chain:</strong> Pharmaceutical logistics, medical device distribution</li>
                  <li>• <strong>Clinical Research:</strong> Clinical trial optimization, patient recruitment, and data management</li>
                  <li>• <strong>Healthcare Cybersecurity:</strong> Protected health information (PHI) and HIPAA compliance</li>
                  <li>• <strong>Aging Population Solutions:</strong> Senior care technology and chronic disease management</li>
                  <li>• <strong>Global Health Access:</strong> Emerging market healthcare delivery and affordability solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Funding Challenges */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Complex Healthcare & MedTech Funding Challenges
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Regulatory Pathway Complexity & FDA Approval</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare companies navigate complex regulatory approval processes requiring extensive clinical validation, regulatory expertise, and significant capital deployment before revenue generation. FDA pathways vary dramatically by product classification and risk profile.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Regulatory Navigation Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>FDA device classification (Class I, II, III) determining approval pathway and timeline</li>
                    <li>Pre-submission meetings and regulatory strategy development</li>
                    <li>Clinical trial design, protocol development, and investigational device exemption (IDE)</li>
                    <li>Quality management systems (QMS) and ISO 13485 compliance</li>
                    <li>Post-market surveillance and adverse event reporting requirements</li>
                    <li>International regulatory harmonization for global market access</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Clinical Validation & Evidence Generation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare innovations require rigorous clinical evidence to demonstrate safety and efficacy. Clinical trials are expensive ($10M-$100M+), time-intensive (3-7 years), and carry significant execution risk with binary outcomes.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Clinical Development Strategy:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Clinical endpoint selection and statistical power calculations</li>
                    <li>Patient recruitment and clinical site management</li>
                    <li>Data collection, monitoring, and regulatory compliance</li>
                    <li>Health economics and outcomes research (HEOR) for reimbursement</li>
                    <li>Real-world evidence generation and post-market studies</li>
                    <li>Comparative effectiveness research and health technology assessment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Reimbursement & Market Access Strategy</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare innovations must navigate complex reimbursement landscapes involving Medicare, Medicaid, private insurers, and value-based care contracts. Payer coverage decisions significantly impact commercial viability and investor returns.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Market Access Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>CPT code establishment and reimbursement rate negotiation</li>
                    <li>Health technology assessment and cost-effectiveness demonstration</li>
                    <li>Payer evidence requirements and coverage policy development</li>
                    <li>Value-based care contract negotiation and risk sharing</li>
                    <li>Patient access programs and affordability solutions</li>
                    <li>International pricing and market access strategy</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Technology Integration & Workflow Adoption</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare technology adoption requires integration with existing clinical workflows, electronic health record systems, and established medical practices. Change management and clinical validation are essential for market penetration.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Adoption Strategy Considerations:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Clinical workflow integration and user experience optimization</li>
                    <li>EHR interoperability and FHIR standard compliance</li>
                    <li>Clinical training programs and change management</li>
                    <li>Key opinion leader (KOL) engagement and clinical champion development</li>
                    <li>Healthcare economics demonstration and ROI validation</li>
                    <li>Cybersecurity frameworks and HIPAA compliance requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vommuli Healthcare Methodology */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Vommuli's Healthcare & MedTech Funding Framework
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 p-8 rounded-xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Phase 1: Clinical & Regulatory Assessment (Weeks 1-10)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Regulatory Strategy Development</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• FDA pathway analysis and regulatory precedent research</li>
                    <li>• Clinical development plan and regulatory milestone mapping</li>
                    <li>• Quality management system gap analysis and compliance roadmap</li>
                    <li>• International regulatory strategy and harmonization planning</li>
                    <li>• Regulatory consultant and key opinion leader network engagement</li>
                    <li>• Risk assessment and mitigation strategy for approval pathway</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Clinical Evidence & Market Validation</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Clinical trial design and statistical endpoint selection</li>
                    <li>• Health economics and outcomes research (HEOR) framework</li>
                    <li>• Key opinion leader (KOL) validation and advisory board development</li>
                    <li>• Competitive landscape analysis and clinical differentiation</li>
                    <li>• Patient advocacy and clinical site relationship development</li>
                    <li>• Real-world evidence strategy and post-market data collection</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 p-8 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Phase 2: Investor Targeting & Market Access Planning (Weeks 11-20)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Healthcare Investor Identification</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Healthcare-focused VC firms with regulatory and clinical expertise</li>
                    <li>• Strategic corporate investors including pharma and medical device companies</li>
                    <li>• Family offices and foundations with healthcare mission alignment</li>
                    <li>• Government funding sources including NIH, BARDA, and NSF</li>
                    <li>• International investors with global healthcare market access</li>
                    <li>• Healthcare-focused private equity for growth-stage companies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Reimbursement & Commercial Strategy</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Payer landscape analysis and coverage policy assessment</li>
                    <li>• Health technology assessment and cost-effectiveness modeling</li>
                    <li>• CPT code strategy and reimbursement pathway development</li>
                    <li>• Value-based care contract framework and risk-sharing models</li>
                    <li>• Patient access program design and affordability strategy</li>
                    <li>• International pricing and market access coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-600/10 to-orange-600/10 p-8 rounded-xl border-l-4 border-rose-500">
              <h3 className="text-2xl font-bold text-rose-400 mb-6">Phase 3: Capital Raising & Strategic Partnership Development (Weeks 21-35)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Healthcare-Specific Due Diligence</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Clinical data review and regulatory pathway validation</li>
                    <li>• Intellectual property landscape and freedom-to-operate analysis</li>
                    <li>• Regulatory expert and KOL reference validation</li>
                    <li>• Market access and reimbursement feasibility assessment</li>
                    <li>• Clinical trial timeline and budget validation</li>
                    <li>• Competitive positioning and clinical differentiation review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Strategic Partnership & Deal Execution</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Strategic partnership negotiations with healthcare incumbents</li>
                    <li>• Licensing and collaboration agreement structuring</li>
                    <li>• Milestone-based funding aligned with regulatory approvals</li>
                    <li>• Clinical trial cost management and risk mitigation</li>
                    <li>• International expansion and regulatory approval coordination</li>
                    <li>• Exit strategy planning including strategic acquisition and IPO readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Investment Stages */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare & MedTech Investment Stages & Requirements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">PR</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Preclinical & Early Development</h3>
                  <p className="text-slate-400">Proof of Concept to IND/IDE</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$2M-$25M over 18-36 months for preclinical studies, regulatory preparation, and IND/IDE submission enabling human trials.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Preclinical efficacy and safety validation in animal models</li>
                    <li>• Manufacturing process development and quality systems</li>
                    <li>• Regulatory strategy finalization and FDA pre-submission meetings</li>
                    <li>• Intellectual property portfolio strengthening and FTO analysis</li>
                    <li>• Clinical trial protocol development and site identification</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Investor Profile</h4>
                  <p className="text-slate-300">Healthcare VCs, angel investors with medical backgrounds, government grants (SBIR, NIH), and disease foundation funding.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CT</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Clinical Trial & Validation</h3>
                  <p className="text-slate-400">Phase I/II to Market Approval</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$10M-$100M+ over 3-7 years for clinical trials, regulatory approval, and initial market preparation.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-pink-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Phase I safety studies and dose escalation completion</li>
                    <li>• Phase II efficacy demonstration and endpoint validation</li>
                    <li>• FDA breakthrough designation or fast track status (if applicable)</li>
                    <li>• Pivotal trial initiation and interim analysis success</li>
                    <li>• Regulatory submission and approval timeline execution</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-pink-400">Investor Profile</h4>
                  <p className="text-slate-300">Specialized healthcare VCs, strategic corporate investors, crossover funds, and development finance institutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CL</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Commercial Launch & Scale</h3>
                  <p className="text-slate-400">Market Entry to Growth</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$25M-$200M+ for commercial launch, market access, sales force development, and international expansion.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Regulatory approval and commercial manufacturing scale-up</li>
                    <li>• Reimbursement and market access achievement</li>
                    <li>• Sales force deployment and clinical adoption validation</li>
                    <li>• Revenue growth and market penetration demonstration</li>
                    <li>• International regulatory approval and expansion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-400">Investor Profile</h4>
                  <p className="text-slate-300">Growth equity funds, healthcare private equity, strategic acquirers, and public market preparation specialists.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">EX</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Expansion & Exit Planning</h3>
                  <p className="text-slate-400">Market Leadership to Liquidity</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$50M-$500M+ for platform expansion, acquisition strategy, and preparation for strategic exit or IPO.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Market leadership position in target therapeutic areas</li>
                    <li>• Platform expansion through product portfolio development</li>
                    <li>• Strategic acquisitions and technology integration</li>
                    <li>• Global market presence and regulatory approval</li>
                    <li>• IPO readiness or strategic acquisition execution</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Investor Profile</h4>
                  <p className="text-slate-300">Late-stage funds, pharmaceutical strategic buyers, public market investors, and healthcare consolidation specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Success Stories */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare & MedTech Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">DH</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Digital Health Platform</h3>
                  <p className="text-slate-400 text-sm">Series B Growth</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Telemedicine platform with FDA clearance needed growth capital for national expansion and payer contracting.</p>
                <p className="text-slate-300"><strong>Result:</strong> $65M Series B led by healthcare-focused VC, achieved 10x patient growth, secured major health system partnerships.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold">MD</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Medical Device Innovation</h3>
                  <p className="text-slate-400 text-sm">Strategic Partnership</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Surgical robotics company required strategic partnership for FDA approval and commercial launch funding.</p>
                <p className="text-slate-300"><strong>Result:</strong> $120M strategic investment from medical device leader, FDA approval achieved, global distribution network established.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold">BT</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Biotech Therapeutics</h3>
                  <p className="text-slate-400 text-sm">IPO Preparation</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Gene therapy company with promising Phase II data sought pre-IPO financing for pivotal trials.</p>
                <p className="text-slate-300"><strong>Result:</strong> $180M Series C from crossover funds, pivotal trial success, successful IPO with $2.1B valuation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Comprehensive Healthcare Capital Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-3">Growth & Expansion Capital</h3>
              <p className="text-slate-300 mb-4">Scale proven healthcare technologies with institutional growth capital and strategic partnerships.</p>
              <a href="/growth-capital-advisory" className="text-red-400 hover:text-red-300 underline font-semibold">
                Growth Capital Advisory →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-3">Early-Stage Healthcare</h3>
              <p className="text-slate-300 mb-4">Venture capital connections for innovative healthcare and life sciences startups.</p>
              <a href="/venture-capital-introduction" className="text-red-400 hover:text-red-300 underline font-semibold">
                Venture Capital Introduction →
              </a>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-3">Strategic Healthcare Exits</h3>
              <p className="text-slate-300 mb-4">M&A advisory for healthcare companies seeking strategic acquisitions and partnerships.</p>
              <a href="/ma-advisory" className="text-red-400 hover:text-red-300 underline font-semibold">
                M&A Advisory Services →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare & MedTech Funding FAQ
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">What regulatory considerations are critical for healthcare company funding decisions?</h3>
              <p className="text-slate-300">
                Healthcare regulatory pathways significantly impact investment risk and return profiles: (1) <strong>FDA Classification:</strong> Device classification (Class I, II, III) determines approval pathway complexity, timeline, and cost - Class III devices require extensive clinical trials while Class II may qualify for 510(k) clearance, (2) <strong>Clinical Trial Requirements:</strong> Drug and high-risk device companies require Phase I-III clinical trials costing $10M-$100M+ with 3-7 year timelines, (3) <strong>Regulatory Precedent:</strong> Predicate devices and comparable drug approvals provide regulatory pathway validation and risk reduction for investors, (4) <strong>International Approval:</strong> CE marking for European markets, Health Canada approval, and other international regulatory pathways expand addressable markets, (5) <strong>Post-Market Requirements:</strong> FDA post-market surveillance, adverse event reporting, and quality system compliance ongoing obligations. Investors prefer companies with clear regulatory strategies, experienced regulatory teams, and FDA pre-submission meeting feedback confirming approval pathways.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">How do healthcare investors evaluate clinical development risk and commercial potential?</h3>
              <p className="text-slate-300">
                Healthcare investment evaluation requires clinical and commercial risk assessment: (1) <strong>Clinical Risk Factors:</strong> Primary endpoint selection, patient population definition, clinical trial design quality, investigator experience, and competitive clinical data comparison, (2) <strong>Market Size & Access:</strong> Total addressable market analysis, reimbursement pathway assessment, payer coverage policies, and competitive landscape evaluation, (3) <strong>Team & Execution:</strong> Management team clinical and commercial experience, key opinion leader advisory relationships, clinical site networks, and regulatory consultant quality, (4) <strong>Intellectual Property:</strong> Patent protection strength, freedom-to-operate analysis, competitive IP landscape, and defensive patent positioning, (5) <strong>Commercial Strategy:</strong> Go-to-market approach, sales channel strategy, clinical evidence generation plan, and health economics demonstration. Investors conduct extensive clinical diligence including KOL interviews, competitive analysis, and regulatory expert validation before investment decisions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">What role do strategic partnerships play in healthcare company funding and development?</h3>
              <p className="text-slate-300">
                Strategic partnerships are critical for healthcare company success and attractiveness to investors: (1) <strong>Development Partnerships:</strong> Pharmaceutical and medical device companies provide capital, regulatory expertise, clinical trial capabilities, and market access in exchange for licensing rights or equity participation, (2) <strong>Commercial Partnerships:</strong> Distribution agreements with established healthcare companies provide sales channel access, customer relationships, and market validation reducing commercial execution risk, (3) <strong>Clinical Partnerships:</strong> Academic medical centers and health systems provide clinical trial sites, patient access, key opinion leader relationships, and real-world evidence generation capabilities, (4) <strong>Technology Partnerships:</strong> Integration with existing healthcare IT systems, electronic health records, and clinical workflow platforms essential for adoption and scalability, (5) <strong>Validation Benefits:</strong> Strategic partnerships provide third-party validation of technology, clinical utility, and commercial potential increasing investor confidence and improving funding terms. Healthcare companies should develop partnership strategies early in development to de-risk clinical and commercial execution while enhancing investor appeal.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">How important is reimbursement strategy for healthcare technology investment decisions?</h3>
              <p className="text-slate-300">
                Reimbursement is critical for healthcare technology commercial viability and investor returns: (1) <strong>Coverage Determination:</strong> Medicare, Medicaid, and private payer coverage policies determine market access and revenue potential - technologies without reimbursement face significant adoption barriers, (2) <strong>Health Economics:</strong> Cost-effectiveness analysis, budget impact modeling, and outcomes research demonstrate value to payers and support reimbursement decisions, (3) <strong>CPT Code Strategy:</strong> Current Procedural Terminology (CPT) code establishment enables billing and reimbursement - new technologies may require Category III codes before permanent Category I codes, (4) <strong>Value-Based Care:</strong> Shift toward value-based reimbursement models requires demonstration of improved outcomes, reduced costs, or enhanced patient experience, (5) <strong>Patient Access:</strong> Patient assistance programs, specialty pharmacy networks, and prior authorization support improve access and adoption. Healthcare companies should develop reimbursement strategies during product development, conduct health economics studies, and engage payers early to ensure market access upon regulatory approval. Investors evaluate reimbursement risk as primary factor in commercial success probability.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">What funding strategies work best for capital-intensive healthcare development programs?</h3>
              <p className="text-slate-300">
                Healthcare development requires patient capital and risk-appropriate funding strategies: (1) <strong>Staged Financing:</strong> Milestone-based funding tied to regulatory approvals, clinical trial success, and commercial milestones reducing investor risk while providing adequate capital, (2) <strong>Government Funding:</strong> NIH SBIR/STTR grants, BARDA funding for biodefense applications, and international government support provide non-dilutive capital for early development, (3) <strong>Strategic Investment:</strong> Corporate venture capital from pharmaceutical, medical device, and healthcare service companies provides capital plus strategic value through partnerships, (4) <strong>Disease Foundation Support:</strong> Patient advocacy organizations and disease foundations provide funding aligned with therapeutic area focus and patient benefit, (5) <strong>Risk Sharing:</strong> Development partnerships with risk and cost sharing, licensing agreements with upfront payments, and revenue sharing arrangements optimize capital efficiency, (6) <strong>Crossover Financing:</strong> Late-stage companies benefit from crossover funds capable of pre-IPO and public market investment providing liquidity pathway flexibility. Healthcare companies should diversify funding sources, align investor expectations with development timelines, and maintain adequate runway for clinical and regulatory execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Advance Your Healthcare Innovation?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Navigate complex healthcare funding and regulatory pathways with specialized expertise. Connect with investors who understand your therapeutic area and development timeline.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Regulatory Strategy</h3>
              <p className="text-slate-300">FDA pathway analysis and regulatory milestone optimization for funding success</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Healthcare Investor Access</h3>
              <p className="text-slate-300">Connections to specialized healthcare investors with clinical and regulatory expertise</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Strategic Partnerships</h3>
              <p className="text-slate-300">Development partnerships and commercial relationships for risk mitigation</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Healthcare Strategy Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit Healthcare Funding Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            Confidential assessment. Serving companies from preclinical through commercial stage.
          </p>
        </div>
      </section>
    </div>
  );
}