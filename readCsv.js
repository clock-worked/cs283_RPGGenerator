//this has a lot of stuff that will probably not be needed.
//I just used the extra stuff to test the function and make sure everything works

var fs= require('fs');

//read all data from file...replace data.txt with file name
fs.readFile('./data.txt', 'utf8', function(err,colors){
if (err){
console.log(err);
}

processData(colors); 
//console.log(colors);

});

var table="";

//data will be processed and table created
//table format just sample
function processData(data){
	
	var colors = data.split(",");
	 table = "<table><tr><th>Colors</th></tr>";
	
	for(var i=0; i<colors.length; i++){
		table+="<tr><td>";
		table+=colors[i].replace(/\'/g,"");;
		table+="</td></tr>";
	}
	table+="</table>";
	
	//console.log(table);
	console.log("data displayed in temp. html")
	
}

//below is just a html file that will have the data displayed to see what's happening...to check code
var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
 
  return '<!DOCTYPE html>'
       + '<html><header></header><body>' + table + '</body></html>';
};