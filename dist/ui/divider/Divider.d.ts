import * as React from "react";
import { CSSProperties } from "react";
/**
 * Divider orientation options.
 */
export type DividerOrientation = "horizontal" | "vertical";
/**
 * Props for the Divider component.
 */
export interface DividerProps {
    /**
     * Orientation of the divider.
     * @default 'horizontal'
     */
    orientation?: DividerOrientation;
    /**
     * Color of the divider line.
     */
    color?: string;
    /**
     * Thickness of the divider (height for horizontal, width for vertical).
     */
    thickness?: string | number;
    /**
     * Margin around the divider.
     */
    margin?: string | number;
    /**
     * Custom className for the divider.
     */
    className?: string;
    /**
     * Custom style for the divider.
     */
    style?: CSSProperties;
}
/**
 * A simple divider for separating content.
 */
export declare const Divider: React.FC<DividerProps>;
//# sourceMappingURL=Divider.d.ts.map