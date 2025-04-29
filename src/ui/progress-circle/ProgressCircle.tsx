import * as React from "react";
import { CSSProperties, ReactNode } from "react";

/**
 * Props for the ProgressCircle component.
 */
export interface ProgressCircleProps {
  /**
   * Progress value (0-100).
   */
  value: number;
  /**
   * Size of the circle in px.
   * @default 48
   */
  size?: number;
  /**
   * Thickness of the progress stroke.
   * @default 5
   */
  thickness?: number;
  /**
   * Color of the progress stroke.
   * @default '#1976d2'
   */
  color?: string;
  /**
   * Optional label to display in the center.
   */
  label?: ReactNode;
  /**
   * Custom className for the progress circle.
   */
  className?: string;
  /**
   * Custom style for the progress circle.
   */
  style?: CSSProperties;
}

/**
 * A circular progress indicator.
 */
export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  size = 48,
  thickness = 5,
  color = "#1976d2",
  label,
  className,
  style,
}) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(100, value));
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`aiu-progress-circle${className ? ` ${className}` : ""}`}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", width: size, height: size, ...style }}
    >
      <svg width={size} height={size} style={{ display: "block" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth={thickness}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.4s" }}
        />
      </svg>
      {label !== undefined ? (
        <span
          className="aiu-progress-circle__label"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: size * 0.36,
            color: color,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}; 