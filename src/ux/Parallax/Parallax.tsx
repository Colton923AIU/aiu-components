import * as React from 'react';
import { IParallaxProps } from './IParallaxProps';

/**
 * Parallax component that creates a scrolling effect where the element
 * moves at a different speed than the page scroll
 */
const Parallax: React.FC<IParallaxProps> = ({
  children,
  speed = 0.5,
  height = '400px',
  className = '',
  backgroundImage,
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  style = {},
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [containerTop, setContainerTop] = React.useState(0);

  // Calculate window height on mount and resize
  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowHeight(window.innerHeight);
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Calculate container position
  React.useEffect(() => {
    const calculatePosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerTop(rect.top + window.scrollY);
      }
    };

    calculatePosition();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', calculatePosition);
      return () => {
        window.removeEventListener('resize', calculatePosition);
      };
    }
  }, []);

  // Handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        // How far the container is from the top of the viewport
        const distanceFromTop = containerTop - window.scrollY;
        
        // How far the container is from the bottom of the viewport
        const distanceFromBottom = distanceFromTop - windowHeight;
        
        // If container is in view
        if (distanceFromBottom < 0 && distanceFromTop > -parseInt(height, 10)) {
          // Calculate parallax offset
          const scrollPosition = window.scrollY;
          const newOffset = Math.round(scrollPosition * speed);
          setOffset(newOffset);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Run once to set initial position
      handleScroll();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [speed, containerTop, windowHeight, height]);

  const containerStyle: React.CSSProperties = {
    height,
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };

  const contentStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: `translateY(${offset}px)`,
    zIndex: 1,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div 
      ref={containerRef}
      className={className}
      style={containerStyle}
      data-parallax="true"
    >
      <div 
        style={contentStyle}
        data-parallax-content="true"
      >
        {children}
      </div>
    </div>
  );
};

export { Parallax }; 