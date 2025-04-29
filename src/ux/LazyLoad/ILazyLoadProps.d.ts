interface ILazyLoadProps {
  /**
   * The content to be lazily loaded
   */
  children: React.ReactNode;
  
  /**
   * Optional placeholder to show while content is loading
   */
  placeholder?: React.ReactNode;
  
  /**
   * Height of the placeholder (in px or other CSS units)
   */
  height?: string;
  
  /**
   * Width of the placeholder (in px or other CSS units)
   */
  width?: string;
  
  /**
   * Delay in ms before loading the content (for testing or UX purposes)
   */
  delay?: number;
  
  /**
   * Additional CSS className for the container
   */
  className?: string;
}

export { ILazyLoadProps }; 