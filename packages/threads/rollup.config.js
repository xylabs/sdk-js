/* eslint-disable @typescript-eslint/no-require-imports */
const commonjs = require('@rollup/plugin-commonjs')
/* eslint-disable @typescript-eslint/no-require-imports */
const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = {
  plugins: [
    nodeResolve({
      browser: true,
      mainFields: ['module', 'main'],
      preferBuiltins: true,
    }),

    commonjs(),
  ],
}
