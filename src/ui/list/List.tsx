import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * List item definition.
 */
export interface ListItem {
  /**
   * Label for the item.
   */
  label: ReactNode;
  /**
   * Optional icon.
   */
  icon?: ReactNode;
  /**
   * Optional description.
   */
  description?: ReactNode;
  /**
   * Click handler for the item.
   */
  onClick?: () => void;
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
 * Props for the List component.
 */
export interface ListProps {
  /**
   * Array of list items.
   */
  items: ListItem[];
  /**
   * Optional header content.
   */
  header?: ReactNode;
  /**
   * Optional footer content.
   */
  footer?: ReactNode;
  /**
   * Callback when an item is selected (returns index or array of indexes).
   */
  onSelect?: (selected: number | number[]) => void;
  /**
   * Selected index (single) or array of indexes (multiple).
   */
  selected?: number | number[];
  /**
   * Allow multiple selection.
   */
  multiple?: boolean;
  /**
   * Show divider between items.
   */
  divider?: boolean;
  /**
   * Custom className for the list.
   */
  className?: string;
  /**
   * Custom style for the list.
   */
  style?: CSSProperties;
}

/**
 * A list for displaying collections of items.
 */
export const List: React.FC<ListProps> = ({
  items,
  header,
  footer,
  onSelect,
  selected,
  multiple = false,
  divider = false,
  className,
  style,
}) => {
  const isSelected = (idx: number) =>
    multiple && Array.isArray(selected)
      ? selected.includes(idx)
      : selected === idx;

  const handleSelect = (idx: number, disabled?: boolean) => {
    if (disabled || !onSelect) return;
    if (multiple) {
      if (!Array.isArray(selected)) return onSelect([idx]);
      if (selected.includes(idx)) {
        onSelect(selected.filter((i) => i !== idx));
      } else {
        onSelect([...selected, idx]);
      }
    } else {
      onSelect(idx);
    }
  };

  return (
    <div className={`aiu-list${className ? ` ${className}` : ""}`} style={{ ...style }}>
      {header && <div className="aiu-list__header" style={{ padding: "12px 16px", borderBottom: "1px solid #eee", fontWeight: 500 }}>{header}</div>}
      <div className="aiu-list__items">
        {items.map((item, idx) => (
          <div key={item.key ?? idx}>
            <button
              className={`aiu-list__item${isSelected(idx) ? " aiu-list__item--selected" : ""}${item.disabled ? " aiu-list__item--disabled" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: isSelected(idx) ? "#f0f7ff" : "#fff",
                border: "none",
                padding: "12px 16px",
                fontSize: 15,
                color: item.disabled ? "#bbb" : "#333",
                cursor: item.disabled ? "not-allowed" : "pointer",
                outline: "none",
                textAlign: "left",
                borderBottom: divider ? "1px solid #eee" : undefined,
              }}
              onClick={() => handleSelect(idx, item.disabled)}
              disabled={item.disabled}
              tabIndex={item.disabled ? -1 : 0}
            >
              {item.icon && <span className="aiu-list__icon" style={{ marginRight: 12 }}>{item.icon}</span>}
              <span className="aiu-list__label" style={{ flex: 1 }}>{item.label}</span>
              {item.description && <span className="aiu-list__description" style={{ marginLeft: 8, color: "#888", fontSize: 13 }}>{item.description}</span>}
            </button>
          </div>
        ))}
      </div>
      {footer && <div className="aiu-list__footer" style={{ padding: "12px 16px", borderTop: "1px solid #eee" }}>{footer}</div>}
    </div>
  );
}; 