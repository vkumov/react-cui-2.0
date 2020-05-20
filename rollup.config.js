import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import embedCSS from "rollup-plugin-embed-css";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import multiInput from "rollup-plugin-multi-input";
import { terser } from "rollup-plugin-terser";
// import { uglify } from "rollup-plugin-uglify";

import * as react from "react";
import * as reactDom from "react-dom";
import * as reactIs from "react-is";
import * as propTypes from "prop-types";

import pkg from "./package.json";

const plugins = [
  external(),
  babel({
    exclude: "node_modules/**",
    plugins: ["@babel/plugin-proposal-class-properties"],
  }),
  resolve({ extensions: [".mjs", ".js", ".jsx", ".json"] }),
  // embedCSS(),
  commonjs({
    namedExports: {
      react: Object.keys(react),
      "react-dom": Object.keys(reactDom),
      "react-is": Object.keys(reactIs),
      "prop-types": Object.keys(propTypes),
      "node_modules/scheduler/index.js": [
        "unstable_runWithPriority",
        "LowPriority",
      ],
    },
  }),
  postcss({
    plugins: [],
    minimize: true,
  }),
  terser(),
  // embedCSS()
  // uglify()
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
    plugins,
    external: ["React", "ReactDOM", "PropTypes"],
  },
  {
    input: ["components/**/*.jsx", "components/**/*.js"],
    output: [
      {
        format: "esm",
        sourcemap: false,
        dir: "build",
      },
    ],
    plugins: [multiInput(), ...plugins],
    external: ["React", "ReactDOM", "PropTypes"],
  },
];
