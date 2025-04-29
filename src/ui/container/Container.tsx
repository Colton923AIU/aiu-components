import * as React from "react";
import { ReactNode, CSSProperties, HTMLAttributes } from "react";

/**
 * Predefined maxWidth options for the Container.
 */
export type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl" | number | string;

/**
 * Props for the Container component.
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container (predefined or custom).
   * @default 'lg'
   */
  maxWidth?: ContainerMaxWidth;
  /**
   * Padding inside the container.
   */
  p?: number | string;
  /**
   * Custom className for the container.
   */
  className?: string;
  /**
   * Custom style for the container.
   */
  style?: CSSProperties;
  /**
   * Container content.
   */
  children?: ReactNode;
}

const maxWidthMap: Record<string, string> = {
  xs: "360px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

/**
 * A responsive container for constraining content width and centering.
 */
export const Container: React.FC<ContainerProps> = ({
  maxWidth = "lg",
  p,
  className,
  style,
  children,
  ...rest
}) => {
  const resolvedMaxWidth =
    typeof maxWidth === "number"
      ? `${maxWidth}px`
      : maxWidthMap[maxWidth as string] || maxWidth;

  const containerStyle: CSSProperties = {
    maxWidth: resolvedMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    padding: typeof p === "number" ? `${p}px` : p,
    ...style,
  };

  return (
    <div className={`aiu-container${className ? ` ${className}` : ""}`} style={containerStyle} {...rest}>
      {children}
    </div>
  );
}; 