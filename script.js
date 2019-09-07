var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Printing the CSS code to h3
function cssCode() {
    css.textContent = "background: " + body.style.background + ";";
} 

function colorToBody() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    // Printing the CSS code to h3
    cssCode()
}

color1.addEventListener("input", colorToBody);

color2.addEventListener("input", colorToBody);

// Gradient direction buttons

var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");

button1.addEventListener("click", colorDirRight);
button2.addEventListener("click", colorDirBottom);
button3.addEventListener("click", colorDirBottomRight);
button4.addEventListener("click", colorDirTopRight);

var lr, ud, tlbr, bltr;
lr = "to right";
ud = "to bottom";
tlbr = "to bottom right";
bltr = "to top right";

// Can't figure out a way to not repeating myself...

function colorDirRight() {
    body.style.background = "linear-gradient(" + lr + ", " + color1.value + ", " + color2.value + ")";
    cssCode()
}

function colorDirBottom() {
    body.style.background = "linear-gradient(" + ud + ", " + color1.value + ", " + color2.value + ")";
    cssCode()
}
function colorDirBottomRight() {
    body.style.background = "linear-gradient(" + tlbr + ", " + color1.value + ", " + color2.value + ")";
    cssCode()
}
function colorDirTopRight() {
    body.style.background = "linear-gradient(" + bltr + ", " + color1.value + ", " + color2.value + ")";
    cssCode()
}







































