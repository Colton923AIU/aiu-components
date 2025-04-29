import { MouseEventHandler } from "react";

export interface ISVG {
  onClick?: MouseEventHandler<SVGSVGElement>; // Correct type for onClick event handler
  styleProps?: React.CSSProperties; // Correct type for inline styles
  active?: boolean; // Custom prop to track active state
}
