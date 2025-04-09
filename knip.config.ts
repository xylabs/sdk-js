import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['@xylabs/ts-scripts-yarn3'],
  entry: ['src/index.ts', 'xy.config.ts'],
  workspaces: {
    '.': {
      entry: ['src/index.ts', 'eslint.config.mjs', 'xy.config.ts'],
      ignoreDependencies: [
        'eslint',
        '@typescript-eslint/eslint-plugin',
        'eslint-import-resolver-typescript',
      ],
    },
    'packages/buffer': {
      ignoreDependencies: ['buffer'],
      entry: ['src/index.ts', 'src/node/index.ts', 'src/browser/index.ts'],
    },
    'packages/*': { entry: ['src/index.ts', 'src/node/index.ts', 'src/browser/index.ts', 'src/neutral/index.ts'] },
    'packages/threads': {
      ignoreDependencies: ['is-observable-2-1-0'],
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
    },
    'packages/static-implements': { ignoreDependencies: ['tslib'] },
  },
}

export default config
