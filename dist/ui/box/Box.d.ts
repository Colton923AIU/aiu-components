import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Props for the Box component.
 */
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /** Padding (e.g., 8, '1rem', '8px 16px'). */
    p?: number | string;
    /** Margin (e.g., 8, '1rem', '8px 16px'). */
    m?: number | string;
    /** Background color. */
    bg?: string;
    /** Border (e.g., '1px solid #eee'). */
    border?: string;
    /** Border radius (e.g., 8, '8px', '50%'). */
    radius?: number | string;
    /** Box shadow. */
    shadow?: string;
    /** Width. */
    width?: number | string;
    /** Height. */
    height?: number | string;
    /** Custom className for the box. */
    className?: string;
    /** Custom style for the box. */
    style?: CSSProperties;
    /** Box content. */
    children?: ReactNode;
}
/**
 * A flexible box container for layout and utility purposes.
 */
export declare const Box: React.FC<BoxProps>;
//# sourceMappingURL=Box.d.ts.map