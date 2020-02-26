module.exports = () =>
  require("../config/connnection")
  .query(`DELETE FROM cart;`);