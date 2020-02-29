const router = require('express').Router();
const app = require('../app');

const brandController = require('./brand');
const cartController = require('./cartController');
const productController = require('./product');
const tagController = require('./tags');
const productTagsController = require('./productTags');

router.get('/brands', brandController.list);

router.post('/cart/add', cartController.add);
router.delete('/cart/clear', cartController.clear);
router.delete('/cart/delete/:id', cartController.delete);
router.get('/cart/list', cartController.list);


router.get('/product/list', productController.list);
router.post('/product/add', productController.add);
router.delete('/product/delete/:id', productController.delete);
router.put('/product/update/:id', productController.update);

router.get('/tags/list', tagController.list);
router.post('/tags/add', tagController.add);

router.get('/product_tags/list', productTagsController.list);
router.get('/product_tags/products/:tag_id', productTagsController.products);
router.post('/product_tags/add', productTagsController.add);
router.delete('/product_tags/delete/:id', productTagsController.delete);
module.exports = router;