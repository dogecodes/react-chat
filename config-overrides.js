const { compose } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');
const rewirePolyfills = require('react-app-rewire-polyfills');

module.exports = compose(
  rewirePolyfills,
  rewireEslint,
);
