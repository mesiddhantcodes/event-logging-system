const crypto = require("crypto");

const hashGenerator = (data) => {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
};

module.exports = hashGenerator;
