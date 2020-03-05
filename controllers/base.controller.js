const successResponse = require('../helpers/success-response');
class BaseController {
    constructor() {
        this.model = require(`../models/${this.modelName}.model.js`);
    }

    get modelName() {
        const [, name] = this.constructor.name.match(/^(.+)Controller$/);
        return name.toLocaleLowerCase();
    }

    async index(req, res) {
        res.status(200).json(successResponse(await this.model.query()));
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
