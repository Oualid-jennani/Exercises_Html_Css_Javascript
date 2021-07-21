var mainDiv1 = document.getElementById("main1");
console.log(mainDiv1.childElementCount);
console.log(mainDiv1.children.length);
console.log(mainDiv1.children[0]);
console.log(mainDiv1.children[0].textContent);
console.log(mainDiv1.children[0].className);


console.log(mainDiv1.childNodes.length);
console.log(mainDiv1.childNodes);

/**************************************************/
console.log("---------------------------------");

console.log(mainDiv1.firstElementChild);
console.log(mainDiv1.children[0]);
console.log(mainDiv1.lastElementChild);
console.log(mainDiv1.children[mainDiv1.children.length-1]);


console.log(mainDiv1.firstChild);
console.log(mainDiv1.childNodes[0]);
console.log(mainDiv1.lastChild);
console.log(mainDiv1.childNodes[mainDiv1.childNodes.length-1]);


/**************************************************/
console.log("---------------------------------");

var mainDiv2 = document.getElementById("main2"),
    newDiv = document.createElement("div"),
    newP = document.createElement("p"),
    newText1 = document.createTextNode("1) ==> Hello from javascript"),
    newText2 = document.createTextNode("2) ==> Hello from javascript");


newDiv.appendChild(newText1);
newP.appendChild(newText2);

mainDiv2.appendChild(newDiv);
mainDiv2.appendChild(newP);




/**************************************************/

var mainDiv3 = document.getElementById("main3"),
    newDiv = document.createElement("div"),
    newP = document.createElement("p"),
    newText1 = document.createTextNode("1) ==> Hello from javascript"),
    newText2 = document.createTextNode("2) ==> Hello from javascript");


newDiv.appendChild(newText1);
newP.appendChild(newText2);

mainDiv3.insertBefore(newDiv,mainDiv3.firstElementChild);
//mainDiv3.insertBefore(newDiv,mainDiv3.lastElementChild);
mainDiv3.insertBefore(newP,mainDiv3.children[2]);
//mainDiv3.insertBefore(newP,mainDiv3.childNodes[2]);
//mainDiv3.insertBefore(newP,mainDiv3.childNodes[mainDiv3.children.length-1]);

/**************************************************/

var mainDiv4 = document.getElementById("main4");
console.log(mainDiv4.childNodes);

mainDiv4.removeChild(mainDiv4.firstElementChild);
//mainDiv4.removeChild(mainDiv4.lastElementChild);
//mainDiv4.removeChild(mainDiv4.children[3]);
console.log(mainDiv4.childNodes);

mainDiv4.removeChild(mainDiv4.firstChild);
//mainDiv4.removeChild(mainDiv4.lastChild);
//mainDiv4.removeChild(mainDiv4.childNodes[3]); 
console.log(mainDiv4.childNodes);

var i;
for(i = 0 ; i < mainDiv4.children.length ; i++ ){
    if(mainDiv4.children[i].classList.contains("RM")){
        mainDiv4.removeChild(mainDiv4.children[i]);
    }
}
console.log(mainDiv4.childNodes);


