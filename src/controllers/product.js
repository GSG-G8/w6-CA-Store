const addProduct = require("../database/quieres/product/add");
const listProducts = require("../database/quieres/product/list");
const deleteProduct = require("../database/quieres/product/delete");
const updateProduct = require("../database/quieres/product/update");

const addTags = require("../database/quieres/tags/add")
const addProductTags = require("../database/quieres/productTags/add")
const deleteProductTags = require("../database/quieres/productTags/delete")
const deleteFromCart = require('../database/quieres/cart/delete');
exports.add = (req, res) => {
    const tags = req.body.tags.split(",").filter(Boolean);
    if (tags.length==0) {
        addProduct(req.body)
        .then(result => res.json(result.rows));
    }
    else {
        addTags(tags)
        .then(result => addProduct(req.body))
        .then(result => addProductTags(result.rows[0].id, tags))
        .then(result => res.json(result.rows));
    }
}

exports.list = (req, res) => {
    listProducts()
    .then(result => res.json(result.rows));
}

exports.delete = (req, res) => {
    deleteProductTags(req.params.id);
    deleteFromCart(req.params.id);
    deleteProduct(req.params.id)
    .then(result => res.json(result.rows));
}

exports.update = (req, res) => {
    updateProduct(req.params.id, req.body)
    .then(result => res.json(result.rows));
}