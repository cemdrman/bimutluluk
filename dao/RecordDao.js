var Record = require("../model/Record");

exports.fecthAllRecords = (startDate, endDate, minCount, maxCount) => {
    return Record.aggregate([{
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
                    $gte: startDate,
                    $lte: endDate
                },
                totalCount: {
                    $gte: minCount,
                    $lte: maxCount,
                }
            }]
        }
    }]).sort({
        createdAt: 'asc'
    });
};