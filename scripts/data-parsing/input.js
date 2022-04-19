import path from "path";
import fs from "fs";

const __dirname = path.resolve();

export const INPUT = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf8")
);
