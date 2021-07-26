/*
-populating and referring
-methods
-length
-iterating
*/
// POPULATING & REFERRING:  

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
/*
When calling an array, we can append, or add, [] onto the end of an array name with index number of the
value we want to reference. This is known as SQUARE BRACKET NOTATION.

JS starts counting at 0, so when we console.log(list[1]) we should see 'banana'.
*/

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Mathew',
    'Shake n bake', 'Sophie'], 15 % 5];
//can put equations in array.
console.log([10]);
console.log(typeof students); //arrays are technically objects
//arrays change the object name(key) to number starting at 0.
//The instanceof operator is used to check the type of an object at run time.
//!Challenge:
//console.log from the students array:
/*  -the name Matthew (from first array)
    -the number 25
    -the phrase 'Shake n Bake'
    -print out 'Hello Sophie
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Mathew',
    'Shake n bake', 'Sophie'], 15 % 5];

console.log(students[4], students[7], students[9][1], `Hello ${students[9][2]}`);

console.log(`Hello ${students[9][2]}`); //interpolation
console.log(`Hello`, students[9][2]); //console 2 things
console.log('Hello' + students[9][2]); //concatinate

/*
    ARRAY METHODS:
We can call on multiple different array methods that will allow us to manipulate arrays as we need to.
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
//can add to our array.
food.push('Pizza'); //will add to the end of the array
console.log('push:', food);
console.log(food.push('Spring Onion'));//gives the length of array

food.unshift();//will add to the front of array.
console.log('Unshift:', food.unshift);

//Remove from array
food.pop();//This should remove item from the array. If the () is empty will remove the last thing in array.
console.log(`pop:`, food);

food.shift();//takes away the first thing in array.
console.log('Shift:', food.shift);

//Remove and/or insert item(s) from an array. (position to remove, how many to remove, what to add to location)
food.splice(2, 1, 'bananas');
console.log('Splice:', food);

//LENGTH
let long = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length); //11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);//6

/*
    ITERATING:
forEach-
-forEach() method executes a provided function once for each element in the array.
-the forEach() method does the same thing as a for loop or a for of loop -->both iterate over the
properties in an array.
-provide a callback function that has up to 3 arguments:
    1. the value
    2. the index
    3. the array object itself
*/
let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for (let i = 0; i < colorList.length; i++) {
    console.log(colorList[i]);
}//cycles through each think in list.

//should grab item in list and consol.log it.
colorList.forEach( //forEach replaces let i=0; i<colorList.length; i++
    color => console.log(color)
);//a callback function is a function that is either called or passed as a parameter to antoher function

//let something = (somethingElse) => {/*code here*/} <-arrow function

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
let logItem = item => console.log(item);
colorList.forEach(logItem); //still passing function just defined somewhere else.

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];
colorList.forEach((item, index) => {
    console.log(item); //shows the string
    console.log(index); //shows number each string assigned to.
}
)