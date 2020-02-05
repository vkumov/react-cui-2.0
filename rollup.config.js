import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import embedCSS from "rollup-plugin-embed-css";
import external from "rollup-plugin-peer-deps-external";
// import { uglify } from "rollup-plugin-uglify";

import * as react from "react";
import * as reactDom from "react-dom";
import * as reactIs from "react-is";
import * as propTypes from "prop-types";

import pkg from "./package.json";

export default {
  input: "./index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve({ extensions: [".mjs", ".js", ".jsx", ".json"] }),
    commonjs({
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
        "react-is": Object.keys(reactIs),
        "prop-types": Object.keys(propTypes),
        "node_modules/scheduler/index.js": [
          "unstable_runWithPriority",
          "LowPriority"
        ]
      }
    })
    // embedCSS()
    // uglify()
  ],
  external: ["React", "ReactDOM", "PropTypes"]
};
