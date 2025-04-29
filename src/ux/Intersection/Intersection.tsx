import * as React from "react";
import { IIntersectionProps } from "./IIntersectionProps";

const Intersection = ({ children, classNames }: IIntersectionProps) => {
  const containerRef = React.useRef(null);
  const [intersected, setIntersected] = React.useState(true);

  const cbFn = (entries: any) => {
    if (!entries) return;
    const [entry] = entries;
    if (!entry) return;
    setIntersected(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 0.6,
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(cbFn, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return (
    <div
      ref={containerRef}
      className={intersected ? classNames.after : classNames.before}
    >
      {children}
    </div>
  );
};

export { Intersection };
