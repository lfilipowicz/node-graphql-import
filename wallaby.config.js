module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts*',
      '!src/**/*.test.ts*',
      './jest.config.js',
      '__mocks__/**/*.js',
      './tsconfig.json',
    ],
    tests: ['src/**/*.test.ts'],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    setup: function(wallaby) {
      const jestConfig = require('./jest.config.js');
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
