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
export declare function WithErrorBoundary<P extends object>(Component: React.ComponentType<P>): {
    new (props: P & WithErrorBoundaryProps): {
        state: State;
        componentDidCatch(error: any, info: any): void;
        render(): string | number | true | Iterable<React.ReactNode> | React.JSX.Element;
        context: unknown;
        setState<K extends "hasError">(state: State | ((prevState: Readonly<State>, props: Readonly<P & WithErrorBoundaryProps>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & WithErrorBoundaryProps>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & WithErrorBoundaryProps>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<P & WithErrorBoundaryProps>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): void;
    };
    new (props: P & WithErrorBoundaryProps, context: any): {
        state: State;
        componentDidCatch(error: any, info: any): void;
        render(): string | number | true | Iterable<React.ReactNode> | React.JSX.Element;
        context: unknown;
        setState<K extends "hasError">(state: State | ((prevState: Readonly<State>, props: Readonly<P & WithErrorBoundaryProps>) => State | Pick<State, K> | null) | Pick<State, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & WithErrorBoundaryProps>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & WithErrorBoundaryProps>, prevState: Readonly<State>): any;
        componentDidUpdate?(prevProps: Readonly<P & WithErrorBoundaryProps>, prevState: Readonly<State>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & WithErrorBoundaryProps>, nextState: Readonly<State>, nextContext: any): void;
    };
    getDerivedStateFromError(): {
        hasError: boolean;
    };
    contextType?: React.Context<any> | undefined;
};
export {};
//# sourceMappingURL=WithErrorBoundary.d.ts.map