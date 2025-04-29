import * as React from "react";
import { ReactNode, CSSProperties, ImgHTMLAttributes } from "react";
/**
 * Avatar size options.
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | number;
/**
 * Avatar shape options.
 */
export type AvatarShape = "circle" | "square";
/**
 * Props for the Avatar component.
 */
export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
    /**
     * Image source URL.
     */
    src?: string;
    /**
     * Alt text for the image.
     */
    alt?: string;
    /**
     * Initials to display if no image.
     */
    initials?: string;
    /**
     * Icon to display if no image or initials.
     */
    icon?: ReactNode;
    /**
     * Size of the avatar (predefined or number for px).
     * @default 'md'
     */
    size?: AvatarSize;
    /**
     * Shape of the avatar.
     * @default 'circle'
     */
    shape?: AvatarShape;
    /**
     * Custom className for the avatar.
     */
    className?: string;
    /**
     * Custom style for the avatar.
     */
    style?: CSSProperties;
}
/**
 * A user avatar component with image, initials, or icon fallback.
 */
export declare const Avatar: React.FC<AvatarProps>;
//# sourceMappingURL=Avatar.d.ts.map