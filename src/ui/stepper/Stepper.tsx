import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Step definition for the Stepper component.
 */
export interface StepItem {
  /**
   * Step label (string or ReactNode).
   */
  label: ReactNode;
  /**
   * Optional icon for the step.
   */
  icon?: ReactNode;
  /**
   * Optional description for the step.
   */
  description?: ReactNode;
  /**
   * Whether the step is completed.
   */
  completed?: boolean;
  /**
   * Whether the step is disabled.
   */
  disabled?: boolean;
  /**
   * Optional key for the step.
   */
  key?: string | number;
}

/**
 * Stepper orientation options.
 */
export type StepperOrientation = "horizontal" | "vertical";

/**
 * Props for the Stepper component.
 */
export interface StepperProps {
  /**
   * Array of step definitions.
   */
  steps: StepItem[];
  /**
   * Index of the active step (controlled).
   */
  activeStep: number;
  /**
   * Callback when the active step changes.
   */
  onChange?: (index: number) => void;
  /**
   * Orientation of the stepper.
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;
  /**
   * Custom className for the stepper.
   */
  className?: string;
  /**
   * Custom style for the stepper.
   */
  style?: CSSProperties;
}

/**
 * A stepper for multi-step processes.
 */
export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onChange,
  orientation = "horizontal",
  className,
  style,
}) => {
  return (
    <div
      className={`aiu-stepper aiu-stepper--${orientation}${className ? ` ${className}` : ""}`}
      style={{ display: orientation === "vertical" ? "block" : "flex", ...style }}
      role="list"
    >
      {steps.map((step, idx) => {
        const isActive = idx === activeStep;
        const isCompleted = step.completed || idx < activeStep;
        const isDisabled = step.disabled;
        return (
          <div
            key={step.key ?? idx}
            className={`aiu-stepper__step${isActive ? " aiu-stepper__step--active" : ""}${isCompleted ? " aiu-stepper__step--completed" : ""}${isDisabled ? " aiu-stepper__step--disabled" : ""}`}
            style={{
              display: orientation === "vertical" ? "block" : "flex",
              alignItems: "center",
              cursor: isDisabled ? "not-allowed" : onChange ? "pointer" : "default",
              opacity: isDisabled ? 0.5 : 1,
              marginRight: orientation === "horizontal" && idx < steps.length - 1 ? 32 : 0,
              marginBottom: orientation === "vertical" && idx < steps.length - 1 ? 24 : 0,
            }}
            onClick={() => !isDisabled && onChange && onChange(idx)}
            role="listitem"
            aria-current={isActive ? "step" : undefined}
            aria-disabled={isDisabled}
            tabIndex={isDisabled ? -1 : 0}
          >
            <span
              className="aiu-stepper__circle"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: isCompleted ? "#1976d2" : isActive ? "#fff" : "#eee",
                border: `2px solid ${isActive ? "#1976d2" : isCompleted ? "#1976d2" : "#ccc"}`,
                color: isCompleted ? "#fff" : isActive ? "#1976d2" : "#888",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 16,
                marginRight: 12,
                boxSizing: "border-box",
                transition: "all 0.2s",
              }}
            >
              {step.icon ? step.icon : isCompleted ? <span>✔</span> : idx + 1}
            </span>
            <span className="aiu-stepper__label" style={{ fontWeight: isActive ? 600 : 400, color: isActive ? "#1976d2" : undefined }}>{step.label}</span>
            {step.description && (
              <span className="aiu-stepper__description" style={{ marginLeft: 8, color: "#888", fontSize: 13 }}>{step.description}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}; 