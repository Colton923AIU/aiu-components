import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";

/**
 * Snackbar position options.
 */
export type SnackbarPosition =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right"
  | "bottom"
  | "top";

/**
 * Props for the Snackbar component.
 */
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the snackbar is open.
   */
  open: boolean;
  /**
   * Snackbar message/content.
   */
  message: ReactNode;
  /**
   * Optional action (e.g., button).
   */
  action?: ReactNode;
  /**
   * Auto-hide duration in ms.
   */
  autoHideDuration?: number;
  /**
   * Position of the snackbar.
   * @default 'bottom'
   */
  position?: SnackbarPosition;
  /**
   * Callback for closing the snackbar.
   */
  onClose?: () => void;
  /**
   * Custom className for the snackbar.
   */
  className?: string;
  /**
   * Custom style for the snackbar.
   */
  style?: CSSProperties;
}

const getPositionStyle = (position: SnackbarPosition): CSSProperties => {
  const base: CSSProperties = {
    position: "fixed",
    zIndex: 1200,
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 32,
  };
  switch (position) {
    case "top":
      return { ...base, top: 32, bottom: undefined };
    case "bottom-left":
      return { ...base, left: 32, right: undefined, bottom: 32, transform: "none" };
    case "bottom-right":
      return { ...base, right: 32, left: undefined, bottom: 32, transform: "none" };
    case "top-left":
      return { ...base, left: 32, right: undefined, top: 32, bottom: undefined, transform: "none" };
    case "top-right":
      return { ...base, right: 32, left: undefined, top: 32, bottom: undefined, transform: "none" };
    case "bottom":
    default:
      return base;
  }
};

/**
 * A snackbar for brief notifications or messages.
 */
export const Snackbar: React.FC<SnackbarProps> = ({
  open,
  message,
  action,
  autoHideDuration,
  position = "bottom",
  onClose,
  className,
  style,
  ...rest
}) => {
  React.useEffect(() => {
    if (open && autoHideDuration && onClose) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return (
    <div
      className={`aiu-snackbar${className ? ` ${className}` : ""}`}
      style={{
        minWidth: 240,
        maxWidth: 480,
        background: "#333",
        color: "#fff",
        borderRadius: 8,
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        ...getPositionStyle(position),
        ...style,
      }}
      role="status"
      aria-live="polite"
      {...rest}
    >
      <span style={{ flex: 1 }}>{message}</span>
      {action && <span>{action}</span>}
      {onClose && (
        <button
          type="button"
          className="aiu-snackbar__close"
          style={{
            marginLeft: 8,
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
}; 