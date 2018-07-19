console.log("hello world this is the personaldata.js console log");


/*
    Initialize the database in memory as an object
*/
const SinatraSpousesDatabase = {
    spouses: [],
};

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.  per Taylor, i ended up inserting line 14 into the above object, line 8
SinatraSpousesDatabase.spouses = [] 
*/

/*
    Time to create some data that will inserted into the database
*/
const Nancy = {
    spouse: "Nancy",
    dateBegin: 1939,
    dateEnd: 1951,
    status: "Divorced"
  }

const Ava = {
    spouse: "Ava",
    dateBegin: 1951,
    dateEnd: 1957,
    status: "Divorced"
}

const Mia = {
    spouse: "Mia",
    dateBegin: 1966,
    dateEnd: 1968,
    status: "Divorced"
}

const Barbara = {
    spouse: "Barbara",
    dateBegin: 1976,
    dateEnd: 1998,
    status: "widowed"
}

// Add the data to the appropriate tables
SinatraSpousesDatabase.spouses.push(Nancy);
SinatraSpousesDatabase.spouses.push(Ava);
SinatraSpousesDatabase.spouses.push(Mia);
SinatraSpousesDatabase.spouses.push(Barbara);


// Persist the database to localStorage
//saveDatabase(SinatraSpousesDatabase, "Marriages")


const saveDatabase = function (databaseObject, localStorageKey) {
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

saveDatabase(SinatraSpousesDatabase, "Marriages");

//starting on line 77 are Gretchen's notes on how she accomplished this task:
//creating function sinatraNews is the name of the function-parameters=what I'm passing the newsfeed object through 
//and what I'm assign the string name through.
//what is inside of the curly brackets makes me objects into a string

// const sinatraNews = function (databaseObject, keyName){
//     const newsFeedString = JSON.stringify(newsFeed);
//     localStorage.setItem( keyName, newsFeedString);

// }
 //use function name (object name that you are passing through (newsFeed), "key" ( new made up name))
 //sinatraNews (newsFeed,"Sinatraisdead")



 const loadDatabase = localStorage.getItem("Marriages");
 let data = JSON.parse(loadDatabase);

 console.log(data);

 for (spouses in SinatraSpousesDatabase) {
    if(spouses.status === "Divorced") {
        console.log(data + " all ended in divorce");
    }

    else {console.log("His last marriage ended with his passing in 1998")}

};


 // below is Maddy's code for putting the local storage into the page:
 // make a for in loop for the object, then make a for loop inside of the for-in loop
// for-in loop is looping through the object from local storage (data)
//for (let albumValue in data) {
    //for loop is looping through the keys inside of the object from local storage (data)
 //   for (let i = 0; i < data[albumValue].length; i++) {
        //assigning a variable to an item every time you iterate through the loop
  //      const currentObject = data[albumValue][i];
    //    console.log(currentObject);
      //  const liTag = document.createElement("li");
        //document.getElementById("collab-list").appendChild(liTag).innerHTML = `${currentObject.title}, with ${currentObject.name}`;
 //   }
//}



// for (var spouse of data){
//     if(spouse.status === "Divorced") {
//         console.log("Sinatra divored " + SinatraSpousesDatabase.spouse + "in " + SinatraSpousesDatabase.dateEnd);
//     }

//     else{
//         console.log(`${SinatraSpousesDatabase.spouse} + "never divorced`)
//     }

// }
