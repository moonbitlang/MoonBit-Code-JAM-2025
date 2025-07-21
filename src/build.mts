import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "fs";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true });
}

mkdirSync("dist");

for (const team of readdirSync("teams")) {
  const artifact = `teams/${team}/artifact`;
  cpSync(artifact, `dist/${team}/artifact`, { recursive: true });
}

cpSync("src/index.html", "dist/index.html");
