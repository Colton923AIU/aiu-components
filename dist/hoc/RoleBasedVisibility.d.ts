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
export declare function RoleBasedVisibility<P extends object>(Component: React.ComponentType<P>): (props: P & RoleBasedVisibilityProps) => React.JSX.Element;
//# sourceMappingURL=RoleBasedVisibility.d.ts.map