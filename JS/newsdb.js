const newsFeed = {
    palmSprings:[{
        event: "Have your next party at Frank Sinatra's Palm Spring Estate",
        date: "July,16,2018",
        location: "Palm Springs",
        typeOfEvent: "vacation",
        where:"Twin Palms estate",
        link:"http://www.sinatrahouse.com/"},

        nancyDeath = {
            event:"Death of Nanacy Sinatra",
            date:"July 14, 2018",
            location:"Los Angeles",
            typeOfEvent:"death",
            where:"at home",
            link:"https://people.com/music/nancy-sinatra-sr-dead-101/",
        },
        
        frankDeath = {
            event:" Death of Frank Sinatra ",
            date:"May 14, 1998",
            location:"Los Angeles",
            typeOfEvent:"death",

            where: "Heart attack in his home",
            link:"http://www.thefranksinatra.com/articles/frank-sinatras-death",
        },
        frankCold = {
            event:"Frank Sinatra has a cold. An article by Gay Talese",
            date:"April 1966",
            location:"Los Angeles",
            typeOfEvent:"Esquire Article",
            where: "Esquire Magazine",
            link:"https://www.esquire.com/news-politics/a638/frank-sinatra-has-a-cold-gay-talese/",
        },
       miaFarrow = {
            event:"Divorce",
            date:"1968",
            location:"New York",
            typeOfEvent:"Marriage",
            where:"New York",
            link:"https://www.vanityfair.com/style/2013/11/mia-farrow-frank-sinatra-ronan-farrow",
        },
        musical = {
            event:"My Way, a musical tribute to Frank Sinatra",
            date:"July 12, 2018",
            location:"Hilton Head Preparatory school",
            typeOfEvent:"musical production",
            where:"Hilton Head",
            link:"https://www.islandpacket.com/entertainment/local-events/article214769875.html",
        },
       

    ]
}

//const newsFeedstring = JSON.stringify(newsFeed);
//localStorage.setItem("newsFeed", newsFeedString);

//creating function sinatraNews is the name of the function-parameters=what I'm passing the newsfeed object through 
//and what I'm assign the string name through.
//what is inside of the curly brackets makes me objects into a string
const sinatraNews = function (databaseObject, keyName){
    const newsFeedString = JSON.stringify(newsFeed);
    localStorage.setItem( keyName, newsFeedString);

}
 //use function name (object name that you are passing through (newsFeed), "key" ( new made up name))
 sinatraNews(newsFeed,"Sinatraisdead");


//pull down from local storage create a new constant name so you don't have to keep typing
//localstorage.getitem you use the string key as the name of the item yo uare getting
const news = localStorage.getItem("Sinatraisdead");

//use JSON.parse () to convert the string back into an object use the new constant name created to = 
//localstorage.get data is also a chosen name in this
let data = JSON.parse(news);

//make a for in loop that retrieves items from inside of the object. you need another new name (newslist)
for (let newslist in data ){
for (let i = 0; i < data[newslist].length; i++) {
    const currentObject = data[newslist][i];
    console.log (currentObject);
    // tagging the list and the elements that go inside are list items
    const ultag = document.createElement("li")
    //get the element-create an id in the ul tage the child is the li 
    //named ultag then go into the HTML (innerHTML) then the new constant called currentObject
    document.getElementById("newslist").appendChild(ultag).innerHTML =
     `${currentObject.event}, ${currentObject.date}, ${currentObject.location},
     ${currentObject.typeOfEvent}, ${currentObject.where}, ${currentObject.link}`;




    
};
}