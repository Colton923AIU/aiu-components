import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Chip definition for the ChipGroup component.
 */
export interface ChipItem {
  /**
   * Chip label.
   */
  label: ReactNode;
  /**
   * Chip value.
   */
  value: string | number;
  /**
   * Optional icon.
   */
  icon?: ReactNode;
  /**
   * Whether the chip is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the chip.
   */
  key?: string | number;
}

/**
 * Props for the ChipGroup component.
 */
export interface ChipGroupProps {
  /**
   * Array of chips.
   */
  chips: ChipItem[];
  /**
   * Controlled selected value(s).
   */
  value: string | number | Array<string | number>;
  /**
   * Callback when selection changes.
   */
  onChange: (value: string | number | Array<string | number>) => void;
  /**
   * Allow multiple selection.
   */
  multiple?: boolean;
  /**
   * Callback for removing a chip (if removable).
   */
  onRemove?: (value: string | number) => void;
  /**
   * Custom className for the chip group.
   */
  className?: string;
  /**
   * Custom style for the chip group.
   */
  style?: CSSProperties;
}

/**
 * A group of selectable chips (tags).
 */
export const ChipGroup: React.FC<ChipGroupProps> = ({
  chips,
  value,
  onChange,
  multiple = false,
  onRemove,
  className,
  style,
}) => {
  const isSelected = (chipValue: string | number) =>
    multiple && Array.isArray(value)
      ? value.includes(chipValue)
      : value === chipValue;

  const handleSelect = (chipValue: string | number, disabled?: boolean) => {
    if (disabled) return;
    if (multiple) {
      if (!Array.isArray(value)) return onChange([chipValue]);
      if (value.includes(chipValue)) {
        onChange(value.filter((v) => v !== chipValue));
      } else {
        onChange([...value, chipValue]);
      }
    } else {
      onChange(chipValue);
    }
  };

  return (
    <div className={`aiu-chip-group${className ? ` ${className}` : ""}`} style={{ display: "flex", gap: 8, flexWrap: "wrap", ...style }}>
      {chips.map((chip, idx) => (
        <span key={chip.key ?? chip.value ?? idx} style={{ display: "inline-flex", alignItems: "center" }}>
          <button
            type="button"
            className={`aiu-chip${isSelected(chip.value) ? " aiu-chip--selected" : ""}${chip.disabled ? " aiu-chip--disabled" : ""}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 14px",
              borderRadius: 16,
              border: isSelected(chip.value) ? "1.5px solid #1976d2" : "1.5px solid #eee",
              background: isSelected(chip.value) ? "#f0f7ff" : "#fff",
              color: chip.disabled ? "#bbb" : isSelected(chip.value) ? "#1976d2" : "#333",
              fontSize: 15,
              cursor: chip.disabled ? "not-allowed" : "pointer",
              outline: "none",
              marginRight: 0,
              marginBottom: 0,
              transition: "all 0.2s",
            }}
            onClick={() => handleSelect(chip.value, chip.disabled)}
            disabled={chip.disabled}
            tabIndex={chip.disabled ? -1 : 0}
          >
            {chip.icon && <span className="aiu-chip__icon" style={{ marginRight: 8 }}>{chip.icon}</span>}
            {chip.label}
            {onRemove && (
              <button
                type="button"
                className="aiu-chip__remove"
                style={{
                  marginLeft: 8,
                  background: "none",
                  border: "none",
                  color: "#bbb",
                  cursor: "pointer",
                  fontSize: 16,
                  lineHeight: 1,
                  padding: 0,
                }}
                aria-label="Remove"
                onClick={e => {
                  e.stopPropagation();
                  onRemove(chip.value);
                }}
              >
                ×
              </button>
            )}
          </button>
        </span>
      ))}
    </div>
  );
}; 