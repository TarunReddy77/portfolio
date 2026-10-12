import React, {useCallback, useEffect, useRef, useState} from "react";

const prefersReducedMotion = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Manual (no autoplay) scroll-snap carousel with arrows and dots.
export default function Carousel({label, children}) {
  const trackRef = useRef(null);
  const [state, setState] = useState({
    page: 0,
    pages: 1,
    canPrev: false,
    canNext: false
  });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.children.length) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.children[0].offsetWidth + gap;
    const visible = Math.max(1, Math.round((el.clientWidth + gap) / step));
    const pages = Math.max(1, el.children.length - visible + 1);
    const page = Math.min(pages - 1, Math.round(el.scrollLeft / step));
    setState({
      page,
      pages,
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft + el.clientWidth < el.scrollWidth - 4
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, children]);

  const goTo = page => {
    const el = trackRef.current;
    if (!el) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.children[0].offsetWidth + gap;
    el.scrollTo({
      left: page * step,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        ref={trackRef}
        onScroll={measure}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        {React.Children.map(children, child => (
          <div className="carousel-slide">{child}</div>
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-dots">
          {Array.from({length: state.pages}, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === state.page ? "dot is-active" : "dot"}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === state.page}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="carousel-arrows">
          <button
            type="button"
            className="icon-btn"
            aria-label="Previous projects"
            disabled={!state.canPrev}
            onClick={() => goTo(state.page - 1)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="icon-btn"
            aria-label="Next projects"
            disabled={!state.canNext}
            onClick={() => goTo(state.page + 1)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
