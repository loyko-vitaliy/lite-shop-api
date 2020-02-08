const Base = require('./base.model');
const Password = require('objection-password')();
class User extends Password(Base) {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['username', 'password', 'firstName', 'lastName', 'email', 'address', 'mobilePhone'],
            properties: {
                username: {type: 'string', minLength: 6, maxLength: 50},
                password: {type: 'string', minLength: 6, maxLength: 50},
                firstName: {type: 'string', minLength: 2, maxLength: 50},
                lastName: {type: 'string', minLength: 4, maxLength: 50},
                email: {type: 'string', format: 'email'},
                address: {type: 'string', minLength: 10, maxLength: 100},
                mobilePhone: {type: 'string', minLength: 12, maxLength: 12},
            },
        };
    }
}

module.exports = User;
