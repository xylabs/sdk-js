import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['@xylabs/ts-scripts-yarn3'],
  ignore: ['xy.config.ts'],
  workspaces: {
    'packages/buffer': { ignoreDependencies: ['buffer'], ignore: ['xy.config.ts'] },
    'packages/*': {
      entry: ['src/index.ts', 'src/node/index.ts', 'src/browser/index.ts'],
      ignore: ['xy.config.ts'],
    },
  },
  typescript: {
    config: [
      'tsconfig.json',
      'packages/**/*/tsconfig.json',
    ],
  },
}

export default config
