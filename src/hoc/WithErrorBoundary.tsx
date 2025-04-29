import * as React from "react";

/**
 * Props for WithErrorBoundary HOC.
 */
export interface WithErrorBoundaryProps {
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Higher Order Component to catch errors and display a fallback UI.
 * @param Component - The component to wrap.
 */
export function WithErrorBoundary<P extends object>(Component: React.ComponentType<P>) {
  return class WithErrorBoundaryComponent extends React.Component<P & WithErrorBoundaryProps, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: any, info: any) {
      // Optionally log error
      // console.error(error, info);
    }

    render() {
      const { fallback, ...rest } = this.props as WithErrorBoundaryProps;
      if (this.state.hasError) {
        return fallback || <div className="aiu-error-boundary">Something went wrong.</div>;
      }
      return <Component {...(rest as P)} />;
    }
  };
} 