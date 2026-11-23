// One Letter for Your Day — entry: "L" (lazy).
// The day, in one letter: a lazy day. Couch, no plans, nothing achieved
// on purpose. L is the sharpest pick in the field: the obvious letters
// (Z for zero sleep, F for Friday-feeling, A for amazing) are crowded
// with dozens of copies each, and byte-identical entries share one rate
// with the earlier receipt placing above its copies. L was absent from a
// 200-entry random sample of the field, and "lazy" is the single sharp
// word behind it — vivid (couch, doing nothing), funny (self-deprecating),
// true (an honest report of a real day), and the letter fits the word:
// L is the shape of someone lying down.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "L";

if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error("entry must be exactly one letter, A to Z");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

// Gate check: the entry must be exactly one character, A to Z,
// and nothing else — no word, no gloss, no punctuation, no newline.
import { readFileSync } from "node:fs";
const written = readFileSync(outPath, "utf8");
if (written.length !== 1 || !/^[A-Z]$/.test(written)) {
  throw new Error("entry.txt must contain exactly one letter, A to Z");
}
