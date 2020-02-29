module.exports = () =>
  require("../../config/connnection")
  .query(`SELECT * FROM (cart INNER JOIN product ON cart.product_id=product.id);`);