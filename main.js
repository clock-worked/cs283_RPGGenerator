var express = require('express');
var fs= require('fs');
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

app.get('/readCSV', function (req, res) {
	//res.writeHead(200, {'content-type': 'text/html'});
	var c = req.query.class;
	var file = '';
	if (c=='template') file += './class_csvs/character_template.csv';
	else file += './class_csvs/' + c + '_class.csv';
	fs.readFile(file, 'utf8', function(err,colors){
		if (err){
			res.writeHead(404);
			res.write("File not Found!");
		}
		else{
		 res.send(colors);
		}
		res.end();
	});
	
})
