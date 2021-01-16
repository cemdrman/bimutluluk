var express = require('express');
var router = express.Router();
var recordService = require("../service/RecordService")
var responseBuilder = require("../response/ResponseBuilder");
var validator = require("../validator/recordValidator");

router.post('/', function (req, res) {
    var errors = validator.validate(req);
    if(!errors.isEmpty){
        res.status(400).json("hata");
    }
    const { startDate, endDate, minCount, maxCount } = req.body;
    var records = recordService.getAllRecords(startDate, endDate, minCount, maxCount)
    res.status(200).json(responseBuilder.success(records));
});

module.exports = router;