interface IParallaxProps {
  /**
   * The content to be displayed with parallax effect
   */
  children: React.ReactNode;
  
  /**
   * Speed of the parallax effect (negative values move opposite to scroll)
   * - Default: 0.5
   * - Range: -1 to 1
   * - 0: No effect (normal scrolling)
   * - 1: Element stays fixed in place
   * - -1: Element moves twice as fast as scroll
   */
  speed?: number;
  
  /**
   * Height of the parallax container (in px or other CSS units)
   */
  height?: string;
  
  /**
   * Additional CSS className for the container
   */
  className?: string;
  
  /**
   * Optional background image URL
   */
  backgroundImage?: string;
  
  /**
   * Optional background position
   */
  backgroundPosition?: string;
  
  /**
   * Optional background size
   */
  backgroundSize?: string;
  
  /**
   * Optional CSS styles for the container
   */
  style?: React.CSSProperties;
}

export { IParallaxProps }; 