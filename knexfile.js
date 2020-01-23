const {knexSnakeCaseMappers} = require('objection');

const {
    POSTGRES_HOST = 'localhost',
    POSTGRES_DB = 'shop',
    POSTGRES_USER = 'postgres',
    POSTGRES_PASSWORD = 'postgres',
} = process.env;

module.exports = {
    client: 'pg',
    connection: {
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    },
    poll: {
        min: 2,
        max: 10,
    },
    ...knexSnakeCaseMappers(),
};
