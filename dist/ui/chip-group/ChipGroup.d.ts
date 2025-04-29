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
export declare const ChipGroup: React.FC<ChipGroupProps>;
//# sourceMappingURL=ChipGroup.d.ts.map