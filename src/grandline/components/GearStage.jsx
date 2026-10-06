import React, { useEffect, useRef, useState } from "react";
import { Fortress } from "./Scenery.jsx";
import { playClip, playCue } from "../sound.js";

// A full-screen stage at the top of Gear 2 / Gear 3. The transformation plays the
// first time it scrolls into view (and again when the gear is picked from the menu),
// then rests on its final frame as the section's opening artwork.
//
// kind "heat"   (Gear 2): heartbeat, red heat, the artwork rises from below in steam.
// kind "impact" (Gear 3): the artwork closes in, inflates to giant size, hits.

const STEAM = Array.from({ length: 8 }, (_, i) => i);
const LINES = Array.from({ length: 36 }, (_, i) => i);
const VOICE_AT = { heat: 1.25, impact: 1.1 }; // seconds: when the title lands

export default function GearStage({ id, kind, gear, title, sfx, artSrc, artAlt, clip, replay, reduced }) {
  const ref = useRef(null);
  const [run, setRun] = useState(0); // 0 = not played yet
  const last = useRef(0);

  const play = () => {
    const now = performance.now();
    if (now - last.current < 1500) return; // scroll-in + menu pick can both fire; play once
    last.current = now;
    setRun((r) => r + 1);
    if (!reduced) {
      playCue(kind);
      playClip(clip, VOICE_AT[kind]);
    }
  };

  // first time in view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.55 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // picked from the gear menu: play again
  useEffect(() => {
    if (replay) play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replay]);

  const state = reduced ? "is-done" : run ? "is-playing" : "is-idle";

  return (
    <section id={id} ref={ref} className={`stage stage--${kind} ${state}`} aria-label={`Gear ${gear}: ${title}`}>
      <div className="stage-inner" key={run}>
        {kind === "heat" && (
          <>
            <div className="stage-scene"><Fortress /></div>
            <div className="stage-glow" />
            <div className="stage-steam" aria-hidden="true">
              {STEAM.map((i) => <span key={i} style={{ "--i": i }} />)}
            </div>
          </>
        )}
        {kind === "impact" && (
          <svg className="stage-lines" viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            {LINES.map((i) => {
              const a = (i / LINES.length) * Math.PI * 2 + (i % 2) * 0.05;
              const r1 = 30 + (i % 4) * 7;
              return <line key={i} x1={Math.cos(a) * r1} y1={Math.sin(a) * r1} x2={Math.cos(a) * 160} y2={Math.sin(a) * 160} />;
            })}
          </svg>
        )}

        <div className="stage-shake">
          <img className="stage-art" src={artSrc} alt={artAlt} decoding="async" />
        </div>

        <span className="stage-sfx" aria-hidden="true">{sfx}</span>
        <div className="stage-title">
          <span className="stage-gear">Gear {gear}</span>
          <h2>{title}</h2>
        </div>
        {kind === "impact" && <div className="stage-flash" aria-hidden="true" />}
      </div>
    </section>
  );
}
