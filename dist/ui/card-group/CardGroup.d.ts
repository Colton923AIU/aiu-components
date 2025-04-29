import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Props for the CardGroup component.
 */
export interface CardGroupProps {
    /**
     * Number of columns in the grid.
     * @default 3
     */
    columns?: number;
    /**
     * Gap between cards (e.g., 16, '2rem').
     * @default 24
     */
    gap?: number | string;
    /**
     * Card elements to display.
     */
    children: ReactNode;
    /**
     * Custom className for the card group.
     */
    className?: string;
    /**
     * Custom style for the card group.
     */
    style?: CSSProperties;
}
/**
 * A group of cards displayed in a grid layout.
 */
export declare const CardGroup: React.FC<CardGroupProps>;
//# sourceMappingURL=CardGroup.d.ts.map