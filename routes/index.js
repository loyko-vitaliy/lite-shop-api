const router = require('express').Router();
const attachResourceController = require('../middleware/attach-resource-controller')(
    router
);
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const OrderController = require('../controllers/order.controller');
const ProductController = require('../controllers/product.controller');

attachResourceController('/users', UserController);
attachResourceController('/categories', CategoryController);
attachResourceController('/orders', OrderController);
attachResourceController('/products', ProductController);

exports.routes = router;
