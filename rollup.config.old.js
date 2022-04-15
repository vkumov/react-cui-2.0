import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import multiInput from "rollup-plugin-multi-input";
import { terser } from "rollup-plugin-terser";
import cleaner from "rollup-plugin-cleaner";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import cssImport from "postcss-import";
import typescript from "rollup-plugin-typescript2";

import path from "path";

import pkg from "./package.json";

const globalPackages = {
  react: "React",
  "react-dom": "ReactDOM",
  "react-router-dom": "ReactRouterDOM",
  "react-modal": "ReactModal",
  "react-dropzone": "ReactDropzone",
};

const externals = [
  "react",
  "react-dom",
  "react-modal",
  "react-transition-group",
  "react-dropzone",
];

const projectRootDir = path.resolve(__dirname);

const plugins = [
  external(),
  resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".css"],
    preferBuiltins: true,
  }),
  commonjs(),
  typescript({ useTsconfigDeclarationDir: true }),
  postcss({
    plugins: [cssImport()],
    minimize: true,
  }),
];

const oneUMD = {
  input: "./src/index.ts",
  output: [
    {
      file: "build/umd/react-cui.umd.js",
      format: "umd",
      sourcemap: false,
      name: "ReactCUI",
      globals: globalPackages,
    },
  ],
  plugins: [
    json(),
    alias({
      entries: [
        {
          find: "crypto",
          replacement: path.resolve(projectRootDir, "utils/randomBytes.js"),
        },
      ],
    }),
    ...plugins,
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
  external: externals,
};

const umd = [
  oneUMD,
  {
    ...oneUMD,
    output: [{ ...oneUMD.output[0], file: "build/umd/react-cui.umd.min.js" }],
    plugins: [...oneUMD.plugins, terser()],
  },
];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({
        targets: ["./build/"],
      }),
      ...plugins,
      terser(),
    ],
    external: externals,
  },
  ...umd,
  {
    input: ["src/components/**/*.tsx", "src/components/**/*.ts"],
    output: [
      {
        format: "esm",
        sourcemap: false,
        dir: "build",
        globals: globalPackages,
      },
    ],
    plugins: [
      multiInput({
        relative: "src/",
        glob: { ignore: ["**.stories.tsx", "**.d.ts"] },
      }),
      ...plugins,
      terser(),
    ],
    external: externals,
  },
];
