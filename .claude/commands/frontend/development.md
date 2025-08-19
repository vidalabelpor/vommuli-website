# Development & Implementation Command

## Purpose
Execute website development tasks with full context of Vommuli Ventures requirements and standards.

## Context Files (Automatically Included)
- `PRD.md` - Complete project requirements and timeline
- `docs/architecture.md` - System architecture and technical patterns
- `docs/seo-strategy.md` - SEO requirements and optimization standards
- `tasks/current-phase.md` - Current development priorities
- `.cursor/rules/*.mdc` - Development standards and patterns

## Command Usage
```
/develop [task-type] [specific-requirement]
```

## Task Types
- `component` - Create new React components with SEO optimization
- `page` - Build new pages with proper metadata and schema
- `seo` - Implement SEO features and optimizations
- `performance` - Optimize for Core Web Vitals and Lighthouse scores
- `conversion` - Build lead generation and conversion systems

## Technical Requirements
- Next.js 14 with App Router and TypeScript
- Tailwind CSS with Figma design token integration
- SEO-first approach with metadata and schema markup
- Mobile-first responsive design
- 95+ Lighthouse scores across all metrics

## Development Standards
- Use Server Components by default, Client Components only when necessary
- Implement comprehensive error boundaries and loading states
- Use Zod for all data validation and type safety
- Structure: exports → components → helpers → types
- Follow Next.js 14 App Router conventions strictly

## Performance Targets
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Lighthouse scores: 95+ across all metrics
- Mobile performance: 90+ mobile speed score
- Accessibility: WCAG 2.1 AA compliance

## SEO Requirements
- Every page must include optimized metadata with target keywords
- Implement structured data (JSON-LD schema markup)
- Use semantic HTML with proper heading hierarchy
- Include alt text for all images with keyword optimization
- Maintain consistent internal linking strategy
