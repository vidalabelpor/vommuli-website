# Extract Figma Component with Untitled UI Integration

Extract and implement Figma components using Untitled UI design system standards.

## Extract Component: $ARGUMENTS

Comprehensive component extraction and implementation workflow using Figma MCP integration.

### 1. Figma Component Analysis
- [ ] **Component Identification**
  - Use `mcp__figma__get_code` to extract component specifications
  - Use `mcp__figma__get_image` to capture visual reference
  - Analyze component variants and interactive states
  - Document design token usage and dependencies

- [ ] **Design System Integration**
  - Map Figma component to Untitled UI equivalent
  - Extract relevant design tokens (colors, typography, spacing)
  - Identify professional styling appropriate for financial services
  - Document component hierarchy and relationships

### 2. Component Implementation Strategy
- [ ] **React Component Structure**
  - Create TypeScript interfaces for component props
  - Implement variant system using class-variance-authority
  - Add accessibility features (ARIA labels, keyboard navigation)
  - Include proper error boundaries and loading states

- [ ] **Professional Styling Implementation**
  ```typescript
  // Example component structure
  interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'professional' | 'premium';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    intent?: 'primary' | 'secondary' | 'accent';
  }
  
  const componentVariants = cva(
    // Base styles from Untitled UI
    'transition-all duration-200 focus-visible:outline-none',
    {
      variants: {
        variant: {
          default: 'bg-white border border-neutral-200',
          professional: 'bg-white border border-neutral-300 shadow-lg',
          premium: 'bg-gradient-to-r from-white to-neutral-50 border border-neutral-400 shadow-xl',
        },
        // Additional variant configurations
      },
    }
  );
  ```

### 3. Design Token Integration
- [ ] **Color System Application**
  - Apply Vommuli Ventures brand colors using Untitled UI palette
  - Ensure WCAG 2.1 AA contrast compliance
  - Implement hover, focus, and active states
  - Use professional color hierarchy for financial services

- [ ] **Typography System**
  - Apply Inter font with appropriate weights
  - Implement professional hierarchy for VC audience
  - Ensure readability across all device sizes
  - Add proper line heights and letter spacing

- [ ] **Spacing and Layout**
  - Apply consistent spacing tokens from design system
  - Implement responsive behavior using Tailwind breakpoints
  - Ensure touch-friendly sizing for mobile devices
  - Apply professional padding and margin standards

### 4. Business Context Integration
- [ ] **Financial Services Optimization**
  - Professional appearance appropriate for VC clients
  - Trust-building visual elements integration
  - Conversion optimization for lead generation
  - Executive-level presentation quality

- [ ] **Vommuli Ventures Brand Application**
  - Consistent brand color usage throughout component
  - Professional messaging and copy integration
  - Industry-appropriate imagery and iconography
  - Credibility and authority visual signals

### 5. Quality Assurance Standards
- [ ] **Technical Validation**
  - TypeScript compilation without errors
  - Component props properly typed and documented
  - Accessibility testing with screen readers
  - Cross-browser compatibility verification

- [ ] **Visual Quality Control**
  - Pixel-perfect implementation matching Figma design
  - Responsive behavior across all breakpoints
  - Professional appearance on all target devices
  - Interactive states properly implemented

- [ ] **Performance Optimization**
  - Bundle size impact assessment
  - Lazy loading implementation where appropriate
  - Image optimization for web delivery
  - CSS optimization and code splitting

### 6. Documentation and Testing
- [ ] **Component Documentation**
  - Storybook stories for all component variants
  - Usage examples and best practices
  - Design system integration guidelines
  - Accessibility compliance documentation

- [ ] **Testing Implementation**
  - Unit tests for component functionality
  - Visual regression tests with Playwright
  - Accessibility testing with automated tools
  - Cross-device testing and validation

### 7. Integration with Existing System
- [ ] **Design System Consistency**
  - Verify token usage matches existing components
  - Ensure naming conventions follow project standards
  - Check component hierarchy and organization
  - Validate export structure and imports

- [ ] **SEO and Performance Impact**
  - Semantic HTML structure implementation
  - Proper heading hierarchy maintenance
  - Core Web Vitals impact assessment
  - Schema markup integration where applicable

### 8. Professional Enhancement Features
- [ ] **Advanced Interactions**
  - Sophisticated hover and focus states
  - Professional micro-animations
  - Loading states with branded styling
  - Error handling with user-friendly messaging

- [ ] **Enterprise Features**
  - Keyboard navigation support
  - Screen reader optimization
  - High contrast mode compatibility
  - Print-friendly styling (where applicable)

### 9. Figma MCP Commands for Local File Extraction
```bash
# IMPORTANT: Ensure local Untitled UI file is open in Figma Desktop App
# File: /Users/vidal.porto/vommuli-website/design-system/❖ Untitled UI – PRO STYLES (v6.0) RPUrGtd6inrq (Copy).fig

# Extract component code and styling from local file
mcp__figma__get_code nodeId="component-node-id"

# Extract component visual reference from local file
mcp__figma__get_image nodeId="component-node-id"

# Extract design tokens for component from local file
mcp__figma__get_variable_defs nodeId="component-tokens-node"

# Extract component documentation from local file
mcp__figma__get_code_connect_map nodeId="component-node-id"

# Note: All commands operate on the locally saved Untitled UI Design Kit
```

### 10. Implementation Checklist
- [ ] Component extracted from Figma with all variants
- [ ] TypeScript interfaces created with proper typing
- [ ] Professional styling applied using Untitled UI standards
- [ ] Brand colors and typography integrated consistently
- [ ] Responsive behavior implemented and tested
- [ ] Accessibility features added and validated
- [ ] Performance optimized and bundle impact assessed
- [ ] Documentation created with usage examples
- [ ] Tests implemented and passing
- [ ] Visual regression baseline established

**Success Criteria:**
- Component matches Figma design within 2px tolerance
- Professional appearance appropriate for financial services industry
- Optimal performance with Core Web Vitals compliance
- Full accessibility compliance (WCAG 2.1 AA)
- Seamless integration with existing design system
- Documentation enabling easy reuse and maintenance

**Deliverable:** Production-ready React component with professional styling, comprehensive documentation, and full integration with Vommuli Ventures design system and business requirements.