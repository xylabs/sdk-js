import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    neutral: { src: { entry: ['neutral/index.ts'] } },
    node: { src: { entry: ['node/index.ts'] } },
  },
}

export default config
