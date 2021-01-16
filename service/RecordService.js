const recordDao = require("../dao/RecordDao");

exports.getAllRecords = (startDate, endDate, minCount, maxCount) => {
    return recordDao.fecthAllRecords(startDate, endDate, minCount, maxCount);
};