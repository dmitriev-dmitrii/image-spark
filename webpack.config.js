const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


module.exports = (env) => {
  const isProd = env.mode === 'production'
  const isDev = !isProd
  
  console.log(env);
  return {
    entry: './src/index.js',
    mode: isProd ? 'production' : 'development',

    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
    },
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].[contenthash:8].js",
      clean: true
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
        '@': path.resolve(__dirname, './src/')
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: { additionalData: `@import "./src/assets/scss/settings/vars.scss";` }
            }
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash:8].css",
        chunkFilename: "[name].[contenthash:8].css",
      }),
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: "./public/favicon.ico",
        minify: isProd,
        hash: isProd,
        inject: true,
        scriptLoading: 'defer',
      }),
    ],
    optimization: {
      runtimeChunk: "single",
      concatenateModules: isProd,
      mangleExports: isProd,
      minimize: isProd,
    }
  }
};
