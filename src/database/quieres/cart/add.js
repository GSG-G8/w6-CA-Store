//insert into cart if not exists
module.exports = (product_id, quantity) =>
  require("../../config/connnection")
  .query({
    text: `INSERT INTO cart (product_id, quantity)
    SELECT $1, $2 WHERE NOT EXISTS
    (SELECT * FROM cart WHERE product_id = $1);`,
    values: [product_id, quantity]
  });