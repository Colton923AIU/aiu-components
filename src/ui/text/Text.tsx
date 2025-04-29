/// <reference types="react" />
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
export const Text: React.FC<TextProps> = ({
  as = "span",
  size,
  weight,
  color,
  align,
  truncate = false,
  className,
  style,
  children,
}) => {
  const Tag = as as any;
  const fontSize = typeof size === "number" ? size :
    size === "xs" ? 12 :
    size === "sm" ? 14 :
    size === "md" ? 16 :
    size === "lg" ? 20 :
    size === "xl" ? 24 : undefined;
  const fontWeight = typeof weight === "number" ? weight :
    weight === "medium" ? 500 :
    weight === "bold" ? 700 :
    weight === "normal" ? 400 : undefined;

  const textStyle: CSSProperties = {
    fontSize,
    fontWeight,
    color,
    textAlign: align,
    overflow: truncate ? "hidden" : undefined,
    textOverflow: truncate ? "ellipsis" : undefined,
    whiteSpace: truncate ? "nowrap" : undefined,
    ...style,
  };

  return (
    <Tag className={`aiu-text${className ? ` ${className}` : ""}`} style={textStyle}>
      {children}
    </Tag>
  );
}; 