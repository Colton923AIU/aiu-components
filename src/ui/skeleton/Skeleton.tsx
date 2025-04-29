import * as React from "react";
import { CSSProperties } from "react";

/**
 * Props for the Skeleton component.
 */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  className?: string;
  style?: CSSProperties;
}

/**
 * A simple animated skeleton loading placeholder.
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 24,
  borderRadius = 6,
  className,
  style,
}) => {
  return (
    <span
      className={`aiu-skeleton${className ? ` ${className}` : ""}`}
      style={{
        display: "inline-block",
        width,
        height,
        borderRadius,
        background: "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
        backgroundSize: "200% 100%",
        animation: "aiu-skeleton-shimmer 1.2s infinite linear",
        ...style,
      }}
    />
  );
};

// Add keyframes for shimmer animation
if (typeof window !== "undefined") {
  const styleId = "aiu-skeleton-keyframes";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `@keyframes aiu-skeleton-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`;
    document.head.appendChild(style);
  }
} 