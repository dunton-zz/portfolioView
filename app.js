var express = require('express')
var app = express()
var path = require("path");
var React = require('react');
var ReactDOM = require('react-dom');


app.set('port', 3000);

app.use(express.static(path.join(__dirname, '/public')))

app.get('/neighborhood', function(req, res) {
	res.sendFile(path.join(__dirname + '/portfolio/neighborhoodMap/neighborhood.html'));
	console.log("index requested");
})

app.get('/todo', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/todoApp-react/public/index.html'));
	console.log("to do list requested");
})


var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port)
})


