var app = require("./app");
var port = process.env.port || 5000;

app.listen(port, function () {
    console.log('Express Server Listening ' + port);
});