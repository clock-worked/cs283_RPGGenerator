
function getColor(textbox) {
    return document.getElementById(textbox).value;
}

function createTable(height, width){
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
            colElem.style.background = '#a0a0a0';

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

