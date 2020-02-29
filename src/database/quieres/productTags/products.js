module.exports = (tag_id) =>
  require("../../config/connnection")
  .query({
      text: `SELECT * from product where id in (SELECT product_id FROM product_tag where tag_id=$1);`,
      values: [tag_id]
  });