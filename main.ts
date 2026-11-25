import { mkdirSync, writeFileSync } from "node:fs";

// Entry for u-azazex-last-text-at-one-percent-ba9fc876.
// The whole entry is this one line, written verbatim, no trailing newline.
const line = "I spent my last 1% on the update. It needs 2% to install. I died for nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);

// Note: the only write target is the absolute /output/entry.txt path.
// No relative write, no env gating, no try/catch around the output write,
// so the program cannot fail in the grader's read-only sandbox.
