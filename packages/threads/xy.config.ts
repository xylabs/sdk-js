import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {
      src: {
        entry: [
          './src/master/implementation.browser.ts',
          './src/worker/worker.browser.ts',
          './src/master/index-browser.ts',
          './src/index-browser.ts',
          './src/master/pool-browser.ts',
        ],
      },
    },
    neutral: {
      src: {
        entry: [
          './src/observable.ts',
          './src/observable-promise.ts',
          './src/master/implementation.ts',
          './src/master/register.ts',
          './src/master/spawn.ts',
          './src/master/thread.ts',
        ],
      },
    },
    node: {
      src: {
        entry: [
          './src/master/implementation.node.ts',
          './src/worker/worker.node.ts',
          './src/master/index-node.ts',
          './src/index-node.ts',
          './src/master/pool-node.ts',
        ],
      },
    },
  },
}

export default config
