# Extract Complete Page Template from Figma

Extract and implement complete page templates using Untitled UI Design Kit for professional website development.

## Extract Page Template: $ARGUMENTS

Comprehensive page template extraction and implementation workflow for building premium financial services pages.

### 1. Page Template Analysis
- [ ] **Template Structure Identification**
  - Ensure local Untitled UI file is open: `/Users/vidal.porto/vommuli-website/design-system/❖ Untitled UI – PRO STYLES (v6.0) RPUrGtd6inrq (Copy).fig`
  - Use `mcp__figma__get_code` to extract complete page layout from local file
  - Use `mcp__figma__get_image` to capture full page visual reference from local file
  - Analyze page sections and component hierarchy
  - Identify responsive breakpoint behaviors

- [ ] **Content Architecture Mapping**
  - Header and navigation structure analysis
  - Main content section organization
  - Sidebar and auxiliary content identification
  - Footer structure and link architecture
  - Call-to-action placement and hierarchy

### 2. Professional Page Structure Implementation
- [ ] **Next.js Page Architecture**
  ```typescript
  // app/[template]/page.tsx
  import { Metadata } from 'next';
  import { PageHeader } from '@/components/layout/PageHeader';
  import { PageContent } from '@/components/layout/PageContent';
  import { PageSidebar } from '@/components/layout/PageSidebar';
  import { PageFooter } from '@/components/layout/PageFooter';
  
  interface PageProps {
    params: { template: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
  
  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const pageData = await getPageData(params.template);
    
    return {
      title: `${pageData.title} | Vommuli Ventures`,
      description: pageData.description,
      keywords: pageData.keywords,
      openGraph: {
        title: pageData.title,
        description: pageData.description,
        url: `https://vommuli.com/${params.template}`,
        siteName: 'Vommuli Ventures',
        images: [pageData.ogImage],
        type: 'website',
      },
      alternates: {
        canonical: `https://vommuli.com/${params.template}`,
      },
    };
  }
  
  export default async function TemplatePage({ params }: PageProps) {
    const pageData = await getPageData(params.template);
    
    return (
      <main className="min-h-screen bg-white">
        <PageHeader 
          title={pageData.title}
          subtitle={pageData.subtitle}
          breadcrumbs={pageData.breadcrumbs}
          variant="professional"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <PageContent 
              content={pageData.content}
              className="lg:col-span-3"
            />
            
            <PageSidebar 
              widgets={pageData.sidebar}
              className="lg:col-span-1"
            />
          </div>
        </div>
        
        <PageFooter variant="professional" />
      </main>
    );
  }
  ```

### 3. Professional Header Implementation
- [ ] **Navigation System**
  ```typescript
  // components/layout/PageHeader.tsx
  interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    variant?: 'default' | 'professional' | 'hero';
    backgroundImage?: string;
    actions?: React.ReactNode;
  }
  
  export function PageHeader({
    title,
    subtitle,
    breadcrumbs,
    variant = 'default',
    backgroundImage,
    actions,
  }: PageHeaderProps) {
    return (
      <header className={cn(
        'relative overflow-hidden',
        {
          'bg-gradient-to-r from-primary-600 to-primary-700': variant === 'professional',
          'bg-neutral-900': variant === 'hero',
          'bg-white border-b border-neutral-200': variant === 'default',
        }
      )}>
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover opacity-20"
            />
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {breadcrumbs && (
            <Breadcrumbs 
              items={breadcrumbs}
              className="mb-6"
              variant={variant === 'professional' ? 'light' : 'dark'}
            />
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className={cn(
                'text-4xl lg:text-5xl font-bold tracking-tight',
                {
                  'text-white': variant === 'professional' || variant === 'hero',
                  'text-neutral-900': variant === 'default',
                }
              )}>
                {title}
              </h1>
              
              {subtitle && (
                <p className={cn(
                  'mt-4 text-xl leading-relaxed',
                  {
                    'text-primary-100': variant === 'professional',
                    'text-neutral-300': variant === 'hero',
                    'text-neutral-600': variant === 'default',
                  }
                )}>
                  {subtitle}
                </p>
              )}
            </div>
            
            {actions && (
              <div className="flex items-center space-x-4">
                {actions}
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
  ```

### 4. Content Section Implementation
- [ ] **Professional Content Layout**
  ```typescript
  // components/layout/PageContent.tsx
  interface PageContentProps {
    content: PageContentData;
    className?: string;
  }
  
  export function PageContent({ content, className }: PageContentProps) {
    return (
      <article className={cn('prose prose-lg prose-neutral max-w-none', className)}>
        {content.sections.map((section, index) => {
          switch (section.type) {
            case 'hero':
              return <HeroSection key={index} {...section.props} />;
            case 'features':
              return <FeaturesGrid key={index} {...section.props} />;
            case 'testimonials':
              return <TestimonialsSection key={index} {...section.props} />;
            case 'cta':
              return <CTASection key={index} {...section.props} />;
            case 'content':
              return <ContentBlock key={index} {...section.props} />;
            case 'form':
              return <FormSection key={index} {...section.props} />;
            default:
              return null;
          }
        })}
      </article>
    );
  }
  ```

### 5. Professional Sidebar Implementation
- [ ] **Conversion-Focused Sidebar**
  ```typescript
  // components/layout/PageSidebar.tsx
  interface PageSidebarProps {
    widgets: SidebarWidget[];
    className?: string;
  }
  
  export function PageSidebar({ widgets, className }: PageSidebarProps) {
    return (
      <aside className={cn('space-y-8', className)}>
        {widgets.map((widget, index) => {
          switch (widget.type) {
            case 'contact-card':
              return <ContactCard key={index} {...widget.props} />;
            case 'download-guide':
              return <DownloadWidget key={index} {...widget.props} />;
            case 'testimonial':
              return <TestimonialCard key={index} {...widget.props} />;
            case 'related-services':
              return <RelatedServices key={index} {...widget.props} />;
            case 'consultation-booking':
              return <ConsultationWidget key={index} {...widget.props} />;
            default:
              return null;
          }
        })}
      </aside>
    );
  }
  ```

### 6. Professional Component Integration
- [ ] **Contact Card Widget**
  ```typescript
  // components/widgets/ContactCard.tsx
  export function ContactCard() {
    return (
      <Card variant="elevated" className="p-6">
        <CardHeader>
          <CardTitle className="text-lg">Ready to Get Started?</CardTitle>
          <CardDescription>
            Schedule a consultation with our funding experts
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary-600" />
            <span className="text-sm text-neutral-600">
              Call us: (555) 123-4567
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary-600" />
            <span className="text-sm text-neutral-600">
              Email: hello@vommuli.com
            </span>
          </div>
          
          <Button className="w-full" size="lg">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }
  ```

### 7. Responsive Design Implementation
- [ ] **Breakpoint Strategy**
  ```typescript
  // Responsive grid layouts
  const responsiveLayouts = {
    mobile: 'grid-cols-1',
    tablet: 'md:grid-cols-2',
    desktop: 'lg:grid-cols-3',
    wide: 'xl:grid-cols-4',
  };
  
  // Component responsive behavior
  const responsiveSpacing = {
    mobile: 'px-4 py-6',
    tablet: 'md:px-6 md:py-8',
    desktop: 'lg:px-8 lg:py-12',
  };
  ```

### 8. SEO Optimization Integration
- [ ] **Structured Data Implementation**
  ```typescript
  // Generate page-specific schema markup
  export function generatePageSchema(pageData: PageData) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageData.title,
      description: pageData.description,
      url: pageData.url,
      mainEntity: {
        '@type': 'ProfessionalService',
        name: 'Vommuli Ventures',
        description: pageData.serviceDescription,
        provider: {
          '@type': 'Organization',
          name: 'Vommuli Ventures',
          url: 'https://vommuli.com',
        },
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.label,
          item: crumb.href,
        })),
      },
    };
  }
  ```

### 9. Performance Optimization
- [ ] **Code Splitting and Lazy Loading**
  ```typescript
  // Dynamic imports for non-critical components
  const TestimonialsCarousel = dynamic(
    () => import('@/components/sections/TestimonialsCarousel'),
    { 
      ssr: false, 
      loading: () => <TestimonialsSkeleton /> 
    }
  );
  
  const InteractiveForm = dynamic(
    () => import('@/components/forms/ConsultationForm'),
    { ssr: false }
  );
  ```

### 10. Professional Visual Enhancement
- [ ] **Animation and Interaction**
  ```typescript
  // Professional micro-animations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  ```

### 11. Business Context Integration
- [ ] **Financial Services Optimization**
  - Professional color scheme throughout page
  - Trust signals prominently displayed
  - Conversion elements strategically placed
  - Industry-appropriate imagery and messaging

- [ ] **Vommuli Ventures Brand Integration**
  - Consistent brand voice and messaging
  - Professional service positioning
  - VC industry expertise demonstration
  - Client success stories integration

### 12. Quality Assurance Standards
- [ ] **Technical Validation**
  - TypeScript compilation without errors
  - Responsive behavior across all breakpoints
  - Accessibility compliance (WCAG 2.1 AA)
  - Cross-browser compatibility verification

- [ ] **Visual Quality Control**
  - Pixel-perfect implementation matching Figma
  - Professional appearance on all devices
  - Consistent design system application
  - Brand guidelines compliance

### 13. Testing and Validation
- [ ] **Comprehensive Testing Suite**
  ```bash
  # Visual regression testing
  /visual/visual-regression-test $ARGUMENTS
  
  # Responsive design validation
  /visual/responsive-design-audit $ARGUMENTS
  
  # Performance assessment
  /devops/performance-audit $ARGUMENTS
  
  # SEO compliance check
  /seo/page-optimization $ARGUMENTS
  ```

**Success Criteria:**
- Page template extracted and implemented with 100% fidelity
- Professional appearance appropriate for financial services
- Optimal performance with Core Web Vitals compliance
- Full accessibility compliance (WCAG 2.1 AA)
- SEO optimization with proper metadata and schema
- Conversion elements strategically positioned for lead generation

**Deliverable:** Production-ready page template with professional design, comprehensive functionality, and full integration with Vommuli Ventures business objectives and brand standards.