/*
    OBJECTS:
-Objects are used to store multiple sets of data in the key/value pair  format
-Denoted by {}
*/

let netflix = {
    //name: value,
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
            ]
        }
    }
}
//console.log(netflix);
//console.log(netflix.name); //dot notation: when you want the property of a key/value
//console.log(netflix.season1.seasonInfo.episodeInfo);

//!Challenge: console.log any single episode name from season 1
console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
    JSON OBJECT:
-JSON stands for JavaScript Objecy Notation.
-The JSON syntax is derived from JavaScript Object syntax, but the JSON format is text only.
(turns arrays into strings)
-JSON exists as a string- useful when fetching data from a server. It needs to be translated into a native
JavaScript object if we want to access the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
//we can use some object methods to help us gather information we might not otherwise know.
//object.keys();
console.log(Object.keys(spaceJam));//like doing a dir in an object.
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad.duck));//gives us the index number of 'Daffy Duck'

console.log(Object.values(spaceJam.toonSquad));//shows values of keys

/*
    OBJECT BRACKET NOTATION:
-Object bracket notation can allow us to find a value in an object we wouldn't be able to access using
dot notation.
-We can also use object bracket notation to store a key in a variable and use that variable to access
information in an object.
-This works because all key names in an object are strings.
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10
}
let test = Object.keys(garden);
console.log(test); //shows keys as strings
console.log(typeof test[0]);

console.log(garden.flower);//dot notation

console.log(garden['flower']);//bracket notation

let baking = {};
baking['zucchini'] = 'Better make some bread!';
baking.bakeTime = 60;
console.log(baking);
//^kinda like pushing in an array. If assigned 2 keys as same thing with different vals. only last added

let garden = {
    vegetable: 'zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10
}

console.log(baking[garden['vegetable']]);
//simplifies to console.log(baking['zucchini']) to console.log('Better make some bread!')

//Square brackets can also be a good idea if the object's key has a space in the name.

let testObj = {
    "Spaces Here": true;
    noSpaces: true
}
console.log(testObj.noSpaces);
console.log(testObj.Spaces Here); //doesn't work
console.log(testObj['Spaces Here']);//does work