const {Model} = require('objection');
const serviceLocator = require('../services/service.locator');

class Base extends Model {}

Base.knex(serviceLocator.get('connection'));

module.exports = Base;
