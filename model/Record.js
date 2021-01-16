var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var recordSchema = new mongoose.Schema({
    key : String,
    createdAt: Date,
    totalCount : Number,
    counts: Array,
    value: String
});

mongoose.model("Record", recordSchema);
module.exports = mongoose.model("Record");