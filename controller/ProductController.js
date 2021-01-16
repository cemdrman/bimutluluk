var express = require('express');
var router = express.Router();
var Record = require("../model/Record");
var responseBuilder = require("../response/responseBuilder");

router.post('/', function (req, res) {
    var reqString = req.body.startDate + ' ' + req.body.endDate + ' ' + req.body.minCount + ' ' + req.body.maxCount;
    console.debug('Request: ' + reqString);
    //validate request

    // const query = Record.find({
    //     createdAt: {
    //         $gte: req.body.startDate,
    //         $lt: req.body.endDate
    //     }
    // }).sort({
    //     createdAt: 'asc'
    // });

    const query = Record.aggregate([{
        $project: {
            totalCount: {
                $sum: "$counts"
            },
            key: "$key",
            createdAt: "$createdAt"
        }
    }, {
        $match: {

            $and: [{
                    createdAt: {
                        $gte: req.body.startDate,
                        $lte: req.body.endDate
                    },
                    totalCount: {
                        $gt: req.body.minCount,
                        $lt: req.body.maxCount,
                    }
                }

            ]

        }
    }]).sort({
        createdAt: 'asc'
    });
    // selecting the 'key', 'createdAt' and 'totalCount' fields
    //query.select('key createdAt counts');
    // execute the query at a later time
    query.exec(function (err, records) {

        if (err) {
            return res.status(500).send("There was a problem adding the information to the database.");
        }
        res.status(200).send(responseBuilder.success(0, "Success", records));
    });
});

module.exports = router;