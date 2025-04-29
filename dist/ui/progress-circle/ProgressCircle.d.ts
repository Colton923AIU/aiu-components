import * as React from "react";
import { CSSProperties, ReactNode } from "react";
/**
 * Props for the ProgressCircle component.
 */
export interface ProgressCircleProps {
    /**
     * Progress value (0-100).
     */
    value: number;
    /**
     * Size of the circle in px.
     * @default 48
     */
    size?: number;
    /**
     * Thickness of the progress stroke.
     * @default 5
     */
    thickness?: number;
    /**
     * Color of the progress stroke.
     * @default '#1976d2'
     */
    color?: string;
    /**
     * Optional label to display in the center.
     */
    label?: ReactNode;
    /**
     * Custom className for the progress circle.
     */
    className?: string;
    /**
     * Custom style for the progress circle.
     */
    style?: CSSProperties;
}
/**
 * A circular progress indicator.
 */
export declare const ProgressCircle: React.FC<ProgressCircleProps>;
//# sourceMappingURL=ProgressCircle.d.ts.map