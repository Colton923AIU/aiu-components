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
declare const Pause: ({ onClick, styleProps }: ISVG) => React.JSX.Element;
export { Pause };
//# sourceMappingURL=Pause.d.ts.map