console.log("Grady's js file");

const sinatraSpouses = [

        {spouse: "Nancy",
        dateBegin: 1962,
        dateEnd: 1970,
        status: "Divorced"
        },

        
        {
        spouse: "Ava",
        dateBegin: 1971,
        dateEnd: 1975,
        status: "divorced"
        },
        {
        spouse: "Mia",
        dateBegin: 1976,
        dateEnd: 1977,
        status: "divorced"
        },
        {
        spouse: "Barbara",
        dateBegin: 1978,
        dateEnd: 1998,
        status: "widowed"
        },

];

for (var spouse of sinatraSpouses){
    if(spouse.status === "divorced") {
        console.log("Sinatra divored " + sinatraSpouses.spouse + "in " + sinatraSpouses.dateEnd)
    }

    else{
        console.log(`${sinatraSpouses.spouse} + "never divorced`)
    }

}