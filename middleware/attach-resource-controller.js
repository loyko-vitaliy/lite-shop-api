const createController = Controller => (req, res, next) => {
    req.controller = new Controller();
    next();
};

const registerAction = action => (req, res) => req.controller[action](req, res);

const attachResourceController = router => (path, Controller) => {
    router.use(createController(Controller));

    router
        .route(`${path}`)
        .get(registerAction('index'))
        .post(registerAction('create'))
        .patch(registerAction('setName'));

    router
        .route(`${path}/:id`)
        .get(registerAction('read'))
        .put(registerAction('update'))
        .delete(registerAction('delete'));

    return router;
};

module.exports = attachResourceController;
