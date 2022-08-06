const generateJestConfig = () => {
  return {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json',
      },
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    preset: 'ts-jest/presets/default-esm',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  }
}

// eslint-disable-next-line no-undef
module.exports = generateJestConfig()
