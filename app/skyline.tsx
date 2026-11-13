import { useId } from "react";

// Deterministic night skyline: same seed, same city, on server and every visit.
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 1440;
const H = 640;

function build() {
  const r = rng(2408);
  const towers: { x: number; w: number; h: number }[] = [];
  for (let x = -10; x < W; ) {
    const w = 38 + r() * 70;
    // low blocks under the copy on the left, towers climbing the right side of the hero
    const rise = Math.max(0, (x - W * 0.48) / (W * 0.52)) ** 0.7;
    const h = 25 + r() * 55 + rise * (280 + r() * 300);
    towers.push({ x, w, h });
    x += w + 2 + r() * 6;
  }
  // one eastern facade turns silver before dawn
  const silver = towers.reduce((a, b) => (b.h > a.h && b.x > W * 0.6 && b.x + b.w < W * 0.9 ? b : a));

  const windows: { x: number; y: number; sodium: boolean }[] = [];
  for (const t of towers) {
    if (t === silver) continue;
    for (let y = H - t.h + 14; y < H - 10; y += 14) {
      for (let x = t.x + 7; x < t.x + t.w - 9; x += 11) {
        const v = r();
        if (v < 0.2) windows.push({ x, y, sodium: v < 0.15 });
      }
    }
  }
  return { towers, windows, silver };
}

const city = build();

// the city renders twice (hero and close), so gradient/mask ids must be unique per instance
const useSvgId = () => useId().replace(/[^\w-]/g, "");

export function Skyline() {
  const { towers, windows, silver } = city;
  const id = useSvgId();
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id={`silver${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8f97a6" />
          <stop offset="0.55" stopColor="#d4d7de" />
          <stop offset="1" stopColor="#6c7484" />
        </linearGradient>
      </defs>
      {towers.map((t, i) => (
        <rect key={i} x={t.x} y={H - t.h} width={t.w} height={t.h} fill={i % 3 ? "#070a10" : "#0a0f19"} />
      ))}
      <rect x={silver.x} y={H - silver.h} width={silver.w} height={silver.h} fill={`url(#silver${id})`} />
      {Array.from({ length: Math.floor(silver.h / 9) }, (_, i) => (
        <rect key={i} x={silver.x} y={H - silver.h + i * 9} width={silver.w} height={1} fill="#0b0f16" opacity={0.35} />
      ))}
      {windows.map((w, i) => (
        <rect key={i} x={w.x} y={w.y} width={5} height={7} fill={w.sodium ? "#ffb627" : "#7ba4ff"} opacity={w.sodium ? 0.8 : 0.35} />
      ))}
    </svg>
  );
}

const RH = 160;

// Wet street: each lit window and the silver facade throw a long vertical streak under the bridge.
export function Reflection() {
  const { windows, silver } = city;
  const id = useSvgId();
  return (
    <svg viewBox={`0 0 ${W} ${RH}`} preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <linearGradient id={`fade${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={`wet${id}`}>
          <rect width={W} height={RH} fill={`url(#fade${id})`} />
        </mask>
        <filter id={`rain${id}`} x="-50%" y="0" width="200%" height="100%">
          <feGaussianBlur stdDeviation="1.2 6" />
        </filter>
      </defs>
      <g mask={`url(#wet${id})`} filter={`url(#rain${id})`}>
        <rect x={silver.x + 6} y={0} width={silver.w - 12} height={RH * 0.9} fill="#d4d7de" opacity={0.45} />
        {windows.map((w, i) => {
          const depth = (H - w.y) / H; // windows high up reflect further down the street
          return (
            <rect key={i} x={w.x} y={depth * RH * 0.4} width={4} height={18 + depth * 70}
              fill={w.sodium ? "#ffb627" : "#7ba4ff"} opacity={w.sodium ? 0.7 : 0.35} />
          );
        })}
      </g>
    </svg>
  );
}
