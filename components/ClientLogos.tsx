'use client';
import { useEffect, useState } from 'react';

const clientLogos = [
  {
    name: 'TechFlow Solutions',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'SaaS',
    funding: '$2.5M Series A'
  },
  {
    name: 'HealthTech Innovations',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Healthcare',
    funding: '$1.8M Seed'
  },
  {
    name: 'FinServe Pro',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Fintech',
    funding: '$5M Series B'
  },
  {
    name: 'Green Energy Systems',
    logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Clean Energy',
    funding: '$12M Series C'
  },
  {
    name: 'EduTech Solutions',
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Education',
    funding: '$800K Seed'
  },
  {
    name: 'LogiChain',
    logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Logistics',
    funding: '$3.2M Series A'
  },
  {
    name: 'AI Dynamics',
    logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'AI/ML',
    funding: '$8M Series A'
  },
  {
    name: 'CloudSync',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    industry: 'Cloud Services',
    funding: '$15M Series B'
  }
];

export default function ClientLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle fintech background pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="client-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#client-grid)" className="text-indigo-400" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Startups
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped these innovative companies secure funding and accelerate their growth
          </p>
        </div>

        {/* Client Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="group flex flex-col items-center p-6 rounded-2xl hover:bg-slate-50/80 transition-all duration-500 cursor-pointer border border-transparent hover:border-slate-200/50 hover:shadow-lg backdrop-blur-sm"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-md">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Fintech-style overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 rounded-xl"></div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-800 mb-1 tracking-wide">{client.name}</p>
                <p className="text-xs text-slate-500 font-medium">{client.industry}</p>
                <p className="text-xs text-emerald-600 font-bold mt-1.5 tracking-wide">{client.funding}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Success Stats - Fintech Style */}
        <div className={`mt-16 grid md:grid-cols-3 gap-8 text-center transition-all duration-700 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
          <div className="p-8 bg-gradient-to-br from-emerald-50/80 to-green-50/60 rounded-2xl border border-emerald-100/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mr-3"></div>
              <div className="text-3xl font-bold text-emerald-600">$127M+</div>
            </div>
            <div className="text-sm text-slate-600 font-medium tracking-wide">Total Capital Raised</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 rounded-2xl border border-blue-100/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3"></div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
            </div>
            <div className="text-sm text-slate-600 font-medium tracking-wide">Success Rate</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-50/80 to-indigo-50/60 rounded-2xl border border-purple-100/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mr-3"></div>
              <div className="text-3xl font-bold text-purple-600">8 Weeks</div>
            </div>
            <div className="text-sm text-slate-600 font-medium tracking-wide">Average Timeline</div>
          </div>
        </div>
      </div>
    </section>
  );
}