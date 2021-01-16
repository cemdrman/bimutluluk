var express = require('express');
var router = express.Router();
var recordService = require("../service/RecordService")
var responseBuilder = require("../response/ResponseBuilder");

router.post('/', function (req, res) {
    var reqString = req.body.startDate + ' ' + req.body.endDate + ' ' + req.body.minCount + ' ' + req.body.maxCount;
    console.debug('Request: ' + reqString);
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var minCount = req.body.minCount;
    var maxCount = req.body.maxCount
    var records = recordService.getAllRecords(startDate, endDate, minCount, maxCount)
    res.status(200).json(responseBuilder.success(records));
});

module.exports = router;