interface IScrollSpyProps {
  /**
   * CSS selector for the navigation container
   */
  navSelector: string;
  
  /**
   * CSS selector for navigation items
   */
  linkSelector: string;
  
  /**
   * CSS class to add to active navigation item
   */
  activeClass?: string;
  
  /**
   * Offset from the top to consider a section in view (in pixels)
   */
  offset?: number;
  
  /**
   * Threshold of visibility required to mark a section as active (0-1)
   */
  threshold?: number;
  
  /**
   * Function called when the active section changes
   */
  onChange?: (activeId: string, activeElement: HTMLElement) => void;
  
  /**
   * CSS selector for the scrollable container (defaults to window)
   */
  containerSelector?: string;
  
  /**
   * If true, smooth scrolling is enabled when clicking navigation items
   */
  smoothScroll?: boolean;
  
  /**
   * Behavior of the smooth scrolling
   */
  scrollBehavior?: ScrollBehavior;
  
  /**
   * Children (usually the content sections)
   */
  children: React.ReactNode;
}

export { IScrollSpyProps }; 