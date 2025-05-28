import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {},
    neutral: { src: { entry: ['src/index.ts'] } },
    node: { src: { entry: ['src/index-node.ts'] } },
  },
}

export default config
