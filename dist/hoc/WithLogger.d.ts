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
export declare function WithLogger<P extends object>(Component: React.ComponentType<P>, options?: WithLoggerOptions): (props: P) => React.JSX.Element;
//# sourceMappingURL=WithLogger.d.ts.map