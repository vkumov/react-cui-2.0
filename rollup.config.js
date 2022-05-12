import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import cleaner from "rollup-plugin-cleaner";
import { swc } from "rollup-plugin-swc3";
// import tsPaths from "rollup-plugin-tsconfig-paths";
import tsPaths from "rollup-plugin-typescript-paths";
import glob from "fast-glob";
import path from "path";

import cssImport from "postcss-import";
import fs from "fs";

import packageJson from "./package.json";
import { basename } from "path";

const externals = [
  "react",
  "react-dom",
  "react-modal",
  "react-transition-group",
  "react-dropzone",
];

const allExternals = [...externals];

const minimize = false;

const plugins = [
  peerDepsExternal({ includeDependencies: true }),
  resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".css"],
    preferBuiltins: true,
    // resolveOnly: (m) => {
    //   // console.log(m);
    //   return !m.startsWith("src");
    // },
  }),
  commonjs({
    include: "node_modules/**",
  }),
  swc({
    tsconfig: "tsconfig.json",
    sourceMaps: true,
  }),
  minimize && terser(),
].filter(Boolean);

const tsDTS = typescript({
  //   // tsconfig: "./tsconfig.json",
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    emitDeclarationOnly: true,
  },
});

const ignoreCssPlugin = postcss({
  plugins: [cssImport()],
  minimize,
  extract: false,
  inject: false,
});

const getFolders = (entry) => {
  // get the names of folders and files of the entry directory
  const dirs = fs.readdirSync(entry);
  // do not include folders not meant for export and do not process index.ts
  const dirsWithoutIndex = dirs
    .filter((name) => name !== "index.ts")
    // .filter((name) => name !== "utils")
    // .filter((name) => name !== "hooks")
    .filter((name) => !name.startsWith("."));
  // ['Accordion', 'Button'...]
  return dirsWithoutIndex;
};

(function () {
  getFolders("./src").map((folder) => {
    const all = glob.sync(`./src/${folder}/*.{ts,tsx}`).map((f) => {
      const resolved = path.resolve(f);
      const ext = path.extname(resolved);
      const jsd = resolved.replace(ext, ".js");
      return [resolved, jsd];
    });
    allExternals.push(...all.flat());
  });
  // console.log(allExternals);
})();

//loop through your folders and generate a rollup obj per folder
const folderBuilds = getFolders("./src")
  .map((folder) => {
    const files = glob.sync(`./src/${folder}/*.ts`);
    return files.map((file) => {
      const bn = basename(file, ".ts");
      return {
        input: `src/${folder}/${bn}.ts`,
        output: {
          // ensure file destination is same as where the typings are
          file: `build/${folder}/${bn}.js`,
          sourcemap: true,
          exports: "named",
          // plugins: [replace({ "src/": "../" })],
        },
        treeshake: true,
        // plugins,
        plugins: [
          // tsPaths({ preserveExtensions: false }),
          tsPaths(),
          ...plugins,
          ignoreCssPlugin,
        ].filter(Boolean),
        // external: externals,
        external: allExternals.filter((f) => !f.includes(`src/${folder}/`)),
      };
    });
  })
  .flat();

/**
 * @type {import('rollup').RollupOptions}
 **/
export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    treeshake: true,
    plugins: [
      cleaner({
        targets: ["./build/"],
      }),
      postcss({
        plugins: [cssImport()],
        minimize,
        extract: path.resolve(__dirname, "./build/css/styles.css"),
      }),
      tsDTS,
      ...plugins,
    ],
    external: externals,
  },
  ...folderBuilds,
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    treeshake: true,
    plugins: [tsDTS, ignoreCssPlugin, ...plugins],
    external: externals,
  },
];
