const intro = document.createElement('div');
const introTitle = document.createElement('h1');
const introBody = document.createElement('p');
introTitle.textContent = "Frank Sinatra";
introBody.textContent= "lorem ipsum";
let person = document.getElementById("content")
person.appendChild(introTitle);
person.appendChild(introBody);
console.log(intro);