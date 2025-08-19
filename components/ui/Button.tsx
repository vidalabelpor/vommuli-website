import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, loading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles - professional financial services appearance
          'inline-flex items-center justify-center gap-2 rounded-3xl font-semibold transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          'hover:transform hover:scale-[1.02] active:scale-[0.98]',
          
          // Variant styles
          {
            'bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-500 shadow-lg hover:shadow-xl': 
              variant === 'primary',
            'bg-secondary-100 text-secondary-800 hover:bg-secondary-200 focus:ring-secondary-500': 
              variant === 'secondary',
            'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white focus:ring-primary-500': 
              variant === 'outline',
            'text-secondary-700 hover:text-primary-900 hover:bg-secondary-50 focus:ring-secondary-500': 
              variant === 'ghost',
            'bg-accent-600 text-secondary-900 hover:bg-accent-500 focus:ring-accent-500 shadow-lg hover:shadow-xl font-bold': 
              variant === 'accent',
          },
          
          // Size styles
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
            'px-10 py-5 text-xl': size === 'xl',
          },
          
          // Full width
          { 'w-full': fullWidth },
          
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;