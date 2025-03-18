import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: { src: { entry: ['./src/master/implementation.browser.ts'] } },
    neutral: {
      src: {
        entry: [
          './src/index.ts',
          './src/master/index.ts',
          './src/worker/index.ts',
          './src/observable.ts',
          './src/master/implementation.ts',
          './src/master/register.ts',
        ],
      },
    },
    node: { src: { entry: ['./src/master/implementation.node.ts'] } },
  },
}

export default config
