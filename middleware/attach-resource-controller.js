const createController = Controller => (req, res, next) => {
    req.controller = new Controller();
    next();
};

const registerAction = action => (req, res) => req.controller[action](req, res);

const attachResourceController = router => (path, Controller) => {
    router
        .route(`${path}`)
        .all(createController(Controller))
        .get(registerAction('index'))
        .post(registerAction('create'));

    router
        .route(`${path}/:id`)
        .all(createController(Controller))
        .get(registerAction('read'))
        .put(registerAction('update'))
        .delete(registerAction('delete'));

    return router;
};

module.exports = attachResourceController;
