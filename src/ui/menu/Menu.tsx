import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Menu item definition.
 */
export interface MenuItem {
  /**
   * Label for the menu item.
   */
  label: ReactNode;
  /**
   * Click handler for the item.
   */
  onClick?: () => void;
  /**
   * Optional icon.
   */
  icon?: ReactNode;
  /**
   * Whether the item is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the item.
   */
  key?: string | number;
}

/**
 * Props for the Menu component.
 */
export interface MenuProps {
  /**
   * Whether the menu is open.
   */
  open: boolean;
  /**
   * Anchor element for positioning (optional).
   */
  anchorEl?: HTMLElement | null;
  /**
   * Array of menu items.
   */
  items: MenuItem[];
  /**
   * Callback for closing the menu.
   */
  onClose: () => void;
  /**
   * Optional header content.
   */
  header?: ReactNode;
  /**
   * Optional footer content.
   */
  footer?: ReactNode;
  /**
   * Custom className for the menu.
   */
  className?: string;
  /**
   * Custom style for the menu.
   */
  style?: CSSProperties;
}

/**
 * A dropdown menu for actions or navigation.
 */
export const Menu: React.FC<MenuProps> = ({
  open,
  anchorEl,
  items,
  onClose,
  header,
  footer,
  className,
  style,
}) => {
  const [position, setPosition] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });

  React.useEffect(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
  }, [open, anchorEl]);

  if (!open) return null;

  return (
    <div
      className={`aiu-menu__backdrop`}
      style={{ position: "fixed", inset: 0, zIndex: 1300, background: "transparent" }}
      onClick={onClose}
      tabIndex={-1}
    >
      <div
        className={`aiu-menu${className ? ` ${className}` : ""}`}
        style={{
          position: anchorEl ? "absolute" : "fixed",
          top: anchorEl ? position.top : "50%",
          left: anchorEl ? position.left : "50%",
          transform: anchorEl ? undefined : "translate(-50%, -50%)",
          minWidth: 180,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          zIndex: 1301,
          padding: 0,
          ...style,
        }}
        onClick={e => e.stopPropagation()}
        role="menu"
      >
        {header && <div className="aiu-menu__header" style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>{header}</div>}
        <div className="aiu-menu__list" style={{ padding: "8px 0" }}>
          {items.map((item, idx) => (
            <button
              key={item.key ?? idx}
              className={`aiu-menu__item${item.disabled ? " aiu-menu__item--disabled" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "none",
                border: "none",
                padding: "10px 20px",
                fontSize: 15,
                color: item.disabled ? "#bbb" : "#333",
                cursor: item.disabled ? "not-allowed" : "pointer",
                outline: "none",
                textAlign: "left",
                transition: "background 0.2s",
              }}
              onClick={() => {
                if (!item.disabled && item.onClick) item.onClick();
                if (!item.disabled) onClose();
              }}
              disabled={item.disabled}
              role="menuitem"
              tabIndex={item.disabled ? -1 : 0}
            >
              {item.icon && <span className="aiu-menu__icon" style={{ marginRight: 10 }}>{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
        {footer && <div className="aiu-menu__footer" style={{ padding: "12px 16px", borderTop: "1px solid #eee" }}>{footer}</div>}
      </div>
    </div>
  );
}; 