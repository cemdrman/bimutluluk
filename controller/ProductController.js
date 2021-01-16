var express = require('express');
var router = express.Router();
var recordService = require("../service/RecordService");
var validator = require("../validator/recordValidator");
var responseBuilder = require("../response/ResponseBuilder");

router.post('/', function (req, res) {
    var errors = validator.validate(req);
    if (!errors.isEmpty) {
        res.status(400).json(responseBuilder.error());
    }
    recordService.getAllRecords(req, res)
});

module.exports = router;