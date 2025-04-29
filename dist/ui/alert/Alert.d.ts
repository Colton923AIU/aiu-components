import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Alert type options.
 */
export type AlertType = "info" | "success" | "warning" | "error";
/**
 * Props for the Alert component.
 * Additional div props can be passed and will be spread onto the root element.
 */
export interface AlertProps {
    /**
     * Alert type/variant.
     * @default 'info'
     */
    type?: AlertType;
    /**
     * Optional title for the alert.
     */
    title?: ReactNode;
    /**
     * Optional icon (overrides default).
     */
    icon?: ReactNode;
    /**
     * Callback for close/dismiss action. If provided, shows a close button.
     */
    onClose?: () => void;
    /**
     * Custom className for the alert.
     */
    className?: string;
    /**
     * Custom style for the alert.
     */
    style?: CSSProperties;
    /**
     * Alert content/message.
     */
    children?: ReactNode;
    /**
     * Additional props for the root div.
     */
    [key: string]: any;
}
/**
 * An alert for important messages, warnings, or errors.
 */
export declare const Alert: React.FC<AlertProps>;
//# sourceMappingURL=Alert.d.ts.map