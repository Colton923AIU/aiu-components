import * as React from "react";

/**
 * Options for WithLogger HOC.
 */
export interface WithLoggerOptions {
  logProps?: boolean;
  logMount?: boolean;
  logUnmount?: boolean;
}

/**
 * Higher Order Component to log props and lifecycle events.
 * @param Component - The component to wrap.
 * @param options - Logger options
 */
export function WithLogger<P extends object>(
  Component: React.ComponentType<P>,
  options?: WithLoggerOptions
) {
  const {
    logProps = true,
    logMount = true,
    logUnmount = true,
  } = options || {};

  return function WithLoggerComponent(props: P) {
    React.useEffect(() => {
      if (logMount) {
        // eslint-disable-next-line no-console
        console.log(`[WithLogger] Mounted:`, Component.displayName || Component.name || "Component");
      }
      return () => {
        if (logUnmount) {
          // eslint-disable-next-line no-console
          console.log(`[WithLogger] Unmounted:`, Component.displayName || Component.name || "Component");
        }
      };
    }, []);

    React.useEffect(() => {
      if (logProps) {
        // eslint-disable-next-line no-console
        console.log(`[WithLogger] Props:`, props);
      }
    }, [props]);

    return <Component {...props} />;
  };
} 