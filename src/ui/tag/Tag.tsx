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

const sizeMap: Record<TagSize, { height: number; fontSize: number; padding: string }> = {
  sm: { height: 20, fontSize: 12, padding: "0 8px" },
  md: { height: 28, fontSize: 14, padding: "0 12px" },
  lg: { height: 36, fontSize: 16, padding: "0 16px" },
};

/**
 * A tag (chip) for labels, categories, or filters.
 */
export const Tag: React.FC<TagProps> = ({
  children,
  color = "#1976d2",
  variant = "solid",
  size = "md",
  onRemove,
  className,
  style,
  ...rest
}) => {
  const { height, fontSize, padding } = sizeMap[size] || sizeMap.md;
  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    height,
    fontSize,
    padding,
    borderRadius: height / 2,
    background: variant === "solid" ? color : variant === "subtle" ? `${color}22` : "transparent",
    color: variant === "solid" ? "#fff" : color,
    border: variant === "outline" ? `1.5px solid ${color}` : undefined,
    boxSizing: "border-box",
    ...style,
  };

  return (
    <span className={`aiu-tag${className ? ` ${className}` : ""}`} style={baseStyle} {...rest}>
      {children}
      {onRemove && (
        <button
          type="button"
          className="aiu-tag__close"
          style={{
            marginLeft: 6,
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            fontSize: fontSize * 1.2,
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Remove"
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
}; 