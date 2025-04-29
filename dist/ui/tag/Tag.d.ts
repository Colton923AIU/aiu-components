import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Tag variant options.
 */
export type TagVariant = "solid" | "outline" | "subtle";
/**
 * Tag size options.
 */
export type TagSize = "sm" | "md" | "lg";
/**
 * Props for the Tag component.
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * Tag content (string or ReactNode).
     */
    children?: ReactNode;
    /**
     * Tag color (CSS color or predefined).
     */
    color?: string;
    /**
     * Tag variant.
     * @default 'solid'
     */
    variant?: TagVariant;
    /**
     * Tag size.
     * @default 'md'
     */
    size?: TagSize;
    /**
     * Callback for remove/close action. If provided, shows a close button.
     */
    onRemove?: () => void;
    /**
     * Custom className for the tag.
     */
    className?: string;
    /**
     * Custom style for the tag.
     */
    style?: CSSProperties;
}
/**
 * A tag (chip) for labels, categories, or filters.
 */
export declare const Tag: React.FC<TagProps>;
//# sourceMappingURL=Tag.d.ts.map