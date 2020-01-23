const Base = require('./base.model');

class User extends Base {
    static get tableName() {
        return 'users';
    }
}

module.exports = User;
