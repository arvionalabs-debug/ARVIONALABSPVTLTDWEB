/** Content for the hero's adaptive-explanation demonstration. */

export type Turn = {
  id: string;
  ask: string | null;
  label: string;
  say: string;
  lines: string[];
  next: string[];
};

export const OPENING_ASK = "I don't understand Newton's Second Law.";

export const TURNS: Record<string, Turn> = {
  start: {
    id: "start",
    ask: null,
    label: "Plain",
    say: "Let's try it differently.",
    lines: [
      "Force equals mass times acceleration.",
      "Push harder and it speeds up faster. Make it heavier and it speeds up slower.",
    ],
    next: ["example", "simpler", "matters"],
  },
  example: {
    id: "example",
    ask: "Give me an example.",
    label: "Example first",
    say: "Here it is with something you've pushed.",
    lines: [
      "Same push. An empty trolley takes off. A loaded one barely moves.",
      "The push is the force. The load is the mass.",
    ],
    next: ["simpler", "matters", "start"],
  },
  simpler: {
    id: "simpler",
    ask: "Explain it simpler.",
    label: "Simplified",
    say: "Shorter, then.",
    lines: [
      "Heavy things are stubborn. Light things aren't.",
      "That's the whole law.",
    ],
    next: ["example", "matters", "start"],
  },
  matters: {
    id: "matters",
    ask: "Why does this matter?",
    label: "Grounded",
    say: "Because you're surrounded by it.",
    lines: [
      "It's why seatbelts exist, why a loaded truck takes so long to stop,",
      "and why rockets need that much fuel to leave the ground.",
    ],
    next: ["example", "simpler", "start"],
  },
};

export const CHIP_LABEL: Record<string, string> = {
  start: "Start over",
  example: "Give me an example.",
  simpler: "Explain it simpler.",
  matters: "Why does this matter?",
};
