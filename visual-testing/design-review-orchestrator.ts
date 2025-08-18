// visual-testing/design-review-orchestrator.ts
import { designReview, DesignReviewConfig, DesignReviewResult } from './automated-design-review'
import { figmaValidation, FigmaValidationConfig } from './figma-validation'
import { playwrightTesting } from './playwright-integration'

export interface OrchestrationConfig {
  projectName: string
  pages: PageConfig[]
  figmaComponents?: FigmaComponentConfig[]
  reviewSettings: ReviewSettings
  notifications: NotificationConfig
}

export interface PageConfig {
  name: string
  url: string
  priority: 'high' | 'medium' | 'low'
  reviewFrequency: 'continuous' | 'daily' | 'weekly'
  figmaNodeId?: string
  customSelectors?: Record<string, string>
}

export interface FigmaComponentConfig {
  name: string
  nodeId: string
  implementationUrl: string
  componentSelector: string
  toleranceThreshold: number
}

export interface ReviewSettings {
  passingThreshold: number
  autoFix: boolean
  skipCategories: string[]
  customChecks: CustomCheck[]
}

export interface CustomCheck {
  name: string
  selector: string
  assertion: string
  severity: 'critical' | 'major' | 'minor'
}

export interface NotificationConfig {
  webhookUrl?: string
  emailRecipients: string[]
  slackChannel?: string
  alertOnFailure: boolean
}

export interface OrchestrationResult {
  projectName: string
  timestamp: string
  overallStatus: 'passed' | 'failed' | 'warning'
  totalPages: number
  passedPages: number
  failedPages: number
  averageScore: number
  pageResults: PageResult[]
  figmaValidationResults?: FigmaValidationResult[]
  summary: ResultSummary
}

export interface PageResult {
  page: PageConfig
  designReview: DesignReviewResult
  figmaValidation?: any
  customChecks: CustomCheckResult[]
}

export interface FigmaValidationResult {
  component: FigmaComponentConfig
  validation: any
  passed: boolean
}

export interface CustomCheckResult {
  check: CustomCheck
  passed: boolean
  message: string
}

export interface ResultSummary {
  criticalIssues: number
  majorIssues: number
  minorIssues: number
  topRecommendations: string[]
  performanceAverage: number
  accessibilityAverage: number
}

export class DesignReviewOrchestrator {
  /**
   * Run comprehensive design review orchestration
   */
  async orchestrateReview(config: OrchestrationConfig): Promise<OrchestrationResult> {
    console.log(`🚀 Starting design review orchestration for ${config.projectName}...`)

    const startTime = Date.now()
    const pageResults: PageResult[] = []
    const figmaResults: FigmaValidationResult[] = []

    // Sort pages by priority for execution order
    const sortedPages = this.sortPagesByPriority(config.pages)

    // Process pages in priority order
    for (const page of sortedPages) {
      console.log(`📄 Processing page: ${page.name} (${page.priority} priority)`)
      
      try {
        const pageResult = await this.processPage(page, config)
        pageResults.push(pageResult)
      } catch (error) {
        console.error(`❌ Failed to process ${page.name}:`, error)
        pageResults.push({
          page,
          designReview: {
            overallScore: 0,
            passed: false,
            categories: [],
            recommendations: [],
            criticalIssues: [{
              severity: 'critical',
              category: 'orchestration',
              description: `Page processing failed: ${error}`,
              suggestion: 'Check page accessibility and configuration'
            }],
            warnings: [],
            timestamp: new Date().toISOString()
          },
          customChecks: []
        })
      }
    }

    // Process Figma component validations if configured
    if (config.figmaComponents && config.figmaComponents.length > 0) {
      console.log(`🎨 Processing ${config.figmaComponents.length} Figma components...`)
      
      for (const component of config.figmaComponents) {
        try {
          const figmaResult = await this.processFigmaComponent(component)
          figmaResults.push(figmaResult)
        } catch (error) {
          console.error(`❌ Failed to validate Figma component ${component.name}:`, error)
        }
      }
    }

    // Generate orchestration result
    const result = this.generateOrchestrationResult(
      config,
      pageResults,
      figmaResults,
      startTime
    )

    // Send notifications if configured
    if (config.notifications.alertOnFailure && result.overallStatus === 'failed') {
      await this.sendFailureNotifications(result, config.notifications)
    }

    console.log(`✅ Orchestration completed for ${config.projectName} in ${Date.now() - startTime}ms`)
    return result
  }

