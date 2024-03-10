const fs = require("fs");
const promisify = require("util").promisify;

const path = require("path");
const readFile = promisify(fs.readFile);

const dbPath = path.join(__dirname, "test.json");

module.exports = {
  async getDB() {
    try {
      const data = await readFile(dbPath, "utf8");
      return JSON.parse(data);
    } catch (err) {
      throw new Error("fail");
    }
  },
};
