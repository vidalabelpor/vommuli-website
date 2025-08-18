// lib/design-system.ts
// Design system utilities and integration with Figma design tokens

export interface DesignToken {
  name: string;
  value: string;
  category: 'color' | 'typography' | 'spacing' | 'shadow' | 'borderRadius';
  description?: string;
}

export interface ComponentVariant {
  name: string;
  props: Record<string, any>;
  className: string;
}

// Design tokens extracted from Figma (would be updated from Figma MCP)
export const designTokens: DesignToken[] = [
  // Colors
  { name: 'primary-50', value: '#eff6ff', category: 'color', description: 'Primary color - lightest' },
  { name: 'primary-500', value: '#3b82f6', category: 'color', description: 'Primary color - main' },
  { name: 'primary-600', value: '#2563eb', category: 'color', description: 'Primary color - dark' },
  
  // Typography
  { name: 'text-xs', value: '0.75rem', category: 'typography', description: 'Extra small text' },
  { name: 'text-sm', value: '0.875rem', category: 'typography', description: 'Small text' },
  { name: 'text-base', value: '1rem', category: 'typography', description: 'Base text size' },
  { name: 'text-lg', value: '1.125rem', category: 'typography', description: 'Large text' },
  
  // Spacing
  { name: 'spacing-1', value: '0.25rem', category: 'spacing', description: '4px spacing' },
  { name: 'spacing-2', value: '0.5rem', category: 'spacing', description: '8px spacing' },
  { name: 'spacing-4', value: '1rem', category: 'spacing', description: '16px spacing' },
  { name: 'spacing-8', value: '2rem', category: 'spacing', description: '32px spacing' },
];

// Component variants for consistent styling
export const componentVariants = {
  button: {
    primary: {
      name: 'Primary Button',
      className: 'bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      props: { variant: 'primary' }
    },
    secondary: {
      name: 'Secondary Button',
      className: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800 font-semibold px-6 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2',
      props: { variant: 'secondary' }
    },
    outline: {
      name: 'Outline Button',
      className: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      props: { variant: 'outline' }
    }
  },
  
  card: {
    default: {
      name: 'Default Card',
      className: 'bg-white rounded-xl shadow-lg border border-gray-100 p-6',
      props: { variant: 'default' }
    },
    elevated: {
      name: 'Elevated Card',
      className: 'bg-white rounded-xl shadow-2xl border border-gray-100 p-8',
      props: { variant: 'elevated' }
    },
    outlined: {
      name: 'Outlined Card',
      className: 'bg-white rounded-xl border-2 border-primary-200 p-6',
      props: { variant: 'outlined' }
    }
  },
  
  text: {
    heading1: {
      name: 'Heading 1',
      className: 'text-4xl lg:text-6xl font-bold text-gray-900 leading-tight',
      props: { as: 'h1', size: 'xl' }
    },
    heading2: {
      name: 'Heading 2',
      className: 'text-3xl lg:text-4xl font-bold text-gray-900 leading-tight',
      props: { as: 'h2', size: 'lg' }
    },
    heading3: {
      name: 'Heading 3',
      className: 'text-2xl lg:text-3xl font-bold text-gray-900 leading-tight',
      props: { as: 'h3', size: 'md' }
    },
    body: {
      name: 'Body Text',
      className: 'text-base text-gray-600 leading-relaxed',
      props: { as: 'p', size: 'base' }
    },
    bodyLarge: {
      name: 'Large Body Text',
      className: 'text-lg lg:text-xl text-gray-600 leading-relaxed',
      props: { as: 'p', size: 'lg' }
    }
  }
};

// Utility functions for design system

/**
 * Get a design token value by name
 */
export function getToken(name: string): string | undefined {
  const token = designTokens.find(token => token.name === name);
  return token?.value;
}

/**
 * Get all tokens by category
 */
export function getTokensByCategory(category: DesignToken['category']): DesignToken[] {
  return designTokens.filter(token => token.category === category);
}

