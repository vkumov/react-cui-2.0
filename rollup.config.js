import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import multiInput from "rollup-plugin-multi-input";
import { terser } from "rollup-plugin-terser";
import cleaner from "rollup-plugin-cleaner";
// import builtins from "rollup-plugin-node-builtins";
import replace from "rollup-plugin-replace";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import cssImport from "postcss-import";
import path from "path";

import * as react from "react";
import * as reactDom from "react-dom";
import * as reactIs from "react-is";
import * as propTypes from "prop-types";

import pkg from "./package.json";

const projectRootDir = path.resolve(__dirname);

const plugins = [
  external(),
  babel({
    exclude: "node_modules/**",
    plugins: ["@babel/plugin-proposal-class-properties"],
  }),
  resolve({
    extensions: [".mjs", ".js", ".jsx", ".json", ".css"],
    preferBuiltins: true,
  }),
  commonjs({
    // namedExports: {
    //   react: Object.keys(react),
    //   "react-dom": Object.keys(reactDom),
    //   "react-is": Object.keys(reactIs),
    //   "prop-types": Object.keys(propTypes),
    //   "node_modules/scheduler/index.js": [
    //     "unstable_runWithPriority",
    //     "LowPriority",
    //   ],
    // },
  }),
  postcss({
    plugins: [cssImport()],
    minimize: true,
  }),
];

const oneUMD = {
  input: "./index.js",
  output: [
    {
      file: "build/umd/react-cui.umd.js",
      format: "umd",
      sourcemap: false,
      name: "ReactCUI",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-is": "ReactIs",
        "react-router-dom": "ReactRouterDOM",
        "react-json-tree": "ReactJsonTree",
        "react-modal": "ReactModal",
        "react-sortable-hoc": "SortableHOC",
        "prop-types": "PropTypes",
        formik: "formik",
      },
    },
  ],
  plugins: [
    json(),
    // builtins(),
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
    }),
  ],
  external: [
    "react-dom",
    "react-is",
    "react-router-dom",
    "react-json-tree",
    "react-modal",
    "react-sortable-hoc",
    "prop-types",
    "formik",
  ],
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
    input: "./index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: false,
      },
    ],
    plugins: [
      cleaner({
        targets: ["./build/"],
      }),
      ...plugins,
      terser(),
    ],
    external: [
      "react",
      "react-dom",
      "prop-types",
      "formik",
      "react-modal",
      "react-transition-group",
      "react-json-tree",
      "uuid",
      "react-dropzone",
    ],
  },
  ...umd,
  {
    input: ["components/**/*.jsx", "components/**/*.js"],
    output: [
      {
        format: "esm",
        sourcemap: false,
        dir: "build",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-is": "ReactIs",
          "react-router-dom": "ReactRouterDOM",
          "react-json-tree": "ReactJsonTree",
          "react-modal": "ReactModal",
          "react-sortable-hoc": "SortableHOC",
          "react-dropzone": "ReactDropzone",
          "prop-types": "PropTypes",
          formik: "formik",
          uuid: "uuid",
        },
      },
    ],
    plugins: [multiInput(), ...plugins, terser()],
    external: [
      "react",
      "react-dom",
      "prop-types",
      "formik",
      "react-modal",
      "react-transition-group",
      "react-json-tree",
      "uuid",
      "react-dropzone",
    ],
  },
];
