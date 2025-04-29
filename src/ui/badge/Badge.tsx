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

const sizeMap: Record<BadgeSize, number> = {
  sm: 16,
  md: 20,
  lg: 28,
};

/**
 * A badge for status, counts, or small labels.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  color = "#e53935",
  variant = "solid",
  size = "md",
  dot = false,
  className,
  style,
  ...rest
}) => {
  const resolvedSize = sizeMap[size] || sizeMap.md;
  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: resolvedSize,
    height: resolvedSize,
    fontSize: resolvedSize * 0.7,
    padding: dot ? 0 : `0 ${Math.floor(resolvedSize / 3)}px`,
    borderRadius: resolvedSize / 2,
    background: variant === "solid" ? color : variant === "subtle" ? `${color}22` : "transparent",
    color: variant === "solid" ? "#fff" : color,
    border: variant === "outline" ? `1.5px solid ${color}` : undefined,
    boxSizing: "border-box",
    ...(dot && {
      width: resolvedSize / 2,
      minWidth: resolvedSize / 2,
      height: resolvedSize / 2,
      padding: 0,
      background: color,
      color: "transparent",
    }),
    ...style,
  };

  return (
    <span className={`aiu-badge${dot ? " aiu-badge--dot" : ""}${className ? ` ${className}` : ""}`} style={baseStyle} {...rest}>
      {!dot && children}
    </span>
  );
}; 