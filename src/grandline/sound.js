// Short transformation cues, synthesised with the Web Audio API (no audio files,
// nothing copyrighted). The context is only created after a tap, as browsers require.

let ctx = null;
let master = null;
let muted = false;

export function unlockAudio() {
  if (ctx) return ctx.state === "suspended" && ctx.resume();
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = muted ? 0 : 0.45;
  master.connect(ctx.destination);
}

export function setMuted(m) {
  muted = m;
  if (master) master.gain.setTargetAtTime(m ? 0 : 0.45, ctx.currentTime, 0.05);
}

function noise(seconds) {
  const b = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const s = ctx.createBufferSource();
  s.buffer = b;
  return s;
}

function env(gain, t, peak, attack, release) {
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(peak, t + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + release);
}

// low heartbeat thump
function thump(t, strength = 1) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(95, t);
  o.frequency.exponentialRampToValueAtTime(38, t + 0.18);
  env(g, t, 0.9 * strength, 0.01, 0.28);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + 0.35);
}

// steam hiss
function hiss(t, dur = 1.2) {
  const n = noise(dur);
  const f = ctx.createBiquadFilter();
  f.type = "highpass";
  f.frequency.value = 2500;
  const g = ctx.createGain();
  env(g, t, 0.18, 0.15, dur - 0.15);
  n.connect(f).connect(g).connect(master);
  n.start(t);
}

// rising "inflate"
function whoomp(t) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "triangle";
  o.frequency.setValueAtTime(55, t);
  o.frequency.exponentialRampToValueAtTime(160, t + 0.55);
  env(g, t, 0.35, 0.3, 0.3);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + 0.7);
}

// big impact
function boom(t) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(120, t);
  o.frequency.exponentialRampToValueAtTime(30, t + 0.6);
  env(g, t, 1, 0.005, 0.7);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + 0.8);
  const n = noise(0.5);
  const f = ctx.createBiquadFilter();
  f.type = "lowpass";
  f.frequency.value = 900;
  const gn = ctx.createGain();
  env(gn, t, 0.5, 0.005, 0.4);
  n.connect(f).connect(gn).connect(master);
  n.start(t);
}

// calm swell for setting sail
function swell(t) {
  [220, 330].forEach((hz, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = hz;
    env(g, t + i * 0.12, 0.08, 0.35, 0.9);
    o.connect(g).connect(master);
    o.start(t + i * 0.12);
    o.stop(t + 1.5);
  });
}

// metallic clank for a locked gear
function clank(t) {
  const n = noise(0.25);
  const f = ctx.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = 1800;
  f.Q.value = 8;
  const g = ctx.createGain();
  env(g, t, 0.4, 0.002, 0.22);
  n.connect(f).connect(g).connect(master);
  n.start(t);
}

// Cue timings match the overlay timeline in Transformation.jsx.
const CUES = {
  sail: (t) => swell(t + 0.1),
  heat: (t) => { thump(t + 0.15, 0.7); thump(t + 0.55, 1); hiss(t + 0.8, 1.4); },
  impact: (t) => { whoomp(t + 0.2); boom(t + 0.95); },
  lock: (t) => clank(t + 0.05),
};

export function playCue(kind) {
  if (!ctx || muted || ctx.state !== "running") return;
  CUES[kind]?.(ctx.currentTime);
}

// Optional recorded clip (e.g. your own voice saying "Gear Second"), played on top
// of the synthesised cue at `delay` seconds. A missing file is silently skipped.
const clips = {};
export function playClip(url, delay = 0) {
  if (!url || muted || !ctx) return;
  setTimeout(() => {
    if (muted) return;
    const a = clips[url] || (clips[url] = new Audio(url));
    if (a.dataset.missing) return;
    a.onerror = () => { a.dataset.missing = "1"; };
    a.volume = 0.9;
    a.currentTime = 0;
    a.play().catch(() => {});
  }, delay * 1000);
}

export const isMuted = () => muted;
