"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
  as?: "div" | "section" | "li" | "article" | "header" | "figure";
};

export function ScrollReveal({
  children,
  delay = 0,
  className,
  variants = fadeUp,
  as = "div",
}: Props) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}
