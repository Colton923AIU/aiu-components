import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Props for the Grid component.
 */
export interface GridProps {
    /**
     * Number of columns in the grid.
     * @default 3
     */
    columns?: number;
    /**
     * Gap between grid items (e.g., 16, '2rem').
     * @default 24
     */
    gap?: number | string;
    /**
     * Responsive breakpoints (e.g., { sm: 1, md: 2, lg: 4 }).
     */
    responsive?: {
        [breakpoint: string]: number;
    };
    /**
     * Grid items to display.
     */
    children: ReactNode;
    /**
     * Custom className for the grid.
     */
    className?: string;
    /**
     * Custom style for the grid.
     */
    style?: CSSProperties;
}
/**
 * A responsive grid layout for items.
 */
export declare const Grid: React.FC<GridProps>;
//# sourceMappingURL=Grid.d.ts.map