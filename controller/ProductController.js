var express = require('express');
var router = express.Router();
var Product = require("../model/Product");
var responseBuilder = require("../response/responseBuilder");

router.post('/', function (req, res) {
    var reqString = req.body.startDate +' ' + req.body.endDate + ' ' +req.body.minCount + ' ' +req.body.maxCount;
    console.debug('Request: ' + reqString);
    Product.find({
            startDate : req.body.startDate,
            endDate   : req.body.endDate,
            minCount  : req.body.minCount,
            maxCount  : req.body.maxCount
        }, 
        function (err, products) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }
            res.status(200).send(responseBuilder.success(0,"Success",products));
        });
});

module.exports = router;
