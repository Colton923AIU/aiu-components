import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Props for the Card component.
 */
export interface CardProps {
  /**
   * Optional header content (string or ReactNode).
   */
  header?: ReactNode;
  /**
   * Optional footer content (string or ReactNode).
   */
  footer?: ReactNode;
  /**
   * Card content.
   */
  children?: ReactNode;
  /**
   * Padding inside the card.
   * @default '1rem'
   */
  padding?: string | number;
  /**
   * Box shadow for the card.
   * @default '0 2px 8px rgba(0,0,0,0.08)'
   */
  shadow?: string;
  /**
   * Border radius for the card.
   * @default '8px'
   */
  radius?: string | number;
  /**
   * Custom className for the card.
   */
  className?: string;
  /**
   * Custom style for the card.
   */
  style?: CSSProperties;
}

/**
 * A container card with optional header and footer.
 */
export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  padding = "1rem",
  shadow = "0 2px 8px rgba(0,0,0,0.08)",
  radius = "8px",
  className,
  style,
}) => {
  const cardStyle: CSSProperties = {
    background: "#fff",
    boxShadow: shadow,
    borderRadius: radius,
    padding,
    ...style,
  };

  return (
    <div className={`aiu-card${className ? ` ${className}` : ""}`} style={cardStyle}>
      {header && <div className="aiu-card__header">{header}</div>}
      <div className="aiu-card__body">{children}</div>
      {footer && <div className="aiu-card__footer">{footer}</div>}
    </div>
  );
}; 