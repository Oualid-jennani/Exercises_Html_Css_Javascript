/*jslint evil: true */
/*global console, alert,prompt*/

/* onload, onclick, ondblclick */
function ClickChangeText() {
    "use strict";
    var v = document.getElementById("B1");

    if (v.value === "Click me") {
        v.value = "Clicked";
    } else {
        v.value = "Click me";
    }
}

window.onload = function () {
    "use strict";
    document.getElementById("D1").innerHTML = "Text From JavaScript";
};

window.onclick = function () {
    "use strict";
    document.getElementById("D2").innerHTML = "Hello Div Yellow";
};

window.ondblclick = function () {
    "use strict";
    document.getElementById("D3").innerHTML = "Hello Div Blue";
};
/* onkeydown, onkeypress, onkeyup */
var myinp1 = document.getElementById("inp1"),
    mydiv1 = document.getElementById("D4"),
    mybtn = document.getElementById("B2");

mybtn.onclick = function () {
    "use strict";
    mydiv1.innerHTML = myinp1.value * 3.75;
};

var myinp2 = document.getElementById("inp2"),
    mydiv2 = document.getElementById("D5");

myinp2.onkeyup = function () {
    "use strict";
    mydiv2.innerHTML = myinp2.value * 3.75;
};

var myinp3 = document.getElementById("inp3");

myinp3.onkeypress = function () { // <====  onkeydown
    "use strict";
    alert("You Are Goin To Key Now");
};
/* onmouseover, onmouseout, onchange */
var mydiv3 = document.getElementById("D6");

mydiv3.onmouseover = function () {
    "use strict";
    mydiv3.innerHTML = "You Hovered On Me";
};
mydiv3.onmouseout = function () {
    "use strict";
    mydiv3.innerHTML = "0";
};
var mySELECT = document.getElementById("sel"),
    myinp4 = document.getElementById("inp4");

mySELECT.onchange = function () {
    "use strict";
    mydiv3.innerHTML = "Worth " + myinp4.value * mySELECT.value + " DH";
};
//myinp4.onchange = ...........
