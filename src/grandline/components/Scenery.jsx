import React from "react";

// Enies Lobby-inspired backdrop for Gear 2: red dusk over a stone fortress and its
// long arched bridge. Original artwork, static SVG.
// Drawn on a 400×720 portrait stage. `meet` + overflow:visible keeps every element at
// the same scale on any screen; backgrounds extend far past the stage so wide
// screens just see more sky and sea instead of a zoomed-in crop.
const svgProps = { viewBox: "0 0 400 720", preserveAspectRatio: "xMidYMax meet", style: { overflow: "visible" } };
const WIDE = { x: -1600, width: 3600 };
const U = "userSpaceOnUse";

// waves: a few loose strokes across the water
const waves = (y0, n, color) =>
  Array.from({ length: n }, (_, i) => {
    const y = y0 + i * (14 + i * 6);
    const off = (i * 37) % 60;
    let d = `M${-1600 + off} ${y}`;
    for (let k = 0; k < 56; k++) d += " q 30 -6 60 0";
    return <path key={i} d={d} fill="none" stroke={color} strokeWidth={1 + i * 0.25} opacity={0.1 + i * 0.03} />;
  });

export function Fortress() {
  return (
    <svg {...svgProps}>
          <defs>
            <linearGradient id="g2sky" gradientUnits={U} x1="0" y1="0" x2="0" y2="470">
              <stop offset="0" stopColor="#140607" />
              <stop offset="0.7" stopColor="#4a0f0e" />
              <stop offset="1" stopColor="#9a2a1c" />
            </linearGradient>
            <radialGradient id="g2heat" gradientUnits={U} cx="200" cy="450" r="320">
              <stop offset="0" stopColor="#ff4d3d" stopOpacity="0.45" />
              <stop offset="1" stopColor="#ff4d3d" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2steam">
              <stop offset="0" stopColor="#f6e9e4" stopOpacity="0.16" />
              <stop offset="1" stopColor="#f6e9e4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect {...WIDE} y="-1200" height="1670" fill="url(#g2sky)" />
          <rect {...WIDE} y="-1200" height="1670" fill="url(#g2heat)" />
          <g fill="#120506">
            <path d="M250 470 V250 h10 v-12 h8 v12 h10 v-12 h8 v12 h10 V470 z" />
            <path d="M300 470 V320 h44 V470 z" />
            <path d="M60 470 V360 h30 V470 z" />
            <path d="M-640 470 V380 h26 V470 z" />
            <path d="M820 470 V340 h36 V470 z" />
            <rect {...WIDE} y="400" height="70" />
          </g>
          <g fill="#7e2418">
            {Array.from({ length: 76 }, (_, i) => (
              <path key={i} d={`M${-1600 + 8 + i * 46} 470 v-36 a16 16 0 0 1 32 0 v36 z`} />
            ))}
          </g>
          <rect {...WIDE} y="470" height="900" fill="#1a0707" />
          {waves(490, 6, "#ff8a6a")}
          {[0, 1, 2].map((i) => (
            <ellipse key={i} cx={120 + i * 90} cy={300 - i * 40} rx="130" ry="40" fill="url(#g2steam)" />
          ))}
        </svg>
  );
}
