import React, { useCallback, useEffect, useState } from "react";
import TopBar from "./components/TopBar.jsx";
import GearSelector from "./components/GearSelector.jsx";
import ZoroLost from "./components/ZoroLost.jsx";
import SidePeek from "./components/Peek.jsx";
import { art } from "./content.js";
import { Contact, Gear1, Gear2, Gear3, Hero, TimeSkip } from "./components/Sections.jsx";
import { setMuted as setAudioMuted, unlockAudio } from "./sound.js";

function useReducedMotion() {
  const q = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia?.(q).matches ?? false);
  useEffect(() => {
    const m = window.matchMedia?.(q);
    if (!m) return;
    const on = () => setReduced(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return reduced;
}

export default function App() {
  const reduced = useReducedMotion();
  const [muted, setMuted] = useState(false);
  const [menu, setMenu] = useState(false);
  const [chapter, setChapter] = useState("Aashutosh Rana");
  const [theme, setTheme] = useState("paper");
  const [replay, setReplay] = useState({ 2: 0, 3: 0 });

  // Sound needs a real tap/click/key first (browser rule). On phones a touch that
  // only scrolls doesn't count, so listen on every tap and keep re-waking audio.
  useEffect(() => {
    const on = () => unlockAudio();
    const evs = ["pointerup", "touchend", "click", "keydown"];
    evs.forEach((e) => window.addEventListener(e, on, { passive: true }));
    return () => evs.forEach((e) => window.removeEventListener(e, on));
  }, []);

  // the section crossing the middle of the screen names the chapter and tints the bar
  useEffect(() => {
    const els = document.querySelectorAll("[data-chapter]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setChapter(e.target.dataset.chapter);
            setTheme(e.target.dataset.theme);
          }
        }
      },
      { rootMargin: "-45% 0px -54% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    unlockAudio();
    setMuted((m) => {
      setAudioMuted(!m);
      return !m;
    });
  };

  const closeMenu = useCallback(() => setMenu(false), []);
  // jump after the menu has closed and the page can scroll again
  const goTo = (id, n) => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
      if (n === 2 || n === 3) setReplay((r) => ({ ...r, [n]: r[n] + 1 }));
    }));
  };
  const pick = (t) => {
    setMenu(false);
    goTo(t.target, t.n);
  };

  return (
    <div className="page" data-bar={theme}>
      <TopBar chapter={chapter} muted={muted} onToggleMute={toggleMute} onOpenGears={() => setMenu(true)} menuOpen={menu} />
      <main>
        <Hero onOpenGears={() => setMenu(true)} />
        <Gear1 />
        <Gear2 replay={replay[2]} reduced={reduced} />
        <Gear3 replay={replay[3]} reduced={reduced} />
        <TimeSkip />
        <Contact />
      </main>
      <SidePeek src={art.peekLeft} side="left" sectionId="gear-1" />
      <SidePeek src={art.peekRight} side="right" sectionId="time-skip" />
      <ZoroLost paused={menu} reduced={reduced} onGuide={(id) => goTo(id, id === "gear-2" ? 2 : id === "gear-3" ? 3 : 0)} />
      {menu && <GearSelector onPick={pick} onClose={closeMenu} />}
    </div>
  );
}
