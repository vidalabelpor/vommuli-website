# CLAUDE CODE CUSTOM COMMANDS - VOMMULI VENTURES

This directory contains custom commands for Claude Code integration with the Vommuli Ventures website development project.

## Command Organization

### Frontend Commands (`frontend/`)
- **component.md** - Generate SEO-optimized React components
- **page-creation.md** - Create complete Next.js pages with optimization

### Figma Integration Commands (`figma/`)
- **extract-component.md** - Extract Figma components with Untitled UI integration
- **sync-design-tokens.md** - Synchronize design tokens from Figma design system
- **extract-page-template.md** - Extract complete page templates from Figma

### Visual Testing Commands (`visual/`)
- **visual-regression-test.md** - Automated visual testing with Playwright MCP
- **figma-implementation-sync.md** - Figma-to-code validation and synchronization
- **responsive-design-audit.md** - Cross-device visual validation and testing

### Design Review Agents (`agents/`)
- **design-review-agent.md** - Automated comprehensive design review and feedback

### SEO Commands (`seo/`)
- **page-optimization.md** - Comprehensive SEO analysis and optimization

### DevOps Commands (`devops/`)
- **performance-audit.md** - Performance analysis and Core Web Vitals optimization

### Backend Commands (`backend/`)
- (Future commands for API development)

## How to Use These Commands

### In Claude Code Terminal
```bash
# Generate a new component
/frontend/component HeroSection

# Extract Figma component with Untitled UI
/figma/extract-component HeroSection

# Sync design tokens from Figma
/figma/sync-design-tokens entire-system

# Extract complete page template
/figma/extract-page-template services-landing

# Create a new optimized page
/frontend/page-creation services/series-a-preparation

# Visual regression testing
/visual/visual-regression-test homepage

# Figma-to-implementation validation
/visual/figma-implementation-sync HeroSection

# Responsive design audit
/visual/responsive-design-audit services/series-a-preparation

# Automated design review
/agents/design-review-agent entire-site

# Run SEO audit on a page
/seo/page-optimization homepage

# Perform performance audit
/devops/performance-audit entire-site
```

### Command Syntax
Commands use `$ARGUMENTS` placeholder for dynamic values:
- Single argument: `/command-name argument-value`
- Multiple arguments: `/command-name "arg1 arg2 arg3"`

## Command Integration with Cursor & Visual Workflow

These commands are designed to work seamlessly with Cursor AI and Playwright MCP:

1. **Cursor generates code** using AI completions and chat
2. **Claude Code executes commands** for complex, multi-file operations
3. **Playwright MCP provides visual feedback** through automated screenshot comparison
4. **Figma MCP enables design synchronization** for pixel-perfect implementation
5. **All tools share context** through consistent file structure and documentation

### Visual Workflow Integration
- **Design Phase:** Figma MCP extracts design specifications and components
- **Implementation Phase:** Cursor provides rapid code generation with design context
- **Validation Phase:** Playwright MCP captures screenshots for visual comparison
- **Iteration Phase:** Claude Code analyzes differences and implements improvements
- **Review Phase:** Automated design review agents provide comprehensive feedback

## Business Context Integration

All commands include Vommuli Ventures specific requirements:
- **SEO optimization** for target keywords
- **Conversion optimization** for lead generation
- **Performance standards** for Core Web Vitals
- **Brand compliance** for professional financial services

## Development Workflow

### Typical Command Usage Pattern
1. **Planning Phase:** Use architecture and strategy commands
2. **Development Phase:** Use component and page creation commands
3. **Optimization Phase:** Use SEO and performance audit commands
4. **Testing Phase:** Use quality assurance and testing commands

### Command Chaining
Commands can be chained for complex workflows:
```bash
# Complete page development workflow
/frontend/page-creation services/pitch-deck-optimization
/seo/page-optimization services/pitch-deck-optimization
/devops/performance-audit services/pitch-deck-optimization
```

## Customization Guidelines

### Adding New Commands
1. Create command file in appropriate subdirectory
2. Follow existing template structure
3. Include business context and requirements
4. Add success criteria and deliverables
5. Update this README with command description

### Command Template Structure
```markdown
# Command Title

Brief description of command purpose.

## Objective for: $ARGUMENTS

Detailed explanation of what the command will do.

### 1. Section One
- [ ] Checklist item
- [ ] Another checklist item

### 2. Section Two
Implementation details and requirements.

**Deliverable:** Clear success criteria and expected output.
```

## Integration with Project Standards

### Code Quality Standards
- All commands enforce TypeScript strict mode
- SEO optimization is mandatory for all pages
- Performance targets must be met
- Accessibility compliance required

### Business Requirements
- Professional tone for financial services audience
- Conversion optimization for lead generation
- Brand consistency across all implementations
- Measurable business impact focus

### Technical Standards
- Next.js 14 App Router patterns
- Tailwind CSS utility-first approach
- Mobile-first responsive design
- Core Web Vitals optimization

## Command Maintenance

### Regular Updates
- Review commands monthly for effectiveness
- Update based on development learnings
- Incorporate new business requirements
- Optimize for emerging best practices

### Performance Monitoring
- Track command usage patterns
- Measure development velocity impact
- Gather feedback from development team
- Refine commands based on results

This command library accelerates development while ensuring consistency with Vommuli Ventures' business objectives and technical standards.