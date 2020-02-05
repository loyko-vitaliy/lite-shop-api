const serviceLocator = require('./services/service.locator');

exports.bootstrap = () => {
    serviceLocator.register('connection', require('knex')(require('./knexfile')));
};
