module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html$',
      tsConfig: 'tsconfig.json',
      astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')]
    },
  },
  roots: ['src'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupJest.ts'
  ],
  moduleNameMapper: {
    '@app/core': '<rootDir>/src/app/',
    '@environment': '<rootDir>/src/environments/environment.ts',
  },
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './testing/test-report.html',
      theme: 'lightTheme'
    }]
  ],
  coverageDirectory: '<rootDir>/testing/coverage',
  collectCoverageFrom: [
    '**/plugin/**/*.ts',
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|ngx-auto-unsubscribe|lodash)"
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
};
