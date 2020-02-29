module.exports = () =>
  require("../../config/connnection")
  .query(`SELECT * FROM tag WHERE id in (SELECT tag_id FROM product_tag);`);