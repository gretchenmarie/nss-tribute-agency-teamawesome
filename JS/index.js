console.log("index.js")

// track listings for duet album
const track1 = {
    title: "The Lady is a Tramp",
    name: "Luther Vandross"
}
const track2 = {
    title: "What Now My Love",
    name: "Aretha Franklin"
}
const track3 = {
    title: "I've Got a Crush on You",
    name: "Barbra Streisand"
}
const track4 = {
    title: "Summer Wind",
    name: "Julio Iglesias"
}
const track5 = {
    title: "Come Rain or Come Shine",
    name: "Gloria Estefan"
}
const track6 = {
    title: "New York, New York",
    name: "Tony Bennett"
}
const track7 = {
    title: "They Can't Take That Away From Me",
    name: "Natalie Cole"
}
const track8 = {
    title: "You Make Me Feel So Young",
    name: "Charles Aznavour"
}
const track9 = {
    title: "Guess I'll Hang My Tears Out to Dry/In the Wee Small Hours of the Morning",
    name: "Carly Simon"
}
const track10 = {
    title: "I've Got the World on a String",
    name: "Liza Minnelli"
}
const track11 = {
    title: "Witchcraft",
    name: "Anita Baker"
}
const track12 = {
    title: "I've Got You Under My Skin",
    name: "Bono"
}
const track13 = {
    title: "All the Way/One For My Baby (And One More For The Road)",
    name: "Kenny G"
}

// create a DB of collaborators (taking from album 'Duet')
const duetAlbum = {
    totalTracks : []
}

// adding each track into the array totalTracks inside of the duetAlbum. need to .push. Maybe a loop instead of 13 .pushes?
duetAlbum.totalTracks.push(track1, track2, track3, track4 ,track5, track6, track7, track8, track9, track10, track11, track12, track13);

// log duetAlbum to console to make sure items were pushed properly
console.log(duetAlbum);

// function that converts the object into a string and sending it to the DOM
const saveAlbumDB = function (duetAlbumObject, localStorageKey) {
    // Convert the Object into a string.
    const stringifiedAlbumDB = JSON.stringify(duetAlbumObject);
     //Create a key in local storage, and store the string version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedAlbumDB);
}
// call the function in order to send the DB to the local storage
saveAlbumDB(duetAlbum, "Duet");

// Get the string version of the local storage
const albumString = localStorage.getItem("Duet");

// Use JSON.parse() to convert the string back into an object
let data = JSON.parse(albumString);

// make a for in loop for the object, then make a for loop inside of the for-in loop
// for-in loop is looping through the object from local storage (data)
for (let albumValue in data) {
    // for loop is looping through the keys inside of the object from local storage (data)
    for (let i = 0; i < data[albumValue].length; i++) {
        // assigning a variable to an item every time you iterate through the loop
        const currentObject = data[albumValue][i];
        // log to the console the current object to make sure it's looping properly
        console.log(currentObject);
        //
        const liTag = document.createElement("li");
        document.getElementById("collab-list").appendChild(liTag).innerHTML = `${currentObject.title}, with ${currentObject.name}`;
    }
}