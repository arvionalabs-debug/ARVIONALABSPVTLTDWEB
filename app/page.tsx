import { Hero } from "@/components/sections/Hero";
import { Transition } from "@/components/sections/Transition";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { CognitiveIntelligence } from "@/components/sections/CognitiveIntelligence";
import { PlatformExplore } from "@/components/sections/PlatformExplore";
import { ForStudents } from "@/components/sections/ForStudents";
import { ForEducators } from "@/components/sections/ForEducators";
import { SchoolCTA } from "@/components/sections/SchoolCTA";
import { About } from "@/components/sections/About";
import { Research } from "@/components/sections/Research";
import { Vision } from "@/components/sections/Vision";
import { BrandThesis } from "@/components/sections/BrandThesis";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Transition />
      <Problem />
      <Approach />
      <CognitiveIntelligence />
      <PlatformExplore />
      <ForStudents />
      <ForEducators />
      <SchoolCTA />
      <About />
      <Research />
      <Vision />
      <BrandThesis />
    </>
  );
}
