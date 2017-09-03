//randomData.js
//gets random data from database

var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	//PUT YOUR USERNAME AND PASSWORD FOR MYSQL HERE!!!!!!!
	user: 'root',
	password: '8b1cc149fg',
	database: 'cs275project'
});

con.connect(function(err) {
	if (err) {
		console.log("ERROR connecting to database cs275project");
	}
});


//initializes randomData object
function randomData() {
}

randomData.prototype.getData = function(items,callback) {
	//items = [name, gender, class] in that order
	j = 0;
	for (var i = 0; i<items.length; i+=1) {
		if (items[i] == 'name') {
			var query = 'SELECT * FROM '+ items[i];
			con.query(query, function(err,rows) {
				if (err)
					console.log(err);
				else {
					var first = getRandomInt(0,49);
					var second = getRandomInt(0,49);
					//using index i appends to the end (?)
					items[j] = rows[first].firstname + " " + rows[second].lastname;
					if (j==items.length-1) callback(null,items);					
					j+=1;
					//console.log(j);
				}
			});
		}

		if (items[i] == 'gender') {
			var query = 'SELECT * FROM '+ items[i];
			con.query(query, function(err,rows) {
				if (err)
					console.log(err);
				else {
					var first = getRandomInt(0,2);
					//using index i appends to the end (?)
					items[j] = rows[first].gendername;
					if (j==items.length-1) callback(null,items);
					j+=1;
					//console.log(j);
				}
			});
		}

		if (items[i] == 'class') {
			var query = 'SELECT * FROM '+ items[i];
			con.query(query, function(err,rows) {
				if (err)
					console.log(err);
				else {
					var first = getRandomInt(0,4);
					//using index i appends to the end (?)
					items[j] = rows[first].classname;
					if (j==items.length-1) callback(null,items);
					j+=1;
					//console.log(j);
				}
			});
		}

		//console.log(items);
	}
	
	//callback(null,items);

}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //max and min are inclusive 
}

module.exports = randomData;
