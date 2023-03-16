import { basename } from "node:path";
import glob from "fast-glob";
import dts from "rollup-plugin-dts";

const folderBuilds = glob
  .sync(`./build/**/*.d.ts`, { globstar: true })
  .map((file) => {
    const bn = basename(file);
    // const dir = dirname(file);
    if (/^[A-Z]/.test(bn)) return null;
    if (/build\/index.d.ts/.test(file)) return null;

    return {
      input: file,
      output: {
        file,
        format: "es",
      },
      plugins: [dts()],
    };
  })
  .filter(Boolean)
  .flat();

const config = [
  ...folderBuilds,
  {
    input: "./build/index.d.ts",
    output: [{ file: "build/index-combined.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
