import React, { useEffect, useState } from "react";

// The crew peeking in from a screen edge while a section is on screen.
// Wide screens: they stay in the margin while you read. Phones: they pop in for a
// few seconds, then duck back out so they never sit on top of the text.
export default function SidePeek({ src, side, sectionId }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const wide = window.matchMedia("(min-width: 1100px)");
    let t;
    const io = new IntersectionObserver(([e]) => {
      clearTimeout(t);
      if (e.isIntersecting) {
        setShown(true);
        if (!wide.matches) t = setTimeout(() => setShown(false), 3800);
      } else setShown(false);
    }, { threshold: 0.12 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [sectionId]);

  return (
    <img
      className={`peek peek--${side} ${shown ? "is-shown" : ""}`}
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      draggable="false"
    />
  );
}
