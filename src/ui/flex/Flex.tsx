/// <reference types="react" />
import * as React from "react";
import { CSSProperties, ReactNode } from "react";

/**
 * Props for the Flex component.
 */
export interface FlexProps {
  /**
   * The direction of the flex container (row, column, row-reverse, column-reverse).
   * @default 'row'
   */
  direction?: CSSProperties["flexDirection"];
  /**
   * How to align items along the cross axis.
   * @default 'stretch'
   */
  align?: CSSProperties["alignItems"];
  /**
   * How to justify items along the main axis.
   * @default 'flex-start'
   */
  justify?: CSSProperties["justifyContent"];
  /**
   * Gap between flex items (e.g., '8px', '1rem').
   */
  gap?: CSSProperties["gap"];
  /**
   * Whether flex items should wrap onto multiple lines.
   * @default false
   */
  wrap?: boolean;
  /**
   * Additional className for the container.
   */
  className?: string;
  /**
   * Inline styles for the container.
   */
  style?: CSSProperties;
  /**
   * Child nodes to render inside the flex container.
   */
  children?: ReactNode;
}

/**
 * A flexible box layout component using CSS flexbox.
 */
export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  gap,
  wrap = false,
  className,
  style,
  children,
}: FlexProps) => {
  const flexStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap,
    ...style,
  };

  return (
    <div className={className} style={flexStyle}>
      {children}
    </div>
  );
}; 