import { cpSync, existsSync, mkdirSync, readdirSync, rmdirSync } from "fs";

if (existsSync("dist")) {
  rmdirSync("dist", { recursive: true });
}

mkdirSync("dist");

for (const team of readdirSync("teams")) {
  const artifact = `teams/${team}/artifact`;
  cpSync(artifact, `dist/${team}/artifact`, { recursive: true });
}
