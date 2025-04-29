import * as React from "react";
import { CSSProperties } from "react";
/**
 * Spacer direction options.
 */
export type SpacerDirection = "vertical" | "horizontal";
/**
 * Props for the Spacer component.
 */
export interface SpacerProps {
    /**
     * Direction of the space (vertical = height, horizontal = width).
     * @default 'vertical'
     */
    direction?: SpacerDirection;
    /**
     * Size of the space (e.g., 16, '2rem').
     */
    size?: number | string;
    /**
     * Custom className for the spacer.
     */
    className?: string;
    /**
     * Custom style for the spacer.
     */
    style?: CSSProperties;
}
/**
 * A simple spacer for adding vertical or horizontal space.
 */
export declare const Spacer: React.FC<SpacerProps>;
//# sourceMappingURL=Spacer.d.ts.map