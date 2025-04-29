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
export declare const Dropdown: React.FC<DropdownProps>;
//# sourceMappingURL=Dropdown.d.ts.map