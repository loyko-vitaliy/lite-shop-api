const Base = require('./base.model');

class Product extends Base {
    static get tableName() {
        return 'products';
    }
}

module.exports = Product;
