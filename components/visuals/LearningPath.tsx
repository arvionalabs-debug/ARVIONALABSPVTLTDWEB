"use client";

import type { RefObject } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/**
 * One learner enters as a single line, and the path keeps dividing.
 * Drawing is tied to scroll position rather than a timer, so the branching
 * happens as the reader moves through the section describing it.
 */
const TRUNK = "M 0 110 C 150 110, 210 110, 300 110";
const BRANCHES = [
  "M 300 110 C 400 110, 440 58, 560 58",
  "M 300 110 C 400 110, 440 162, 560 162",
];
const LEAVES = [
  "M 560 58 C 660 58, 700 26, 820 26",
  "M 560 58 C 660 58, 700 84, 820 84",
  "M 560 162 C 660 162, 700 136, 820 136",
  "M 560 162 C 660 162, 700 194, 820 194",
];
const ENDPOINTS = [26, 84, 136, 194];

export function LearningPath({
  trackRef,
}: {
  trackRef: RefObject<HTMLElement | null>;
}) {
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const trunk = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const branch = useTransform(scrollYProgress, [0.28, 0.62], [0, 1]);
  const leaf = useTransform(scrollYProgress, [0.58, 0.95], [0, 1]);

  return (
    <svg viewBox="0 0 840 220" className="w-full min-w-[640px]" aria-hidden>
      <m.path
        d={TRUNK}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.6}
        strokeLinecap="round"
        style={{ pathLength: reduce ? 1 : trunk }}
      />
      {BRANCHES.map((d) => (
        <m.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity={0.7}
          strokeWidth={1.4}
          strokeLinecap="round"
          style={{ pathLength: reduce ? 1 : branch }}
        />
      ))}
      {LEAVES.map((d) => (
        <m.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity={0.42}
          strokeWidth={1.2}
          strokeLinecap="round"
          style={{ pathLength: reduce ? 1 : leaf }}
        />
      ))}
      <circle cx={0} cy={110} r={4} fill="var(--ink)" />
      {ENDPOINTS.map((y) => (
        <m.circle
          key={y}
          cx={820}
          cy={y}
          r={4}
          fill="var(--accent)"
          style={{ opacity: reduce ? 1 : leaf }}
        />
      ))}
    </svg>
  );
}
