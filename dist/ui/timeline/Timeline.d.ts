import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Timeline item definition.
 */
export interface TimelineItem {
    /**
     * Label/title for the event.
     */
    label: ReactNode;
    /**
     * Content/description for the event.
     */
    content?: ReactNode;
    /**
     * Optional icon for the event.
     */
    icon?: ReactNode;
    /**
     * Optional time or date for the event.
     */
    time?: ReactNode;
    /**
     * Optional key for the event.
     */
    key?: string | number;
}
/**
 * Timeline orientation options.
 */
export type TimelineOrientation = "vertical" | "horizontal";
/**
 * Props for the Timeline component.
 */
export interface TimelineProps {
    /**
     * Array of timeline items.
     */
    items: TimelineItem[];
    /**
     * Orientation of the timeline.
     * @default 'vertical'
     */
    orientation?: TimelineOrientation;
    /**
     * Custom className for the timeline.
     */
    className?: string;
    /**
     * Custom style for the timeline.
     */
    style?: CSSProperties;
}
/**
 * A timeline for displaying a sequence of events.
 */
export declare const Timeline: React.FC<TimelineProps>;
//# sourceMappingURL=Timeline.d.ts.map