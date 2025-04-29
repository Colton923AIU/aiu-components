import * as React from "react";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

/**
 * Progress size options.
 */
export type ProgressSize = "sm" | "md" | "lg";

/**
 * Props for the Progress component.
 */
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100).
   */
  value?: number;
  /**
   * Show indeterminate (loading) bar.
   */
  indeterminate?: boolean;
  /**
   * Optional label to display above the bar.
   */
  label?: ReactNode;
  /**
   * Bar color.
   */
  color?: string;
  /**
   * Bar size.
   * @default 'md'
   */
  size?: ProgressSize;
  /**
   * Custom className for the progress.
   */
  className?: string;
  /**
   * Custom style for the progress.
   */
  style?: CSSProperties;
}

const sizeMap: Record<ProgressSize, number> = {
  sm: 4,
  md: 8,
  lg: 12,
};

/**
 * A linear progress bar for loading or completion status.
 */
export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  indeterminate = false,
  label,
  color = "#1976d2",
  size = "md",
  className,
  style,
  ...rest
}) => {
  const barHeight = sizeMap[size] || sizeMap.md;
  const progress = Math.max(0, Math.min(100, value));

  return (
    <div className={`aiu-progress${className ? ` ${className}` : ""}`} style={{ ...style }} {...rest}>
      {label && <div className="aiu-progress__label" style={{ marginBottom: 6 }}>{label}</div>}
      <div
        className="aiu-progress__track"
        style={{
          background: "#e0e0e0",
          borderRadius: barHeight / 2,
          height: barHeight,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="aiu-progress__bar"
          style={{
            background: color,
            height: barHeight,
            width: indeterminate ? "40%" : `${progress}%`,
            borderRadius: barHeight / 2,
            transition: indeterminate ? undefined : "width 0.3s",
            animation: indeterminate ? "aiu-progress-indeterminate 1.2s infinite linear" : undefined,
          }}
        />
      </div>
      <style>{`
        @keyframes aiu-progress-indeterminate {
          0% { margin-left: -40%; }
          100% { margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}; 