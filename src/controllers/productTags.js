const addProductTags = require("../database/quieres/productTags/add");
const listProductTags = require("../database/quieres/productTags/list");
const deleteProductTags = require("../database/quieres/productTags/delete");
const tagProducts = require("../database/quieres/productTags/products");
exports.add = (req, res) => {
    const tags = req.body.tags.split(",").filter(Boolean);
    addProductTags(req.body.product_id, tags)
    .then(result => {
        res.json(result.rows);
    })
}

exports.list = (req, res) => {
    listProductTags()
    .then(result => {
        res.json(result.rows);
    })
}

exports.delete = (req, res) => {
    deleteProductTags(req.params.id)
    .then(result => {
        res.json(result.rows);
    })
}

exports.products = (req, res) => {
    tagProducts(req.params.tag_id)
    .then(result => {
        res.json(result.rows);
    })
}