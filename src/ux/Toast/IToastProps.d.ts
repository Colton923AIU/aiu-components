/**
 * Type for Toast position options
 */
export type ToastPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

/**
 * Type for Toast type options
 */
export type ToastType = 
  | 'default' 
  | 'success' 
  | 'error' 
  | 'warning' 
  | 'info';

/**
 * Interface for Toast options
 */
export interface IToastOptions {
  /**
   * Position of the toast on the screen
   */
  position?: ToastPosition;
  
  /**
   * Type of the toast (affects styling)
   */
  type?: ToastType;
  
  /**
   * Auto dismiss toast after this duration in milliseconds (0 to disable auto-dismiss)
   */
  duration?: number;
  
  /**
   * Whether to show a close button
   */
  showCloseButton?: boolean;
  
  /**
   * Whether to show a progress bar
   */
  showProgress?: boolean;
  
  /**
   * Whether to pause the timer when hovering over the toast
   */
  pauseOnHover?: boolean;
  
  /**
   * Custom CSS class for the toast
   */
  className?: string;
  
  /**
   * Custom styles for the toast
   */
  style?: React.CSSProperties;
  
  /**
   * Callback when toast is closed
   */
  onClose?: () => void;
  
  /**
   * Icon element or component to display (React element)
   */
  icon?: React.ReactNode;
  
  /**
   * Animation for toast entrance/exit
   */
  animation?: 'fade' | 'slide' | 'bounce';
}

/**
 * Props for an individual toast item
 */
export interface IToastItemProps extends IToastOptions {
  /**
   * Unique identifier for the toast
   */
  id: string;
  
  /**
   * Content of the toast
   */
  content: React.ReactNode;
  
  /**
   * Function to close this toast
   */
  onClose: () => void;
}

/**
 * Props for the Toast container component
 */
export interface IToastContainerProps {
  /**
   * Default position for all toasts in this container
   */
  position?: ToastPosition;
  
  /**
   * Default options for all toasts in this container
   */
  defaultOptions?: IToastOptions;
  
  /**
   * Custom CSS class for the container
   */
  className?: string;
  
  /**
   * Maximum number of toasts to show at once
   */
  limit?: number;
}

export { }; 