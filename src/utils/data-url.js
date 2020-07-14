const fs = require("fs");

module.exports = function (path, type) {
  type = type || "image/png";
  const content = fs.readFileSync(path);
  return `data:${type};base64,${new Buffer(content).toString("base64")}`;
};
