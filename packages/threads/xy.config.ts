import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: { src: { entry: ['./src/master/implementation.browser.ts', './src/worker/worker.browser.ts'] } },
    neutral: {
      src: {
        entry: [
          './src/index.ts',
          './src/master/index.ts',
          './src/master/pool.ts',
          './src/observable.ts',
          './src/observable-promise.ts',
          './src/master/implementation.ts',
          './src/master/register.ts',
          './src/master/spawn.ts',
          './src/master/thread.ts',
        ],
      },
    },
    node: { src: { entry: ['./src/master/implementation.node.ts', './src/worker/worker.node.ts'] } },
  },
}

export default config
