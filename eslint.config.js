// eslint.config.js

import { config } from '@xylabs/eslint-config-flat'

export default [
  ...config,
  {
    ignores: ['.yarn/**', 'jest.config.cjs', '**/dist/**', 'dist', 'build/**', 'node_modules/**'],
    rules: {
      'import/no-internal-modules': ['off'],
      'import/no-deprecated': ['off'],
      'unicorn/no-static-only-class': ['off'],
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            '@types/node',
            '@xyo-network/archivist',
            '@xyo-network/bridge',
            '@xyo-network/core',
            '@xyo-network/diviner',
            '@xyo-network/module',
            '@xyo-network/modules',
            '@xyo-network/node',
            '@xyo-network/sdk',
            '@xyo-network/plugins',
            '@xyo-network/protocol',
            '@xyo-network/sentinel',
            '@xyo-network/witness',
            '@xyo-network/core-payload-plugins',
            'react-player',
            'filepond',
            'aos',
            'react-icons',
            '.',
            '..',
            '../..',
            '../../..',
            '../../../..',
            '../../../../..',
            '../../../../../..',
            '../../../../../../..',
          ],
        },
      ],
    },
  },
]
