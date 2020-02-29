module.exports = (product_id, tags) =>
    require("../../config/connnection")
        .query({
            text: `INSERT INTO product_tag (product_id, tag_id)
                SELECT '${product_id}',id FROM tag WHERE name in
                (${ tags.map((tag,index) => `$${ index+1 }`).join(",") })`,
            values: tags
        });