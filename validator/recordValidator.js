const {
    check,
    validationResult
} = require('express-validator');

exports.validate = (req) => {
    check(req.body.startDate).notEmpty().toDate;
    check(req.body.endDate).notEmpty().toDate;
    check(req.body.minCount).notEmpty().isInt();
    check(req.body.maxCount).notEmpty().isInt();
    return validationResult(req)
};