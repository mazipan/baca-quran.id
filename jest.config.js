module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    // include folder
    '**/components/**/*.{js,vue}',
    '**/layouts/**/*.{js,vue}',
    '**/pages/**/*.{js,vue}',
    '**/services/**/*.{js,vue}',
    '**/store/**/*.{js,vue}',
    '**/utils/**/*.{js,vue}',
    // exclude folder and files
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
    '!**/*rc.{js,vue}',
    '!**/*.config.{js,vue}'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+.js$': '<rootDir>/node_modules/babel-jest',
    '^.+.vue$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-test.js']
}
