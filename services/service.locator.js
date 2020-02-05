class ServiceLocator {
    static instance = null;

    constructor() {
        this.services = {};
        return this.getInstance();
    }

    getInstance() {
        if (!ServiceLocator.instance) {
            ServiceLocator.instance = this;
        }
        return ServiceLocator.instance;
    }

    register(name, service) {
        this.services[name] = service;
    }

    get(name) {
        return this.services[name];
    }
}

module.exports = new ServiceLocator();
