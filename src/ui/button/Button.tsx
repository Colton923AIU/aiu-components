import * as React from "react";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, CSSProperties } from "react";
import "./button.scss"; // Import directly without using CSS modules

/**
 * Button variants for styling.
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "text";

/**
 * Props for the Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Show a loading spinner instead of children.
   * @default false
   */
  loading?: boolean;
  /**
   * If true, disables the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional icon to render before the children.
   */
  icon?: ReactNode;
  /**
   * Optional icon to render after the children.
   */
  iconAfter?: ReactNode;
  /**
   * If provided, renders as an anchor tag.
   */
  href?: string;
  /**
   * Custom className for the button.
   */
  className?: string;
  /**
   * For button variant that uses subtle styling.
   */
  subtle?: boolean;
  /**
   * Custom style for the button.
   */
  style?: CSSProperties;
  /**
   * Button content.
   */
  children?: ReactNode;
}

/**
 * A customizable button component supporting variants, loading, and icons.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  disabled = false,
  icon,
  iconAfter,
  href,
  className = "",
  subtle = false,
  style,
  children,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const baseClass = "aiu-btn";
  const variantClass = `aiu-btn--${variant}`;
  const disabledClass = isDisabled ? "aiu-btn--disabled" : "";
  const subtleClass = subtle ? "subtle" : "";
  const classes = `${baseClass} ${variantClass} ${disabledClass} ${subtleClass} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="aiu-btn__icon">{icon}</span>}
      {loading ? <span className="aiu-btn__spinner">...</span> : children}
      {iconAfter && <span className="aiu-btn__icon-after">{iconAfter}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      style={style}
      disabled={isDisabled}
      {...rest}
    >
      {content}
    </button>
  );
}; 