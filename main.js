var section = document.getElementsByClassName('container');
section[0].style.height = "320px";
section[0].style.width = "320px";

var size = 10;
for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
        var pixel = document.createElement('div');
        section[0].appendChild(pixel);
    }
}


var div = document.getElementsByTagName('div');


for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
    div[i].style.backgroundColor = "white";
    div[i].style.height = "30px";
    div[i].style.width = "30px";
    div[i].style.border = "1px solid black";
    div[i].style.display = "inline-block"
    div[i].style.marginBottom = "-5px";
}

var backgroundArray = ['blue', 'red', 'yellow', 'green', 'black', 'hotpink', 'teal', 'aqua', 'lightgreen', 'white'];

for (var i = 0; i < backgroundArray.length; i++) {
    var colorPallete = document.createElement('div');
    colorPallete.className = "colorChoose";
    colorPallete.style.height = "30px";
    colorPallete.style.width = "30px";
    colorPallete.style.display = "inline-block";
    colorPallete.style.border = "1px solid black";
    colorPallete.style.backgroundColor = backgroundArray[i];
    section[0].appendChild(colorPallete);
    if (backgroundArray[i] === 'white') {
        colorPallete.style.background = "url(images/eraser.jpg)";
    }
}

var colorChoose = document.getElementsByClassName('colorChoose');
var colorChosen = "red";
function colorChooser (event) {
        colorChosen = this.style.backgroundColor;
}

for (var i = 0; i < colorChoose.length; i++) {
    colorChoose[i].addEventListener('click', colorChooser);
}

var clickPixel = document.querySelectorAll('div');

function eventHandler (event) {
        this.style.backgroundColor = colorChosen;
}

for (var i = 0; i < clickPixel.length; i++) {
    clickPixel[i].addEventListener('click', eventHandler);
}




















