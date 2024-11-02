import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['@xylabs/ts-scripts-yarn3'],
  ignore: ['xy.config.ts'],
  entry: ['src/index.ts'],
  workspaces: {
    '.': {
      entry: ['src/index.ts'],
      ignore: ['xy.config.ts'],
    },
    'packages/buffer': {
      ignoreDependencies: ['buffer'],
      ignore: ['xy.config.ts'],
      entry: ['src/index.ts', 'src/node/index.ts', 'src/browser/index.ts'],
    },
    'packages/*': {
      entry: ['src/index.ts', 'src/node/index.ts', 'src/browser/index.ts', 'src/neutral/index.ts'],
      ignore: ['xy.config.ts'],
    },
    'packages/threads': {
      entry: [
        'src/index.ts',
        'src/master/implementation.browser.ts',
        'src/master/implementation.node.ts',
        'index.mjs',
        'observable.{mjs,js}',
        'register.{mjs,js}',
        'worker.{mjs,js}',
        'src/master/register.ts',
        'src/worker/bundle-entry.ts',
        'test-tooling/**/*.{ts,js}',
        'test/**/*.{ts,js}',
      ],
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
