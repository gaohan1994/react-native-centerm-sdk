const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  // ...tsjPreset,
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.test.json',
    }
  }
}