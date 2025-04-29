import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Tooltip position options.
 */
export type TooltipPosition = "top" | "bottom" | "left" | "right";
/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
    /**
     * Tooltip content (string or ReactNode).
     */
    content: ReactNode;
    /**
     * Position of the tooltip relative to the child.
     * @default 'top'
     */
    position?: TooltipPosition;
    /**
     * Delay in ms before showing the tooltip.
     * @default 0
     */
    delay?: number;
    /**
     * Custom className for the tooltip.
     */
    className?: string;
    /**
     * Custom style for the tooltip.
     */
    style?: CSSProperties;
    /**
     * The element that triggers the tooltip.
     */
    children: ReactNode;
}
/**
 * A tooltip that appears on hover or focus.
 */
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map