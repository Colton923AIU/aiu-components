import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Supported text sizes.
 */
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | number;
/**
 * Supported text weights.
 */
export type TextWeight = "normal" | "medium" | "bold" | number;
/**
 * Supported text alignments.
 */
export type TextAlign = "left" | "center" | "right" | "justify";
/**
 * Props for the Text component.
 */
export interface TextProps {
    /**
     * Semantic tag to render (span, p, h1-h6, etc.).
     * @default 'span'
     */
    as?: keyof JSX.IntrinsicElements;
    /**
     * Text size (predefined or number for fontSize in px).
     */
    size?: TextSize;
    /**
     * Font weight (predefined or number).
     */
    weight?: TextWeight;
    /**
     * Text color.
     */
    color?: string;
    /**
     * Text alignment.
     */
    align?: TextAlign;
    /**
     * Truncate text with ellipsis.
     */
    truncate?: boolean;
    /**
     * Custom className for the text.
     */
    className?: string;
    /**
     * Custom style for the text.
     */
    style?: CSSProperties;
    /**
     * Text content.
     */
    children?: ReactNode;
}
/**
 * A flexible text component for consistent typography.
 */
export declare const Text: React.FC<TextProps>;
//# sourceMappingURL=Text.d.ts.map