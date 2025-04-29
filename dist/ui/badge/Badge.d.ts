import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Badge variant options.
 */
export type BadgeVariant = "solid" | "outline" | "subtle";
/**
 * Badge size options.
 */
export type BadgeSize = "sm" | "md" | "lg";
/**
 * Props for the Badge component.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Badge content (number, string, or ReactNode).
     */
    children?: ReactNode;
    /**
     * Badge color (CSS color or predefined).
     */
    color?: string;
    /**
     * Badge variant.
     * @default 'solid'
     */
    variant?: BadgeVariant;
    /**
     * Badge size.
     * @default 'md'
     */
    size?: BadgeSize;
    /**
     * Dot mode (show as a small dot, no content).
     */
    dot?: boolean;
    /**
     * Custom className for the badge.
     */
    className?: string;
    /**
     * Custom style for the badge.
     */
    style?: CSSProperties;
}
/**
 * A badge for status, counts, or small labels.
 */
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map