/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')
const ThreadsPlugin = require('threads-plugin')

module.exports = {
  context: __dirname,
  devtool: false,
  entry: require.resolve('./app.ts'),
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: { compilerOptions: { module: 'esnext' } },
        test: /\.ts$/,
      },
    ],
  },
  output: {
    library: 'test',
    libraryExport: 'default',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, './dist/app.web'),
  },
  plugins: [new ThreadsPlugin()],
  resolve: { extensions: ['.js', '.ts'] },
  target: 'web',
}
