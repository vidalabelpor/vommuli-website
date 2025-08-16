import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare & MedTech Funding Advisory | Medical Device & Biotech Capital',
  description: 'Specialized healthcare and medical technology funding advisory for medical devices, biotechnology, digital health, and life sciences companies. Expert navigation of FDA approval and reimbursement challenges.',
  keywords: [
    'healthcare growth capital advisory',
    'medtech venture capital introduction',
    'medical device funding consultant',
    'biotechnology investment advisory',
    'digital health funding',
    'life sciences capital raising',
    'FDA approval funding strategy',
    'healthcare M&A advisory',
    'medical technology investment',
    'pharmaceutical funding advisory'
  ],
  openGraph: {
    title: 'Healthcare & MedTech Funding Advisory | Vommuli Ventures',
    description: 'Specialized healthcare and medical technology funding advisory for regulated sector companies.',
    url: 'https://vommuli.com/healthcare-medtech-funding',
  },
};

export default function HealthcareMedtechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Healthcare & MedTech <span className="text-red-400">Funding Advisory</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Navigate complex healthcare and medical technology funding through FDA approval, clinical validation, and reimbursement challenges. We connect regulated sector innovators with specialized life sciences investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Healthcare Capital Session
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download MedTech Funding Guide
            </button>
          </div>
        </div>
      </section>

      {/* Healthcare Investment Landscape */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare & Life Sciences Investment Landscape 2024-2025
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 p-6 rounded-xl border border-red-500/30 text-center">
              <h3 className="text-3xl font-bold text-red-400 mb-2">$81B</h3>
              <p className="text-slate-300 text-sm">Global healthcare venture funding in 2024, with 43% in digital health</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 p-6 rounded-xl border border-pink-500/30 text-center">
              <h3 className="text-3xl font-bold text-pink-400 mb-2">$47B</h3>
              <p className="text-slate-300 text-sm">Biotech M&A transaction volume, with premium valuations for FDA-approved assets</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-600/20 to-orange-600/20 p-6 rounded-xl border border-rose-500/30 text-center">
              <h3 className="text-3xl font-bold text-rose-400 mb-2">8-12 Years</h3>
              <p className="text-slate-300 text-sm">Average medical device development timeline from concept to market</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-xl border border-orange-500/30 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">67%</h3>
              <p className="text-slate-300 text-sm">Healthcare investors requiring FDA breakthrough designation or fast track status</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Healthcare Investment Thesis & Sector Priorities</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Medical Technology & Devices</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Minimally Invasive Surgery:</strong> Robotics, AI-guided procedures, single-use devices</li>
                  <li>• <strong>Cardiovascular Technology:</strong> Structural heart devices, rhythm management, diagnostics</li>
                  <li>• <strong>Orthopedic Innovation:</strong> Joint replacement, spine technology, sports medicine</li>
                  <li>• <strong>Diagnostic Imaging:</strong> AI-enhanced radiology, point-of-care ultrasound, molecular imaging</li>
                  <li>• <strong>Surgical Technology:</strong> Visualization systems, energy platforms, navigation systems</li>
                  <li>• <strong>Implantable Devices:</strong> Neuromodulation, cardiac devices, drug delivery systems</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Digital Health & Therapeutics</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Digital Therapeutics:</strong> FDA-approved software for disease treatment and management</li>
                  <li>• <strong>Remote Patient Monitoring:</strong> Chronic disease management, post-acute care</li>
                  <li>• <strong>AI Diagnostics:</strong> Medical imaging AI, clinical decision support, predictive analytics</li>
                  <li>• <strong>Telehealth Platforms:</strong> Virtual care delivery, specialty consultations, mental health</li>
                  <li>• <strong>Wearable Technology:</strong> Continuous monitoring, biomarker tracking, lifestyle intervention</li>
                  <li>• <strong>Healthcare Analytics:</strong> Population health, real-world evidence, clinical trial optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-red-400 mb-4">Biotechnology & Life Sciences</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>• <strong>Gene & Cell Therapy:</strong> CAR-T, gene editing, regenerative medicine</li>
                  <li>• <strong>Precision Medicine:</strong> Biomarker-based therapies, companion diagnostics</li>
                  <li>• <strong>Immuno-Oncology:</strong> Cancer immunotherapy, combination treatments</li>
                  <li>• <strong>Rare Disease Therapy:</strong> Orphan drugs, enzyme replacement, antisense</li>
                  <li>• <strong>CNS & Neurology:</strong> Alzheimer's, Parkinson's, psychiatric disorders</li>
                  <li>• <strong>Infectious Disease:</strong> Antivirals, vaccines, antimicrobial resistance</li>
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
            Complex Healthcare Funding Challenges & Regulatory Navigation
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">FDA Regulatory Pathway & Clinical Validation</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare companies must navigate complex FDA approval processes requiring extensive clinical evidence, regulatory expertise, and significant capital investment with uncertain outcomes and extended timelines.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Regulatory Complexity Factors:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Device Classification:</strong> Class I (510k exempt), Class II (510k), Class III (PMA) requiring different approval pathways</li>
                    <li><strong>Clinical Trial Requirements:</strong> IDE studies, pivotal trials, post-market surveillance obligations</li>
                    <li><strong>Quality Systems:</strong> ISO 13485, FDA QSR compliance, and manufacturing validation</li>
                    <li><strong>International Harmonization:</strong> CE marking, Health Canada, PMDA alignment strategies</li>
                    <li><strong>Digital Health Software:</strong> SaMD classification, cybersecurity, and AI/ML guidance compliance</li>
                    <li><strong>Combination Products:</strong> Drug-device, biologic-device regulatory coordination</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Clinical Trial Funding & Risk Management</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Clinical trials require $10M-$100M+ investment with high failure rates (90% for drugs, 65% for devices). Managing clinical risk while attracting investor capital requires sophisticated strategy and risk mitigation.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Clinical Development Strategy:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Phase-gated funding tied to clinical milestones and regulatory feedback</li>
                    <li>Adaptive trial design and biomarker-driven patient selection</li>
                    <li>Real-world evidence generation and post-market surveillance planning</li>
                    <li>Clinical risk insurance and milestone-based investor protections</li>
                    <li>International regulatory strategy and clinical site optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Reimbursement Strategy & Market Access</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare technologies must demonstrate clinical and economic value to payers (CMS, private insurers, international systems) for sustainable commercial success, requiring health economics expertise and payer engagement.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Market Access Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Health Technology Assessment:</strong> Clinical effectiveness, cost-effectiveness, budget impact modeling</li>
                    <li><strong>Coding & Coverage:</strong> CPT/HCPCS codes, LCD/NCD development, payer policy advocacy</li>
                    <li><strong>Value-Based Contracts:</strong> Risk-sharing agreements, outcomes-based pricing, bundled payments</li>
                    <li><strong>Real-World Evidence:</strong> Comparative effectiveness, patient-reported outcomes, economic outcomes</li>
                    <li><strong>International Pricing:</strong> Reference pricing, health technology appraisal, parallel importation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-700/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Intellectual Property & Competitive Landscape</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  <strong>The Challenge:</strong> Healthcare IP involves complex patent landscapes, freedom-to-operate analysis, and competitive intelligence requiring specialized legal expertise and strategic patent portfolio development.
                </p>
                <div className="space-y-2 text-slate-300">
                  <p><strong>IP Strategy Components:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Patent landscape analysis and freedom-to-operate assessment</li>
                    <li>Regulatory exclusivity optimization (orphan drug, pediatric, breakthrough)</li>
                    <li>Trade secret protection for manufacturing processes and algorithms</li>
                    <li>Competitive intelligence and IP monitoring systems</li>
                    <li>Licensing and collaboration agreement structuring</li>
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
              <h3 className="text-2xl font-bold text-red-400 mb-6">Phase 1: Regulatory Strategy & Clinical Development Planning (Weeks 1-6)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Regulatory Pathway Optimization</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• FDA pre-submission meetings and breakthrough device designation pursuit</li>
                    <li>• Clinical trial protocol design and endpoint optimization</li>
                    <li>• Quality management system implementation and ISO certification</li>
                    <li>• International regulatory strategy and harmonization planning</li>
                    <li>• Digital health software classification and cybersecurity compliance</li>
                    <li>• Post-market surveillance and real-world evidence strategy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Clinical Development Strategy</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Clinical trial design optimization and biomarker strategy</li>
                    <li>• Investigator network development and site selection</li>
                    <li>• Patient recruitment and retention strategy development</li>
                    <li>• Clinical data management and statistical analysis planning</li>
                    <li>• Clinical risk mitigation and adaptive trial design</li>
                    <li>• Regulatory communication and submission timeline optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600/10 to-rose-600/10 p-8 rounded-xl border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Phase 2: Market Access & Reimbursement Strategy (Weeks 7-12)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Health Economics & Outcomes Research</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Health technology assessment and cost-effectiveness modeling</li>
                    <li>• Budget impact analysis and economic outcome projections</li>
                    <li>• Comparative effectiveness research and real-world evidence generation</li>
                    <li>• Patient-reported outcome measures and quality of life assessment</li>
                    <li>• Pharmacoeconomic modeling and value proposition development</li>
                    <li>• Payer landscape analysis and coverage strategy optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Payer Engagement & Coverage Strategy</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• CPT/HCPCS coding strategy and AMA/CMS engagement</li>
                    <li>• Local coverage determination (LCD) development and advocacy</li>
                    <li>• Private payer policy development and medical director engagement</li>
                    <li>• Value-based contract design and risk-sharing agreements</li>
                    <li>• International pricing and reimbursement strategy coordination</li>
                    <li>• Patient access programs and financial assistance optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-600/10 to-orange-600/10 p-8 rounded-xl border-l-4 border-rose-500">
              <h3 className="text-2xl font-bold text-rose-400 mb-6">Phase 3: Healthcare Investor Targeting & Deal Execution (Weeks 13-26)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Specialized Healthcare Investor Identification</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Life sciences VC firms with regulatory and clinical expertise</li>
                    <li>• Healthcare-focused growth equity and private equity targeting</li>
                    <li>• Strategic corporate investors and pharmaceutical partnerships</li>
                    <li>• Family offices and foundations with healthcare investment focus</li>
                    <li>• Government funding programs (NIH SBIR, BARDA, DoD) coordination</li>
                    <li>• International healthcare investors and cross-border opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Healthcare Due Diligence & Deal Structuring</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Clinical data review and regulatory pathway validation</li>
                    <li>• IP portfolio analysis and freedom-to-operate assessment</li>
                    <li>• Market access and reimbursement viability evaluation</li>
                    <li>• Manufacturing and supply chain scalability assessment</li>
                    <li>• Regulatory compliance and quality system audit coordination</li>
                    <li>• Milestone-based deal structuring and risk allocation optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Funding Stages */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Healthcare Funding Stages & Investment Requirements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">ED</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Early Development Funding</h3>
                  <p className="text-slate-400">Concept to Clinical POC</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$500K-$10M over 18-36 months for prototype development, preclinical studies, and regulatory pathway establishment. Focus on technical feasibility and initial clinical validation.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Prototype development and performance validation</li>
                    <li>• Preclinical studies and biocompatibility testing</li>
                    <li>• FDA pre-submission and regulatory pathway confirmation</li>
                    <li>• Initial clinical study design and CRO selection</li>
                    <li>• IP portfolio development and patent filing strategy</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-400">Investor Profile</h4>
                  <p className="text-slate-300">Seed VCs with healthcare expertise, angel investors with medical device background, SBIR/STTR grants, and university technology transfer offices.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CV</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Clinical Validation Funding</h3>
                  <p className="text-slate-400">First-in-Human to Pivotal</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$10M-$50M over 24-48 months for clinical trials, regulatory submissions, and market access preparation. Emphasis on clinical safety and efficacy demonstration.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-pink-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• IDE approval and first-in-human study initiation</li>
                    <li>• Phase I safety and preliminary efficacy data</li>
                    <li>• Breakthrough device designation pursuit</li>
                    <li>• Pivotal trial protocol FDA alignment</li>
                    <li>• Health economics and reimbursement strategy development</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-pink-400">Investor Profile</h4>
                  <p className="text-slate-300">Healthcare-focused VCs, life sciences growth equity, strategic investors, and corporate venture arms with clinical development expertise.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">CA</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Commercial Acceleration</h3>
                  <p className="text-slate-400">Regulatory Approval to Scale</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$25M-$100M+ over 36-60 months for regulatory submission, commercial launch, and market penetration. Focus on sales execution and market access.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• FDA approval and CE marking completion</li>
                    <li>• Commercial manufacturing scale-up</li>
                    <li>• Sales force development and training</li>
                    <li>• Reimbursement coverage and coding establishment</li>
                    <li>• International regulatory approvals and market entry</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-400">Investor Profile</h4>
                  <p className="text-slate-300">Growth equity funds, healthcare private equity, strategic acquirers, and international expansion partners.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">ME</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Market Expansion & Exit</h3>
                  <p className="text-slate-400">Platform Building to Liquidity</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-400">Funding Range & Timeline</h4>
                  <p className="text-slate-300">$50M-$500M+ for acquisition strategy, international expansion, and platform development leading to IPO or strategic exit within 3-5 years.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Key Milestones</h4>
                  <ul className="text-slate-300 space-y-1">
                    <li>• Market leadership position establishment</li>
                    <li>• Strategic acquisitions and technology integration</li>
                    <li>• International market penetration and regulatory approvals</li>
                    <li>• Pipeline expansion and product portfolio development</li>
                    <li>• IPO readiness or strategic exit preparation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400">Investor Profile</h4>
                  <p className="text-slate-300">Late-stage growth funds, healthcare private equity, strategic buyers, and public market investors.</p>
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
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">CV</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Cardiovascular Device</h3>
                  <p className="text-slate-400 text-sm">Series C Clinical Funding</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Structural heart device company needed $40M for pivotal IDE trial and FDA PMA submission preparation.</p>
                <p className="text-slate-300"><strong>Result:</strong> $45M Series C from specialized cardiology investors, breakthrough device designation, successful pivotal trial enrollment.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white font-bold">DH</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Digital Therapeutics</h3>
                  <p className="text-slate-400 text-sm">Growth Equity Partnership</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> FDA-approved digital therapeutic for addiction treatment required $30M for commercial launch and payer engagement.</p>
                <p className="text-slate-300"><strong>Result:</strong> $35M growth equity, CMS coverage decision, 50+ health system partnerships, 200% revenue growth.</p>
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold">BT</div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-white">Biotech Platform</h3>
                  <p className="text-slate-400 text-sm">Strategic Acquisition</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300"><strong>Challenge:</strong> Gene therapy platform with promising Phase II data sought strategic partnership for late-stage development and commercialization.</p>
                <p className="text-slate-300"><strong>Result:</strong> $850M strategic acquisition by Big Pharma, orphan drug designation, accelerated development timeline.</p>
              </div>
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
              <h3 className="text-xl font-bold text-red-400 mb-3">What regulatory considerations affect healthcare company valuations?</h3>
              <p className="text-slate-300">
                Regulatory status significantly impacts healthcare valuations and investor risk assessment: (1) <strong>FDA Pathway Clarity:</strong> Companies with clear regulatory pathway (510k vs PMA) and FDA feedback command premium valuations due to reduced regulatory risk, (2) <strong>Clinical Data Quality:</strong> Breakthrough device designation, fast track status, or orphan drug designation can increase valuations by 25-50% due to accelerated pathways, (3) <strong>Approval Probability:</strong> Post-pivotal trial companies achieve 3-5x valuation premiums vs pre-clinical stage due to significantly higher approval probability, (4) <strong>International Strategy:</strong> CE marking, Health Canada approval, and global regulatory strategy add 20-30% valuation premium for international market access, (5) <strong>Reimbursement Readiness:</strong> Clear coding pathways, health economics data, and payer engagement can improve valuations by 15-25%. Regulatory setbacks or FDA complete response letters can reduce valuations by 30-60%, making regulatory strategy critical for investor confidence and exit planning.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">How do clinical trial failures affect funding and investor confidence?</h3>
              <p className="text-slate-300">
                Clinical trial outcomes are the primary value inflection points for healthcare companies: (1) <strong>Risk Mitigation:</strong> Investors use milestone-based funding, escrow structures, and clinical risk insurance to manage trial failure risk, (2) <strong>Adaptive Design:</strong> Adaptive trial protocols, biomarker-driven patient selection, and interim analyses help reduce failure risk and enable course correction, (3) <strong>Portfolio Approach:</strong> Experienced healthcare investors maintain diversified portfolios with 70-80% expected failure rates built into return models, (4) <strong>Resurrection Strategy:</strong> Failed trials can sometimes be salvaged through post-hoc analysis, different endpoints, or subgroup identification for follow-on studies, (5) <strong>Asset Value:</strong> Even failed programs retain value through IP, regulatory data, and manufacturing capabilities that can be monetized through partnerships or acquisitions. Companies should prepare investors for clinical risk through detailed risk-benefit analysis, alternative development pathways, and clear go/no-go criteria for each trial phase.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">What role does reimbursement strategy play in healthcare investment decisions?</h3>
              <p className="text-slate-300">
                Reimbursement strategy is critical for commercial viability and investor confidence: (1) <strong>Payer Landscape:</strong> Understanding CMS coverage decisions, private payer policies, and international reimbursement systems is essential for market access planning, (2) <strong>Health Economics:</strong> Cost-effectiveness analysis, budget impact modeling, and real-world evidence generation support payer value propositions, (3) <strong>Coding Strategy:</strong> Obtaining appropriate CPT/HCPCS codes and ensuring adequate payment rates through AMA and CMS engagement, (4) <strong>Value-Based Care:</strong> Developing outcomes-based contracts, risk-sharing agreements, and bundled payment models aligned with payer incentives, (5) <strong>Patient Access:</strong> Patient assistance programs, copay support, and financial counseling to ensure patient access despite coverage gaps. Companies with clear reimbursement pathways and payer support achieve higher valuations and faster commercial adoption. Early payer engagement during clinical development improves coverage probability and accelerates market access post-approval.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">How do strategic partnerships affect healthcare company funding and valuation?</h3>
              <p className="text-slate-300">
                Strategic partnerships provide validation, resources, and risk mitigation for healthcare companies: (1) <strong>Pharmaceutical Partnerships:</strong> Big Pharma collaborations provide clinical expertise, regulatory guidance, and commercial infrastructure access, often including upfront payments, milestones, and royalties, (2) <strong>Hospital Systems:</strong> Health system partnerships provide clinical sites, patient access, and real-world evidence generation while validating clinical utility, (3) <strong>Technology Integration:</strong> Partnerships with established medical device or digital health companies accelerate market access and customer adoption, (4) <strong>Distribution Agreements:</strong> Commercial partnerships with established sales organizations reduce go-to-market risk and capital requirements, (5) <strong>Research Collaborations:</strong> Academic medical center partnerships enhance clinical credibility and provide access to key opinion leaders and patient populations. Strategic partnerships can reduce funding requirements by 30-50% while providing market validation that increases valuations by 20-40%. However, partnership terms must be carefully structured to preserve company value and strategic flexibility for future financing and exit opportunities.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-3">What are the key differences between medical device and biotech funding strategies?</h3>
              <p className="text-slate-300">
                Medical device and biotech companies require different funding approaches due to distinct development pathways and risk profiles: (1) <strong>Timeline & Risk:</strong> Medical devices typically require 5-8 years and $20-50M to market vs biotechs requiring 10-15 years and $100-500M+ with higher clinical failure rates, (2) <strong>Regulatory Pathway:</strong> Devices follow 510k (substantial equivalence) or PMA (clinical trials) vs drugs requiring extensive Phase I-III clinical trials with safety and efficacy endpoints, (3) <strong>Market Access:</strong> Devices focus on hospital purchasing decisions and procedural adoption vs drugs requiring payer coverage, formulary access, and prescriber education, (4) <strong>IP Strategy:</strong> Device IP emphasizes design patents, trade secrets, and first-mover advantage vs drug IP focusing on composition patents and regulatory exclusivity, (5) <strong>Manufacturing:</strong> Device manufacturing involves materials, components, and assembly vs biotech requiring specialized biologics manufacturing and cold chain distribution. Device companies often achieve earlier cash flow generation and profitability, while biotech companies require larger funding rounds but offer higher upside potential. Investors typically prefer devices for lower risk and biotechs for higher return potential within diversified healthcare portfolios.
              </p>
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

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Advance Your Healthcare Innovation?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Navigate complex healthcare funding challenges with specialized expertise. Connect with healthcare investors who understand regulatory pathways, clinical validation, and market access requirements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Regulatory Strategy</h3>
              <p className="text-slate-300">FDA pathway optimization and clinical development planning</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Healthcare Investor Access</h3>
              <p className="text-slate-300">Specialized life sciences investors with domain expertise</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-red-400 mb-2">Market Access Strategy</h3>
              <p className="text-slate-300">Reimbursement planning and payer engagement coordination</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Healthcare Capital Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Submit MedTech Funding Inquiry
            </button>
          </div>
          
          <p className="text-slate-400 mt-8">
            Confidential assessment of regulatory pathway and funding strategy. All development stages welcome.
          </p>
        </div>
      </section>
    </div>
  );
}