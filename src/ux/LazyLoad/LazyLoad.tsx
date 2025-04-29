import * as React from 'react';
import { ILazyLoadProps } from './ILazyLoadProps';

/**
 * LazyLoad component that delays rendering of content until needed
 * Useful for performance optimization and reducing initial load time
 */
const LazyLoad: React.FC<ILazyLoadProps> = ({
  children,
  placeholder,
  height = 'auto',
  width = '100%',
  delay = 0,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [shouldRender, setShouldRender] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Add keyframes animation to document head
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        @keyframes lazyLoadSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      styleElement.setAttribute('data-lazyload', 'true');
      
      // Only add the style once
      if (!document.querySelector('style[data-lazyload="true"]')) {
        document.head.appendChild(styleElement);
      }
      
      return () => {
        // Clean up only if this is the last LazyLoad component
        if (document.querySelectorAll('[data-component="lazyload"]').length <= 1) {
          const styleEl = document.querySelector('style[data-lazyload="true"]');
          if (styleEl) {
            styleEl.remove();
          }
        }
      };
    }
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Component is visible, start loading after specified delay
          if (delay) {
            setTimeout(() => {
              setShouldRender(true);
            }, delay);
          } else {
            setShouldRender(true);
          }
          // Disconnect observer once we've triggered loading
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load when element is within 200px of viewport
        threshold: 0.01,      // Trigger when at least 1% of element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  // When content is fully loaded
  const handleContentLoaded = () => {
    setIsLoaded(true);
  };

  // Apply loaded effect after content is rendered
  React.useEffect(() => {
    if (shouldRender) {
      // Small delay to ensure content has time to render
      const timer = setTimeout(() => {
        handleContentLoaded();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [shouldRender]);

  const containerStyle: React.CSSProperties = {
    height,
    width,
    position: 'relative',
    transition: 'opacity 0.3s ease-in-out',
  };

  const spinnerStyle: React.CSSProperties = {
    width: '40px', 
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'lazyLoadSpin 1s linear infinite',
  };

  return (
    <div 
      ref={containerRef}
      className={className} 
      style={containerStyle}
      data-component="lazyload"
    >
      {shouldRender ? (
        <div style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
          {children}
        </div>
      ) : (
        placeholder || (
          <div 
            style={{ 
              height: '100%', 
              width: '100%', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f9f9f9',
              borderRadius: '4px',
            }}
          >
            <div style={spinnerStyle} />
          </div>
        )
      )}
    </div>
  );
};

export { LazyLoad }; 