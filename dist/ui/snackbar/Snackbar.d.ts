import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Snackbar position options.
 */
export type SnackbarPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "bottom" | "top";
/**
 * Props for the Snackbar component.
 */
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether the snackbar is open.
     */
    open: boolean;
    /**
     * Snackbar message/content.
     */
    message: ReactNode;
    /**
     * Optional action (e.g., button).
     */
    action?: ReactNode;
    /**
     * Auto-hide duration in ms.
     */
    autoHideDuration?: number;
    /**
     * Position of the snackbar.
     * @default 'bottom'
     */
    position?: SnackbarPosition;
    /**
     * Callback for closing the snackbar.
     */
    onClose?: () => void;
    /**
     * Custom className for the snackbar.
     */
    className?: string;
    /**
     * Custom style for the snackbar.
     */
    style?: CSSProperties;
}
/**
 * A snackbar for brief notifications or messages.
 */
export declare const Snackbar: React.FC<SnackbarProps>;
//# sourceMappingURL=Snackbar.d.ts.map