const successResponse = require('../helpers/success-response');
const {buildFilter} = require('objection-filter');
class BaseController {
    constructor() {
        this.model = require(`../models/${this.modelName}.model.js`);
    }

    get modelName() {
        const [, name] = this.constructor.name.match(/^(.+)Controller$/);
        return name.toLocaleLowerCase();
    }

    async index(req, res) {
        if (!req.query.filter) {
            return res.status(200).json(successResponse(await this.model.query()));
        }
        res.status(200).json(successResponse(await buildFilter(this.model).build(JSON.parse(req.query.filter))));
    }

    async create(req, res) {
        res.status(201).json(successResponse(await this.model.query().insertAndFetch(req.body)));
    }

    async read(req, res) {
        res.status(200).json(
            successResponse(
                await this.model
                    .query()
                    .findById(req.params.id)
                    .throwIfNotFound()
            )
        );
    }

    async update(req, res) {
        res.status(200).json(
            successResponse(
                await this.model
                    .query()
                    .patchAndFetchById(req.params.id, req.body)
                    .throwIfNotFound()
            )
        );
    }

    async delete(req, res) {
        res.status(200).json(
            successResponse(
                await this.model
                    .query()
                    .deleteById(req.params.id)
                    .returning('*')
                    .throwIfNotFound()
            )
        );
    }
}

module.exports = BaseController;
