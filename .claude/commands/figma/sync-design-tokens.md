# Synchronize Design Tokens from Figma

Automated synchronization of design tokens from Untitled UI Design Kit to maintain design system consistency.

## Design Token Sync for: $ARGUMENTS

Comprehensive design token extraction and synchronization workflow for maintaining professional design system consistency.

### 1. Token Extraction Strategy
- [ ] **Color System Synchronization**
  - Extract primary brand colors from Untitled UI
  - Synchronize professional color palette for financial services
  - Update semantic color tokens (success, warning, error)
  - Maintain WCAG 2.1 AA contrast ratios

- [ ] **Typography Token Updates**
  - Extract font family definitions and weights
  - Synchronize font size scales and hierarchy
  - Update line height and letter spacing tokens
  - Maintain professional typography standards

- [ ] **Spacing and Layout Tokens**
  - Extract spacing scale from design system
  - Synchronize margin and padding standards
  - Update grid and layout measurements
  - Maintain consistent spacing ratios

### 2. Local Figma MCP Token Extraction Commands
```bash
# IMPORTANT: Ensure local Untitled UI file is open in Figma Desktop App
# File: /Users/vidal.porto/vommuli-website/design-system/❖ Untitled UI – PRO STYLES (v6.0) RPUrGtd6inrq (Copy).fig

# Extract comprehensive design variable definitions from local file
mcp__figma__get_variable_defs nodeId="design-system-variables"

# Extract color system specifically from local file
mcp__figma__get_variable_defs nodeId="color-variables-node"

# Extract typography system from local file
mcp__figma__get_variable_defs nodeId="typography-variables-node"

# Extract spacing and effects from local file
mcp__figma__get_variable_defs nodeId="spacing-effects-variables"

# Extract component-specific tokens from local file
mcp__figma__get_variable_defs nodeId="component-tokens-node"

# Note: All extractions use the locally saved Untitled UI Design Kit
```

### 3. Professional Color System Implementation
- [ ] **Primary Brand Colors**
  ```typescript
  // Extracted and adapted for Vommuli Ventures
  export const brandColors = {
    primary: {
      50: '#eff6ff',   // Light backgrounds
      100: '#dbeafe',  // Subtle highlights  
      500: '#3b82f6',  // Primary interactions
      600: '#2563eb',  // Hover states
      900: '#1e3a8a',  // Deep brand color
    },
    
    // Professional neutral system for financial services
    neutral: {
      50: '#f8fafc',   // Page backgrounds
      100: '#f1f5f9',  // Card backgrounds
      200: '#e2e8f0',  // Borders and dividers
      500: '#64748b',  // Body text
      700: '#334155',  // Headings
      900: '#0f172a',  // Primary text
    },
  }
  ```

- [ ] **Semantic Color Application**
  ```typescript
  export const semanticColors = {
    success: {
      light: '#dcfce7',  // Success backgrounds
      base: '#16a34a',   // Success indicators
      dark: '#15803d',   // Success emphasis
    },
    
    warning: {
      light: '#fef3c7',  // Warning backgrounds
      base: '#d97706',   // Warning indicators
      dark: '#92400e',   // Warning emphasis
    },
    
    error: {
      light: '#fee2e2',  // Error backgrounds
      base: '#dc2626',   // Error indicators
      dark: '#991b1b',   // Error emphasis
    },
  }
  ```

### 4. Typography System Synchronization
- [ ] **Font Family Standardization**
  ```typescript
  export const fontFamilies = {
    primary: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
    heading: ['Inter', 'system-ui', 'sans-serif'],
  }
  ```

- [ ] **Professional Typography Scale**
  ```typescript
  export const fontSizes = {
    xs: '0.75rem',     // 12px - Small labels
    sm: '0.875rem',    // 14px - Body small
    base: '1rem',      // 16px - Body text
    lg: '1.125rem',    // 18px - Large body
    xl: '1.25rem',     // 20px - Small headings
    '2xl': '1.5rem',   // 24px - Medium headings
    '3xl': '1.875rem', // 30px - Large headings
    '4xl': '2.25rem',  // 36px - Hero headings
    '5xl': '3rem',     // 48px - Display text
  }
  ```

- [ ] **Professional Text Weights**
  ```typescript
  export const fontWeights = {
    light: 300,      // Subtle text
    normal: 400,     // Body text
    medium: 500,     // Emphasis
    semibold: 600,   // Headings
    bold: 700,       // Strong emphasis
    extrabold: 800,  // Display text
  }
  ```

