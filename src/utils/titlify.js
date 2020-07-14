/**
 * Convert a category string into navigation title
 */
module.exports = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
