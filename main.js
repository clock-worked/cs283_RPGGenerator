var express = require('express');
var app = express();
app.use(express.static("."));
var randomData = require('./randomData');
var rd = new randomData();

//Starts server
app.listen(8080, function() {
	console.log('Server starting...');
	console.log('Server running...');
});


//sends back table HTML
app.get('/requestData', function(req,res) {
	var data = req.query.get;
	var x = data.split(',');
	rd.getData(x, function(err,data) {
		res.send(data);
	});
	//res.send("TEST");

});