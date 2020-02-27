module.exports = (product_id, quantity) =>
  require("../../config/connnection")
  .query({
    text: `INSERT INTO cart (product_id, quantity) VALUES ($1, $2)`,
    values: [product_id, quantity]
  });