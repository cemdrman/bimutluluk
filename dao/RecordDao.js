var Record = require("../model/Record");
var mongoose = require("mongoose");
var responseBuilder = require("../response/ResponseBuilder");
mongoose.Promise = global.Promise;

exports.fecthAllRecords = async (req, res) => {
    const {
        startDate,
        endDate,
        minCount,
        maxCount
    } = req.body;
    await Record.aggregate([{
            $project: {
                _id: false,
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
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    },
                    totalCount: {
                        $gte: minCount,
                        $lte: maxCount,
                    }
                }]
            }
        }]).sort({
            totalCount: 'asc'
        })
        .exec().then(records => {
            res.status(200).json(responseBuilder.success(records));
        });
};