module.exports = (product_id) =>
    require("../../config/connnection")
        .query({
            text: `DELETE FROM product WHERE id=$1`,
            values: [product_id],
        }
    );