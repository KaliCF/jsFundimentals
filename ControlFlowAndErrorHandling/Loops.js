/*
    LOOPS:
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to 
note that it is possible for us to write code without declaring an endpoint. 
Loops help us repeat a process without writing alot of code.
NOTE: press ctrl + c while clicked in the output window, it will stop the  code from running.
*/

/*
    STRUCTURE:
We have to set up our loops in a way we can:
1) See where we are in a loop
2) Consider what sort of condition we want to run it against
3) Know when we are done with that condition and move on to the next iteration.

We need to:
1) Creat an Index
2) Run a condition
3) Change to the indexing variable (execution of conditions)
*/

//Lets count to 10:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

/*
We start our loop with a "for". Within this function, we are injecting some parameters that JS will run against. Index; condition, change index ->
result.
Within parameter, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less or equal to the number
10, take that set number and add 1 to it. Once that is processed, return that value (in this case 'console.log of that number). Once our condition
is met, we return a FALSE which ends our loop. 
NOTE (syntax):
for(<create an index variable>; <run condition>; <change index>){
    <return results>
    <cont. until the condition is met>
}

If we don't know what our condition is, the loop will not have a finish line and thus run until we have to force it closed. No condition means that JS
doesn't know when to stop and will never assume that information.
    Example:
for(let i = 0; i ++){
    console.log(i);
}
*/
//Challange:
//Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and consol.log
//each iteration.
for (let i = 2; i > -10; i -= 4) {
    console.log(i);
}

//We aren't limited by negative or positive numbers. We can cycle through variables assigned with strings.
//Example:
let word = 'supercalifragilisticexpialidocious'

for (let b = 0; b < word.length; b++) {
    console.log(b, word[b]);
    console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
    FOR IN LOOPS:
With for loops, we are seeking an index value and sunning it against a condition. For in loops do not require
an index number
*/
//Example:
//in loop:
let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}
for (info in city) {
    console.log(info);
    console.log(city[info]);
}
//array in loop:
let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
for (item in list) {
    console.log(item);
    console.log(list[item]);
}

//!Challange:
//Write a for loop over a name, and will capitalize the first letter, and make all other letters lower case.
let myName = 'dwiGht';
let propCase;
//++ is +=1
for (let letter = 0; letter < myName.length; letter += 1) {
    if (letter === 0) {
        propCase = myName[letter].toUpperCase();
    } else {
        propCase += myName[letter].toLowerCase();
    }
}
console.log(propCase);

//teacher example
for (let i = 0; i >= 10; i += 1) {
    console.log(i)
}

//console.log(myName[0]) would get first letter in myName alone.

/*
    FOR IN VERSION:
*/
let myName = 'dwIght'
let propCase; //<-not assigned a value because we are crfeating its value in the loop.
for (index in myName) {
    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}
console.log(propCase);
/*NOTE: index is usually used when looking at the position of a letter/number in a variable.

*/

/*
    FOR OF LOOP:
In order to run a for of loop, the 'thing' must be numbered liek an array

*/

let myObject = {
    string: 'peter',
    boolean: true,
    number: 1
};

for (item of myObject) {
    console.log(item);
}
//NOTE: objects do not have an assigned value

let myObject = {
    string: 'peter',
    boolean: true,
    number: 1
};

let indexArray = ['spot 1', 2, true, 'not fifth'];

for (let pos of indexArray) {
    console.log(pos, 'was run through a "for of" loop')
}

/*
for(variable of iterable){
    code goes here
}
*an interable is something that has numbers assigned to it like an array, where the first item assigned a 0,
*the second a 1, and so on... [eg. Arrays, Strings]
*/
let officeChar = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for (worker of officeChar) {
    if (worker === 'Dwight' || worker === 'Michael') {
        console.log(worker, "Works in the office");
    }
    if (worker === 'Jim' && worker !== 'Dwight') {
        console.log('Bears, beets, Battlestar Galactica');
    }
}