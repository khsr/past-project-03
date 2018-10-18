var colors = require('colors/safe');

module.exports = function(error) {
  console.error(colors.red('An error occurred in statictemp:'), String(error));
};
