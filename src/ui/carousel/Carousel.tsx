import * as React from "react";
import { ReactNode, CSSProperties } from "react";

/**
 * Props for the Carousel component.
 */
export interface CarouselProps {
  /**
   * Carousel slides (children).
   */
  children: ReactNode[];
  /**
   * Enable auto-play.
   */
  autoPlay?: boolean;
  /**
   * Auto-play interval in ms.
   * @default 5000
   */
  interval?: number;
  /**
   * Show dot indicators.
   * @default true
   */
  showIndicators?: boolean;
  /**
   * Custom className for the carousel.
   */
  className?: string;
  /**
   * Custom style for the carousel.
   */
  style?: CSSProperties;
}

/**
 * A carousel for displaying slides with navigation.
 */
export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = false,
  interval = 5000,
  showIndicators = true,
  className,
  style,
}) => {
  const slides = React.Children.toArray(children);
  const [active, setActive] = React.useState(0);
  const count = slides.length;

  React.useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const timer = setTimeout(() => setActive((a) => (a + 1) % count), interval);
    return () => clearTimeout(timer);
  }, [autoPlay, interval, active, count]);

  const goTo = (idx: number) => setActive((idx + count) % count);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  if (count === 0) return null;

  return (
    <div className={`aiu-carousel${className ? ` ${className}` : ""}`} style={{ position: "relative", overflow: "hidden", ...style }}>
      <div className="aiu-carousel__slides" style={{ display: "flex", transition: "transform 0.5s", transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div key={idx} style={{ minWidth: "100%", flexShrink: 0 }}>
            {slide}
          </div>
        ))}
      </div>
      {count > 1 && (
        <>
          <button
            className="aiu-carousel__prev"
            style={{ position: "absolute", top: "50%", left: 12, transform: "translateY(-50%)", zIndex: 2, background: "#fff", border: "none", borderRadius: "50%", boxShadow: "0 2px 8px #0002", width: 36, height: 36, cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={prev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="aiu-carousel__next"
            style={{ position: "absolute", top: "50%", right: 12, transform: "translateY(-50%)", zIndex: 2, background: "#fff", border: "none", borderRadius: "50%", boxShadow: "0 2px 8px #0002", width: 36, height: 36, cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={next}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
      {showIndicators && count > 1 && (
        <div className="aiu-carousel__indicators" style={{ position: "absolute", left: 0, right: 0, bottom: 12, display: "flex", justifyContent: "center", gap: 8 }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`aiu-carousel__dot${idx === active ? " aiu-carousel__dot--active" : ""}`}
              style={{ width: 10, height: 10, borderRadius: "50%", background: idx === active ? "#1976d2" : "#ccc", border: "none", cursor: "pointer", padding: 0 }}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 