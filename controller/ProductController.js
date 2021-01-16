var express = require('express');
var router = express.Router();
var Record = require("../model/Record");
var responseBuilder = require("../response/responseBuilder");

router.post('/', function (req, res) {
    var reqString = req.body.startDate +' ' + req.body.endDate + ' ' +req.body.minCount + ' ' +req.body.maxCount;
    console.debug('Request: ' + reqString);
    //validate request
    Record.find({
        },  function (err, records) {
                if (err) {
                    return res.status(500).send("There was a problem adding the information to the database.");
                }
                res.status(200).send(responseBuilder.success(0,"Success",records));
        });
});

module.exports = router;
