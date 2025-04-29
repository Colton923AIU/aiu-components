import * as React from 'react';
import { ISmoothScrollProps } from './ISmoothScrollProps';

/**
 * Interface for the SmoothScroll ref methods
 */
export interface SmoothScrollRef {
  scrollTo: (targetId: string) => void;
}

/**
 * SmoothScroll component that provides smooth scrolling to anchor links
 */
const SmoothScroll = React.forwardRef<SmoothScrollRef, ISmoothScrollProps>(({
  children,
  targetSelector = 'a[href^="#"]',
  duration = 800,
  easing = 'easeInOutQuad',
  offset = 0,
  onStart,
  onComplete,
  onScroll,
  updateHash = true,
  enabled = true,
}, ref) => {
  // Reference to the container element
  const containerRef = React.useRef<HTMLDivElement>(null);
  // Track if scrolling is in progress
  const isScrollingRef = React.useRef<boolean>(false);
  // Track animation frame ID for cleanup
  const animationFrameRef = React.useRef<number | null>(null);
  
  // Easing functions for animation
  const easingFunctions = React.useMemo(() => ({
    linear: (t: number) => t,
    easeInQuad: (t: number) => t * t,
    easeOutQuad: (t: number) => t * (2 - t),
    easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  }), []);
  
  // Scroll animation function
  const scrollToElement = React.useCallback((targetElement: HTMLElement) => {
    if (!targetElement || isScrollingRef.current || !enabled) return;
    
    // Get current scroll position
    const startPosition = window.pageYOffset;
    // Get target position with offset adjustment
    const targetPosition = targetElement.getBoundingClientRect().top + startPosition - offset;
    
    // Calculate scroll distance
    const distance = targetPosition - startPosition;
    if (distance === 0) return;
    
    // Keep track of start time
    const startTime = performance.now();
    
    // Mark that we're starting to scroll
    isScrollingRef.current = true;
    
    // Call onStart callback
    if (onStart) {
      onStart(targetElement);
    }
    
    // Animation step function
    const step = (currentTime: number) => {
      // Calculate time elapsed
      const elapsed = currentTime - startTime;
      // Calculate progress (0 to 1)
      const progress = Math.min(elapsed / duration, 1);
      // Apply easing function
      const easedProgress = easingFunctions[easing](progress);
      
      // Calculate new scroll position
      const newPosition = startPosition + distance * easedProgress;
      
      // Perform the scroll
      window.scrollTo(0, newPosition);
      
      // Call onScroll callback
      if (onScroll) {
        onScroll(progress, targetElement);
      }
      
      // Continue animation if not complete
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        // Animation complete
        isScrollingRef.current = false;
        animationFrameRef.current = null;
        
        // Update URL hash if enabled
        if (updateHash && targetElement.id) {
          history.pushState(null, '', `#${targetElement.id}`);
        }
        
        // Call onComplete callback
        if (onComplete) {
          onComplete(targetElement);
        }
      }
    };
    
    // Start the animation
    animationFrameRef.current = requestAnimationFrame(step);
  }, [duration, easing, offset, onStart, onComplete, onScroll, updateHash, enabled, easingFunctions]);
  
  // Handle clicks on anchor links
  const handleClick = React.useCallback((event: MouseEvent) => {
    if (!enabled) return;
    
    const link = event.target as HTMLElement;
    const isTargetLink = 
      link.matches(targetSelector) || 
      link.closest(targetSelector);
    
    if (isTargetLink) {
      // Find the actual anchor element if we clicked on a child element
      const anchor = link.matches(targetSelector) 
        ? link 
        : link.closest(targetSelector) as HTMLElement;
      
      // Get the href attribute
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        event.preventDefault();
        
        // Get the target element
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Scroll to the target element if it exists
        if (targetElement) {
          scrollToElement(targetElement);
        }
      }
    }
  }, [targetSelector, scrollToElement, enabled]);
  
  // Set up the click event listeners
  React.useEffect(() => {
    if (typeof window === 'undefined' || !document) {
      return;
    }
    
    // Add click handler to document to capture all clicks
    document.addEventListener('click', handleClick);
    
    return () => {
      // Clean up event listener on unmount
      document.removeEventListener('click', handleClick);
      
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleClick]);
  
  // Public method to programmatically scroll to an element
  React.useImperativeHandle(
    ref,
    () => ({
      scrollTo: (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          scrollToElement(targetElement);
        }
      },
    }),
    [scrollToElement]
  );
  
  return (
    <div ref={containerRef} data-smoothscroll="true">
      {children}
    </div>
  );
});

// Set display name for better debugging
SmoothScroll.displayName = 'SmoothScroll';

export { SmoothScroll }; 