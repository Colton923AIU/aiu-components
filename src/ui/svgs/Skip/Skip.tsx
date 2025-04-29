import * as React from "react";
import { ISVG } from "../ISVG";

/**
 * Skip SVG component that renders a skip button in SVG format.
 *
 * This component renders a skip icon as an SVG and accepts `onClick`
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
 * <Skip
 *   onClick={() => alert("Skip clicked!")}
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

const Skip = ({ onClick, styleProps }: ISVG) => {
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
        fill="#000000"
        stroke="none"
      >
        <path
          d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33
          -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71
          167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m180 -15 c128 -58 164
          -223 72 -328 -101 -115 -283 -88 -348 52 -79 171 104 354 276 276z"
        />
        <path
          d="M283 349 l-103 -69 0 65 0 65 -40 0 -40 0 0 -160 0 -160 40 0 40 0 0
          65 0 65 105 -70 105 -70 0 170 c0 93 -1 170 -2 169 -2 0 -49 -32 -105 -70z
          m-123 -99 c0 -133 -1 -140 -20 -140 -19 0 -20 7 -20 140 0 133 1 140 20 140
          19 0 20 -7 20 -140z m208 -64 l-3 -64 -90 59 c-50 32 -90 63 -90 69 0 6 40 37
          90 69 l90 59 3 -64 c2 -35 2 -93 0 -128z"
        />
      </g>
    </svg>
  );
};

export { Skip };
