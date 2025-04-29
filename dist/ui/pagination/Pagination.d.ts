import * as React from "react";
import { CSSProperties } from "react";
/**
 * Props for the Pagination component.
 */
export interface PaginationProps {
    /**
     * Current page (1-based).
     */
    page: number;
    /**
     * Total number of pages.
     */
    pageCount: number;
    /**
     * Callback when the page changes.
     */
    onChange: (page: number) => void;
    /**
     * Custom className for the pagination.
     */
    className?: string;
    /**
     * Custom style for the pagination.
     */
    style?: CSSProperties;
}
/**
 * Pagination for navigating through pages of data.
 */
export declare const Pagination: React.FC<PaginationProps>;
//# sourceMappingURL=Pagination.d.ts.map