const addTags = require("../database/quieres/tags/add")
const listTags = require("../database/quieres/tags/list")

exports.add = (req, res) => {
    const tags = req.body.tags.split(",").filter(Boolean);
    addTags(tags)
    .then(result => {
        res.json(result.rows);
    })
}

exports.list = (req, res) => {
    listTags()
    .then(result => {
        res.json(result.rows);
    })
}