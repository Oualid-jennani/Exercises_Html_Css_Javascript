var main1 = document.getElementById('main1');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');


function changeColor1 () {
    "use strict";
    main1.style.color = 'red';
};

function changeColor2 () {
    "use strict";
    main1.style.color = 'blue';
};

btn1.onclick = changeColor2;

btn1.onclick = function(){
    "use strict";
    main1.style.color = 'yellow';
}

/**************************************************/
var main2 = document.getElementById('main2');

window.onload = function () {
    "use strict";
    main2.innerHTML = 'Dom is ready';
};


window.onscroll = function () {
    "use strict";
    main2.innerHTML = 'Scrolled';
};


window.onresize = function () {
    "use strict";
    main2.innerHTML = 'Your window is reized';
};

/**************************************************/
var fr = document.getElementById('fr');
var inp1 = document.getElementById('inp1');
var subm = document.getElementById('subm');
var notice = document.getElementById('notice');

inp1.onfocus = function(){
    "use strict";
    notice.textContent = "Please dont forget to wtite password";
}

inp1.onblur = function(){
    "use strict";
    notice.textContent = "";
    
    if(inp1.value.length < 10){
        notice.textContent = "Sorry your password must be at least 10 characters";
    }
}

fr.onsubmit = function(e){
    "use strict";
    e.preventDefault();
}


/**************************************************/

var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');

var D1 = document.getElementById('D1');

btn3.onclick = function(){
    "use strict";
    if(this.textContent == "Click"){
        this.textContent = "You clicked on the element";
    }
    else{this.textContent = "Click"}
}

btn4.ondblclick = function(){
    "use strict";
    if(this.textContent == "Double Click"){
        this.textContent = "You double clicked on the element";
    }
    else{this.textContent = "Click"}
}

btn5.onmouseenter = function(){
    "use strict";
    this.style.backgroundColor = "yellow";
}


btn5.onmouseleave = function(){
    "use strict";
    this.style.backgroundColor = "#efefef";
}

D1.oncontextmenu = function(e){
    "use strict";
    
    e.preventDefault();
    this.textContent = "You cannot right click here";
    
    console.log("You right clicked the mouse")
}

/**************************************************/

var inp2 = document.getElementById('inp2');
var inp3 = document.getElementById('inp3');
var inp4 = document.getElementById('inp4');

var D2 = document.getElementById('D2');

inp2.onkeyup = function(){
    "use strict";
    D2.textContent = inp2.value;
}

inp3.onkeydown = function(){
    "use strict";
    alert("onkeydown");
}

inp4.onkeypress = function(){
    "use strict";
    alert("onkeypress");
}




