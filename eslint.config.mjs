import {
  typescriptConfig,
  unicornConfig,
  workspacesConfig,
  rulesConfig,
  sonarConfig,
  importConfig,
  ignores,
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
  },
  // {
  //   ignores: ['**/*.spec.*', '**/*.d.ts'],
  //   //tree-shaking rules
  //   rules: {
  //     'no-restricted-syntax': [
  //       'error',
        
  //       // Detect side-effect imports (import for side effects only)
  //       {
  //         selector: "ImportDeclaration[specifiers.length=0]",
  //         message: "Side-effect imports harm tree-shaking. Import specific exports instead."
  //       },
        
  //       // Detect namespace imports that block tree-shaking
  //       {
  //         selector: "ImportNamespaceSpecifier",
  //         message: "Namespace imports (* as X) prevent effective tree-shaking. Use named imports instead."
  //       },
        
  //       // Detect mutations of imported objects
  //       {
  //         selector: "AssignmentExpression[left.type='MemberExpression'][left.object.type='Identifier'][left.object.name=/^[A-Z]/]",
  //         message: "Mutating imported modules or constants breaks tree-shaking. Create local copies instead."
  //       },
        
  //       // Detect CommonJS requires (which can't be tree-shaken)
  //       {
  //         selector: "CallExpression[callee.name='require']",
  //         message: "CommonJS 'require' can't be tree-shaken. Use ES imports instead."
  //       },
        
  //       // Detect reassignments to imported bindings
  //       {
  //         selector: "AssignmentExpression[left.type='Identifier'][left.name=/^[A-Z]/]",
  //         message: "Reassigning imports breaks tree-shaking. Use local variables instead."
  //       },
        
  //       // Detect dynamic imports without chunk names - using a simpler selector
  //       {
  //         selector: "ImportExpression",
  //         message: "Consider adding chunk names to dynamic imports for better code-splitting: import(/* webpackChunkName: 'name' */ './module')"
  //       },
        
  //       // Detect property access via string literals
  //       {
  //         selector: "MemberExpression[computed=true][property.type='Literal'][property.value=/^[a-zA-Z_$]/]",
  //         message: "Accessing properties via string literals prevents property mangling and optimizations."
  //       },

  //       // Detect property access via quote-wrapped strings
  //       {
  //         selector: "MemberExpression[computed=true][property.type='Literal'][property.value=/^['\"]/]",
  //         message: "Accessing properties via string literals prevents property mangling and optimizations."
  //       }
  //     ],
  //   }
  // }
]
