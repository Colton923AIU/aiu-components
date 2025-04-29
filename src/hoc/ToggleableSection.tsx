import * as React from "react";

/**
 * Props for ToggleableSection HOC.
 */
export interface ToggleableSectionProps {
  initialOpen?: boolean;
  toggleLabel?: string | ((open: boolean) => React.ReactNode);
}

/**
 * Higher Order Component to add toggling (show/hide) functionality to a section.
 * @param Component - The component to wrap.
 */
export function ToggleableSection<P extends object>(Component: React.ComponentType<P>) {
  return function ToggleableSectionComponent(props: P & ToggleableSectionProps) {
    const { initialOpen = false, toggleLabel, ...rest } = props as ToggleableSectionProps;
    const [open, setOpen] = React.useState(initialOpen);
    const label = typeof toggleLabel === "function" ? toggleLabel(open) : toggleLabel || (open ? "Hide" : "Show");
    return (
      <div className="aiu-toggleable-section">
        <button type="button" onClick={() => setOpen((v) => !v)} style={{ marginBottom: 8 }}>
          {label}
        </button>
        {open && <Component {...(rest as P)} />}
      </div>
    );
  };
} 