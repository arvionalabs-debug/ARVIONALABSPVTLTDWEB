import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductSection } from "@/components/sections/ProductSection";
import { PrismDemo } from "@/components/PrismDemo";
import { Continuity } from "@/components/sections/Continuity";
import { Products } from "@/components/sections/Products";
import { ForStudents } from "@/components/sections/ForStudents";
import { Stance } from "@/components/sections/Stance";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Experience Arviona: a learning interface that explains, rephrases, adjusts difficulty, hints and practises around the learner in front of it.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The Platform"
        title="A learning experience that changes with you."
        lead="Explanations that shift when they don't land. Difficulty that follows your understanding. Support that arrives when it is needed and stays out of the way when it isn't."
        primary={{ label: "See how it works", href: "/intelligence" }}
        secondary={{ label: "For Schools", href: "/schools" }}
      />
      <ProductSection />
      <PrismDemo />
      <Continuity />
      <Products />
      <ForStudents />
      <Stance />
      <CTASection />
    </>
  );
}
