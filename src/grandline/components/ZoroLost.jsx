import React, { useCallback, useEffect, useRef, useState } from "react";
import { art } from "../content.js";

// Every so often Zoro runs in from a screen edge, stops, and stands there lost.
// Tap him and he asks for directions; pick a place and he gives a thumbs up,
// then runs off the wrong way while the page takes *you* there.
// Ignore him and he turns around, scratches his head, and wanders off.

const FIRST_AT = 18000;          // ms after load
const EVERY = [55000, 85000];    // ms between visits (random in this range)
const MAX_VISITS = 8;
const RUN_MS = 1700;
const LOST_MS = 8000;            // how long he waits before giving up
const PLACES = [
  { label: "Gear 1", id: "gear-1" },
  { label: "Gear 2", id: "gear-2" },
  { label: "Gear 3", id: "gear-3" },
  { label: "The crew", id: "contact" },
];

const rand = (a, b) => a + Math.random() * (b - a);

export default function ZoroLost({ paused, reduced, onGuide }) {
  // phase: off | in | lost | ask | thanks | off-run | wander
  const [z, setZ] = useState({ phase: "off", x: 0, dur: 0, face: 1 });
  const [toast, setToast] = useState("");
  const visits = useRef(0);
  const timers = useRef([]);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));
  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const width = () => (window.innerWidth < 640 ? 92 : 118);

  const schedule = useCallback((ms) => {
    later(() => {
      if (pausedRef.current || document.hidden) return schedule(8000); // try again soon
      if (visits.current >= MAX_VISITS) return;
      visits.current += 1;
      appear();
    }, ms);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    schedule(FIRST_AT);
    window.__zoro = () => { clear(); appear(); }; // handy for testing in the console
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function appear() {
    const vw = window.innerWidth, w = width();
    const fromLeft = Math.random() < 0.5;
    const start = fromLeft ? -w - 20 : vw + 20;
    const stop = rand(0.12, 0.7) * (vw - w);
    setZ({ phase: "in", x: start, dur: 0, face: fromLeft ? 1 : -1 });
    // next frame: run to the stop point
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setZ((s) => ({ ...s, x: stop, dur: reduced ? 0 : RUN_MS }));
    }));
    later(() => setZ((s) => ({ ...s, phase: "lost", dur: 0 })), reduced ? 50 : RUN_MS);
    later(() => setZ((s) => (s.phase === "lost" ? wanderState(s) : s)), (reduced ? 50 : RUN_MS) + LOST_MS);
  }

  // turns his back and drifts off toward the far edge
  function wanderState(s) {
    const vw = window.innerWidth, w = width();
    const toRight = s.x < (vw - w) / 2;
    later(() => setZ({ phase: "off", x: 0, dur: 0, face: 1 }), reduced ? 400 : 3200);
    later(() => schedule(rand(...EVERY)), 3300);
    return { ...s, phase: "wander", x: toRight ? vw + 40 : -w - 40, dur: reduced ? 0 : 3200, face: toRight ? 1 : -1 };
  }

  const onZoro = () => {
    if (z.phase !== "lost") return;
    clear();
    setZ((s) => ({ ...s, phase: "ask" }));
  };

  const leave = () => setZ((s) => wanderState(s));

  const guide = (place) => {
    setZ((s) => ({ ...s, phase: "thanks" }));
    later(() => {
      const vw = window.innerWidth, w = width();
      // the wrong way: whichever edge is *farther* from him
      setZ((s) => {
        const toRight = s.x < (vw - w) / 2;
        return { ...s, phase: "off-run", x: toRight ? vw + 40 : -w - 40, dur: reduced ? 0 : 1100, face: toRight ? 1 : -1 };
      });
      onGuide(place.id);
      setToast(`He ran the other way. You go on to ${place.label}.`);
      later(() => setToast(""), 3400);
      later(() => setZ({ phase: "off", x: 0, dur: 0, face: 1 }), 1200);
      later(() => schedule(rand(...EVERY)), 1300);
    }, 1100);
  };

  if (z.phase === "off" && !toast) return null;

  const vw = typeof window !== "undefined" ? window.innerWidth : 400;
  const w = width();
  const img = z.phase === "thanks" ? art.zoroOk : z.phase === "wander" ? art.zoroBack : art.zoroLost;
  const running = z.phase === "in" || z.phase === "off-run" || z.phase === "wander";
  const bubbleLeft = Math.min(Math.max(z.x + w / 2 - 150, 10), vw - 310);

  return (
    <div className="zoro-layer">
      {z.phase !== "off" && (
        <button
          type="button"
          className={`zoro zoro--${z.phase} ${running ? "is-running" : ""}`}
          style={{ width: w, transform: `translateX(${z.x}px)`, transitionDuration: `${z.dur}ms` }}
          onClick={onZoro}
          aria-label="Zoro looks lost. Help him find the way"
          tabIndex={z.phase === "lost" ? 0 : -1}
        >
          <img src={img} alt="" style={{ transform: `scaleX(${z.face})` }} draggable="false" />
        </button>
      )}

      {z.phase === "lost" && (
        <span className="zoro-hint" style={{ left: z.x + w / 2 - 26, "--zh": `${Math.round(w * 1.37)}px` }} aria-hidden="true">Lost?</span>
      )}

      {z.phase === "ask" && (
        <div className="zoro-bubble" style={{ left: bubbleLeft }} role="dialog" aria-label="Guide Zoro">
          <p className="zoro-say">Oi. Which way is the ship?</p>
          <div className="zoro-options">
            {PLACES.map((p) => (
              <button key={p.id} type="button" onClick={() => guide(p)}>{p.label}</button>
            ))}
          </div>
          <button type="button" className="zoro-leave" onClick={leave}>You're on your own</button>
        </div>
      )}

      {toast && <p className="zoro-toast" role="status">{toast}</p>}
    </div>
  );
}
