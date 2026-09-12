/** Content for the simulated Arviona learning interface. */

export const SESSION = {
  subject: "Physics",
  topic: "Newton's Second Law",
};

export const MODES = [
  { id: "explain", label: "Explain this" },
  { id: "practice", label: "Practice" },
  { id: "test", label: "Test my understanding" },
  { id: "doubt", label: "I have a doubt" },
] as const;

export type ModeId = (typeof MODES)[number]["id"];

export const EXPLAIN = [
  {
    id: "plain",
    chip: "Plain",
    lines: [
      "Force equals mass times acceleration.",
      "The harder you push, the faster it speeds up. The heavier it is, the slower it speeds up.",
    ],
  },
  {
    id: "simpler",
    chip: "Simplified",
    lines: ["Push harder, faster. Heavier, slower.", "That is the whole law."],
  },
  {
    id: "example",
    chip: "Example first",
    lines: [
      "The same push on an empty trolley and a loaded one.",
      "The empty one takes off. The loaded one barely moves.",
    ],
  },
  {
    id: "deeper",
    chip: "Deeper",
    lines: [
      "Acceleration is proportional to the net force and inversely proportional to mass.",
      "Net matters: only the unbalanced part of a force accelerates anything.",
    ],
  },
];

export const EXPLAIN_CHIPS: Record<string, string> = {
  plain: "Say it plainly",
  simpler: "Simpler",
  example: "Give an example",
  deeper: "Go deeper",
};

export type Question = {
  prompt: string;
  options: { text: string; correct?: boolean }[];
  hint: string;
  success: string;
  successNote: string;
};

export const PRACTICE: Question = {
  prompt: "A 2 kg block is pushed with a net force of 10 N. What is its acceleration?",
  options: [
    { text: "5 m/s²", correct: true },
    { text: "20 m/s²" },
    { text: "0.2 m/s²" },
  ],
  hint: "Rearrange F = ma into a = F ÷ m. You are dividing, not multiplying.",
  success: "Correct.",
  successNote: "Difficulty raised for the next question.",
};

export const TEST: Question = {
  prompt:
    "Same 10 N push, but the block is now 4 kg. Compared with before, the acceleration is…",
  options: [
    { text: "Half", correct: true },
    { text: "Double" },
    { text: "Unchanged" },
  ],
  hint: "Mass went up. Look at which side of the division it sits on.",
  success: "Understood.",
  successNote: "That was the same law in an unfamiliar shape — you transferred it.",
};

export const DOUBTS = [
  {
    q: "Is weight the same as mass?",
    a: "No. Mass is how much stuff there is. Weight is gravity pulling on that mass. On the Moon your mass is unchanged; your weight is not.",
  },
  {
    q: "What does 'net force' mean?",
    a: "Add up every push and pull acting on the object. Whatever is left over is the net force — and only that leftover accelerates anything.",
  },
  {
    q: "Why is it written a = F/m?",
    a: "Same equation, rearranged. F = ma says what the force has to be. a = F/m says what you get for the force you applied.",
  },
];
