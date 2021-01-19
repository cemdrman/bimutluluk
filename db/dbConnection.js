const mongoose = require('mongoose');
const dbConfig = require('../config/dbConfig');

mongoose.connect(dbConfig.CONNECTION_URL, {
    useNewUrlParser: true
}).then(
    () => {
        console.log("Connected to mongoDB")
    },
    err => {
        console.log("Can Not Connected to mongoDB")
        console.log(err)
    }
);;
mongoose.set('bufferCommands', false);