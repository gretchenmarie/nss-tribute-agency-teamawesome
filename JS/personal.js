console.log("Grady's js file: personal.js");


const intro = document.createElement('div');
const introTitle = document.createElement('h1');
const introBody = document.createElement('h2');
introTitle.textContent = "Frank Sinatra";
introBody.textContent= "personal page";


document.querySelector("#demo").innerHTML = "Hello World!";


// // A new "virtual" document fragment to contain components
const fragment = document.createDocumentFragment()

// // Create an Nicknames component element
// const nicknames = document.createElement('ul')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

/*
    Now I can update my HTML document all at once, with all
    three emperor components rendered. Otherwise, I would
    have needed to add each one, individually - a much more
    "expensive" operation.
*/
//document.querySelector("#emperorList").appendChild(fragment)

//document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Here are a few of Frank Sinatra's nicknames: The Voice, Chairman of the Board, Ol' Blue Eyes, La Voz, Frankie"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var parentDiv = document.getElementById("parentDiv"); 
//   parentDiv.insertBefore(newDiv, ); 

// }

var parentDiv = document.getElementById("parentDiv");
var newParagraph = document.createElement("p");
var newContent = document.createTextNode("Here are a few of Frank Sinatra's nicknames: The Voice, Chairman of the Board, Ol' Blue Eyes, La Voz, Frankie"); 
newParagraph.appendChild(newContent);
paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);

