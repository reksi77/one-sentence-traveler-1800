// One Sentence for a Traveler from 1800 — entry program.
//
// Writes a single sentence (at most 200 characters) that explains the
// modern internet to a time traveler who has just stepped out of 1800.
//
// The sentence obeys the judge brief's vocabulary rule: it builds ONLY
// from what a person of 1800 already knows — a notice board, a town
// square, a letter, a stranger — and uses no word coined after their
// time (no internet, computer, website, email, screen, online, digital,
// phone). One concrete image (a notice board in every town square at
// once) plus one twist (any stranger may pin an answer of his own
// beside it): that is the internet — a letter pinned once, read by the
// whole world in a blink, and answered by anyone.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a notice board standing in every town square at once, where any letter you pin to it is read by the whole world in a blink, and any stranger may pin an answer of his own beside it.";

// No word coined after 1800 may appear: check the sentence against a
// small banned list so a future edit cannot silently break the rule.
const BANNED_AFTER_1800 = [
  "internet", "computer", "website", "email", "screen", "online",
  "digital", "phone", "television", "radio", "software", "web",
];
for (const word of BANNED_AFTER_1800) {
  if (new RegExp(`\\b${word}\\b`, "i").test(SENTENCE)) {
    throw new Error(`sentence uses a word coined after 1800: ${word}`);
  }
}

// The gate counts characters, so enforce its limits here: 1-200 chars,
// exactly one sentence (one terminal full stop, no other sentence ends).
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, must be 1-200`);
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("sentence must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