  /**
   * Process individual page with comprehensive review
   */
  private async processPage(
    page: PageConfig,
    config: OrchestrationConfig
  ): Promise<PageResult> {
    // Configure design review
    const reviewConfig: DesignReviewConfig = {
      url: page.url,
      pageName: page.name,
      figmaNodeId: page.figmaNodeId,
      reviewCategories: this.getEnabledCategories(config.reviewSettings)
    }

    // Run design review
    const designReview = await designReview.reviewDesign(reviewConfig)

    // Run custom checks if configured
    const customChecks = await this.runCustomChecks(page, config.reviewSettings.customChecks)

    // Run Figma validation if node ID provided
    let figmaValidation = null
    if (page.figmaNodeId) {
      try {
        const figmaConfig: FigmaValidationConfig = {
          nodeId: page.figmaNodeId,
          componentName: page.name,
          implementationUrl: page.url,
          componentSelector: 'body',
          toleranceThreshold: 95
        }
        figmaValidation = await figmaValidation.validateImplementation(figmaConfig)
      } catch (error) {
        console.warn(`⚠️ Figma validation failed for ${page.name}:`, error)
      }
    }

    return {
      page,
      designReview,
      figmaValidation,
      customChecks
    }
  }

  /**
   * Process Figma component validation
   */
  private async processFigmaComponent(
    component: FigmaComponentConfig
  ): Promise<FigmaValidationResult> {
    const validation = await figmaValidation.validateImplementation(component)
    
    return {
      component,
      validation,
      passed: validation.passed
    }
  }

  /**
   * Run custom checks for a page
   */
  private async runCustomChecks(
    page: PageConfig,
    customChecks: CustomCheck[]
  ): Promise<CustomCheckResult[]> {
    const results: CustomCheckResult[] = []

    for (const check of customChecks) {
      try {
        // This would run the actual custom check logic
        // For now, implementing a mock check
        const passed = await this.executeCustomCheck(page.url, check)
        
        results.push({
          check,
          passed,
          message: passed ? 'Check passed' : `Check failed: ${check.assertion}`
        })
      } catch (error) {
        results.push({
          check,
          passed: false,
          message: `Check execution failed: ${error}`
        })
      }
    }

    return results
  }

  /**
   * Execute individual custom check
   */
  private async executeCustomCheck(url: string, check: CustomCheck): Promise<boolean> {
    // This would integrate with Playwright to run actual checks
    // For now, returning mock result
    console.log(`🔍 Running custom check: ${check.name} on ${url}`)
    
    // Simulate check execution
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Return mock result (90% chance of passing)
    return Math.random() > 0.1
  }

  /**
   * Sort pages by priority for processing order
   */
  private sortPagesByPriority(pages: PageConfig[]): PageConfig[] {
    const priorityOrder = { high: 3, medium: 2, low: 1 }
    return pages.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
  }

  /**
   * Get enabled review categories based on settings
   */
  private getEnabledCategories(settings: ReviewSettings) {
    const defaultCategories = [
      { name: 'visual-hierarchy', weight: 0.25, enabled: true },
      { name: 'brand-consistency', weight: 0.20, enabled: true },
      { name: 'responsive-design', weight: 0.20, enabled: true },
      { name: 'accessibility', weight: 0.15, enabled: true },
      { name: 'performance', weight: 0.10, enabled: true },
      { name: 'user-experience', weight: 0.10, enabled: true }
    ]

    return defaultCategories.filter(cat => !settings.skipCategories.includes(cat.name))
  }

