var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    createdAt: { type:Date, required:true },
    totalCount : Number
});

mongoose.model("Product",productSchema);
module.exports = mongoose.model("Product");