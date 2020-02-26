const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connnection");

const sql = readFileSync(join(__dirname, "build.sql")).toString();

const build = ()=> {
  return connection
  .query(sql)
  .then(() => console.log("build created successfully!"))
  .catch(e => console.error('failed to build', e.stack));
}

build();

module.exports = build;
