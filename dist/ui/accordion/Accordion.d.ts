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
export declare const Accordion: React.FC<AccordionProps>;
//# sourceMappingURL=Accordion.d.ts.map