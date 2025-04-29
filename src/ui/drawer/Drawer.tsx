import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";

/**
 * Drawer side options.
 */
export type DrawerSide = "left" | "right" | "top" | "bottom";

/**
 * Props for the Drawer component.
 */
export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Whether the drawer is open.
   */
  open: boolean;
  /**
   * Callback for closing the drawer.
   */
  onClose: () => void;
  /**
   * Side from which the drawer appears.
   * @default 'right'
   */
  side?: DrawerSide;
  /**
   * Optional drawer title.
   */
  title?: ReactNode;
  /**
   * Optional footer (e.g., actions).
   */
  footer?: ReactNode;
  /**
   * Custom className for the drawer.
   */
  className?: string;
  /**
   * Custom style for the drawer.
   */
  style?: CSSProperties;
  /**
   * Drawer content.
   */
  children?: ReactNode;
}

const getDrawerStyle = (side: DrawerSide): CSSProperties => {
  const base: CSSProperties = {
    position: "fixed",
    background: "#fff",
    zIndex: 1100,
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
    display: "flex",
    flexDirection: "column",
  };
  switch (side) {
    case "left":
      return { ...base, top: 0, left: 0, height: "100%", width: 340, transform: "translateX(0)" };
    case "right":
      return { ...base, top: 0, right: 0, height: "100%", width: 340, transform: "translateX(0)" };
    case "top":
      return { ...base, top: 0, left: 0, width: "100%", height: 320, transform: "translateY(0)" };
    case "bottom":
      return { ...base, bottom: 0, left: 0, width: "100%", height: 320, transform: "translateY(0)" };
    default:
      return base;
  }
};

/**
 * A sliding drawer for side panels or contextual content.
 */
export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  side = "right",
  title,
  footer,
  className,
  style,
  children,
  ...rest
}) => {
  if (!open) return null;

  return (
    <div className="aiu-drawer__backdrop" style={{ position: "fixed", inset: 0, background: "#0006", zIndex: 1099 }}>
      <div
        className={`aiu-drawer aiu-drawer--${side}${className ? ` ${className}` : ""}`}
        style={{ ...getDrawerStyle(side), ...style }}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <button
          type="button"
          className="aiu-drawer__close"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            fontSize: 22,
            color: "#888",
            cursor: "pointer",
            zIndex: 1,
          }}
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        {title && <div className="aiu-drawer__title" style={{ fontWeight: 600, fontSize: 20, margin: "24px 0 12px 0", textAlign: "center" }}>{title}</div>}
        <div className="aiu-drawer__content" style={{ flex: 1, padding: "0 24px 24px 24px", overflowY: "auto" }}>{children}</div>
        {footer && <div className="aiu-drawer__footer" style={{ borderTop: "1px solid #eee", padding: "16px 24px 0 24px", textAlign: "right" }}>{footer}</div>}
      </div>
    </div>
  );
}; 