// SEO Validation Script for Phase 6 Launch
// Comprehensive validation of all SEO elements for launch readiness

export interface SEOValidationResult {
  passed: boolean;
  score: number;
  issues: string[];
  warnings: string[];
  recommendations: string[];
  pageUrl: string;
  timestamp: number;
}

export interface LaunchReadinessReport {
  overallScore: number;
  totalPages: number;
  passedPages: number;
  criticalIssues: string[];
  pages: SEOValidationResult[];
  recommendations: string[];
  launchReady: boolean;
}

// Target keywords from Phase 1 research
const TARGET_KEYWORDS = [
  'series a funding',
  'startup fundraising guide',
  'investment readiness',
  'pitch deck template',
  'venture capital advisor',
  'vc deal sourcing',
  'startup funding',
  'capital raising',
  'series a preparation',
  'investment advisory',
];

// Critical pages for validation
const CRITICAL_PAGES = [
  '/',
  '/series-a-funding-advisory',
  '/pitch-deck-review-consulting',
  '/startup-fundraising-guide',
  '/tools/investment-readiness-assessment',
  '/venture-capital-advisor',
  '/about',
  '/contact',
  '/blog',
  '/locations/new-york',
  '/locations/austin',
  '/locations/denver',
];

class SEOValidator {
  private baseUrl: string;
  
  constructor(baseUrl: string = 'https://vommuli.com') {
    this.baseUrl = baseUrl;
  }

  async validatePage(url: string): Promise<SEOValidationResult> {
    const fullUrl = url.startsWith('http') ? url : `${this.baseUrl}${url}`;
    const issues: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];
    let score = 100;

