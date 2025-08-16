import type { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'AI & Tech Funding Advisory | Artificial Intelligence Startup Capital Introduction | Vommuli',
  description: 'Specialized AI and technology funding advisory services. Expert introductions to AI-focused VCs and tech investors with deep understanding of machine learning, deep tech, and artificial intelligence markets.',
  keywords: [
    'AI funding advisory',
    'artificial intelligence funding',
    'AI startup funding',
    'tech funding advisory',
    'AI venture capital',
    'machine learning funding',
    'deep tech funding',
    'AI investment advisory',
    'technology startup capital',
    'AI VC introductions',
    'artificial intelligence investors',
    'tech startup fundraising',
    'AI capital introduction',
    'deep tech investors',
    'AI seed funding',
    'AI Series A funding',
    'machine learning VC',
    'AI technology funding',
    'artificial intelligence capital',
    'tech innovation funding'
  ],
  openGraph: {
    title: 'AI & Tech Funding Advisory | Artificial Intelligence Startup Capital Introduction',
    description: 'Specialized AI and deep tech funding advisory with expert introductions to AI-focused investors and deep understanding of artificial intelligence markets.',
    url: 'https://vommuli.com/services/ai-tech-funding',
  },
};

export default function AITechFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzk5NTVGRiIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djEwaC0yVjM0aDJ6bTAtMTBWMTRoLTJWMjRoMnptLTEwIDEwdjEwSDE2VjM0aDEwem0wLTEwVjE0SDE2VjI0aDEweiIvPgo8L2c+CjwvZz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">🤖 AI & Deep Tech Funding</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Artificial Intelligence &
              <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Deep Tech Funding Advisory
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized funding advisory for AI startups and deep technology companies. Expert introductions to AI-focused VCs with deep understanding of machine learning, neural networks, computer vision, and emerging AI technologies driving market transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Launch AI Funding Process</span>
              </button>
              
              <button className="group relative px-8 py-4 border-2 border-white/30 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-900 backdrop-blur-sm hover:scale-105">
                <span className="flex items-center">
                  AI Funding Landscape Report
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Market Statistics */}
      <section className="relative py-16 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Funding Market Leadership</h2>
            <p className="text-slate-400">Leading the surge in artificial intelligence investment activity</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 text-center">
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
              <div className="text-4xl font-black text-purple-400 mb-2">+34%</div>
              <p className="text-slate-300 text-sm mb-1">AI Introduction Requests YoY</p>
              <p className="text-green-400 text-xs">Fastest growing sector</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30">
              <div className="text-4xl font-black text-indigo-400 mb-2">85+</div>
              <p className="text-slate-300 text-sm mb-1">AI-Focused VC Partners</p>
              <p className="text-violet-400 text-xs">Specialized network</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-violet-500/30">
              <div className="text-4xl font-black text-violet-400 mb-2">$1.8B</div>
              <p className="text-slate-300 text-sm mb-1">AI Capital Facilitated</p>
              <p className="text-green-400 text-xs">Last 18 months</p>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30">
              <div className="text-4xl font-black text-cyan-400 mb-2">76%</div>
              <p className="text-slate-300 text-sm mb-1">AI Startup Success Rate</p>
              <p className="text-green-400 text-xs">↑ 23% vs general tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Categories */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
              <span className="text-purple-300 text-sm font-medium">🔬 Technology Focus Areas</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI & Deep Tech Specializations
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expert funding advisory across the full spectrum of artificial intelligence and deep technology innovations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20"></div>
              <div className="relative p-8 border border-violet-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-violet-400 mb-4 text-center">Machine Learning & AI</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Core AI technologies driving automation, prediction, and intelligent decision-making across industries.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-violet-300 mb-2">Core AI</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Deep Learning</li>
                        <li>• Neural Networks</li>
                        <li>• Reinforcement Learning</li>
                        <li>• Transfer Learning</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-violet-300 mb-2">Applications</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Computer Vision</li>
                        <li>• Natural Language Processing</li>
                        <li>• Predictive Analytics</li>
                        <li>• Autonomous Systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-violet-500/20 rounded-full text-violet-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $5M - $50M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
              <div className="relative p-8 border border-indigo-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-4 text-center">AI Infrastructure & Platforms</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Foundational technologies enabling AI development, deployment, and scaling across enterprises.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-2">Infrastructure</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• MLOps Platforms</li>
                        <li>• AI Compute Infrastructure</li>
                        <li>• Model Management</li>
                        <li>• Data Pipeline Tools</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-indigo-300 mb-2">Development</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• AI Development Frameworks</li>
                        <li>• Model Training Platforms</li>
                        <li>• Edge AI Solutions</li>
                        <li>• AI Security Tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $10M - $100M
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-teal-600/20"></div>
              <div className="relative p-8 border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Emerging AI Technologies</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm text-center">Cutting-edge AI research and next-generation technologies defining the future of artificial intelligence.</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-cyan-300 mb-2">Frontier AI</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• Generative AI</li>
                        <li>• Foundation Models</li>
                        <li>• Quantum-AI Hybrid</li>
                        <li>• Neuromorphic Computing</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg">
                      <h4 className="font-semibold text-cyan-300 mb-2">Advanced Applications</h4>
                      <ul className="text-slate-300 space-y-1">
                        <li>• AI-Powered Robotics</li>
                        <li>• Synthetic Biology AI</li>
                        <li>• Climate AI Solutions</li>
                        <li>• AI Ethics & Safety</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-300 text-xs">
                    <span className="mr-2">💰</span>
                    Average Round: $2M - $25M
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investor Network */}
      <section className="relative py-24 px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Specialized Investor Network
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Direct access to the most active AI investors and technology-focused funds driving industry innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Tier-1 AI-Focused VCs</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Leading AI Funds</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Andreessen Horowitz (a16z)</li>
                      <li>• General Catalyst</li>
                      <li>• Insight Partners</li>
                      <li>• Bessemer Venture Partners</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">AI Specialists</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• AI Fund (Andrew Ng)</li>
                      <li>• Radical Ventures</li>
                      <li>• Amplify Partners</li>
                      <li>• Zetta Venture Partners</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-indigo-500/30">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Corporate AI Investors</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Tech Giants</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Google Ventures (GV)</li>
                      <li>• Microsoft Ventures</li>
                      <li>• Intel Capital</li>
                      <li>• Samsung Next</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Strategic Investors</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• NVIDIA NVentures</li>
                      <li>• Qualcomm Ventures</li>
                      <li>• Salesforce Ventures</li>
                      <li>• Oracle Cloud Ventures</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">International AI Capital</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Global AI Funds</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Atomico (Europe)</li>
                      <li>• Accel Partners</li>
                      <li>• Index Ventures</li>
                      <li>• Balderton Capital</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Regional Leaders</h4>
                    <ul className="text-slate-300 space-y-1">
                      <li>• Horizons Ventures (Asia)</li>
                      <li>• SoftBank Vision Fund</li>
                      <li>• Sequoia Capital China</li>
                      <li>• Point Nine Capital</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">AI Investment Trends 2024</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-3">Fastest Growing AI Segments</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Generative AI Applications</span>
                        <span className="text-green-400 text-sm font-medium">+127% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">AI Infrastructure Tools</span>
                        <span className="text-green-400 text-sm font-medium">+89% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">Enterprise AI Platforms</span>
                        <span className="text-green-400 text-sm font-medium">+71% YoY</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">AI Security Solutions</span>
                        <span className="text-green-400 text-sm font-medium">+56% YoY</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <h4 className="font-semibold text-indigo-400 mb-3">Average Funding by Stage</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-300">Pre-Seed AI</span>
                        <span className="text-indigo-400">$2.1M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Seed AI</span>
                        <span className="text-indigo-400">$8.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Series A AI</span>
                        <span className="text-indigo-400">$18.7M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">Series B AI</span>
                        <span className="text-indigo-400">$42.3M</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-600">
                    <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Market Opportunity</h4>
                      <p className="text-slate-300 text-sm">
                        AI market projected to reach $1.8T by 2030, with enterprise AI adoption accelerating 3x faster than general technology adoption rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <SchemaMarkup 
        type="faq" 
        data={{
          faqs: [
            {
              question: "What types of AI and tech companies do you work with for funding?",
              answer: "We work with AI startups across machine learning, deep learning, computer vision, natural language processing, AI infrastructure platforms, generative AI applications, and emerging technologies like quantum-AI hybrid systems. We support companies from pre-seed through Series C stages."
            },
            {
              question: "How many AI-focused investors are in your network?",
              answer: "Our network includes 85+ AI-specialized VC partners, including tier-1 funds like Andreessen Horowitz, AI-focused specialists like AI Fund and Radical Ventures, corporate investors like Google Ventures and Microsoft Ventures, and international AI capital across global markets."
            },
            {
              question: "What is the success rate for AI startup funding introductions?",
              answer: "Our AI and tech funding advisory achieves a 76% success rate for AI startups, which is 23% higher than general tech companies. This reflects the specialized nature of AI investments and our deep understanding of technical requirements and market dynamics."
            },
            {
              question: "What funding stages do you support for AI companies?",
              answer: "We support all AI funding stages: pre-seed ($2.1M average), seed ($8.5M average), Series A ($18.7M average), and Series B+ ($42.3M+ average). Each stage requires specialized positioning for AI-specific metrics like model performance, data requirements, and technical validation."
            },
            {
              question: "How do you evaluate AI companies for investor readiness?",
              answer: "We assess AI companies across technical metrics (model accuracy, data quality, computational efficiency), business metrics (customer validation, market traction, scalability), team expertise (AI/ML talent, technical leadership), and competitive positioning within specific AI market segments."
            }
          ]
        }}
      />
      
      {/* Service Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: "AI & Tech Funding Advisory Services",
          description: "Specialized AI and technology funding advisory services with expert introductions to AI-focused VCs and deep understanding of machine learning, deep tech, and artificial intelligence markets.",
          url: "/services/ai-tech-funding"
        }}
      />
    </div>
  );
}