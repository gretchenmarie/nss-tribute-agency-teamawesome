const intro = document.createElement('div');
const introTitle = document.createElement('h1');
const introBody = document.createElement('p');
introTitle.textContent = "Frank Sinatra";
introBody.textContent= "Frank Sinatra also known as the Chairman of the Board was a generational singer. This leader of the Ratpac made a great impact on the culture of music and will remain in the minds of people forever. In addition to his talents in singing he also won awards for his acting.";
let person = document.getElementById("introContent")
person.appendChild(introTitle);
person.appendChild(introBody);
console.log(intro);