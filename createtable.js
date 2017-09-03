function getColor(textbox) {
    return document.getElementById(textbox).value;
}

function requestData(height,width) {
	var n = document.getElementById("selectname").value;
	var g = document.getElementById("selectgender").value;
	var c = document.getElementById("selectclass").value;
	if (n=="" || g=="" || c==""){
		var items =[];
		var URL = '/requestData?get=';
		if (n=="") items.push("name");
		if (g=="") items.push("gender");
		if (c=="") items.push("class");
		for (var i = 0; i<items.length; i+=1) {
			if (i==items.length-1) URL = URL + items[i];
			else URL = URL + items[i] + ',';
			
		}
		//alert(URL);
		$.ajax({
			//GET request and receives HTML string
			type: "GET",
			//passes requested table into URL
			url: URL,
			data: "{}",
			dataType: "text",
			success: function(msg) {
				//alert(msg[0]);
				msg = msg.substring(1,msg.length-1);
				var data = msg.split(',');	
				for (var i=0; i<data.length; i++) {
					if (document.getElementById("selectname").value=="") document.getElementById("selectname").value = data[i].substring(1,data[i].length-1);
					else if (document.getElementById("selectgender").value=="") document.getElementById("selectgender").value = data[i].substring(1,data[i].length-1);
					else if (document.getElementById("selectclass").value=="") document.getElementById("selectclass").value = data[i].substring(1,data[i].length-1);
				}
				var c = document.getElementById("selectclass").value;
				process(height,width,c);

			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("Error");
			}
		});
	}
	else alert("none");
}


function process(height,width,c){
	var URL = "/readCSV?class="+c;
	var tableArray = [];

	$.ajax({
		type: "GET",
		url: URL,
		data: {},
		dataType: "html",
		success: function(msg) {
			var rows = msg.split("\n");
			
			for (var i = 0; i < height; i+=1) {
				var column = rows[i].split(",");				
				tableArray.push(column);
			}
			construct(height,width,tableArray);
				
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("Error Fetching " + URL);
		}
	});
}

function construct(height,width,tableArray) {

    var tableElem, rowElem, colElem;
    tableElem = document.createElement('table');
    tableElem.cellSpacing = "0";
    tableElem.id = "canvas";
    tableElem.style.border = "1px solid black";
    tableElem.style.cursor = "pointer";

    for (var i = 0; i < height; i++) {
        rowElem = document.createElement('tr');
	


        for (var j = 0; j < width; j++) {
            colElem = document.createElement('td');
            //colElem.appendChild(document.createTextNode(j + 1)); //to print cell number
            colElem.style.border = "1px solid black";
            colElem.style.height = "10px";
            colElem.style.width = "10px";
            colElem.style.background = tableArray[i][j];


            //Change color of cell
            colElem.onclick = function () { this.style.background = getColor('custom')};
            colElem.addEventListener("mouseover", function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    this.style.background = getColor('custom')
                }
            })


            rowElem.appendChild(colElem);
        }

        tableElem.appendChild(rowElem);
    }

    var tableMain = document.createElement('table');
    colElem = document.createElement('td');
    colElem.appendChild(tableElem);
    tableMain.appendChild(colElem);

    colElem = document.createElement('td');

    tableMain.appendChild(document.getElementById("color"));
	

    document.body.replaceChild(tableMain, document.getElementById("CharacterCreator"));
	var table = document.getElementById("canvas");
}

function createTable(height, width){
	requestData(height,width);
}

function rgb2hex(rgb){
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

$('button').click(function(){
    var hex = rgb2hex( $('input').val() );
    $('.result').html( hex );
});

function saveTable(filename) {
    var table = document.getElementById("canvas");
    var tableArray = [];
    var numRows = table.rows.length;
    var numCols = table.rows[0].cells.length;
    for(var i = 0; i <  numRows;i++){
        var tempArray = [];
        //console.log(i);
        for(var j = 0; j < numCols;j++){
            tempArray.push(rgb2hex(table.rows[i].cells[j].style.background));
            //console.log(j);

        }
        tableArray.push(tempArray);
    }

    var csvContent = "data:text/csv;charset=utf-8,";
    tableArray.forEach(function(infoArray, index){

        var dataString = infoArray.join(",");
        csvContent += index < tableArray.length ? dataString+ "\n" : dataString;

    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename + '.csv');
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".

}



