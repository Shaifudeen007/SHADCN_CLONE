
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining tailwind classes with conditional logic.
 * Note: These packages are assumed to be available in the environment.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Minimal implementation of clsx since it might not be in the environment
function clsx(...args: any[]): string {
  return args
    .flat()
    .filter((x) => typeof x === 'string' && x.length > 0)
    .join(' ');
}

// Minimal implementation of twMerge
function twMerge(s: string): string {
  return s; // Fallback
}
