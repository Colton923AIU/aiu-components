import * as React from "react";
import type { ISVG } from "../ISVG";

/**
 * Pause SVG component that renders a pause button in SVG format.
 *
 * This component renders a pause icon as an SVG and accepts `onClick`
 * and `styleProps` to handle click events and customize the SVG's dimensions.
 *
 * ### Props:
 * - `onClick` (optional): A function that is triggered when the SVG is clicked.
 * - `styleProps` (optional): An object to style the SVG. You can set the `width` and `height`
 *   to customize the size of the SVG.
 *     - `width`: The width of the SVG. Defaults to "50px".
 *     - `height`: The height of the SVG. Defaults to "50px".
 *
 * ### Example Usage:
 * ```tsx
 * <Pause
 *   onClick={() => alert("Pause clicked!")}
 *   styleProps={{ width: "100px", height: "100px" }}
 * />
 * ```
 *
 * @param {object} props - The props passed to the component.
 * @param {Function} [props.onClick] - The function to call when the SVG is clicked.
 * @param {object} [props.styleProps] - Optional object for setting `width` and `height` of the SVG.
 *
 * @returns {JSX.Element} The rendered SVG element.
 */

const Pause = ({ onClick, styleProps }: ISVG) => {
  // Default dimensions for the SVG if no styleProps are passed.
  const height = styleProps?.height || "50px";
  const width = styleProps?.width || "50px";

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      onClick={onClick || (() => {})} // No-op if no onClick is passed
      style={{ ...styleProps }}
    >
      <g
        transform="translate(0,50) scale(0.1,-0.1)"
        fill="#A30000"
        stroke="none"
      >
        <path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33 -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71 167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164 -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z" />
        <path d="M160 250 l0 -100 35 0 35 0 0 100 0 100 -35 0 -35 0 0 -100z m50 0 c0 -64 -3 -80 -15 -80 -12 0 -15 16 -15 80 0 64 3 80 15 80 12 0 15 -16 15 -80z" />
        <path d="M270 250 l0 -100 35 0 35 0 0 100 0 100 -35 0 -35 0 0 -100z m50 0 c0 -64 -3 -80 -15 -80 -12 0 -15 16 -15 80 0 64 3 80 15 80 12 0 15 -16 15 -80z" />
      </g>
    </svg>
  );
};

export { Pause };
