"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/site";
import { EASE } from "@/lib/motion";

const FOCUS = ["AI", "Cognitive learning", "Educational innovation", "Personalized learning"];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-surjit-ronald-5aa1382b5/",
    label: "Connect on LinkedIn",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58h2.8Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ronaldexplore/?hl=en",
    label: "@ronaldexplore",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <Section tone="light" size="lg" id="about">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:items-center">
        {/* Left Column: Company Story & Focus */}
        <div>
          <ScrollReveal>
            <p className="eyebrow text-ink/60">About</p>
          </ScrollReveal>
          <AnimatedText
            as="h2"
            text="Building the infrastructure for more personal learning."
            className="mt-7 max-w-xl text-section font-medium balance"
            delay={0.08}
          />
          <ScrollReveal delay={0.25}>
            <p className="mt-8 max-w-lg text-lead text-dim pretty">
              {COMPANY.legal} is a deep-tech education startup building Cognitive
              Learning Intelligence for scalable hyper-personalized learning.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <ul className="mt-9 flex flex-wrap gap-2">
              {FOCUS.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/10 px-3.5 py-1.5 font-mono text-[0.7rem] text-ink/65"
                >
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Right Column: Full Portrait Founder Showcase Card */}
        <ScrollReveal delay={0.15}>
          <div className="group relative overflow-hidden rounded-3xl border border-ink/[0.1] bg-white p-7 sm:p-9 shadow-lg shadow-ink/[0.03] transition-all duration-500 hover:border-ink/25 hover:shadow-xl">
            {/* Full-width Portrait Image Container */}
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-ink/5 sm:h-[380px]">
              <Image
                src="/founder.png"
                alt={COMPANY.founder}
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-cover object-top transition-transform duration-700 ease-arv group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent-soft font-semibold">
                  Founder & Builder
                </span>
                <h3 className="mt-1 text-[1.5rem] font-medium tracking-[-0.02em] text-white">
                  {COMPANY.founder}
                </h3>
              </div>
            </div>

            {/* Explanation / Bio */}
            <div className="mt-6">
              <p className="text-[1.02rem] leading-relaxed text-ink/75 pretty">
                A student entrepreneur working across AI, cognitive learning,
                educational innovation and product development — building Arviona
                from close to the classroom it is designed for.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap gap-3 border-t border-ink/[0.08] pt-6">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-paper-soft px-4 py-2 text-[0.84rem] font-medium text-ink/80 transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
