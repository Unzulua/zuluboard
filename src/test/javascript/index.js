// test/index.js
// require all test files using special webpack feature
// https://webpack.github.io/docs/context.html#require-context
var testsContext = require.context('.', true, /\.js$/)
testsContext.keys().forEach(testsContext)
