import { XyTsupConfig } from '@xylabs/ts-scripts-yarn3'

const config: XyTsupConfig = {
  compile: {
    depth: 1,
    entryMode: 'all',
    mode: 'tsup',
  },
}

// eslint-disable-next-line import/no-default-export
export default config
