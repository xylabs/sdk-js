const esModulesList = []

const generateJestConfig = () => {
  return {
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    preset: 'ts-jest/presets/default-esm',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
      [`(${esModulesList}).+\\.js$`]: 'babel-jest',
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.test.json',
        },
      ],
    },
  }
}

// eslint-disable-next-line no-undef
module.exports = generateJestConfig()
