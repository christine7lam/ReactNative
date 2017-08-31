var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('./dist'));

app.uer('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 8063;

app.listen(port, function(error) {
    if(error) throw error;
    console.log("Express server listening on port", port);
});