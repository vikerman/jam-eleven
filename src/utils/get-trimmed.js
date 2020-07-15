module.exports = function (string, length = 8) {
  if (string.length <= length) {
    return string;
  } else {
    return string.substring(0, length) + "...";
  }
};
