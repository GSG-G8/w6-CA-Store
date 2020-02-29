// insert multiple tags if not exists
module.exports = (tags) =>
  require("../../config/connnection")
    .query({
      text:`INSERT INTO tag (name) select * FROM ( VALUES
          ${tags.map((tag,index) => `($${ index+1 })`).join(",")}
          ) AS new_tags WHERE NOT EXISTS
          (SELECT 1 FROM tag WHERE tag.name = new_tags.column1)`,
      values: tags
    });