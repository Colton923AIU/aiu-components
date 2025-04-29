import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Alert type options.
 */
export type AlertType = "info" | "success" | "warning" | "error";

/**
 * Props for the Alert component.
 * Additional div props can be passed and will be spread onto the root element.
 */
export interface AlertProps {
  /**
   * Alert type/variant.
   * @default 'info'
   */
  type?: AlertType;
  /**
   * Optional title for the alert.
   */
  title?: ReactNode;
  /**
   * Optional icon (overrides default).
   */
  icon?: ReactNode;
  /**
   * Callback for close/dismiss action. If provided, shows a close button.
   */
  onClose?: () => void;
  /**
   * Custom className for the alert.
   */
  className?: string;
  /**
   * Custom style for the alert.
   */
  style?: CSSProperties;
  /**
   * Alert content/message.
   */
  children?: ReactNode;
  /**
   * Additional props for the root div.
   */
  [key: string]: any;
}

const typeMap: Record<AlertType, { color: string; icon: ReactNode }> = {
  info:    { color: "#1976d2", icon: <span>ℹ️</span> },
  success: { color: "#388e3c", icon: <span>✔️</span> },
  warning: { color: "#fbc02d", icon: <span>⚠️</span> },
  error:   { color: "#d32f2f", icon: <span>⛔</span> },
};

/**
 * An alert for important messages, warnings, or errors.
 */
export const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  icon,
  onClose,
  className,
  style,
  children,
  ...rest
}) => {
  const { color, icon: defaultIcon } = typeMap[type];
  const alertStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    background: `${color}11`,
    border: `1.5px solid ${color}55`,
    borderRadius: 8,
    padding: "12px 16px",
    color,
    ...style,
  };

  return (
    <div className={`aiu-alert aiu-alert--${type}${className ? ` ${className}` : ""}`} style={alertStyle} {...rest}>
      <span style={{ marginRight: 12, fontSize: 22, lineHeight: 1 }}>{icon ?? defaultIcon}</span>
      <div style={{ flex: 1 }}>
        {title && <div className="aiu-alert__title" style={{ fontWeight: 600, marginBottom: 2 }}>{title}</div>}
        <div className="aiu-alert__content">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="aiu-alert__close"
          style={{
            marginLeft: 12,
            background: "none",
            border: "none",
            color: "inherit",
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