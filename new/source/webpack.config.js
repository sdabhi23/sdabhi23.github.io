let path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    portfolio: ["./root.jsx"],
  },
  output: {
    path: path.resolve("./../build/"),
    publicPath: "/",
    library: "Portfolio",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: ["/usr/local/lib/node_modules/", /node_modules/],
        use: {
          loader: "babel-loader?cacheDirectory=true",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"].map(
              require.resolve
            ),
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
