import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Props for the Modal component.
 */
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Whether the modal is open.
     */
    open: boolean;
    /**
     * Callback for closing the modal.
     */
    onClose: () => void;
    /**
     * Optional modal title.
     */
    title?: ReactNode;
    /**
     * Optional footer (e.g., actions).
     */
    footer?: ReactNode;
    /**
     * Custom className for the modal.
     */
    className?: string;
    /**
     * Custom style for the modal.
     */
    style?: CSSProperties;
    /**
     * Modal content.
     */
    children?: ReactNode;
}
/**
 * A modal dialog for focused user interactions.
 */
export declare const Modal: React.FC<ModalProps>;
//# sourceMappingURL=Modal.d.ts.map