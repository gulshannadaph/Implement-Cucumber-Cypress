const cucumber = require('cypress-cucumber-preprocessor').default
const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  const options = {
    ...webpack.defaultOptions,
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      }
    },
  }

  on('file:preprocessor', webpack(options))
  on('file:preprocessor', cucumber())
}