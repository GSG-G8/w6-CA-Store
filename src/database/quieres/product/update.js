module.exports = (product_id, data) =>
    require("../../config/connnection")
        .query({
            text: `UPDATE product SET
                name=$2, price=$3, image=$4, description=$5, brand_id=$6 WHERE id=$1`,
            values: [product_id, data.name, data.price, data.image, data.description, data.brand_id],
        }
    );