// Playwright Visual Testing Configuration for Vommuli Ventures
// Optimized for Claude Code + Playwright MCP integration

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '../tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: '../reports/html-report' }],
    ['json', { outputFile: '../reports/test-results.json' }],
    ['junit', { outputFile: '../reports/junit.xml' }]
  ],
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',
    
    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',
    
    /* Take screenshot on failure for debugging */
    screenshot: 'only-on-failure',
    
    /* Record video on failure */
    video: 'retain-on-failure',
    
    /* Timeout for each action */
    actionTimeout: 30000,
    
    /* Global test timeout */
    timeout: 60000,
  },

  /* Configure projects for major browsers and devices */
  projects: [
    // Desktop Browsers
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'firefox-desktop',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'webkit-desktop',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
    },

    // Standard Desktop Sizes
    {
      name: 'desktop-1440',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'desktop-1366',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1366, height: 768 },
      },
    },

    // Tablet Devices
    {
      name: 'ipad-pro',
      use: {
        ...devices['iPad Pro'],
      },
    },
    {
      name: 'ipad',
      use: {
        ...devices['iPad'],
      },
    },
    {
      name: 'tablet-landscape',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1024, height: 768 },
        isMobile: true,
        hasTouch: true,
      },
    },

    // Mobile Devices
    {
      name: 'iphone-12',
      use: {
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'iphone-12-pro',
      use: {
        ...devices['iPhone 12 Pro'],
      },
    },
    {
      name: 'iphone-se',
      use: {
        ...devices['iPhone SE'],
      },
    },
    {
      name: 'pixel-5',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'galaxy-s21',
      use: {
        ...devices['Galaxy S21'],
      },
    },

    // Custom Mobile Sizes
    {
      name: 'mobile-small',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 320, height: 568 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'mobile-standard',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true,
      },
    },

    // Visual Regression Testing Projects
    {
      name: 'visual-regression-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
      testMatch: '**/visual-regression/**/*.spec.js',
    },
    {
      name: 'visual-regression-tablet',
      use: {
        ...devices['iPad Pro'],
      },
      testMatch: '**/visual-regression/**/*.spec.js',
    },
    {
      name: 'visual-regression-mobile',
      use: {
        ...devices['iPhone 12'],
      },
      testMatch: '**/visual-regression/**/*.spec.js',
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  /* Global setup and teardown */
  globalSetup: require.resolve('../setup/global-setup.js'),
  globalTeardown: require.resolve('../setup/global-teardown.js'),

  /* Test configuration for visual testing */
  expect: {
    // Threshold for visual comparisons (0-1, where 0.2 = 20% difference allowed)
    threshold: 0.2,
    
    // Animation handling for consistent screenshots
    animations: 'disabled',
    
    // Font rendering consistency
    fontDisplay: 'swap',
  },

  /* Playwright MCP specific configuration */
  metadata: {
    // Project metadata for Claude Code integration
    projectName: 'Vommuli Ventures',
    businessContext: 'VC deal sourcing platform',
    targetAudience: 'Mid-tier VC firms and Series A/B startups',
    primaryKeywords: ['Series A funding', 'startup fundraising', 'investment readiness'],
    performanceTargets: {
      LCP: '2.5s',
      FID: '100ms',
      CLS: '0.1'
    },
    accessibilityLevel: 'WCAG 2.1 AA',
    supportedBrowsers: ['Chrome', 'Firefox', 'Safari'],
    mobileFirst: true,
    conversionOptimization: true
  }
});

/* Helper functions for Claude Code + Playwright MCP integration */

// Screenshot comparison with business context
async function captureBusinessCriticalScreenshots(page, testInfo) {
  const screenshots = {
    homepage: await page.screenshot({ path: `${testInfo.outputPath('homepage.png')}`, fullPage: true }),
    services: await page.screenshot({ path: `${testInfo.outputPath('services.png')}`, fullPage: true }),
    contact: await page.screenshot({ path: `${testInfo.outputPath('contact.png')}`, fullPage: true })
  };
  
  return screenshots;
}

// Performance validation for Core Web Vitals
async function validateCoreWebVitals(page) {
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        resolve(entries);
      }).observe({ entryTypes: ['paint', 'layout-shift', 'first-input'] });
    });
  });
  
  return metrics;
}

// Accessibility validation
async function validateAccessibility(page) {
  const accessibilityResults = await page.evaluate(() => {
    // Check color contrast, focus indicators, alt text, etc.
    const elements = document.querySelectorAll('*');
    const issues = [];
    
    elements.forEach(el => {
      // Color contrast validation
      const styles = getComputedStyle(el);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Focus indicator validation
      if (el.matches(':focus-visible')) {
        const outline = styles.outline;
        if (!outline || outline === 'none') {
          issues.push(`Missing focus indicator: ${el.tagName}`);
        }
      }
      
      // Alt text validation for images
      if (el.tagName === 'IMG' && !el.alt) {
        issues.push(`Missing alt text: ${el.src}`);
      }
    });
    
    return issues;
  });
  
  return accessibilityResults;
}

module.exports.captureBusinessCriticalScreenshots = captureBusinessCriticalScreenshots;
module.exports.validateCoreWebVitals = validateCoreWebVitals;
module.exports.validateAccessibility = validateAccessibility;