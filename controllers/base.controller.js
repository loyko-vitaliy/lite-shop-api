class BaseController {
    constructor() {
        this.name = this.constructor.name;
        this.username = 'Vasya';
    }

    index(req, res) {
        const name = 'Vasya';
        res.send(`${this.name} -> Index ----- ${this.username}`);
    }

    create(req, res) {
        res.send(`${this.name} -> Create`);
    }

    setName(req, res) {
        this.username = 'Petya';
        res.send(this.username);
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
