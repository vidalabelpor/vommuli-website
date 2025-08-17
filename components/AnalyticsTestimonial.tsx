'use client';

import React from 'react';

interface TestimonialProps {
  quote?: string;
  author?: string;
  title?: string;
  company?: string;
  avatar?: string;
  companyLogos?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
}

export default function AnalyticsTestimonial({
  quote = "We've been using Untitled to kick start every new project and can't imagine working without it.",
  author = "Candice Wu",
  title = "Product Manager",
  company = "Sisyphus",
  avatar = "/api/placeholder/48/48",
  companyLogos = [
    {
      name: "Boltshift",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">Boltshift</span>
        </div>
      )
    },
    {
      name: "Lightbox",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">Lightbox</span>
        </div>
      )
    },
    {
      name: "FeatherDev",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">FeatherDev</span>
        </div>
      )
    },
    {
      name: "Spherule",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">Spherule</span>
        </div>
      )
    },
    {
      name: "GlobalBank",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">GlobalBank</span>
        </div>
      )
    },
    {
      name: "Nietzsche",
      logo: (
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-600">Nietzsche</span>
        </div>
      )
    }
  ]
}: TestimonialProps) {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company logos */}
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-medium leading-6 text-gray-600 mb-8">
            Join 4,000+ companies already growing
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex justify-center">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <figure>
            <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>"{quote}"</p>
            </blockquote>
            <figcaption className="mt-8">
              <div className="flex items-center justify-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6C13.1 6 14 6.9 14 8s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2z" fill="#9CA3AF"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="#9CA3AF" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{author}</div>
                  <div className="text-gray-600">{title}, {company}</div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}