var fs= require('fs');
var express = require ('express');
var app = express();
app.use(express.static('.'));


app.get('/text', function (req, res) {
	//res.writeHead(200, {'content-type': 'text/html'});
	console.log("Page is running here...");
	fs.readFile('./character_template.csv', 'utf8', function(err,colors){
		if (err){
			res.writeHead(404);
			res.write("File not Found!");
		}
		else{
			console.log(colors);
		 res.send(colors);
		}
		res.end();
	});
	
})

app.listen(8080);
console.log("Page is running...");