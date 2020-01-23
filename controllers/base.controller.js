class BaseController {
    constructor() {
        this.name = this.constructor.name;
    }

    index(req, res) {
        res.send(`${this.name} -> Index`);
    }

    create(req, res) {
        res.send(`${this.name} -> Create`);
    }

    read(req, res) {
        const {id} = req.params;
        res.send(`${this.name} -> Read id: ${id}`);
    }

    update(req, res) {
        const {id} = req.params;
        res.send(`${this.name} -> Update id: ${id}`);
    }

    delete(req, res) {
        const {id} = req.params;
        res.send(`${this.name} -> Delete id: ${id}`);
    }
}

module.exports = BaseController;
