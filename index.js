const express = require("express");
const app = express();
const ProductController = require('./controller/recordController');
const express = require('express');
const bodyParser = require('body-parser');
require("./db/dbConnection");
require('dotenv').config();
const exceptionHandler = require("./exception/exceptionHandler");
const port = process.env.PORT;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Handle errors
app.use(exceptionHandler);

app.use('/api/records', ProductController);

app.listen(port, function () {
    console.log('Express Server Listening ' + port);
});