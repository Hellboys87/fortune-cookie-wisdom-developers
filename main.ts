// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes a single original fortune-cookie line for a software developer
// to $MAKEFUN_OUTPUT_DIR/entry.txt (falling back to /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "You will hunt the bug all week, and find it smiling in the one line you trusted too much to reread.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), fortune + "\n", "utf8");
