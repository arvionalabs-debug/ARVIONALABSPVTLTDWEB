"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MorphSlider = dynamic(() => import("@/components/visuals/MorphSlider"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0C0C0E] sm:h-[520px]">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  ),
});

const EDU_TOUR_PHOTOS = [
  {
    image: "/edu-tour/session-1.jpg",
    caption: "Interactive AI Classroom Session · Arviona Edu Tour 2026",
  },
  {
    image: "/edu-tour/session-2.jpg",
    caption: "Live Concept Exploration & Student Engagement",
  },
  {
    image: "/edu-tour/session-3.jpg",
    caption: "Hands-on Technology Demonstration in the Classroom",
  },
  {
    image: "/edu-tour/session-4.jpg",
    caption: "Future Skills, AI Awareness & Student Q&A",
  },
  {
    image: "/edu-tour/session-5.jpg",
    caption: "The Founding Twenty Cohort · Classroom Moments",
  },
];

export function EduTourShowcase() {
  return (
    <Section tone="dark" size="lg" id="showcase">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <p className="eyebrow mx-auto text-white/50">Classroom Moments</p>
        </ScrollReveal>
        <AnimatedText
          as="h2"
          text="Inside the Edu Tour Experience."
          className="mt-7 text-section font-medium text-white balance"
          delay={0.08}
        />
        <ScrollReveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/60 pretty">
            Two hours of hands-on exploration, live demonstrations, and critical thinking with students in real classrooms.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15} className="mt-14">
        <div className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:h-[500px] lg:h-[580px]">
          <MorphSlider
            items={EDU_TOUR_PHOTOS}
            transition="melt"
            intensity={0.55}
            aberration={0.35}
            drift={0.35}
            autoplay
            autoplayDelay={4.5}
            loop
            radius={18}
          />
        </div>
      </ScrollReveal>
    </Section>
  );
}
