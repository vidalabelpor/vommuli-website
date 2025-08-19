import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine Tailwind CSS classes
 * Merges class names with tailwind-merge to handle conflicting styles
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}