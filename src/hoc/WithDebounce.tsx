import * as React from "react";

/**
 * Options for WithDebounce HOC.
 */
export interface WithDebounceOptions {
  prop?: string; // The callback prop to debounce
  delay?: number; // Debounce delay in ms
}

/**
 * Props for WithDebounce HOC.
 */
export interface WithDebounceProps {
  debounceDelay?: number;
  debounceProp?: string;
}

/**
 * Higher Order Component to debounce a callback prop (default: 'onChange').
 * @param Component - The component to wrap.
 * @param options - Debounce options (prop, delay)
 */
export function WithDebounce<P extends object>(
  Component: React.ComponentType<P>,
  options?: WithDebounceOptions
) {
  const propToDebounce = options?.prop || "onChange";
  const defaultDelay = options?.delay ?? 300;

  return function WithDebounceComponent(props: P & WithDebounceProps) {
    const delay = props.debounceDelay ?? defaultDelay;
    const propName = props.debounceProp || propToDebounce;
    const callback = (props as any)[propName];
    const rest = { ...props };
    delete (rest as any)[propName];
    delete (rest as any).debounceDelay;
    delete (rest as any).debounceProp;

    const timeoutRef = React.useRef<any>(null);
    const handler = React.useCallback((...args: any[]) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (typeof callback === "function") callback(...args);
      }, delay);
    }, [callback, delay]);

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    return <Component {...(rest as P)} {...{ [propName]: handler }} />;
  };
} 