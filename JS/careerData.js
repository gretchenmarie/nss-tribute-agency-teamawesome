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
    End: "1936",
}
const Vegas = {
    location: "Las Vegas, Nevada",
    start: "1950",
    End: "1953"
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
    year: "1969",
}
const StrangersInTheNight = {
    album: "Strangers in the Night",
    year: "1966",
}
const Duets = {
    album: "Duets",
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


