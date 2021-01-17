var mongoose = require('mongoose');
var dbConfig = require('../config/dbConfig');

mongoose.connect(dbConfig.CONNECTION_URL, dbConfig.OPTIONS).then(
    () => {
        console.log("Connected to mongoDB")
    },
    err => {
        console.log("Can Not Connected to mongoDB")
        console.log(err)
    }
);;