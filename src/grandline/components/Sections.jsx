import React from "react";
import GearStage from "./GearStage.jsx";
import { art, gear1, gear2, gear3, locked, profile, visible } from "../content.js";

// Every section carries `data-theme` (colours the top bar) and `data-chapter`
// (the label shown in the top bar while it's on screen).

// ---- shared ------------------------------------------------------------------

function ChapterHead({ n, arc, role }) {
  return (
    <header className="chapter-head">
      <span className="chapter-num">Gear {n}</span>
      <h2 className="chapter-arc">{arc}</h2>
      <p className="chapter-role">{role}</p>
    </header>
  );
}

function Panel({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`panel ${className}`}>
      <h3 className="panel-title">{title}</h3>
      {children}
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className={`project ${p.placeholder ? "is-placeholder" : ""}`}>
      <header className="project-head">
        <h4>{p.name}</h4>
        {p.status && <span className="project-status">{p.status}</span>}
      </header>
      <p className="project-text">{p.text}</p>
      <ul className="project-stack" aria-label="Tech stack">
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      {(p.github || p.live) && (
        <div className="project-links">
          {p.github && <a className="btn btn--line" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
          {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
        </div>
      )}
    </article>
  );
}

const Projects = ({ list }) => (
  <div className="projects">
    {visible(list).map((p) => <ProjectCard key={p.name} p={p} />)}
  </div>
);

// ---- hero ----------------------------------------------------------------------

export function Hero({ onOpenGears }) {
  return (
    <section id="top" className="hero" data-theme="paper" data-chapter="Aashutosh Rana">
      <div className="hero-art" aria-hidden="true">
        <div className="hero-sun" />
        <svg className="hero-sea" viewBox="0 0 400 120" preserveAspectRatio="none">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M-10 ${24 + i * 24} q 25 -8 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0 t 50 0`}
              fill="none" stroke="currentColor" strokeWidth={2 - i * 0.35} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      </div>
      <div className="hero-copy">
        <p className="hero-role">{profile.identity}</p>
        <h1 className="hero-name"><span>Aashutosh</span><span>Rana</span></h1>
        <p className="hero-tagline">{gear1.tagline}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn--ink" onClick={onOpenGears}>Pick a gear</button>
          <a className="hero-read" href="#gear-1">Start from Gear 1</a>
        </div>
      </div>
      {/* the crew, peeking up over the bottom edge of the page */}
      <img className="hero-peek" src={art.peekBottom} alt="" aria-hidden="true" draggable="false" />
    </section>
  );
}

// ---- Gear 1 ---------------------------------------------------------------------

export function Gear1() {
  return (
    <section id="gear-1" className="chapter chapter--1" data-theme="paper" data-chapter="Gear 1: Web">
      <ChapterHead n={1} arc="Romance Dawn" role="Full-stack / web developer" />

      <Panel id="about" title="About">
        <p className="prose">{gear1.about}</p>
      </Panel>

      <Panel title="Education">
        <ol className="timeline">
          {gear1.education.map((e) => (
            <li key={e.detail}>
              <div className="timeline-head">
                <strong>{e.detail}</strong>
                <span className="timeline-score">{e.score}</span>
              </div>
              <span className="timeline-meta">{e.place}{e.years && `, ${e.years}`}</span>
            </li>
          ))}
        </ol>
      </Panel>

      <Panel id="experience" title="Experience">
        {gear1.experience.map((x) => (
          <div className="exp" key={x.org}>
            <div className="exp-head">
              <strong>{x.role}</strong>
              <span>{x.org}, {x.when}</span>
            </div>
            <ul className="exp-points">
              {x.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </Panel>

      <Panel title="Skills">
        <dl className="skills">
          {gear1.skills.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.items.map((it) => <span key={it}>{it}</span>)}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      <Panel id="web-projects" title="Web projects" className="panel--wide">
        <Projects list={gear1.projects} />
      </Panel>
    </section>
  );
}

// ---- Gear 2 ---------------------------------------------------------------------

export function Gear2({ replay, reduced }) {
  return (
    <>
      <div data-theme="red" data-chapter="Gear 2: Apps">
        <GearStage
          id="gear-2" kind="heat" gear={2} title="Gear Second" sfx="ドン!!"
          artSrc={art.gear2} artAlt="" clip={art.gear2Sound} replay={replay} reduced={reduced}
        />
      </div>
      <section className="chapter chapter--2" data-theme="red" data-chapter="Gear 2: Apps">
        <ChapterHead n={2} arc="Enies Lobby" role="App developer" />
        <p className="chapter-intro">{gear2.intro}</p>
        <Panel title="App projects" className="panel--wide">
          <Projects list={gear2.projects} />
        </Panel>
        <Panel title={gear2.background.title}>
          <p className="prose">{gear2.background.text}</p>
        </Panel>
      </section>
    </>
  );
}

// ---- Gear 3 ---------------------------------------------------------------------

export function Gear3({ replay, reduced }) {
  return (
    <>
      <div data-theme="sky" data-chapter="Gear 3: AI/ML">
        <GearStage
          id="gear-3" kind="impact" gear={3} title="Gear Third" sfx="ドォン!!"
          artSrc={art.gear3} artAlt="" clip={art.gear3Sound} replay={replay} reduced={reduced}
        />
      </div>
      <section className="chapter chapter--3" data-theme="sky" data-chapter="Gear 3: AI/ML">
        <ChapterHead n={3} arc="Gear Third" role="AI/ML engineer" />
        <p className="chapter-intro">{gear3.intro}</p>
        <Panel title="AI/ML projects" className="panel--wide">
          <Projects list={gear3.projects} />
        </Panel>
        <Panel title={gear3.learning.title}>
          <p className="prose">{gear3.learning.text}</p>
        </Panel>
      </section>
    </>
  );
}

// ---- Gears 4 and 5: the time skip -----------------------------------------------------

export function TimeSkip() {
  return (
    <section id="time-skip" className="timeskip" data-theme="ink" data-chapter="Gears 4 and 5: Locked">
      <p className="timeskip-caption">Two years later…</p>
      <h2 className="timeskip-title">Wait for the time skip</h2>
      <div className="timeskip-grid">
        {[4, 5].map((n) => (
          <article className="locked" key={n}>
            <span className="locked-num" aria-hidden="true">{n}</span>
            <div className="locked-copy">
              <h3>Gear {n}</h3>
              <p className="locked-arc">{n === 4 ? "Future Evolution" : "The Next Chapter"}</p>
              <p className="locked-line">{locked[n].line}</p>
            </div>
            <span className="locked-stamp">After the time skip</span>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---- contact ------------------------------------------------------------------------

// The last page: the invitation. The speech bubble's menu in the artwork is
// clickable; a plain version of the same links sits underneath for phones.
const NAKAMA_LINKS = [
  { label: "About me", href: "#about", top: 27.4 },
  { label: "Projects", href: "#web-projects", top: 32.2 },
  { label: "Experience", href: "#experience", top: 36.9 },
  { label: "Let's connect", href: "#connect", top: 41.7 },
];

export function Contact() {
  return (
    <section id="contact" className="nakama" data-theme="ink" data-chapter="Become my nakama">
      <h2 className="sr-only">Become my nakama: let's connect</h2>
      {/* one framed piece: the invitation, and the hand holding out your card */}
      <div className="nakama-frame">
        <div className="nakama-art">
          <img src={art.nakama} width="1400" height="1120" alt="A captain holds out his hand: become my nakama" loading="lazy" decoding="async" />
          <nav className="nakama-hotspots" aria-label="Jump to">
            {NAKAMA_LINKS.map((l) => (
              <a key={l.href} href={l.href} style={{ top: `${l.top}%` }}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div id="connect" className="nakama-card">
          <p className="nakama-kicker">Let's connect</p>
          <a className="nakama-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className="nakama-line">Open to internships and good collaborations, especially full-stack and AI/ML work.</p>
          <div className="nakama-links">
            {profile.links.map((l) => (
              <a key={l.label} className="btn btn--ink" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
          {/* <div className="nakama-foot">
            { <span className="nakama-where">Based in {profile.location}</span> }
            <nav className="nakama-quick" aria-label="Jump to">
              {NAKAMA_LINKS.slice(0, 3).map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </nav>
          </div> */}
        </div>
      </div>
    </section>
  );
}
