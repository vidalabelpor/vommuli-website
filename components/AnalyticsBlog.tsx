import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  href: string;
}

interface AnalyticsBlogProps {
  title?: string;
  posts?: BlogPost[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function AnalyticsBlog({
  title = "Latest blog posts",
  posts = [
    {
      title: "UX review presentations",
      excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      readTime: "5 min read",
      category: "Design",
      image: "/api/placeholder/400/240",
      href: "#"
    },
    {
      title: "Migrating to Linear 101",
      excerpt: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      readTime: "8 min read",
      category: "Product",
      image: "/api/placeholder/400/240",
      href: "#"
    },
    {
      title: "Building your API stack",
      excerpt: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      readTime: "12 min read",
      category: "Software Development",
      image: "/api/placeholder/400/240",
      href: "#"
    }
  ],
  ctaText = "View all posts",
  onCtaClick
}: AnalyticsBlogProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        
        {/* Blog posts grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col items-start">
              {/* Post image */}
              <div className="relative w-full">
                <img
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  src={post.image}
                  alt={post.title}
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="240" fill="#F3F4F6"/>
                        <path d="M200 80v80M160 120h80" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    `)}`
                  }}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              
              {/* Post content */}
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{post.readTime}</span>
                  <span className="relative z-10 rounded-full bg-purple-50 px-3 py-1.5 font-medium text-purple-600">
                    {post.category}
                  </span>
                </div>
                
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onCtaClick}
            className="rounded-lg bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}