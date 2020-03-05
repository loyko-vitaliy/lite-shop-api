const Base = require('./base.model');
const Password = require('objection-password')();
const uuid = require('uuid/v4');
class User extends Password(Base) {
    static get tableName() {
        return 'users';
    }

    async $beforeInsert(context) {
        const {username, email, mobilePhone} = this;
        await User.checkUnique({username, email, mobilePhone});
        this.token = uuid();
    }

    async updateToken() {
        const token = uuid();
        const user = await User.query().patchAndFetchById(this.id, {token});
        return user.token;
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
