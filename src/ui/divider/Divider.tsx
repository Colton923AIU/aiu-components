import * as React from "react";
import { CSSProperties } from "react";

/**
 * Divider orientation options.
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Props for the Divider component.
 */
export interface DividerProps {
  /**
   * Orientation of the divider.
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;
  /**
   * Color of the divider line.
   */
  color?: string;
  /**
   * Thickness of the divider (height for horizontal, width for vertical).
   */
  thickness?: string | number;
  /**
   * Margin around the divider.
   */
  margin?: string | number;
  /**
   * Custom className for the divider.
   */
  className?: string;
  /**
   * Custom style for the divider.
   */
  style?: CSSProperties;
}

/**
 * A simple divider for separating content.
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  color = "#e0e0e0",
  thickness = 1,
  margin = orientation === "horizontal" ? "16px 0" : "0 16px",
  className,
  style,
}) => {
  const dividerStyle: CSSProperties = {
    backgroundColor: color,
    margin,
    ...(orientation === "horizontal"
      ? { height: thickness, width: "100%" }
      : { width: thickness, height: "100%", alignSelf: "stretch" }),
    ...style,
  };

  return <div className={`aiu-divider${className ? ` ${className}` : ""}`} style={dividerStyle} />;
}; 