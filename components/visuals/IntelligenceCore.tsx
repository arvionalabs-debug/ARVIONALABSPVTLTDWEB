"use client";

import { m } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { round, hash01 } from "@/lib/deterministic";

/**
 * Abstract representation of a learning intelligence system: a central
 * reasoning core from which learning pathways branch, diverge and adapt.
 * Geometry is computed deterministically so server and client agree.
 */

const CENTER = 400;
const CORE_EDGE = 68;
const TRUNK_END = 250;
const LEAF_END = 372;
const BRANCHES = 9;

const polar = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180;
  return [
    round(CENTER + Math.cos(rad) * radius),
    round(CENTER + Math.sin(rad) * radius),
  ];
};

type Path = { d: string; angle: number; depth: 0 | 1 };

function buildPaths(): Path[] {
  const paths: Path[] = [];

  for (let i = 0; i < BRANCHES; i++) {
    const angle = (360 / BRANCHES) * i - 90;
    const bend = i % 2 === 0 ? 13 : -13;

    const [sx, sy] = polar(angle, CORE_EDGE);
    const [cx, cy] = polar(angle + bend, (CORE_EDGE + TRUNK_END) / 2);
    const [ex, ey] = polar(angle + bend * 0.35, TRUNK_END);
    paths.push({ d: `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`, angle, depth: 0 });

    // Each pathway diverges — the same start, different routes onward.
    for (const spread of [-11, 11]) {
      const [lcx, lcy] = polar(
        angle + bend * 0.35 + spread * 0.4,
        (TRUNK_END + LEAF_END) / 2,
      );
      const [lx, ly] = polar(angle + bend * 0.35 + spread, LEAF_END);
      paths.push({
        d: `M ${ex} ${ey} Q ${lcx} ${lcy} ${lx} ${ly}`,
        angle: angle + spread,
        depth: 1,
      });
    }
  }
  return paths;
}

const PATHS = buildPaths();

const NODES = PATHS.filter((p) => p.depth === 1).map((p, i) => {
  const [x, y] = polar(p.angle, LEAF_END);
  return { x, y, i };
});

export function IntelligenceCore({ className = "" }: { className?: string }) {
  const reduce = useReducedMotionSafe();

  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      role="img"
      aria-label="Abstract diagram of a central learning intelligence core with pathways that branch and adapt outward"
    >
      <defs>
        <radialGradient id="arv-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9C1FF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arv-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Orbit rings — the model's field of understanding */}
      <m.g
        style={{ transformOrigin: "400px 400px" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 160, ease: "linear", repeat: Infinity }}
      >
        {[150, 226, 302, 372].map((r, i) => (
          <circle
            key={r}
            cx={CENTER}
            cy={CENTER}
            r={r}
            fill="none"
            stroke="white"
            strokeOpacity={0.07 - i * 0.008}
            strokeDasharray={i % 2 ? "2 10" : undefined}
          />
        ))}
      </m.g>

      {/* Pathways */}
      <g>
        {PATHS.map((p, i) => (
          <m.path
            key={i}
            d={p.d}
            fill="none"
            stroke="url(#arv-line)"
            strokeWidth={p.depth === 0 ? 1.35 : 0.9}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: p.depth === 0 ? 0.9 : 0.55 }}
            transition={{
              duration: reduce ? 0 : 1.5,
              delay: reduce ? 0 : 0.35 + (p.depth === 0 ? i * 0.02 : 0.5 + i * 0.012),
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </g>

      {/* Travelling signal — an explanation moving down a pathway */}
      {!reduce &&
        PATHS.filter((p) => p.depth === 0).map((p, i) => (
          <m.path
            key={`pulse-${i}`}
            d={p.d}
            fill="none"
            stroke="var(--accent-soft)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="26 400"
            initial={{ strokeDashoffset: 426, opacity: 0 }}
            animate={{ strokeDashoffset: [426, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3.2,
              delay: 1.4 + i * 0.55,
              repeat: Infinity,
              repeatDelay: BRANCHES * 0.55 - 3.2 + 1.8,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Terminal nodes — individual learners */}
      {NODES.map((n) => {
        const seed = hash01(n.i);
        return (
          <circle
            key={n.i}
            cx={n.x}
            cy={n.y}
            r={2.6}
            fill="white"
            className={reduce ? undefined : "twinkle"}
            opacity={reduce ? 0.4 : undefined}
            style={
              reduce
                ? undefined
                : ({
                    "--tw-dur": `${round(4 + seed * 3, 2)}s`,
                    "--tw-delay": `${round(1.4 + seed * 2.5, 2)}s`,
                    "--tw-peak": "0.85",
                  } as React.CSSProperties)
            }
          />
        );
      })}

      {/* The core */}
      <circle cx={CENTER} cy={CENTER} r={132} fill="url(#arv-core)" opacity={0.32} />
      <m.circle
        cx={CENTER}
        cy={CENTER}
        r={CORE_EDGE}
        fill="none"
        stroke="white"
        strokeOpacity={0.28}
        style={{ transformOrigin: "400px 400px" }}
        animate={reduce ? undefined : { scale: [1, 1.1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx={CENTER} cy={CENTER} r={30} fill="url(#arv-core)" />
      <m.circle
        cx={CENTER}
        cy={CENTER}
        r={7}
        fill="white"
        animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
