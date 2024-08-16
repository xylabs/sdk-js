import type { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'

const config: XyTsupConfig = {
  compile: {
    browser: {
      'src/browser': true,
    },
    mode: 'tsup',
    neutral: {
      'src/neutral': true,
    },
    node: {
      'src/node': true,
    },
  },
}

export default config
