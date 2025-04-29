import * as React from 'react';

/**
 * Available positions for toast notifications
 */
export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

/**
 * Available toast notification types
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

/**
 * Props for individual toast notifications
 */
export interface IToastItemProps {
  /** Unique identifier for the toast */
  id: string;
  
  /** Content to display in the toast */
  content: React.ReactNode;
  
  /** Type of toast that determines styling */
  type?: ToastType;
  
  /** Time in milliseconds the toast should appear (0 for indefinite) */
  duration?: number;
  
  /** Position on screen where toast appears */
  position?: ToastPosition;
  
  /** Whether toast is dismissible */
  dismissible?: boolean;
  
  /** Whether to show progress bar */
  showProgress?: boolean;
  
  /** Optional custom styling for toast */
  style?: React.CSSProperties;
  
  /** Optional custom class name for toast */
  className?: string;
  
  /** Optional icon to display */
  icon?: React.ReactNode;
  
  /** Function called when toast is closed */
  onClose?: () => void;
  
  /** Function called when toast is clicked */
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Props for the toast container component
 */
export interface IToastContainerProps {
  /** Default position for all toasts */
  position?: ToastPosition;
  
  /** Default options that apply to all toasts */
  defaultOptions?: Partial<IToastItemProps>;
  
  /** Custom class name for the container */
  className?: string;
  
  /** Maximum number of toasts to show at once (0 for unlimited) */
  limit?: number;
}

/**
 * The toast API interface
 */
export interface IToastApi {
  /** Show a default toast */
  (content: React.ReactNode, options?: Partial<IToastItemProps>): string;
  
  /** Show a success toast */
  success(content: React.ReactNode, options?: Partial<IToastItemProps>): string;
  
  /** Show an error toast */
  error(content: React.ReactNode, options?: Partial<IToastItemProps>): string;
  
  /** Show a warning toast */
  warning(content: React.ReactNode, options?: Partial<IToastItemProps>): string;
  
  /** Show an info toast */
  info(content: React.ReactNode, options?: Partial<IToastItemProps>): string;
  
  /** Remove a toast by ID */
  remove(id: string): void;
  
  /** Remove all toasts */
  clear(): void;
} 