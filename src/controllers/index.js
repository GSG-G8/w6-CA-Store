const router = require('express').Router();
const app = require('../app');


router.get('/products',(req, res)=>{
    res.send('this is a products')
})

module.exports = router;