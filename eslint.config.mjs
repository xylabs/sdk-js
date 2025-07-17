import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
} from '@xylabs/eslint-config-flat'

export default [
  { ignores: ['.yarn', 'dist', 'build', 'docs', 'eslint.config.mjs', '**/dist', '**/build', '**/docs', 'packages/threads', 'packages/threads-test'] },
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  typescriptConfig,
  sonarConfig,
  {
    rules: {
      'sonarjs/public-static-readonly': ['off'],
      'sonarjs/prefer-single-boolean-return': ['off'],
      'sonarjs/no-hardcoded-passwords': ['off'],
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
      '@typescript-eslint/strict-boolean-expressions': ['warn', {
        allowAny: true,
        allowNullableBoolean: true,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: true,
        allowNullableString: false,
        allowNumber: false,
        allowString: false,
      }],
    },
  },
  {
    ignores: ['**/dist', '**/build', '**/docs', "**/*.spec.*"],
    rules: {
      'no-console': ['warn'],
    }
  },
  {
    ...importConfig,
    rules: {
      ...importConfig.rules,
      'import-x/no-cycle': ['warn', { maxDepth: 5 }]
    }
  }
]
