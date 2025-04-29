import * as React from 'react';
import { IToastItemProps } from './IToastProps';
/**
 * Props for ToastItem component with onRemove function
 */
interface ToastItemComponentProps extends IToastItemProps {
    /** Function to remove toast from container */
    onRemove: (id: string) => void;
}
/**
 * Individual Toast notification component
 */
declare const ToastItem: React.FC<ToastItemComponentProps>;
export default ToastItem;
//# sourceMappingURL=ToastItem.d.ts.map