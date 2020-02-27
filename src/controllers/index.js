const router = require('express').Router();
const app = require('../app');

const brandController = require('../controllers/brand');
const cartController = require('./cartController');
const productController = require('../controllers/product');

router.get('/products',(req, res)=>{
    res.send('this is a products')
})

router.get('/brands', brandController.list);
router.post('/cart/add', cartController.add);
router.delete('/cart/clear', cartController.clear);
router.delete('/cart/delete/:id', cartController.delete);
router.get('/cart/list', cartController.list);


router.get('/product/list', productController.list);
router.post('/product/add', productController.add);

module.exports = router;