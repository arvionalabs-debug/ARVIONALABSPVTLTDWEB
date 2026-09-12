import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { WhatChanges } from "@/components/sections/WhatChanges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Arviona works: it watches how an answer happened, builds a picture of the learner, decides what comes next and how to explain it, then checks whether it landed.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Understand the learner first. Then decide how to teach."
        lead="A student sees one thing: an explanation that changes until it makes sense. This is what is happening behind that."
        primary={{ label: "Experience Arviona", href: "/platform" }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />
      <Walkthrough />
      <WhatChanges />
      <HowItWorks />
      <Trust />
      <CTASection
        eyebrow="Experience Arviona"
        title="The clearest explanation is the one you try."
        lead="Watch a single concept change form until it lands."
        primary={{ label: "Experience Arviona", href: "/platform" }}
        secondary={{ label: "Bring Arviona to Your School", href: "/schools#partner" }}
      />
    </>
  );
}
