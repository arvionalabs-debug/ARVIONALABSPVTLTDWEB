"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, Check, Lightbulb, RotateCcw } from "lucide-react";
import {
  SESSION,
  MODES,
  EXPLAIN,
  EXPLAIN_CHIPS,
  PRACTICE,
  TEST,
  DOUBTS,
  type ModeId,
  type Question,
} from "@/lib/product";
import { EASE } from "@/lib/motion";

function Rail({ style, difficulty, support }: { style: string; difficulty: string; support: string }) {
  const rows = [
    { k: "Explanation", v: style },
    { k: "Difficulty", v: difficulty },
    { k: "Support", v: support },
  ];
  return (
    <div className="flex gap-6 border-t border-white/[0.07] px-5 py-4 sm:px-7 lg:flex-col lg:gap-0 lg:border-l lg:border-t-0 lg:px-6 lg:py-7">
      <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/50 lg:block">
        Session
      </p>
      <div className="grid flex-1 grid-cols-3 gap-3 lg:mt-5 lg:flex lg:flex-col lg:gap-0">
        {rows.map((r) => (
          <div
            key={r.k}
            className="lg:flex lg:items-baseline lg:justify-between lg:border-b lg:border-white/[0.07] lg:py-3 lg:last:border-b-0"
          >
            <span className="block font-mono text-[0.64rem] uppercase tracking-[0.14em] text-white/50 lg:text-[0.68rem]">
              {r.k}
            </span>
            <AnimatePresence mode="wait">
              <m.span
                key={r.v}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="mt-1 block text-[0.85rem] font-medium text-white lg:mt-0"
              >
                {r.v}
              </m.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionPanel({
  question,
  onCorrect,
  onWrong,
  picked,
  setPicked,
}: {
  question: Question;
  onCorrect: () => void;
  onWrong: () => void;
  picked: number | null;
  setPicked: (i: number | null) => void;
}) {
  const answered = picked !== null;
  const isRight = answered && !!question.options[picked!].correct;

  return (
    <div>
      <p className="text-[1.15rem] leading-[1.45] tracking-[-0.02em] text-white sm:text-[1.35rem]">
        {question.prompt}
      </p>

      <div className="mt-7 grid gap-2.5 sm:grid-cols-3">
        {question.options.map((o, i) => {
          const chosen = picked === i;
          const reveal = answered && o.correct;
          return (
            <button
              key={o.text}
              onClick={() => {
                if (answered) return;
                setPicked(i);
                if (o.correct) onCorrect();
                else onWrong();
              }}
              disabled={answered}
              className={`rounded-xl border px-4 py-4 text-left text-[0.95rem] transition-all duration-400 ease-arv disabled:cursor-default ${
                reveal
                  ? "border-accent-soft/60 bg-accent/15 text-white"
                  : chosen
                    ? "border-white/35 bg-white/[0.06] text-white/70"
                    : "border-white/12 text-white/65 hover:border-white/35 hover:bg-white/[0.04]"
              }`}
            >
              {o.text}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {answered ? (
          <m.div
            key={isRight ? "right" : "wrong"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
          >
            {isRight ? (
              <div className="flex items-start gap-3">
                <Check aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <p className="text-[0.95rem] text-white">
                  {question.success}{" "}
                  <span className="text-white/50">{question.successNote}</span>
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <Lightbulb aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent-soft">
                    Hint
                  </p>
                  <p className="mt-2 text-[1.02rem] leading-relaxed text-white/70">
                    {question.hint}
                  </p>
                  <button
                    onClick={() => setPicked(null)}
                    className="mt-4 inline-flex items-center gap-2 text-[0.85rem] text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    <RotateCcw aria-hidden className="h-3.5 w-3.5" />
                    Try again
                  </button>
                </div>
              </div>
            )}
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ProductDemo() {
  const [mode, setMode] = useState<ModeId | null>(null);
  const [explain, setExplain] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);
  const [testPick, setTestPick] = useState<number | null>(null);
  const [doubt, setDoubt] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState("Standard");
  const [support, setSupport] = useState("Ready");

  const style = mode === "explain" ? EXPLAIN[explain].chip : "Adaptive";

  function reset() {
    setMode(null);
    setPracticePick(null);
    setTestPick(null);
    setDoubt(null);
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/12 bg-[#0A0C12] shadow-[0_70px_130px_-65px_rgba(0,0,0,0.95)]">
      {/* Chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          {mode ? (
            <button
              onClick={reset}
              aria-label="Back to options"
              className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft aria-hidden className="h-4 w-4" />
            </button>
          ) : null}
          <span className="text-[0.74rem] font-semibold tracking-[0.24em] text-white/60">
            ARVIONA LABS
          </span>
        </div>
        <p className="font-mono text-[0.7rem] text-white/50">
          {SESSION.subject} · {SESSION.topic}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_240px]">
        <div className="p-6 sm:p-9">
          <AnimatePresence mode="wait">
            {!mode ? (
              <m.div
                key="menu"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="text-[0.88rem] text-white/55">
                  What are you learning today?
                </p>
                <p className="mt-4 text-[1.6rem] font-medium tracking-[-0.03em] text-white sm:text-[2.1rem]">
                  {SESSION.topic}
                </p>
                <p className="mt-2 font-mono text-[0.75rem] text-white/50">
                  {SESSION.subject}
                </p>

                <div className="mt-10 border-t border-white/[0.07] pt-8">
                  <p className="text-[0.88rem] text-white/55">
                    What would you like?
                  </p>
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {MODES.map((mode, i) => (
                      <m.button
                        key={mode.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: EASE }}
                        onClick={() => {
                          setMode(mode.id);
                          setSupport(mode.id === "practice" ? "Hints on" : "Ready");
                        }}
                        className="group flex items-center justify-between rounded-xl border border-white/12 px-5 py-4 text-left text-[0.98rem] text-white/75 transition-all duration-400 ease-arv hover:border-white/40 hover:bg-white/[0.05] hover:text-white"
                      >
                        {mode.label}
                        <span
                          aria-hidden
                          className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors duration-400 group-hover:bg-accent-soft"
                        />
                      </m.button>
                    ))}
                  </div>
                </div>
              </m.div>
            ) : mode === "explain" ? (
              <m.div
                key="explain"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-soft">
                  {EXPLAIN[explain].chip}
                </p>
                <AnimatePresence mode="wait">
                  <m.div
                    key={EXPLAIN[explain].id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="mt-5 min-h-[120px] space-y-3"
                  >
                    {EXPLAIN[explain].lines.map((l) => (
                      <p
                        key={l}
                        className="text-[1.15rem] leading-[1.45] tracking-[-0.02em] text-white sm:text-[1.35rem]"
                      >
                        {l}
                      </p>
                    ))}
                  </m.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.07] pt-7">
                  {EXPLAIN.map((e, i) =>
                    i === explain ? null : (
                      <button
                        key={e.id}
                        onClick={() => setExplain(i)}
                        className="rounded-full border border-white/15 px-4 py-2 text-[0.84rem] text-white/70 transition-all duration-400 ease-arv hover:border-white/45 hover:bg-white/[0.06] hover:text-white"
                      >
                        {EXPLAIN_CHIPS[e.id]}
                      </button>
                    ),
                  )}
                </div>
              </m.div>
            ) : mode === "doubt" ? (
              <m.div
                key="doubt"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="text-[0.88rem] text-white/55">What&rsquo;s the doubt?</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {DOUBTS.map((d, i) => (
                    <button
                      key={d.q}
                      onClick={() => setDoubt(i)}
                      className={`rounded-full border px-4 py-2 text-[0.84rem] transition-all duration-400 ease-arv ${
                        doubt === i
                          ? "border-white/40 bg-white/[0.07] text-white"
                          : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {d.q}
                    </button>
                  ))}
                </div>
                <div className="mt-8 min-h-[120px] border-t border-white/[0.07] pt-7">
                  <AnimatePresence mode="wait">
                    {doubt !== null ? (
                      <m.p
                        key={doubt}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="text-[1.08rem] leading-[1.5] text-white sm:text-[1.2rem]"
                      >
                        {DOUBTS[doubt].a}
                      </m.p>
                    ) : (
                      <p className="text-[0.95rem] text-white/50">
                        Pick one, and the answer adapts to where you are in the topic.
                      </p>
                    )}
                  </AnimatePresence>
                </div>
              </m.div>
            ) : (
              <m.div
                key={mode}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-soft">
                  {mode === "practice" ? "Practice" : "Check understanding"}
                </p>
                <div className="mt-5">
                  <QuestionPanel
                    question={mode === "practice" ? PRACTICE : TEST}
                    picked={mode === "practice" ? practicePick : testPick}
                    setPicked={mode === "practice" ? setPracticePick : setTestPick}
                    onCorrect={() => {
                      setDifficulty(mode === "practice" ? "Raised" : "Standard");
                      setSupport("Not needed");
                    }}
                    onWrong={() => {
                      setDifficulty("Eased");
                      setSupport("Hint given");
                    }}
                  />
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>

        <Rail style={style} difficulty={difficulty} support={support} />
      </div>
    </div>
  );
}
