/*
    DATA and STRUCTURE TYPES:
-primitive data types:
    -boolean
    -undefined
    -string
    -number
    -bigInt*
    -symb*
-null
-object
-function
*/

/*
    BOOLEAN:
A boolean has two possible values: true and false
*/
/*example:
let on = true;
let off = false;

console.log(on);
console.log(off);
*/

/*
    NULL:
A null value is an empty value. Think of it as an empty container that has space to fill. NOTE: null and undefined are two different things.
*/
/*Example:
let empty = null;
console.log(empty);
*/

/*
    UNDEFINED:
No value has been assigned and doesn't even act as an empty container.
*/
/*Example: both ways maked undefined
let unknown;
let undef = undefined;
console.log(unknown);
*/
//what's the difference between null and undefined?
/*
-Null is like a labled moving box
-Undefined is the extra box waiting to be used.
*/

/*
    NUMBERS:
Literally just numbers. More than 16 numbers you may run into JS rounding up, also not great with decimals.
*/
/*Example:
let degrees = 82;
console.log(degrees);

let notQuite = 0.2 + 0.1;
console.log(notQuite);
*/

/*
    STRINGS:
Strings represent text are wrapped in either single or double quotes. Can use double or single quote inside quote.
*/
/*Example: 
let doubleQuote = "double Quotes";
let singleQuote = 'singleQuote';
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = "I said, 'wow cool!'";
let bothQuotesAlt = 'I said, "wow cool"';
console.log(bothQuotes);
console.log(bothQuotesAlt);

let contraction = "now it can't work";
let contractionAlt = 'now it can\'t work';
console.log(contraction);
console.log(contractionAlt);
*/

/*Numbers and Strings eamples
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlt = '1050' + '100';
console.log(addTheseAlt);

//We can use an operation called 'typeof' to return a string of the variable's type(type of variable it is).
console.log(typeof addTheseAlt);
console.log(typeof addThese);
*/
/*
    OBJECTS:
Objects are used to store many values instead of just one.
consider them as a collection of different variables in the container
denoted by curly brackets {}
*/
/*Example:
let frodo = {
    //an object has many properties inside of it
    race: 'Hobbit', //string
    //name : value
    //for multi must be seperated by comma.
    rings: 1, //number
    sting: true, //boolean
}
console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); //to pull one of the defined values use period after declaration.
*/

/*
    ARRAYS
Containers that hold a list of items denoted by square brackets []
all items are within the square brackets.
Regardless of the data type, all items are seperated by commas.
*/
/*Example
let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherExample = ['muffins', '27', ['inner', 'array'], 'mood'];
console.log(anotherExample);

console.log(typeof anotherExample); //JS considers arrays as objects
console.log(anotherExample[0]); //to get single info from list of array use [] and number starts at 0
*/

/*
    ADDITION vs CONCATENATION
JS sees the + symbol in two different ways
-when we use it with numbers, it will use the built-in math functionality
-when using strings, it will ignore the math functionality and concats, or combines, the two strings into one.
*/
/*Example:
let string = 'one' + ' ' + 'is a number';
console.log(string);
*/

/*
    STRING PROPERTIES:
Properties are qualities associated with data type. Strings have properties, or qualities, associated with them the length of a string is a property.
*/
/*Example
let myName = 'Kali'
console.log(myName.length);
*/

/*
    STRING METHODS:
methods are tools that can help us manipulate data
.property .method()
no parens   parans
*/
/*Example:*/
let myNameIs = 'Kali'
console.log(myNameIs);
console.log(myNameIs.toUpperCase());

let home = 'My home is in Fishers'