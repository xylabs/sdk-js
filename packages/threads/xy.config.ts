import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {},
    neutral: {
      src: {
        entry: [
          './src/index.ts',
          './src/worker/bundle-entry.ts',
          './src/master/register.ts',
          './src/observable.ts',
          '.src.master/index.ts',
        ],
      },
    },
    node: {},
  },
}

export default config
