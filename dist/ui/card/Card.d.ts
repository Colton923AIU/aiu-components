import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Props for the Card component.
 */
export interface CardProps {
    /**
     * Optional header content (string or ReactNode).
     */
    header?: ReactNode;
    /**
     * Optional footer content (string or ReactNode).
     */
    footer?: ReactNode;
    /**
     * Card content.
     */
    children?: ReactNode;
    /**
     * Padding inside the card.
     * @default '1rem'
     */
    padding?: string | number;
    /**
     * Box shadow for the card.
     * @default '0 2px 8px rgba(0,0,0,0.08)'
     */
    shadow?: string;
    /**
     * Border radius for the card.
     * @default '8px'
     */
    radius?: string | number;
    /**
     * Custom className for the card.
     */
    className?: string;
    /**
     * Custom style for the card.
     */
    style?: CSSProperties;
}
/**
 * A container card with optional header and footer.
 */
export declare const Card: React.FC<CardProps>;
//# sourceMappingURL=Card.d.ts.map