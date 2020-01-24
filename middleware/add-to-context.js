const {createNamespace} = require('cls-hooked');

const addToContext = (name, Controller) => (req, res, next) => {
    const context = createNamespace('context');
    context.run(() => {
        context.set(name, new Controller());
        next();
    });
};

module.exports = addToContext;
