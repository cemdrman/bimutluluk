const {check} = require('express-validator');

exports.validate = (req) => {
    return [
        check(req.body.startDate).notEmpty().toDate,
        check(req.body.endDate).notEmpty().toDate,
        check(req.body.minCount).notEmpty().isInt(),
        check(req.body.maxCount).notEmpty().isInt(),
    ]
};