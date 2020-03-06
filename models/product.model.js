const {Model} = require('objection');
const Base = require('./base.model');
const Category = require('../models/category.model');

class Product extends Base {
    static get tableName() {
        return 'products';
    }

    static relationMappings() {
        return {
            categories: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: 'products.categoryId',
                    to: 'categories.id',
                },
            },
        };
    }
}

module.exports = Product;
