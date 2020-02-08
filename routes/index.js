const router = require('express').Router();
const attachResourceController = require('../middleware/attach-resource-controller')(router);
const UserController = require('../controllers/user.controller');
const CategoryController = require('../controllers/category.controller');
const OrderController = require('../controllers/order.controller');
const ProductController = require('../controllers/product.controller');
const AuthController = require('../controllers/auth.controller');
const {Roles, disallowRoles, allowRoles} = require('../middleware/check-roles');

attachResourceController('/auth', AuthController, {
    bindings: [
        {route: '/login', method: 'POST', action: 'login'},
        {route: '/logout', method: 'POST', action: 'logout', middleware: [disallowRoles(Roles.GUEST)]},
        {route: '/register', method: 'POST', action: 'register'},
    ],
});
attachResourceController('/users', UserController, {middleware: [allowRoles(Roles.ADMIN)]});
attachResourceController('/categories', CategoryController);
attachResourceController('/orders', OrderController, {middleware: [disallowRoles(Roles.GUEST)]});
attachResourceController('/products', ProductController);

exports.routes = router;
