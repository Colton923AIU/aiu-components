import * as React from "react";
/**
 * Props for ToggleableSection HOC.
 */
export interface ToggleableSectionProps {
    initialOpen?: boolean;
    toggleLabel?: string | ((open: boolean) => React.ReactNode);
}
/**
 * Higher Order Component to add toggling (show/hide) functionality to a section.
 * @param Component - The component to wrap.
 */
export declare function ToggleableSection<P extends object>(Component: React.ComponentType<P>): (props: P & ToggleableSectionProps) => React.JSX.Element;
//# sourceMappingURL=ToggleableSection.d.ts.map