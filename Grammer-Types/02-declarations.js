/*
What is a variable?
    Variables are named containers for sorting data.
    We can think of these as resources we can call upon later. Each variable allows
    us to store data, which could be a value or a function, that we will want to reference back to.
*/
let a = 2;

/* 
    -"let" is our KEYWORD
    -"a" is our NAME of the variable
    -"=" is our ASSIGNMENT OPERATOR
    -"2" is our variable's value
*/

let b = 1;

console.log(a + b);

/*
    Restictions:
    -A variable must begin with a letter, underscore, or dollar sign,
    -Number may follow the above character, but cannot come first in the name.
    -JavaScript is case sensitive- 'hello' and 'Hello' are different.
    -No spaces are allowed in variable names.
    -camelCase is best practice for naming variables in JS. This will help keep names of variables readable.
        ex:
            let myName = 'kali';
            is easier to read than
            let myname = 'kali';
*/

let startingWithLetter = 'test';
let _startingWithUnderscore = 'test';
let $startingWithDollarSign = 'test';

console.log(_startingWithUnderscore, startingWithLetter, $startingWithDollarSign);
//ctrl + alt + n will run code runner

/*
    KEYWORDS
    var, let, const
    -var: the 'old' keyword for variables. We will not use this much but it is till used depending on the project and when it was made.
    -let: the 'new' word for variable. Was introduced in ES6 *newest version of ECMAscript, which is standardized of JS.
    -const: also 'new' and declared an unchangable, or constant, variable.
*/

var variableTest = 'var variable';
let letVariable = 'let variable';
const constVariable = 'const variable';

console.log(variableTest, letVariable, constVariable);

/* FOR CONSTANTS DECLARATION AND INITIALIZATION MUST BE ON SAME LINE.
Declarations are the LEFT SIDE of the assignment operator (=) within a variable.
    -let x
Initialations are the RIGHT SIDE of the assignment operator (=) and sets the value of the variable.
    -let x = 10
    10 would be the initialization.
*/