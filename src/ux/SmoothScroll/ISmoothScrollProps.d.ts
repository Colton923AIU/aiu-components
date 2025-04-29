interface ISmoothScrollProps {
  /**
   * The content to be wrapped
   */
  children: React.ReactNode;
  
  /**
   * CSS selector for elements that trigger smooth scrolling (default: 'a[href^="#"]')
   */
  targetSelector?: string;
  
  /**
   * Duration of the scroll animation in milliseconds
   */
  duration?: number;
  
  /**
   * Easing function for the scroll animation
   * - 'linear': Constant speed
   * - 'easeInQuad': Accelerating from zero velocity
   * - 'easeOutQuad': Decelerating to zero velocity
   * - 'easeInOutQuad': Acceleration until halfway, then deceleration
   */
  easing?: 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad';
  
  /**
   * Offset from the top of the target element in pixels
   */
  offset?: number;
  
  /**
   * Callback function triggered when scrolling starts
   */
  onStart?: (targetElement: HTMLElement) => void;
  
  /**
   * Callback function triggered when scrolling completes
   */
  onComplete?: (targetElement: HTMLElement) => void;
  
  /**
   * Callback function triggered during scrolling
   */
  onScroll?: (progress: number, targetElement: HTMLElement) => void;
  
  /**
   * Whether to update the URL hash after scrolling
   */
  updateHash?: boolean;
  
  /**
   * Whether to enable smooth scrolling (can be used to temporarily disable)
   */
  enabled?: boolean;
}

export { ISmoothScrollProps }; 