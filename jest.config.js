module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx'],
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
  }
}
