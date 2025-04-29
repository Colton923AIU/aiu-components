import * as React from "react";
import { CSSProperties } from "react";

/**
 * Props for the Pagination component.
 */
export interface PaginationProps {
  /**
   * Current page (1-based).
   */
  page: number;
  /**
   * Total number of pages.
   */
  pageCount: number;
  /**
   * Callback when the page changes.
   */
  onChange: (page: number) => void;
  /**
   * Custom className for the pagination.
   */
  className?: string;
  /**
   * Custom style for the pagination.
   */
  style?: CSSProperties;
}

function getPageButtons(page: number, pageCount: number): (number | string)[] {
  const range: (number | string)[] = [];
  if (pageCount <= 7) {
    for (let i = 1; i <= pageCount; i++) range.push(i);
    return range;
  }
  if (page <= 4) {
    range.push(1, 2, 3, 4, 5, "...", pageCount);
  } else if (page >= pageCount - 3) {
    range.push(1, "...", pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount);
  } else {
    range.push(1, "...", page - 1, page, page + 1, "...", pageCount);
  }
  return range;
}

/**
 * Pagination for navigating through pages of data.
 */
export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  onChange,
  className,
  style,
}) => {
  if (pageCount <= 1) return null;
  const buttons = getPageButtons(page, pageCount);

  const handlePage = (p: number) => {
    if (p < 1 || p > pageCount || p === page) return;
    onChange(p);
  };

  return (
    <nav className={`aiu-pagination${className ? ` ${className}` : ""}`} style={{ display: "flex", gap: 4, ...style }} aria-label="Pagination">
      <button
        className="aiu-pagination__first"
        onClick={() => handlePage(1)}
        disabled={page === 1}
        aria-label="First page"
        style={{ minWidth: 32 }}
      >
        «
      </button>
      <button
        className="aiu-pagination__prev"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        style={{ minWidth: 32 }}
      >
        ‹
      </button>
      {buttons.map((b, i) =>
        typeof b === "number" ? (
          <button
            key={b}
            className={`aiu-pagination__page${b === page ? " aiu-pagination__page--active" : ""}`}
            onClick={() => handlePage(b)}
            aria-current={b === page ? "page" : undefined}
            style={{ minWidth: 32, fontWeight: b === page ? 600 : 400 }}
          >
            {b}
          </button>
        ) : (
          <span key={`ellipsis-${i}`} className="aiu-pagination__ellipsis" style={{ minWidth: 32, textAlign: "center" }}>
            ...
          </span>
        )
      )}
      <button
        className="aiu-pagination__next"
        onClick={() => handlePage(page + 1)}
        disabled={page === pageCount}
        aria-label="Next page"
        style={{ minWidth: 32 }}
      >
        ›
      </button>
      <button
        className="aiu-pagination__last"
        onClick={() => handlePage(pageCount)}
        disabled={page === pageCount}
        aria-label="Last page"
        style={{ minWidth: 32 }}
      >
        »
      </button>
    </nav>
  );
}; 