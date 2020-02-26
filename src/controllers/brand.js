const listBrands = require("../database/quieres/listBrands");

exports.list = (req, res) => {
    listBrands()
        .then(result => {
            res.json(result.rows);
        })
}