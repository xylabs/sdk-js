module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  preset: 'ts-jest/presets/default-esm',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
