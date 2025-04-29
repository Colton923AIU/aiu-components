import * as React from "react";
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";
import "./button.scss";
/**
 * Button variants for styling.
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
/**
 * Props for the Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The variant of the button.
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * Show a loading spinner instead of children.
     * @default false
     */
    loading?: boolean;
    /**
     * If true, disables the button.
     * @default false
     */
    disabled?: boolean;
    /**
     * Optional icon to render before the children.
     */
    icon?: ReactNode;
    /**
     * Optional icon to render after the children.
     */
    iconAfter?: ReactNode;
    /**
     * If provided, renders as an anchor tag.
     */
    href?: string;
    /**
     * Custom className for the button.
     */
    className?: string;
    /**
     * For button variant that uses subtle styling.
     */
    subtle?: boolean;
    /**
     * Custom style for the button.
     */
    style?: CSSProperties;
    /**
     * Button content.
     */
    children?: ReactNode;
}
/**
 * A customizable button component supporting variants, loading, and icons.
 */
export declare const Button: React.FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map