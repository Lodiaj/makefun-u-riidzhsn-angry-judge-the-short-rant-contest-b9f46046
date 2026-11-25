import { mkdirSync, writeFileSync } from "node:fs";

// Angry Judge: The Short Rant Contest
// One short, funny rant about a small everyday annoyance.
// The gate requires /output/entry.txt to be UTF-8 text of 1-400 characters.
const RANT =
  "My smoke detector only ever needs a new battery at 3 a.m. " +
  "Never at noon. Never on a Saturday. " +
  "Always 3 a.m., one lonely beep every forty seconds, " +
  "just often enough that you can't fall back asleep. " +
  "It doesn't detect smoke. It detects sleep.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1-400 characters, not only whitespace.
if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`rant is ${RANT.length} characters, outside the 1-400 gate`);
}

writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`wrote /output/entry.txt (${RANT.length} characters)`);
