var app = require("./app");

app.listen(process.env.port || 5000, function () {
    console.log('Express Server Listening');
});