  /**
   * Generate comprehensive orchestration result
   */
  private generateOrchestrationResult(
    config: OrchestrationConfig,
    pageResults: PageResult[],
    figmaResults: FigmaValidationResult[],
    startTime: number
  ): OrchestrationResult {
    const passedPages = pageResults.filter(r => r.designReview.passed).length
    const failedPages = pageResults.length - passedPages
    const averageScore = pageResults.reduce((sum, r) => sum + r.designReview.overallScore, 0) / pageResults.length

    // Determine overall status
    let overallStatus: 'passed' | 'failed' | 'warning' = 'passed'
    if (failedPages > 0) {
      overallStatus = failedPages > pageResults.length / 2 ? 'failed' : 'warning'
    }

    // Generate summary
    const summary = this.generateSummary(pageResults)

    return {
      projectName: config.projectName,
      timestamp: new Date().toISOString(),
      overallStatus,
      totalPages: pageResults.length,
      passedPages,
      failedPages,
      averageScore: Math.round(averageScore),
      pageResults,
      figmaValidationResults: figmaResults.length > 0 ? figmaResults : undefined,
      summary
    }
  }

  /**
   * Generate result summary with key metrics
   */
  private generateSummary(pageResults: PageResult[]): ResultSummary {
    const allIssues = pageResults.flatMap(r => 
      [...r.designReview.criticalIssues, ...r.designReview.warnings]
    )

    const criticalIssues = allIssues.filter(i => i.severity === 'critical').length
    const majorIssues = allIssues.filter(i => i.severity === 'major').length
    const minorIssues = allIssues.filter(i => i.severity === 'minor').length

    // Extract top recommendations
    const allRecommendations = pageResults.flatMap(r => r.designReview.recommendations)
    const topRecommendations = allRecommendations
      .filter(r => r.priority === 'high')
      .slice(0, 5)
      .map(r => r.description)

    // Calculate category averages
    const performanceScores = pageResults.map(r => 
      r.designReview.categories.find(c => c.category === 'performance')?.score || 0
    )
    const accessibilityScores = pageResults.map(r => 
      r.designReview.categories.find(c => c.category === 'accessibility')?.score || 0
    )

    const performanceAverage = performanceScores.reduce((sum, score) => sum + score, 0) / performanceScores.length
    const accessibilityAverage = accessibilityScores.reduce((sum, score) => sum + score, 0) / accessibilityScores.length

    return {
      criticalIssues,
      majorIssues,
      minorIssues,
      topRecommendations,
      performanceAverage: Math.round(performanceAverage),
      accessibilityAverage: Math.round(accessibilityAverage)
    }
  }

  /**
   * Send failure notifications
   */
  private async sendFailureNotifications(
    result: OrchestrationResult,
    notifications: NotificationConfig
  ): Promise<void> {
    const message = this.generateNotificationMessage(result)

    // Send email notifications
    for (const email of notifications.emailRecipients) {
      await this.sendEmailNotification(email, message)
    }

    // Send Slack notification if configured
    if (notifications.slackChannel) {
      await this.sendSlackNotification(notifications.slackChannel, message)
    }

    // Send webhook notification if configured
    if (notifications.webhookUrl) {
      await this.sendWebhookNotification(notifications.webhookUrl, result)
    }
  }

  /**
   * Generate notification message
   */
  private generateNotificationMessage(result: OrchestrationResult): string {
    return `
🚨 Design Review Alert: ${result.projectName}

Status: ${result.overallStatus.toUpperCase()}
Overall Score: ${result.averageScore}%
Pages: ${result.passedPages}/${result.totalPages} passed

Critical Issues: ${result.summary.criticalIssues}
Major Issues: ${result.summary.majorIssues}

Top Recommendations:
${result.summary.topRecommendations.map(rec => `• ${rec}`).join('\n')}

Review completed at: ${result.timestamp}
    `.trim()
  }

  /**
   * Send email notification (placeholder)
   */
  private async sendEmailNotification(email: string, message: string): Promise<void> {
    console.log(`📧 Sending email notification to ${email}`)
    console.log(message)
    // In real implementation, would integrate with email service
  }

