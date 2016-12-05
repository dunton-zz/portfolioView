var express = require('express')
var app = express()
var path = require("path");

app.set('port', 3000);

app.use(express.static(path.join(__dirname, '/public')))

app.get('/neighborhood', function(req, res) {
	res.sendFile(path.join(__dirname + '/portfolio/neighborhoodMap/neighborhood.html'));
	console.log("index requested");
})


var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port)
})


