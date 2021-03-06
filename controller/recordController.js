const express = require('express');
const router = express.Router();
const recordService = require('../service/recordService');
const responseBuilder = require('../response/responseBuilder');

const getRecords = async (req, res, next) => {
    try {
        console.log('info', {
            'request:': req.body,
            'route': 'api/records',
            'class': 'recordController'
        });
        const records = await recordService.getAllRecords(req);
        return res.status(200).json(responseBuilder.success(records));
    } catch (error) {
        return next(error);
    }
};

router.post('/', getRecords);

module.exports = router;