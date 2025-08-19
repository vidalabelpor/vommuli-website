// Converted to Server Component for LCP optimization
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-primary-50 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Series A Funding Experts{' '}
              <span className="text-gradient">$500M+ Raised</span>{' '}
              for Clients
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Premium VC deal sourcing and capital introduction services for Series A-C startups. Connect with mid-tier venture capital firms in NYC, Austin, Denver, and Miami.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">Targeted Investor Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">500+ Investor Network</span>
              </div>
            </div>

            {/* CTA Buttons - Optimized for Conversion */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/tools/investment-readiness-assessment" className="btn-primary group inline-flex items-center justify-center">
                Get Your Investment Readiness Score
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="btn-outline inline-flex items-center justify-center">
                Schedule Expert Consultation
              </a>
            </div>

            {/* Value Proposition Enhancement */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Success-based pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>85% success rate</span>
                </div>
              </div>
            </div>

            {/* Simplified Trust Indicators */}
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4">Recently funded companies include:</p>
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="h-8 w-20 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs text-blue-800 font-medium">AI SaaS</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$18M Series A</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-24 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-xs text-green-800 font-medium">HealthTech</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$42M Series B</p>
                </div>
                <div className="text-center">
                  <div className="h-8 w-20 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-xs text-purple-800 font-medium">Climate</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">$25M Series A</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600">📈 67% Introduction-to-Term-Sheet Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Simplified Main Visual */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-primary-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Capital Growth</h3>
                  <p className="text-primary-100">Connect • Grow • Succeed</p>
                </div>
              </div>
              
              {/* Simplified Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">$2M+</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">500+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}