module.exports = () =>
  require("../../config/connnection")
  .query(`SELECT * FROM cart;`);