var D1 = document.getElementById("D1");
console.log(D1.innerHTML);
console.log(D1.textContent);

D1.innerHTML = "This is new <span>text</span>";

console.log(D1.innerHTML);
console.log(D1.textContent);

D1.textContent = "This is new <span>text 2</span>";

console.log(D1.innerHTML);
console.log(D1.textContent);

/**************************************************/
console.log("---------------------------------");

var D2 = document.querySelectorAll(".D2 div");
D2[0].id = "id-from-js";
D2[0].className = "class-from-js";
console.log(D2[0].id);
console.log(D2[0].className);
console.log(D2[1].className);

var img = document.querySelectorAll(".D2 img");

console.log(img[0].src);
img[0].src = "http://placehold.it/200/200"
console.log(img[0].src);

img[0].title = "My Image"; 
/* img1.Attribute = "change Attribute value" */

/**************************************************/
console.log("---------------------------------");

console.log(img[1].src);
console.log(img[1].getAttribute("src"));

img[1].setAttribute("src","http://placehold.it/200/000");
console.log(img[1].getAttribute("src"));

img[1].setAttribute("title","This is my title");

/**************************************************/
console.log("---------------------------------");

var img1 = document.getElementById("img1");

if(img1.hasAttribute('alt')){
    console.log('yes this element has atrribute alt');
    
    if(img1.alt === ""){
        img1.setAttribute("alt","atl from javascript");
        //img1.removeAttribute("alt");
        
    }
}
else{console.log('no this element dont have atrribute alt');}

/**************************************************/
console.log("---------------------------------");

var CL = document.getElementById("CL");
console.log(CL.classList);
console.log(CL.classList.length);
if(CL.classList.contains("CL2")){
    console.log("yes this div contain class called");
}
console.log(CL.classList.item(3));

/**************************************************/
console.log("---------------------------------");

CL.className += "CL5";
console.log(CL.classList);
CL.classList.add("CL6","CL7");
console.log(CL.classList);
CL.classList.remove("CL7");
console.log(CL.classList);


var btnToggle = document.getElementById("btnToggle");
btnToggle.onclick = function(){
    CL.classList.toggle("CL7");
}







console.log();