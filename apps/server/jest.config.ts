/* eslint-disable */
export default {
  displayName: 'server',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  modulePathIgnorePatterns: ['<rootDir>/test'],
  coverageDirectory: '../../coverage/apps/server',
  globalSetup: '<rootDir>/test/setup.ts',
  globalTeardown: '<rootDir>/test/teardown.ts',
  //setupFiles: [],
  setupFilesAfterEnv : [
    '<rootDir>/test/setupFilesAfterEnv.spec.ts'
  ]
};
