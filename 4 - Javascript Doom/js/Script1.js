var D2 = document.getElementById("D2");
D2.innerHTML = "change d2 by id";

var allP = document.getElementsByTagName('p');
console.log(allP.length);
allP[1].innerHTML = "change p2 by tag name";

var C = document.getElementsByClassName("C");
C[2].innerHTML = "change d3 by class name";
C[3].innerHTML = "change p3 by class name";

var query = document.querySelectorAll("div,p");
query[3].innerHTML = "change d4 by querySelector";
query[7].innerHTML = "change d4 by querySelector";

/*************************************************/

var show1 = document.getElementById("show1");
show1.innerHTML = document.title;
 
var show2 = document.getElementById("show2");
show2.innerHTML = document.images.length;
var i;
for(i = 0 ; i < document.images.length ; i++){
    show2.innerHTML += "<br>" + document.images[i].src;
}


var show3 = document.getElementById("show3");
show3.innerHTML = document.forms.length;

show3.innerHTML += "<br>" + document.forms[0].x1.type;
show3.innerHTML += "<br>" + document.forms[0].x2.value;
show3.innerHTML += "<br>" + document.forms[1].z1.type;
show3.innerHTML += "<br>" + document.forms[1].z2.value;

var show4 = document.getElementById("show4");
show4.innerText = document.body.innerHTML;
//show4.innerText = document.body.innerText;

if(document.body.innerText.indexOf('div 1') > -1){console.log("Yes this string is exist");}


var show5 = document.getElementById("show5");
show5.innerHTML = document.anchors.length;
show5.innerHTML += "<br>" + document.links.length;






