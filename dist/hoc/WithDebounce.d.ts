import * as React from "react";
/**
 * Options for WithDebounce HOC.
 */
export interface WithDebounceOptions {
    prop?: string;
    delay?: number;
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
export declare function WithDebounce<P extends object>(Component: React.ComponentType<P>, options?: WithDebounceOptions): (props: P & WithDebounceProps) => React.JSX.Element;
//# sourceMappingURL=WithDebounce.d.ts.map