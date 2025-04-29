import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Stack direction options.
 */
export type StackDirection = "row" | "column";

/**
 * Props for the Stack component.
 */
export interface StackProps {
  /**
   * Direction of stacking (row or column).
   * @default 'column'
   */
  direction?: StackDirection;
  /**
   * Gap between children (e.g., 8, '1rem').
   */
  gap?: number | string;
  /**
   * Align items along the cross axis.
   */
  align?: CSSProperties["alignItems"];
  /**
   * Justify items along the main axis.
   */
  justify?: CSSProperties["justifyContent"];
  /**
   * Whether to wrap children onto multiple lines.
   */
  wrap?: boolean;
  /**
   * Custom className for the stack.
   */
  className?: string;
  /**
   * Custom style for the stack.
   */
  style?: CSSProperties;
  /**
   * Stack content.
   */
  children?: ReactNode;
}

/**
 * A flexbox-based stack layout component.
 */
export const Stack: React.FC<StackProps> = ({
  direction = "column",
  gap,
  align,
  justify,
  wrap = false,
  className,
  style,
  children,
}) => {
  const stackStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : "nowrap",
    ...style,
  };

  return (
    <div className={`aiu-stack${className ? ` ${className}` : ""}`} style={stackStyle}>
      {children}
    </div>
  );
}; 