import * as React from 'react';
import { ITypewriterProps } from './ITypewriterProps';

/**
 * Typewriter component that types out text character by character
 */
const Typewriter: React.FC<ITypewriterProps> = ({
  text,
  speed = 70,
  startDelay = 0,
  endDelay = 1000,
  sentenceDelay = 1500,
  loop = false,
  eraseMode = false,
  eraseSpeed = 50,
  cursor = '|',
  showCursor = true,
  autoStart = true,
  className = '',
  onComplete,
  onStart,
  onBeforeType,
  onAfterType,
}) => {
  // Convert text to array if it's a string
  const textArray = React.useMemo(() => (
    typeof text === 'string' ? [text] : text
  ), [text]);

  // State for the current text being displayed
  const [displayText, setDisplayText] = React.useState('');
  // Current sentence index
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // Whether the component is currently erasing
  const [isErasing, setIsErasing] = React.useState(false);
  // Whether the component is in view
  const [isInView, setIsInView] = React.useState(autoStart);
  // Reference to the container element
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Setup intersection observer to detect when component is in view
  React.useEffect(() => {
    if (!autoStart && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once it's in view, we don't need the observer anymore
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [autoStart]);

  // Main typing effect
  React.useEffect(() => {
    if (!isInView || textArray.length === 0) return;

    let timeout: NodeJS.Timeout;
    const currentText = textArray[currentIndex];
    
    // Handle typing
    if (!isErasing && displayText !== currentText) {
      timeout = setTimeout(() => {
        const nextChar = currentText[displayText.length];
        const newText = displayText + nextChar;
        
        // Call before type callback
        if (onBeforeType) {
          onBeforeType(nextChar, displayText);
        }
        
        setDisplayText(newText);
        
        // Call after type callback
        if (onAfterType) {
          onAfterType(nextChar, newText);
        }
        
        // If we've just started typing
        if (displayText.length === 0 && onStart) {
          onStart();
        }
      }, displayText.length === 0 ? startDelay : speed);
    } 
    // Handle completing a sentence
    else if (!isErasing && displayText === currentText) {
      // If we've reached the end of the text array
      if (currentIndex === textArray.length - 1) {
        if (loop) {
          // If loop is enabled, wait and then go back to first sentence or erase
          timeout = setTimeout(() => {
            if (eraseMode) {
              setIsErasing(true);
            } else {
              setCurrentIndex(0);
              setDisplayText('');
            }
          }, endDelay);
        } else if (onComplete) {
          // Call onComplete when we're done
          timeout = setTimeout(onComplete, endDelay);
        }
      } else {
        // More sentences to go
        timeout = setTimeout(() => {
          if (eraseMode) {
            setIsErasing(true);
          } else {
            setCurrentIndex(prev => prev + 1);
            setDisplayText('');
          }
        }, sentenceDelay);
      }
    }
    // Handle erasing
    else if (isErasing && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, eraseSpeed);
    }
    // Handle completed erasing
    else if (isErasing && displayText === '') {
      setIsErasing(false);
      if (currentIndex === textArray.length - 1 && loop) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    isInView, textArray, currentIndex, displayText, isErasing, 
    speed, startDelay, endDelay, sentenceDelay, eraseSpeed,
    loop, eraseMode, onBeforeType, onAfterType, onStart, onComplete
  ]);

  // Setup CSS for cursor blink animation
  React.useEffect(() => {
    if (showCursor && typeof document !== 'undefined') {
      const styleId = 'typewriter-cursor-style';
      
      // Only add the style if it doesn't already exist
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          @keyframes typewriter-cursor-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .typewriter-cursor {
            display: inline-block;
            animation: typewriter-cursor-blink 1s step-end infinite;
          }
        `;
        document.head.appendChild(style);
      }
      
      return () => {
        // Only remove if no other typewriter components are on the page
        if (document.querySelectorAll('[data-typewriter]').length <= 1) {
          const styleElement = document.getElementById(styleId);
          if (styleElement) {
            styleElement.remove();
          }
        }
      };
    }
  }, [showCursor]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      data-typewriter="true"
    >
      <span>{displayText}</span>
      {showCursor && (
        <span className="typewriter-cursor">{cursor}</span>
      )}
    </div>
  );
};

export { Typewriter }; 