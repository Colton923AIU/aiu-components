import * as React from "react";
import { CSSProperties } from "react";
import { AvatarProps } from "../avatar";
/**
 * Avatar group item definition.
 */
export interface AvatarGroupItem extends Omit<AvatarProps, "size" | "shape" | "className"> {
    /**
     * Optional key for the avatar.
     */
    key?: string | number;
    /**
     * Optional style for the avatar.
     */
    style?: CSSProperties;
}
/**
 * Props for the AvatarGroup component.
 */
export interface AvatarGroupProps {
    /**
     * Array of avatar items.
     */
    avatars: AvatarGroupItem[];
    /**
     * Maximum number of avatars to display.
     */
    max?: number;
    /**
     * Size for all avatars.
     */
    size?: AvatarProps["size"];
    /**
     * Shape for all avatars.
     */
    shape?: AvatarProps["shape"];
    /**
     * Custom className for the group.
     */
    className?: string;
    /**
     * Custom style for the group.
     */
    style?: CSSProperties;
}
/**
 * A group of user avatars with overflow indicator.
 */
export declare const AvatarGroup: React.FC<AvatarGroupProps>;
//# sourceMappingURL=AvatarGroup.d.ts.map