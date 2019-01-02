module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/.nuxt/',
    '<rootDir>/assets/',
    '<rootDir>/dist/',
    '<rootDir>/middleware/',
    '<rootDir>/node_modules/',
    '<rootDir>/plugins/',
    '<rootDir>/static/'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup-test.js'
}
