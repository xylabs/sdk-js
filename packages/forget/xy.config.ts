import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'
const config: XyTsupConfig = {
  compile: {
    browser: {},
    neutral: { 'src/neutral': true },
    node: { 'src/node': true },
  },
}

export default config
