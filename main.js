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


// var clickPixel = document.querySelectorAll('div');
// clickPixel.addEventListener("click", function() {
//     clickPixel.style.backgroundColor = "red";
// });


var colorPallete = document.createElement('div');
colorPallete.className = "colorChoose";
colorPallete.style.height = "30px";
colorPallete.style.width = "30px";
colorPallete.style.backgroundColor = "blue";
colorPallete.style.display = "inline-block";
colorPallete.style.border = "1px solid black";

var colorPallete2 = document.createElement('div');
colorPallete2.className = "colorChoose";
colorPallete2.style.height = "30px";
colorPallete2.style.width = "30px";
colorPallete2.style.backgroundColor = "red";
colorPallete2.style.display = "inline-block";
colorPallete.style.border = "1px solid black";

var colorPallete3 = document.createElement('div');
colorPallete3.className = "colorChoose";
colorPallete3.style.height = "30px";
colorPallete3.style.width = "30px";
colorPallete3.style.background = "url(images/eraser.jpg)";
colorPallete3.style.display = "inline-block";
colorPallete3.style.border = "1px solid black";

section[0].appendChild(colorPallete);
section[0].appendChild(colorPallete2);
section[0].appendChild(colorPallete3);

var colorChoose = document.getElementsByClassName('colorChoose');
var colorChosen = "red";
function colorChooser (event) {
        colorChosen = this.style.backgroundColor;
        console.log(colorChosen);
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




















