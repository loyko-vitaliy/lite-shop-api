const router = require('express').Router();
const attachResourceController = require('../middleware/attach-resource-controller')(
    router
);
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const orderController = require('../controllers/order.controller');
const productController = require('../controllers/product.controller');

attachResourceController('/users', userController);
attachResourceController('/categories', categoryController);
attachResourceController('/orders', orderController);
attachResourceController('/products', productController);

exports.routes = router;
