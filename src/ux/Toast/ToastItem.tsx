import * as React from 'react';
import { IToastItemProps } from './IToastProps';

/**
 * Props for ToastItem component with onRemove function
 */
interface ToastItemComponentProps extends IToastItemProps {
  /** Function to remove toast from container */
  onRemove: (id: string) => void;
}

/**
 * Individual Toast notification component
 */
const ToastItem: React.FC<ToastItemComponentProps> = ({
  id,
  content,
  type = 'default',
  duration = 5000,
  position = 'top-right',
  dismissible = true,
  showProgress = true,
  style,
  className = '',
  icon,
  onClose,
  onClick,
  onRemove,
}) => {
  const [progress, setProgress] = React.useState(100);
  const [isExiting, setIsExiting] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const animationDuration = 300; // ms

  React.useEffect(() => {
    if (duration > 0) {
      // Start timer for auto-dismiss
      timerRef.current = setTimeout(() => {
        handleClose();
      }, duration);

      // Progress bar animation
      if (showProgress) {
        const interval = 10; // Update every 10ms
        const step = (interval / duration) * 100;
        
        const progressTimer = setInterval(() => {
          setProgress((prev) => {
            const newProgress = prev - step;
            return newProgress < 0 ? 0 : newProgress;
          });
        }, interval);

        return () => {
          clearInterval(progressTimer);
          if (timerRef.current) clearTimeout(timerRef.current);
        };
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration, showProgress]);

  const handleClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsExiting(true);
    
    // Wait for exit animation to complete
    setTimeout(() => {
      if (onClose) onClose();
      onRemove(id);
    }, animationDuration);
  };

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) onClick(event);
  };

  // Generate toast classes based on type and position
  const toastClasses = [
    'toast',
    `toast-${type}`,
    isExiting ? 'toast-exit' : 'toast-enter',
    className,
  ].filter(Boolean).join(' ');

  // Determine icon based on type if not provided
  const renderIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'success':
        return <span className="toast-icon success">✓</span>;
      case 'error':
        return <span className="toast-icon error">✗</span>;
      case 'warning':
        return <span className="toast-icon warning">⚠</span>;
      case 'info':
        return <span className="toast-icon info">ℹ</span>;
      default:
        return null;
    }
  };

  return (
    <div 
      className={toastClasses}
      style={{
        ...style,
        animationDuration: `${animationDuration}ms`,
      }}
      onClick={handleClick}
      role="alert"
    >
      <div className="toast-content">
        {renderIcon()}
        <div className="toast-message">{content}</div>
        {dismissible && (
          <button 
            className="toast-close" 
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
      
      {showProgress && duration > 0 && (
        <div className="toast-progress-container">
          <div 
            className="toast-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ToastItem; 