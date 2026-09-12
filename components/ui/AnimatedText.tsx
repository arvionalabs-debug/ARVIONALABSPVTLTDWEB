"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Reveals a line word by word with a fade and a short lift.
 *
 * Two things are deliberate here. Words are not clipped inside an
 * overflow-hidden mask: that needs the clip box to be taller than the line box,
 * and every way of buying that height either slices descenders or drops text
 * into the line below. And the separating space sits between the spans rather
 * than inside them — a trailing space within an inline-block is preserved by
 * the browser as a non-breaking space, which breaks find-in-page and copy.
 */
export function AnimatedText({
  text,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            <m.span
              className="inline-block"
              initial={{ opacity: 0, y: "0.32em" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: delay + i * stagger, ease: EASE }}
            >
              {word}
            </m.span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
