//!Challenge:
//*write a for loop that counts from 1 to 100.
//*for numbers that are evenly divisable by 3, print 'FIZZ'
//*for numbers that are divisable by 5 print 'BUZZ'
//*for numbers that are divisable by 3 and 5 print 'FIZZ BUZZ'

for (let i = 0; i < 101; i++) {
    console.log(i);
    if (i % 3 == 0)
        console.log(`FIZZ`);
    if (i % 5 == 0)
        console.log(`BUZZ`)
}

//another way to do the same thing:

for (let l = 1; l < 101; l++) {
    if (l % 3 === 0 && l % 5 === 0) { //could also just put if(l % 15 == 0)
        console.log(`FIZZ BUZZ`)
    } else if (l % 3 === 0) {
        console.log(`FIZZ`)
    } else if (l % 5 === 0) {
        console.log(`BUZZ`)
    } else { console.log(l) }
}
//want to put the most demanding request first cause will stop after first true.

/*
Challenge #3
Write a function called findPerimeter() that accepts 2 parameters called: "length" and "width".
The function should return an interpolated string of "True.  The perimeter is ___" if the perimeter is over 20.
The function should return an interpolated string of "False.  The perimeter is ___" if the perimeter is under 20.
This function should be active.
*/
function findPerimeter(length, width) {
    let x = length * 2 + width * 2;
    if (x > 20) {
        console.log(`True. The perimeter is ${x}`)
    } else { console.log(`False. The perimeter is ${x}`) }
}
findPerimeter(5, 3);

//!Challenge:
//Move the button into a variable, and when you click the button it will turn blue or if blue turns red

let button = document.getElementById('clickThis');

button.addEventListener('click', ev => {
    console.log(ev.target.style.backgroundColor);
    if (ev.target.style.backgroundColor == 'blue') {
        ev.target.style.backgroundColor = 'red';
    } else {
        ev.target.style.backgroundColor = 'blue';
    }
})

//! Challenge
//create a function that takes in a string and turns it to pig latin.
/*
1. make function
2. variables in a loop
3. for loop
4. if else
5. console.log
6. call function
*/

function pigLatin(string) {
    let wordArray = string.split(' ');

    let newWordArray = [];

    for (let word of wordArray) {
        if (word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u') {
            word += 'ay' //basically means word = word + 'ay'
            newWordArray.push(word);
        } else {
            let letters = word.split('');
            let shift = letters.shift();
            letters.push(shift, 'ay');
            word = letters.join('');
            newWordArray.push(word);
        }
    }
    console.log(newWordArray.join(' '));
}

pigLatin('pig latin is cool');