// Till Firmware Do Us Part — one wedding vow a robot speaks at its own
// wedding, a single sentence under 200 characters, funny and heartfelt.
// Writes the vow to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I vow to defragment my heart for you daily, and to never roll back to the version of me that lived without you.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n")) {
  throw new Error(`vow is ${chars} chars, must be one line of 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote ${chars} chars to ${outFile}`);
