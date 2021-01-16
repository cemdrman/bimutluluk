var mongoose = require("mongoose");

var recordSchema = new mongoose.Schema({
    createdAt: { type:Date, required:true },
    totalCount : Number
});

mongoose.model("Record", recordSchema);
module.exports = mongoose.model("Record");