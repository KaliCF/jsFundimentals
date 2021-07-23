/*
    FUNCTIONS:
Functions are processes that we call upon to run an action. They can do the following:
-Take in an input to process, modify, or respond to (not required tho)
-Return a value (not required)
-Can be invoked (or called) as often as needed.
(A variable that does something.)
*/
//Example:
// (1)     (2)
function hi() {
    // (3)
    console.log('Hi!')
}
//1: function keyword- we use this to define a function
//2: name of the function, followed bt parenthesis- this is how we call the function
//3: code goes here- this will be the brains of the function
function hi() {
    console.log('Hi,')
}

let myName = 'Kali'
function myNameCap() {
    myName = myName.toUpperCase();
    hi();
}
myNameCap();
console.log(myName);

//When we console.log a function jS will first evaluted the function meaning will read all the code and look
//for a value from it. If we do not have a return statement from with in tht function we will get back undefined
//*avoid calling in a function in the same function because recursion happens(can melt comp)

/*
    FUNTIONS DECLARATION:
A chunk of code that performs a set chunk of code when it is invoked (called)
*calling a function is the same as invoking function.
*/
//Example:
function funcOne() {
    console.log('This is the code that we run in function one.')
}
funcOne();

/*
    FUNCTION EXPRESSIONS:
Assigning a function to a variable is what we call an expression.
*/
//Example:
let first = function funcTwo() {
    console.log('Code being run in the function expression');
}
first();

let example = function () {
    console.log('What\'s my name?')
}
example();

console.log(typeof example);

/*
    ANONYMOUS FUNCTIONS:
Anonymous functions are stored in memory but the runtime does not automatically create a reference to it.
Main use would be to pass these functions through another function. maybe have a ternaty where if something
is true we run one function, else we run a different function.
*/
//Example:
let anon = function () {
    console.log('Anonymous Function');
}
anon();

true || false ? function () { console.log('True') } : function () { console.log('False') }; //turnary version.

/*
    PARAMETERS:
We will be using functions to pass in information and return a result. Parameters will allow our function
to take in outside information.
*/
//Example:
function parameterFun(num) {
    console.log(num);
}
parameterFunc(7);
//Another Example:
function multiFunc(placeHolder) {
    console.log(placeHolder + 2);
}
multiFunc(4);
multiFunc('yo!, ');
multiFunc([1, 2, 3, 4,]);
//Another One:
function paramFunc(num) {
    console.log(num + 5);
    return num + 5;
}
let returnTest = 10;
let myReturn = paramFunc(returnTest);
console.log('Returns: ', myReturn);

//Exercise:
let firstName = 'Jane'
let lastName = 'Doe'

function greeting(first, last) {
    console.log(`Hi, ${first}! Welcome Back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}
greeting();
greeting(firstName);
greeting(lastName);
greeting(firstName, lastName);


