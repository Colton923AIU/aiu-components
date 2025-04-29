import * as React from "react";
import { CSSProperties } from "react";
import { Avatar, AvatarProps } from "../avatar";

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
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max,
  size,
  shape,
  className,
  style,
}) => {
  const displayAvatars = typeof max === "number" ? avatars.slice(0, max) : avatars;
  const overflow = typeof max === "number" && avatars.length > max ? avatars.length - max : 0;

  return (
    <div className={`aiu-avatar-group${className ? ` ${className}` : ""}`} style={{ display: "flex", alignItems: "center", ...style }}>
      {displayAvatars.map((avatar, idx) => (
        <span key={avatar.key ?? idx} style={{ marginLeft: idx === 0 ? 0 : -12, zIndex: avatars.length - idx }}>
          <Avatar
            {...avatar}
            size={size}
            shape={shape}
            style={{
              border: "2px solid #fff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              ...avatar.style,
            }}
          />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className="aiu-avatar-group__overflow"
          style={{
            marginLeft: -12,
            zIndex: 0,
            width: size === "lg" ? 56 : size === "sm" ? 32 : 40,
            height: size === "lg" ? 56 : size === "sm" ? 32 : 40,
            borderRadius: shape === "square" ? 6 : "50%",
            background: "#eee",
            color: "#888",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: 16,
            border: "2px solid #fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}; 