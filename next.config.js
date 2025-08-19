/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production environment settings
  env: {
    CUSTOM_KEY: 'production',
    ANALYTICS_ID: 'G-GCD27WFY2P',
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react', '@/components', '@/lib'],
    // ppr: true, // Partial Prerendering - requires Next.js canary
    // optimizeCss: true, // CSS optimization - requires critters dependency
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // Advanced optimizations for production launch
    optimizeCss: false, // Disabled until dependencies resolved
    webVitalsAttribution: ['CLS', 'FCP', 'FID', 'LCP', 'TTFB'],
    serverComponentsExternalPackages: ['lighthouse'],
    optimizeServerReact: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'], // Prioritize AVIF for better compression
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    dangerouslyAllowSVG: false, // Improved security
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Optimized device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false, // Ensure all images are optimized
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true, // Changed to true for better caching
  reactStrictMode: true,
  swcMinify: true,
  
  // Performance optimizations
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  // Optimized Bundle configuration for performance
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Simplified code splitting optimization
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 0
          },
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 1
          }
        }
      };
    }
    return config;
  },
  // Remove console.logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enhanced security and performance headers for LCP optimization
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Enhanced performance headers for LCP
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400, stale-if-error=86400',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Critical resource hints
          {
            key: 'Link',
            value: '</fonts/inter.woff2>; rel=preload; as=font; type=font/woff2; crossorigin',
          },
        ],
      },
      // Optimized static asset caching
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Optimized image caching
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
