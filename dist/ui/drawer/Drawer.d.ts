import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Drawer side options.
 */
export type DrawerSide = "left" | "right" | "top" | "bottom";
/**
 * Props for the Drawer component.
 */
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Whether the drawer is open.
     */
    open: boolean;
    /**
     * Callback for closing the drawer.
     */
    onClose: () => void;
    /**
     * Side from which the drawer appears.
     * @default 'right'
     */
    side?: DrawerSide;
    /**
     * Optional drawer title.
     */
    title?: ReactNode;
    /**
     * Optional footer (e.g., actions).
     */
    footer?: ReactNode;
    /**
     * Custom className for the drawer.
     */
    className?: string;
    /**
     * Custom style for the drawer.
     */
    style?: CSSProperties;
    /**
     * Drawer content.
     */
    children?: ReactNode;
}
/**
 * A sliding drawer for side panels or contextual content.
 */
export declare const Drawer: React.FC<DrawerProps>;
//# sourceMappingURL=Drawer.d.ts.map