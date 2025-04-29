import * as React from "react";
import { Skeleton, SkeletonProps } from "../ui/skeleton";

/**
 * Props for WithLoading HOC.
 */
export interface WithLoadingProps {
  loading?: boolean;
  skeletonProps?: SkeletonProps;
  children?: React.ReactNode; // fallback skeleton content
}

/**
 * Higher Order Component to show a loading indicator or skeleton while loading is true.
 * @param Component - The component to wrap.
 */
export function WithLoading<P extends object>(Component: React.ComponentType<P>) {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { loading, skeletonProps, children, ...rest } = props as WithLoadingProps;
    if (loading) {
      if (children) return <>{children}</>;
      return <Skeleton {...(skeletonProps || {})} />;
    }
    return <Component {...(rest as P)} />;
  };
} 