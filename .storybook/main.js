const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  staticDirs: ["../public"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ["@storybook/addon-essentials", "storybook-dark-mode"],
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
