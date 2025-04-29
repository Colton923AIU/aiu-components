import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Breadcrumb item definition.
 */
export interface BreadcrumbItem {
  /**
   * Label for the breadcrumb.
   */
  label: ReactNode;
  /**
   * Optional link href.
   */
  href?: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * Optional icon.
   */
  icon?: ReactNode;
  /**
   * Optional key for the item.
   */
  key?: string | number;
}

/**
 * Props for the Breadcrumbs component.
 */
export interface BreadcrumbsProps {
  /**
   * Array of breadcrumb items.
   */
  items: BreadcrumbItem[];
  /**
   * Separator between items.
   * @default '/'
   */
  separator?: ReactNode;
  /**
   * Custom className for the breadcrumbs.
   */
  className?: string;
  /**
   * Custom style for the breadcrumbs.
   */
  style?: CSSProperties;
}

/**
 * Breadcrumbs for navigation hierarchy.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = "/",
  className,
  style,
}) => {
  return (
    <nav className={`aiu-breadcrumbs${className ? ` ${className}` : ""}`} style={{ display: "flex", alignItems: "center", ...style }} aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.key ?? idx} style={{ display: "flex", alignItems: "center" }}>
            {item.icon && <span className="aiu-breadcrumbs__icon" style={{ marginRight: 4 }}>{item.icon}</span>}
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="aiu-breadcrumbs__link"
                style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500 }}
                onClick={item.onClick}
              >
                {item.label}
              </a>
            ) : item.onClick && !isLast ? (
              <button
                type="button"
                className="aiu-breadcrumbs__button"
                style={{ color: "#1976d2", background: "none", border: "none", cursor: "pointer", fontWeight: 500, padding: 0 }}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            ) : (
              <span className="aiu-breadcrumbs__current" style={{ color: "#888", fontWeight: 500 }}>{item.label}</span>
            )}
            {!isLast && <span className="aiu-breadcrumbs__separator" style={{ margin: "0 8px" }}>{separator}</span>}
          </span>
        );
      })}
    </nav>
  );
}; 