module.exports = () =>
  require("../../config/connnection")
  .query(`SELECT * FROM product ORDER BY id;`);