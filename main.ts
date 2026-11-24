// Monday, Reviewed in One Line — entry program (program/v1).
// Writes a single original one-line review of the entrant's own Monday
// to /output/entry.txt. Node 22+ stdlib only, no network, no randomness:
// the same line every run, so the two grading runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Monday, reviewed: the 9 a.m. standup ran forty minutes over, the coffee machine quit at ten, and I still answered every email like a man with a plan — one star, would survive again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate seals it: 1 to 200 characters, a single line, not only whitespace.
const body = LINE.trim();
if (body.length < 1 || body.length > 200 || body.includes("\n")) {
  throw new Error(`entry line fails the gate at ${body.length} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), body + "\n", "utf8");
