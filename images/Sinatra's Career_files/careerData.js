const SinatraCareerDatabase = {
    skills : [],
    places : [],
    albums : [],
    collaborators : [],
    awards : [],
};

// SinatraCareerDatabase.skills = []
// SinatraCareerDatabase.places = []
// SinatraCareerDatabase.albums = []
// SinatraCareerDatabase.collaborators = []
// SinatraCareerDatabase.awards = []

//skills
const singing = {
    skill: "Singing",
}
const acting = {
    skill: "Acting",
}
const producer = {
    skill: "Producing"
}
const showmanship = {
    skill: "Showmanship",
}
const style = {
    skill: "Dress Style",
}

SinatraCareerDatabase.skills.push(singing,acting,producer,showmanship,style);

//places
const Hoboken = {
    location: "Hoboken, New Jersey",
    start: "1915",
    end: "1936",
}
const Vegas = {
    location: "Las Vegas, Nevada",
    start: "1950",
    end: "1953"
}
const NewYork = {
    location: "Manhattan, NewYork",
    start: "1960",
    end: "1970",
}
const PalmSprings = {
    location: "Palm Springs, California",
    start: "1970",
    end: "1998",
}

SinatraCareerDatabase.places.push(Hoboken,Vegas,NewYork,PalmSprings);

//albums
const MyWay = {
    album: "My Way",
    cover: "../images/myway.jpg",
    year: "1969",
}
const StrangersInTheNight = {
    album: "Strangers in the Night",
    cover: "../images/strangers.jpg",
    year: "1966",
}
const Duets = {
    album: "Duets",
    cover: "../images/duets.jpg",
    year: "1993",
}

SinatraCareerDatabase.albums.push(MyWay,StrangersInTheNight,Duets);

//collaborators
const Aretha = {
    person: "Aretha Franklin",
    song: "What Now My Love",
}
const Barbara = {
    person: "Barbara Streisand",
    song: "I've Got a Crush on You",
}
const Tony = {
    person: "Tony Bennett",
    song: "New York, New York",
}
const  Liza = {
    person: "Liza Minneli",
    song: "I've Got the World on a String",
}

SinatraCareerDatabase.collaborators.push(Aretha,Barbara,Tony,Liza);

// Awards
const OnlyTheLonely = {
    type: "Grammy",
    year: "1959",
    work: "Only the Lonely",
    award: "Best Recording Package",
}
const ComeDanceWithMe = {
    type: "Grammy",
    year: "1959",
    work: "Come Dance With Me",
    award: "Album of the Year",
}
const FromHereToEternity = {
    type: "Oscar",
    year: "1953",
    work: "From Here to Eternity",
    award: "Best Supporting Actor",
}
const Lifetime = {
    type: "Golden Globes",
    year: "1971",
    work: "Lifetime Achievement",
    award: "Cecil B Demille",
}

SinatraCareerDatabase.awards.push(OnlyTheLonely,ComeDanceWithMe,FromHereToEternity,Lifetime);

const saveSinatraCareerDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveSinatraCareerDatabase(SinatraCareerDatabase, "SinatraCareer");

const loadSinatraCareerDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadSinatraCareerDatabase("SinatraCareer"));

let data = loadSinatraCareerDatabase("SinatraCareer");

let skills = data.skills;
let albums = data.albums;
let places = data.places;
let collabs = data.collaborators;
let awards = data.awards;

let skillsContent = document.querySelector("#skillsList");

function addSkills(info){
    skillsContent.innerHTML +=
        `<div>
            <h3>Notable Skills:</h3>
            <ul class="skills-list"></ul>
        </div>`;
    let ul = document.querySelector(".skills-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].skill}</li>`
    }
}

addSkills(skills);

let albumsContent = document.querySelector("#albumList");

function addAlbums(info){
    albumsContent.innerHTML +=
        `<div class="album-list .card-group">
         </div>`;
    let div = document.querySelector(".album-list");
    for(let i = 0; i < info.length; i++){
        div.innerHTML +=
            `<div class="card .col-sm-4">
                <h2>${info[i].album}</h2>
                <img src="${info[i].cover}" alt="${info[i].title}">
                <p>${info[i].year}</p>
            </div> `
    }
}

addAlbums(albums);

let placesContent = document.querySelector("#placesList");

function addPlaces(info){
    placesContent.innerHTML +=
        `<div>
            <h3>Places Sinatra Lived:</h3>
            <ul class="places-list"></ul>
        </div>`;
    let ul = document.querySelector(".places-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].location} from ${info[i].start} to ${info[i].end}</li>`
    }
}

addPlaces(places);

let collabsContent = document.querySelector("#collaboratorsList");

function addCollabs(info){
    collabsContent.innerHTML +=
        `<div>
            <h3>People Sinatra Collaborated with:</h3>
            <ul class="collabs-list"></ul>
        </div>`;
    let ul = document.querySelector(".collabs-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i].person} on ${info[i].song}</li>`
    }
}

addCollabs(collabs);

let awardsContent = document.querySelector("#awardsList");

function addAwards(info){
    awardsContent.innerHTML +=
        `<div>
            <h3>Awards Sinatra Received:</h3>
            <ul class="awards-list"></ul>
        </div>`;
    let ul = document.querySelector(".awards-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>The ${info[i].type} ${info[i].award} for ${info[i].work} in ${info[i].year}</li>`
    }
}

addAwards(awards);

