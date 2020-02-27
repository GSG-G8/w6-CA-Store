module.exports = (data) =>
    require("../../config/connnection")
        .query({
            text: `INSERT INTO product (name, price, image, description, brand_id) VALUES ($1, $2, $3, $4, $5)`,
            values: [data.name, data.price, data.image, data.description, data.brand_id],
        }
    );