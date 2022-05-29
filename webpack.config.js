const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',
  entry: './src/index.tsx',
  resolve: {
    // 모듈 해석 방식 정의, 확장자(extensions), 경로(modules) 등 명시해줘야한다. 경로는 기본적으로 잘 인식하는듯
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true, // 404를 전부 index로
    port: 3000,
    hot: true,
    // inline: true,
    // publicPath: '/',
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   React: 'react'
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
};
