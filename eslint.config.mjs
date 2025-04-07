import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', 'dist', 'docs', 'eslint.config.mjs', '**/dist', '**/docs', 'packages/threads', 'packages/threads-test'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  typescriptConfig,
  importConfig,
  sonarConfig,
  {
    rules: {
      'sonarjs/public-static-readonly': ['off'],
      'sonarjs/prefer-single-boolean-return': ['off'],
      'import-x/no-unresolved': ['off'],
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
