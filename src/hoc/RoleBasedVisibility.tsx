import * as React from "react";

/**
 * Props for RoleBasedVisibility HOC.
 */
export interface RoleBasedVisibilityProps {
  allowedRoles: string[];
  userRole: string;
  fallback?: React.ReactNode;
}

/**
 * Higher Order Component to show content only if userRole is in allowedRoles.
 * @param Component - The component to wrap.
 */
export function RoleBasedVisibility<P extends object>(Component: React.ComponentType<P>) {
  return function RoleBasedVisibilityComponent(props: P & RoleBasedVisibilityProps) {
    const { allowedRoles, userRole, fallback = null, ...rest } = props as RoleBasedVisibilityProps;
    if (!allowedRoles.includes(userRole)) {
      return <>{fallback}</>;
    }
    return <Component {...(rest as P)} />;
  };
} 