/**
 * Generate CSS custom properties from design tokens
 */
export function generateCSSCustomProperties(): string {
  return designTokens
    .map(token => `  --${token.name}: ${token.value};`)
    .join('\n');
}

/**
 * Generate Tailwind CSS configuration from design tokens
 */
export function generateTailwindConfig(): Record<string, any> {
  const colors: Record<string, string> = {};
  const spacing: Record<string, string> = {};
  const fontSize: Record<string, string> = {};
  
  designTokens.forEach(token => {
    switch (token.category) {
      case 'color':
        colors[token.name] = token.value;
        break;
      case 'spacing':
        spacing[token.name.replace('spacing-', '')] = token.value;
        break;
      case 'typography':
        if (token.name.startsWith('text-')) {
          fontSize[token.name.replace('text-', '')] = token.value;
        }
        break;
    }
  });
  
  return {
    theme: {
      extend: {
        colors,
        spacing,
        fontSize
      }
    }
  };
}

/**
 * Get component variant class names
 */
export function getComponentVariant(
  component: keyof typeof componentVariants,
  variant: string
): string {
  const componentDef = componentVariants[component];
  const variantDef = componentDef?.[variant as keyof typeof componentDef];
  
  if (!variantDef) {
    console.warn(`Component variant not found: ${component}.${variant}`);
    return '';
  }
  
  return (variantDef as ComponentVariant).className;
}

/**
 * Validate if a color meets accessibility contrast requirements
 */
export function validateColorContrast(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA'
): boolean {
  // This would implement actual color contrast calculation
  // For now, returning true as placeholder
  // In production, you'd use a library like chroma-js or color-contrast
  return true;
}

/**
 * Generate component documentation from variants
 */
export function generateComponentDocumentation(): string {
  let documentation = '# Design System Components\n\n';
  
  Object.entries(componentVariants).forEach(([componentName, variants]) => {
    documentation += `## ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}\n\n`;
    
    Object.entries(variants).forEach(([variantName, variant]) => {
      const variantDef = variant as ComponentVariant;
      documentation += `### ${variantDef.name}\n`;
      documentation += `- **Variant**: ${variantName}\n`;
      documentation += `- **Classes**: \`${variantDef.className}\`\n`;
      documentation += `- **Props**: ${JSON.stringify(variantDef.props)}\n\n`;
    });
    
    documentation += '---\n\n';
  });
  
  return documentation;
}

/**
 * Responsive breakpoint utilities
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

/**
 * Get responsive classes for different breakpoints
 */
export function getResponsiveClasses(
  baseClass: string,
  breakpointClasses: Partial<Record<keyof typeof breakpoints, string>>
): string {
  let classes = baseClass;
  
  Object.entries(breakpointClasses).forEach(([breakpoint, className]) => {
    if (className) {
      classes += ` ${breakpoint}:${className}`;
    }
  });
  
  return classes;
}

/**
 * Animation and transition utilities
 */
export const animations = {
  fadeIn: 'animate-[fadeIn_0.5s_ease-in-out]',
  slideUp: 'animate-[slideUp_0.5s_ease-out]',
  scaleIn: 'animate-[scaleIn_0.3s_ease-out]',
  bounceGentle: 'animate-[bounceGentle_2s_infinite]'
} as const;

/**
 * Get animation class by name
 */
export function getAnimation(name: keyof typeof animations): string {
  return animations[name];
}

/**
 * Generate animation keyframes CSS
 */
export function generateAnimationCSS(): string {
  return `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes bounceGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
  `.trim();
}

// Export for easier importing
export default {
  designTokens,
  componentVariants,
  getToken,
  getTokensByCategory,
  getComponentVariant,
  generateCSSCustomProperties,
  generateTailwindConfig,
  generateComponentDocumentation,
  breakpoints,
  getResponsiveClasses,
  animations,
  getAnimation,
  generateAnimationCSS
};