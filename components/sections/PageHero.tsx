"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import { EASE } from "@/lib/motion";
import { CTA } from "@/components/ui/CTA";

export function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  primary,
  secondary,
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  meta?: { k: string; v: string }[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: ReactNode;
}) {
  return (
    <section className="dark-band relative overflow-hidden bg-ink pb-24 pt-[168px] sm:pb-32 sm:pt-[200px]">
      <div className="grid-field pointer-events-none absolute inset-0" />
      {visual ? (
        <div className="pointer-events-none absolute inset-0">{visual}</div>
      ) : (
        <div
          aria-hidden
          className="glow-core pointer-events-none absolute right-[-14%] top-[-18%] h-[520px] w-[520px] opacity-35"
        />
      )}

      <div className="shell relative">
        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="eyebrow text-white/55"
        >
          {eyebrow}
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="mt-8 max-w-4xl text-hero font-medium text-white balance"
        >
          {title}
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
          className="mt-8 max-w-2xl text-lead text-white/55 pretty"
        >
          {lead}
        </m.p>

        {primary ? (
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
            className="mt-11 flex flex-wrap gap-3"
          >
            <CTA href={primary.href} tone="dark" size="lg">
              {primary.label}
            </CTA>
            {secondary ? (
              <CTA href={secondary.href} tone="dark" variant="secondary" size="lg">
                {secondary.label}
              </CTA>
            ) : null}
          </m.div>
        ) : null}

        {meta ? (
          <m.dl
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: EASE }}
            className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {meta.map((m) => (
              <div key={m.k} className="bg-ink px-6 py-6">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/50">
                  {m.k}
                </dt>
                <dd className="mt-3 text-[1.05rem] text-white">{m.v}</dd>
              </div>
            ))}
          </m.dl>
        ) : null}
      </div>
    </section>
  );
}
