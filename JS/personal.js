console.log("Grady's js file: personal.js");


const intro = document.createElement('div');
const introTitle = document.createElement('h1');
const introBody = document.createElement('h2');
introTitle.textContent = "Frank Sinatra";
introBody.textContent= "personal page";



for (var spouse of sinatraSpouses){
    if(spouse.status === "divorced") {
        console.log("Sinatra divored " + sinatraSpouses.spouse + "in " + sinatraSpouses.dateEnd)
    }

    else{
        console.log(`${sinatraSpouses.spouse} + "never divorced`)
    }

}