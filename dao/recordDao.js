var Record = require("../model/record");

exports.fecthAllRecords = async (startDate, endDate, minCount, maxCount) => {
    return await Record.aggregate([{
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
    }).exec();
};