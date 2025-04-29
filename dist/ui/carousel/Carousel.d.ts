import * as React from "react";
import { ReactNode, CSSProperties } from "react";
/**
 * Props for the Carousel component.
 */
export interface CarouselProps {
    /**
     * Carousel slides (children).
     */
    children: ReactNode[];
    /**
     * Enable auto-play.
     */
    autoPlay?: boolean;
    /**
     * Auto-play interval in ms.
     * @default 5000
     */
    interval?: number;
    /**
     * Show dot indicators.
     * @default true
     */
    showIndicators?: boolean;
    /**
     * Custom className for the carousel.
     */
    className?: string;
    /**
     * Custom style for the carousel.
     */
    style?: CSSProperties;
}
/**
 * A carousel for displaying slides with navigation.
 */
export declare const Carousel: React.FC<CarouselProps>;
//# sourceMappingURL=Carousel.d.ts.map