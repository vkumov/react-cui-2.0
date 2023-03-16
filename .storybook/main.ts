/// <reference types="node" />

import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    {
      directory: "../stories/",
      files: "**/*.@(mdx|stories.@(js|ts|tsx))",
    },
    {
      directory: "../src/",
      files: "**/*.@(mdx|stories.@(js|ts|tsx))",
      titlePrefix: "Components",
    },
  ],
  staticDirs: ["../public"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve("node_modules"),
              path.resolve("./src/styles"),
            ],
          },
        },
      },
    },
    "@storybook/addon-essentials",
    "storybook-dark-mode-v7",
  ],
  core: {},
  webpackFinal: async (config) => {
    if (config.module === undefined) return config;
    if (config.module.rules === undefined) config.module.rules = [];
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        plugins: ["babel-plugin-tsconfig-paths"],
        presets: [
          [
            "react-app",
            {
              flow: false,
              typescript: true,
            },
          ],
        ],
      },
    });
    config.resolve?.extensions?.push(".ts", ".tsx");
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: "react-docgen-typescript",
    skipBabel: true,
    check: false,
  },
};
module.exports = config;
