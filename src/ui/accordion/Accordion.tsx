// NOTE: To support Array.prototype.includes, ensure 'es2016' or later is included in your tsconfig.json 'lib' option.
import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Accordion item definition.
 */
export interface AccordionItem {
  /**
   * Title/header for the panel.
   */
  title: ReactNode;
  /**
   * Content for the panel.
   */
  content: ReactNode;
  /**
   * Whether the panel is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the panel.
   */
  key?: string | number;
}

/**
 * Props for the Accordion component.
 */
export interface AccordionProps {
  /**
   * Array of accordion items.
   */
  items: AccordionItem[];
  /**
   * Indexes of open panels (controlled).
   * For single open, use a single number or null.
   * For multiple, use an array of numbers.
   */
  value: number | number[] | null;
  /**
   * Callback when open panels change.
   */
  onChange: (value: number | number[] | null) => void;
  /**
   * Allow multiple panels to be open at once.
   * @default false
   */
  multiple?: boolean;
  /**
   * Custom className for the accordion.
   */
  className?: string;
  /**
   * Custom style for the accordion.
   */
  style?: CSSProperties;
}

/**
 * An accordion for collapsible content panels.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  value,
  onChange,
  multiple = false,
  className,
  style,
}) => {
  const isOpen = (idx: number) => {
    if (multiple) return Array.isArray(value) && value.includes(idx);
    return value === idx;
  };

  const handleToggle = (idx: number, disabled?: boolean) => {
    if (disabled) return;
    if (multiple) {
      if (!Array.isArray(value)) return onChange([idx]);
      if (value.includes(idx)) {
        onChange(value.filter((i) => i !== idx));
      } else {
        onChange([...value, idx]);
      }
    } else {
      onChange(isOpen(idx) ? null : idx);
    }
  };

  return (
    <div className={`aiu-accordion${className ? ` ${className}` : ""}`} style={style}>
      {items.map((item, idx) => (
        <div key={item.key ?? idx} className={`aiu-accordion__item${item.disabled ? " aiu-accordion__item--disabled" : ""}`} style={{ borderBottom: "1px solid #eee" }}>
          <button
            className={`aiu-accordion__header${isOpen(idx) ? " aiu-accordion__header--open" : ""}`}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              padding: "16px 0",
              fontSize: 17,
              fontWeight: 600,
              color: item.disabled ? "#bbb" : "#1976d2",
              cursor: item.disabled ? "not-allowed" : "pointer",
              outline: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() => handleToggle(idx, item.disabled)}
            disabled={item.disabled}
            aria-expanded={isOpen(idx)}
            aria-controls={`aiu-accordion-panel-${idx}`}
            id={`aiu-accordion-header-${idx}`}
            tabIndex={item.disabled ? -1 : 0}
          >
            {item.title}
            <span style={{ marginLeft: 12, fontSize: 18, transition: "transform 0.2s", transform: isOpen(idx) ? "rotate(90deg)" : "rotate(0deg)" }}>▶</span>
          </button>
          <div
            id={`aiu-accordion-panel-${idx}`}
            role="region"
            aria-labelledby={`aiu-accordion-header-${idx}`}
            style={{
              maxHeight: isOpen(idx) ? 500 : 0,
              overflow: "hidden",
              transition: "max-height 0.3s cubic-bezier(.4,0,.2,1)",
              padding: isOpen(idx) ? "12px 0" : "0 0",
              opacity: isOpen(idx) ? 1 : 0,
            }}
            hidden={!isOpen(idx)}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}; 