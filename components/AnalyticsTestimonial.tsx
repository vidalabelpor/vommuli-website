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
                <img
                  className="h-12 w-12 rounded-full"
                  src={avatar}
                  alt={author}
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#E5E7EB"/>
                        <path d="M24 12C17.373 12 12 17.373 12 24s5.373 12 12 12 12-5.373 12-12S30.627 12 24 12zm0 6c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 18c-3.314 0-6.219-1.686-7.93-4.24C16.518 29.696 19.91 28 24 28s7.482 1.696 7.93 3.76C30.219 34.314 27.314 36 24 36z" fill="#9CA3AF"/>
                      </svg>
                    `)}`
                  }}
                />
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