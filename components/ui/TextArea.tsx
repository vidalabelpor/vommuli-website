import React from 'react';
import { cn } from '@/lib/utils';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  minRows?: number;
  maxRows?: number;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ 
    className, 
    label,
    error,
    helperText,
    fullWidth = false,
    minRows = 4,
    maxRows = 10,
    disabled,
    ...props 
  }, ref) => {
    const textAreaId = React.useId();
    
    return (
      <div className={cn('flex flex-col', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={textAreaId}
            className="text-sm font-medium text-secondary-900 mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textAreaId}
          rows={minRows}
          className={cn(
            // Base styles - professional financial services appearance
            'flex min-h-[120px] w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm',
            'placeholder:text-secondary-500 transition-all duration-200 resize-y',
            'focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50',
            
            // Error styles
            {
              'border-red-500 focus:border-red-500 focus:ring-red-500/20': error,
            },
            
            className
          )}
          ref={ref}
          disabled={disabled}
          aria-describedby={
            error ? `${textAreaId}-error` : helperText ? `${textAreaId}-helper` : undefined
          }
          aria-invalid={!!error}
          style={{ maxHeight: `${maxRows * 1.5}rem` }}
          {...props}
        />
        
        {error && (
          <p id={`${textAreaId}-error`} className="text-sm text-red-600 mt-1">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={`${textAreaId}-helper`} className="text-sm text-secondary-600 mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;