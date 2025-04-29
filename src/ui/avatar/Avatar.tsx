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

const sizeMap: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
};

/**
 * A user avatar component with image, initials, or icon fallback.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  icon,
  size = "md",
  shape = "circle",
  className,
  style,
  ...rest
}) => {
  const [imgError, setImgError] = React.useState(false);
  const resolvedSize = typeof size === "number" ? size : sizeMap[size] || sizeMap.md;
  const borderRadius = shape === "circle" ? "50%" : 6;

  const avatarStyle: CSSProperties = {
    width: resolvedSize,
    height: resolvedSize,
    borderRadius,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: Math.floor(resolvedSize / 2.2),
    background: "#f0f0f0",
    color: "#888",
    overflow: "hidden",
    ...style,
  };

  let content: ReactNode = null;
  if (src && !imgError) {
    content = (
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius }}
        onError={() => setImgError(true)}
        {...rest}
      />
    );
  } else if (initials) {
    content = <span>{initials}</span>;
  } else if (icon) {
    content = icon;
  }

  return (
    <span className={`aiu-avatar${className ? ` ${className}` : ""}`} style={avatarStyle}>
      {content}
    </span>
  );
}; 