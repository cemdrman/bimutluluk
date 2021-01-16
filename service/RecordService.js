const recordDao = require("../dao/RecordDao");

exports.getAllRecords = (req, res) => {
    recordDao.fecthAllRecords(req, res);
};