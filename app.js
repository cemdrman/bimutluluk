var express = require("express");
var app = express();
var dbConnection = require("./db/DbConnection");
var ProductController = require('./controller/ProductController');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('api/products', ProductController);

module.exports = app;