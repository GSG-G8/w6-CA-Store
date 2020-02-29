module.exports = (product_id) =>
  require("../../config/connnection")
  .query({
      text: `DELETE FROM product_tag WHERE product_id=$1;`,
      values: [product_id]
  });