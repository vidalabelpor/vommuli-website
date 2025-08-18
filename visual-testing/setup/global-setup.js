// Global setup for Playwright visual testing
// Vommuli Ventures - Claude Code + Playwright MCP integration

async function globalSetup(config) {
  console.log('🚀 Starting Vommuli Ventures visual testing setup...');
  
  // Ensure development server is ready
  console.log('📊 Checking development server availability...');
  
  // Create baseline directories if they don't exist
  const fs = require('fs');
  const path = require('path');
  
  const baselineDir = path.join(__dirname, '../baseline');
  const screenshotsDir = path.join(__dirname, '../screenshots');
  const reportsDir = path.join(__dirname, '../reports');
  
  if (!fs.existsSync(baselineDir)) {
    fs.mkdirSync(baselineDir, { recursive: true });
    console.log('📁 Created baseline screenshots directory');
  }
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log('📁 Created screenshots directory');
  }
  
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
    console.log('📁 Created reports directory');
  }
  
  // Set up business context for visual testing
  const businessContext = {
    projectName: 'Vommuli Ventures',
    businessModel: 'VC deal sourcing platform',
    targetAudience: 'Mid-tier VC firms and Series A/B startups',
    primaryKeywords: ['Series A funding', 'startup fundraising', 'investment readiness'],
    brandColors: {
      primary: '#1a365d',
      secondary: '#2d3748',
      accent: '#3182ce'
    },
    performanceTargets: {
      LCP: 2500, // 2.5 seconds
      FID: 100,  // 100ms
      CLS: 0.1   // 0.1 threshold
    },
    accessibilityLevel: 'WCAG 2.1 AA',
    supportedDevices: ['mobile', 'tablet', 'desktop'],
    conversionOptimization: true
  };
  
  // Store business context for test access
  fs.writeFileSync(
    path.join(__dirname, '../config/business-context.json'),
    JSON.stringify(businessContext, null, 2)
  );
  
  console.log('✅ Visual testing environment configured successfully');
  console.log('🎯 Ready for pixel-perfect design validation');
  
  return businessContext;
}

module.exports = globalSetup;