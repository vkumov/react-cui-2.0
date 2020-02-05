import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.min.js",
    format: "iife",
    name: "bundle"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({ extensions: [".mjs", ".js", ".jsx", ".json"] }),
    commonjs(),
    uglify()
  ]
};
