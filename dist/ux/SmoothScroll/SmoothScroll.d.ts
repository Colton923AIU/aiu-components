import * as React from 'react';
import { ISmoothScrollProps } from './ISmoothScrollProps';
/**
 * Interface for the SmoothScroll ref methods
 */
export interface SmoothScrollRef {
    scrollTo: (targetId: string) => void;
}
/**
 * SmoothScroll component that provides smooth scrolling to anchor links
 */
declare const SmoothScroll: React.ForwardRefExoticComponent<ISmoothScrollProps & React.RefAttributes<SmoothScrollRef>>;
export { SmoothScroll };
//# sourceMappingURL=SmoothScroll.d.ts.map