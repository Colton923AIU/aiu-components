interface ITypewriterProps {
  /**
   * Text to be typed out
   */
  text: string | string[];

  /**
   * Typing speed in milliseconds per character
   */
  speed?: number;

  /**
   * Delay before typing starts in milliseconds
   */
  startDelay?: number;

  /**
   * Delay after typing completes in milliseconds
   */
  endDelay?: number;

  /**
   * Delay between sentences (if text is an array) in milliseconds
   */
  sentenceDelay?: number;

  /**
   * Whether to loop through the text
   */
  loop?: boolean;

  /**
   * Whether to erase text before typing the next sentence
   */
  eraseMode?: boolean;

  /**
   * Erasing speed in milliseconds per character
   */
  eraseSpeed?: number;

  /**
   * Cursor character
   */
  cursor?: string;

  /**
   * Whether to show the cursor
   */
  showCursor?: boolean;

  /**
   * When true, typing starts automatically. When false, typing starts when inView is true
   */
  autoStart?: boolean;

  /**
   * CSS class names
   */
  className?: string;

  /**
   * Callback function called when typing is complete
   */
  onComplete?: () => void;

  /**
   * Callback function called when typing starts
   */
  onStart?: () => void;

  /**
   * Callback function called before each character is typed
   */
  onBeforeType?: (char: string, currentText: string) => void;

  /**
   * Callback function called after each character is typed
   */
  onAfterType?: (char: string, currentText: string) => void;
}

export { ITypewriterProps }; 