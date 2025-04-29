import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";

/**
 * Props for the Modal component.
 */
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Whether the modal is open.
   */
  open: boolean;
  /**
   * Callback for closing the modal.
   */
  onClose: () => void;
  /**
   * Optional modal title.
   */
  title?: ReactNode;
  /**
   * Optional footer (e.g., actions).
   */
  footer?: ReactNode;
  /**
   * Custom className for the modal.
   */
  className?: string;
  /**
   * Custom style for the modal.
   */
  style?: CSSProperties;
  /**
   * Modal content.
   */
  children?: ReactNode;
}

/**
 * A modal dialog for focused user interactions.
 */
export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  footer,
  className,
  style,
  children,
  ...rest
}) => {
  if (!open) return null;

  return (
    <div className="aiu-modal__backdrop" style={{ position: "fixed", inset: 0, background: "#0008", zIndex: 1000 }}>
      <div
        className={`aiu-modal${className ? ` ${className}` : ""}`}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          borderRadius: 12,
          minWidth: 320,
          maxWidth: 480,
          width: "90%",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          zIndex: 1001,
          ...style,
        }}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        <button
          type="button"
          className="aiu-modal__close"
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
        {title && <div className="aiu-modal__title" style={{ fontWeight: 600, fontSize: 20, margin: "24px 0 12px 0", textAlign: "center" }}>{title}</div>}
        <div className="aiu-modal__content" style={{ padding: "0 24px 24px 24px" }}>{children}</div>
        {footer && <div className="aiu-modal__footer" style={{ borderTop: "1px solid #eee", padding: "16px 24px 0 24px", textAlign: "right" }}>{footer}</div>}
      </div>
    </div>
  );
}; 