### 5. Spacing System Implementation
- [ ] **Consistent Spacing Scale**
  ```typescript
  export const spacing = {
    px: '1px',
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
  }
  ```

- [ ] **Professional Layout Measurements**
  ```typescript
  export const layout = {
    maxWidth: {
      sm: '24rem',     // 384px
      md: '28rem',     // 448px
      lg: '32rem',     // 512px
      xl: '36rem',     // 576px
      '2xl': '42rem',  // 672px
      '7xl': '80rem',  // 1280px
    },
    
    borderRadius: {
      sm: '0.125rem',  // 2px
      base: '0.25rem', // 4px
      md: '0.375rem',  // 6px
      lg: '0.5rem',    // 8px
      xl: '0.75rem',   // 12px
      '2xl': '1rem',   // 16px
    },
  }
  ```

### 6. Effect and Shadow System
- [ ] **Professional Shadow Tokens**
  ```typescript
  export const shadows = {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  }
  ```

### 7. Token Integration Workflow
- [ ] **Automated Token Generation**
  ```bash
  # Generate TypeScript token files
  node scripts/generate-tokens.js
  
  # Update Tailwind CSS configuration
  node scripts/update-tailwind-config.js
  
  # Generate CSS custom properties
  node scripts/generate-css-variables.js
  
  # Validate token consistency
  node scripts/validate-tokens.js
  ```

- [ ] **CSS Custom Properties Generation**
  ```css
  :root {
    /* Color tokens */
    --color-primary-50: 239 246 255;
    --color-primary-500: 59 130 246;
    --color-primary-900: 30 58 138;
    
    /* Typography tokens */
    --font-family-primary: 'Inter', system-ui, sans-serif;
    --font-size-base: 1rem;
    --font-weight-semibold: 600;
    
    /* Spacing tokens */
    --spacing-4: 1rem;
    --spacing-8: 2rem;
    --spacing-12: 3rem;
  }
  ```

### 8. Tailwind CSS Configuration Update
- [ ] **Theme Integration**
  ```javascript
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: designTokens.colors,
        fontFamily: designTokens.fontFamily,
        fontSize: designTokens.fontSize,
        fontWeight: designTokens.fontWeight,
        spacing: designTokens.spacing,
        borderRadius: designTokens.borderRadius,
        boxShadow: designTokens.shadows,
      },
    },
  }
  ```

### 9. Quality Assurance and Validation
- [ ] **Token Consistency Validation**
  - Verify all tokens follow naming conventions
  - Check color contrast ratios meet WCAG standards
  - Validate typography scales are mathematically consistent
  - Ensure spacing follows logical progression

- [ ] **Professional Standards Compliance**
  - Financial services industry color appropriateness
  - Executive-level typography professionalism
  - Conservative design token selection
  - Brand consistency across all tokens

### 10. Documentation and Maintenance
- [ ] **Token Documentation Generation**
  ```typescript
  // Auto-generate token documentation
  interface TokenDocumentation {
    name: string;
    value: string;
    usage: string;
    accessibility: string;
    variants?: string[];
  }
  
  export const tokenDocs: TokenDocumentation[] = [
    {
      name: 'primary-600',
      value: '#2563eb',
      usage: 'Primary brand color for buttons and links',
      accessibility: 'WCAG AA compliant on white backgrounds',
      variants: ['hover:primary-700', 'focus:primary-500'],
    },
  ];
  ```

- [ ] **Change Log Maintenance**
  - Document all token changes with rationale
  - Maintain version history for rollback capability
  - Track business impact of design token updates
  - Schedule regular synchronization intervals

### 11. Performance and Bundle Impact
- [ ] **Token Optimization**
  - Tree-shake unused tokens in production
  - Optimize CSS custom property usage
  - Minimize token bundle size impact
  - Implement lazy loading for non-critical tokens

### 12. Integration Testing
- [ ] **Visual Regression Testing**
  - Validate token changes don't break existing components
  - Test across all target devices and browsers
  - Verify accessibility compliance maintained
  - Check professional appearance standards

**Success Criteria:**
- All design tokens successfully extracted and synchronized
- Professional appearance maintained across all components
- Brand consistency achieved throughout application
- Performance impact minimized and optimized
- Accessibility standards maintained (WCAG 2.1 AA)
- Documentation complete and up-to-date

**Deliverable:** Comprehensive, synchronized design token system that maintains professional financial services presentation while enabling consistent, scalable design implementation across the entire Vommuli Ventures website.