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
export declare const List: React.FC<ListProps>;
//# sourceMappingURL=List.d.ts.map