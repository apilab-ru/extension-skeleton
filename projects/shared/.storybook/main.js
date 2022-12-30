module.exports = {
  stories: ["../**/*.stories.mdx"],
  addons: [
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
