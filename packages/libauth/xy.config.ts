import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {
      src: {
        esbuildOptions: (options) => {
          options.minifyWhitespace = true
          options.keepNames = true
          options.sourcemap = false
          return options
        },
        noExternal: ['@bitauth/libauth'],
        sourcemap: false,
      },
    },
    node: {
      src: {
        esbuildOptions: (options) => {
          options.minifyWhitespace = true
          options.keepNames = true
          options.sourcemap = false
          return options
        },
        noExternal: ['@bitauth/libauth'],
        sourcemap: false,
      },
    },
  },
}

export default config
