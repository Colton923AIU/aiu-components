import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Tab definition for the Tabs component.
 */
export interface TabItem {
    /**
     * Tab label (string or ReactNode).
     */
    label: ReactNode;
    /**
     * Tab content.
     */
    content: ReactNode;
    /**
     * Whether the tab is disabled.
     */
    disabled?: boolean;
    /**
     * Optional key for the tab (for advanced usage).
     */
    key?: string | number;
}
/**
 * Props for the Tabs component.
 */
export interface TabsProps {
    /**
     * Array of tab definitions.
     */
    tabs: TabItem[];
    /**
     * Index of the active tab (controlled).
     */
    value: number;
    /**
     * Callback when the active tab changes.
     */
    onChange: (index: number) => void;
    /**
     * Custom className for the tabs.
     */
    className?: string;
    /**
     * Custom style for the tabs.
     */
    style?: CSSProperties;
}
/**
 * A tabbed interface for organizing content.
 */
export declare const Tabs: React.FC<TabsProps>;
//# sourceMappingURL=Tabs.d.ts.map