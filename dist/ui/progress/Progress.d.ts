import * as React from "react";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
/**
 * Progress size options.
 */
export type ProgressSize = "sm" | "md" | "lg";
/**
 * Props for the Progress component.
 */
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Progress value (0-100).
     */
    value?: number;
    /**
     * Show indeterminate (loading) bar.
     */
    indeterminate?: boolean;
    /**
     * Optional label to display above the bar.
     */
    label?: ReactNode;
    /**
     * Bar color.
     */
    color?: string;
    /**
     * Bar size.
     * @default 'md'
     */
    size?: ProgressSize;
    /**
     * Custom className for the progress.
     */
    className?: string;
    /**
     * Custom style for the progress.
     */
    style?: CSSProperties;
}
/**
 * A linear progress bar for loading or completion status.
 */
export declare const Progress: React.FC<ProgressProps>;
//# sourceMappingURL=Progress.d.ts.map