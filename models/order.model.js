const Base = require('./base.model');

class Order extends Base {
    static get tableName() {
        return 'orders';
    }
}

module.exports = Order;
