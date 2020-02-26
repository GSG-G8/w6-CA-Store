const router = require('express').Router();
const app = require('../app');

const brandController = require('../controllers/brand');
const productController = require('../controllers/product');

router.get('/products',(req, res)=>{
    res.send('this is a products')
})

router.get('/brands', brandController.list);

router.get('/product/list', productController.list);
router.post('/product/add', productController.add);

module.exports = router;