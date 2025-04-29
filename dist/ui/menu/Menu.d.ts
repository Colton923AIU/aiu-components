import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Menu item definition.
 */
export interface MenuItem {
    /**
     * Label for the menu item.
     */
    label: ReactNode;
    /**
     * Click handler for the item.
     */
    onClick?: () => void;
    /**
     * Optional icon.
     */
    icon?: ReactNode;
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
 * Props for the Menu component.
 */
export interface MenuProps {
    /**
     * Whether the menu is open.
     */
    open: boolean;
    /**
     * Anchor element for positioning (optional).
     */
    anchorEl?: HTMLElement | null;
    /**
     * Array of menu items.
     */
    items: MenuItem[];
    /**
     * Callback for closing the menu.
     */
    onClose: () => void;
    /**
     * Optional header content.
     */
    header?: ReactNode;
    /**
     * Optional footer content.
     */
    footer?: ReactNode;
    /**
     * Custom className for the menu.
     */
    className?: string;
    /**
     * Custom style for the menu.
     */
    style?: CSSProperties;
}
/**
 * A dropdown menu for actions or navigation.
 */
export declare const Menu: React.FC<MenuProps>;
//# sourceMappingURL=Menu.d.ts.map