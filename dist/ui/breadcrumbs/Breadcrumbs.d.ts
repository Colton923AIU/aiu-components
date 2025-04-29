import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Breadcrumb item definition.
 */
export interface BreadcrumbItem {
    /**
     * Label for the breadcrumb.
     */
    label: ReactNode;
    /**
     * Optional link href.
     */
    href?: string;
    /**
     * Optional click handler.
     */
    onClick?: () => void;
    /**
     * Optional icon.
     */
    icon?: ReactNode;
    /**
     * Optional key for the item.
     */
    key?: string | number;
}
/**
 * Props for the Breadcrumbs component.
 */
export interface BreadcrumbsProps {
    /**
     * Array of breadcrumb items.
     */
    items: BreadcrumbItem[];
    /**
     * Separator between items.
     * @default '/'
     */
    separator?: ReactNode;
    /**
     * Custom className for the breadcrumbs.
     */
    className?: string;
    /**
     * Custom style for the breadcrumbs.
     */
    style?: CSSProperties;
}
/**
 * Breadcrumbs for navigation hierarchy.
 */
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
//# sourceMappingURL=Breadcrumbs.d.ts.map