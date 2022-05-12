/// <reference types="node" />

/**
 * @type {import('@storybook/react/types').StorybookConfig}
 **/
const config = {
  stories: [
    { directory: "../stories/", files: "**/*.stories.@(js|ts|tsx|mdx)" },
    {
      directory: "../src/",
      files: "**/*.stories.tsx",
      titlePrefix: "Components",
    },
  ],
  staticDirs: ["../public"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        transcludeMarkdown: true,
        // needed if you use addon-docs in conjunction
        // with addon-storysource
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: ["style-loader", "css-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        plugins: ["babel-plugin-tsconfig-paths"],
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};

module.exports = config;
