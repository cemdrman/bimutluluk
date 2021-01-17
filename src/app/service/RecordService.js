const recordDao = require("../dao/recordDao");

exports.getAllRecords = async (req, res) => {
    const {
        startDate,
        endDate,
        minCount,
        maxCount
    } = req.body;
    return await recordDao.fecthAllRecords(startDate, endDate, minCount, maxCount);
};