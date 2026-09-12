"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { Plus } from "lucide-react";
import { AGENDA } from "@/lib/edutour";
import { EASE } from "@/lib/motion";

export function EduTourTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotionSafe();
  const [open, setOpen] = useState<string | null>(AGENDA[0].n);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative pl-10 sm:pl-14">
      <div
        aria-hidden
        className="absolute bottom-2 left-[13px] top-2 w-px bg-ink/10 sm:left-[21px]"
      />
      <m.div
        aria-hidden
        style={{ scaleY: reduce ? 1 : scaleY }}
        className="absolute bottom-2 left-[13px] top-2 w-px origin-top bg-accent sm:left-[21px]"
      />

      {AGENDA.map((a) => {
        const isOpen = open === a.n;
        return (
          <m.li
            key={a.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative border-b border-ink/[0.08] last:border-b-0"
          >
            <span
              aria-hidden
              className="absolute -left-10 top-6 flex h-[27px] w-[27px] items-center justify-center rounded-full border border-ink/12 bg-paper sm:-left-14"
            >
              <span
                className={`rounded-full bg-accent transition-all duration-500 ease-arv ${
                  isOpen ? "h-2.5 w-2.5" : "h-1.5 w-1.5"
                }`}
              />
            </span>

            <button
              onClick={() => setOpen(isOpen ? null : a.n)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[0.72rem] text-accent">{a.n}</span>
                <span
                  className={`text-[1.3rem] font-medium uppercase tracking-[-0.02em] transition-colors duration-400 sm:text-[1.5rem] ${
                    isOpen ? "text-ink" : "text-ink/65 group-hover:text-ink"
                  }`}
                >
                  {a.title}
                </span>
              </span>
              <Plus
                aria-hidden
                className={`h-4 w-4 shrink-0 text-ink/60 transition-transform duration-500 ease-arv ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl pb-7 text-[1rem] leading-relaxed text-ink/65 pretty">
                    {a.body}
                  </p>
                </m.div>
              ) : null}
            </AnimatePresence>
          </m.li>
        );
      })}
    </ol>
  );
}
