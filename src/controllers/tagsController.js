const deleteFromCart = require('../database/quieres/cart/delete');
const clearCart = require('../database/quieres/cart/clearCart');
const cartList = require('../database/quieres/cart/list');
const addToCart = require('../database/quieres/cart/add')

exports.list = (req, res) => {
    cartList()
        .then(result => {
            res.json(result.rows);
        })
}

exports.add = (req, res) => {
    const tags = req.body.tags.split(",").filter(Boolean);
    addToCart(req.body.product_id, req.body.quantity)
        .then(result => {
            res.json(result.rows);
        })
}

exports.delete = (req, res) => {
    deleteFromCart(req.params.id)
        .then(result => {
            res.json(result.rows);
        })
}

exports.clear = (req, res) => {
    clearCart()
        .then(result => {
            res.json(result.rows);
        })
}