import * as React from 'react';
import { IToastContainerProps, IToastItemProps, ToastPosition } from './IToastProps';
import ToastItem from './ToastItem';

/**
 * Container for managing and displaying toast notifications
 */
const ToastContainer: React.FC<IToastContainerProps> = ({
  position = 'bottom-right',
  defaultOptions = {},
  className = '',
  limit = 5,
}) => {
  // State to hold all active toasts
  const [toasts, setToasts] = React.useState<IToastItemProps[]>([]);
  
  // Apply container positioning
  const getContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      overflow: 'hidden',
      padding: '10px',
      pointerEvents: 'none',
    };
    
    // Position based on the specified value
    switch (position) {
      case 'top-left':
        return {
          ...baseStyle,
          top: 0,
          left: 0,
          alignItems: 'flex-start',
        };
      case 'top-center':
        return {
          ...baseStyle,
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
        };
      case 'top-right':
        return {
          ...baseStyle,
          top: 0,
          right: 0,
          alignItems: 'flex-end',
        };
      case 'bottom-left':
        return {
          ...baseStyle,
          bottom: 0,
          left: 0,
          alignItems: 'flex-start',
          flexDirection: 'column-reverse',
        };
      case 'bottom-center':
        return {
          ...baseStyle,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
          flexDirection: 'column-reverse',
        };
      case 'bottom-right':
      default:
        return {
          ...baseStyle,
          bottom: 0,
          right: 0,
          alignItems: 'flex-end',
          flexDirection: 'column-reverse',
        };
    }
  };
  
  // Function to add a new toast
  const addToast = React.useCallback((content: React.ReactNode, options: Partial<IToastItemProps> = {}) => {
    const id = Date.now().toString();
    
    // Merge with default options
    const toastProps: IToastItemProps = {
      id,
      content,
      position: options.position || position,
      ...defaultOptions,
      ...options,
      onClose: () => removeToast(id),
    };
    
    setToasts(prevToasts => {
      // Remove oldest toast if limit is reached
      if (limit > 0 && prevToasts.length >= limit) {
        return [...prevToasts.slice(1), toastProps];
      }
      return [...prevToasts, toastProps];
    });
    
    return id;
  }, [defaultOptions, limit, position]);
  
  // Function to remove a toast by ID
  const removeToast = React.useCallback((id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);
  
  // Group toasts by position
  const groupedToasts = React.useMemo(() => {
    const groups: Record<ToastPosition, IToastItemProps[]> = {
      'top-left': [],
      'top-center': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-center': [],
      'bottom-right': [],
    };
    
    toasts.forEach(toast => {
      const toastPosition = toast.position || position;
      groups[toastPosition].push(toast);
    });
    
    return groups;
  }, [toasts, position]);
  
  // Create the imperative API
  const toastApi = React.useMemo(() => {
    // Base method
    const toast = (content: React.ReactNode, options?: Partial<IToastItemProps>) => 
      addToast(content, options);
    
    // Shorthand methods for different toast types
    toast.success = (content: React.ReactNode, options?: Partial<IToastItemProps>) => 
      addToast(content, { type: 'success', ...options });
      
    toast.error = (content: React.ReactNode, options?: Partial<IToastItemProps>) => 
      addToast(content, { type: 'error', ...options });
      
    toast.warning = (content: React.ReactNode, options?: Partial<IToastItemProps>) => 
      addToast(content, { type: 'warning', ...options });
      
    toast.info = (content: React.ReactNode, options?: Partial<IToastItemProps>) => 
      addToast(content, { type: 'info', ...options });
    
    // Method to remove a toast by ID
    toast.remove = (id: string) => removeToast(id);
    
    // Method to remove all toasts
    toast.clear = () => setToasts([]);
    
    return toast;
  }, [addToast, removeToast]);
  
  // Make toast API available via a ref
  React.useImperativeHandle(
    React.createRef(), 
    () => toastApi
  );
  
  // Make toast API globally available
  React.useEffect(() => {
    // @ts-ignore - Add toast API to window for global access
    window.toast = toastApi;
    
    // Cleanup on unmount
    return () => {
      // @ts-ignore - Remove toast API from window
      delete window.toast;
    };
  }, [toastApi]);
  
  // Render all toast containers
  return (
    <>
      {Object.entries(groupedToasts).map(([pos, positionToasts]) => {
        if (positionToasts.length === 0) return null;
        
        return (
          <div
            key={pos}
            className={`toast-container ${pos} ${className}`}
            style={getContainerStyle()}
            data-testid={`toast-container-${pos}`}
          >
            {positionToasts.map(toast => (
              <div key={toast.id} style={{ pointerEvents: 'auto' }}>
                <ToastItem {...toast} onRemove={removeToast} />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export { ToastContainer }; 