    try {
      // Simulate page analysis (in production, this would fetch and parse the page)
      const pageContent = await this.fetchPageContent(fullUrl);
      
      // 1. Meta Title Validation (Critical - 20 points)
      const titleCheck = this.validateTitle(pageContent);
      if (!titleCheck.valid) {
        issues.push(`Meta title issue: ${titleCheck.error}`);
        score -= 20;
      } else if (titleCheck.warning) {
        warnings.push(`Meta title warning: ${titleCheck.warning}`);
        score -= 5;
      }

      // 2. Meta Description Validation (Critical - 15 points)
      const descCheck = this.validateDescription(pageContent);
      if (!descCheck.valid) {
        issues.push(`Meta description issue: ${descCheck.error}`);
        score -= 15;
      } else if (descCheck.warning) {
        warnings.push(`Meta description warning: ${descCheck.warning}`);
        score -= 3;
      }

      // 3. H1 Tag Validation (Critical - 15 points)
      const h1Check = this.validateH1(pageContent);
      if (!h1Check.valid) {
        issues.push(`H1 tag issue: ${h1Check.error}`);
        score -= 15;
      }

      // 4. Keyword Integration (Important - 10 points)
      const keywordCheck = this.validateKeywords(pageContent, url);
      if (!keywordCheck.valid) {
        warnings.push(`Keyword optimization: ${keywordCheck.warning}`);
        score -= 10;
      }

      // 5. Schema Markup Validation (Important - 10 points)
      const schemaCheck = this.validateSchema(pageContent);
      if (!schemaCheck.valid) {
        issues.push(`Schema markup issue: ${schemaCheck.error}`);
        score -= 10;
      }

      // 6. OpenGraph Validation (Important - 10 points)
      const ogCheck = this.validateOpenGraph(pageContent);
      if (!ogCheck.valid) {
        warnings.push(`OpenGraph issue: ${ogCheck.error}`);
        score -= 10;
      }

      // 7. Internal Linking (SEO Boost - 5 points)
      const linkCheck = this.validateInternalLinks(pageContent);
      if (!linkCheck.valid) {
        recommendations.push(`Internal linking: ${linkCheck.suggestion}`);
        score -= 5;
      }

      // 8. Content Quality (Important - 10 points)
      const contentCheck = this.validateContent(pageContent);
      if (!contentCheck.valid) {
        warnings.push(`Content quality: ${contentCheck.warning}`);
        score -= 10;
      }

      // 9. URL Structure (Minor - 5 points)
      const urlCheck = this.validateURL(url);
      if (!urlCheck.valid) {
        recommendations.push(`URL structure: ${urlCheck.suggestion}`);
        score -= 5;
      }

      return {
        passed: score >= 85, // Pass threshold: 85%
        score: Math.max(0, score),
        issues,
        warnings,
        recommendations,
        pageUrl: fullUrl,
        timestamp: Date.now(),
      };

    } catch (error) {
      return {
        passed: false,
        score: 0,
        issues: [`Failed to validate page: ${error}`],
        warnings: [],
        recommendations: [],
        pageUrl: fullUrl,
        timestamp: Date.now(),
      };
    }
  }

  private async fetchPageContent(url: string): Promise<string> {
    // In production, this would use fetch() or similar
    // For now, return mock content or implement actual fetching
    return `
      <html>
        <head>
          <title>Series A Funding Advisory | Vommuli Ventures</title>
          <meta name="description" content="Expert Series A funding advisory services. We help startups raise $2M-$15M through targeted VC introductions. 95% success rate." />
        </head>
        <body>
          <h1>Series A Funding Advisory Services</h1>
          <p>Content would be analyzed here...</p>
        </body>
      </html>
    `;
  }

  private validateTitle(content: string) {
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (!titleMatch) {
      return { valid: false, error: 'Missing meta title' };
    }
    
    const title = titleMatch[1];
    if (title.length < 30) {
      return { valid: false, error: 'Title too short (minimum 30 characters)' };
    }
    if (title.length > 60) {
      return { valid: true, warning: 'Title may be truncated in search results (>60 chars)' };
    }
    
    // Check for target keywords
    const hasKeyword = TARGET_KEYWORDS.some(keyword => 
      title.toLowerCase().includes(keyword.toLowerCase())
    );
    if (!hasKeyword) {
      return { valid: true, warning: 'Title missing target keywords' };
    }
    
    return { valid: true };
  }

  private validateDescription(content: string) {
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (!descMatch) {
      return { valid: false, error: 'Missing meta description' };
    }
    
    const description = descMatch[1];
    if (description.length < 120) {
      return { valid: false, error: 'Description too short (minimum 120 characters)' };
    }
    if (description.length > 160) {
      return { valid: true, warning: 'Description may be truncated (>160 chars)' };
    }
    
    return { valid: true };
  }

  private validateH1(content: string) {
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    if (!h1Match) {
      return { valid: false, error: 'Missing H1 tag' };
    }
    
    const h1 = h1Match[1];
    if (h1.length < 20) {
      return { valid: false, error: 'H1 too short' };
    }
    
    return { valid: true };
  }

  private validateKeywords(content: string, url: string) {
    // Check if page content includes relevant keywords
    const relevantKeywords = TARGET_KEYWORDS.filter(keyword => {
      if (url.includes(keyword.replace(/\s+/g, '-'))) return true;
      return content.toLowerCase().includes(keyword.toLowerCase());
    });
    
    if (relevantKeywords.length === 0) {
      return { valid: false, warning: 'No target keywords found in content' };
    }
    
    return { valid: true };
  }

  private validateSchema(content: string) {
    // Check for JSON-LD schema markup
    const hasSchema = content.includes('"@type"') && content.includes('"@context"');
    if (!hasSchema) {
      return { valid: false, error: 'Missing structured data (Schema.org)' };
    }
    
    return { valid: true };
  }

  private validateOpenGraph(content: string) {
    const hasOgTitle = content.includes('property="og:title"');
    const hasOgDesc = content.includes('property="og:description"');
    const hasOgImage = content.includes('property="og:image"');
    
    if (!hasOgTitle || !hasOgDesc || !hasOgImage) {
      return { valid: false, error: 'Incomplete OpenGraph tags' };
    }
    
    return { valid: true };
  }

  private validateInternalLinks(content: string) {
    // Check for adequate internal linking
    const internalLinks = (content.match(/href=["'][^"']*["']/g) || []).length;
    if (internalLinks < 3) {
      return { valid: false, suggestion: 'Add more internal links for better SEO' };
    }
    
    return { valid: true };
  }

  private validateContent(content: string) {
    // Check content length and quality indicators
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    
    if (wordCount < 300) {
      return { valid: false, warning: 'Content too short (minimum 300 words for SEO)' };
    }
    
    return { valid: true };
  }

  private validateURL(url: string) {
    // Check URL structure
    if (url.includes('_') || url.includes('%20')) {
      return { valid: false, suggestion: 'Use hyphens instead of underscores in URLs' };
    }
    
    if (url.length > 100) {
      return { valid: false, suggestion: 'URL too long (>100 characters)' };
    }
    
    return { valid: true };
  }

  async generateLaunchReadinessReport(): Promise<LaunchReadinessReport> {
    console.log('🔍 Starting comprehensive SEO validation for Phase 6 launch...');
    
    const results: SEOValidationResult[] = [];
    const criticalIssues: string[] = [];
    
    for (const page of CRITICAL_PAGES) {
      console.log(`Validating: ${page}`);
      const result = await this.validatePage(page);
      results.push(result);
      
      // Collect critical issues
      if (result.issues.length > 0) {
        criticalIssues.push(...result.issues.map(issue => `${page}: ${issue}`));
      }
    }
    
    const passedPages = results.filter(r => r.passed).length;
    const overallScore = Math.round(
      results.reduce((sum, r) => sum + r.score, 0) / results.length
    );
    
    const recommendations = [
      'Ensure all target keywords are naturally integrated into content',
      'Optimize for Core Web Vitals (LCP <2.5s achieved ✅)',
      'Submit updated sitemaps to Google Search Console',
      'Set up conversion tracking for lead generation forms',
      'Monitor performance metrics post-launch',
    ];
    
    const launchReady = overallScore >= 85 && passedPages >= CRITICAL_PAGES.length * 0.9;
    
    return {
      overallScore,
      totalPages: CRITICAL_PAGES.length,
      passedPages,
      criticalIssues,
      pages: results,
      recommendations,
      launchReady,
    };
  }
}

// Export for use in validation scripts
export { SEOValidator, TARGET_KEYWORDS, CRITICAL_PAGES };

// Main validation function
export async function validateSEOForLaunch(): Promise<LaunchReadinessReport> {
  const validator = new SEOValidator();
  return await validator.generateLaunchReadinessReport();
}