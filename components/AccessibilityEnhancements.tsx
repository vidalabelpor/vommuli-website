'use client';

// Accessibility Enhancements Component for WCAG 2.1 AA Compliance
// Addresses issues identified in Phase 6 QA testing

import { useEffect } from 'react';

export default function AccessibilityEnhancements() {
  useEffect(() => {
    // Add skip links to the page
    const addSkipLinks = () => {
      const skipLinksContainer = document.createElement('div');
      skipLinksContainer.setAttribute('aria-label', 'Skip navigation links');
      skipLinksContainer.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
        <a href="#footer" class="skip-link">Skip to footer</a>
      `;
      
      // Insert at the beginning of the body
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    };

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      // Add ARIA labels to form inputs that don't have them
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input) => {
        const element = input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        
        // Add aria-label if missing and no associated label
        if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
          const label = document.querySelector(`label[for="${element.id}"]`);
          if (!label && 'placeholder' in element && element.placeholder) {
            element.setAttribute('aria-label', element.placeholder);
          }
        }
        
        // Add aria-required for required fields
        if (element.hasAttribute('required') && !element.getAttribute('aria-required')) {
          element.setAttribute('aria-required', 'true');
        }
        
        // Add aria-invalid for form validation
        if (element.classList.contains('form-error') && !element.getAttribute('aria-invalid')) {
          element.setAttribute('aria-invalid', 'true');
        }
      });

      // Enhance radio button and checkbox groups
      const radioGroups = document.querySelectorAll('input[type="radio"]');
      const processedGroups = new Set();
      
      radioGroups.forEach((radio) => {
        const element = radio as HTMLInputElement;
        const groupName = element.name;
        
        if (!processedGroups.has(groupName)) {
          processedGroups.add(groupName);
          
          // Find all radios in this group
          const groupRadios = document.querySelectorAll(`input[type="radio"][name="${groupName}"]`);
          const firstRadio = groupRadios[0] as HTMLInputElement;
          
          // Add role="radiogroup" to parent container
          const parentContainer = firstRadio.closest('fieldset, .form-group, .radio-group');
          if (parentContainer && !parentContainer.getAttribute('role')) {
            parentContainer.setAttribute('role', 'radiogroup');
          }
        }
      });
    };

    // Enhance navigation accessibility
    const enhanceNavigationAccessibility = () => {
      // Add main landmarks
      const main = document.querySelector('main');
      if (main && !main.getAttribute('id')) {
        main.setAttribute('id', 'main-content');
      }
      
      // Add navigation landmark
      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('id')) {
        nav.setAttribute('id', 'navigation');
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }
      
      // Add footer landmark
      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('id')) {
        footer.setAttribute('id', 'footer');
        footer.setAttribute('role', 'contentinfo');
      }
      
      // Enhance mobile menu accessibility
      const mobileMenuButton = document.querySelector('.mobile-menu-button, [aria-expanded]');
      if (mobileMenuButton && !mobileMenuButton.getAttribute('aria-label')) {
        mobileMenuButton.setAttribute('aria-label', 'Toggle navigation menu');
      }
    };

    // Enhance button accessibility
    const enhanceButtonAccessibility = () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        // Add type="button" if not specified
        if (!button.getAttribute('type')) {
          button.setAttribute('type', 'button');
        }
        
        // Add aria-label for icon-only buttons
        if (button.textContent?.trim() === '' && !button.getAttribute('aria-label')) {
          const icon = button.querySelector('svg, .icon');
          if (icon) {
            button.setAttribute('aria-label', 'Button');
          }
        }
      });
    };

    // Enhance image accessibility
    const enhanceImageAccessibility = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add empty alt for decorative images
        if (!img.getAttribute('alt') && (
          img.classList.contains('decorative') ||
          img.closest('.decoration') ||
          img.getAttribute('role') === 'presentation'
        )) {
          img.setAttribute('alt', '');
        }
        
        // Warn about missing alt text in development
        if (process.env.NODE_ENV === 'development' && !img.getAttribute('alt')) {
          console.warn('Image missing alt text:', img.src);
        }
      });
    };

    // Enhance heading hierarchy
    const enhanceHeadingHierarchy = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      
      headings.forEach((heading, index) => {
        const currentLevel = parseInt(heading.tagName.charAt(1));
        
        // Check for proper heading hierarchy
        if (index > 0 && currentLevel > previousLevel + 1) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Heading hierarchy skip detected: ${heading.tagName} after h${previousLevel}`, heading);
          }
        }
        
        previousLevel = currentLevel;
      });
    };

    // Add live region for dynamic content
    const addLiveRegion = () => {
      if (!document.querySelector('#live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.id = 'live-region';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        document.body.appendChild(liveRegion);
      }
    };

    // Announce dynamic content changes
    const announceToScreenReader = (message: string) => {
      const liveRegion = document.querySelector('#live-region');
      if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
          liveRegion.textContent = '';
        }, 1000);
      }
    };

    // Monitor form submissions for accessibility announcements
    const enhanceFormSubmissionAccessibility = () => {
      const forms = document.querySelectorAll('form');
      forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
          announceToScreenReader('Form submitted. Please wait for confirmation.');
        });
      });
    };

    // Enhance focus management for modals
    const enhanceFocusManagement = () => {
      const modals = document.querySelectorAll('.modal, [role="dialog"]');
      modals.forEach((modal) => {
        const modalElement = modal as HTMLElement;
        
        // Add focus trap functionality
        const focusableElements = modalElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
          const firstFocusable = focusableElements[0] as HTMLElement;
          const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          modalElement.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
              if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                  lastFocusable.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastFocusable) {
                  firstFocusable.focus();
                  e.preventDefault();
                }
              }
            }
            
            if (e.key === 'Escape') {
              const closeButton = modalElement.querySelector('.modal-close, [aria-label*="close"]');
              if (closeButton) {
                (closeButton as HTMLElement).click();
              }
            }
          });
        }
      });
    };

    // Initialize all accessibility enhancements
    const initializeAccessibility = () => {
      addSkipLinks();
      enhanceFormAccessibility();
      enhanceNavigationAccessibility();
      enhanceButtonAccessibility();
      enhanceImageAccessibility();
      enhanceHeadingHierarchy();
      addLiveRegion();
      enhanceFormSubmissionAccessibility();
      enhanceFocusManagement();
    };

    // Run on initial load
    initializeAccessibility();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver((mutations) => {
      let shouldReinitialize = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'FORM' || 
                  element.querySelector('form') || 
                  element.tagName === 'IMG' || 
                  element.querySelector('img') ||
                  element.classList.contains('modal') ||
                  element.querySelector('.modal')) {
                shouldReinitialize = true;
              }
            }
          });
        }
      });
      
      if (shouldReinitialize) {
        setTimeout(initializeAccessibility, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
}

// Utility function to announce messages to screen readers
export const announceToScreenReader = (message: string) => {
  const liveRegion = document.querySelector('#live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
};

// Utility function to focus the first element in a container
export const focusFirstElement = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
};

// Utility function to trap focus within a container
export const trapFocus = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const trapFocusHandler = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };
  
  container.addEventListener('keydown', trapFocusHandler);
  
  return () => {
    container.removeEventListener('keydown', trapFocusHandler);
  };
};