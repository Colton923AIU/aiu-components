import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Props for the Grid component.
 */
export interface GridProps {
  /**
   * Number of columns in the grid.
   * @default 3
   */
  columns?: number;
  /**
   * Gap between grid items (e.g., 16, '2rem').
   * @default 24
   */
  gap?: number | string;
  /**
   * Responsive breakpoints (e.g., { sm: 1, md: 2, lg: 4 }).
   */
  responsive?: {
    [breakpoint: string]: number;
  };
  /**
   * Grid items to display.
   */
  children: ReactNode;
  /**
   * Custom className for the grid.
   */
  className?: string;
  /**
   * Custom style for the grid.
   */
  style?: CSSProperties;
}

/**
 * A responsive grid layout for items.
 */
export const Grid: React.FC<GridProps> = ({
  columns = 3,
  gap = 24,
  responsive,
  children,
  className,
  style,
}) => {
  // Generate responsive styles if provided
  let responsiveStyles = "";
  if (responsive) {
    for (const [breakpoint, cols] of Object.entries(responsive)) {
      const mq =
        breakpoint === "sm"
          ? "@media (max-width: 600px)"
          : breakpoint === "md"
          ? "@media (max-width: 900px)"
          : breakpoint === "lg"
          ? "@media (max-width: 1200px)"
          : `@media (max-width: ${breakpoint})`;
      responsiveStyles += `\n${mq} { .aiu-grid { grid-template-columns: repeat(${cols}, 1fr) !important; } }`;
    }
  }

  return (
    <div className={`aiu-grid${className ? ` ${className}` : ""}`} style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: typeof gap === "number" ? `${gap}px` : gap,
      ...style,
    }}>
      {children}
      {responsiveStyles && <style>{responsiveStyles}</style>}
    </div>
  );
}; 