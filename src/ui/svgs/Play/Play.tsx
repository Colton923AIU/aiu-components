import * as React from "react";
import { ISVG } from "../ISVG";

/**
 * Play SVG component that renders a play button in SVG format.
 *
 * This component renders a play icon as an SVG and accepts `onClick`
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
 * <Play
 *   onClick={() => alert("Play clicked!")}
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

const Play = ({ onClick, styleProps }: ISVG) => {
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
      style={{ ...styleProps }} // Spread the styleProps into the SVG style
    >
      <g
        transform="translate(0,50) scale(0.1,-0.1)"
        fill="#006000"
        stroke="none"
      >
        <path
          d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
          -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
          167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
          -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"
        />
        <path
          d="M180 250 c0 -60 3 -110 6 -110 12 0 184 103 184 110 0 7 -172 110
          -184 110 -3 0 -6 -49 -6 -110z m140 10 c17 -11 20 -9 -67 -61 l-53 -31 0 82 0
          82 53 -31 c28 -17 59 -36 67 -41z"
        />
      </g>
    </svg>
  );
};

export { Play };
