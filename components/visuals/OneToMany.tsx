"use client";

import { m } from "framer-motion";
import { EASE } from "@/lib/motion";

const N = 7;
const X = (i: number) => 60 + i * 90;
/* Same input, same route — and the outcomes still diverge. */
const OUTCOME = [0.9, 0.35, 0.62, 1, 0.22, 0.75, 0.48];

export function OneToMany() {
  return (
    <m.svg
      viewBox="0 0 660 300"
      className="w-full min-w-[540px]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      aria-hidden
    >
      <m.text
        x={330}
        y={22}
        textAnchor="middle"
        fill="rgba(7,8,11,0.62)"
        fontSize="11"
        fontFamily="var(--font-mono)"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
      >
        One explanation
      </m.text>

      <m.circle
        cx={330}
        cy={48}
        r={6}
        fill="var(--ink)"
        variants={{
          hidden: { scale: 0 },
          show: { scale: 1, transition: { duration: 0.5, ease: EASE } },
        }}
        style={{ transformOrigin: "330px 48px" }}
      />

      {/* One route, fanned out to everyone */}
      {Array.from({ length: N }).map((_, i) => (
        <m.path
          key={i}
          d={`M 330 54 C 330 120, ${X(i)} 110, ${X(i)} 176`}
          fill="none"
          stroke="rgba(7,8,11,0.22)"
          strokeWidth={1.2}
          variants={{
            hidden: { pathLength: 0 },
            show: {
              pathLength: 1,
              transition: { duration: 0.9, delay: 0.15 + i * 0.05, ease: EASE },
            },
          }}
        />
      ))}

      {/* Learners */}
      {Array.from({ length: N }).map((_, i) => (
        <m.rect
          key={`l-${i}`}
          x={X(i) - 10}
          y={176}
          width={20}
          height={20}
          rx={6}
          fill="none"
          stroke="rgba(7,8,11,0.3)"
          variants={{
            hidden: { opacity: 0, y: 6 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, delay: 0.75 + i * 0.05, ease: EASE },
            },
          }}
        />
      ))}

      {/* Outcomes — the part that never matches */}
      {OUTCOME.map((o, i) => (
        <m.rect
          key={`o-${i}`}
          x={X(i) - 5}
          y={222}
          width={10}
          rx={5}
          fill="var(--accent)"
          fillOpacity={0.55}
          variants={{
            hidden: { height: 0 },
            show: {
              height: 12 + o * 44,
              transition: { duration: 0.8, delay: 1.1 + i * 0.06, ease: EASE },
            },
          }}
        />
      ))}

      <m.text
        x={330}
        y={294}
        textAnchor="middle"
        fill="rgba(7,8,11,0.62)"
        fontSize="11"
        fontFamily="var(--font-mono)"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 1.5 } },
        }}
      >
        Different outcomes
      </m.text>
    </m.svg>
  );
}
