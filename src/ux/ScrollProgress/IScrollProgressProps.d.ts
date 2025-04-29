interface IScrollProgressProps {
  /**
   * Height of the progress bar in px
   */
  height?: number;
  
  /**
   * Color of the progress bar
   */
  color?: string;
  
  /**
   * Background color of the progress track
   */
  backgroundColor?: string;
  
  /**
   * Position of the progress bar
   */
  position?: 'top' | 'bottom';
  
  /**
   * Whether to show the progress percentage
   */
  showPercentage?: boolean;
  
  /**
   * Z-index of the progress bar
   */
  zIndex?: number;
  
  /**
   * Additional CSS className for the container
   */
  className?: string;
  
  /**
   * Whether the progress bar should be fixed or absolute positioned
   */
  fixed?: boolean;
  
  /**
   * Callback function that gets called when progress changes
   */
  onProgressChange?: (progress: number) => void;
}

export { IScrollProgressProps }; 