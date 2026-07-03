const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");

module.exports = {
  webpack: {
    alias: {
      "@": srcPath,
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        "@": srcPath,
      };
      webpackConfig.resolve.plugins = [
        ...(webpackConfig.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "tsconfig.json"),
        }),
      ];
      return webpackConfig;
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
      },
    },
  },
};
