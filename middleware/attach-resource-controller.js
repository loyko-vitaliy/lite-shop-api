const addToContext = require('./add-to-context');
const getFromContext = require('./get-from-context');

const attachResourceController = router => (path, Controller) => {
    const controller = 'controller';

    router
        .route(`${path}`)
        .all(addToContext(controller, Controller))
        .get(getFromContext(controller, 'index'))
        .post(getFromContext(controller, 'create'));

    router
        .route(`${path}/:id`)
        .all(addToContext(controller, Controller))
        .get(getFromContext(controller, 'read'))
        .put(getFromContext(controller, 'update'))
        .delete(getFromContext(controller, 'delete'));

    return router;
};

module.exports = attachResourceController;
