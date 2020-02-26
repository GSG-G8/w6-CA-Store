const router = require('express').Router();
const app = require('../app');

const brandController = require('../controllers/brand');

router.get('/products',(req, res)=>{
    res.send('this is a products')
})

router.get('/brands', brandController.list);

module.exports = router;