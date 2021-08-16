/*
    ARRAY DESTRUCTURING:
allows us to unpack values from arrats or properties from objects
Simlilar syntax to array leterals but is on the left side of the assignment operators.
This will define what values to unpack
great for pulling information out of an array/object and assign that data to its own variable.
*/

const boardGames = ['Catan', 'Monoply', 'clue']

const [gameOne, gameTwo, gameThree] = boardGames;


/*
    REST OPERATOR:
Using rest operator will look almost exactly like the spread operator.
    -Spread expands an array into its elements. 
    Test collects multiple elements and condenses them into one element
    Rest MUST be the last element defined using array detructuring
*/

const hitchhikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {
    day: 'Thursday',
    answer: 42
}]

//wants first 2 character in another variable

let [charOne, charTwo, ...otherInfo] = hitchhikersGuide;
console.log(charOne, charTwo);

const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron', 'Hermione', 'Dumbledore']
let [nameOne, nameTwo, nameThree] = harryPotter

let [once, two, ...mainChar] = harryPotter; //can just [, , ...mainChar] and will do same thing.
console.log(nameOne, nameTwo, mainChar); //if using method above console.log(mainChar)

/*
    OBJECT DESTRUCTURING:
*/

const game = {
    title: 'Legend of Zelda: Breathe of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}

const { title, developer, platforms } = game;

const games = [
    {
        title: 'Legend of Zelda: Breathe of the Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: 'PS4'
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['ps4', 'macOS', 'Linux', 'PC', 'Xbox One', 'Nintendo Switch', 'PSVita', 'ios', 'Android']
    }
]

const [{ title: gameOne, developer }, gameTwo, { title: gameThree }] = games;
console.log(gameOne, developer);
console.log(gameTwo);
console.log(gameThree);

const games = [
    {
        title: 'Legend of Zelda: Breathe of the Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: 'PS4'
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['ps4', 'macOS', 'Linux', 'PC', 'Xbox One', 'Nintendo Switch', 'PSVita', 'ios', 'Android']
    }
]

for (let game of games) {
    console.log(game);
}

for ({ title, developer } of games) {
    console.log(`${title} is developed by ${developer}`)
}

for ({ title, developer } of games) {
    for (p in platforms) {
        console.log(`${title} is on ${platforms[p]}`);
    }
}