// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I was just returning it to the laundry. Internally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
