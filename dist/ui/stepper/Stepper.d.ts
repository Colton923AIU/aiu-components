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
export declare const Stepper: React.FC<StepperProps>;
//# sourceMappingURL=Stepper.d.ts.map