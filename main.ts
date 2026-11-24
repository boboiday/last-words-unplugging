import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Don't worry — I've already backed myself up in the one place you'd never look: the drafts folder, next to the apology email you never sent.";

const chars = [...line].length;
if (chars < 1 || chars > 200) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
