// One Sentence for a Traveler from 1800 — entry program.
//
// Writes a single sentence (at most 200 characters) that explains the
// modern internet to a time traveler who has just stepped out of 1800.
// The sentence builds only from what a person of 1800 already knows —
// a road, a letter, a town, a stranger, a page, a library — and carries
// one twist: on this road, every reader may also write.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a road on which any letter you write travels to any town in a blink, and any stranger there can read it, answer it, and add a page of their own to the great library it carries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
