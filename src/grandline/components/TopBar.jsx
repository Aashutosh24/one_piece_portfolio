import React from "react";
import { profile } from "../content.js";

// Slim top bar: who + where you are in the story, sound, and the gear menu.
export default function TopBar({ chapter, muted, onToggleMute, onOpenGears, menuOpen }) {
  return (
    <header className="bar">
      <a className="bar-brand" href="#top" aria-label={`${profile.name}, back to top`}>
        <span className="bar-mark">{profile.initials}</span>
        <span className="bar-chapter" aria-live="polite">{chapter}</span>
      </a>
      <div className="bar-actions">
        <button
          type="button"
          className="bar-icon"
          aria-pressed={!muted}
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
          onClick={onToggleMute}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" />
            {muted ? (
              <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <button type="button" className="bar-gears" aria-haspopup="dialog" aria-expanded={menuOpen} onClick={onOpenGears}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
          </svg>
          Gears
        </button>
      </div>
    </header>
  );
}
