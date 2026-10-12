import React, {useEffect, useRef, useState} from "react";

// Fades children in once they scroll into view. Renders visible immediately
// when IntersectionObserver is missing or the user prefers reduced motion.
export default function Reveal({children, className = "", delay = 0}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduced || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.08, rootMargin: "0px 0px -40px 0px"}
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay ? {transitionDelay: `${delay}ms`} : undefined}
    >
      {children}
    </div>
  );
}
