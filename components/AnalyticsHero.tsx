import React from 'react';

interface AnalyticsHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function AnalyticsHero({
  title = "Beautiful analytics to grow smarter",
  subtitle = "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
  ctaText = "Get started"
}: AnalyticsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          {/* CTA Button */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
            >
              {ctaText}
            </a>
          </div>
          
          {/* Mock analytics dashboard preview */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-white p-8 shadow-2xl ring-1 ring-gray-900/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-8 w-8 rounded bg-purple-600" />
                    <span className="text-lg font-semibold text-gray-900">Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-20 rounded bg-gray-100" />
                    <div className="h-8 w-20 rounded bg-gray-100" />
                  </div>
                </div>
                
                {/* Mock chart area */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="h-64 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-32 w-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg opacity-20 mb-4" />
                        <p className="text-sm text-gray-500">Interactive Analytics Dashboard</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Metrics cards */}
                    {[
                      { label: "Total Revenue", value: "$52,456", change: "+12.5%" },
                      { label: "Active Users", value: "2,456", change: "+8.2%" },
                      { label: "Conversion Rate", value: "3.24%", change: "+0.4%" }
                    ].map((metric, index) => (
                      <div key={index} className="rounded-lg bg-gray-50 p-4">
                        <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                        <div className="flex items-baseline justify-between">
                          <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                          <p className="text-sm font-medium text-green-600">{metric.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}