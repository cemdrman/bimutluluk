var express = require("express");
var app = express();
var ProductController = require('./controller/recordController');
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

var port = process.env.PORT;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/records', ProductController);

app.listen(port, function () {
    console.log('Express Server Listening ' + port);
});