import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', 'packages/*/dist/**', 'dist', 'build', '**/build/**', 'node_modules/**', 'public', 'storybook-static'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  importConfig,
  {
    ...typescriptConfig,
    rules: {
      ...typescriptConfig.rules,
      '@typescript-eslint/consistent-type-imports': ['warn'],
    },
  },
  {
    rules: {
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
