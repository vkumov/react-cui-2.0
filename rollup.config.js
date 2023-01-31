import fs from "node:fs";
import path, { basename } from "node:path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import glob from "fast-glob";
import cssImport from "postcss-import";
import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import tsPaths from "rollup-plugin-typescript-paths";
import swc from "unplugin-swc";

import packageJson from "./package.json";

const externals = [
  "react",
  "react-dom",
  "react-transition-group",
  "react-dropzone",
];

const allExternals = [...externals];

const minimize = true;

const plugins = [
  peerDepsExternal({ includeDependencies: true }),
  resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".css"],
    preferBuiltins: true,
  }),
  commonjs({
    include: "node_modules/**",
  }),
  swc.rollup({
    tsconfigFile: "tsconfig.json",
    sourceMaps: true,
    minify: minimize,
  }),
].filter(Boolean);

const tsDTS = typescript({
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
  use: {
    sass: {
      includePaths: [
        // path.resolve("node_modules"),
        path.resolve(__dirname, "node_modules"),
        path.resolve("./src/styles"),
      ],
    },
  },
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
const esmBundle = {
  input: ["src/index.ts"],
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  strictDeprecations: true,
  treeshake: true,
  plugins: [
    postcss({
      plugins: [cssImport()],
      minimize: true,
      extract: "css/styles.css",
      use: {
        sass: {
          includePaths: [
            // path.resolve("node_modules"),
            path.resolve(__dirname, "node_modules"),
            path.resolve("./src/styles"),
          ],
        },
      },
    }),
    tsDTS,
    ...plugins,
  ],
  external: externals,
};

/**
 * @type {import('rollup').RollupOptions}
 **/
const cjsBundle = {
  input: ["src/index.ts"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  strictDeprecations: true,
  treeshake: true,
  plugins: [
    cleaner({
      targets: ["./build/"],
    }),
    tsDTS,
    ignoreCssPlugin,
    ...plugins,
  ],
  external: externals,
};

/**
 * @type {import('rollup').RollupOptions}
 **/
export default [cjsBundle, ...folderBuilds, esmBundle];
