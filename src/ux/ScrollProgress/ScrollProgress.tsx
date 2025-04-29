import * as React from 'react';
import { IScrollProgressProps } from './IScrollProgressProps';

/**
 * ScrollProgress component that shows a progress bar indicating
 * how far the user has scrolled down the page
 */
const ScrollProgress: React.FC<IScrollProgressProps> = ({
  height = 4,
  color = '#007bff',
  backgroundColor = 'transparent',
  position = 'top',
  showPercentage = false,
  zIndex = 1000,
  className = '',
  fixed = true,
  onProgressChange,
}) => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const calculateScrollProgress = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.scrollY;
        
        // Calculate progress percentage
        const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
        
        // Clamp value between 0 and 100
        const clampedProgress = Math.min(100, Math.max(0, scrollPercentage));
        
        setProgress(clampedProgress);
        
        // Call the callback if provided
        if (onProgressChange) {
          onProgressChange(clampedProgress);
        }
      }
    };
    
    // Calculate on mount
    calculateScrollProgress();
    
    // Add scroll event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', calculateScrollProgress);
      window.addEventListener('resize', calculateScrollProgress);
      
      return () => {
        window.removeEventListener('scroll', calculateScrollProgress);
        window.removeEventListener('resize', calculateScrollProgress);
      };
    }
  }, [onProgressChange]);
  
  const containerStyle: React.CSSProperties = {
    position: fixed ? 'fixed' : 'absolute',
    left: 0,
    right: 0,
    height: `${height}px`,
    backgroundColor,
    zIndex,
    ...(position === 'top' ? { top: 0 } : { bottom: 0 }),
  };
  
  const progressStyle: React.CSSProperties = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: color,
    transition: 'width 0.2s ease-out',
  };
  
  const percentageStyle: React.CSSProperties = {
    position: 'absolute',
    right: '10px',
    color: color,
    fontSize: '12px',
    fontWeight: 'bold',
    top: position === 'top' ? `${height + 4}px` : undefined,
    bottom: position === 'bottom' ? `${height + 4}px` : undefined,
  };
  
  return (
    <div 
      className={className} 
      style={containerStyle}
      data-scroll-progress="true"
    >
      <div style={progressStyle} />
      
      {showPercentage && (
        <div style={percentageStyle}>
          {progress}%
        </div>
      )}
    </div>
  );
};

export { ScrollProgress }; 