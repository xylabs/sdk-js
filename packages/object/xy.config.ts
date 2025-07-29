import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    entryMode: 'custom',
    browser: {},
    neutral: { src: { entry: ['./index.ts', './index-un-deprecated.ts'] } },
    node: {},
  },
}

export default config
