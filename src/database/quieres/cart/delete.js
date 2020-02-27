module.exports = (id) =>
  require("../../config/connnection")
  .query({
      text: `DELETE FROM cart WHERE id = $1;`,
      values: [id]
  });