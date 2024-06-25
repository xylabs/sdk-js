import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// eslint-disable-next-line import/no-default-export
export default {
  plugins: [
    nodeResolve({
      browser: true,
      mainFields: ['module', 'main'],
      preferBuiltins: true,
    }),

    commonjs(),
  ],
}
