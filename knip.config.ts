import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['@xylabs/ts-scripts-yarn3'],
  workspaces: {
    '.': {
      entry: ['src/index.ts'],
      ignoreDependencies: [
        'eslint-import-resolver-typescript',
      ],
    },
    'packages/buffer': {
      ignoreDependencies: ['buffer'],
      entry: ['src/node/index.ts', 'src/browser/index.ts'],
    },
    'packages/*': { entry: ['src/index.ts'] },
    'packages/platform': { entry: ['src/node/index.ts', 'src/browser/index.ts'] },
    'packages/crypto': { entry: ['src/node/index.ts', 'src/browser/index.ts'] },
    'packages/forget': { entry: ['src/index.ts', 'src/index-node.ts'] },
    'packages/url': { entry: ['src/node/index.ts', 'src/browser/index.ts', 'src/neutral/index.ts'] },
    'packages/threads': {
      ignoreDependencies: ['is-observable-2-1-0'],
      entry: [
        'src/index-node.ts',
        'src/index-browser.ts',
        'src/master/implementation.browser.ts',
        'src/master/implementation.node.ts',
        'index.mjs',
        'src/master/register.ts',
      ],
    },
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
