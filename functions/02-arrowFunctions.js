/*
    ARROW FUNCTIONS:
Arrow functions are expressional functions that can be simplified into one of two forms: concise body and
block body. The main goal is to generate shorter syntax for writing a function.
*/
//Regular function:
function regFunc() {
    console.log('Just a regular function');
}
regFunc();

//Arrow function:
//       (1)   (2) (3)      (4)
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/*
1: a variable created to hold the value of our anonymous arrow function.
    -Arrow functions are always anonymous.
2: parameters are still capable of being added
    -Parameters go in the () as they would with a normal function, but if we only have one, no more or less,
    parameters, we do not need (). If we have no parameters we are still required to put ().
3: "How we see an arrow". This is JS syntax that says we are about to process a function
4: the code the arrow function will run.
*/
//Arrow function with param:
let arrow = (x) => console.log(x);
arrow(10);

//! CONCISE vs BLOCK BODY
/*
When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise,
simplified way. When we use a concise boy arrow function, the "return" statement is implied.
*/
//Example:
let conciseBody = (x, y) => x + y;
console.log(conciseBody(1, 2));

//Slightly complex concise:
let sCC = (x, y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2.`) :
    console.log(`${x} and ${y} are not.`);
sCC(3, 1);
sCC(2, 1);

/*
    BLOCK BODY FUNCTION:
*if you return you can keep info returned.
*/
let blockArrow = (x, y) => {
    return `${x} and ${y} are in a block body function`;
}
console.log(blockArrow(1, 2));

//! CHALLENGE: rewrite this function as a concise body arrow function.

let hero = 'Robin Hood';
let nock = 1;

function shot(x, y) {
    y < 3 ? console.log(`${x} only shot ${y} arrow..`) :
        console.log(`${x} shot ${y} arrows at the target!`);
};
shot(hero, nock);

let shotTwo = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow..`) :
    console.log(`${x} shot ${y} arrows at the target!`);
shotTwo(hero, nock);

//* Using a block body arrow, pass the same variables but increase the number of shots until the second
//* console.log is printed.
//1- block body arrow function (?)
//2- pass in 2 variables []
//3- run conditional []
//4- repeat the code until the result changes?

let hero = 'Robin Hood';
let nock = 1;

let shotThree = (x, y) => {
    for (y; y < 4; y++) {
        if (y < 3) {
            console.log(`${x} only shot ${y} arrow..`)
        } else {
            console.log(`${x} shot ${y} arrows at the target!`)
        };
    }
}
shotThree(hero, nock);