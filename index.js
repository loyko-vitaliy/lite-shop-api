const express = require('express');
const {routes} = require('./routes');
const {bootstrap} = require('./bootstrap');
const notFoundHandler = require('./middleware/not-found-handler');
const errorHandler = require('./middleware/error-handler.js');

const {PORT = 3000, NODE_ENV} = process.env;

const app = express();
bootstrap();

// prettier-ignore
app
    .use(express.json())
    .use('/api', routes)
    .use(notFoundHandler)
    .use(errorHandler)
    .listen(
        PORT,
        console.log(
            `Server has been started in ${NODE_ENV} mode at port ${PORT}`
        )
    );