  /**
   * Send Slack notification (placeholder)
   */
  private async sendSlackNotification(channel: string, message: string): Promise<void> {
    console.log(`💬 Sending Slack notification to ${channel}`)
    console.log(message)
    // In real implementation, would integrate with Slack API
  }

  /**
   * Send webhook notification (placeholder)
   */
  private async sendWebhookNotification(webhookUrl: string, result: OrchestrationResult): Promise<void> {
    console.log(`🔗 Sending webhook notification to ${webhookUrl}`)
    console.log(JSON.stringify(result, null, 2))
    // In real implementation, would send HTTP POST to webhook
  }

  /**
   * Setup continuous monitoring
   */
  async setupContinuousMonitoring(config: OrchestrationConfig): Promise<void> {
    console.log(`⏰ Setting up continuous monitoring for ${config.projectName}`)

    // Filter pages that need continuous monitoring
    const continuousPages = config.pages.filter(p => p.reviewFrequency === 'continuous')
    const dailyPages = config.pages.filter(p => p.reviewFrequency === 'daily')
    const weeklyPages = config.pages.filter(p => p.reviewFrequency === 'weekly')

    // Setup continuous monitoring (every 4 hours)
    if (continuousPages.length > 0) {
      setInterval(async () => {
        await this.runMonitoringCycle(config, continuousPages)
      }, 4 * 60 * 60 * 1000) // 4 hours
    }

    // Setup daily monitoring
    if (dailyPages.length > 0) {
      setInterval(async () => {
        await this.runMonitoringCycle(config, dailyPages)
      }, 24 * 60 * 60 * 1000) // 24 hours
    }

    // Setup weekly monitoring
    if (weeklyPages.length > 0) {
      setInterval(async () => {
        await this.runMonitoringCycle(config, weeklyPages)
      }, 7 * 24 * 60 * 60 * 1000) // 7 days
    }

    console.log(`✅ Continuous monitoring setup complete`)
  }

  /**
   * Run monitoring cycle for specific pages
   */
  private async runMonitoringCycle(
    config: OrchestrationConfig,
    pages: PageConfig[]
  ): Promise<void> {
    console.log(`🔄 Running monitoring cycle for ${pages.length} pages...`)

    try {
      const monitoringConfig = {
        ...config,
        pages
      }

      const result = await this.orchestrateReview(monitoringConfig)

      if (result.overallStatus === 'failed') {
        console.log(`❌ Monitoring detected failures in ${config.projectName}`)
        await this.sendFailureNotifications(result, config.notifications)
      } else {
        console.log(`✅ Monitoring cycle completed successfully for ${config.projectName}`)
      }

    } catch (error) {
      console.error(`❌ Monitoring cycle failed for ${config.projectName}:`, error)
    }
  }

  /**
   * Generate orchestration configuration template
   */
  generateConfigTemplate(projectName: string): OrchestrationConfig {
    return {
      projectName,
      pages: [
        {
          name: 'Homepage',
          url: 'https://vommuli.com',
          priority: 'high',
          reviewFrequency: 'continuous',
          figmaNodeId: 'homepage-figma-id'
        },
        {
          name: 'Series A Advisory',
          url: 'https://vommuli.com/series-a-funding-advisory',
          priority: 'high',
          reviewFrequency: 'daily',
          figmaNodeId: 'series-a-page-figma-id'
        }
      ],
      figmaComponents: [
        {
          name: 'PrimaryButton',
          nodeId: 'button-figma-id',
          implementationUrl: 'https://vommuli.com',
          componentSelector: '.btn-primary',
          toleranceThreshold: 95
        }
      ],
      reviewSettings: {
        passingThreshold: 80,
        autoFix: false,
        skipCategories: [],
        customChecks: [
          {
            name: 'CTA Button Presence',
            selector: '.cta-button',
            assertion: 'element.visible',
            severity: 'major'
          }
        ]
      },
      notifications: {
        emailRecipients: ['dev-team@vommuli.com'],
        alertOnFailure: true
      }
    }
  }
}

// Export singleton instance
export const reviewOrchestrator = new DesignReviewOrchestrator()