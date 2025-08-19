import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = 'text',
    label,
    error,
    helperText,
    startIcon,
    endIcon,
    fullWidth = false,
    disabled,
    ...props 
  }, ref) => {
    const inputId = React.useId();
    
    return (
      <div className={cn('flex flex-col', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium text-secondary-900 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-500">
              {startIcon}
            </div>
          )}
          
          <input
            id={inputId}
            type={type}
            className={cn(
              // Base styles - professional financial services appearance
              'flex h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm',
              'placeholder:text-secondary-500 transition-all duration-200',
              'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50',
              
              // Error styles
              {
                'border-red-500 focus:border-red-500 focus:ring-red-500/20': error,
              },
              
              // Icon padding adjustments
              {
                'pl-10': startIcon,
                'pr-10': endIcon,
              },
              
              className
            )}
            ref={ref}
            disabled={disabled}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            aria-invalid={!!error}
            {...props}
          />
          
          {endIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-500">
              {endIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-secondary-600 mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;