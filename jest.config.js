module.exports = {
  // preset: "@nuxt/test-utils",
  verbose: true,
  testRegex: '(/test/.*.(test.js|spec.js))$',
  testEnvironment: 'jsdom',
  testURL: 'http://localhost/',
  collectCoverageFrom: [
    // include folder
    '**/components/**/*.{js,ts,vue}',
    '**/layouts/**/*.{js,ts,vue}',
    '**/pages/**/*.{js,ts,vue}',
    '**/store/**/*.{js,ts,vue}',
    '**/utils/**/*.{js,ts,vue}',
    // exclude folder and files
    '!**/node_modules/**',
    '!**/.nuxt/**',
    '!**/assets/**',
    '!**/build-scripts/**',
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
    'vue-ionicons/dist/(.*)$': '<rootDir>/__mocks__/vue-ionicons.vue',
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
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
