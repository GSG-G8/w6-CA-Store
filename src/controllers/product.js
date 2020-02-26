const addProduct = require("../database/quieres/product/add");
const listProducts = require("../database/quieres/product/list");

exports.add = (req, res) => {
    addProduct(req.body)
        .then(result => {
            res.json(result.rows);
        })
}

exports.list = (req, res) => {
    listProducts()
        .then(result => {
            res.json(result.rows);
        })
}