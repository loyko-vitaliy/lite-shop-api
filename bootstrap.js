const serviceLocator = require('./services/service.locator');

serviceLocator.register('connection', require('knex')(require('./knexfile')));

module.exports = () => {};
