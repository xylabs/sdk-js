import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['@xylabs/ts-scripts-yarn3'],
  workspaces: {
    '.': {
      ignoreDependencies: [
        'vite',
      ],
    },
    'packages/buffer': { ignoreDependencies: ['buffer'] },
    'packages/*': {},
    'packages/creatable': { ignoreDependencies: ['tslib'] },
    'packages/platform': {},
    'packages/crypto': {},
    'packages/forget': { ignoreDependencies: ['global-config-node', 'global-config'] },
    'packages/threads': {},
    'packages/static-implements': { ignoreDependencies: ['tslib'] },
  },
  typescript: {
    config: [
      'tsconfig.json',
      'packages/**/*/tsconfig.json',
    ],
  },
}

export default config
