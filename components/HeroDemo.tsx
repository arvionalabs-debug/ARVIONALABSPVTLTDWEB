"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { CornerDownLeft } from "lucide-react";
import { TURNS, CHIP_LABEL, OPENING_ASK } from "@/lib/demo";
import { EASE } from "@/lib/motion";

export function HeroDemo() {
  const reduce = useReducedMotionSafe();
  // Initial state must match the server render; the reduced-motion case is
  // resolved in the effect below, after mount.
  const [typed, setTyped] = useState("");
  const [turnId, setTurnId] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* The learner's question types itself once, then the interface waits. */
  useEffect(() => {
    if (reduce) {
      setTyped(OPENING_ASK);
      setTurnId("start");
      return;
    }
    let i = 0;
    const tick = setInterval(() => {
      i += 1;
      setTyped(OPENING_ASK.slice(0, i));
      if (i >= OPENING_ASK.length) {
        clearInterval(tick);
        timers.current.push(setTimeout(() => setTurnId("start"), 420));
      }
    }, 34);

    const all = timers.current;
    return () => {
      clearInterval(tick);
      all.forEach(clearTimeout);
    };
  }, [reduce]);

  const turn = turnId ? TURNS[turnId] : null;

  function choose(id: string) {
    setTouched(true);
    setTurnId(id);
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-[22px] border border-white/12 bg-[#0A0C12]/90 backdrop-blur-xl shadow-[0_50px_110px_-55px_rgba(0,0,0,0.95)]">
        {/* Interface bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
          <span className="text-[0.7rem] font-semibold tracking-[0.24em] text-white/55">
            ARVIONA LABS
          </span>
          <AnimatePresence mode="wait">
            {turn ? (
              <m.span
                key={turn.label}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="rounded-full bg-white/[0.06] px-2.5 py-1 font-mono text-[0.64rem] text-white/50"
              >
                {turn.label}
              </m.span>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-7">
          {/* The learner */}
          <p className="flex min-h-[1.5rem] items-start gap-2 text-[1.02rem] leading-relaxed text-white/80 sm:text-[1rem]">
            <span aria-hidden className="mt-[0.35em] h-1 w-1 shrink-0 rounded-full bg-white/30" />
            <span>
              {turn?.ask ?? typed}
              {!reduce && !turn ? (
                <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] animate-caret bg-accent-soft" />
              ) : null}
            </span>
          </p>

          {/* Arviona */}
          <div className="mt-6 min-h-[132px] sm:min-h-[124px]">
            <AnimatePresence mode="wait">
              {turn ? (
                <m.div
                  key={turn.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <p className="text-[0.88rem] text-accent-soft">{turn.say}</p>
                  <div className="mt-3 space-y-2">
                    {turn.lines.map((line, li) => (
                      <m.p
                        key={line}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.14 + li * 0.13,
                          duration: 0.45,
                          ease: EASE,
                        }}
                        className="text-[1.05rem] leading-[1.5] tracking-[-0.015em] text-white sm:text-[1.18rem]"
                      >
                        {line}
                      </m.p>
                    ))}
                  </div>
                </m.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Choices */}
          <div className="mt-5 border-t border-white/[0.07] pt-5">
            <AnimatePresence>
              {turn ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {turn.next.map((id) => (
                    <button
                      key={id}
                      onClick={() => choose(id)}
                      className="rounded-full border border-white/15 px-3.5 py-2 text-[0.82rem] text-white/70 transition-all duration-400 ease-arv hover:border-white/45 hover:bg-white/[0.06] hover:text-white"
                    >
                      {CHIP_LABEL[id]}
                    </button>
                  ))}
                </m.div>
              ) : (
                <div className="h-[38px]" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Nudge — disappears once the visitor takes over */}
      <AnimatePresence>
        {turn && !touched ? (
          <m.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
            className="mt-4 flex items-center gap-2 pl-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/50"
          >
            <CornerDownLeft aria-hidden className="h-3.5 w-3.5" />
            Try it — the explanation changes
          </m.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
