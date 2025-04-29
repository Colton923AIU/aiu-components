import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Tooltip position options.
 */
export type TooltipPosition = "top" | "bottom" | "left" | "right";

/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
  /**
   * Tooltip content (string or ReactNode).
   */
  content: ReactNode;
  /**
   * Position of the tooltip relative to the child.
   * @default 'top'
   */
  position?: TooltipPosition;
  /**
   * Delay in ms before showing the tooltip.
   * @default 0
   */
  delay?: number;
  /**
   * Custom className for the tooltip.
   */
  className?: string;
  /**
   * Custom style for the tooltip.
   */
  style?: CSSProperties;
  /**
   * The element that triggers the tooltip.
   */
  children: ReactNode;
}

/**
 * A tooltip that appears on hover or focus.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  delay = 0,
  className,
  style,
  children,
  ...rest
}) => {
  const [visible, setVisible] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState<number | null>(null);

  const show = () => {
    if (delay > 0) {
      const id = window.setTimeout(() => setVisible(true), delay);
      setTimeoutId(id);
    } else {
      setVisible(true);
    }
  };

  const hide = () => {
    if (timeoutId) window.clearTimeout(timeoutId);
    setVisible(false);
  };

  const tooltipStyle: CSSProperties = {
    position: "absolute",
    zIndex: 9999,
    pointerEvents: "none",
    background: "#222",
    color: "#fff",
    borderRadius: 4,
    padding: "6px 10px",
    fontSize: 13,
    whiteSpace: "nowrap",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.15s",
    ...style,
  };

  const wrapperStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
  };

  const getPositionStyle = (): CSSProperties => {
    switch (position) {
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 6 };
      case "left":
        return { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 6 };
      case "right":
        return { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 6 };
      case "top":
      default:
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 6 };
    }
  };

  return (
    <span
      style={wrapperStyle}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
      {...rest}
    >
      {children}
      <span
        className={`aiu-tooltip${className ? ` ${className}` : ""}`}
        style={{ ...tooltipStyle, ...getPositionStyle() }}
        role="tooltip"
        aria-hidden={!visible}
      >
        {content}
      </span>
    </span>
  );
}; 