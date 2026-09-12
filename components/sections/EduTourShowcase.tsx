"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/ui/Section";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MorphSlider = dynamic(() => import("@/components/visuals/MorphSlider"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[450px] w-full items-center justify-center rounded-2xl border border-white/10 bg-[#0C0C0E] sm:h-[540px]">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  ),
});

const EDU_TOUR_PHOTOS = [
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
    caption: "Interactive AI Discovery · Classroom Session",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
    caption: "Live Concept Exploration · Higher Secondary Students",
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop",
    caption: "Adaptive Learning Feedback & Problem Solving",
  },
  {
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1600&auto=format&fit=crop",
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
        <div className="relative mx-auto h-[380px] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:h-[480px] lg:h-[560px]">
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
