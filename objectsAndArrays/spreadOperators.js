/*
    SPREAD OPERATOR:
Spread operator cannot be used without an assar
*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];
console.log(copiedNames);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo]; //Spread operator is ... before the array name.
console.log(copiedNamesSpread);

console.log(nameTwo);
console.log(...nameTwo); //seperates array causing them to become strings.

/*
    ...NUMBERS:
*/

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(...prices))

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo',
        enemies: true
    }
];

const copiedPersons = persons; //roommates

persons.push({ name: 'Bill and or Ted', enemies: false });
console.log('Original: ', persons, 'Copy:', copiedPersons);
//an array is a reference type. not copying the value of persons, its copying location of value.

/*
-primitive variable = primitive value
let x = 10
let y = 'abc'
let z = null

variables:      values
x               10
y               'abc'
z               null
------------------------------
let x = 10
let y = 'abc'

let a = x
let b = y

console.log(x, y, a, b) --> would yield 10, 'abc', 10, 'abc'

if change value of a and b, x and y would not change/be affected.

--------------------------------
-3 data types that are passed by referrence
    -arrays
    -functions
    -objects
*all 3 are technically objects

-non primitive variables are given a reference to the value they 'contain' - this reference 'points' to a
location in memory.

------------------------------
let array = []
arr.push(1)

VARIABLES   VALUES  ADDRESS   OBJECT
arr         <#001>  #001      []
arr         <#001>  #001      [1] //array value does not change.

using = will change value of primitive value.

let reference = [1]
let refCopy = reference

VARIABLE    VALUES  ADDRESS   OBJECT
reference   <#001>  #001      [1]
refCopy     <#001>

*because the copy has the same address as reference they value does change if something pushed into array
*/

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo',
        enemies: true
    }
];

const copiedPersons = [...persons]; //neighbors

persons.push({ name: 'Bill and or Ted', enemies: false });

copiedPersons[0].name = 'Birdperson';
console.log('Original: ', persons, 'Copy:', copiedPersons);

/*
... & avoiding changing both the OG and the copy
*/

const comics = [
    {
        title: 'Spider-Man',
        year: 1962
    },
    {
        title: 'Detective Comics',
        year: 1939
    }
];

const copiedComics = comics.map(comic => ({ //.map changes address
    title: comic.title,
    year: comic.year
})) //concise function doesn't have {} so if we make an object we ()

comics.push({ title: 'Calvin and Hobbes', year: 1985 });
copiedComics[1].title = 'Detective Comics #27';
console.log(copiedComics);
