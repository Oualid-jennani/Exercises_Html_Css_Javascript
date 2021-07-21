console.log(document.inputEncoding);
console.log(document.lastModified);
console.log(document.URL);

/**************************************************/

var myElement = document.createElement('div');

document.body.appendChild(myElement);
//create comment
var  myComment = document.createComment("his div created with javascript")
//add comment to my element
myElement.appendChild(myComment);

//create text
var myText = document.createTextNode('This text created with javascript');
//add text to my element
myElement.appendChild(myText);


/**************************************************/

var myAttr1 = document.createAttribute('class'),
    myAttr2 = document.createAttribute('id');

myAttr1.value = 'coustom';
myAttr2.value = 'coustom';

myElement.setAttributeNode(myAttr1);
myElement.setAttributeNode(myAttr2);

/**************************************************/