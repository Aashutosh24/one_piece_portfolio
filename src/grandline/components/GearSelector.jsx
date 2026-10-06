import React, { useEffect, useRef, useState } from "react";
import { art, gears, profile } from "../content.js";

// The gear menu: a full-screen "pick a profile" moment, but the profiles are gears.
const tiles = [
  ...gears.map((g) => ({ key: `g${g.n}`, n: g.n, name: `Gear ${g.n}`, sub: g.short, target: g.id, locked: g.locked })),
  { key: "crew", name: "Join the crew", sub: "Contact", target: "contact" },
];

export default function GearSelector({ onPick, onClose }) {
  const [picked, setPicked] = useState(null);
  const first = useRef(null);

  useEffect(() => {
    const back = document.activeElement;
    first.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      back?.focus?.({ preventScroll: true }); // never let focus drag the page back up
    };
  }, [onClose]);

  const pick = (t) => {
    if (picked) return;
    setPicked(t.key);
    setTimeout(() => onPick(t), 380);
  };

  return (
    <div className={`picker ${picked ? "is-picked" : ""}`} role="dialog" aria-modal="true" aria-labelledby="picker-title">
      <div className="picker-top">
        <span className="picker-mark">{profile.initials}</span>
        <button type="button" className="picker-x" onClick={onClose} aria-label="Close gear menu">✕</button>
      </div>
      <h2 id="picker-title" className="picker-title">Which gear today?</h2>
      <ul className="picker-grid">
        {tiles.map((t, i) => (
          <li key={t.key} style={{ "--i": i }}>
            <button
              ref={i === 0 ? first : undefined}
              type="button"
              className={`tile tile--${t.key} ${picked === t.key ? "is-chosen" : ""}`}
              onClick={() => pick(t)}
            >
              <span className="tile-art" aria-hidden="true">
                {t.key === "g2" && <img src={art.gear2} alt="" />}
                {t.key === "g3" && <img src={art.gear3} alt="" />}
                {(t.key === "g1" || t.locked) && <span className="tile-num">{t.n}</span>}
                {t.locked && <LockIcon />}
                {t.key === "crew" && <span className="tile-plus">+</span>}
              </span>
              <span className="tile-name">{t.name}</span>
              <span className="tile-sub">{t.locked ? "After the time skip" : t.sub}</span>
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="picker-close" onClick={onClose}>Keep reading</button>
    </div>
  );
}

const LockIcon = () => (
  <svg className="tile-lock" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="6" y="11" width="12" height="9" rx="2" fill="currentColor" />
  </svg>
);
