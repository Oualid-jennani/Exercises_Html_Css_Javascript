var mainDiv1 = document.getElementById("main1");

console.log(mainDiv1.childNodes[0].nodeName);
console.log(mainDiv1.childNodes[1].nodeName);
console.log(mainDiv1.childNodes[2].nodeName);
console.log(mainDiv1.childNodes[3].nodeName);

console.log(mainDiv1.childNodes[0].tagName);
console.log(mainDiv1.childNodes[1].tagName);

console.log(mainDiv1.childNodes[0].nodeValue);
console.log(mainDiv1.childNodes[1].nodeValue);
console.log(mainDiv1.childNodes[1].firstChild.nodeValue);
//console.log(mainDiv1.childNodes[1].childNodes[0].nodeValue);

console.log(mainDiv1.childNodes[0].nodeType);
console.log(mainDiv1.childNodes[1].nodeType);
console.log(mainDiv1.childNodes[2].nodeType);
console.log(mainDiv1.childNodes[3].nodeType);
console.log(mainDiv1.childNodes[4].nodeType);


/**************************************************/
console.log("---------------------------------");

var mainDiv2 = document.getElementById("main2"),
    newDiv = document.getElementById("new"),
    myCopy = mainDiv2.firstElementChild.cloneNode(true);
newDiv.appendChild(myCopy)

/**************************************************/
console.log("---------------------------------");

var mainDiv3 = document.getElementById("main3"),
    btnClose = document.getElementById("close");
console.log(btnClose.parentNode);
console.log(btnClose.parentElement);

btnClose.onclick = function(){
    "use strict";
    
    this.parentNode.style.display = 'none';
    //this.parentElement.style.display = 'none';
}

if(mainDiv3.parentElement.tagName === 'BODY'){
    console.log("This element has no parent only body");
}

/**************************************************/
console.log("---------------------------------");

var mainDiv4 = document.getElementById("main4");
console.log(mainDiv4.childNodes);
console.log(mainDiv4.childNodes[1].nextSibling);
console.log(mainDiv4.childNodes[1].nextElementSibling);
mainDiv4.childNodes[2].nextElementSibling.textContent = 'changed';

console.log(mainDiv4.childNodes[3].previousSibling);
console.log(mainDiv4.childNodes[3].previousElementSibling);

/**************************************************/


var txt = document.getElementById("txt");

window.onload = function(){
    "use strict";
    txt.focus();
}

txt.onblur = function(){
    "use strict";
    this.style.width = '200px';
}
//txt.blur();

/**************************************************/

var mainDiv5 = document.getElementById("main5");
var btn1 = document.getElementById("btn1");

btn1.onclick = function(){
    "use strict";
    mainDiv5.children[1].style.backgroundColor = "yellow";
}

window.ondblclick = function(){
    "use strict";
    btn1.click();
}


setTimeout(function(){
    btn1.click();
},5000);










