import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Ensure module and rules exist
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    // Remove any existing rules for SCSS files
    config.module.rules = config.module.rules.filter((rule: any) => {
      if (rule.test instanceof RegExp) {
        return !rule.test.test('.scss');
      }
      return true;
    });

    // Add resolve.alias if it doesn't exist
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }

    // Add alias for styles directory
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles');

    // Add our custom SCSS rule
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sourceMap: true,
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, "../src/styles"),
                path.resolve(__dirname, "../node_modules")
              ]
            }
          }
        }
      ]
    });

    return config;
  },
};

export default config; 