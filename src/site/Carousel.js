import React, {useEffect, useRef, useState} from "react";

// Circular "coverflow" carousel: the active card sits in the centre with two
// partially hidden cards on each side. Dots below show the active card.
// Move with the dots, a click on a side card, swipe/drag, or arrow keys.
const SWIPE_PX = 40;
const WHEEL_PX = 50; // sideways trackpad travel needed to advance one card
const WHEEL_COOLDOWN_MS = 450;

export default function Carousel({label, items, renderItem}) {
  const n = items.length;
  const [index, setIndex] = useState(0);
  const drag = useRef({startX: null, moved: false});
  const stageRef = useRef(null);

  const go = i => setIndex(((i % n) + n) % n);

  // Two-finger sideways swipe on a trackpad (or a horizontal mouse wheel).
  // Needs a non-passive native listener so the browser's own horizontal
  // scroll / back-swipe doesn't also fire.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    let travelled = 0;
    let lockedUntil = 0;
    const onWheel = e => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical: let the page scroll
      e.preventDefault();
      const now = Date.now();
      if (now < lockedUntil) return;
      travelled += e.deltaX;
      if (Math.abs(travelled) >= WHEEL_PX) {
        const dir = travelled > 0 ? 1 : -1;
        setIndex(i => (((i + dir) % n) + n) % n);
        travelled = 0;
        lockedUntil = now + WHEEL_COOLDOWN_MS;
      }
    };
    el.addEventListener("wheel", onWheel, {passive: false});
    return () => el.removeEventListener("wheel", onWheel);
  }, [n]);

  // Shortest signed distance from the active card, wrapping around the ends.
  const offsetOf = i => {
    let d = (((i - index) % n) + n) % n;
    if (d > n / 2) d -= n;
    return d;
  };

  const onPointerDown = e => {
    drag.current = {startX: e.clientX, moved: false};
  };
  const onPointerUp = e => {
    const {startX} = drag.current;
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > SWIPE_PX) {
      drag.current.moved = true;
      go(index + (dx < 0 ? 1 : -1));
    }
    drag.current.startX = null;
  };
  const onKeyDown = e => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-stage"
        ref={stageRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={onKeyDown}
        // Stops the browser's native link-drag from cancelling a mouse swipe.
        onDragStart={e => e.preventDefault()}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current.startX = null)}
      >
        {items.map((item, i) => {
          const off = offsetOf(i);
          const active = off === 0;
          return (
            <div
              key={i}
              className="carousel-slide"
              data-pos={Math.max(-3, Math.min(3, off))}
              aria-hidden={!active}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              // A click on a side card brings it to the centre instead of
              // following its link; so does the tail end of a swipe.
              onClickCapture={e => {
                if (!active || drag.current.moved) {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!active && !drag.current.moved) go(i);
                  drag.current.moved = false;
                }
              }}
            >
              {renderItem(item, active)}
            </div>
          );
        })}
      </div>
      <div className="carousel-dots" role="tablist" aria-label="Choose project">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            className={i === index ? "dot is-active" : "dot"}
            aria-label={`Show project ${i + 1}`}
            aria-selected={i === index}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
