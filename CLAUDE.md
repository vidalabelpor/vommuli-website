# Vommuli Ventures Development Guide

## Visual Development Workflow

### Design System Reference
- **Design Kit**: Untitled UI (Figma)
- **Brand**: Professional financial services aesthetic
- **Target Users**: Entrepreneurs, startup founders, investment professionals

### Design Verification Process
When making UI/UX changes, always:

1. **Screenshot Current State**
   - Use Playwright to capture desktop (1920x1080)
   - Capture mobile (375x812 iPhone)  
   - Capture tablet (768x1024 iPad)

2. **Reference Acceptance Criteria**
   - Compare against Untitled UI design system
   - Ensure professional financial services appearance
   - Maintain accessibility standards
   - Preserve SEO-optimized content structure

3. **Check for Console Errors**
   - Monitor browser console for any JavaScript errors
   - Ensure no broken functionality
   - Verify all interactive elements work

4. **Responsive Testing**
   - Test navigation collapse on mobile
   - Verify touch targets are adequate (44px minimum)
   - Ensure text remains readable across all devices

### Design Principles
- **Professional**: Clean, trustworthy, institutional-grade appearance
- **Accessible**: WCAG 2.1 AA compliance
- **Performance**: Fast loading, optimized images
- **SEO-Preserved**: Never sacrifice content structure for aesthetics

### Component Standards
- **Buttons**: Consistent hover states, adequate padding
- **Cards**: Subtle shadows, rounded corners, clear hierarchy
- **Navigation**: Clean dropdowns, clear active states
- **Forms**: Clear labels, validation states, accessibility

### Color Palette (Current)
- **Primary**: Blue gradients (#3B82F6 to #1E40AF)
- **Secondary**: Slate/Gray (#64748B to #1E293B)
- **Accent**: Various gradients per service area
- **Background**: Dark theme with subtle patterns

### Typography
- **Primary Font**: Inter (system font)
- **Headings**: Bold weights, clear hierarchy
- **Body**: Regular weight, adequate line height
- **Code**: Monospace for technical content

## SEO Requirements
- **Never remove or modify**: H1, H2, H3 tags with keywords
- **Preserve**: All meta descriptions and structured data
- **Maintain**: Local SEO elements (location pages, schema markup)
- **Keep**: All FAQ content and collapsible functionality

## Testing Requirements
Before any deployment:
- [ ] Desktop visual check (Chrome, Safari, Firefox)
- [ ] Mobile responsive verification
- [ ] Navigation functionality test
- [ ] Console error check
- [ ] Core Web Vitals validation
- [ ] Accessibility audit