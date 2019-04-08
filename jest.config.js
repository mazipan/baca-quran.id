module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // include folder
    '**/components/**/*.{js,ts,vue}',
    '**/layouts/**/*.{js,ts,vue}',
    '**/pages/**/*.{js,ts,vue}',
    '**/services/**/*.{js,ts,vue}',
    '**/store/**/*.{js,ts,vue}',
    // exclude folder and files
    '!**/utils/**/*.{js,ts,vue}',
    '!**/node_modules/**',
    '!**/.nuxt/**',
    '!**/assets/**',
    '!**/constant/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/middleware/**',
    '!**/plugins/**',
    '!**/server/**',
    '!**/static/**',
    '!**/test/**',
    '!**/*rc.{js,ts,vue}',
    '!**/*.config.{js,ts,vue}'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+.tsx?$': '<rootDir>/node_modules/ts-jest',
    '^.+.js$': '<rootDir>/node_modules/babel-jest',
    '^.+.vue$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-test.js'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
