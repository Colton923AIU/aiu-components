import * as React from "react";
import { SkeletonProps } from "../ui/skeleton";
/**
 * Props for WithLoading HOC.
 */
export interface WithLoadingProps {
    loading?: boolean;
    skeletonProps?: SkeletonProps;
    children?: React.ReactNode;
}
/**
 * Higher Order Component to show a loading indicator or skeleton while loading is true.
 * @param Component - The component to wrap.
 */
export declare function WithLoading<P extends object>(Component: React.ComponentType<P>): (props: P & WithLoadingProps) => React.JSX.Element;
//# sourceMappingURL=WithLoading.d.ts.map