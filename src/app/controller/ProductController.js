var express = require('express');
var router = express.Router();
var recordService = require("../service/RecordService");
var responseBuilder = require("../response/ResponseBuilder");

const getRecords = async (req, res, next) => {
    try {
        const records = await recordService.getAllRecords(req);
        return res.status(200).json(responseBuilder.success(records));
    } catch (error) {
        return next(error);
    }
};

router.post('/', getRecords);

module.exports = router;