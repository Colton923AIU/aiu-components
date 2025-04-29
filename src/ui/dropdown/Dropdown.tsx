import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Dropdown option definition.
 */
export interface DropdownOption {
  /**
   * Option label.
   */
  label: ReactNode;
  /**
   * Option value.
   */
  value: string | number;
  /**
   * Optional icon.
   */
  icon?: ReactNode;
  /**
   * Whether the option is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the option.
   */
  key?: string | number;
}

/**
 * Props for the Dropdown component.
 */
export interface DropdownProps {
  /**
   * Label for the dropdown.
   */
  label?: ReactNode;
  /**
   * Controlled value.
   */
  value: string | number | null;
  /**
   * Callback when value changes.
   */
  onChange: (value: string | number | null) => void;
  /**
   * Array of options.
   */
  options: DropdownOption[];
  /**
   * Placeholder text.
   */
  placeholder?: string;
  /**
   * Custom className for the dropdown.
   */
  className?: string;
  /**
   * Custom style for the dropdown.
   */
  style?: CSSProperties;
  /**
   * Whether the dropdown is disabled.
   */
  disabled?: boolean;
}

/**
 * A dropdown select for choosing a value from a list.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
  className,
  style,
  disabled = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const selected = options.find(opt => opt.value === value);

  return (
    <div
      className={`aiu-dropdown${className ? ` ${className}` : ""}${disabled ? " aiu-dropdown--disabled" : ""}`}
      style={{ position: "relative", ...style }}
      ref={ref}
    >
      {label && <div className="aiu-dropdown__label" style={{ marginBottom: 6, fontWeight: 500 }}>{label}</div>}
      <button
        type="button"
        className="aiu-dropdown__button"
        style={{
          width: "100%",
          padding: "10px 16px",
          borderRadius: 8,
          border: "1.5px solid #eee",
          background: disabled ? "#f9f9f9" : "#fff",
          color: disabled ? "#bbb" : selected ? "#333" : "#888",
          fontSize: 15,
          textAlign: "left",
          cursor: disabled ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={() => !disabled && setOpen(o => !o)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          {selected?.icon && <span style={{ marginRight: 8 }}>{selected.icon}</span>}
          {selected ? selected.label : <span style={{ color: "#bbb" }}>{placeholder}</span>}
        </span>
        <span style={{ marginLeft: 8, fontSize: 18, color: "#bbb" }}>{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div
          className="aiu-dropdown__list"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1.5px solid #eee",
            borderRadius: 8,
            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
            marginTop: 4,
            zIndex: 1200,
            maxHeight: 260,
            overflowY: "auto",
          }}
          role="listbox"
        >
          {options.map((opt, idx) => (
            <button
              key={opt.key ?? opt.value ?? idx}
              className={`aiu-dropdown__option${opt.value === value ? " aiu-dropdown__option--selected" : ""}${opt.disabled ? " aiu-dropdown__option--disabled" : ""}`}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: opt.value === value ? "#f0f7ff" : "#fff",
                color: opt.disabled ? "#bbb" : "#333",
                border: "none",
                textAlign: "left",
                cursor: opt.disabled ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                fontSize: 15,
              }}
              onClick={() => {
                if (!opt.disabled) {
                  onChange(opt.value);
                  setOpen(false);
                }
              }}
              disabled={opt.disabled}
              role="option"
              aria-selected={opt.value === value}
              tabIndex={opt.disabled ? -1 : 0}
            >
              {opt.icon && <span style={{ marginRight: 8 }}>{opt.icon}</span>}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 