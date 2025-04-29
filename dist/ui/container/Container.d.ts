import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";
/**
 * Predefined maxWidth options for the Container.
 */
export type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | number | string;
/**
 * Props for the Container component.
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Maximum width of the container (predefined or custom).
     * @default 'lg'
     */
    maxWidth?: ContainerMaxWidth;
    /**
     * Padding inside the container.
     */
    p?: number | string;
    /**
     * Custom className for the container.
     */
    className?: string;
    /**
     * Custom style for the container.
     */
    style?: CSSProperties;
    /**
     * Container content.
     */
    children?: ReactNode;
}
/**
 * A responsive container for constraining content width and centering.
 */
export declare const Container: React.FC<ContainerProps>;
//# sourceMappingURL=Container.d.ts.map