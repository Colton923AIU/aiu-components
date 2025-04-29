import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Tab definition for the Tabs component.
 */
export interface TabItem {
  /**
   * Tab label (string or ReactNode).
   */
  label: ReactNode;
  /**
   * Tab content.
   */
  content: ReactNode;
  /**
   * Whether the tab is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the tab (for advanced usage).
   */
  key?: string | number;
}

/**
 * Props for the Tabs component.
 */
export interface TabsProps {
  /**
   * Array of tab definitions.
   */
  tabs: TabItem[];
  /**
   * Index of the active tab (controlled).
   */
  value: number;
  /**
   * Callback when the active tab changes.
   */
  onChange: (index: number) => void;
  /**
   * Custom className for the tabs.
   */
  className?: string;
  /**
   * Custom style for the tabs.
   */
  style?: CSSProperties;
}

/**
 * A tabbed interface for organizing content.
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onChange,
  className,
  style,
}) => {
  return (
    <div className={`aiu-tabs${className ? ` ${className}` : ""}`} style={style}>
      <div className="aiu-tabs__list" style={{ display: "flex", borderBottom: "1.5px solid #eee" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.key ?? i}
            className={`aiu-tabs__tab${i === value ? " aiu-tabs__tab--active" : ""}${tab.disabled ? " aiu-tabs__tab--disabled" : ""}`}
            style={{
              padding: "10px 20px",
              border: "none",
              background: "none",
              borderBottom: i === value ? "2.5px solid #1976d2" : "2.5px solid transparent",
              color: tab.disabled ? "#bbb" : i === value ? "#1976d2" : "#333",
              fontWeight: i === value ? 600 : 400,
              fontSize: 16,
              cursor: tab.disabled ? "not-allowed" : "pointer",
              outline: "none",
              transition: "color 0.2s, border-bottom 0.2s",
              marginRight: 8,
              backgroundClip: "padding-box",
            }}
            disabled={tab.disabled}
            onClick={() => !tab.disabled && onChange(i)}
            tabIndex={tab.disabled ? -1 : 0}
            aria-selected={i === value}
            aria-disabled={tab.disabled}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="aiu-tabs__panel" style={{ padding: "20px 0" }} role="tabpanel">
        {tabs[value]?.content}
      </div>
    </div>
  );
}; 