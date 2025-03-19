import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', 'dist', '**/dist/**',
    'build', '**/build/**', 'node_modules/**', 'public', 'storybook-static', 'eslint.config.mjs',
    'rollup.config.js', 'test-tooling', 'test', 'types', 'worker.*', '*.mjs', '*.d.ts', '*.js'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  typescriptConfig,
  importConfig,
  {
    rules: {
      'no-restricted-syntax': ['off'],
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            ...rulesConfig.rules['no-restricted-imports'][1].paths,
            '@xyo-network/*',
            'lodash',
            'lodash-es',
            '@xylabs/lodash',
          ],
        },
      ],
    },
  },
]
