import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Timeline item definition.
 */
export interface TimelineItem {
  /**
   * Label/title for the event.
   */
  label: ReactNode;
  /**
   * Content/description for the event.
   */
  content?: ReactNode;
  /**
   * Optional icon for the event.
   */
  icon?: ReactNode;
  /**
   * Optional time or date for the event.
   */
  time?: ReactNode;
  /**
   * Optional key for the event.
   */
  key?: string | number;
}

/**
 * Timeline orientation options.
 */
export type TimelineOrientation = "vertical" | "horizontal";

/**
 * Props for the Timeline component.
 */
export interface TimelineProps {
  /**
   * Array of timeline items.
   */
  items: TimelineItem[];
  /**
   * Orientation of the timeline.
   * @default 'vertical'
   */
  orientation?: TimelineOrientation;
  /**
   * Custom className for the timeline.
   */
  className?: string;
  /**
   * Custom style for the timeline.
   */
  style?: CSSProperties;
}

/**
 * A timeline for displaying a sequence of events.
 */
export const Timeline: React.FC<TimelineProps> = ({
  items,
  orientation = "vertical",
  className,
  style,
}) => {
  const isVertical = orientation === "vertical";
  return (
    <div
      className={`aiu-timeline aiu-timeline--${orientation}${className ? ` ${className}` : ""}`}
      style={{ display: isVertical ? "block" : "flex", ...style }}
    >
      {items.map((item, idx) => (
        <div
          key={item.key ?? idx}
          className="aiu-timeline__item"
          style={{
            display: isVertical ? "flex" : "block",
            alignItems: isVertical ? "flex-start" : undefined,
            position: "relative",
            marginBottom: isVertical && idx < items.length - 1 ? 32 : 0,
            marginRight: !isVertical && idx < items.length - 1 ? 32 : 0,
            flex: isVertical ? undefined : 1,
          }}
        >
          <div
            className="aiu-timeline__dot"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#1976d2",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 14,
              zIndex: 1,
              marginRight: isVertical ? 16 : 0,
              marginBottom: !isVertical ? 16 : 0,
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            {item.icon || idx + 1}
          </div>
          {idx < items.length - 1 && (
            <div
              className="aiu-timeline__connector"
              style={{
                position: "absolute",
                left: isVertical ? 9 : 30,
                top: isVertical ? 20 : 10,
                width: isVertical ? 2 : 32,
                height: isVertical ? 32 : 2,
                background: "#e0e0e0",
                zIndex: 0,
              }}
            />
          )}
          <div className="aiu-timeline__content" style={{ flex: 1 }}>
            <div className="aiu-timeline__label" style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>{item.label}</div>
            {item.time && <div className="aiu-timeline__time" style={{ color: "#888", fontSize: 13, marginBottom: 4 }}>{item.time}</div>}
            {item.content && <div className="aiu-timeline__desc" style={{ color: "#555", fontSize: 15 }}>{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}; 