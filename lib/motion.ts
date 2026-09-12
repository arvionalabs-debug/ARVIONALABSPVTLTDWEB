import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger = (amount = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: amount, delayChildren: delay } },
});

export const viewportOnce = { once: true, amount: 0.25 } as const;
