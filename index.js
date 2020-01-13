const express = require('express');

const {PORT = 3000, NODE_ENV} = process.env;

const app = express();
app.use(express.json());

app.use((req, res) => res.send('Init application'));

app.listen(
    PORT,
    console.log(`Server has been started in ${NODE_ENV} mode at port ${PORT}`)
);
