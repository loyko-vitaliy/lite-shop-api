const BaseController = require('./base.controller');

class CategoryController extends BaseController {
    async index(req, res, next) {
        req.queryCallback = this._prepareCategories;
        await super.index(req, res, next);
    }

    _prepareCategories(rawData) {
        const copy = [...rawData.results];
        return copy.filter(category => {
            category.children = copy.filter(cat => cat.parentId === category.id);
            return category.parentId === null;
        });
    }
}

module.exports = CategoryController;
