class BaseController {
    constructor() {
        this.model = require(`../models/${this.modelName}.model.js`);
    }

    get modelName() {
        const [, name] = this.constructor.name.match(/^(.+)Controller$/);
        return name.toLocaleLowerCase();
    }

    static successResponce(data) {
        return {
            success: true,
            data,
        };
    }

    async index(req, res) {
        res.status(200).json(BaseController.successResponce(await this.model.query()));
    }

    async create(req, res) {
        res.status(201).json(BaseController.successResponce(await this.model.query().insertAndFetch(req.body)));
    }

    async read(req, res) {
        res.status(200).json(
            BaseController.successResponce(
                await this.model
                    .query()
                    .findById(req.params.id)
                    .throwIfNotFound()
            )
        );
    }

    async update(req, res) {
        res.status(200).json(
            BaseController.successResponce(
                await this.model
                    .query()
                    .patchAndFetchById(req.params.id, req.body)
                    .throwIfNotFound()
            )
        );
    }

    async delete(req, res) {
        res.status(200).json(
            BaseController.successResponce(
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
