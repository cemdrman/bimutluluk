var express = require("express");
var app = express();
var ProductController = require('./controller/ProductController');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.port || 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/products', ProductController);

app.listen(port, function () {
    console.log('Express Server Listening ' + port);
});